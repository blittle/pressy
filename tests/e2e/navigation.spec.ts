import { test, expect, Page } from '@playwright/test'

/** Click the middle of the viewport to toggle the footer visible. */
async function showFooter(page: Page) {
  const viewport = page.locator('.pressy-paginated-viewport')
  const box = await viewport.boundingBox()
  // Click the middle zone (between 15%-85%)
  await page.mouse.click(box!.x + box!.width * 0.5, box!.y + box!.height / 2)
  // Middle-zone has a 300ms timer before toggling footer
  await page.waitForTimeout(400)
  await expect(page.locator('.pressy-page-footer--visible')).toBeAttached()
}

/** Wait for the paginated reader to be fully loaded and ready. */
async function waitForReaderReady(page: Page) {
  await page.waitForSelector('.pressy-paginated-viewport')
  // Wait for content to be rendered (the article should have content)
  await page.waitForFunction(() => {
    const article = document.querySelector('.pressy-prose--paginated')
    return article && article.textContent && article.textContent.length > 50
  })
  // Give the column layout time to calculate
  await page.waitForTimeout(300)
}

/** Get the current translateX value as a number. */
async function getTranslateX(page: Page): Promise<number> {
  return page.locator('.pressy-prose--paginated').evaluate((el) => {
    const match = el.style.transform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/)
    return match ? parseFloat(match[1]) : 0
  })
}

test.describe('paginated reader navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)
  })

  test('renders the paginated reader', async ({ page }) => {
    await expect(page.locator('.pressy-reader--paginated')).toBeVisible()
    await expect(page.locator('.pressy-paginated-viewport')).toBeVisible()
  })

  test('navigates forward with right arrow key', async ({ page }) => {
    const initialX = await getTranslateX(page)

    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)

    const newX = await getTranslateX(page)
    // Should have moved left (negative direction)
    expect(newX).toBeLessThan(initialX)
  })

  test('navigates backward with left arrow key', async ({ page }) => {
    // First go forward
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)
    const afterForward = await getTranslateX(page)

    // Then go back
    await page.keyboard.press('ArrowLeft')
    await page.waitForTimeout(400)

    const afterBack = await getTranslateX(page)
    expect(afterBack).toBeGreaterThan(afterForward)
  })

  test('navigates forward by clicking right edge', async ({ page }) => {
    const viewport = page.locator('.pressy-paginated-viewport')
    const box = await viewport.boundingBox()
    const initialX = await getTranslateX(page)

    // Click the right edge (>85% of width)
    await page.mouse.click(box!.x + box!.width * 0.92, box!.y + box!.height / 2)
    await page.waitForTimeout(400)

    const newX = await getTranslateX(page)
    expect(newX).toBeLessThan(initialX)
  })

  test('navigates backward by clicking left edge', async ({ page }) => {
    // Go forward first
    await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(400)
    const afterForward = await getTranslateX(page)

    // Click left edge (<15% of width)
    const viewport = page.locator('.pressy-paginated-viewport')
    const box = await viewport.boundingBox()
    await page.mouse.click(box!.x + box!.width * 0.05, box!.y + box!.height / 2)
    await page.waitForTimeout(400)

    const afterBack = await getTranslateX(page)
    expect(afterBack).toBeGreaterThan(afterForward)
  })

  test('spacebar advances to next page', async ({ page }) => {
    const initialX = await getTranslateX(page)

    await page.keyboard.press('Space')
    await page.waitForTimeout(400)

    const newX = await getTranslateX(page)
    expect(newX).toBeLessThan(initialX)
  })

  test('Home key goes to first page', async ({ page }) => {
    // Go forward a few pages
    for (let i = 0; i < 3; i++) {
      await page.keyboard.press('ArrowRight')
      await page.waitForTimeout(350)
    }

    await page.keyboard.press('Home')
    await page.waitForTimeout(400)

    const x = await getTranslateX(page)
    expect(x).toBe(0)
  })
})

test.describe('chapter navigation', () => {
  test('deep link to a specific chapter loads correctly', async ({ page }) => {
    await page.goto('/books/flatland/of-the-nature-of-flatland/')
    await waitForReaderReady(page)

    await expect(page.locator('.pressy-reader--paginated')).toBeVisible()
    const content = await page.locator('.pressy-prose--paginated').textContent()
    expect(content!.length).toBeGreaterThan(50)
  })

  test('table of contents opens and lists chapters', async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    await showFooter(page)
    await page.locator('.pressy-toc-toggle').click()
    await expect(page.locator('.pressy-toc-drawer')).toBeVisible()

    // Should have TOC items for chapters
    const tocItems = page.locator('.pressy-toc-item')
    const count = await tocItems.count()
    expect(count).toBeGreaterThanOrEqual(8)
  })

  test('clicking a TOC item navigates to that chapter', async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    await showFooter(page)
    await page.locator('.pressy-toc-toggle').click()
    await page.waitForSelector('.pressy-toc-drawer')

    // Click a chapter that isn't the current one
    const tocLinks = page.locator('.pressy-toc-item:not(.pressy-toc-item--home):not(.pressy-toc-item--active)')
    await tocLinks.first().click()

    await page.waitForTimeout(500)
    expect(page.url()).not.toContain('/preface/')
  })

  test('TOC closes when backdrop is clicked', async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)

    await showFooter(page)
    await page.locator('.pressy-toc-toggle').click()
    await expect(page.locator('.pressy-toc-drawer')).toBeVisible()

    await page.locator('.pressy-toc-backdrop').click({ force: true })
    await page.waitForTimeout(300)

    await expect(page.locator('.pressy-toc-drawer')).not.toBeVisible()
  })
})

test.describe('book detail page', () => {
  test('book page has chapter links', async ({ page }) => {
    await page.goto('/books/flatland/')
    await page.waitForSelector('#app')

    // Should have links to individual chapters
    const chapterLinks = page.locator('a[href*="/books/flatland/"]')
    const count = await chapterLinks.count()
    expect(count).toBeGreaterThanOrEqual(1)
  })

  test('clicking a chapter link navigates to the chapter', async ({ page }) => {
    await page.goto('/books/flatland/')
    await page.waitForSelector('#app')

    const chapterLink = page.locator('a[href*="/books/flatland/"]').first()
    await chapterLink.click()

    await page.waitForSelector('.pressy-reader')
    expect(page.url()).toMatch(/\/books\/flatland\/[a-z-]+/)
  })
})
