import { test, expect } from '@playwright/test';

test.beforeEach('Open browser', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
})

test('Password is not match with username', async ({ page }) => {
  await page.locator('[data-test="username"]').fill('standar_user');
  await page.locator('[data-test="password"]').fill('sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('Username does not exist', async ({ page }) => {
  await page.locator('[data-test="username"]').fill('test_user123');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});


test('Empty username and fill password', async ({ page }) => {
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});


test('Empty password and fill username', async ({ page }) => {
  await page.locator('[data-test="username"]').fill('standar_user');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
});


test('Empty username and password', async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});
