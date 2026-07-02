// 混合模式 — 实际项目中最常见的模式:
// Server Component 做数据获取，嵌套 Client Component 做交互

import LikeButton from "./like-button"

export default async function MixedDemo() {
  // 服务端获取数据
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
  const posts = await res.json()

  return (
    <div>
      <h1>Mixed: Server + Client</h1>
      <p>Posts fetched on server, Like button is a Client Component:</p>

      {posts.map((post: { id: number; title: string }) => (
        <div key={post.id} style={{ border: "1px solid #eee", padding: 12, margin: "8px 0", borderRadius: 4 }}>
          <strong>{post.title}</strong>
          {/* Client Component 嵌在 Server Component 里 */}
          <LikeButton />
        </div>
      ))}
    </div>
  )
}
