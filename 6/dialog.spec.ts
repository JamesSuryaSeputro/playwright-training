import { test } from "@playwright/test";

test('dialog', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    page.on('dialog', async (dialog) => {
        const message = dialog.message();
        console.log(message);

    if(message.includes('Alert')) {
       await dialog.accept();
    } else if (message.includes('Confirm')) {
        await dialog.accept();
    } else if (message.includes('prompt')) {
        await dialog.accept('Hello World');
    }
    });

    await page.getByRole('button', { name: 'JS Alert' }).click();
    await page.getByRole('button', { name: 'JS Confirm' }).click();
    await page.getByRole('button', { name: 'JS Prompt' }).click();
    await page.waitForTimeout(1000);
})
