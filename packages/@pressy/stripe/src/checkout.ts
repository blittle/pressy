import type { StripeCheckoutOptions, StripeReturnResult } from './types.js'

/**
 * Redirect to a Stripe Payment Link checkout page.
 * The book slug is passed as client_reference_id for tracking.
 */
export function startStripeCheckout(options: StripeCheckoutOptions): void {
  const url = new URL(options.paymentLink)

  // Pass book slug so we can identify which book was purchased on return
  url.searchParams.set('client_reference_id', options.bookSlug)

  // Set success redirect URL back to the current page with a success marker
  const successUrl = options.successUrl || window.location.href
  const returnUrl = new URL(successUrl)
  returnUrl.searchParams.set('stripe_success', 'true')
  returnUrl.searchParams.set('book', options.bookSlug)

  window.location.href = url.toString()
}

/**
 * Check if the current page load is a return from Stripe checkout.
 * Returns the book slug if successful, cleans up URL params.
 */
export function handleStripeReturn(): StripeReturnResult {
  if (typeof window === 'undefined') {
    return { success: false }
  }

  const params = new URLSearchParams(window.location.search)
  const stripeSuccess = params.get('stripe_success')
  const bookSlug = params.get('book')

  if (stripeSuccess === 'true' && bookSlug) {
    // Clean up URL params
    const url = new URL(window.location.href)
    url.searchParams.delete('stripe_success')
    url.searchParams.delete('book')
    window.history.replaceState({}, '', url.toString())

    return { success: true, bookSlug }
  }

  return { success: false }
}
