import { useSignal } from '@preact/signals'

export interface PaywallProps {
  bookSlug: string
  bookTitle: string
  previewChapters: number
  currentChapter: number
  shopifyProductId?: string
  mode?: 'shopify' | 'email'
  onUnlock?: () => void
}

export function Paywall({
  bookSlug,
  bookTitle,
  previewChapters,
  currentChapter,
  shopifyProductId,
  mode = 'email',
  onUnlock,
}: PaywallProps) {
  const email = useSignal('')
  const isLoading = useSignal(false)
  const error = useSignal('')
  const isUnlocked = useSignal(false)

  // Check if already unlocked
  if (typeof window !== 'undefined') {
    const unlocked = localStorage.getItem(`pressy-unlocked-${bookSlug}`)
    if (unlocked) {
      isUnlocked.value = true
    }
  }

  if (isUnlocked.value) {
    return null
  }

  // Show paywall if past preview chapters
  if (currentChapter <= previewChapters) {
    return null
  }

  const handleEmailSubmit = async (e: Event) => {
    e.preventDefault()

    if (!email.value || !email.value.includes('@')) {
      error.value = 'Please enter a valid email address'
      return
    }

    isLoading.value = true
    error.value = ''

    try {
      // In a real implementation, this would send to a backend
      // For now, just unlock locally
      await new Promise((resolve) => setTimeout(resolve, 1000))

      localStorage.setItem(`pressy-unlocked-${bookSlug}`, 'email')
      localStorage.setItem(`pressy-email-${bookSlug}`, email.value)

      isUnlocked.value = true
      onUnlock?.()
    } catch (err) {
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
      // This would integrate with @pressy/shopify
      // For now, just show that it would redirect
      const { createCheckout } = await import('@pressy/shopify' as string)
      const checkoutUrl = await createCheckout(shopifyProductId)
      window.location.href = checkoutUrl
    } catch (err) {
      error.value = 'Failed to create checkout. Please try again.'
      isLoading.value = false
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
          {mode === 'shopify'
            ? ' Purchase the full book to continue reading.'
            : ' Enter your email to unlock the full book.'}
        </p>

        {mode === 'email' ? (
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
        ) : (
          <button
            class="pressy-paywall-button pressy-paywall-purchase"
            onClick={handleShopifyPurchase}
            disabled={isLoading.value}
          >
            {isLoading.value ? 'Processing...' : 'Purchase Now'}
          </button>
        )}

        {error.value && <p class="pressy-paywall-error">{error.value}</p>}

        <p class="pressy-paywall-note">
          {mode === 'email'
            ? "We'll never share your email with anyone."
            : 'Secure checkout powered by Shopify.'}
        </p>
      </div>

      <style>{`
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
      `}</style>
    </div>
  )
}
