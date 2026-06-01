import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const mUrl = process.env.MONGODB_URL;

if (!mUrl) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside Vercel/Local settings",
  );
}

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  trustHost: true,

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"],
      autoLink: true,
    },
  },
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 15 * 24 * 60 * 60,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
  plugins: [jwt()],
});
