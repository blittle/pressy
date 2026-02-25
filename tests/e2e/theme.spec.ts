import { test, expect, Page } from '@playwright/test'

/** Click the middle of the viewport to toggle the footer visible. */
async function showFooter(page: Page) {
  const viewport = page.locator('.pressy-paginated-viewport')
  const box = await viewport.boundingBox()
  await page.mouse.click(box!.x + box!.width * 0.5, box!.y + box!.height / 2)
  await page.waitForTimeout(400)
  await expect(page.locator('.pressy-page-footer--visible')).toBeAttached()
}

async function waitForReaderReady(page: Page) {
  await page.waitForSelector('.pressy-paginated-viewport')
  await page.waitForFunction(() => {
    const article = document.querySelector('.pressy-prose--paginated')
    return article && article.textContent && article.textContent.length > 50
  })
  await page.waitForTimeout(300)
}

async function openSettings(page: Page) {
  await showFooter(page)
  await page.locator('.pressy-settings-toggle').click()
  await expect(page.locator('.pressy-settings-panel')).toBeVisible()
}

test.describe('theme switching', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)
    await page.evaluate(() => localStorage.removeItem('pressy-theme'))
  })

  test('opens settings panel', async ({ page }) => {
    await openSettings(page)
    await expect(page.locator('.pressy-settings-panel')).toBeVisible()
  })

  test('switches to dark theme', async ({ page }) => {
    await openSettings(page)

    const themeButtons = page.locator('.pressy-theme-btn')
    // Dark is typically the second button
    await themeButtons.nth(1).click()
    await page.waitForTimeout(100)

    const theme = await page.locator('html').getAttribute('data-theme')
    expect(theme).toBe('dark')
  })

  test('switches to sepia theme', async ({ page }) => {
    await openSettings(page)

    const themeButtons = page.locator('.pressy-theme-btn')
    // Order: light(0), dark(1), system(2), sepia(3)
    await themeButtons.nth(3).click()
    await page.waitForTimeout(100)

    const theme = await page.locator('html').getAttribute('data-theme')
    expect(theme).toBe('sepia')
  })

  test('theme persists across page reload', async ({ page }) => {
    await openSettings(page)
    await page.locator('.pressy-theme-btn').nth(1).click() // dark
    await page.waitForTimeout(100)

    await page.reload()
    await waitForReaderReady(page)

    const theme = await page.locator('html').getAttribute('data-theme')
    expect(theme).toBe('dark')

    const stored = await page.evaluate(() => localStorage.getItem('pressy-theme'))
    expect(stored).toBe('dark')
  })

  test('theme persists across chapter navigation', async ({ page }) => {
    await openSettings(page)
    await page.locator('.pressy-theme-btn').nth(3).click() // sepia (index 3)
    await page.waitForTimeout(100)

    await page.goto('/books/flatland/of-the-nature-of-flatland/')
    await waitForReaderReady(page)

    const theme = await page.locator('html').getAttribute('data-theme')
    expect(theme).toBe('sepia')
  })
})

test.describe('font size adjustment', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/books/flatland/preface/')
    await waitForReaderReady(page)
    await page.evaluate(() => localStorage.removeItem('pressy-font-size'))
  })

  test('shows font size controls in settings', async ({ page }) => {
    await openSettings(page)

    await expect(page.locator('.pressy-font-size-value')).toBeVisible()
    const fontSizeButtons = page.locator('.pressy-font-size-btn')
    expect(await fontSizeButtons.count()).toBe(2)
  })

  test('increases font size', async ({ page }) => {
    await openSettings(page)

    const initialSize = await page.locator('.pressy-font-size-value').textContent()

    // Click increase button (the + button, last one)
    await page.locator('.pressy-font-size-btn').last().click()
    await page.waitForTimeout(100)

    const newSize = await page.locator('.pressy-font-size-value').textContent()
    expect(newSize).not.toBe(initialSize)
  })

  test('decreases font size', async ({ page }) => {
    await openSettings(page)

    // First increase so we have room to decrease
    await page.locator('.pressy-font-size-btn').last().click()
    await page.waitForTimeout(100)
    const afterIncrease = await page.locator('.pressy-font-size-value').textContent()

    // Click decrease button (the - button, first one)
    await page.locator('.pressy-font-size-btn').first().click()
    await page.waitForTimeout(100)

    const afterDecrease = await page.locator('.pressy-font-size-value').textContent()
    expect(afterDecrease).not.toBe(afterIncrease)
  })

  test('font size persists after reload', async ({ page }) => {
    await openSettings(page)

    // Increase twice
    await page.locator('.pressy-font-size-btn').last().click()
    await page.locator('.pressy-font-size-btn').last().click()
    await page.waitForTimeout(100)

    const sizeBeforeReload = await page.locator('.pressy-font-size-value').textContent()

    await page.reload()
    await waitForReaderReady(page)

    await openSettings(page)

    const sizeAfterReload = await page.locator('.pressy-font-size-value').textContent()
    expect(sizeAfterReload).toBe(sizeBeforeReload)
  })
})
