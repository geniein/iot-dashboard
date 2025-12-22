// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // 실제 환경에서는 DB나 쿠키를 통해 'isSetupComplete'를 체크해야 합니다.
  const isFirstTime = true; 

  if (isFirstTime && pathname === '/') {
    return NextResponse.redirect(new URL('/setup', request.url))
  }
}

export const config = {
  matcher: ['/'], // 루트 접속 시에만 작동
}