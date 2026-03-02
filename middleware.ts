import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRedirectDestination } from '@/lib/redirects';

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/_next/') || 
      pathname.startsWith('/api/') || 
      pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|json|woff|woff2|ttf|eot)$/)) {
    return NextResponse.next();
  }
  
  const redirectDest = getRedirectDestination(pathname);
  if (redirectDest) {
    const url = request.nextUrl.clone();
    url.pathname = redirectDest;
    return NextResponse.redirect(url, 308);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
