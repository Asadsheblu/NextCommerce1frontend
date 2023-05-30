import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: "152915869895-g8es929paig13fu2dvott4gud7ejj87r.apps.googleusercontent.com",
        clientSecret: "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"
      })
   
  ],
  secret: "a4ee7ff067d539eda3ba0db25ed9dae2"
}

export default NextAuth(authOptions)