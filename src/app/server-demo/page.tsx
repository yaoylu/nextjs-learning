// Server Component（默认）— 跑在服务器上
// 可以: await fetch、读数据库、读文件、访问环境变量
// 不可以: useState、useEffect、onClick 等浏览器交互

// 这个组件的代码不会发送到浏览器 — 只有渲染结果 (HTML) 发过去
export default async function ServerDemo() {
  // 直接在组件里 await — 不需要 useEffect！
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  const post = await res.json()

  return (
    <div>
      <h1>Server Component</h1>
      <p>This data was fetched on the <strong>server</strong> at build/request time:</p>
      <blockquote style={{ borderLeft: "3px solid #0070f3", paddingLeft: 12, margin: "12px 0" }}>
        <strong>{post.title}</strong>
        <p>{post.body}</p>
      </blockquote>
      <p style={{ color: "#666", fontSize: 14 }}>
        View page source → you'll see this content in the HTML (SSR).
      </p>
    </div>
  )
}
