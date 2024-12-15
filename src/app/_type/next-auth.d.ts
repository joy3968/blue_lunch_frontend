import "next-auth/jwt";

declare module "next-auth" {
    interface User {
        data: {
            accessToken: string;
            refreshToken: string;
            accessTokenExpireAt: number;
            id: number;
            userName: string;
            role: string;
        };
    }

    interface Session {
        user: {
            id: number;
            userName: string;
            role: string;
        };
        accessToken?: string;
        accessTokenExpireAt: number;
        refreshToken?: string;
    }

}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken: string;
        refreshToken: string;
        accessTokenExpireAt: number; // 반드시 존재해야 함
        id: number;
        userName: string;
        role: string;
        error?: string;
    }
}