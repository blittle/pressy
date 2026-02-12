import { h, render, ComponentType } from 'preact'
import { signal, effect } from '@preact/signals'
import { Reader, DownloadBook } from '@pressy/components'
import { useMDXComponents } from '@pressy/components/content'
import {
  registerServiceWorker,
  downloadBookForOffline,
  clearBookCache,
  cachedBooks,
  cacheProgress,
} from './offline.js'
import type { ContentManifest, Route, Book, Chapter, Article, ReadingProgress } from '../types.js'

// State signals
export const currentRoute = signal<string>('/')
export const currentTheme = signal<'light' | 'dark' | 'sepia'>('light')
export const paginationMode = signal<'scroll' | 'paginated'>('scroll')
export const currentPage = signal<number>(0)
export const isOffline = signal<boolean>(!navigator.onLine)

// IndexedDB for reading progress
const DB_NAME = 'pressy'
const DB_VERSION = 1
const PROGRESS_STORE = 'reading-progress'
const UNLOCKS_STORE = 'unlocks'

let db: IDBDatabase | null = null

async function initDB(): Promise<IDBDatabase> {
  if (db) return db

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onerror = () => reject(request.error)
    request.onsuccess = () => {
      db = request.result
      resolve(db)
    }

    request.onupgradeneeded = (event) => {
      const database = (event.target as IDBOpenDBRequest).result
      if (!database.objectStoreNames.contains(PROGRESS_STORE)) {
        database.createObjectStore(PROGRESS_STORE, { keyPath: 'chapterSlug' })
      }
      if (!database.objectStoreNames.contains(UNLOCKS_STORE)) {
        database.createObjectStore(UNLOCKS_STORE, { keyPath: 'bookSlug' })
      }
    }
  })
}

export async function saveReadingProgress(progress: ReadingProgress): Promise<void> {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(PROGRESS_STORE, 'readwrite')
    const store = tx.objectStore(PROGRESS_STORE)
    const request = store.put(progress)
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

export async function getReadingProgress(chapterSlug: string): Promise<ReadingProgress | null> {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(PROGRESS_STORE, 'readonly')
    const store = tx.objectStore(PROGRESS_STORE)
    const request = store.get(chapterSlug)
    request.onsuccess = () => resolve(request.result || null)
    request.onerror = () => reject(request.error)
  })
}

