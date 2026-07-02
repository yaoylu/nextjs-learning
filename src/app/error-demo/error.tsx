"use client"

// error.tsx — 约定文件，必须是 Client Component
// 当 page.tsx 抛出错误时自动显示，不会让整个页面崩溃

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div style={{ padding: 20, border: "1px solid #ff4444", borderRadius: 4, background: "#fff5f5" }}>
      <h2>Something went wrong!</h2>
      <p style={{ color: "#666" }}>{error.message}</p>
      <button onClick={reset} style={{ marginTop: 8 }}>
        Try again
      </button>
    </div>
  )
}
