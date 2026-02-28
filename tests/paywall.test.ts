import { describe, it, expect, vi, type Mock } from 'vitest'

// Mock stripe before any imports that reference it
vi.mock('stripe', () => ({ default: vi.fn() }))

import {
  signCookie,
  verifyCookie,
  parseCookies,
  signMagicToken,
  verifyMagicToken,
  cookieName,
  COOKIE_MAX_AGE,
  MAGIC_LINK_TTL,
} from '../packages/@pressy/cloudflare/src/auth.js'
import { createPressyMiddleware } from '../packages/@pressy/cloudflare/src/middleware.js'
import type { Env, PressyManifest, PurchaseRecord } from '../packages/@pressy/cloudflare/src/types.js'

// ── Shared fixtures ─────────────────────────────────────────

const TEST_SECRET = 'test-secret-key-that-is-at-least-32-chars!'

const TEST_MANIFEST: PressyManifest = {
  books: [
    {
      slug: 'test-book',
      paywall: {
        enabled: true,
        previewChapters: 2,
        price: '$9.99',
        stripePriceId: 'price_test',
      },
      chapters: [
        { slug: 'chapter-1', order: 0 },
        { slug: 'chapter-2', order: 1 },
        { slug: 'chapter-3', order: 2 }, // first paid chapter
        { slug: 'chapter-4', order: 3 },
      ],
    },
  ],
}

function nowEpoch(): number {
  return Math.floor(Date.now() / 1000)
}

async function sha256hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

function createMockEnv(kvStore = new Map<string, string>()) {
  return {
    ASSETS: {
      fetch: async () =>
        new Response(JSON.stringify(TEST_MANIFEST), {
          headers: { 'Content-Type': 'application/json' },
        }),
    },
    PRESSY_KV: {
      get: async (key: string) => kvStore.get(key) ?? null,
      put: async (key: string, value: string, _opts?: unknown) => {
        kvStore.set(key, value)
      },
    },
    STRIPE_SECRET_KEY: 'sk_test_fake',
    STRIPE_WEBHOOK_SECRET: 'whsec_fake',
    COOKIE_SECRET: TEST_SECRET,
  } as unknown as Env
}

async function requestWithAuthCookie(url: string, bookSlug: string): Promise<Request> {
  const payload = {
    book: bookSlug,
    email: 'test@example.com',
    purchasedAt: new Date().toISOString(),
    sessionId: 'sess_test',
    exp: nowEpoch() + COOKIE_MAX_AGE,
  }
  const signed = await signCookie(payload, TEST_SECRET)
  return new Request(url, {
    headers: { cookie: `${cookieName(bookSlug)}=${signed}` },
  })
}

// ── Auth crypto ─────────────────────────────────────────────

