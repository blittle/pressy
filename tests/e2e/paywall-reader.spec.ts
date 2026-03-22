import { test, expect, Page } from '@playwright/test'

/**
 * Intercept JS bundles and enable the paywall config.
 * The flatland build has `paywall:{enabled:!1}` — we replace it
 * with an enabled paywall so client-side components render.
 */
async function enablePaywall(page: Page) {
  await page.route('**/assets/*.js', async (route) => {
    const response = await route.fetch()
    let body = await response.text()
    body = body.replaceAll(
      'paywall:{enabled:!1,previewChapters:0}',
      'paywall:{enabled:!0,previewChapters:2,price:"$9.99",stripePriceId:"price_test"}',
    )
    await route.fulfill({ response, body })
  })
}

async function mockAuthStatus(page: Page, authorized: boolean) {
  await page.route('**/api/auth/status*', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ authorized }),
    })
  })
}

async function waitForReaderReady(page: Page) {
  await page.waitForSelector('.pressy-paginated-viewport')
  await page.waitForFunction(() => {
    const article = document.querySelector('.pressy-prose--paginated')
    return article && article.textContent && article.textContent.length > 50
  })
  await page.waitForTimeout(300)
}

/** Get the total page count from the reader's page indicator. */
async function getTotalPages(page: Page): Promise<number> {
  return page.evaluate(() => {
    const article = document.querySelector('.pressy-prose--paginated') as HTMLElement
    if (!article) return 0
    const viewport = article.closest('.pressy-paginated-viewport') as HTMLElement
    if (!viewport) return 0
    const viewportWidth = viewport.clientWidth
    if (viewportWidth === 0) return 0
    return Math.ceil(article.scrollWidth / viewportWidth)
  })
}

/** Navigate to the last page by pressing End key. */
async function goToLastPage(page: Page) {
  await page.keyboard.press('End')
  await page.waitForTimeout(400)
}

/** Navigate to a specific page by pressing ArrowRight from page 0. */
async function goToPage(page: Page, targetPage: number) {
  for (let i = 0; i < targetPage; i++) {
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(350)
  }
}

/** Get the current page number (0-indexed) from the translateX offset. */
async function getCurrentPage(page: Page): Promise<number> {
  return page.evaluate(() => {
    const article = document.querySelector('.pressy-prose--paginated') as HTMLElement
    if (!article) return 0
    const viewport = article.closest('.pressy-paginated-viewport') as HTMLElement
    if (!viewport) return 0
    const viewportWidth = viewport.clientWidth
    const match = article.style.transform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/)
    const translateX = match ? Math.abs(parseFloat(match[1])) : 0
    return Math.round(translateX / viewportWidth)
  })
}

test.describe('page count accuracy', () => {
  test('Math.ceil page count includes pages with small content overflow', async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    // Verify that total pages is computed via ceil (no content is lost)
    const totalPages = await getTotalPages(page)
    expect(totalPages).toBeGreaterThanOrEqual(2)

    // Navigate to the actual last page
    await goToLastPage(page)
    const currentPage = await getCurrentPage(page)
    expect(currentPage).toBe(totalPages - 1)
  })

  test('can reach every page including the last one', async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    const totalPages = await getTotalPages(page)

    // Navigate page by page to the end
    for (let i = 0; i < totalPages - 1; i++) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(200)
    }

    const finalPage = await getCurrentPage(page)
    expect(finalPage).toBe(totalPages - 1)
  })
})

test.describe('paywall boundary navigation', () => {
  test.beforeEach(async ({ page }) => {
    await enablePaywall(page)
    await mockAuthStatus(page, false)
  })

  test('can navigate to the last page of the last free chapter', async ({ page }) => {
    // Start at the first free chapter — multi-chapter mode will preload chapter 2
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    // Wait for the second free chapter to preload
    await page.waitForFunction(() => {
      const sections = document.querySelectorAll('.pressy-chapter-section')
      return sections.length >= 2
    }, { timeout: 5000 })
    await page.waitForTimeout(300)

    const totalPages = await getTotalPages(page)

    // Navigate to the last page via End key
    await goToLastPage(page)
    const currentPage = await getCurrentPage(page)
    expect(currentPage).toBe(totalPages - 1)

    // Should NOT have auto-redirected — we should still be on the reader
    await expect(page.locator('.pressy-reader--paginated')).toBeVisible()
  })

  test('ArrowRight on last page shows paywall hint instead of redirecting', async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    // Wait for the second free chapter to preload
    await page.waitForFunction(() => {
      const sections = document.querySelectorAll('.pressy-chapter-section')
      return sections.length >= 2
    }, { timeout: 5000 })
    await page.waitForTimeout(300)

    // Go to the last page
    await goToLastPage(page)

    // Press ArrowRight — should show paywall hint, not redirect
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)

    // Paywall hint should be visible
    await expect(page.locator('.pressy-chapter-hint--paywall')).toBeVisible()

    // Should still be on the reader page
    await expect(page.locator('.pressy-reader--paginated')).toBeVisible()
  })

  test('paywall hint shows purchase price', async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    await page.waitForFunction(() => {
      const sections = document.querySelectorAll('.pressy-chapter-section')
      return sections.length >= 2
    }, { timeout: 5000 })
    await page.waitForTimeout(300)

    await goToLastPage(page)
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)

    // Should show the price in the hint
    await expect(page.locator('.pressy-chapter-hint--paywall')).toContainText('$9.99')
  })

  test('tapping outside paywall hint dismisses it', async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    await page.waitForFunction(() => {
      const sections = document.querySelectorAll('.pressy-chapter-section')
      return sections.length >= 2
    }, { timeout: 5000 })
    await page.waitForTimeout(300)

    await goToLastPage(page)
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)
    await expect(page.locator('.pressy-chapter-hint--paywall')).toBeVisible()

    // Click the middle of the viewport (outside the hint)
    const viewport = page.locator('.pressy-paginated-viewport')
    const box = await viewport.boundingBox()
    await page.mouse.click(box!.x + box!.width * 0.5, box!.y + box!.height / 2)
    await page.waitForTimeout(400)

    await expect(page.locator('.pressy-chapter-hint--paywall')).not.toBeVisible()
  })

  test('clicking paywall hint navigates to checkout', async ({ page }) => {
    // Intercept checkout redirect so we can verify it was attempted
    await page.route('**/api/checkout*', async (route) => {
      await route.fulfill({ status: 200, body: 'checkout' })
    })

    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    await page.waitForFunction(() => {
      const sections = document.querySelectorAll('.pressy-chapter-section')
      return sections.length >= 2
    }, { timeout: 5000 })
    await page.waitForTimeout(300)

    await goToLastPage(page)
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)

    // Click the paywall hint and wait for the checkout request
    const checkoutRequestPromise = page.waitForRequest(
      req => req.url().includes('/api/checkout'),
      { timeout: 5000 }
    )
    await page.locator('.pressy-chapter-hint--paywall').click()
    const checkoutReq = await checkoutRequestPromise

    // Should have navigated to checkout
    expect(checkoutReq.url()).toContain('/api/checkout')
  })

  test('authorized user does not see paywall boundary', async ({ page }) => {
    // Override to authorized
    await mockAuthStatus(page, true)

    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    // Wait for chapters to load (authorized should load all)
    await page.waitForTimeout(1000)

    await goToLastPage(page)

    // Press ArrowRight — should NOT show paywall hint
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)

    await expect(page.locator('.pressy-chapter-hint--paywall')).not.toBeVisible()
  })
})
