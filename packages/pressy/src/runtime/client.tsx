import { render, type ComponentType, type VNode } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { signal, effect } from '@preact/signals'
import { Reader } from '@pressy-pub/components'
import type { ProgressData } from '@pressy-pub/components'
import { useMDXComponents } from '@pressy-pub/components/content'
import {
  registerServiceWorker,
  downloadBookForOffline,
  clearBookCache,
  isBookCached,
  invalidateBookPages,
  cachedBooks,
  cacheProgress,
  installPrompt,
  setupInstallPrompt,
  triggerInstall,
} from './offline.js'
import type { ContentManifest, Route, Book, Chapter, Article, ReadingProgress, Bookmark, ChapterMapData } from '../types.js'
import type { PaginationConfig } from '../config.js'

// State signals
export const currentRoute = signal<string>('/')
export const currentTheme = signal<'light' | 'dark' | 'sepia' | 'system'>('light')
export const isOffline = signal<boolean>(!navigator.onLine)

// IndexedDB for reading progress
const DB_NAME = 'pressy'
const DB_VERSION = 2
const PROGRESS_STORE = 'reading-progress'
const UNLOCKS_STORE = 'unlocks'
const BOOKMARKS_STORE = 'bookmarks'

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
      if (!database.objectStoreNames.contains(BOOKMARKS_STORE)) {
        database.createObjectStore(BOOKMARKS_STORE, { keyPath: 'id' })
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

export async function saveBookmark(bookmark: Bookmark): Promise<void> {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(BOOKMARKS_STORE, 'readwrite')
    const store = tx.objectStore(BOOKMARKS_STORE)
    const request = store.put(bookmark)
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

export async function deleteBookmark(id: string): Promise<void> {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(BOOKMARKS_STORE, 'readwrite')
    const store = tx.objectStore(BOOKMARKS_STORE)
    const request = store.delete(id)
    request.onsuccess = () => resolve()
    request.onerror = () => reject(request.error)
  })
}