describe('auth crypto', () => {
  it('signCookie → verifyCookie roundtrip returns original payload', async () => {
    const payload = {
      book: 'test-book',
      email: 'user@example.com',
      purchasedAt: '2024-01-15T00:00:00.000Z',
      sessionId: 'sess_abc',
      exp: nowEpoch() + COOKIE_MAX_AGE,
    }
    const signed = await signCookie(payload, TEST_SECRET)
    const verified = await verifyCookie(signed, TEST_SECRET)
    expect(verified).toEqual(payload)
  })

  it('expired cookie returns null', async () => {
    const payload = {
      book: 'test-book',
      email: 'user@example.com',
      purchasedAt: '2024-01-15T00:00:00.000Z',
      sessionId: 'sess_abc',
      exp: nowEpoch() - 60, // expired 1 minute ago
    }
    const signed = await signCookie(payload, TEST_SECRET)
    const verified = await verifyCookie(signed, TEST_SECRET)
    expect(verified).toBeNull()
  })

  it('tampered cookie returns null', async () => {
    // Sign a legitimate cookie, then swap in a different payload
    // while keeping the original HMAC — should be rejected by signature check
    const original = {
      book: 'test-book',
      email: 'user@example.com',
      purchasedAt: '2024-01-15T00:00:00.000Z',
      sessionId: 'sess_abc',
      exp: nowEpoch() + COOKIE_MAX_AGE,
    }
    const signed = await signCookie(original, TEST_SECRET)
    const originalSig = signed.slice(signed.indexOf('.') + 1)

    // Create a different payload and encode it the same way
    const forged = { ...original, email: 'attacker@evil.com' }
    const forgedPayloadB64 = btoa(JSON.stringify(forged))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

    const tampered = `${forgedPayloadB64}.${originalSig}`
    const verified = await verifyCookie(tampered, TEST_SECRET)
    expect(verified).toBeNull()
  })

  it('signMagicToken → verifyMagicToken roundtrip works', async () => {
    const payload = {
      email: 'user@example.com',
      bookSlug: 'test-book',
      exp: nowEpoch() + MAGIC_LINK_TTL,
    }
    const token = await signMagicToken(payload, TEST_SECRET)
    const verified = await verifyMagicToken(token, TEST_SECRET)
    expect(verified).toEqual(payload)
  })

  it('HKDF key separation — cookie token cannot verify as magic token', async () => {
    const cookiePayload = {
      book: 'test-book',
      email: 'user@example.com',
      purchasedAt: '2024-01-15T00:00:00.000Z',
      sessionId: 'sess_abc',
      exp: nowEpoch() + COOKIE_MAX_AGE,
    }
    const cookieToken = await signCookie(cookiePayload, TEST_SECRET)

    // A cookie token should NOT verify as a magic token (different derived key)
    const magicResult = await verifyMagicToken(cookieToken, TEST_SECRET)
    expect(magicResult).toBeNull()
  })

  it('HKDF key separation — magic token cannot verify as cookie', async () => {
    const magicPayload = {
      email: 'user@example.com',
      bookSlug: 'test-book',
      exp: nowEpoch() + MAGIC_LINK_TTL,
    }
    const magicToken = await signMagicToken(magicPayload, TEST_SECRET)

    // A magic token should NOT verify as a cookie (different derived key)
    const cookieResult = await verifyCookie(magicToken, TEST_SECRET)
    expect(cookieResult).toBeNull()
  })
})

// ── parseCookies ────────────────────────────────────────────

describe('parseCookies', () => {
  it('parses header with multiple cookies including values containing =', () => {
    const header = 'theme=dark; pressy-auth-my-book=abc123.def456; token=a=b=c'
    const result = parseCookies(header)
    expect(result).toEqual({
      theme: 'dark',
      'pressy-auth-my-book': 'abc123.def456',
      token: 'a=b=c',
    })
  })
})

// ── Middleware paywall enforcement ───────────────────────────

describe('middleware paywall enforcement', () => {
  const middleware = createPressyMiddleware()

  it('free chapter passes through (200)', async () => {
    const env = createMockEnv()
    const next = vi.fn(async () => new Response('OK', { status: 200 }))

    const response = await middleware({
      request: new Request('https://example.com/books/test-book/chapter-1/'),
      env,
      next,
    })

    expect(response.status).toBe(200)
    expect(next).toHaveBeenCalled()
  })

  it('paid chapter without auth serves paywall page (200)', async () => {
    const env = createMockEnv()
    const next = vi.fn(async () => new Response('OK', { status: 200 }))

    const response = await middleware({
      request: new Request('https://example.com/books/test-book/chapter-3/'),
      env,
      next,
    })

    expect(response.status).toBe(200)
    expect(response.headers.get('Content-Type')).toContain('text/html')
    const body = await response.text()
    expect(body).toContain('This chapter requires purchase to read')
    expect(body).toContain('/api/checkout?book=test-book')
    expect(body).toContain('Already purchased?')
    expect(next).not.toHaveBeenCalled()
  })

  it('paid chapter with valid auth cookie passes through (200)', async () => {
    const env = createMockEnv()
    const next = vi.fn(async () => new Response('OK', { status: 200 }))
    const request = await requestWithAuthCookie(
      'https://example.com/books/test-book/chapter-3/',
      'test-book',
    )

    const response = await middleware({ request, env, next })

    expect(response.status).toBe(200)
    expect(next).toHaveBeenCalled()
  })
})

// ── /api/auth/status ────────────────────────────────────────

describe('/api/auth/status', () => {
  const middleware = createPressyMiddleware()

  it('without cookie returns { authorized: false }', async () => {
    const env = createMockEnv()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/status?book=test-book'),
      env,
      next,
    })

    expect(response.status).toBe(200)
    const body = await response.json()
    expect(body).toEqual({ authorized: false })
  })

  it('with valid cookie returns { authorized: true }', async () => {
    const env = createMockEnv()
    const next = vi.fn()
    const request = await requestWithAuthCookie(
      'https://example.com/api/auth/status?book=test-book',
      'test-book',
    )

    const response = await middleware({ request, env, next })

    expect(response.status).toBe(200)
    const body = await response.json()
    expect(body).toEqual({ authorized: true })
  })
})

// ── /api/auth/recover ───────────────────────────────────────

describe('/api/auth/recover', () => {
  it('existing purchase → 200, sendEmail called', async () => {
    const kv = new Map<string, string>()
    const purchase: PurchaseRecord = {
      sessionId: 'sess_original',
      email: 'buyer@example.com',
      bookSlug: 'test-book',
      amount: 999,
      purchasedAt: '2024-01-01T00:00:00.000Z',
    }
    kv.set('purchase:buyer@example.com:test-book', JSON.stringify(purchase))

    const sendEmail = vi.fn(async () => {})
    const env = createMockEnv(kv)
    const middleware = createPressyMiddleware({ sendEmail })
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'buyer@example.com', book: 'test-book' }),
      }),
      env,
      next,
    })

    expect(response.status).toBe(200)
    const body = await response.json()
    expect(body.sent).toBe(true)
    expect(sendEmail).toHaveBeenCalledOnce()
    expect((sendEmail as Mock).mock.calls[0][0].to).toBe('buyer@example.com')
  })

  it('non-existing email → 200, sendEmail NOT called (anti-enumeration)', async () => {
    const sendEmail = vi.fn(async () => {})
    const env = createMockEnv() // empty KV
    const middleware = createPressyMiddleware({ sendEmail })
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'nobody@example.com', book: 'test-book' }),
      }),
      env,
      next,
    })

    expect(response.status).toBe(200)
    const body = await response.json()
    expect(body.sent).toBe(true)
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('invalid email format → 400', async () => {
    const env = createMockEnv()
    const middleware = createPressyMiddleware()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'not-an-email', book: 'test-book' }),
      }),
      env,
      next,
    })

    expect(response.status).toBe(400)
    const body = await response.json()
    expect(body.error).toContain('Invalid email')
  })

  it('invalid book slug → 400', async () => {
    const env = createMockEnv()
    const middleware = createPressyMiddleware()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'user@example.com', book: 'invalid slug!!' }),
      }),
      env,
      next,
    })

    expect(response.status).toBe(400)
    const body = await response.json()
    expect(body.error).toContain('Invalid book slug')
  })

  it('non-existent book slug → 400', async () => {
    const env = createMockEnv()
    const middleware = createPressyMiddleware()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/recover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'user@example.com', book: 'nonexistent-book' }),
      }),
      env,
      next,
    })

    expect(response.status).toBe(400)
    const body = await response.json()
    expect(body.error).toContain('Book not found')
  })
})

// ── /api/auth/verify ────────────────────────────────────────

