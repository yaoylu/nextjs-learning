import Link from "next/link"

// not-found.tsx — 当调用 notFound() 或访问不存在的路由时显示
export default function NotFound() {
  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link href="/">← Home</Link>
    </div>
  )
}
