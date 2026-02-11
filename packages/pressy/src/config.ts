export interface SiteConfig {
  title: string
  url: string
  description?: string
  author?: string
  language?: string
}

export interface PaginationConfig {
  defaultMode: 'scroll' | 'paginated'
}

export interface ShopifyConfig {
  shopDomain: string
  storefrontAccessToken: string
}

export interface PressyConfig {
  site: SiteConfig
  pagination?: PaginationConfig
  shopify?: ShopifyConfig
  outDir?: string
  contentDir?: string
}

export function defineConfig(config: PressyConfig): PressyConfig {
  return {
    pagination: {
      defaultMode: 'scroll',
    },
    outDir: 'dist',
    contentDir: 'content',
    ...config,
  }
}