describe('/api/auth/verify', () => {
  it('valid token + purchase in KV → 302 redirect with Set-Cookie', async () => {
    const kv = new Map<string, string>()
    const purchase: PurchaseRecord = {
      sessionId: 'sess_original',
      email: 'buyer@example.com',
      bookSlug: 'test-book',
      amount: 999,
      purchasedAt: '2024-01-01T00:00:00.000Z',
    }
    kv.set('purchase:buyer@example.com:test-book', JSON.stringify(purchase))

    const token = await signMagicToken(
      { email: 'buyer@example.com', bookSlug: 'test-book', exp: nowEpoch() + MAGIC_LINK_TTL },
      TEST_SECRET,
    )

    const env = createMockEnv(kv)
    const middleware = createPressyMiddleware()
    const next = vi.fn()

    const response = await middleware({
      request: new Request(`https://example.com/api/auth/verify?token=${encodeURIComponent(token)}`),
      env,
      next,
    })

    expect(response.status).toBe(302)
    expect(response.headers.get('Location')).toBe('/books/test-book/')
    expect(response.headers.get('Set-Cookie')).toContain('pressy-auth-test-book=')
  })

  it('expired token → 403', async () => {
    const token = await signMagicToken(
      { email: 'buyer@example.com', bookSlug: 'test-book', exp: nowEpoch() - 60 },
      TEST_SECRET,
    )

    const env = createMockEnv()
    const middleware = createPressyMiddleware()
    const next = vi.fn()

    const response = await middleware({
      request: new Request(`https://example.com/api/auth/verify?token=${encodeURIComponent(token)}`),
      env,
      next,
    })

    expect(response.status).toBe(403)
  })

  it('already-consumed token → 410', async () => {
    const kv = new Map<string, string>()
    const purchase: PurchaseRecord = {
      sessionId: 'sess_original',
      email: 'buyer@example.com',
      bookSlug: 'test-book',
      amount: 999,
      purchasedAt: '2024-01-01T00:00:00.000Z',
    }
    kv.set('purchase:buyer@example.com:test-book', JSON.stringify(purchase))

    const token = await signMagicToken(
      { email: 'buyer@example.com', bookSlug: 'test-book', exp: nowEpoch() + MAGIC_LINK_TTL },
      TEST_SECRET,
    )

    // Mark token as already consumed (using SHA-256 hash of full token)
    const tokenHash = await sha256hex(token)
    kv.set(`magic-consumed:${tokenHash}`, '1')

    const env = createMockEnv(kv)
    const middleware = createPressyMiddleware()
    const next = vi.fn()

    const response = await middleware({
      request: new Request(`https://example.com/api/auth/verify?token=${encodeURIComponent(token)}`),
      env,
      next,
    })

    expect(response.status).toBe(410)
  })
})

// ── Security: HTTP method enforcement ───────────────────────

describe('HTTP method enforcement', () => {
  const middleware = createPressyMiddleware()

  it('POST to /api/checkout returns 405', async () => {
    const env = createMockEnv()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/checkout?book=test-book', { method: 'POST' }),
      env,
      next,
    })

    expect(response.status).toBe(405)
  })

  it('GET to /api/stripe-webhook returns 405', async () => {
    const env = createMockEnv()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/stripe-webhook', { method: 'GET' }),
      env,
      next,
    })

    expect(response.status).toBe(405)
  })

  it('POST to /api/auth/status returns 405', async () => {
    const env = createMockEnv()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/status?book=test-book', { method: 'POST' }),
      env,
      next,
    })

    expect(response.status).toBe(405)
  })

  it('GET to /api/auth/recover returns 405', async () => {
    const env = createMockEnv()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/recover', { method: 'GET' }),
      env,
      next,
    })

    expect(response.status).toBe(405)
  })
})

// ── Security: headers ───────────────────────────────────────

describe('security headers', () => {
  const middleware = createPressyMiddleware()

  it('API responses include X-Content-Type-Options and X-Frame-Options', async () => {
    const env = createMockEnv()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/status?book=test-book'),
      env,
      next,
    })

    expect(response.headers.get('X-Content-Type-Options')).toBe('nosniff')
    expect(response.headers.get('X-Frame-Options')).toBe('DENY')
  })
})

// ── Security: rate limiting ─────────────────────────────────

describe('rate limiting', () => {
  it('auth endpoint returns 429 after exceeding limit', async () => {
    const kv = new Map<string, string>()
    // Pre-fill the rate limit counter to just below the limit
    kv.set('ratelimit:auth:127.0.0.1', '60')

    const env = createMockEnv(kv)
    const middleware = createPressyMiddleware()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/status?book=test-book', {
        headers: { 'cf-connecting-ip': '127.0.0.1' },
      }),
      env,
      next,
    })

    expect(response.status).toBe(429)
  })

  it('recover endpoint returns 429 after exceeding per-email limit', async () => {
    const kv = new Map<string, string>()
    // Pre-fill the per-email rate limit counter
    kv.set('ratelimit:recover:buyer@example.com', '3')

    const env = createMockEnv(kv)
    const middleware = createPressyMiddleware()
    const next = vi.fn()

    const response = await middleware({
      request: new Request('https://example.com/api/auth/recover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'cf-connecting-ip': '127.0.0.1',
        },
        body: JSON.stringify({ email: 'buyer@example.com', book: 'test-book' }),
      }),
      env,
      next,
    })

    expect(response.status).toBe(429)
  })
})
