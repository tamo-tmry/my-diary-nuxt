import { test, expect } from '@playwright/test'
require('dotenv').config()

test('has link', async ({ page }) => {
  await page.goto('/')
  const registerElement = page.getByRole('link', { name: '新規登録' })
  await expect(registerElement).toBeVisible()
})

test('vrt test', async ({ page }) => {
  await page.goto('/')
  const registerElement = page.getByRole('link', { name: '新規登録' })
  await expect(registerElement).toBeVisible()
  await expect(page).toHaveScreenshot()
})
