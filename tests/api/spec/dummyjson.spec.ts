import { test, expect } from '@playwright/test';
import { MyLoginService } from '../service/login.service';
import { setAuth, globalAuth } from '../../../6/auth/auth.store';
import { ProductService } from '../service/product.service';

const loginService: MyLoginService = new MyLoginService();
const produtService: ProductService = new ProductService();

test.describe('login test case', async () => {

    test('login success', async () => {
        const { data, status } = await loginService.login('emilys', 'emilyspass');
        expect(status).toBe(200);
        expect(data.accessToken).toBeTruthy();
        setAuth(data.accessToken);
        console.log(data);
    });

    test('login failed', async () => {
        const { data, status } = await loginService.login('emilys', 'emilyspw');
        expect(status).toBe(400);
        expect(data.message).toEqual('Invalid credentials');
        console.log(data);
    });

    test('get products', async () => {
        const { data, status } = await produtService.getProducts();
        expect(status).toBe(200);
        expect(data).toBeTruthy();
        expect(data.products[0].title).toEqual("Essence Mascara Lash Princess");
        expect(data.products[0].stock).toEqual(99);
        console.log(data.products[0]);
    });
});