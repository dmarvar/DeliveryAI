import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import configVars from "@/config/main.json";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  // console.log("middleware1");
  // const requestHeaders = new Headers(request.headers);
  // requestHeaders.set("x-forwarded-host", "https://localhost:3000");

  // return NextResponse.next();

  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("X-Original-Host", "localhost:3000");
  requestHeaders.set("X-Forwarded-Path", configVars.dev_path_name);

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-hello-from-middleware2`
  response.headers.set("x-hello-from-middleware2", "hello");
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: `${configVars.dev_path_name}/:path`,
};