export async function getBookmarksByBook(bookSlug: string): Promise<Bookmark[]> {
  const database = await initDB()
  return new Promise((resolve, reject) => {
    const tx = database.transaction(BOOKMARKS_STORE, 'readonly')
    const store = tx.objectStore(BOOKMARKS_STORE)
    const request = store.getAll()
    request.onsuccess = () => {
      const all: Bookmark[] = request.result || []
      const filtered = all
        .filter(b => b.bookSlug === bookSlug)
        .sort((a, b) => b.createdAt - a.createdAt)
      resolve(filtered)
    }
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
function resolveSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function setTheme(theme: 'light' | 'dark' | 'sepia' | 'system'): void {
  currentTheme.value = theme
  localStorage.setItem('pressy-theme', theme)
  const resolved = theme === 'system' ? resolveSystemTheme() : theme
  document.documentElement.setAttribute('data-theme', resolved)
}

function loadTheme(): void {
  const saved = localStorage.getItem('pressy-theme') as 'light' | 'dark' | 'sepia' | 'system' | null
  if (saved) {
    setTheme(saved)
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark')
  }

  // Listen for OS theme changes so "system" mode updates live
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (currentTheme.value === 'system') {
      document.documentElement.setAttribute('data-theme', resolveSystemTheme())
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

function StartReadingCTA({ book }: { book: Book }) {
  const [target, setTarget] = useState<{ label: string; href: string } | null>(null)

  useEffect(() => {
    if (book.chapters.length === 0) return
    const firstHref = `${basePath}/books/${book.slug}/${book.chapters[0].slug}`

    // Check localStorage for exact last-read position first
    try {
      const lastRead = localStorage.getItem('pressy-last-read')
      if (lastRead) {
        const { bookSlug, chapterSlug } = JSON.parse(lastRead)
        if (bookSlug === book.slug && book.chapters.some(ch => ch.slug === chapterSlug)) {
          setTarget({
            label: 'Continue Reading',
            href: `${basePath}/books/${book.slug}/${chapterSlug}`,
          })
          return
        }
      }
    } catch {
      // ignore
    }

    // Fall back to IndexedDB per-chapter progress
    getAllReadingProgress().then((allProgress) => {
      const progressMap = new Map(allProgress.map((p) => [p.chapterSlug, p]))

      // Walk chapters in order and find the furthest one that's in-progress (not completed)
      let furthestInProgress: Chapter | null = null
      for (const ch of book.chapters) {
        const p = progressMap.get(ch.slug)
        if (!p) continue
        const completed = p.totalPages > 0 && p.page >= p.totalPages - 1
        if (!completed && p.page > 0) {
          furthestInProgress = ch
        }
      }

      if (furthestInProgress) {
        setTarget({
          label: 'Continue Reading',
          href: `${basePath}/books/${book.slug}/${furthestInProgress.slug}`,
        })
      } else {
        setTarget({ label: 'Start Reading', href: firstHref })
      }
    }).catch(() => {
      setTarget({ label: 'Start Reading', href: firstHref })
    })
  }, [book])

  if (!target) return null

  return (
    <a href={target.href} class="pressy-cta">
      {target.label}
    </a>
  )
}

function InstallButton() {
  if (!installPrompt.value) return null

  return (
    <button
      class="pressy-cta pressy-cta-secondary"
      onClick={() => triggerInstall()}
    >
      Install
    </button>
  )
}

function PurchaseCTA({ book, prominent }: { book: Book; prominent?: boolean }) {
  const paywall = book.metadata.paywall
  if (!paywall?.enabled || !paywall.price) return null

  return (
    <a
      href={`/api/checkout?book=${book.slug}`}
      class={`pressy-cta ${prominent ? '' : 'pressy-cta-secondary'}`}
    >
      Purchase — {paywall.price}
    </a>
  )
}

function RecoverLink({ book }: { book: Book }) {
  const [state, setState] = useState<'idle' | 'form' | 'sending' | 'success' | 'error'>('idle')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: Event) => {
    e.preventDefault()
    if (!email) return
    setState('sending')
    fetch('/api/auth/recover', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, book: book.slug }),
    })
      .then((res) => {
        setState(res.ok ? 'success' : 'error')
      })
      .catch(() => setState('error'))
  }

  if (state === 'success') {
    return <p class="pressy-recover-success">Check your email for a recovery link.</p>
  }

  if (state === 'error') {
    return <p class="pressy-recover-error">Something went wrong. Please try again.</p>
  }

  if (state === 'idle') {
    return (
      <button class="pressy-recover-link" onClick={() => setState('form')}>
        Already purchased?
      </button>
    )
  }

  return (
    <form class="pressy-recover-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        required
      />
      <button type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send Recovery Link'}
      </button>
    </form>
  )
}

function usePaywallAuthorized(book: Book): boolean | undefined {
  const [authorized, setAuthorized] = useState<boolean | undefined>(
    book.metadata.paywall?.enabled ? undefined : true,
  )

  useEffect(() => {
    if (!book.metadata.paywall?.enabled) {
      setAuthorized(true)
      return
    }
    fetch(`/api/auth/status?book=${book.slug}`)
      .then((res) => res.json())
      .then((data: { authorized: boolean }) => {
        setAuthorized(data.authorized)
        if (data.authorized) invalidateBookPages(book.slug)
      })
      .catch(() => setAuthorized(false))
  }, [book.slug, book.metadata.paywall?.enabled])

  return authorized
}

function PaywallActions({ book, showPurchasePrompt, authorized }: { book: Book; showPurchasePrompt: boolean; authorized: boolean | undefined }) {
  if (!book.metadata.paywall?.enabled || authorized) return null

  if (showPurchasePrompt) {
    return (
      <div class="pressy-purchase-prompt">
        <p>This chapter requires purchase to read.</p>
        <PurchaseCTA book={book} prominent />
        <RecoverLink book={book} />
      </div>
    )
  }

  return <RecoverLink book={book} />
}

function BookPage({ book, articles }: { book: Book; articles?: Article[] }) {
  const showPurchasePrompt = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('purchase') === 'true'
  const authorized = usePaywallAuthorized(book)

  // Stats calculations
  const totalWords = book.chapters.reduce((sum, ch) => sum + (ch.wordCount || 0), 0)
  const readingMinutes = Math.ceil(totalWords / 200)
  const chapterCount = book.chapters.length
  const publishYear = book.metadata.publishDate
    ? new Date(book.metadata.publishDate).getFullYear()
    : null

  const formattedWords = totalWords.toLocaleString()

  return (
    <div class="pressy-home">
      <div class="pressy-hero">
        {book.coverUrl && (
          <img
            src={basePath + book.coverUrl}
            alt={`${book.metadata.title} cover`}
            class="pressy-hero-cover"
          />
        )}
        <div class="pressy-hero-text">
          <header class="pressy-home-header">
            <h1>{book.metadata.title}</h1>
            <p class="pressy-home-author">by {book.metadata.author}</p>
            {book.metadata.description && (
              <p class="pressy-home-desc">{book.metadata.description}</p>
            )}
          </header>
          {totalWords > 0 && (
            <div class="pressy-stats">
              <span>{chapterCount} chapter{chapterCount !== 1 ? 's' : ''}</span>
              <span class="pressy-stats-sep">&middot;</span>
              <span>{formattedWords} words</span>
              <span class="pressy-stats-sep">&middot;</span>
              <span>~{readingMinutes} min</span>
              {publishYear && (
                <>
                  <span class="pressy-stats-sep">&middot;</span>
                  <span>First published {publishYear}</span>
                </>
              )}
            </div>
          )}
          <PaywallActions book={book} showPurchasePrompt={showPurchasePrompt} authorized={authorized} />
          {chapterCount > 0 && (
            <div class="pressy-cta-group">
              <StartReadingCTA book={book} />
              {!authorized && !showPurchasePrompt && <PurchaseCTA book={book} />}
              <InstallButton />
            </div>
          )}
        </div>
      </div>
      {articles && articles.length > 0 && (
        <section class="pressy-home-section pressy-fade-sections">
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
    return <BookPage book={manifest.books[0]} articles={manifest.articles} />
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
  chapterMapData,
}: {
  book: Book
  chapterSlug: string
  chapter?: Chapter
  prevChapter?: { slug: string; title: string }
  nextChapter?: { slug: string; title: string }
  paginationMode?: 'scroll' | 'paginated'
  Content: ComponentType<{ components?: Record<string, unknown> }>
  chapterMapData?: ChapterMapData
}) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [bookProgressPercent, setBookProgressPercent] = useState<number | undefined>(undefined)
  const [paywallAuthorized, setPaywallAuthorized] = useState<boolean | undefined>(
    book.metadata.paywall?.enabled ? undefined : true,
  )

  // Check server-side auth status when paywall is enabled
  useEffect(() => {
    if (!book.metadata.paywall?.enabled) {
      setPaywallAuthorized(true)
      return
    }
    fetch(`/api/auth/status?book=${book.slug}`)
      .then((res) => res.json())
      .then((data: { authorized: boolean }) => {
        setPaywallAuthorized(data.authorized)
        if (data.authorized) invalidateBookPages(book.slug)
      })
      .catch(() => setPaywallAuthorized(true)) // fail open on network error
  }, [book.slug, book.metadata.paywall?.enabled])

  // Load initial global book progress
  useEffect(() => {
    getAllReadingProgress().then((allProgress) => {
      const percent = calculateBookProgressPercent(book, chapterSlug, 0, 0, allProgress)
      setBookProgressPercent(percent)
    })
  }, [book, chapterSlug])

  // Load bookmarks on mount
  useEffect(() => {
    getBookmarksByBook(book.slug).then(setBookmarks).catch(() => {})
  }, [book.slug])

  const handleAddBookmark = (data: {
    chapterSlug: string
    chapterTitle: string
    page: number
    totalPages: number
    scrollPosition: number
  }) => {
    const bookmark: Bookmark = {
      id: `${book.slug}:${data.chapterSlug}:${Date.now()}`,
      bookSlug: book.slug,
      chapterSlug: data.chapterSlug,
      chapterTitle: data.chapterTitle,
      page: data.page,
      totalPages: data.totalPages,
      scrollPosition: data.scrollPosition,
      createdAt: Date.now(),
    }
    saveBookmark(bookmark).then(() => {
      getBookmarksByBook(book.slug).then(setBookmarks)
    })
  }

  const handleDeleteBookmark = (id: string) => {
    deleteBookmark(id).then(() => {
      getBookmarksByBook(book.slug).then(setBookmarks)
    })
  }

  const handleNavigateBookmark = (bookmark: Bookmark) => {
    if (bookmark.chapterSlug === chapterSlug) {
      // Same chapter — scroll or page jump directly
      if (bookmark.scrollPosition > 0) {
        window.scrollTo(0, bookmark.scrollPosition)
      }
      // For paginated mode, the reader will handle page restore via the bookmark-restore key
      localStorage.setItem('pressy-bookmark-restore', JSON.stringify({
        chapterSlug: bookmark.chapterSlug,
        page: bookmark.page,
        totalPages: bookmark.totalPages,
        scrollPosition: bookmark.scrollPosition,
      }))
      // Trigger re-render/restore
      window.location.reload()
    } else {
      // Cross-chapter: store restore data and navigate
      localStorage.setItem('pressy-bookmark-restore', JSON.stringify({
        chapterSlug: bookmark.chapterSlug,
        page: bookmark.page,
        totalPages: bookmark.totalPages,
        scrollPosition: bookmark.scrollPosition,
      }))
      window.location.href = `${basePath}/books/${book.slug}/${bookmark.chapterSlug}`
    }
  }

  const handleSaveProgress = (data: ProgressData) => {
    const saveSlug = data.activeChapterSlug || chapterSlug

    // Single synchronous localStorage write — always current, survives
    // page close/refresh. This is the sole source of truth for position restore.
    localStorage.setItem('pressy-last-read', JSON.stringify({
      bookSlug: book.slug, chapterSlug: saveSlug,
      page: data.page, totalPages: data.totalPages,
      scrollPosition: data.scrollPosition,
    }))

    // IndexedDB write for per-chapter history (used by book progress bar).
    // Async — may not flush before close, but that's fine for progress %.
    saveReadingProgress({
      chapterSlug: saveSlug,
      page: data.page,
      totalPages: data.totalPages,
      scrollPosition: data.scrollPosition,
      timestamp: Date.now(),
    })

    if (data.totalPages > 0) {
      getAllReadingProgress().then((allProgress) => {
        const percent = calculateBookProgressPercent(
          book, saveSlug, data.page, data.totalPages, allProgress,
        )
        setBookProgressPercent(percent)
      })
    }
  }

  const handleRestoreProgress = async (): Promise<ProgressData | null> => {
    // Check bookmark restore first (cross-chapter bookmark navigation)
    try {
      const bookmarkRestore = localStorage.getItem('pressy-bookmark-restore')
      if (bookmarkRestore) {
        localStorage.removeItem('pressy-bookmark-restore')
        const parsed = JSON.parse(bookmarkRestore)
        if (parsed.chapterSlug === chapterSlug) {
          return { page: parsed.page, totalPages: parsed.totalPages, scrollPosition: parsed.scrollPosition || 0 }
        }
      }
    } catch {
      // ignore
    }

    // Read from localStorage — synchronous, always up to date.
    try {
      const lastRead = localStorage.getItem('pressy-last-read')
      if (lastRead) {
        const parsed = JSON.parse(lastRead)
        if (parsed.chapterSlug === chapterSlug && parsed.page > 0) {
          return { page: parsed.page, totalPages: parsed.totalPages, scrollPosition: parsed.scrollPosition || 0 }
        }
      }
    } catch {
      // ignore
    }
    return null
  }

  const handleChapterChange = (slug: string, page: number, chapterTotalPages: number) => {
    // Save progress for the chapter being left (mark as complete)
    saveReadingProgress({
      chapterSlug: slug,
      page,
      totalPages: chapterTotalPages,
      scrollPosition: 0,
      timestamp: Date.now(),
    })

    localStorage.setItem('pressy-last-read', JSON.stringify({
      bookSlug: book.slug, chapterSlug: slug,
      page, totalPages: chapterTotalPages,
    }))

    // Update global book progress
    getAllReadingProgress().then((allProgress) => {
      const percent = calculateBookProgressPercent(book, slug, page, chapterTotalPages, allProgress)
      setBookProgressPercent(percent)
    })
  }

  // Prefetch previous chapter HTML for fast backward navigation
  useEffect(() => {
    if (prevChapter) {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = prevChapter.slug
      document.head.appendChild(link)
      return () => { document.head.removeChild(link) }
    }
  }, [prevChapter])

  return (
    <Reader
      title={chapter?.title || chapterSlug}
      bookTitle={book.metadata.title}
      chapterSlug={chapterSlug}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
      paginationMode={paginationMode}
      onSaveProgress={handleSaveProgress}
      onRestoreProgress={handleRestoreProgress}
      bookProgressPercent={bookProgressPercent}
      initialContent={Content}
      chapterMapData={chapterMapData}
      currentChapterSlug={chapterSlug}
      allChapters={book.chapters.map(ch => ({ slug: ch.slug, title: ch.title, wordCount: ch.wordCount }))}
      bookBasePath={`${basePath}/books/${book.slug}`}
      onChapterChange={handleChapterChange}
      mdxComponents={useMDXComponents()}
      paywall={book.metadata.paywall?.enabled ? {
        previewChapters: book.metadata.paywall.previewChapters,
        authorized: paywallAuthorized ?? false,
        bookSlug: book.slug,
      } : undefined}
      bookmarkProps={{
        bookmarks,
        onAddBookmark: handleAddBookmark,
        onDeleteBookmark: handleDeleteBookmark,
        onNavigateBookmark: handleNavigateBookmark,
      }}
      offlineProps={{
        bookSlug: book.slug,
        chapterUrls: book.chapters.map(ch => `${basePath}/books/${book.slug}/${ch.slug}`),
        cachedBooks,
        cacheProgress,
        onDownload: downloadBookForOffline,
        onRemove: clearBookCache,
      }}
    >
      <Content components={useMDXComponents()} />
    </Reader>
  )
}

function renderChapterPage(
  manifest: ContentManifest,
  route: string,
  Content: ComponentType,
  paginationMode?: 'scroll' | 'paginated',
  chapterMapData?: ChapterMapData,
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
    : book
      ? { slug: `${basePath}/books/${bookSlug}`, title: book.metadata.title }
      : undefined
  const nextChapter = book && chapterIdx >= 0 && chapterIdx < book.chapters.length - 1
    ? { slug: chapterPath(book.chapters[chapterIdx + 1]), title: book.chapters[chapterIdx + 1].title }
    : book
      ? { slug: `${basePath}/books/${bookSlug}`, title: book.metadata.title }
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

  return (
    <ChapterReaderWithProgress
      book={book}
      chapterSlug={chapterSlug}
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
      paginationMode={paginationMode}
      Content={MDXContent}
      chapterMapData={chapterMapData}
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
  @keyframes pressy-fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .pressy-home {
    max-width: 65ch;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: var(--font-body, Georgia, 'Times New Roman', serif);
    color: var(--color-text, #1a1a1a);
  }

  /* ── Hero layout ────────────────────────── */
  .pressy-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-bottom: 2.5rem;
  }
  .pressy-hero-cover {
    max-width: 220px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    animation: pressy-fade-in 0.6s ease-out both;
  }
  .pressy-hero-text {
    animation: pressy-fade-in 0.6s ease-out 0.15s both;
  }

  /* ── Header ─────────────────────────────── */
  .pressy-home-header {
    margin-bottom: 1rem;
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

  /* ── Stats row ──────────────────────────── */
  .pressy-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.4em;
    font-size: 0.85rem;
    color: var(--color-text-muted, #666);
    margin-top: 1rem;
  }
  .pressy-stats-sep {
    opacity: 0.5;
  }

  /* ── CTA button ─────────────────────────── */
  .pressy-cta-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    align-items: center;
  }
  .pressy-cta {
    display: inline-block;
    margin-top: 1.25rem;
    padding: 0.75rem 1.75rem;
    background: var(--color-link, #2563eb);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: opacity 0.15s;
  }
  .pressy-cta:hover {
    opacity: 0.85;
  }
  .pressy-cta-secondary {
    background: transparent;
    color: var(--color-link, #2563eb);
    border: 1.5px solid var(--color-link, #2563eb);
    cursor: pointer;
    font-family: inherit;
  }
  .pressy-cta-secondary:hover {
    background: var(--color-link, #2563eb);
    color: #fff;
  }

  /* ── Purchase prompt ──────────────────── */
  .pressy-purchase-prompt {
    margin-top: 1.25rem;
    padding: 1.25rem;
    background: var(--color-bg-subtle, #f5f5f5);
    border-radius: 0.5rem;
    border: 1.5px solid var(--color-link, #2563eb);
    text-align: center;
  }
  .pressy-purchase-prompt p {
    margin: 0 0 0.75rem;
    font-weight: 500;
  }
  .pressy-purchase-prompt .pressy-cta {
    margin-top: 0;
  }

  /* ── Recover link ────────────────────────── */
  .pressy-recover-link {
    display: inline-block;
    margin-top: 0.75rem;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    font-size: 0.85rem;
    color: var(--color-link, #2563eb);
    text-decoration: underline;
    cursor: pointer;
  }
  .pressy-recover-link:hover {
    opacity: 0.75;
  }
  .pressy-recover-form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;
    align-items: center;
  }
  .pressy-recover-form input {
    flex: 1;
    min-width: 180px;
    padding: 0.5rem 0.75rem;
    font: inherit;
    font-size: 0.9rem;
    border: 1.5px solid var(--color-border, #e5e5e5);
    border-radius: 0.375rem;
    background: var(--color-bg, #fff);
    color: var(--color-text, #1a1a1a);
  }
  .pressy-recover-form button {
    padding: 0.5rem 1rem;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 600;
    background: var(--color-link, #2563eb);
    color: #fff;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: opacity 0.15s;
  }
  .pressy-recover-form button:hover {
    opacity: 0.85;
  }
  .pressy-recover-form button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .pressy-recover-success {
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: var(--color-link, #2563eb);
  }
  .pressy-recover-error {
    margin-top: 0.75rem;
    font-size: 0.85rem;
    color: #dc2626;
  }

  /* ── Sections below hero ────────────────── */
  .pressy-fade-sections {
    animation: pressy-fade-in 0.6s ease-out 0.3s both;
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

  /* ── Reduced motion ─────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .pressy-hero-cover,
    .pressy-hero-text,
    .pressy-fade-sections {
      animation: none;
    }
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

export function hydrate(data: HydrateData, Content?: ComponentType, chapterMapData?: ChapterMapData): void {
  basePath = getBasePath(data.route)
  currentRoute.value = data.route

  // Auto-redirect to last-read chapter on fresh app/tab open.
  // Clear the session flag when the app goes to background so the next
  // foreground open is treated as fresh (Android PWAs don't reliably
  // clear sessionStorage when swiped away).
  const isNewSession = !sessionStorage.getItem('pressy-session-active')
  sessionStorage.setItem('pressy-session-active', '1')
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      sessionStorage.removeItem('pressy-session-active')
    }
  })

  // Skip auto-redirect if this navigation came from within the reader
  // (e.g. backward from first chapter → book TOC). The flag is set by the
  // Reader component before window.location.href assignments.
  const isInternalNav = sessionStorage.getItem('pressy-internal-nav')
  sessionStorage.removeItem('pressy-internal-nav')

  if (isNewSession && !isInternalNav && (data.routeType === 'home' || data.routeType === 'book')) {
    const lastRead = localStorage.getItem('pressy-last-read')
    if (lastRead) {
      try {
        const { bookSlug, chapterSlug } = JSON.parse(lastRead)
        const book = data.manifest.books.find(b => b.slug === bookSlug)
        if (book?.chapters.some(ch => ch.slug === chapterSlug)) {
          window.location.replace(`${basePath}/books/${bookSlug}/${chapterSlug}`)
          return
        }
      } catch {
        // Invalid JSON in localStorage, ignore
      }
    }
  }

  // Initialize
  loadTheme()
  setupOfflineDetection()
  setupInstallPrompt()
  initDB()

  // Register service worker for PWA offline support
  registerServiceWorker(basePath)

  // Auto-download books for offline when the user installs the PWA
  window.addEventListener('appinstalled', () => {
    for (const book of data.manifest.books) {
      if (isBookCached(book.slug)) continue
      const chapterUrls = book.chapters.map(ch => `${basePath}/books/${book.slug}/${ch.slug}`)
      downloadBookForOffline(book.slug, chapterUrls)
    }
  })

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
      page = book ? <BookPage book={book} /> : <div>Book not found</div>
      break
    }
    case 'chapter':
      page = Content
        ? renderChapterPage(data.manifest, data.route, Content, data.pagination?.defaultMode, chapterMapData)
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
