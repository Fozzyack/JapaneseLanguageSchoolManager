import { NextAuthOptions, Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import PostgresAdapter from "@/utils/db/db_adapter";
import { pool } from "@/utils/db/db";
import { Adapter, AdapterUser } from "next-auth/adapters";
import FacebookProvider from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import { ExtendedSession, ExtendedUser } from "@/types/nextauthvars";

export const options: NextAuthOptions = {
    adapter: PostgresAdapter(pool) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string
        }),
        Google({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: 'no-reply@example.com'
        })
    ],
    callbacks: {
        async session({ session, user }) {
            const extendedSession = session as ExtendedSession
            const extendedUser = user as ExtendedUser
            extendedSession.user = extendedUser
            return extendedSession
        }
    }
}