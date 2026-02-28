import { test, expect } from '@playwright/test'

/**
 * Intercept JS bundles and enable the paywall config.
 * The flatland build has `paywall:{enabled:!1}` — we replace it
 * with an enabled paywall so client-side components render.
 */
async function enablePaywall(page: import('@playwright/test').Page) {
  await page.route('**/assets/*.js', async (route) => {
    const response = await route.fetch()
    let body = await response.text()
    body = body.replaceAll(
      'paywall:{enabled:!1}',
      'paywall:{enabled:!0,previewChapters:2,price:"$9.99",stripePriceId:"price_test"}',
    )
    await route.fulfill({ response, body })
  })
}

async function mockAuthStatus(page: import('@playwright/test').Page, authorized: boolean) {
  await page.route('**/api/auth/status*', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ authorized }),
    })
  })
}

async function mockRecoverEndpoint(page: import('@playwright/test').Page) {
  await page.route('**/api/auth/recover', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ sent: true }),
    })
  })
}

test.describe('paywall UI', () => {
  test('unauthorized user sees paywall UI', async ({ page }) => {
    await enablePaywall(page)
    await mockAuthStatus(page, false)

    await page.goto('/books/flatland/')
    await page.waitForSelector('#app')

    // Purchase CTA with price should be visible
    await expect(page.getByText('$9.99')).toBeVisible()

    // "Already purchased?" recovery link should be visible
    await expect(page.getByText('Already purchased?')).toBeVisible()
  })

  test('authorized user sees no paywall UI', async ({ page }) => {
    await enablePaywall(page)
    await mockAuthStatus(page, true)

    await page.goto('/books/flatland/')
    await page.waitForSelector('#app')

    // No purchase CTA
    await expect(page.getByText('$9.99')).not.toBeVisible()

    // No recovery link
    await expect(page.getByText('Already purchased?')).not.toBeVisible()
  })

  test('recovery link flow', async ({ page }) => {
    await enablePaywall(page)
    await mockAuthStatus(page, false)
    await mockRecoverEndpoint(page)

    await page.goto('/books/flatland/')
    await page.waitForSelector('#app')

    // Click "Already purchased?"
    await page.getByText('Already purchased?').click()

    // Email form should appear
    const emailInput = page.locator('input[type="email"]')
    await expect(emailInput).toBeVisible()

    // Fill email and submit
    await emailInput.fill('reader@example.com')
    await page.getByText('Send Recovery Link').click()

    // Success message should appear
    await expect(page.getByText('Check your email for a recovery link.')).toBeVisible()
  })
})
