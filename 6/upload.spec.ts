import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('upload', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/upload-download');
    })

    test('upload file', async ({ page }) => {
        const fileName = 'budi.png';
        const directory = process.cwd();
        const filePath = path.join(directory, '6', fileName);
        console.log(filePath);
        await page.locator('//input[@id="uploadFile"]').setInputFiles(filePath);
        await expect(page.locator('//*[@id="uploadedFilePath"]')).toContainText(fileName);
    })
})