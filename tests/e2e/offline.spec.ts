import { test, expect } from '@playwright/test'

/**
 * Wait for the service worker to be ready and controlling the page.
 */
async function waitForServiceWorker(page: import('@playwright/test').Page) {
  await page.waitForFunction(
    async () => {
      const reg = await navigator.serviceWorker.ready
      // If not yet controlling, claim clients
      if (!navigator.serviceWorker.controller) {
        // Wait briefly for the SW to claim
        await new Promise((r) => setTimeout(r, 500))
      }
      return navigator.serviceWorker.controller !== null
    },
    undefined,
    { timeout: 15_000 },
  )
}

/**
 * Cache a book's chapters for offline use via the SW message API.
 */
async function cacheBookForOffline(
  page: import('@playwright/test').Page,
  bookSlug: string,
  chapterUrls: string[],
) {
  await page.evaluate(
    ({ slug, urls }) => {
      return new Promise<void>((resolve) => {
        navigator.serviceWorker.addEventListener('message', function handler(event) {
          if (event.data?.type === 'CACHE_COMPLETE' && event.data.bookSlug === slug) {
            navigator.serviceWorker.removeEventListener('message', handler)
            resolve()
          }
        })
        navigator.serviceWorker.controller!.postMessage({
          type: 'CACHE_BOOK',
          bookSlug: slug,
          urls,
        })
      })
    },
    { slug: bookSlug, urls: chapterUrls },
  )
}

test.describe('offline service worker', () => {
  test('precached chapter loads offline', async ({ page, context }) => {
    // Navigate to a chapter so the SW registers and activates
    await page.goto('/books/flatland/preface/')
    await waitForServiceWorker(page)

    // Cache chapters for offline
    const baseUrl = 'http://localhost:4173'
    await cacheBookForOffline(page, 'flatland', [
      `${baseUrl}/books/flatland/of-the-nature-of-flatland/`,
    ])

    // Go offline
    await context.setOffline(true)

    // Navigate to the cached chapter
    await page.goto('/books/flatland/of-the-nature-of-flatland/')
    await page.waitForSelector('.pressy-reader', { timeout: 10_000 })

    const content = await page.textContent('.pressy-reader')
    expect(content!.length).toBeGreaterThan(50)

    // Restore online
    await context.setOffline(false)
  })

  test('?page=last URL works offline', async ({ page, context }) => {
    // Navigate to a chapter so the SW registers and activates
    await page.goto('/books/flatland/preface/')
    await waitForServiceWorker(page)

    // Cache a chapter for offline
    const baseUrl = 'http://localhost:4173'
    await cacheBookForOffline(page, 'flatland', [
      `${baseUrl}/books/flatland/of-the-nature-of-flatland/`,
    ])

    // Go offline
    await context.setOffline(true)

    // Navigate with ?page=last (backward chapter navigation)
    await page.goto('/books/flatland/of-the-nature-of-flatland/?page=last')
    await page.waitForSelector('.pressy-reader', { timeout: 10_000 })

    const content = await page.textContent('.pressy-reader')
    expect(content!.length).toBeGreaterThan(50)

    // Restore online
    await context.setOffline(false)
  })

  test('non-trailing-slash URL redirects to trailing-slash', async ({ page }) => {
    // First load a page normally so the SW registers and activates
    await page.goto('/books/flatland/preface/')
    await waitForServiceWorker(page)

    // Now navigate to a chapter URL without trailing slash
    // The SW's book chapter route should redirect to trailing-slash
    await page.goto('/books/flatland/of-the-nature-of-flatland')
    await page.waitForSelector('.pressy-reader', { timeout: 10_000 })

    // After navigation, URL should have trailing slash
    expect(page.url()).toMatch(/\/of-the-nature-of-flatland\/$/)
  })
})
