import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

const handleIntl = createIntlMiddleware({
  locales: ['en', 'bn'],
  defaultLocale: 'en',
  localeDetection: true,
});

type UserRole = 'student' | 'educator' | 'admin';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameWithoutLocale = pathname.replace(/^\/(en|bn)/, '') || '/';
  const currentLocale = pathname.match(/^\/(en|bn)(\/|$)/)?.[1] || 'en';

  const sessionToken =
    request.cookies.get('better-auth.session_token')?.value ||
    request.cookies.get('__Secure-better-auth.session_token')?.value;

  const isProtectedPath =
    pathnameWithoutLocale.startsWith('/dashboard') ||
    pathnameWithoutLocale.startsWith('/student') ||
    pathnameWithoutLocale.startsWith('/educator') ||
    pathnameWithoutLocale.startsWith('/admin') ||
    pathnameWithoutLocale.startsWith('/tracker');

  const isAuthPath =
    pathnameWithoutLocale.startsWith('/login') ||
    pathnameWithoutLocale.startsWith('/register');

  // Updated type to accept string | URL
  const localizedRedirect = (path: string, url: string | URL) => {
    return NextResponse.redirect(new URL(`/${currentLocale}${path}`, url));
  };

  // CASE A: Unauthenticated user accesses protected route
  if (!sessionToken && isProtectedPath) {
    const loginUrl = new URL(`/${currentLocale}/login`, request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // CASE B: Authenticated user accesses auth route
  if (sessionToken && isAuthPath) {
    return localizedRedirect('/dashboard', request.url);
  }

  // CASE C: Role-Based Access Control (RBAC)
  if (sessionToken && isProtectedPath) {
    try {
      const response = await fetch(
        new URL('/api/auth/get-session', request.url).toString(),
        {
          headers: {
            cookie: request.headers.get('cookie') || '',
          },
        }
      );

      if (response.ok) {
        const sessionData = await response.json();
        const role: UserRole = sessionData?.user?.role || 'student';

        if (pathnameWithoutLocale.startsWith('/admin') && role !== 'admin') {
          return localizedRedirect('/dashboard', request.url);
        }

        if (
          pathnameWithoutLocale.startsWith('/educator') &&
          role !== 'educator' &&
          role !== 'admin'
        ) {
          return localizedRedirect('/dashboard', request.url);
        }

        if (
          pathnameWithoutLocale.startsWith('/student') &&
          !['student', 'educator', 'admin'].includes(role)
        ) {
          return localizedRedirect('/dashboard', request.url);
        }

        if (
          pathnameWithoutLocale.startsWith('/tracker') &&
          !['student', 'educator', 'admin'].includes(role)
        ) {
          return localizedRedirect('/dashboard', request.url);
        }
      }
    } catch (error) {
      console.error('Error verifying session in proxy.ts:', error);
    }
  }

  return handleIntl(request);
}

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)']
};