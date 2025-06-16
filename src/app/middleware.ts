import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const publicPaths = ['/login']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = localStorage.getItem('authToken')

  if (publicPaths.includes(pathname)) {
    return NextResponse.next()
  }

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/edit-user', '/register-user'] 
}
