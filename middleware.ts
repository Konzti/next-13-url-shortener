import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SHORT_LENGTH, BASE_URL, SHORT_QUERY } from "./constants";

export async function middleware(request: NextRequest): Promise<void | NextResponse> {
  if (request.method !== "GET") {
    return NextResponse.json({ success: false, error: "method not allowed" });
  }
  if (request.nextUrl.pathname === "/") {
    return void 0;
  }
  let query = request.nextUrl.pathname.slice(1);
  if (query.length !== SHORT_LENGTH) {
    return NextResponse.redirect(request.nextUrl.origin);
  }
  let resp = await fetch(`${BASE_URL}${SHORT_QUERY}${query}`, {
    method: "POST",
  });
  let data = await resp.json();
  if (!data.success) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
  return NextResponse.redirect(new URL(data.longUrl));
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
