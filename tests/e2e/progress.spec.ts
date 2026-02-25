import { test, expect, Page } from '@playwright/test'

async function waitForReaderReady(page: Page) {
  await page.waitForSelector('.pressy-paginated-viewport')
  await page.waitForFunction(() => {
    const article = document.querySelector('.pressy-prose--paginated')
    return article && article.textContent && article.textContent.length > 50
  })
  await page.waitForTimeout(300)
}

async function getTranslateX(page: Page): Promise<number> {
  return page.locator('.pressy-prose--paginated').evaluate((el) => {
    const match = el.style.transform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/)
    return match ? parseFloat(match[1]) : 0
  })
}

test.describe('reading progress', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)
    // Clear stored progress
    await page.evaluate(() => {
      localStorage.removeItem('pressy-last-read')
      sessionStorage.clear()
    })
    // Reload to start clean
    await page.reload()
    await waitForReaderReady(page)
  })

  test('shows a progress bar', async ({ page }) => {
    await expect(page.locator('.pressy-progress-bar')).toBeAttached()
  })

  test('progress bar updates when navigating pages', async ({ page }) => {
    const getProgressWidth = () =>
      page.locator('.pressy-progress-fill').evaluate(
        (el) => parseFloat(getComputedStyle(el).width) || 0
      )

    const initialWidth = await getProgressWidth()

    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(350)
    }

    const newWidth = await getProgressWidth()
    expect(newWidth).not.toBe(initialWidth)
  })

  test('saves reading position to localStorage', async ({ page }) => {
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(350)
    }

    // Wait for debounced save (300ms debounce + margin)
    await page.waitForTimeout(500)

    const lastRead = await page.evaluate(() =>
      localStorage.getItem('pressy-last-read')
    )

    expect(lastRead).toBeTruthy()
    const parsed = JSON.parse(lastRead!)
    expect(parsed).toHaveProperty('chapterSlug')
    expect(parsed).toHaveProperty('page')
    expect(parsed.page).toBeGreaterThan(0)
  })

  test('reading position survives reload in localStorage', async ({ page }) => {
    // Navigate forward a couple pages (stay within the first chapter)
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(350)
    }

    // Wait for debounced save
    await page.waitForTimeout(500)

    const lastReadBefore = await page.evaluate(() =>
      localStorage.getItem('pressy-last-read')
    )
    expect(lastReadBefore).toBeTruthy()
    const parsedBefore = JSON.parse(lastReadBefore!)
    expect(parsedBefore).toHaveProperty('bookSlug')
    expect(parsedBefore).toHaveProperty('chapterSlug')

    // Reload and verify the data persists
    await page.reload()
    await waitForReaderReady(page)

    const lastReadAfter = await page.evaluate(() =>
      localStorage.getItem('pressy-last-read')
    )
    expect(lastReadAfter).toBeTruthy()
    const parsedAfter = JSON.parse(lastReadAfter!)
    expect(parsedAfter.bookSlug).toBe(parsedBefore.bookSlug)
    expect(parsedAfter.chapterSlug).toBe(parsedBefore.chapterSlug)
  })
})
