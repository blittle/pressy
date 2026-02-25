import { useSignal } from '@preact/signals'
import { useEffect, useRef } from 'preact/hooks'

export type PaywallMode = 'email' | 'shopify' | 'stripe' | 'paypal'

export interface PaywallProviders {
  shopify?: { shopDomain: string; storefrontAccessToken: string }
  stripe?: { publishableKey: string }
  paypal?: { clientId: string; currency?: string }
}

export interface PaywallProps {
  bookSlug: string
  bookTitle: string
  previewChapters: number
  currentChapter: number
  mode?: PaywallMode
  shopifyProductId?: string
  stripePaymentLink?: string
  paypalPlanId?: string
  providers?: PaywallProviders
  onUnlock?: () => void
}

export function Paywall({
  bookSlug,
  bookTitle,
  previewChapters,
  currentChapter,
  mode = 'email',
  shopifyProductId,
  stripePaymentLink,
  paypalPlanId,
  providers,
  onUnlock,
}: PaywallProps) {
  const email = useSignal('')
  const isLoading = useSignal(false)
  const error = useSignal('')
  const isUnlocked = useSignal(false)
  const paypalContainerRef = useRef<HTMLDivElement>(null)

  // Check if already unlocked (localStorage for sync check)
  if (typeof window !== 'undefined') {
    const unlocked = localStorage.getItem(`pressy-unlocked-${bookSlug}`)
    if (unlocked) {
      isUnlocked.value = true
    }
  }

  // On mount, check for redirect returns (Stripe, Shopify)
  useEffect(() => {
    if (typeof window === 'undefined') return

    const params = new URLSearchParams(window.location.search)

    // Stripe return
    if (params.get('stripe_success') === 'true' && params.get('book') === bookSlug) {
      localStorage.setItem(`pressy-unlocked-${bookSlug}`, 'stripe')
      isUnlocked.value = true

      // Clean up URL
      const url = new URL(window.location.href)
      url.searchParams.delete('stripe_success')
      url.searchParams.delete('book')
      window.history.replaceState({}, '', url.toString())

      onUnlock?.()
    }

    // Shopify return
    if (params.get('checkout_success') === 'true' && params.get('book') === bookSlug) {
      localStorage.setItem(`pressy-unlocked-${bookSlug}`, 'shopify')
      isUnlocked.value = true

      const url = new URL(window.location.href)
      url.searchParams.delete('checkout_success')
      url.searchParams.delete('book')
      url.searchParams.delete('order_id')
      window.history.replaceState({}, '', url.toString())

      onUnlock?.()
    }

    // Pending Stripe purchase fallback: if the user clicked "Purchase",
    // went to Stripe, and then navigated back (without a redirect URL
    // configured in the Stripe Dashboard), unlock the book.
    if (!isUnlocked.value) {
      try {
        const pending = localStorage.getItem('pressy-checkout-pending')
        if (pending) {
          const { bookSlug: pendingSlug, timestamp } = JSON.parse(pending)
          // Only honor pending purchases less than 1 hour old
          if (pendingSlug === bookSlug && Date.now() - timestamp < 3600000) {
            localStorage.setItem(`pressy-unlocked-${bookSlug}`, 'stripe')
            localStorage.removeItem('pressy-checkout-pending')
            isUnlocked.value = true
            onUnlock?.()
          }
        }
      } catch {
        // ignore
      }
    }
  }, [bookSlug])

  // Render PayPal buttons when in paypal mode
  useEffect(() => {
    if (mode !== 'paypal' || isUnlocked.value || !paypalContainerRef.current) return
    if (!providers?.paypal?.clientId || !paypalPlanId) return

    let cancelled = false

    import('@pressy-pub/paypal' as string).then(({ renderPayPalButtons }) => {
      if (cancelled || !paypalContainerRef.current) return
      renderPayPalButtons({
        clientId: providers.paypal!.clientId,
        planId: paypalPlanId,
        bookSlug,
        currency: providers.paypal!.currency,
        container: paypalContainerRef.current,
        onApprove: (_slug: string, orderId: string) => {
          localStorage.setItem(`pressy-unlocked-${bookSlug}`, 'paypal')
          isUnlocked.value = true
          onUnlock?.()
        },
        onError: (err: Error) => {
          error.value = 'Payment failed. Please try again.'
        },
      })
    }).catch(() => {
      error.value = 'Failed to load PayPal. Please try again.'
    })

    return () => { cancelled = true }
  }, [mode, isUnlocked.value, paypalPlanId, bookSlug])

  if (isUnlocked.value) return null
  if (currentChapter <= previewChapters) return null

  const handleEmailSubmit = async (e: Event) => {
    e.preventDefault()

    if (!email.value || !email.value.includes('@')) {
      error.value = 'Please enter a valid email address'
      return
    }

    isLoading.value = true
    error.value = ''

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      localStorage.setItem(`pressy-unlocked-${bookSlug}`, 'email')
      localStorage.setItem(`pressy-email-${bookSlug}`, email.value)

      isUnlocked.value = true
      onUnlock?.()
    } catch {
      error.value = 'Something went wrong. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  const handleShopifyPurchase = async () => {
    if (!shopifyProductId) {
      error.value = 'Purchase not available'
      return
    }

    isLoading.value = true

    try {
      const { createCheckout } = await import('@pressy-pub/shopify' as string)
      const checkoutUrl = await createCheckout(shopifyProductId)
      window.location.href = checkoutUrl
    } catch {
      error.value = 'Failed to create checkout. Please try again.'
      isLoading.value = false
    }
  }

  const handleStripePurchase = () => {
    if (!stripePaymentLink) {
      error.value = 'Purchase not available'
      return
    }

    isLoading.value = true

    try {
      const url = new URL(stripePaymentLink)
      url.searchParams.set('client_reference_id', bookSlug)

      // Save pending purchase so we can unlock when the user returns.
      // The after-payment redirect URL is configured in the Stripe Dashboard
      // (Payment Link → After payment → redirect URL). Set it to your book's
      // URL with ?stripe_success=true&book={slug} for automatic unlock.
      // If the author doesn't configure a redirect, the pending flag here
      // lets us unlock when the user navigates back manually.
      localStorage.setItem(`pressy-checkout-pending`, JSON.stringify({
        bookSlug,
        timestamp: Date.now(),
      }))

      window.location.href = url.toString()
    } catch {
      error.value = 'Invalid payment link. Please try again.'
      isLoading.value = false
    }
  }

  const getDescription = () => {
    switch (mode) {
      case 'stripe':
      case 'shopify':
      case 'paypal':
        return ' Purchase the full book to continue reading.'
      case 'email':
      default:
        return ' Enter your email to unlock the full book.'
    }
  }

  const getNote = () => {
    switch (mode) {
      case 'stripe':
        return 'Secure checkout powered by Stripe.'
      case 'shopify':
        return 'Secure checkout powered by Shopify.'
      case 'paypal':
        return 'Secure checkout powered by PayPal.'
      case 'email':
      default:
        return "We'll never share your email with anyone."
    }
  }

  const renderModeUI = () => {
    switch (mode) {
      case 'email':
        return (
          <form class="pressy-paywall-form" onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email.value}
              onInput={(e) => (email.value = (e.target as HTMLInputElement).value)}
              class="pressy-paywall-input"
              disabled={isLoading.value}
            />
            <button type="submit" class="pressy-paywall-button" disabled={isLoading.value}>
              {isLoading.value ? 'Unlocking...' : 'Unlock Full Book'}
            </button>
          </form>
        )
      case 'shopify':
        return (
          <button
            class="pressy-paywall-button pressy-paywall-purchase"
            onClick={handleShopifyPurchase}
            disabled={isLoading.value}
          >
            {isLoading.value ? 'Processing...' : 'Purchase Now'}
          </button>
        )
      case 'stripe':
        return (
          <button
            class="pressy-paywall-button pressy-paywall-purchase"
            onClick={handleStripePurchase}
            disabled={isLoading.value}
          >
            {isLoading.value ? 'Redirecting...' : 'Purchase Now'}
          </button>
        )
      case 'paypal':
        return (
          <div class="pressy-paywall-paypal">
            <div ref={paypalContainerRef} class="pressy-paywall-paypal-buttons" />
          </div>
        )
    }
  }

  return (
    <div class="pressy-paywall">
      <div class="pressy-paywall-content">
        <div class="pressy-paywall-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
          </svg>
        </div>

        <h2 class="pressy-paywall-title">Continue Reading</h2>
        <p class="pressy-paywall-description">
          You've enjoyed the first {previewChapters} chapters of "{bookTitle}".
          {getDescription()}
        </p>

        {renderModeUI()}

        {error.value && <p class="pressy-paywall-error">{error.value}</p>}

        <p class="pressy-paywall-note">{getNote()}</p>
      </div>

      <style>{PAYWALL_STYLES}</style>
    </div>
  )
}

