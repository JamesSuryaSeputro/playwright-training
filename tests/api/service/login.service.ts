import { defaultContext } from "../context/api.context";

export class MyLoginService {
    async login(username: string, password: string) {
        try {
            const context = await defaultContext();
            const response = await context.post('/auth/login', {
                data: {
                    username,
                    password,
                },
            });

            const data = await response.json();
            const status = await response.status();

            return {
                data: data,
                status: status
            };
        } catch (e) {
            throw e;
        }
    }
}