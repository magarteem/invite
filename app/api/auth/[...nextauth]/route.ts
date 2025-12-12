import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Логин", type: "text" },
        password: { label: "Пароль", type: "password" },
      },
      async authorize(credentials) {
        const username = credentials?.username?.toString().toLowerCase().trim();
        const password = credentials?.password?.toString().toLowerCase().trim();

        if (username === "хочу" && password === "кушать") {
          return {
            id: "1",
            name: "User",
            email: "user@example.com",
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.AUTH_SECRET || "your-secret-key-change-in-production",
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);

export const { GET, POST } = handlers;
