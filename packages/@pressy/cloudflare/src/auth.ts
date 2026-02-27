import type { CookiePayload, MagicLinkPayload } from './types.js'

const ENCODER = new TextEncoder()

/** Cookie lifetime: 1 year in seconds. */
export const COOKIE_MAX_AGE = 365 * 24 * 60 * 60

/** Magic link token lifetime: 15 minutes in seconds. */
export const MAGIC_LINK_TTL = 15 * 60

async function getSigningKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    ENCODER.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

function base64url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (const b of bytes) binary += String.fromCharCode(b)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64urlDecode(str: string): Uint8Array {
  const padded = str.replace(/-/g, '+').replace(/_/g, '/') + '=='.slice(0, (4 - (str.length % 4)) % 4)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

/**
 * Sign an arbitrary JSON payload with HMAC-SHA256.
 * Returns `base64url(payload).base64url(hmac)`.
 */
async function sign<T>(payload: T, secret: string): Promise<string> {
  const key = await getSigningKey(secret)
  const payloadJson = JSON.stringify(payload)
  const payloadB64 = base64url(ENCODER.encode(payloadJson).buffer as ArrayBuffer)
  const signature = await crypto.subtle.sign('HMAC', key, ENCODER.encode(payloadB64))
  return `${payloadB64}.${base64url(signature)}`
}

/**
 * Verify an HMAC-signed token and return the parsed payload.
 * Returns null if the signature is invalid, the token is malformed,
 * or the payload has an `exp` field that is in the past.
 */
async function verify<T extends { exp?: number }>(token: string, secret: string): Promise<T | null> {
  const dotIdx = token.indexOf('.')
  if (dotIdx === -1) return null

  const payloadB64 = token.slice(0, dotIdx)
  const sigB64 = token.slice(dotIdx + 1)

  try {
    const key = await getSigningKey(secret)
    const sigBytes = base64urlDecode(sigB64)
    const valid = await crypto.subtle.verify(
      'HMAC', key, sigBytes.buffer as ArrayBuffer, ENCODER.encode(payloadB64),
    )
    if (!valid) return null

    const payloadBytes = base64urlDecode(payloadB64)
    const payloadJson = new TextDecoder().decode(payloadBytes)
    const parsed = JSON.parse(payloadJson) as T

    // Reject expired tokens
    if (parsed.exp !== undefined && parsed.exp < Math.floor(Date.now() / 1000)) {
      return null
    }

    return parsed
  } catch {
    return null
  }
}

// ── Cookie helpers ───────────────────────────────────────────

export function cookieName(bookSlug: string): string {
  return `pressy-auth-${bookSlug}`
}

export async function signCookie(payload: CookiePayload, secret: string): Promise<string> {
  return sign(payload, secret)
}

export async function verifyCookie(cookieValue: string, secret: string): Promise<CookiePayload | null> {
  return verify<CookiePayload>(cookieValue, secret)
}

export function setCookieHeader(name: string, value: string): string {
  return `${name}=${value}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${COOKIE_MAX_AGE}`
}

export function parseCookies(header: string): Record<string, string> {
  const cookies: Record<string, string> = {}
  for (const pair of header.split(';')) {
    const [key, ...rest] = pair.trim().split('=')
    if (key) cookies[key.trim()] = rest.join('=').trim()
  }
  return cookies
}

// ── Magic link token helpers ─────────────────────────────────

export async function signMagicToken(payload: MagicLinkPayload, secret: string): Promise<string> {
  return sign(payload, secret)
}

export async function verifyMagicToken(token: string, secret: string): Promise<MagicLinkPayload | null> {
  return verify<MagicLinkPayload>(token, secret)
}
