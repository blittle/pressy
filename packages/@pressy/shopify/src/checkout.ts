import { getShopifyClient } from './client.js'
import type { Checkout, CheckoutLineItem } from './types.js'

// Store checkout ID for verification after return
const CHECKOUT_STORAGE_KEY = 'pressy-checkout'

interface StoredCheckout {
  checkoutId: string
  bookSlug: string
  createdAt: number
}

export async function createCheckout(
  productId: string,
  bookSlug?: string
): Promise<string> {
  const client = getShopifyClient()

  // Get the product to find the first variant
  const product = await client.getProduct(productId)

  if (!product.variants.edges.length) {
    throw new Error('Product has no variants')
  }

  const variantId = product.variants.edges[0].node.id

  // Create checkout with single item
  const lineItems: CheckoutLineItem[] = [
    {
      variantId,
      quantity: 1,
    },
  ]

  const checkout = await client.createCheckout(lineItems)

  // Store checkout info for verification on return
  if (bookSlug && typeof localStorage !== 'undefined') {
    const storedCheckout: StoredCheckout = {
      checkoutId: checkout.id,
      bookSlug,
      createdAt: Date.now(),
    }
    localStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify(storedCheckout))
  }

  return checkout.webUrl
}

export function getCheckoutUrl(checkout: Checkout): string {
  return checkout.webUrl
}

export async function verifyCheckoutReturn(): Promise<{
  success: boolean
  bookSlug?: string
  orderId?: string
}> {
  if (typeof localStorage === 'undefined') {
    return { success: false }
  }

  const stored = localStorage.getItem(CHECKOUT_STORAGE_KEY)
  if (!stored) {
    return { success: false }
  }

  try {
    const { checkoutId, bookSlug } = JSON.parse(stored) as StoredCheckout

    const client = getShopifyClient()
    const checkout = await client.getCheckout(checkoutId)

    // Check if checkout was completed
    // Note: In real implementation, you'd verify with order webhooks
    // This is a simplified client-side check
    if ((checkout as any).completedAt) {
      // Clear stored checkout
      localStorage.removeItem(CHECKOUT_STORAGE_KEY)

      return {
        success: true,
        bookSlug,
        orderId: checkout.id,
      }
    }

    return { success: false }
  } catch (err) {
    console.error('Error verifying checkout:', err)
    return { success: false }
  }
}
