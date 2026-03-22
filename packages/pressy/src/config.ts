import type { BookMetadata } from './types.js'

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

export interface BookConfig extends BookMetadata {
  /** Directory name under content/books/ containing the book's chapters */
  slug: string
}

export interface PressyConfig {
  site: SiteConfig
  /** Multiple books. Use this when your project contains more than one book. */
  books?: BookConfig[]
  /** Shorthand for a single book — equivalent to `books: [book]`. */
  book?: BookConfig
  pagination?: PaginationConfig
  pwa?: PWAConfig
  outDir?: string
  contentDir?: string
  /**
   * Path to a module that exports custom MDX components.
   *
   * The module should have a default export that is either:
   * - An `MDXComponents` object mapping component names to Preact components, or
   * - A function that receives the default components and returns an `MDXComponents` object.
   *
   * @example
   * ```ts
   * // pressy.config.ts
   * export default defineConfig({
   *   site: { ... },
   *   components: './src/components.tsx',
   * })
   *
   * // src/components.tsx
   * export default {
   *   VideoEmbed: ({ url }) => <iframe src={url} />,
   * }
   *
   * // Or with a function to wrap defaults:
   * export default (defaults) => ({
   *   ...defaults,
   *   Figure: (props) => <div class="custom">{defaults.Figure(props)}</div>,
   * })
   * ```
   */
  components?: string
  /**
   * Lifecycle hooks for extending the build pipeline.
   * Reserved for future use — currently a no-op.
   */
  hooks?: PressyHooks
}

/**
 * Lifecycle hooks for extending the build pipeline.
 *
 * These are reserved for future releases. Defining them today is safe — they
 * are simply ignored until the corresponding feature lands.
 */
export interface PressyHooks {
  /** Called once before the build starts. */
  onBuildStart?: () => void | Promise<void>
  /** Called after all content has been discovered and resolved. */
  onContentReady?: (manifest: { books: unknown[]; articles: unknown[] }) => void | Promise<void>
  /** Called after each chapter is compiled from MDX. */
  onChapterProcessed?: (chapter: { slug: string; title: string; wordCount: number }) => void | Promise<void>
  /** Called after the build is complete. */
  onBuildEnd?: (output: { outDir: string }) => void | Promise<void>
}

export function defineConfig(config: PressyConfig): PressyConfig {
  // Normalise `book` (singular) into `books` (array)
  const books = config.books ?? (config.book ? [config.book] : undefined)

  return {
    ...config,
    books,
    book: undefined,            // canonical form uses `books`
    pagination: {
      defaultMode: 'scroll',
      ...config.pagination,
    },
    pwa: {
      enabled: true,
      themeColor: '#ffffff',
      backgroundColor: '#ffffff',
      display: 'standalone',
      ...config.pwa,
    },
    outDir: config.outDir ?? 'dist',
    contentDir: config.contentDir ?? 'content',
  }
}
