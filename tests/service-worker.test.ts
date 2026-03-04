import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

const swSource = readFileSync(
  join(import.meta.dirname, '..', 'packages/pressy/src/runtime/sw.ts'),
  'utf-8',
)

const offlineSource = readFileSync(
  join(import.meta.dirname, '..', 'packages/pressy/src/runtime/offline.ts'),
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
    // The top-level NavigationRoute handler also falls back to pressy-pages
    // when the network fails. It must use ignoreSearch so ?page=last works
    // even for URLs that don't match the book chapter route pattern.
    const navRouteSection = swSource.slice(
      swSource.indexOf('new NavigationRoute'),
      swSource.indexOf('// Offline-cached book chapters'),
    )
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

describe('Cache.match ignoreSearch behavior', () => {
  // Behavioral test: demonstrates the exact bug that ignoreSearch fixes.
  // The Cache API is not available in Node, so we use a spec-compliant
  // mock that matches the browser's URL-based lookup semantics.

  class MockCache {
    private entries = new Map<string, Response>()

    async put(request: Request | string, response: Response) {
      const url = typeof request === 'string' ? request : request.url
      this.entries.set(url, response)
    }

    async match(
      request: Request | string,
      options?: { ignoreSearch?: boolean },
    ): Promise<Response | undefined> {
      const raw = typeof request === 'string' ? request : request.url
      const url = new URL(raw, 'https://example.com')

      if (options?.ignoreSearch) {
        // Strip query string before matching (spec behavior)
        const keyWithoutSearch = `${url.origin}${url.pathname}`
        for (const [cached] of this.entries) {
          const cachedUrl = new URL(cached, 'https://example.com')
          if (`${cachedUrl.origin}${cachedUrl.pathname}` === keyWithoutSearch) {
            return this.entries.get(cached)
          }
        }
        return undefined
      }

      // Default: exact match including query string (spec behavior)
      return this.entries.get(url.href)
    }
  }

  it('default match FAILS for cached URL requested with ?page=last', async () => {
    const cache = new MockCache()
    const html = new Response('<html>Chapter 2</html>')
    await cache.put('https://example.com/books/flatland/chapter-2', html)

    // This is the bug: PaginatedReader requests ?page=last, cache has no match
    const result = await cache.match(
      'https://example.com/books/flatland/chapter-2?page=last',
    )
    expect(result).toBeUndefined()
  })

  it('ignoreSearch match SUCCEEDS for cached URL requested with ?page=last', async () => {
    const cache = new MockCache()
    const html = new Response('<html>Chapter 2</html>')
    await cache.put('https://example.com/books/flatland/chapter-2', html)

    // The fix: ignoreSearch strips query string before matching
    const result = await cache.match(
      'https://example.com/books/flatland/chapter-2?page=last',
      { ignoreSearch: true },
    )
    expect(result).toBeDefined()
    expect(await result!.text()).toBe('<html>Chapter 2</html>')
  })

  it('ignoreSearch matches regardless of which query params are present', async () => {
    const cache = new MockCache()
    await cache.put(
      'https://example.com/books/flatland/chapter-5',
      new Response('ch5'),
    )

    // Various query strings that should all match the same cached chapter
    for (const qs of ['?page=last', '?page=3', '?foo=bar&page=last']) {
      const result = await cache.match(
        `https://example.com/books/flatland/chapter-5${qs}`,
        { ignoreSearch: true },
      )
      expect(result, `should match for ${qs}`).toBeDefined()
    }
  })
})

describe('service worker update orchestration', () => {
  // After a new deploy the service worker must update and the page must
  // reload to pick up the new version. Without these mechanisms, users
  // see stale content even after refreshing.

  it('calls registration.update() to proactively check for new versions', () => {
    expect(offlineSource).toContain('registration.update()')
  })

  it('listens for controllerchange and reloads the page', () => {
    expect(offlineSource).toContain("addEventListener('controllerchange'")
    expect(offlineSource).toContain('window.location.reload()')
  })

  it('guards against reload on first install (no prior controller)', () => {
    // The controllerchange handler must only reload when a SW was already
    // controlling the page (hadController). Without this guard, first-time
    // visitors get an unnecessary reload.
    expect(offlineSource).toContain('hadController')
  })
})
