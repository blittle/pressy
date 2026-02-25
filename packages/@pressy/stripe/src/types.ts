export interface StripeCheckoutOptions {
  /** The Stripe Payment Link URL (e.g. https://buy.stripe.com/abc123) */
  paymentLink: string
  /** Book slug used as client_reference_id for tracking */
  bookSlug: string
  /** URL to redirect back to after successful payment */
  successUrl?: string
}

export interface StripeReturnResult {
  success: boolean
  bookSlug?: string
}