const PAYWALL_STYLES = `
  .pressy-paywall {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1.5rem;
  }

  .pressy-paywall-content {
    background: var(--color-bg);
    border-radius: 1rem;
    padding: 2.5rem;
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  .pressy-paywall-icon {
    color: var(--color-accent);
    margin-bottom: 1.5rem;
  }

  .pressy-paywall-title {
    font-size: var(--font-size-xl);
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: var(--color-heading);
  }

  .pressy-paywall-description {
    color: var(--color-text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  .pressy-paywall-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .pressy-paywall-input {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    font-size: var(--font-size-base);
    background: var(--color-bg);
    color: var(--color-text);
    box-sizing: border-box;
  }

  .pressy-paywall-input:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
  }

  .pressy-paywall-button {
    width: 100%;
    padding: 0.875rem 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: var(--font-size-base);
    font-weight: 500;
    background: var(--color-accent);
    color: white;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .pressy-paywall-button:hover:not(:disabled) {
    opacity: 0.9;
  }

  .pressy-paywall-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .pressy-paywall-paypal-buttons {
    min-height: 45px;
  }

  .pressy-paywall-error {
    color: #dc2626;
    font-size: var(--font-size-sm);
    margin-top: 0.75rem;
  }

  .pressy-paywall-note {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    margin-top: 1.5rem;
  }
`
