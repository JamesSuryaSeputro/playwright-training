import { test, expect} from '@playwright/test';
import path from 'path';

test.describe('Screenshot', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForTimeout(1000);
        await expect(page.locator('[data-test="title"]')).toBeVisible();

    })

    test('Take screenshot whole page', async ({ page }) => {
        await page.screenshot({ 
            fullPage: true,
            path: path.join(process.cwd(), 'screenshots', 'take_fullpage_screenshot.png')
         });
    })

    test('Take screenshot viewport', async ({ page }) => {
        await page.screenshot({ 
            path: path.join(process.cwd(), 'screenshots', 'viewport_screenshot.png')
         });
    })

    test('Take screenshot element', async ({ page }) => {
        await page.locator('(//*[@class="inventory_item"])[1]').screenshot({ 
            path: path.join(process.cwd(), 'screenshots', 'element_screenshot.png')
         });
    })
})