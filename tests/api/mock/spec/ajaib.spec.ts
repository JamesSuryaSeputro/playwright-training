import { expect, test } from '@playwright/test';
import { interceptAjaibLoginRoute, interceptChangeAjaibLoginRoute } from '../routes/ajaib.route';
import { MockAjaibRequest } from '../request/mock.ajaib';

test.describe('Request Mock Testing', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://login.ajaib.co.id/login');
  })

  test('Intercept Request', async ({ page, request }) => {
    await interceptAjaibLoginRoute(page, request);
    await page.getByRole('textbox', { name: 'Masukkan email' }).click();
    await page.getByRole('textbox', { name: 'Masukkan email' }).fill('rahasia@kode.id');
    await page.getByRole('textbox', { name: 'Masukkan password' }).click();
    await page.getByRole('textbox', { name: 'Masukkan password' }).fill('rahasia@kode.id');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page.getByText('Email dan/atau password salah')).toBeVisible();
  });

  test('No Mock', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Masukkan email' }).click();
    await page.getByRole('textbox', { name: 'Masukkan email' }).fill('rahasia@kode.id');
    await page.getByRole('textbox', { name: 'Masukkan password' }).click();
    await page.getByRole('textbox', { name: 'Masukkan password' }).fill('rahasia@kode.id');
    await page.getByRole('button', { name: 'Masuk' }).click();
    await expect(page.getByText('Email dan/atau password salah')).toBeVisible();
  });

  test.only('Intercept Username and Password', async ({ page, request }) => {
    const pin = '1111';

    await interceptChangeAjaibLoginRoute(page, request, MockAjaibRequest);

    await page.getByRole('textbox', { name: 'Masukkan email' }).fill('rahasia2@kode.id');
    await page.getByRole('textbox', { name: 'Masukkan password' }).fill('rahasia2@kode.id');
    await page.getByRole('button', { name: 'Masuk' }).click();

    try {
      for (let i = 0; i < pin.length; i++) {
        const index = i + 1;
        const pinLocator = page.locator(`(//input[@type="password"])[${index}]`);
        await pinLocator.waitFor({ state: 'visible' });
        await pinLocator.type(pin[i], { delay: 50 });
      }
    } catch (error) {
      console.error('Failed while filling PIN:', error);
    }

    while (await page.getByText('Mengerti', { exact: true }).isVisible()) {
      await page.getByText('Mengerti', { exact: true }).click();
      // Optional: small wait for next modal to appear
      await page.waitForTimeout(500);
    }

    await expect(page.getByRole('link', { name: 'Beranda' })).toBeVisible();
  });
})