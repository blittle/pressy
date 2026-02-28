import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'
import { formatRelativeTime } from '../packages/@pressy/components/src/reader/utils'
import type { Bookmark } from '../packages/pressy/src/types'
import type { BookmarkData, BookmarkProps } from '../packages/@pressy/components/src/reader/types'

const clientSource = readFileSync(
  join(import.meta.dirname, '..', 'packages/pressy/src/runtime/client.tsx'),
  'utf-8',
)

// ── initDB onblocked handler ────────────────────────────────

describe('initDB blocked upgrade handling', () => {
  it('has an onblocked handler so DB version upgrades do not hang', () => {
    // When IndexedDB.open() triggers a version upgrade but an older connection
    // is still open, the browser fires `onblocked`. Without a handler, the
    // promise returned by initDB() hangs forever, which silently breaks
    // features that depend on IndexedDB (e.g. the "Start Reading" CTA).
    expect(clientSource).toContain('request.onblocked')
  })

  it('rejects (rather than resolving) when blocked', () => {
    // The handler must call reject so callers see an error and can fall back
    // gracefully. A resolve() would hand back an unusable DB handle.
    const onblockedLine = clientSource
      .split('\n')
      .find(line => line.includes('request.onblocked'))
    expect(onblockedLine).toBeDefined()
    expect(onblockedLine).toContain('reject')
  })
})

// ── formatRelativeTime ──────────────────────────────────────

describe('formatRelativeTime', () => {
  it('returns "just now" for timestamps less than 60 seconds ago', () => {
    expect(formatRelativeTime(Date.now() - 30_000)).toBe('just now')
    expect(formatRelativeTime(Date.now())).toBe('just now')
  })

  it('returns minutes for timestamps between 1 and 59 minutes ago', () => {
    expect(formatRelativeTime(Date.now() - 60_000)).toBe('1m ago')
    expect(formatRelativeTime(Date.now() - 5 * 60_000)).toBe('5m ago')
    expect(formatRelativeTime(Date.now() - 59 * 60_000)).toBe('59m ago')
  })

  it('returns hours for timestamps between 1 and 23 hours ago', () => {
    expect(formatRelativeTime(Date.now() - 60 * 60_000)).toBe('1h ago')
    expect(formatRelativeTime(Date.now() - 12 * 60 * 60_000)).toBe('12h ago')
    expect(formatRelativeTime(Date.now() - 23 * 60 * 60_000)).toBe('23h ago')
  })

  it('returns days for timestamps between 1 and 29 days ago', () => {
    expect(formatRelativeTime(Date.now() - 24 * 60 * 60_000)).toBe('1d ago')
    expect(formatRelativeTime(Date.now() - 7 * 24 * 60 * 60_000)).toBe('7d ago')
    expect(formatRelativeTime(Date.now() - 29 * 24 * 60 * 60_000)).toBe('29d ago')
  })

  it('returns months for timestamps 30+ days ago', () => {
    expect(formatRelativeTime(Date.now() - 30 * 24 * 60 * 60_000)).toBe('1mo ago')
    expect(formatRelativeTime(Date.now() - 90 * 24 * 60 * 60_000)).toBe('3mo ago')
  })
})

// ── Bookmark type compatibility ─────────────────────────────

describe('Bookmark type compatibility', () => {
  it('Bookmark satisfies the expected shape', () => {
    const bookmark: Bookmark = {
      id: 'my-book:chapter-1:1234567890',
      bookSlug: 'my-book',
      chapterSlug: 'chapter-1',
      chapterTitle: 'Chapter 1',
      page: 3,
      totalPages: 10,
      scrollPosition: 0,
      createdAt: 1234567890,
    }
    expect(bookmark.id).toBe('my-book:chapter-1:1234567890')
    expect(bookmark.bookSlug).toBe('my-book')
    expect(bookmark.chapterSlug).toBe('chapter-1')
  })

  it('BookmarkData mirrors Bookmark fields', () => {
    const data: BookmarkData = {
      id: 'my-book:chapter-1:1234567890',
      bookSlug: 'my-book',
      chapterSlug: 'chapter-1',
      chapterTitle: 'Chapter 1',
      page: 3,
      totalPages: 10,
      scrollPosition: 0,
      createdAt: 1234567890,
    }
    // Bookmark and BookmarkData have the same shape — a Bookmark
    // should be assignable as a BookmarkData without transformation.
    const asBookmark: Bookmark = data
    expect(asBookmark.id).toBe(data.id)
  })

  it('BookmarkProps has required callback signatures', () => {
    const props: BookmarkProps = {
      bookmarks: [],
      onAddBookmark: vi.fn(),
      onDeleteBookmark: vi.fn(),
      onNavigateBookmark: vi.fn(),
    }
    expect(typeof props.onAddBookmark).toBe('function')
    expect(typeof props.onDeleteBookmark).toBe('function')
    expect(typeof props.onNavigateBookmark).toBe('function')
  })
})

