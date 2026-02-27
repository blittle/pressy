import Stripe from 'stripe'
import type { Env, PressyBookManifest, PurchaseRecord, EmailSender } from './types.js'
import { signCookie, setCookieHeader, cookieName, COOKIE_MAX_AGE, signMagicToken, verifyMagicToken, MAGIC_LINK_TTL } from './auth.js'
import { buildMagicLinkEmail } from './email.js'

const NO_CACHE = { 'Cache-Control': 'no-store' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const BOOK_SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

async function sha256hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

function getStripe(secretKey: string): Stripe {
  return new Stripe(secretKey, { apiVersion: '2025-02-24.acacia' })
}

function getBaseUrl(request: Request): string {
  const url = new URL(request.url)
  return `${url.protocol}//${url.host}`
}

function nowEpoch(): number {
  return Math.floor(Date.now() / 1000)
}

// ── Checkout ─────────────────────────────────────────────────

export async function handleCheckout(
  request: Request,
  env: Env,
  book: PressyBookManifest,
): Promise<Response> {
  const stripe = getStripe(env.STRIPE_SECRET_KEY)
  const baseUrl = getBaseUrl(request)

  if (!book.paywall?.stripePriceId) {
    return new Response('Book has no Stripe product configured', { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: book.paywall.stripePriceId, quantity: 1 }],
    success_url: `${baseUrl}/api/auth/callback?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/books/${book.slug}/`,
    metadata: { bookSlug: book.slug },
  })

  return Response.redirect(session.url!, 303)
}

// ── Webhook ──────────────────────────────────────────────────

