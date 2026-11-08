import { NextResponse, type NextRequest } from 'next/server';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_MAX_AGE_SECONDS,
  isLocale,
} from '@/lib/i18n/locale';

const IGNORED_PREFIXES = ['/_next', '/api'];

function isIgnoredPath(pathname: string): boolean {
  return IGNORED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

function stripLocalePrefix(pathname: string): string | null {
  const segments = pathname.split('/');

  if (!isLocale(segments[1])) {
    return null;
  }

  const rest = `/${segments.slice(2).join('/')}`;

  return rest === '/' ? '/' : rest.replace(/\/$/, '');
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (isIgnoredPath(pathname)) {
    return NextResponse.next();
  }

  const canonicalPath = stripLocalePrefix(pathname);

  if (canonicalPath !== null) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = canonicalPath;

    return NextResponse.redirect(redirectUrl);
  }

  const requestedLocale = searchParams.get('lang');
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(requestedLocale)
    ? requestedLocale
    : isLocale(cookieLocale)
      ? cookieLocale
      : DEFAULT_LOCALE;

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname =
    pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  const response = NextResponse.rewrite(rewriteUrl);

  if (isLocale(requestedLocale) && requestedLocale !== cookieLocale) {
    response.cookies.set({
      name: LOCALE_COOKIE,
      value: locale,
      path: '/',
      maxAge: LOCALE_MAX_AGE_SECONDS,
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
