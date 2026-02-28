export interface Env {
  ASSETS: Fetcher
  PRESSY_KV: KVNamespace
  STRIPE_SECRET_KEY: string
  STRIPE_WEBHOOK_SECRET: string
  COOKIE_SECRET: string
}

export interface SendEmailParams {
  to: string
  subject: string
  html: string
  verifyUrl: string
  bookTitle?: string
}

export type EmailSender = (params: SendEmailParams) => Promise<void>

export interface PressyMiddlewareOptions {
  sendEmail?: EmailSender
}

export interface PressyManifest {
  books: PressyBookManifest[]
}

export interface PressyBookManifest {
  slug: string
  paywall?: {
    enabled: boolean
    previewChapters: number
    price?: string
    stripePriceId?: string
  }
  chapters: Array<{
    slug: string
    order: number
  }>
}

export interface PurchaseRecord {
  sessionId: string
  email: string
  bookSlug: string
  amount: number
  purchasedAt: string
}

export interface CookiePayload {
  book: string
  email: string
  purchasedAt: string
  sessionId: string
  /** Expiration time as Unix epoch seconds. */
  exp: number
}

export interface MagicLinkPayload {
  email: string
  bookSlug: string
  /** Expiration time as Unix epoch seconds. */
  exp: number
}
