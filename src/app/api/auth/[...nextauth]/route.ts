import NextAuth, {Account, User} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {JWT} from "next-auth/jwt";

const getRefreshedAccessToken = async (refreshToken: string) => {
    const response = await fetch(
        'http://localhost:8080' + '/auth/token/refresh',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    refreshToken: refreshToken
                }
            )
        }
    )

    return response.json()
}

const handler = NextAuth({
    pages: {
        signIn: "/",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "관리자 계정", type: "text" },
                password: { label: "비밀번호", type: "password" }
            },
            async authorize(credentials) {

                const response = await fetch('http://localhost:8080/auth/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        userName: credentials?.username,
                        password: credentials?.password
                    }),
                    headers: { "Content-Type": "application/json" }
                })

                const jsonResponse = await response.json()

                if (!response.ok) {
                    throw new Error(jsonResponse.message)
                }
                return jsonResponse
            }
        })
    ],
    session: {
        maxAge: 24 * 60 * 60, // 24 hours in seconds
    },
    callbacks: {
        async jwt({ user, account, token }: { user?: User; account?: Account | null; token: JWT }) {

            if (!!user && !!account) {
                token.accessToken = user.data.accessToken;
                token.refreshToken = user.data.refreshToken;
                token.accessTokenExpireAt = user.data.accessTokenExpireAt;
                token.id = user.data.id;
                token.userName = user.data.userName;
                token.role = user.data.role;
            }

            if (new Date().getTime() > token.accessTokenExpireAt) {
                try {
                    const response = await getRefreshedAccessToken(token.refreshToken)
                    if (!!response.data.accessToken) token.accessToken = response.data.accessToken
                } catch (e) {
                    console.log(e);
                    token.error = 'RefreshAccessTokenError';
                    return token;
                }
            }

            return token;
        },
        async session({session , token}) {

            session.user = {
                id: token.id,
                userName: token.userName,
                role: token.role
            };
            session.accessToken = token.accessToken;
            session.accessTokenExpireAt = token.accessTokenExpireAt;
            session.refreshToken = token.refreshToken;

            return session;
        }
    }
})

export { handler as GET, handler as POST }