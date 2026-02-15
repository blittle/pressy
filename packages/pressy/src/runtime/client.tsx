import { render, type ComponentType, type VNode } from 'preact'
import { useState, useEffect, useRef, useCallback } from 'preact/hooks'
import { signal, effect } from '@preact/signals'
import { Reader, DownloadBook, BookProgress } from '@pressy/components'
import type { ProgressData } from '@pressy/components'
import { useMDXComponents } from '@pressy/components/content'
import {
  registerServiceWorker,
  downloadBookForOffline,
  clearBookCache,
  cachedBooks,
  cacheProgress,
} from './offline.js'
import type { ContentManifest, Route, Book, Chapter, Article, ReadingProgress, ChapterLoaders } from '../types.js'
import type { PaginationConfig } from '../config.js'

// State signals
export const currentRoute = signal<string>('/')
export const currentTheme = signal<'light' | 'dark' | 'sepia'>('light')
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

export async function getAllReadingProgress(): Promise<ReadingProgress[]> {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(PROGRESS_STORE, 'readonly')
    const store = tx.objectStore(PROGRESS_STORE)
    const request = store.getAll()
    request.onsuccess = () => resolve(request.result || [])
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

function renderBookPage(book: Book, articles: Article[] = []) {
  const chapterUrls = book.chapters.map(
    (ch: Chapter) => `/books/${book.slug}/${ch.slug}`
  )

  return (
    <div class="pressy-home">
      <header class="pressy-home-header">
        <h1>{book.metadata.title}</h1>
        <p class="pressy-home-author">by {book.metadata.author}</p>
        {book.metadata.description && (
          <p class="pressy-home-desc">{book.metadata.description}</p>
        )}
      </header>
      <DownloadBook
        bookSlug={book.slug}
        chapterUrls={chapterUrls}
        cachedBooks={cachedBooks}
        cacheProgress={cacheProgress}
        onDownload={downloadBookForOffline}
        onRemove={clearBookCache}
      />
      <section class="pressy-home-section">
        <h2>Chapters</h2>
        <BookProgress
          bookSlug={book.slug}
          chapters={book.chapters.map((ch) => ({
            slug: ch.slug,
            title: ch.title,
            order: ch.order,
            wordCount: ch.wordCount || 0,
          }))}
          basePath={basePath}
          loadAllProgress={getAllReadingProgress}
        />
      </section>
      {articles.length > 0 && (
        <section class="pressy-home-section">
          <h2>Articles</h2>
          <nav class="pressy-chapter-list">
            {articles.map((article: Article) => (
              <a
                href={`${basePath}/articles/${article.slug}`}
                class="pressy-chapter-link"
              >
                {article.metadata.title}
              </a>
            ))}
          </nav>
        </section>
      )}
      <style>{HOME_STYLES}</style>
    </div>
  )
}

function renderHomePage(manifest: ContentManifest) {
  // Single-book site: render as the book page
  if (manifest.books.length === 1) {
    return renderBookPage(manifest.books[0], manifest.articles)
  }

  const siteTitle = manifest.books[0]?.metadata.title || 'Library'

  return (
    <div class="pressy-home">
      <header class="pressy-home-header">
        <h1>{siteTitle}</h1>
        {manifest.books[0]?.metadata.description && (
          <p class="pressy-home-desc">{manifest.books[0].metadata.description}</p>
        )}
      </header>
      {manifest.books.length > 0 && (
        <section class="pressy-home-section">
          <h2>Books</h2>
          <nav class="pressy-chapter-list">
            {manifest.books.map((book: Book) => (
              <a
                href={`${basePath}/books/${book.slug}`}
                class="pressy-chapter-link"
              >
                {book.metadata.title}
              </a>
            ))}
          </nav>
        </section>
      )}
      {manifest.articles.length > 0 && (
        <section class="pressy-home-section">
          <h2>Articles</h2>
          <nav class="pressy-chapter-list">
            {manifest.articles.map((article: Article) => (
              <a
                href={`${basePath}/articles/${article.slug}`}
                class="pressy-chapter-link"
              >
                {article.metadata.title}
              </a>
            ))}
          </nav>
        </section>
      )}
      <style>{HOME_STYLES}</style>
    </div>
  )
}

// Calculates global book progress % from word counts + saved progress data
function calculateBookProgressPercent(
  book: Book,
  currentChapterSlug: string,
  currentPage: number,
  currentTotalPages: number,
  allProgress: ReadingProgress[],
): number {
  const totalWords = book.chapters.reduce((sum, ch) => sum + (ch.wordCount || 0), 0)
  if (totalWords === 0) return 0

  const progressMap = new Map(allProgress.map((p) => [p.chapterSlug, p]))
  let wordsRead = 0

  for (const ch of book.chapters) {
    const chapterWords = ch.wordCount || 0
    if (ch.slug === currentChapterSlug) {
      // Use live page position for current chapter
      if (currentTotalPages > 0) {
        wordsRead += (currentPage / Math.max(1, currentTotalPages - 1)) * chapterWords
      }
    } else {
      const progress = progressMap.get(ch.slug)
      if (!progress) continue
      if (progress.totalPages > 0 && progress.page >= progress.totalPages - 1) {
        wordsRead += chapterWords
      } else if (progress.page > 0 && progress.totalPages > 0) {
        wordsRead += (progress.page / progress.totalPages) * chapterWords
      }
    }
  }

  return Math.min(100, (wordsRead / totalWords) * 100)
}

// Wrapper component that provides progress callbacks and computes global progress
function ChapterReaderWithProgress({
  book,
  chapterSlug,
  chapter,
  prevChapter,
  nextChapter,
  paginationMode,
  Content,
}: {
  book: Book
  chapterSlug: string
  chapter?: Chapter
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  paginationMode?: 'scroll' | 'paginated'
  Content: ComponentType<{ components?: Record<string, unknown> }>
}) {
  const [bookProgressPercent, setBookProgressPercent] = useState<number | undefined>(undefined)

  // Load initial global book progress
  useEffect(() => {
    getAllReadingProgress().then((allProgress) => {
      const percent = calculateBookProgressPercent(book, chapterSlug, 0, 0, allProgress)
      setBookProgressPercent(percent)
    })
  }, [book, chapterSlug])

  const handleSaveProgress = (data: ProgressData) => {
    saveReadingProgress({
      chapterSlug,
      page: data.page,
      totalPages: data.totalPages,
      scrollPosition: data.scrollPosition,
      timestamp: Date.now(),
    })

    // Update global book progress with live page position
    if (data.totalPages > 0) {
      getAllReadingProgress().then((allProgress) => {
        const percent = calculateBookProgressPercent(
          book, chapterSlug, data.page, data.totalPages, allProgress,
        )
        setBookProgressPercent(percent)
      })
    }
  }

  const handleRestoreProgress = async (): Promise<ProgressData | null> => {
    // Backward navigation: #end means go to the last page
    if (window.location.hash === '#end') {
      history.replaceState(null, '', window.location.pathname + window.location.search)
      return { page: Number.MAX_SAFE_INTEGER, totalPages: 0, scrollPosition: 0 }
    }
    // Forward/direct navigation: always start at beginning.
    // Progress is still saved for informational display but not used for positioning.
    return null
  }

  return (
    <Reader
      title={chapter?.title || chapterSlug}
      chapterSlug={chapterSlug}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
      paginationMode={paginationMode}
      onSaveProgress={handleSaveProgress}
      onRestoreProgress={handleRestoreProgress}
      bookProgressPercent={bookProgressPercent}
    >
      <Content components={useMDXComponents()} />
    </Reader>
  )
}

// ── Seamless Chapter Reader ─────────────────────────────────
// Wraps Reader with forward preloading, chapter boundary detection,
// URL updates via replaceState, and backward prefetch.

interface LoadedChapter {
  slug: string
  title: string
  Content: ComponentType<{ components?: Record<string, unknown> }>
  wordCount: number
}

function SeamlessChapterReader({
  book,
  chapterSlug,
  chapter,
  prevChapter,
  nextChapter,
  paginationMode,
  Content,
  chapterLoaders,
}: {
  book: Book
  chapterSlug: string
  chapter?: Chapter
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  paginationMode?: 'scroll' | 'paginated'
  Content: ComponentType<{ components?: Record<string, unknown> }>
  chapterLoaders: ChapterLoaders
}) {
  const [bookProgressPercent, setBookProgressPercent] = useState<number | undefined>(undefined)

  // Track all loaded chapters (initially just the current one)
  const [loadedChapters, setLoadedChapters] = useState<LoadedChapter[]>(() => [{
    slug: chapterSlug,
    title: chapter?.title || chapterSlug,
    Content,
    wordCount: chapter?.wordCount || 0,
  }])

  // Track the currently visible chapter (for URL and progress)
  const [activeChapterSlug, setActiveChapterSlug] = useState(chapterSlug)

  // Refs for DOM access
  const articleElRef = useRef<HTMLElement | null>(null)
  const viewportElRef = useRef<HTMLElement | null>(null)
  const isLoadingRef = useRef(false)

  // Determine what can still be loaded forward
  const lastLoadedSlug = loadedChapters[loadedChapters.length - 1].slug
  const lastLoadedIdx = book.chapters.findIndex(c => c.slug === lastLoadedSlug)
  const hasMoreChapters = lastLoadedIdx >= 0 && lastLoadedIdx < book.chapters.length - 1

  // The "next chapter" for navigation is the one AFTER all loaded chapters
  const finalNextChapterIdx = lastLoadedIdx + 1
  const finalNextChapter = finalNextChapterIdx < book.chapters.length
    ? {
        slug: `${basePath}/books/${book.slug}/${book.chapters[finalNextChapterIdx].slug}`,
        title: book.chapters[finalNextChapterIdx].title,
      }
    : undefined

  // Prefetch previous chapter HTML for fast backward navigation
  useEffect(() => {
    if (!prevChapter) return
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = prevChapter.slug
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [prevChapter])

  // Load initial global book progress
  useEffect(() => {
    getAllReadingProgress().then((allProgress) => {
      const percent = calculateBookProgressPercent(book, chapterSlug, 0, 0, allProgress)
      setBookProgressPercent(percent)
    })
  }, [book, chapterSlug])

  // Handle near-end: preload next chapter
  const handleNearEnd = useCallback(async () => {
    if (!hasMoreChapters || isLoadingRef.current) return
    isLoadingRef.current = true

    const nextCh = book.chapters[lastLoadedIdx + 1]
    const loader = chapterLoaders[nextCh.slug]
    if (!loader) {
      isLoadingRef.current = false
      return
    }

    try {
      const module = await loader()
      const NextContent = module.default as ComponentType<{ components?: Record<string, unknown> }>

      setLoadedChapters(prev => [
        ...prev,
        {
          slug: nextCh.slug,
          title: nextCh.title,
          Content: NextContent,
          wordCount: nextCh.wordCount || 0,
        },
      ])
    } catch (err) {
      console.error('Failed to preload chapter:', nextCh.slug, err)
    }

    isLoadingRef.current = false
  }, [hasMoreChapters, lastLoadedIdx, book.chapters, chapterLoaders])

  // Detect chapter boundaries from DOM markers on page change
  const handlePageChange = useCallback((page: number, totalPages: number) => {
    const article = articleElRef.current
    const viewport = viewportElRef.current
    if (!article || !viewport || loadedChapters.length <= 1) return

    const viewportWidth = viewport.clientWidth
    if (viewportWidth === 0) return

    // Find chapter boundary markers and determine which chapter the current page belongs to
    const markers = article.querySelectorAll('[data-chapter-start]')
    let newActiveSlug = loadedChapters[0].slug
    let chapterLocalStartPage = 0

    for (const marker of markers) {
      const markerEl = marker as HTMLElement
      const markerPage = Math.floor(markerEl.offsetLeft / viewportWidth)
      if (page >= markerPage) {
        newActiveSlug = markerEl.getAttribute('data-chapter-start') || newActiveSlug
        chapterLocalStartPage = markerPage
      }
    }

    if (newActiveSlug !== activeChapterSlug) {
      setActiveChapterSlug(newActiveSlug)

      // Update URL without page reload
      const newPath = `${basePath}/books/${book.slug}/${newActiveSlug}`
      history.replaceState(null, '', newPath)

      // Save progress for the chapter we just left
      saveReadingProgress({
        chapterSlug: activeChapterSlug,
        page: 0,
        totalPages: 0,
        scrollPosition: 0,
        timestamp: Date.now(),
      })
    }

    // Update global book progress
    if (totalPages > 0) {
      const chapterLocalPage = page - chapterLocalStartPage
      getAllReadingProgress().then((allProgress) => {
        const percent = calculateBookProgressPercent(
          book, newActiveSlug, chapterLocalPage, totalPages - chapterLocalStartPage, allProgress,
        )
        setBookProgressPercent(percent)
      })
    }
  }, [loadedChapters, activeChapterSlug, book])

  const handleSaveProgress = (data: ProgressData) => {
    // Determine chapter-local page from the active chapter
    const article = articleElRef.current
    const viewport = viewportElRef.current
    let localPage = data.page
    let localTotalPages = data.totalPages

    if (article && viewport && loadedChapters.length > 1) {
      const viewportWidth = viewport.clientWidth
      if (viewportWidth > 0) {
        const markers = article.querySelectorAll('[data-chapter-start]')
        let startPage = 0

        for (const marker of markers) {
          const markerEl = marker as HTMLElement
          const markerPage = Math.floor(markerEl.offsetLeft / viewportWidth)
          const slug = markerEl.getAttribute('data-chapter-start')
          if (slug === activeChapterSlug) {
            startPage = markerPage
          }
        }

        // For the first loaded chapter, start is 0
        if (activeChapterSlug === loadedChapters[0].slug) {
          startPage = 0
        }

        localPage = data.page - startPage
        // Approximate local total by finding the next boundary
        let endPage = data.totalPages
        let foundCurrent = false
        for (const marker of markers) {
          const markerEl = marker as HTMLElement
          const markerPage = Math.floor(markerEl.offsetLeft / viewportWidth)
          const slug = markerEl.getAttribute('data-chapter-start')
          if (foundCurrent) {
            endPage = markerPage
            break
          }
          if (slug === activeChapterSlug) {
            foundCurrent = true
          }
        }
        if (activeChapterSlug === loadedChapters[0].slug) {
          const firstMarker = markers[0] as HTMLElement | undefined
          endPage = firstMarker ? Math.floor(firstMarker.offsetLeft / viewportWidth) : data.totalPages
          localTotalPages = endPage
        } else {
          localTotalPages = endPage - startPage
        }
      }
    }

    saveReadingProgress({
      chapterSlug: activeChapterSlug,
      page: localPage,
      totalPages: localTotalPages,
      scrollPosition: data.scrollPosition,
      timestamp: Date.now(),
    })

    if (data.totalPages > 0) {
      getAllReadingProgress().then((allProgress) => {
        const percent = calculateBookProgressPercent(
          book, activeChapterSlug, localPage, localTotalPages, allProgress,
        )
        setBookProgressPercent(percent)
      })
    }
  }

  const handleRestoreProgress = async (): Promise<ProgressData | null> => {
    // Backward navigation: #end means go to the last page
    if (window.location.hash === '#end') {
      history.replaceState(null, '', window.location.pathname + window.location.search)
      return { page: Number.MAX_SAFE_INTEGER, totalPages: 0, scrollPosition: 0 }
    }
    // Forward/direct navigation: always start at beginning.
    // Progress is still saved to IndexedDB for informational display
    // (book progress badges) but not used for positioning.
    return null
  }

  const components = useMDXComponents()

  return (
    <Reader
      title={chapter?.title || chapterSlug}
      chapterSlug={activeChapterSlug}
      prevChapter={prevChapter}
      nextChapter={loadedChapters.length > 1 ? finalNextChapter : nextChapter}
      paginationMode={paginationMode}
      onSaveProgress={handleSaveProgress}
      onRestoreProgress={handleRestoreProgress}
      bookProgressPercent={bookProgressPercent}
      onNearEnd={handleNearEnd}
      onPageChange={handlePageChange}
      articleRef={(el) => { articleElRef.current = el }}
      viewportRef={(el) => { viewportElRef.current = el }}
    >
      {loadedChapters.map((ch, i) => (
        <div key={ch.slug}>
          {i > 0 && (
            <div
              data-chapter-start={ch.slug}
              class="pressy-chapter-break"
              style={{ breakBefore: 'column' }}
            >
              <h1>{ch.title}</h1>
            </div>
          )}
          <ch.Content components={components} />
        </div>
      ))}
    </Reader>
  )
}

function renderChapterPage(
  manifest: ContentManifest,
  route: string,
  Content: ComponentType,
  paginationMode?: 'scroll' | 'paginated',
  chapterLoaders?: ChapterLoaders,
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

  const MDXContent = Content as ComponentType<{ components?: Record<string, unknown> }>

  if (!book) {
    return (
      <Reader
        title={chapter?.title || chapterSlug}
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        paginationMode={paginationMode}
      >
        <MDXContent components={useMDXComponents()} />
      </Reader>
    )
  }

  // Use seamless chapter reader when chapter loaders are available and paginated
  if (chapterLoaders && paginationMode === 'paginated') {
    return (
      <SeamlessChapterReader
        book={book}
        chapterSlug={chapterSlug}
        chapter={chapter}
        prevChapter={prevChapter}
        nextChapter={nextChapter}
        paginationMode={paginationMode}
        Content={MDXContent}
        chapterLoaders={chapterLoaders}
      />
    )
  }

  return (
    <ChapterReaderWithProgress
      book={book}
      chapterSlug={chapterSlug}
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
      paginationMode={paginationMode}
      Content={MDXContent}
    />
  )
}

function renderArticlePage(
  manifest: ContentManifest,
  route: string,
  Content: ComponentType,
) {
  const articleSlug = route.split('/')[2]
  const article = manifest.articles.find((a: Article) => a.slug === articleSlug)

  const MDXContent = Content as ComponentType<{ components?: Record<string, unknown> }>

  return (
    <Reader title={article?.metadata.title || articleSlug}>
      <MDXContent components={useMDXComponents()} />
    </Reader>
  )
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
  pagination?: PaginationConfig
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

export function hydrate(data: HydrateData, Content?: ComponentType, chapterLoaders?: ChapterLoaders): void {
  basePath = getBasePath(data.route)
  currentRoute.value = data.route

  // Initialize
  loadTheme()
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
  let page: VNode
  switch (data.routeType) {
    case 'home':
      page = renderHomePage(data.manifest)
      break
    case 'book': {
      const bookSlug = data.route.split('/')[2]
      const book = data.manifest.books.find((b: Book) => b.slug === bookSlug)
      page = book ? renderBookPage(book) : <div>Book not found</div>
      break
    }
    case 'chapter':
      page = Content
        ? renderChapterPage(data.manifest, data.route, Content, data.pagination?.defaultMode, chapterLoaders)
        : <div>Loading...</div>
      break
    case 'article':
      page = Content
        ? renderArticlePage(data.manifest, data.route, Content)
        : <div>Loading...</div>
      break
    case 'books':
      page = renderHomePage(data.manifest)
      break
    case 'articles':
      page = renderHomePage(data.manifest)
      break
    default:
      page = <div>Page not found</div>
  }

  render(page, document.getElementById('app')!)
}

// Export for use in components
export { signal, effect }
