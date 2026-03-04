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

describe('service worker offline caching', () => {
  // The PaginatedReader navigates backward with ?page=last appended to
  // chapter URLs (e.g. /books/flatland/chapter-2?page=last). Rather than
  // relying on ignoreSearch (unreliable across browsers), the CACHE_BOOK
  // handler explicitly stores both the base URL and the ?page=last variant.

  it('CACHE_BOOK handler stores both base URL and ?page=last variant', () => {
    const cacheBookSection = swSource.slice(
      swSource.indexOf("type === 'CACHE_BOOK'"),
      swSource.indexOf("type === 'GET_CACHE_STATUS'"),
    )
    // Must clone the response (one for base URL, one for ?page=last)
    expect(cacheBookSection).toContain('response.clone()')
    // Must store the ?page=last variant
    expect(cacheBookSection).toContain('page=last')
    // Must call cache.put twice per chapter
    const putCalls = cacheBookSection.match(/cache\.put\(/g)
    expect(putCalls?.length).toBe(2)
  })

  it('registers the book chapter route BEFORE the general NavigationRoute', () => {
    // Workbox matches routes in registration order. The book chapter route
    // must come first so it can check BOOK_CACHE for offline-downloaded
    // chapters. If the NavigationRoute is first, it matches all navigation
    // requests and the book route is dead code.
    const bookRouteIndex = swSource.indexOf('// Offline-cached book chapters')
    const navRouteIndex = swSource.indexOf('// General navigation fallback')
    expect(bookRouteIndex).toBeGreaterThan(-1)
    expect(navRouteIndex).toBeGreaterThan(-1)
    expect(bookRouteIndex).toBeLessThan(navRouteIndex)
  })

  it('book chapter route checks BOOK_CACHE before falling through to network', () => {
    const bookRouteSection = swSource.slice(
      swSource.indexOf('// Offline-cached book chapters'),
      swSource.indexOf('// General navigation fallback'),
    )
    const bookCacheIndex = bookRouteSection.indexOf('bookCache.match(')
    const networkIndex = bookRouteSection.indexOf('navigationHandler.handle(')
    expect(bookCacheIndex).toBeGreaterThan(-1)
    expect(networkIndex).toBeGreaterThan(-1)
    expect(bookCacheIndex).toBeLessThan(networkIndex)
  })

  it('general NavigationRoute falls back to BOOK_CACHE for subpath deployments', () => {
    // On subpath deployments the book chapter route regex may not match,
    // so the NavigationRoute must also check the book cache.
    const navRouteSection = swSource.slice(
      swSource.indexOf('// General navigation fallback'),
      swSource.indexOf('// Cache images'),
    )
    expect(navRouteSection).toContain('bookCache.match(')
  })
})

describe('explicit ?page=last caching behavior', () => {
  // Behavioral test: demonstrates why we cache both URL variants explicitly.
  // The Cache API does exact URL matching by default, so ?page=last would
  // miss unless we store it as a separate cache entry.

  class MockCache {
    private entries = new Map<string, Response>()

    async put(request: Request | string, response: Response) {
      const url = typeof request === 'string' ? request : request.url
      this.entries.set(url, response)
    }

    async match(request: Request | string): Promise<Response | undefined> {
      const raw = typeof request === 'string' ? request : request.url
      const url = new URL(raw, 'https://example.com')
      return this.entries.get(url.href)
    }
  }

  it('exact match FAILS when only base URL is cached', async () => {
    const cache = new MockCache()
    await cache.put(
      'https://example.com/books/flatland/chapter-2',
      new Response('<html>Chapter 2</html>'),
    )

    // ?page=last misses because Cache API uses exact URL matching
    const result = await cache.match(
      'https://example.com/books/flatland/chapter-2?page=last',
    )
    expect(result).toBeUndefined()
  })

  it('exact match SUCCEEDS when ?page=last variant is also cached', async () => {
    const cache = new MockCache()
    const html = '<html>Chapter 2</html>'

    // Simulate what the CACHE_BOOK handler does: store both variants
    const response = new Response(html)
    const baseUrl = 'https://example.com/books/flatland/chapter-2'
    await cache.put(baseUrl, response.clone())
    await cache.put(baseUrl + '?page=last', response)

    // Both URLs now hit the cache
    const base = await cache.match(baseUrl)
    expect(base).toBeDefined()

    const pageLast = await cache.match(baseUrl + '?page=last')
    expect(pageLast).toBeDefined()
    expect(await pageLast!.text()).toBe(html)
  })

  it('book index page is cached alongside chapter pages', () => {
    // The client must include the book index page (/books/{slug}) in the
    // URLs sent to CACHE_BOOK, not just individual chapters.
    const clientSource = readFileSync(
      join(import.meta.dirname, '..', 'packages/pressy/src/runtime/client.tsx'),
      'utf-8',
    )

    // Both the footer download and PWA auto-download should include
    // the book index page URL
    const appInstalledSection = clientSource.slice(
      clientSource.indexOf('appinstalled'),
      clientSource.indexOf('appinstalled') + 300,
    )
    expect(appInstalledSection).toContain('/books/${book.slug}') // book index page
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
