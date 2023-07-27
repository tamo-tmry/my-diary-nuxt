import { test, expect } from '@playwright/test'
require('dotenv').config()

const appUrl = process.env.APP_URL!

test('has link', async ({ page }) => {
  await page.goto(appUrl)
  const registerElement = page.getByRole('link', { name: '新規登録' })
  await expect(registerElement).toBeVisible()
})

test('vrt test', async ({ page }) => {
  await page.goto(appUrl)
  const registerElement = page.getByRole('link', { name: '新規登録' })
  await expect(registerElement).toBeVisible()
  await expect(page).toHaveScreenshot()
})
