import { LoginResponse } from "../types/auth";

const LOGIN_MOCK = {
    username: "admin0919",
    password: "12345",
}

export class AuthService {
    static async login(username: string, password: string) : Promise<LoginResponse> {
        const isSuccess = username === LOGIN_MOCK.username && password === LOGIN_MOCK.password
        if (isSuccess) {
            return {
                token: "token",
                refreshToken: "refreshToken",
            }
        }
        throw new Error("Tài khoản hoặc mật khẩu không chính xác");
    }
}