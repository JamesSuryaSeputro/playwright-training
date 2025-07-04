import {expect, request, APIRequestContext} from '@playwright/test';
import { setAuth, globalAuth } from '../../../6/auth/auth.store';
import { MyLoginService } from '../service/login.service';

const urlHost = 'https://dummyjson.com';
export async function defaultContext():Promise<APIRequestContext>{
    const context = await request.newContext({
        baseURL: urlHost,
        extraHTTPHeaders: {
            'Content-Type': 'application/json'
        },
    });

    return context;
}

export async function authContext():Promise<APIRequestContext>{
    if(globalAuth === undefined){
        let loginService = new MyLoginService();
        const {data, status} = await loginService.login('emilys', 'emilyspass');

        expect(status).toBeTruthy();
        expect(status).toBe(200);
        setAuth(data.accessToken);
    }

    const context = await request.newContext({
        baseURL: urlHost,
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${globalAuth}`
        },
    });

    return context;
}