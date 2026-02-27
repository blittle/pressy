import type { CookiePayload, MagicLinkPayload } from './types.js'

const ENCODER = new TextEncoder()

/** Cookie lifetime: 1 year in seconds. */
export const COOKIE_MAX_AGE = 365 * 24 * 60 * 60

/** Magic link token lifetime: 15 minutes in seconds. */
export const MAGIC_LINK_TTL = 15 * 60

/** HKDF contexts for key separation. */
const COOKIE_KEY_CONTEXT = 'pressy-cookie-v1'
const MAGIC_KEY_CONTEXT = 'pressy-magic-v1'

/**
 * Derive a purpose-specific HMAC signing key from the master secret using HKDF.
 * This ensures cookie keys and magic-link keys are cryptographically separated.
 */
async function deriveKey(secret: string, context: string): Promise<CryptoKey> {
  const masterKey = await crypto.subtle.importKey(
    'raw',
    ENCODER.encode(secret),
    'HKDF',
    false,
    ['deriveBits'],
  )

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'HKDF',
      hash: 'SHA-256',
      salt: new Uint8Array(32), // fixed zero salt — context label provides separation
      info: ENCODER.encode(context),
    },
    masterKey,
    256,
  )

  return crypto.subtle.importKey(
    'raw',
    derivedBits,
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
async function sign<T>(payload: T, key: CryptoKey): Promise<string> {
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
async function verify<T extends { exp?: number }>(token: string, key: CryptoKey): Promise<T | null> {
  const dotIdx = token.indexOf('.')
  if (dotIdx === -1) return null

  const payloadB64 = token.slice(0, dotIdx)
  const sigB64 = token.slice(dotIdx + 1)

  try {
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
  const key = await deriveKey(secret, COOKIE_KEY_CONTEXT)
  return sign(payload, key)
}

export async function verifyCookie(cookieValue: string, secret: string): Promise<CookiePayload | null> {
  const key = await deriveKey(secret, COOKIE_KEY_CONTEXT)
  return verify<CookiePayload>(cookieValue, key)
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
  const key = await deriveKey(secret, MAGIC_KEY_CONTEXT)
  return sign(payload, key)
}

export async function verifyMagicToken(token: string, secret: string): Promise<MagicLinkPayload | null> {
  const key = await deriveKey(secret, MAGIC_KEY_CONTEXT)
  return verify<MagicLinkPayload>(token, key)
}
