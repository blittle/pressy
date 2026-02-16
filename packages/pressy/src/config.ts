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

export interface PWAConfig {
  /** Enable PWA support (service worker, manifest, offline). Defaults to true. */
  enabled?: boolean
  /** Short name for the app (used on home screen). Defaults to site.title. */
  shortName?: string
  /** Theme color for the browser chrome. Defaults to '#ffffff'. */
  themeColor?: string
  /** Background color for splash screen. Defaults to '#ffffff'. */
  backgroundColor?: string
  /** Display mode. Defaults to 'standalone'. */
  display?: 'standalone' | 'minimal-ui' | 'fullscreen' | 'browser'
  /** Path to a custom icon (used for both 192x192 and 512x512). Overridden by icon192/icon512 if set. */
  icon?: string
  /** Path to a custom 192x192 icon. */
  icon192?: string
  /** Path to a custom 512x512 icon. */
  icon512?: string
  /** Path to a custom favicon. Falls back to icon192 or icon if not set. */
  favicon?: string
}

export interface PressyConfig {
  site: SiteConfig
  pagination?: PaginationConfig
  shopify?: ShopifyConfig
  pwa?: PWAConfig
  outDir?: string
  contentDir?: string
}

export function defineConfig(config: PressyConfig): PressyConfig {
  return {
    pagination: {
      defaultMode: 'scroll',
    },
    pwa: {
      enabled: true,
      themeColor: '#ffffff',
      backgroundColor: '#ffffff',
      display: 'standalone',
    },
    outDir: 'dist',
    contentDir: 'content',
    ...config,
  }
}
