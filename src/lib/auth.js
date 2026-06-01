import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { baseUrl, mongodbUrl } from "@/secret";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(mongodbUrl);
const db = client.db();

export const auth = betterAuth({
  baseURL: baseUrl,
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google"], // Add your providers
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
  plugins: [jwt()],
});
