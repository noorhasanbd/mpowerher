// src/proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Defined route roles for RBAC checks
type UserRole = 'student' | 'educator' | 'admin';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Fetch the Better Auth session token directly from cookies
  const sessionToken =
    request.cookies.get('better-auth.session_token')?.value ||
    request.cookies.get('__Secure-better-auth.session_token')?.value;

  // 2. Define Protected Route Prefix Groups (Included /tracker)
  const isProtectedPath =
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/student') ||
    pathname.startsWith('/educator') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/tracker'); // 👈 Added /tracker here

  const isAuthPath = pathname.startsWith('/login') || pathname.startsWith('/register');

  // ---------------------------------------------------------------
  // CASE A: User is NOT logged in and tries to access protected path
  // ---------------------------------------------------------------
  if (!sessionToken && isProtectedPath) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ---------------------------------------------------------------
  // CASE B: User IS logged in and tries to access /login or /register
  // ---------------------------------------------------------------
  if (sessionToken && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // ---------------------------------------------------------------
  // CASE C: Role-Based Access Control (RBAC) Guarding
  // ---------------------------------------------------------------
  if (sessionToken && isProtectedPath) {
    try {
      const response = await fetch(new URL('/api/auth/get-session', request.url).toString(), {
        headers: request.headers,
      });

      if (response.ok) {
        const sessionData = await response.json();
        const role: UserRole = sessionData?.user?.role || 'student';

        // Admin Route Guard
        if (pathname.startsWith('/admin') && role !== 'admin') {
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        // Educator Route Guard
        if (
          pathname.startsWith('/educator') &&
          role !== 'educator' &&
          role !== 'admin'
        ) {
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        // Student Route Guard
        if (
          pathname.startsWith('/student') &&
          !['student', 'educator', 'admin'].includes(role)
        ) {
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }

        // Tracker Route Guard (Accessible by all valid logged-in roles)
        if (
          pathname.startsWith('/tracker') &&
          !['student', 'educator', 'admin'].includes(role) // 👈 Fixed syntax here
        ) {
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }
      }
    } catch (error) {
      console.error('Error verifying session in proxy.ts:', error);
    }
  }

  // Allow the request to proceed normally
  return NextResponse.next();
}

// ---------------------------------------------------------------
// Matcher Configuration
// ---------------------------------------------------------------
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/student/:path*',
    '/educator/:path*',
    '/admin/:path*',
    '/tracker/:path*', // 👈 Added /tracker matcher here
    '/login',
    '/register',
  ],
};