export async function handleWebhook(
  request: Request,
  env: Env,
): Promise<Response> {
  const stripe = getStripe(env.STRIPE_SECRET_KEY)
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return new Response('Missing stripe-signature header', { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, env.STRIPE_WEBHOOK_SECRET)
  } catch {
    return new Response('Webhook signature verification failed', { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const bookSlug = session.metadata?.bookSlug
    const email = session.customer_details?.email

    if (bookSlug && email) {
      const record: PurchaseRecord = {
        sessionId: session.id,
        email,
        bookSlug,
        amount: session.amount_total || 0,
        purchasedAt: new Date().toISOString(),
      }

      await env.PRESSY_KV.put(
        `purchase:${email}:${bookSlug}`,
        JSON.stringify(record),
        { expirationTtl: 5 * 365 * 24 * 60 * 60 }, // 5 years
      )
    }
  }

  return new Response('ok', { status: 200 })
}

// ── Auth callback (post-checkout redirect) ───────────────────

export async function handleAuthCallback(
  request: Request,
  env: Env,
  manifest: { books: PressyBookManifest[] },
): Promise<Response> {
  const url = new URL(request.url)
  const sessionId = url.searchParams.get('session_id')

  if (!sessionId) {
    return new Response('Missing session_id', { status: 400, headers: NO_CACHE })
  }

  // Single-use: reject if this session_id has already been consumed
  const consumedKey = `callback-consumed:${sessionId}`
  const alreadyConsumed = await env.PRESSY_KV.get(consumedKey)
  if (alreadyConsumed) {
    return new Response('This link has already been used', { status: 410, headers: NO_CACHE })
  }

  const stripe = getStripe(env.STRIPE_SECRET_KEY)
  const session = await stripe.checkout.sessions.retrieve(sessionId)

  if (session.payment_status !== 'paid') {
    return new Response('Payment not completed', { status: 402, headers: NO_CACHE })
  }

  const bookSlug = session.metadata?.bookSlug
  const email = session.customer_details?.email
  if (!bookSlug || !email) {
    return new Response('Invalid session metadata', { status: 400, headers: NO_CACHE })
  }

  const book = manifest.books.find((b) => b.slug === bookSlug)
  if (!book) {
    return new Response('Book not found', { status: 404, headers: NO_CACHE })
  }

  // Mark session as consumed (keep for 24h — long enough to prevent replay)
  await env.PRESSY_KV.put(consumedKey, '1', { expirationTtl: 24 * 60 * 60 })

  // Record purchase in KV (in case webhook hasn't fired yet)
  const record: PurchaseRecord = {
    sessionId: session.id,
    email,
    bookSlug,
    amount: session.amount_total || 0,
    purchasedAt: new Date().toISOString(),
  }
  await env.PRESSY_KV.put(
    `purchase:${email}:${bookSlug}`,
    JSON.stringify(record),
    { expirationTtl: 5 * 365 * 24 * 60 * 60 },
  )

  // Sign and set auth cookie with expiration
  const cookieValue = await signCookie(
    {
      book: bookSlug,
      email,
      purchasedAt: record.purchasedAt,
      sessionId,
      exp: nowEpoch() + COOKIE_MAX_AGE,
    },
    env.COOKIE_SECRET,
  )

  // Redirect to first paid chapter
  const firstPaidChapter = book.chapters.find(
    (ch) => ch.order >= (book.paywall?.previewChapters || 0),
  )
  const redirectPath = firstPaidChapter
    ? `/books/${bookSlug}/${firstPaidChapter.slug}/`
    : `/books/${bookSlug}/`

  return new Response(null, {
    status: 302,
    headers: {
      Location: redirectPath,
      'Set-Cookie': setCookieHeader(cookieName(bookSlug), cookieValue),
      ...NO_CACHE,
    },
  })
}

// ── Auth status check ────────────────────────────────────────

export async function handleAuthStatus(
  _request: Request,
  _env: Env,
  authorized: boolean,
): Promise<Response> {
  return new Response(JSON.stringify({ authorized }), {
    headers: { 'Content-Type': 'application/json', ...NO_CACHE },
  })
}

// ── Recover purchase (sends magic link) ──────────────────────

export async function handleRecoverPurchase(
  request: Request,
  env: Env,
  manifest: { books: PressyBookManifest[] },
  sendEmail?: EmailSender,
): Promise<Response> {
  // Must be POST — state-changing operation
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: NO_CACHE })
  }

  let body: { email?: string; book?: string }
  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...NO_CACHE },
    })
  }

  const email = body.email?.trim().toLowerCase()
  const bookSlug = body.book

  if (!email || !bookSlug) {
    return new Response(JSON.stringify({ error: 'Missing email or book' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...NO_CACHE },
    })
  }

  if (!EMAIL_RE.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email format' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...NO_CACHE },
    })
  }

  if (!BOOK_SLUG_RE.test(bookSlug)) {
    return new Response(JSON.stringify({ error: 'Invalid book slug' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...NO_CACHE },
    })
  }

  const book = manifest.books.find((b) => b.slug === bookSlug)
  if (!book) {
    return new Response(JSON.stringify({ error: 'Book not found' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...NO_CACHE },
    })
  }

  // Look up purchase — but DON'T reveal whether the email exists.
  // Always return the same success message to prevent email enumeration.
  const record = await env.PRESSY_KV.get(`purchase:${email}:${bookSlug}`)

  if (record) {
    // Purchase exists — send magic link email
    const baseUrl = getBaseUrl(request)
    const token = await signMagicToken(
      { email, bookSlug, exp: nowEpoch() + MAGIC_LINK_TTL },
      env.COOKIE_SECRET,
    )
    const verifyUrl = `${baseUrl}/api/auth/verify?token=${encodeURIComponent(token)}`

    const book = manifest.books.find((b) => b.slug === bookSlug)
    const bookTitle = book?.paywall?.price
      ? bookSlug // We don't have the book title in the manifest, use slug
      : undefined

    if (!sendEmail) {
      return new Response(JSON.stringify({ error: 'Email sending is not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...NO_CACHE },
      })
    }

    try {
      await sendEmail({
        to: email,
        subject: 'Recover your book purchase',
        html: buildMagicLinkEmail(verifyUrl, bookTitle),
        verifyUrl,
        bookTitle,
      })
    } catch {
      return new Response(JSON.stringify({ error: 'Failed to send email. Please try again.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...NO_CACHE },
      })
    }
  }

  // Same response regardless of whether purchase was found (anti-enumeration)
  return new Response(
    JSON.stringify({ sent: true, message: 'If a purchase exists for this email, a recovery link has been sent.' }),
    { headers: { 'Content-Type': 'application/json', ...NO_CACHE } },
  )
}

// ── Verify magic link token ──────────────────────────────────

export async function handleVerifyToken(
  request: Request,
  env: Env,
  manifest: { books: PressyBookManifest[] },
): Promise<Response> {
  const url = new URL(request.url)
  const token = url.searchParams.get('token')

  if (!token) {
    return new Response('Missing token', { status: 400, headers: NO_CACHE })
  }

  // Verify HMAC signature and expiration
  const payload = await verifyMagicToken(token, env.COOKIE_SECRET)
  if (!payload) {
    return new Response('Invalid or expired link. Please request a new one.', {
      status: 403,
      headers: NO_CACHE,
    })
  }

  // Validate payload fields
  if (!EMAIL_RE.test(payload.email) || !BOOK_SLUG_RE.test(payload.bookSlug)) {
    return new Response('Invalid token payload', { status: 400, headers: NO_CACHE })
  }

  if (!manifest.books.find((b) => b.slug === payload.bookSlug)) {
    return new Response('Book not found', { status: 400, headers: NO_CACHE })
  }

  // Single-use: prevent replay (hash full token to avoid prefix collisions)
  const tokenHash = await sha256hex(token)
  const consumedKey = `magic-consumed:${tokenHash}`
  const alreadyConsumed = await env.PRESSY_KV.get(consumedKey)
  if (alreadyConsumed) {
    return new Response('This link has already been used.', { status: 410, headers: NO_CACHE })
  }

  // Confirm the purchase still exists in KV
  const record = await env.PRESSY_KV.get(`purchase:${payload.email}:${payload.bookSlug}`)
  if (!record) {
    return new Response('No purchase found', { status: 404, headers: NO_CACHE })
  }

  const purchase: PurchaseRecord = JSON.parse(record)
  const book = manifest.books.find((b) => b.slug === payload.bookSlug)

  // Mark token as consumed (keep for the token's TTL — 15 min is plenty)
  await env.PRESSY_KV.put(consumedKey, '1', { expirationTtl: MAGIC_LINK_TTL })

  // Issue auth cookie
  const cookieValue = await signCookie(
    {
      book: payload.bookSlug,
      email: payload.email,
      purchasedAt: purchase.purchasedAt,
      sessionId: purchase.sessionId,
      exp: nowEpoch() + COOKIE_MAX_AGE,
    },
    env.COOKIE_SECRET,
  )

  // Redirect to first paid chapter
  const firstPaidChapter = book?.chapters.find(
    (ch) => ch.order >= (book?.paywall?.previewChapters || 0),
  )
  const redirectPath = firstPaidChapter
    ? `/books/${payload.bookSlug}/${firstPaidChapter.slug}/`
    : `/books/${payload.bookSlug}/`

  return new Response(null, {
    status: 302,
    headers: {
      Location: redirectPath,
      'Set-Cookie': setCookieHeader(cookieName(payload.bookSlug), cookieValue),
      ...NO_CACHE,
    },
  })
}
