import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./firebase/auth";
import paths from "./paths";
import { isPrivateRoute } from "./lib/isPrivateRoute";

export function middleware(request: NextRequest) {
  if (isPrivateRoute(request.nextUrl.pathname) && !auth.currentUser) {
    return NextResponse.redirect(new URL(paths.signin, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
