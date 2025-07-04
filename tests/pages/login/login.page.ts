import { Page } from "@playwright/test";

export class LoginPage {
    constructor (private page : Page) {}

    fieldUsernamePassword(field: string) {
        return this.page.locator(`//input[@type="${field}"]`);
    }

    buttonLogin() {
        return this.page.locator('[data-test="login-button"]');
    }

    textError() {
        return this.page.locator('[data-test="error"]');
    }

    productTextHeader() {
        return this.page.locator('[data-test="title"]');
    }
}