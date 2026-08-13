import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import type { auth } from "./auth.js"; // Import type from server auth config

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  // 1. Tell client TypeScript about the custom fields directly:
  user: {
    additionalFields: {
      role: {
        type: "string",
      },
    },
  },
  // 2. OR automatically infer all schema additions from your server config:
  plugins: [inferAdditionalFields<typeof auth>()],
});

export const { useSession, signIn, signUp, signOut } = authClient;