export async function isBookUnlocked(bookSlug: string): Promise<boolean> {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(UNLOCKS_STORE, 'readonly')
    const store = tx.objectStore(UNLOCKS_STORE)
    const request = store.get(bookSlug)
    request.onsuccess = () => resolve(!!request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function unlockBook(bookSlug: string, orderId?: string): Promise<void> {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(UNLOCKS_STORE, 'readwrite')
    const store = tx.objectStore(UNLOCKS_STORE)
    const request = store.put({ bookSlug, orderId, unlockedAt: Date.now() })
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

// Client-side router
export function navigate(path: string, replace = false): void {
  if (replace) {
    history.replaceState(null, '', path)
  } else {
    history.pushState(null, '', path)
  }
  currentRoute.value = path
}

// Theme management
export function setTheme(theme: 'light' | 'dark' | 'sepia'): void {
  currentTheme.value = theme
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('pressy-theme', theme)
}

function loadTheme(): void {
  const saved = localStorage.getItem('pressy-theme') as 'light' | 'dark' | 'sepia' | null
  if (saved) {
    setTheme(saved)
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark')
  }
}

// Pagination management
export function setPaginationMode(mode: 'scroll' | 'paginated'): void {
  paginationMode.value = mode
  localStorage.setItem('pressy-pagination', mode)
}

function loadPaginationMode(): void {
  const saved = localStorage.getItem('pressy-pagination') as 'scroll' | 'paginated' | null
  if (saved) {
    paginationMode.value = saved
  }
}

// Keyboard navigation for paginated mode
function setupKeyboardNav(): void {
  document.addEventListener('keydown', (e) => {
    if (paginationMode.value !== 'paginated') return

    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault()
      currentPage.value++
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      if (currentPage.value > 0) {
        currentPage.value--
      }
    }
  })
}

// Offline detection
function setupOfflineDetection(): void {
  window.addEventListener('online', () => {
    isOffline.value = false
  })
  window.addEventListener('offline', () => {
    isOffline.value = true
  })
}

// ── Page renderers ──────────────────────────────────────────

function renderHomePage(manifest: ContentManifest) {
  const siteTitle = manifest.books[0]?.metadata.title || 'Library'

  return h('div', { class: 'pressy-home' },
    h('header', { class: 'pressy-home-header' },
      h('h1', null, siteTitle),
      manifest.books[0]?.metadata.description &&
        h('p', { class: 'pressy-home-desc' }, manifest.books[0].metadata.description),
    ),
    manifest.books.length > 0 && h('section', { class: 'pressy-home-section' },
      h('h2', null, 'Chapters'),
      h('nav', { class: 'pressy-chapter-list' },
        ...manifest.books.flatMap((book: Book) =>
          book.chapters.map((ch: Chapter) =>
            h('a', {
              href: `${basePath}/books/${book.slug}/${ch.slug}`,
              class: 'pressy-chapter-link',
            },
              h('span', { class: 'pressy-chapter-order' }, `${ch.order}.`),
              h('span', null, ch.title),
            )
          )
        )
      ),
    ),
    manifest.articles.length > 0 && h('section', { class: 'pressy-home-section' },
      h('h2', null, 'Articles'),
      h('nav', { class: 'pressy-chapter-list' },
        ...manifest.articles.map((article: Article) =>
          h('a', {
            href: `${basePath}/articles/${article.slug}`,
            class: 'pressy-chapter-link',
          }, article.metadata.title)
        ),
      ),
    ),
    h('style', null, HOME_STYLES),
  )
}

function renderBookPage(book: Book) {
  const chapterUrls = book.chapters.map(
    (ch: Chapter) => `/books/${book.slug}/${ch.slug}`
  )

  return h('div', { class: 'pressy-home' },
    h('header', { class: 'pressy-home-header' },
      h('h1', null, book.metadata.title),
      h('p', { class: 'pressy-home-author' }, `by ${book.metadata.author}`),
      book.metadata.description &&
        h('p', { class: 'pressy-home-desc' }, book.metadata.description),
    ),
    // Offline download button
    h(DownloadBook, {
      bookSlug: book.slug,
      chapterUrls,
      cachedBooks,
      cacheProgress,
      onDownload: downloadBookForOffline,
      onRemove: clearBookCache,
    }),
    h('section', { class: 'pressy-home-section' },
      h('h2', null, 'Chapters'),
      h('nav', { class: 'pressy-chapter-list' },
        ...book.chapters.map((ch: Chapter) =>
          h('a', {
            href: `${basePath}/books/${book.slug}/${ch.slug}`,
            class: 'pressy-chapter-link',
          },
            h('span', { class: 'pressy-chapter-order' }, `${ch.order}.`),
            h('span', null, ch.title),
          )
        ),
      ),
    ),
    h('style', null, HOME_STYLES),
  )
}

function renderChapterPage(
  manifest: ContentManifest,
  route: string,
  Content: ComponentType,
) {
  const parts = route.split('/')
  const bookSlug = parts[2]
  const chapterSlug = parts[3]
  const book = manifest.books.find((b: Book) => b.slug === bookSlug)
  const chapterIdx = book ? book.chapters.findIndex((c: Chapter) => c.slug === chapterSlug) : -1
  const chapter = book?.chapters[chapterIdx]
  const chapterPath = (ch: Chapter) => `${basePath}/books/${bookSlug}/${ch.slug}`
  const prevChapter = book && chapterIdx > 0
    ? { slug: chapterPath(book.chapters[chapterIdx - 1]), title: book.chapters[chapterIdx - 1].title }
    : undefined
  const nextChapter = book && chapterIdx >= 0 && chapterIdx < book.chapters.length - 1
    ? { slug: chapterPath(book.chapters[chapterIdx + 1]), title: book.chapters[chapterIdx + 1].title }
    : undefined

  return h(Reader, {
    title: chapter?.title || chapterSlug,
    bookTitle: book?.metadata.title,
    prevChapter,
    nextChapter,
    mode: paginationMode.value as 'scroll' | 'paginated',
    children: h(Content, { components: useMDXComponents() } as Record<string, unknown>),
  })
}

function renderArticlePage(
  manifest: ContentManifest,
  route: string,
  Content: ComponentType,
) {
  const articleSlug = route.split('/')[2]
  const article = manifest.articles.find((a: Article) => a.slug === articleSlug)

  return h(Reader, {
    title: article?.metadata.title || articleSlug,
    mode: 'scroll',
    children: h(Content, { components: useMDXComponents() } as Record<string, unknown>),
  })
}

// ── Styles ──────────────────────────────────────────────────

const HOME_STYLES = `
  .pressy-home {
    max-width: 65ch;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: var(--font-body, Georgia, 'Times New Roman', serif);
    color: var(--color-text, #1a1a1a);
  }
  .pressy-home-header {
    margin-bottom: 3rem;
    text-align: center;
  }
  .pressy-home-header h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .pressy-home-author {
    font-style: italic;
    color: var(--color-text-muted, #666);
  }
  .pressy-home-desc {
    color: var(--color-text-muted, #666);
    line-height: 1.6;
    max-width: 50ch;
    margin: 0.5rem auto 0;
  }
  .pressy-home-section {
    margin-bottom: 2rem;
  }
  .pressy-home-section h2 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--color-border, #e5e5e5);
    padding-bottom: 0.5rem;
  }
  .pressy-chapter-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .pressy-chapter-link {
    display: flex;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: var(--color-text, #1a1a1a);
    border-radius: 0.5rem;
    transition: background 0.15s;
  }
  .pressy-chapter-link:hover {
    background: var(--color-bg-subtle, #f5f5f5);
  }
  .pressy-chapter-order {
    color: var(--color-text-muted, #666);
    min-width: 2ch;
  }
`

// ── Main hydration function ─────────────────────────────────

interface HydrateData {
  route: string
  routeType: string
  manifest: ContentManifest
}

// Compute the base path by comparing the known route to the actual URL
// e.g. URL="/pressy/pr-preview/pr-4/books/flatland" with route="/books/flatland"
// yields basePath="/pressy/pr-preview/pr-4"
function getBasePath(route: string): string {
  const pathname = window.location.pathname
  // Remove trailing slash for comparison
  const cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  const cleanRoute = route.endsWith('/') ? route.slice(0, -1) : route
  if (cleanRoute === '' || cleanRoute === '/') {
    // Home page: strip /index.html or trailing slash
    return cleanPath.replace(/\/index\.html$/, '') || ''
  }
  const idx = cleanPath.indexOf(cleanRoute)
  if (idx > 0) {
    return cleanPath.slice(0, idx)
  }
  return ''
}

let basePath = ''

export function hydrate(data: HydrateData, Content?: ComponentType): void {
  basePath = getBasePath(data.route)
  currentRoute.value = data.route

  // Initialize
  loadTheme()
  loadPaginationMode()
  setupKeyboardNav()
  setupOfflineDetection()
  initDB()

  // Register service worker for PWA offline support
  registerServiceWorker(basePath)

  // Handle popstate for back/forward navigation
  window.addEventListener('popstate', () => {
    currentRoute.value = window.location.pathname
  })

  // Handle client-side link clicks
  // For now, allow normal browser navigation for cross-page links
  // so each page loads its own HTML with the correct MDX content.
  // Only intercept hash links for in-page navigation.
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest('a')
    if (!link) return

    const href = link.getAttribute('href')
    if (!href) return

    // Let external and full-page links navigate normally
    if (href.startsWith('http') || href.startsWith('#')) return

    // Same-path hash links: handle client-side
    if (href.startsWith(data.route + '#')) {
      e.preventDefault()
      const hash = href.slice(href.indexOf('#'))
      const target = document.querySelector(hash)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Cross-page links: let the browser navigate normally
    // (each page is a full server-rendered HTML document)
  })

  // Render the app
  let page
  switch (data.routeType) {
    case 'home':
      page = renderHomePage(data.manifest)
      break
    case 'book': {
      const bookSlug = data.route.split('/')[2]
      const book = data.manifest.books.find((b: Book) => b.slug === bookSlug)
      page = book ? renderBookPage(book) : h('div', null, 'Book not found')
      break
    }
    case 'chapter':
      page = Content
        ? renderChapterPage(data.manifest, data.route, Content)
        : h('div', null, 'Loading...')
      break
    case 'article':
      page = Content
        ? renderArticlePage(data.manifest, data.route, Content)
        : h('div', null, 'Loading...')
      break
    case 'books':
      page = renderHomePage(data.manifest)
      break
    case 'articles':
      page = renderHomePage(data.manifest)
      break
    default:
      page = h('div', null, 'Page not found')
  }

  render(page, document.getElementById('app')!)
}

// Export for use in components
export { signal, effect }
