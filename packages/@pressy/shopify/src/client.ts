import type { ShopifyConfig, Product, Checkout, CheckoutLineItem } from './types.js'

export class ShopifyClient {
  private shopDomain: string
  private storefrontAccessToken: string
  private endpoint: string

  constructor(config: ShopifyConfig) {
    this.shopDomain = config.shopDomain
    this.storefrontAccessToken = config.storefrontAccessToken
    this.endpoint = `https://${this.shopDomain}/api/2024-01/graphql.json`
  }

  private async query<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': this.storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`)
    }

    const json = await response.json()

    if (json.errors) {
      throw new Error(`GraphQL error: ${json.errors[0].message}`)
    }

    return json.data
  }

  async getProduct(productId: string): Promise<Product> {
    const query = `
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `

    const data = await this.query<{ product: Product }>(query, { id: productId })
    return data.product
  }

  async createCheckout(lineItems: CheckoutLineItem[]): Promise<Checkout> {
    const query = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
            lineItems(first: 10) {
              edges {
                node {
                  id
                  title
                  quantity
                }
              }
            }
            totalPrice {
              amount
              currencyCode
            }
          }
          checkoutUserErrors {
            code
            field
            message
          }
        }
      }
    `

    const data = await this.query<{
      checkoutCreate: {
        checkout: Checkout
        checkoutUserErrors: Array<{ code: string; field: string[]; message: string }>
      }
    }>(query, {
      input: {
        lineItems: lineItems.map((item) => ({
          variantId: item.variantId,
          quantity: item.quantity,
        })),
      },
    })

    if (data.checkoutCreate.checkoutUserErrors.length > 0) {
      throw new Error(data.checkoutCreate.checkoutUserErrors[0].message)
    }

    return data.checkoutCreate.checkout
  }

  async getCheckout(checkoutId: string): Promise<Checkout> {
    const query = `
      query getCheckout($id: ID!) {
        node(id: $id) {
          ... on Checkout {
            id
            webUrl
            completedAt
            lineItems(first: 10) {
              edges {
                node {
                  id
                  title
                  quantity
                }
              }
            }
            totalPrice {
              amount
              currencyCode
            }
          }
        }
      }
    `

    const data = await this.query<{ node: Checkout & { completedAt: string | null } }>(query, {
      id: checkoutId,
    })
    return data.node
  }
}

// Singleton instance
let clientInstance: ShopifyClient | null = null

export function createShopifyClient(config: ShopifyConfig): ShopifyClient {
  clientInstance = new ShopifyClient(config)
  return clientInstance
}

export function getShopifyClient(): ShopifyClient {
  if (!clientInstance) {
    throw new Error('Shopify client not initialized. Call createShopifyClient first.')
  }
  return clientInstance
}
