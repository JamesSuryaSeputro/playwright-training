import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('should able to login to saucedemo',{tag: '@positive'}, async ({ page }) => {
    // create a new locator
    const username = page.locator('//*[@id="user-name"]');
    const password = page.locator('//*[@id="password"]');
    const loginButton = page.locator('//*[@id="login-button"]');

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    await expect(page.locator('.app_logo')).toBeVisible();
  });

  test('Password is not match with username',{tag: '@negative'}, async ({ page }) => {
  await page.locator('[data-test="username"]').fill('standar_user');
  await page.locator('[data-test="password"]').fill('sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

test('Username does not exist',{tag: '@negative'}, async ({ page }) => {
  await page.locator('[data-test="username"]').fill('test_user123');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
});


test('Empty username and fill password',{tag: '@negative'}, async ({ page }) => {
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});


test('Empty password and fill username',{tag: '@negative'}, async ({ page }) => {
  await page.locator('[data-test="username"]').fill('standar_user');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
});


test('Empty username and password',{tag: '@negative'}, async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
});
});