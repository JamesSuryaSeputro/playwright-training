import { test, expect, Locator, Page, devices } from '@playwright/test';

let page: Page;

test.use({
  ...devices['Pixel 5'],
})

test.describe.configure({ mode: 'serial' });

test.describe('Transaction', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
  });

  test('login success', async () => {
    const username = page.locator('//*[@id="user-name"]');
    const password = page.locator('//*[@id="password"]');
    const loginButton = page.locator('//*[@id="login-button"]');

    
    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    await expect(page.locator('.app_logo')).toBeVisible();
  });

  test('choose items', async () => {
    const text = ['Backpack', 'Bike Light', 'Bolt T-Shirt']
    for (let i = 0; i < text.length; i++) {
      await page.locator(`//div[contains(text(),'${text[i]}')]/ancestor::div[1]/following-sibling::div/button`).click();
    }
    await page.locator('[data-test="shopping-cart-link"]').click();
    for (let i = 0; i < text.length; i++) {
      await expect(page.locator(`//div[@class="inventory_item_name" and contains(text(), '${text[i]}')]/ancestor::div[1]//button`)).toBeVisible();
    }
  });

  test('checkout', async () => {
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('11111');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
  })
});