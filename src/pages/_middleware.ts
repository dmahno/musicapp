import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.TRAX_ACCESS_TOKEN;

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.rewrite(url);
  }
}