// ── Bookmark restore priority ───────────────────────────────

describe('bookmark restore priority (localStorage)', () => {
  const originalLocalStorage = globalThis.localStorage

  let store: Record<string, string>

  beforeEach(() => {
    store = {}
    // Provide a minimal localStorage shim for Node
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: (key: string) => store[key] ?? null,
        setItem: (key: string, value: string) => { store[key] = value },
        removeItem: (key: string) => { delete store[key] },
      },
      writable: true,
      configurable: true,
    })
  })

  afterEach(() => {
    Object.defineProperty(globalThis, 'localStorage', {
      value: originalLocalStorage,
      writable: true,
      configurable: true,
    })
  })

  /**
   * Mirrors the restore logic from ChapterReaderWithProgress.handleRestoreProgress.
   * We replicate it here so it can be tested without importing the full component
   * (which requires DOM/Preact). If the logic in client.tsx changes, this test
   * should be updated to match.
   */
  function restoreProgress(chapterSlug: string) {
    // Check bookmark restore first
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

    // Fall back to last-read
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

  it('returns bookmark-restore data when present and matching chapter', () => {
    store['pressy-bookmark-restore'] = JSON.stringify({
      chapterSlug: 'ch-3',
      page: 5,
      totalPages: 20,
      scrollPosition: 100,
    })
    store['pressy-last-read'] = JSON.stringify({
      chapterSlug: 'ch-3',
      page: 2,
      totalPages: 20,
      scrollPosition: 50,
    })

    const result = restoreProgress('ch-3')
    expect(result).toEqual({ page: 5, totalPages: 20, scrollPosition: 100 })
    // bookmark-restore key should be removed after reading
    expect(localStorage.getItem('pressy-bookmark-restore')).toBeNull()
  })

  it('falls back to last-read when bookmark-restore targets a different chapter', () => {
    store['pressy-bookmark-restore'] = JSON.stringify({
      chapterSlug: 'ch-5',
      page: 10,
      totalPages: 20,
      scrollPosition: 200,
    })
    store['pressy-last-read'] = JSON.stringify({
      chapterSlug: 'ch-3',
      page: 2,
      totalPages: 20,
      scrollPosition: 50,
    })

    const result = restoreProgress('ch-3')
    expect(result).toEqual({ page: 2, totalPages: 20, scrollPosition: 50 })
    // bookmark-restore should still be cleaned up
    expect(localStorage.getItem('pressy-bookmark-restore')).toBeNull()
  })

  it('falls back to last-read when no bookmark-restore key exists', () => {
    store['pressy-last-read'] = JSON.stringify({
      chapterSlug: 'ch-1',
      page: 4,
      totalPages: 15,
      scrollPosition: 0,
    })

    const result = restoreProgress('ch-1')
    expect(result).toEqual({ page: 4, totalPages: 15, scrollPosition: 0 })
  })

  it('returns null when neither key matches the current chapter', () => {
    store['pressy-last-read'] = JSON.stringify({
      chapterSlug: 'ch-other',
      page: 4,
      totalPages: 15,
      scrollPosition: 0,
    })

    expect(restoreProgress('ch-1')).toBeNull()
  })

  it('returns null when localStorage is empty', () => {
    expect(restoreProgress('ch-1')).toBeNull()
  })

  it('handles corrupt JSON gracefully', () => {
    store['pressy-bookmark-restore'] = 'not valid json {'
    store['pressy-last-read'] = 'also broken {'
    expect(restoreProgress('ch-1')).toBeNull()
  })
})

// ── Bookmark ID generation ──────────────────────────────────

