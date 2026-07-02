// 根布局 — 包裹所有页面
// layout.tsx 在路由切换时不会重新渲染，只有 {children} 部分替换
// 适合放导航栏、页脚等共享 UI

import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "Next.js Learning",
  description: "Learning Next.js from scratch",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* 导航栏 — 所有页面共享，路由切换时不重新渲染 */}
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/server-demo">Server</Link></li>
            <li><Link href="/client-demo">Client</Link></li>
            <li><Link href="/mixed-demo">Mixed</Link></li>
            <li><Link href="/client-fetch">Client Fetch</Link></li>
            <li><Link href="/data-fetch">Data Fetch</Link></li>
          </ul>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  )
}
