import type { Env, PressyManifest, PressyBookManifest, PressyMiddlewareOptions } from './types.js'
import { parseCookies, verifyCookie, cookieName } from './auth.js'
import {
  handleCheckout,
  handleWebhook,
  handleAuthCallback,
  handleAuthStatus,
  handleRecoverPurchase,
  handleVerifyToken,
} from './stripe.js'

const NO_CACHE = { 'Cache-Control': 'no-store' }
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
}

let cachedManifest: PressyManifest | null = null

async function loadManifest(env: Env): Promise<PressyManifest> {
  if (cachedManifest) return cachedManifest

  const response = await env.ASSETS.fetch(new Request('https://placeholder/_pressy/manifest.json'))
  if (!response.ok) {
    throw new Error(`Failed to load _pressy/manifest.json: ${response.status}`)
  }
  cachedManifest = (await response.json()) as PressyManifest
  return cachedManifest
}

function matchChapterRoute(pathname: string): { bookSlug: string; chapterSlug: string } | null {
  // Match /books/{bookSlug}/{chapterSlug} with optional trailing slash
  const match = pathname.match(/^\/books\/([^/]+)\/([^/]+)\/?$/)
  if (!match) return null
  return { bookSlug: match[1], chapterSlug: match[2] }
}

function isChapterPaid(
  book: PressyBookManifest,
  chapterSlug: string,
): boolean {
  if (!book.paywall?.enabled) return false

  const chapter = book.chapters.find((ch) => ch.slug === chapterSlug)
  if (!chapter) return false

  return chapter.order >= book.paywall.previewChapters
}

async function isAuthorized(
  request: Request,
  bookSlug: string,
  secret: string,
): Promise<boolean> {
  const cookieHeader = request.headers.get('cookie')
  if (!cookieHeader) return false

  const cookies = parseCookies(cookieHeader)
  const authCookie = cookies[cookieName(bookSlug)]
  if (!authCookie) return false

  const payload = await verifyCookie(authCookie, secret)
  return payload !== null && payload.book === bookSlug
}

/**
 * KV-based rate limiter. Returns true if the request should be blocked.
 */
async function rateLimit(
  kv: KVNamespace,
  key: string,
  limit: number,
  windowSec: number,
): Promise<boolean> {
  const rlKey = `ratelimit:${key}`
  const existing = await kv.get(rlKey)
  const count = existing ? parseInt(existing, 10) : 0

  if (count >= limit) return true

  await kv.put(rlKey, String(count + 1), { expirationTtl: windowSec })
  return false
}

function getClientIp(request: Request): string {
  return request.headers.get('cf-connecting-ip')
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || 'unknown'
}

function addSecurityHeaders(response: Response): Response {
  const newHeaders = new Headers(response.headers)
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) {
    newHeaders.set(k, v)
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  })
}

function methodNotAllowed(): Response {
  return new Response('Method not allowed', { status: 405, headers: { ...NO_CACHE, ...SECURITY_HEADERS } })
}

/** Minimal subset of Cloudflare Pages EventContext that the middleware uses. */
export interface PressyContext {
  request: Request
  env: Env
  next: () => Promise<Response>
}

export function createPressyMiddleware(
  optionsOrFactory?: PressyMiddlewareOptions | ((env: Env & Record<string, unknown>) => PressyMiddlewareOptions),
) {
  return async (context: PressyContext): Promise<Response> => {
    const { request, env, next } = context
    const url = new URL(request.url)
    const pathname = url.pathname

    const options: PressyMiddlewareOptions = typeof optionsOrFactory === 'function'
      ? optionsOrFactory(env as Env & Record<string, unknown>)
      : optionsOrFactory ?? {}

    // Route API requests
    if (pathname.startsWith('/api/')) {
      const response = await handleApiRoute(request, env, pathname, url, options)
      return addSecurityHeaders(response)
    }

    // Check if this is a chapter URL that needs paywall enforcement
    const chapterMatch = matchChapterRoute(pathname)
    if (!chapterMatch) {
      return next()
    }

    let manifest: PressyManifest
    try {
      manifest = await loadManifest(env)
    } catch {
      // If manifest can't be loaded, pass through
      return next()
    }

    const book = manifest.books.find((b) => b.slug === chapterMatch.bookSlug)
    if (!book) {
      return next()
    }

    if (!isChapterPaid(book, chapterMatch.chapterSlug)) {
      return next()
    }

    // Chapter is paid — check authorization
    const authorized = await isAuthorized(request, book.slug, env.COOKIE_SECRET)
    if (authorized) {
      return next()
    }

    // Not authorized — redirect to book page with purchase prompt
    return new Response(null, {
      status: 302,
      headers: { Location: `/books/${book.slug}/?purchase=true`, ...NO_CACHE },
    })
  }
}

