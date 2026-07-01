// 嵌套布局 — 只影响 /blog 下的所有页面
// /blog 和 /blog/[slug] 都会被这个 layout 包裹
// 但 /about 不会 — 它只受根 layout 影响

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div style={{ background: "#f0f7ff", padding: "8px 12px", borderRadius: 4, marginBottom: 16 }}>
        Blog Section
      </div>
      {children}
    </div>
  )
}
