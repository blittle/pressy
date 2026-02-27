export { createPressyMiddleware } from './middleware.js'
export type { PressyContext } from './middleware.js'
export { signCookie, verifyCookie, cookieName, parseCookies, setCookieHeader, signMagicToken, verifyMagicToken, COOKIE_MAX_AGE, MAGIC_LINK_TTL } from './auth.js'
export {
  handleCheckout,
  handleWebhook,
  handleAuthCallback,
  handleAuthStatus,
  handleRecoverPurchase,
  handleVerifyToken,
} from './stripe.js'
export { buildMagicLinkEmail } from './email.js'
export type {
  Env,
  PressyManifest,
  PressyBookManifest,
  PurchaseRecord,
  CookiePayload,
  MagicLinkPayload,
  SendEmailParams,
  EmailSender,
  PressyMiddlewareOptions,
} from './types.js'
