import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('next-auth.session-token');
    const isAuthPage = request.nextUrl.pathname.startsWith('/auth');

    if (!token && !isAuthPage) {
        // Redirect to the auth page if not authenticated and not already on the auth page
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    if (token && isAuthPage) {
        // Redirect to the home page if authenticated and trying to access the auth page
        return NextResponse.redirect(new URL('/dash', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/auth/:path*"],
};