// middleware.ts — 必须放在 src/ 根目录（不是 app/ 里）
// 每个请求到达页面之前都会经过这里
// 适合: 认证检查、重定向、日志、添加 header

import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. 日志 — 记录每个请求
  console.log(`[middleware] ${request.method} ${pathname}`)

  // 2. 重定向 — /old-blog → /blog
  if (pathname === "/old-blog") {
    return NextResponse.redirect(new URL("/blog", request.url))
  }

  // 3. 模拟认证 — /protected 需要 token
  if (pathname.startsWith("/protected")) {
    const token = request.cookies.get("auth-token")
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // 4. 添加自定义 header
  const response = NextResponse.next()
  response.headers.set("x-middleware-time", new Date().toISOString())

  return response
}

// 配置哪些路径经过 middleware（不配则所有路径都经过）
export const config = {
  matcher: [
    // 排除静态文件和 API
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
}
