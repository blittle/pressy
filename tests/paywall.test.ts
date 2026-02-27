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

  it('paid chapter without auth redirects to ?purchase=true (302)', async () => {
    const env = createMockEnv()
    const next = vi.fn(async () => new Response('OK', { status: 200 }))

    const response = await middleware({
      request: new Request('https://example.com/books/test-book/chapter-3/'),
      env,
      next,
    })

    expect(response.status).toBe(302)
    expect(response.headers.get('Location')).toBe('/books/test-book/?purchase=true')
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
    expect(response.headers.get('Location')).toBe('/books/test-book/chapter-3/')
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

    // Mark token as already consumed
    kv.set(`magic-consumed:${token.slice(0, 32)}`, '1')

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
