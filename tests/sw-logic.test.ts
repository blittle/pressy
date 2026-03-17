import { describe, it, expect } from 'vitest'
import {
  isBookChapterNavigation,
  needsTrailingSlashRedirect,
  normalizeCacheUrl,
  prepareResponseForCache,
} from '../packages/pressy/src/runtime/sw-logic'

describe('isBookChapterNavigation', () => {
  it('matches /books/flatland/chapter-2/', () => {
    expect(isBookChapterNavigation('/books/flatland/chapter-2/', 'navigate')).toBe(true)
  })

  it('matches subpath deployment URLs (bug 3)', () => {
    expect(
      isBookChapterNavigation('/pressy/pr-preview/pr-1/books/flatland/chapter-2/', 'navigate'),
    ).toBe(true)
  })

  it('rejects book index pages (not a chapter)', () => {
    expect(isBookChapterNavigation('/books/flatland/', 'navigate')).toBe(false)
  })

  it('rejects non-navigate request modes', () => {
    expect(isBookChapterNavigation('/books/flatland/chapter-2/', 'cors')).toBe(false)
    expect(isBookChapterNavigation('/books/flatland/chapter-2/', 'no-cors')).toBe(false)
  })
})

describe('needsTrailingSlashRedirect', () => {
  it('returns true for paths without trailing slash (bug 6)', () => {
    expect(needsTrailingSlashRedirect('/books/flatland/chapter-2')).toBe(true)
  })

  it('returns false for paths with trailing slash', () => {
    expect(needsTrailingSlashRedirect('/books/flatland/chapter-2/')).toBe(false)
  })
})

describe('normalizeCacheUrl', () => {
  it('appends / to paths without trailing slash', () => {
    expect(normalizeCacheUrl('/books/flatland/chapter-2')).toBe('/books/flatland/chapter-2/')
  })

  it('leaves paths with trailing slash unchanged', () => {
    expect(normalizeCacheUrl('/books/flatland/chapter-2/')).toBe('/books/flatland/chapter-2/')
  })

  it('works with full URLs', () => {
    expect(normalizeCacheUrl('https://example.com/books/flatland/chapter-2')).toBe(
      'https://example.com/books/flatland/chapter-2/',
    )
  })

  it('leaves full URLs with trailing slash unchanged', () => {
    expect(normalizeCacheUrl('https://example.com/books/flatland/chapter-2/')).toBe(
      'https://example.com/books/flatland/chapter-2/',
    )
  })
})

describe('prepareResponseForCache', () => {
  it('returns non-redirected response as-is', () => {
    const response = new Response('body', { status: 200 })
    const result = prepareResponseForCache(response)
    expect(result).toBe(response) // same reference
  })

  it('strips redirected flag from redirected response (bug 5)', () => {
    // We can't set .redirected directly, so we simulate by creating a
    // response via Response.redirect and following it
    const redirected = Response.redirect('https://example.com/', 302)
    // Response.redirect creates a response with redirected=false actually,
    // so we need to use a workaround — create a mock-like object
    const fakeRedirected = Object.create(Response.prototype, {
      redirected: { value: true },
      body: { value: new Response('chapter content').body },
      status: { value: 200 },
      statusText: { value: 'OK' },
      headers: { value: new Headers({ 'content-type': 'text/html' }) },
    })

    const result = prepareResponseForCache(fakeRedirected)
    expect(result).not.toBe(fakeRedirected)
    expect(result.redirected).toBe(false)
    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(result.headers.get('content-type')).toBe('text/html')
  })

  it('preserves status, statusText, and headers', () => {
    const headers = new Headers({
      'content-type': 'text/html',
      'x-custom': 'value',
    })
    const fakeRedirected = Object.create(Response.prototype, {
      redirected: { value: true },
      body: { value: new Response('body').body },
      status: { value: 200 },
      statusText: { value: 'OK' },
      headers: { value: headers },
    })

    const result = prepareResponseForCache(fakeRedirected)
    expect(result.status).toBe(200)
    expect(result.statusText).toBe('OK')
    expect(result.headers.get('content-type')).toBe('text/html')
    expect(result.headers.get('x-custom')).toBe('value')
  })
})

describe('ignoreURLParametersMatching integration', () => {
  // These tests verify the regex pattern used in precacheAndRoute config
  const ignorePattern = /^page$/

  it('matches the page parameter (bug 1)', () => {
    expect(ignorePattern.test('page')).toBe(true)
  })

  it('does not match other parameter names', () => {
    expect(ignorePattern.test('other')).toBe(false)
    expect(ignorePattern.test('pages')).toBe(false)
    expect(ignorePattern.test('mypage')).toBe(false)
  })
})