function missingEnvError(...names: string[]): Response {
  const hint = names.map((n) => `wrangler pages secret put ${n}`).join(', ')
  return new Response(
    JSON.stringify({ error: `Missing required environment variable(s): ${names.join(', ')}. Set via: ${hint}` }),
    { status: 500, headers: { 'Content-Type': 'application/json', ...NO_CACHE } },
  )
}

// Route → allowed method(s) mapping
const ROUTE_METHODS: Record<string, string> = {
  '/api/checkout': 'GET',
  '/api/stripe-webhook': 'POST',
  '/api/auth/callback': 'GET',
  '/api/auth/status': 'GET',
  '/api/auth/recover': 'POST',
  '/api/auth/verify': 'GET',
}

async function handleApiRoute(
  request: Request,
  env: Env,
  pathname: string,
  url: URL,
  options: PressyMiddlewareOptions,
): Promise<Response> {
  // Method enforcement
  const allowedMethod = ROUTE_METHODS[pathname]
  if (allowedMethod && request.method !== allowedMethod) {
    return methodNotAllowed()
  }

  // Rate limiting for auth endpoints
  if (pathname.startsWith('/api/auth/')) {
    const ip = getClientIp(request)
    const blocked = await rateLimit(env.PRESSY_KV, `auth:${ip}`, 60, 60)
    if (blocked) {
      return new Response('Too many requests', { status: 429, headers: NO_CACHE })
    }
  }

  let manifest: PressyManifest
  try {
    manifest = await loadManifest(env)
  } catch {
    return new Response('Manifest not found', { status: 500 })
  }

  // GET /api/checkout?book=SLUG
  if (pathname === '/api/checkout') {
    if (!env.STRIPE_SECRET_KEY) return missingEnvError('STRIPE_SECRET_KEY')
    const bookSlug = url.searchParams.get('book')
    if (!bookSlug) {
      return new Response('Missing book parameter', { status: 400 })
    }
    const book = manifest.books.find((b) => b.slug === bookSlug)
    if (!book) {
      return new Response('Book not found', { status: 404 })
    }
    return handleCheckout(request, env, book)
  }

  // POST /api/stripe-webhook
  if (pathname === '/api/stripe-webhook') {
    if (!env.STRIPE_SECRET_KEY) return missingEnvError('STRIPE_SECRET_KEY')
    if (!env.STRIPE_WEBHOOK_SECRET) return missingEnvError('STRIPE_WEBHOOK_SECRET')
    return handleWebhook(request, env)
  }

  // GET /api/auth/callback?session_id=xxx (single-use post-checkout redirect)
  if (pathname === '/api/auth/callback') {
    if (!env.STRIPE_SECRET_KEY) return missingEnvError('STRIPE_SECRET_KEY')
    if (!env.COOKIE_SECRET) return missingEnvError('COOKIE_SECRET')
    return handleAuthCallback(request, env, manifest)
  }

  // GET /api/auth/status?book=SLUG
  if (pathname === '/api/auth/status') {
    if (!env.COOKIE_SECRET) return missingEnvError('COOKIE_SECRET')
    const bookSlug = url.searchParams.get('book')
    if (!bookSlug) {
      return new Response(JSON.stringify({ authorized: false }), {
        headers: { 'Content-Type': 'application/json', ...NO_CACHE },
      })
    }
    const authorized = await isAuthorized(request, bookSlug, env.COOKIE_SECRET)
    return handleAuthStatus(request, env, authorized)
  }

  // POST /api/auth/recover — sends magic link email
  if (pathname === '/api/auth/recover') {
    if (!env.COOKIE_SECRET) return missingEnvError('COOKIE_SECRET')

    // Stricter rate limit for recover: 3 per 15 minutes per email
    try {
      const body = await request.clone().json() as { email?: string }
      const email = body.email?.trim().toLowerCase()
      if (email) {
        const emailBlocked = await rateLimit(env.PRESSY_KV, `recover:${email}`, 3, 15 * 60)
        if (emailBlocked) {
          return new Response('Too many requests', { status: 429, headers: NO_CACHE })
        }
      }
    } catch {
      // Body parse error will be handled by handleRecoverPurchase
    }

    return handleRecoverPurchase(request, env, manifest, options.sendEmail)
  }

  // GET /api/auth/verify?token=xxx — validates magic link, issues cookie
  if (pathname === '/api/auth/verify') {
    if (!env.COOKIE_SECRET) return missingEnvError('COOKIE_SECRET')
    return handleVerifyToken(request, env, manifest)
  }

  return new Response('Not found', { status: 404 })
}
