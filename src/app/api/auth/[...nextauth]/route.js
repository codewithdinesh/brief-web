import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export default async function auth(req, res) {
    const options = {
        GoogleProvider: [
            Providers.Google({
                clientId: 'YOUR_GOOGLE_CLIENT_ID',
                clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
                authorization: {

                }
            }),

        ],
        callbacks: {
            async signIn({ account, profile }) {
                if (account.provider === "google") {
                    return profile.email_verified && profile.email.endsWith("@example.com")
                }
                return true // Do different verification for other providers that don't have `email_verified`
            }
        },
    };

    const isDefaultSigninPage = req.method === "GET" && req.query.nextauth.includes("signin")

    // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
    if (isDefaultSigninPage) providers.pop()

    return await NextAuth(req, res, {
        options
    })
}