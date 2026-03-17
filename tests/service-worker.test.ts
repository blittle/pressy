import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

const swSource = readFileSync(
  join(import.meta.dirname, '..', 'packages/pressy/src/runtime/sw.ts'),
  'utf-8',
)

describe('service worker offline cache matching', () => {
  // The PaginatedReader navigates backward with ?page=last appended to
  // chapter URLs (e.g. /books/flatland/chapter-2?page=last). Cache.match()
  // is query-string-sensitive by default, so without { ignoreSearch: true }
  // these requests miss the cache and show an offline error page.

  it('uses ignoreSearch on the offline book cache match', () => {
    // The BOOK_CACHE (pressy-offline-books) match must ignore query strings
    // so manually cached chapters serve for ?page=last requests.
    const bookCacheBlock = swSource.slice(
      swSource.indexOf('bookCache.match('),
      swSource.indexOf('bookCache.match(') + 80,
    )
    expect(bookCacheBlock).toContain('ignoreSearch: true')
  })

  it('uses ignoreSearch on pressy-pages fallback inside the book chapter route', () => {
    // When network fails for a book chapter URL, the SW falls back to
    // pressy-pages. This fallback must also ignore the query string.
    const bookRouteSection = swSource.slice(
      swSource.indexOf('// Offline-cached book chapters'),
      swSource.indexOf('// Cache images'),
    )
    const pagesFallbackMatches = [...bookRouteSection.matchAll(/pagesCache\.match\([^)]+\)/g)]
    expect(pagesFallbackMatches.length).toBeGreaterThanOrEqual(1)
    for (const m of pagesFallbackMatches) {
      expect(m[0]).toContain('ignoreSearch: true')
    }
  })

  it('uses ignoreSearch on the general NavigationRoute fallback', () => {
    // The general NavigationRoute handler also falls back to pressy-pages
    // when the network fails. It must use ignoreSearch so ?page=last works
    // even for URLs that don't match the book chapter route pattern.
    const navRouteSection = swSource.slice(
      swSource.indexOf('// General navigation'),
      swSource.indexOf('// Cache images'),
    )
    expect(navRouteSection).toContain('ignoreSearch: true')
  })

  it('registers the book chapter route before the general NavigationRoute', () => {
    // The book chapter Route must be registered before the NavigationRoute
    // so it gets priority for book URLs — otherwise the catch-all
    // NavigationRoute shadows it and the offline book cache is never checked.
    const bookRouteIdx = swSource.indexOf('// Offline-cached book chapters')
    const navRouteIdx = swSource.indexOf('// General navigation')
    expect(bookRouteIdx).toBeLessThan(navRouteIdx)
  })

  it('precacheAndRoute ignores the page query parameter', () => {
    // The ?page=last query parameter is used for backward chapter navigation.
    // precacheAndRoute must ignore it so precached chapters serve for
    // ?page=last requests without falling through to the network.
    expect(swSource).toContain('ignoreURLParametersMatching')
    expect(swSource).toMatch(/ignoreURLParametersMatching.*page/)
  })

  it('book chapter route regex works on subpath deployments', () => {
    // The route regex must NOT be anchored with ^ because on subpath
    // deployments (e.g. /pressy/pr-preview/pr-1/books/flatland/chapter-2)
    // the pathname starts with the base path, not /books/.
    const routeMatch = swSource.match(/url\.pathname\.match\(([^)]+)\)/)
    expect(routeMatch).toBeTruthy()
    const regex = routeMatch![1]
    // Must not start with /^ (anchored to start of string)
    expect(regex).not.toMatch(/^\/\^/)
  })

  it('general NavigationRoute fallback checks offline book cache', () => {
    // The NavigationRoute is a catch-all. When the network fails, it must
    // check pressy-offline-books (not just pressy-pages) so chapters
    // downloaded for offline reading are served even if the book chapter
    // Route didn't match (e.g. due to unexpected URL patterns).
    const navRouteSection = swSource.slice(
      swSource.indexOf('// General navigation'),
      swSource.indexOf('// Cache images'),
    )
    expect(navRouteSection).toContain('BOOK_CACHE')
    expect(navRouteSection).toContain('ignoreSearch: true')
  })

  it('every cache.match call in a navigation handler uses ignoreSearch', () => {
    // Broad safety net: every cache.match in a navigation/book route handler
    // should use ignoreSearch. The only cache.match calls that should NOT use
    // ignoreSearch are the OFFLINE_URL match (exact path, no query strings)
    // and the GET_CACHE_STATUS message handler (checking exact cached URLs).
    const lines = swSource.split('\n')
    const cacheMatchLines = lines
      .map((line, i) => ({ line: line.trim(), num: i + 1 }))
      .filter(({ line }) => line.includes('.match(') && line.includes('Cache'))

    // Collect match calls that omit ignoreSearch
    const withoutIgnore = cacheMatchLines.filter(
      ({ line }) => !line.includes('ignoreSearch') && !line.includes('OFFLINE_URL'),
    )

    // The only allowed cache.match without ignoreSearch is in the
    // GET_CACHE_STATUS message handler (exact URL matching for status checks)
    for (const { line, num } of withoutIgnore) {
      // Verify these are inside the message handler, not a navigation handler
      const preceding = lines.slice(Math.max(0, num - 15), num).join('\n')
      expect(
        preceding,
        `cache.match without ignoreSearch at line ${num} appears to be in a navigation handler: ${line}`,
      ).toContain('GET_CACHE_STATUS')
    }
  })
})
