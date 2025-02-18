import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n.config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // 如果已经是 /en 路径，不做处理
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return NextResponse.next()
  }

  // 检查路径是否缺少语言前缀
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const newUrl = new URL(`/en${pathname}`, request.url)
    return NextResponse.rewrite(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
} 