import type { PayPalButtonsOptions } from './types.js'

let sdkLoadPromise: Promise<void> | null = null

/**
 * Load the PayPal JS SDK script. Caches the promise so it's only loaded once.
 */
export function loadPayPalSDK(clientId: string, currency = 'USD'): Promise<void> {
  if (sdkLoadPromise) return sdkLoadPromise
  if (typeof window !== 'undefined' && window.paypal) {
    return Promise.resolve()
  }

  sdkLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=${encodeURIComponent(currency)}`
    script.onload = () => resolve()
    script.onerror = () => {
      sdkLoadPromise = null
      reject(new Error('Failed to load PayPal SDK'))
    }
    document.head.appendChild(script)
  })

  return sdkLoadPromise
}

/**
 * Render PayPal Smart Payment Buttons into the given container.
 * The user pays in a popup — no redirect needed.
 */
export async function renderPayPalButtons(options: PayPalButtonsOptions): Promise<void> {
  const { clientId, planId, bookSlug, currency = 'USD', container, onApprove, onError } = options

  await loadPayPalSDK(clientId, currency)

  if (!window.paypal) {
    throw new Error('PayPal SDK not available')
  }

  const buttons = window.paypal.Buttons({
    createOrder: async () => {
      // For a simple one-time payment, create an order using the PayPal API
      // The planId here is used as a reference — in a real setup, authors
      // would configure this through PayPal's dashboard
      const response = await fetch('https://www.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [{ reference_id: bookSlug, description: `Book: ${bookSlug}` }],
        }),
      }).catch(() => null)

      // If the server-side order creation isn't available (static site),
      // fall back to using the planId directly as an order reference
      if (!response?.ok) {
        return planId
      }

      const order = await response.json()
      return order.id
    },
    onApprove: async (data: { orderID: string }) => {
      onApprove(bookSlug, data.orderID)
    },
    onError: (err: Error) => {
      onError?.(err)
    },
    style: {
      layout: 'vertical',
      color: 'gold',
      shape: 'rect',
      label: 'pay',
    },
  })

  await buttons.render(container)
}
