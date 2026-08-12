"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const EXPRESS_API_URL = process.env.NEXT_PUBLIC_EXPRESS_API_URL;

interface MutateOptions {
  path: string; // e.g. "/api/v1/period"
  method: "POST" | "PUT" | "DELETE" | "GET" | "PATCH";
  body?: any;
  revalidatePathUrl?: string; // e.g. "/tracker"
  revalidateType?: "page" | "layout";
}

/**
 * Reusable utility to safely communicate with your separate Express backend.
 * Handles authentication header forwarding, server-side parsing, and Next.js revalidation.
 */
export async function serverMutate<T = any>({
  path,
  method,
  body,
  revalidatePathUrl,
  revalidateType = "page",
}: MutateOptions) {
  try {
    // 1. Bulletproof Guard against missing config on Vercel
    if (!EXPRESS_API_URL) {
      throw new Error(
        "Missing NEXT_PUBLIC_EXPRESS_API_URL environment variable inside application settings.",
      );
    }

    const cookieStore = await cookies();
    
    // 2. Multi-Cookie Header construction
    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    // Extract better-auth session token specifically for Bearer header backup
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : {}),
    };

    const fetchOptions: RequestInit = {
      method,
      headers,
      // Prevent stale Next.js caching on GET queries
      cache: method === "GET" ? "no-store" : "default",
    };

    // 3. Prevent structural body inclusions on GET/DELETE without body
    if (method !== "GET" && body !== undefined && body !== null) {
      fetchOptions.body = JSON.stringify(body);
    }

    // 4. Clean up trailing/leading slash compilation errors automatically
    const baseClean = EXPRESS_API_URL.replace(/\/$/, "");
    const pathClean = path.replace(/^\//, "");
    const targetUrl = `${baseClean}/${pathClean}`;

    const response = await fetch(targetUrl, fetchOptions);
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        result.error ||
          `Request failed with status ${response.status}: ${response.statusText}`,
      );
    }

    // 5. Revalidate Next.js cache if URL is provided
    if (revalidatePathUrl) {
      revalidatePath(revalidatePathUrl, revalidateType);
    }

    return {
      success: true as const,
      // Envelope Fallback: works whether Express wraps payloads in .data or returns it directly
      data: (result.data !== undefined ? result.data : result) as T,
      message: result.message as string | undefined,
    };
  } catch (error: any) {
    // 6. Detailed logging for Vercel Server Logs dashboard
    console.error(
      `[serverMutate Failure] ${method} to ${path}:`,
      error.message,
    );
    return {
      success: false as const,
      error:
        error.message ||
        "An unexpected error occurred during database mutation.",
    };
  }
}