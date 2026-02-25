export interface PayPalButtonsOptions {
  /** PayPal Client ID */
  clientId: string
  /** PayPal plan/product ID for the purchase */
  planId: string
  /** Book slug for tracking */
  bookSlug: string
  /** Currency code (default: 'USD') */
  currency?: string
  /** Container element to render buttons into */
  container: HTMLElement
  /** Called when payment is approved */
  onApprove: (bookSlug: string, orderId: string) => void
  /** Called when an error occurs */
  onError?: (error: Error) => void
}

export interface PayPalSDK {
  Buttons: (options: {
    createOrder: () => Promise<string>
    onApprove: (data: { orderID: string }) => Promise<void>
    onError?: (err: Error) => void
    style?: Record<string, string>
  }) => { render: (container: HTMLElement) => Promise<void> }
}

declare global {
  interface Window {
    paypal?: PayPalSDK
  }
}
