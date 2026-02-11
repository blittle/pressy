export interface ShopifyConfig {
  shopDomain: string
  storefrontAccessToken: string
}

export interface Product {
  id: string
  title: string
  description: string
  handle: string
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
  variants: {
    edges: Array<{
      node: {
        id: string
        title: string
        price: {
          amount: string
          currencyCode: string
        }
      }
    }>
  }
}

export interface CheckoutLineItem {
  variantId: string
  quantity: number
}

export interface Checkout {
  id: string
  webUrl: string
  lineItems: {
    edges: Array<{
      node: {
        id: string
        title: string
        quantity: number
      }
    }>
  }
  totalPrice: {
    amount: string
    currencyCode: string
  }
}

export interface UnlockData {
  bookSlug: string
  orderId?: string
  email?: string
  unlockedAt: number
}