describe('bookmark ID format', () => {
  it('follows bookSlug:chapterSlug:timestamp pattern', () => {
    const bookSlug = 'my-book'
    const chapterSlug = 'chapter-1'
    const now = Date.now()
    const id = `${bookSlug}:${chapterSlug}:${now}`

    expect(id).toMatch(/^[^:]+:[^:]+:\d+$/)

    const [parsedBook, parsedChapter, parsedTime] = id.split(':')
    expect(parsedBook).toBe(bookSlug)
    expect(parsedChapter).toBe(chapterSlug)
    expect(Number(parsedTime)).toBe(now)
  })
})

// ── getBookmarksByBook sorting ──────────────────────────────

describe('bookmark sorting (newest first)', () => {
  it('sorts bookmarks by createdAt descending', () => {
    const bookmarks: Bookmark[] = [
      {
        id: 'book:ch-1:100',
        bookSlug: 'book',
        chapterSlug: 'ch-1',
        chapterTitle: 'Chapter 1',
        page: 0,
        totalPages: 10,
        scrollPosition: 0,
        createdAt: 100,
      },
      {
        id: 'book:ch-2:300',
        bookSlug: 'book',
        chapterSlug: 'ch-2',
        chapterTitle: 'Chapter 2',
        page: 5,
        totalPages: 10,
        scrollPosition: 0,
        createdAt: 300,
      },
      {
        id: 'book:ch-1:200',
        bookSlug: 'book',
        chapterSlug: 'ch-1',
        chapterTitle: 'Chapter 1',
        page: 3,
        totalPages: 10,
        scrollPosition: 0,
        createdAt: 200,
      },
    ]

    // Replicate the filtering+sorting from getBookmarksByBook
    const filtered = bookmarks
      .filter(b => b.bookSlug === 'book')
      .sort((a, b) => b.createdAt - a.createdAt)

    expect(filtered.map(b => b.createdAt)).toEqual([300, 200, 100])
  })

  it('filters by bookSlug', () => {
    const bookmarks: Bookmark[] = [
      {
        id: 'book-a:ch-1:100',
        bookSlug: 'book-a',
        chapterSlug: 'ch-1',
        chapterTitle: 'Ch 1',
        page: 0,
        totalPages: 10,
        scrollPosition: 0,
        createdAt: 100,
      },
      {
        id: 'book-b:ch-1:200',
        bookSlug: 'book-b',
        chapterSlug: 'ch-1',
        chapterTitle: 'Ch 1',
        page: 0,
        totalPages: 10,
        scrollPosition: 0,
        createdAt: 200,
      },
    ]

    const forBookA = bookmarks
      .filter(b => b.bookSlug === 'book-a')
      .sort((a, b) => b.createdAt - a.createdAt)

    expect(forBookA).toHaveLength(1)
    expect(forBookA[0].bookSlug).toBe('book-a')
  })
})

// ── StartReadingCTA must never be invisible ─────────────────

describe('StartReadingCTA always renders a visible button', () => {
  // Extract the function body for StartReadingCTA
  const fnStart = clientSource.indexOf('function StartReadingCTA(')
  const fnBody = clientSource.slice(fnStart, clientSource.indexOf('\n}\n', fnStart) + 3)

  it('does not initialize target state as null', () => {
    // If useState is initialized with null, the CTA is invisible until
    // the async IDB check completes. Any failure in that chain leaves
    // the button permanently missing. The state must be initialized with
    // a real target object so the button is always visible on first paint.
    expect(fnBody).not.toMatch(/useState\s*<[^>]*\|\s*null\s*>\s*\(\s*null\s*\)/)
  })

  it('does not conditionally return null based on target', () => {
    // A guard like `if (!target) return null` makes the component invisible
    // before the async check resolves. The component must always render an
    // <a> tag when the book has chapters.
    expect(fnBody).not.toMatch(/if\s*\(\s*!target\s*\)\s*return\s+null/)
  })

  it('computes initialTarget synchronously from localStorage', () => {
    // The initial target must be computed synchronously (not in a useEffect)
    // so the button is visible on the very first render frame.
    expect(fnBody).toContain('const initialTarget')
    expect(fnBody).toContain("localStorage.getItem('pressy-last-read')")
    // initialTarget must be used as the useState initializer
    expect(fnBody).toContain('useState(initialTarget)')
  })
})
