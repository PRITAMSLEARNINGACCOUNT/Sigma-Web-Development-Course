import { NextResponse } from "next/server";

export async function middleware(request) {

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/about/:path*",
};

// Alternative Way To Achieve The Same Thing As Above
// export async function middleware(request) {
//   if (request.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.rewrite(new URL("/", request.url));
//   }
//   return NextResponse.redirect(new URL("/", request.url));
// }
