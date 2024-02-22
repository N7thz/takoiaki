import { AuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const authOptions: AuthOptions = {

    providers: [

        Google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
        Github({
            clientId: process.env.GITHUB_CLIENT_ID ?? "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ""
        })
    ],
    pages: {
        signIn: "/"
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }