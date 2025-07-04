import { LoginController } from "../../controller/login/login.controller";
import { test } from "@playwright/test";
import { SharedController } from "../../shared/controller/shared.controller";

let loginController: LoginController;
let sharedController: SharedController;

test.describe('Login saucelab', () => {
    test.beforeEach(async ({ page }) => {
        loginController = new LoginController(page);
        sharedController = new SharedController(page);

        await sharedController.accessUrl('https://www.saucedemo.com/');
      });
    
      test('should able to login to saucedemo',{tag: '@positive'}, async ({ page }) => {
        await loginController.inputUsername('standard_user');
        await loginController.inputPassword('secret_sauce');
        await loginController.clickLoginButton();
        await loginController.verifyProductTextHeader();
      });
    
      test('Password is not match with username',{tag: '@negative'}, async ({ page }) => {
        await loginController.inputUsername('standard_user');
        await loginController.inputPassword('secret_saus');
        await loginController.clickLoginButton();
        await loginController.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
    
    test('Username does not exist',{tag: '@negative'}, async ({ page }) => {
        await loginController.inputUsername('Budi');
        await loginController.inputPassword('secret_sauce');
        await loginController.clickLoginButton();
        await loginController.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
    
    
    test('Empty username and fill password',{tag: '@negative'}, async ({ page }) => {
        await loginController.inputUsername('');
        await loginController.inputPassword('secret_sauce');
        await loginController.clickLoginButton();
        await loginController.verifyErrorMessage('Epic sadface: Username is required');
    });
    
    
    test('Empty password and fill username',{tag: '@negative'}, async ({ page }) => {
        await loginController.inputUsername('standard_user');
        await loginController.inputPassword('');
        await loginController.clickLoginButton();
        await loginController.verifyErrorMessage('Epic sadface: Password is required');
    });
    
    
    test('Empty username and password',{tag: '@negative'}, async ({ page }) => {
        await loginController.inputUsername('');
        await loginController.inputPassword('');
        await loginController.clickLoginButton();
        await loginController.verifyErrorMessage('Epic sadface: Username is required');
    });
});