/**
 * Pure functions extracted from sw.ts for testability.
 * These handle URL routing, normalization, and response preparation
 * for the service worker's offline caching logic.
 */

/**
 * Returns true if the given pathname matches a book chapter URL.
 * Does NOT anchor to the start of the path, so it works on subpath
 * deployments (e.g. /pressy/pr-preview/pr-1/books/flatland/chapter-2/).
 */
export function isBookChapterNavigation(
  pathname: string,
  requestMode: string,
): boolean {
  return requestMode === 'navigate' && /\/books\/[^/]+\/[^/]+/.test(pathname)
}

/**
 * Returns true if a book chapter pathname needs a trailing-slash redirect.
 * HTML uses relative asset paths that resolve based on the URL's "directory" —
 * without a trailing slash the browser resolves one level too high.
 */
export function needsTrailingSlashRedirect(pathname: string): boolean {
  return !pathname.endsWith('/')
}

/**
 * Normalize a URL string to have a trailing slash so cache keys are
 * consistent with the redirected navigation requests.
 */
export function normalizeCacheUrl(url: string): string {
  // For full URLs, parse and normalize the pathname
  if (url.startsWith('http://') || url.startsWith('https://')) {
    const parsed = new URL(url)
    if (!parsed.pathname.endsWith('/')) {
      parsed.pathname += '/'
    }
    return parsed.href
  }
  return url.endsWith('/') ? url : url + '/'
}

/**
 * Strip the `redirected` flag from a response so it can be served from
 * the cache for navigation requests. Browsers reject cache hits that
 * have the redirected flag set on navigation requests.
 */
export function prepareResponseForCache(response: Response): Response {
  if (!response.redirected) return response
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  })
}
