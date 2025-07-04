import { LoginPage } from "../../pages/login/login.page";
import { Page, expect } from "@playwright/test";

export class LoginController {
    private loginPage: LoginPage;

    constructor(private page: Page){
        this.loginPage = new LoginPage(page);
    }

    async inputUsername(username: string){
        await this.loginPage.fieldUsernamePassword("text").fill(username);
    }

    async inputPassword(username: string){
        await this.loginPage.fieldUsernamePassword("password").fill(username);
    }

    async clickLoginButton() {
        await this.loginPage.buttonLogin().click();
    }

    async verifyErrorMessage(errorMessage: string) {
        await expect(this.loginPage.textError()).toHaveText(errorMessage);
    }

    async verifyProductTextHeader() {
        await expect(this.loginPage.productTextHeader()).toBeVisible();
    }
}