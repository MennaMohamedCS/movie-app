// add authentication to a Next.js app.
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
});
