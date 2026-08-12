// lib/auth.ts (or src/lib/auth.ts)
import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "student",
        input: true, // 👈 ALLOW CLIENTS TO PASS 'role' DURING SIGN-UP
      },
    },
  },
});
export async function getSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}