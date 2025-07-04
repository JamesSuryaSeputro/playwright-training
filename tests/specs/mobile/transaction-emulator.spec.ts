import { test, expect, Locator, Page, devices } from '@playwright/test';
import { _android as android, AndroidDevice } from '@playwright/test';
import { exec } from 'child_process';
import util from 'util';

test.describe.configure({ mode: 'serial' });

const execAsync = util.promisify(exec);
let page;

test.describe('Transaction', () => {
  test.beforeAll(async ({ }) => {
    const device = await launchEmulatorAndWait('Pixel36');
    console.log(device);
    await device.shell('am force-stop com.android.chrome');
    const context = await device.launchBrowser();
    page = context.pages()[0];
    console.log(page);
    await page.waitForLoadState('load'); 

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

   test.afterAll('Close tab after test', async () => {
        await page.close();
    })
});

export async function launchEmulatorAndWait(avdName: string, password?: string ): Promise<AndroidDevice> {
    let [device]: AndroidDevice[] = await android.devices(); 

    if (device != undefined) return device;

    exec(`emulator -avd ${avdName} -no-snapshot`, () => {});

    // Wait for device to appear
    while (!device) {
        [device] = await android.devices();
        await new Promise(res => setTimeout(res, 1000));
    }

    // Wait for full boot
    let bootCompleted: string = '0';

    while (bootCompleted.trim() !== '1') {
        try {
            bootCompleted = (await execAsync(`adb shell getprop sys.boot_completed`)).stdout.trim();
        } catch {
            bootCompleted = '0';
        }
        
        await new Promise(res => setTimeout(res, 1000));
    }

    if (password) {
        await openLockedDevice(device, password);
    }

    return device;
}

async function openLockedDevice(device: AndroidDevice, password: string): Promise<void> {
    await device.shell('input keyevent KEYCODE_WAKEUP');
    await device.shell('input swipe 300 1000 300 100');
    await device.shell(`input text ${password}`);
    await device.shell('input keyevent KEYCODE_ENTER');
    await new Promise(res => setTimeout(res, 3000));
}