// 服务端数据获取 — 三种缓存策略

// 1. 默认缓存 (Static): 构建时获取，后续请求直接用缓存
//    适合不常变的数据（博客文章、产品列表）
async function getStaticPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
  return res.json()
}

// 2. 不缓存 (Dynamic): 每次请求都重新获取
//    适合实时数据（用户信息、库存）
async function getDynamicPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
    cache: "no-store",
  })
  return res.json()
}

// 3. 定时重新验证 (ISR): 缓存一段时间，过期后重新获取
//    适合中等频率变化的数据（新闻、排行榜）
async function getRevalidatedPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
    next: { revalidate: 60 }, // 60 秒后过期
  })
  return res.json()
}

export default async function DataFetchPage() {
  // 三个请求并行执行
  const [staticPost, dynamicPost, revalidatedPost] = await Promise.all([
    getStaticPost(),
    getDynamicPost(),
    getRevalidatedPost(),
  ])

  return (
    <div>
      <h1>Server Data Fetching</h1>

      <section style={{ margin: "16px 0", padding: 12, border: "1px solid #eee", borderRadius: 4 }}>
        <h2>1. Static (default cache)</h2>
        <p style={{ color: "#666", fontSize: 13 }}>Fetched at build time, cached forever until redeploy</p>
        <p><strong>{staticPost.title}</strong></p>
      </section>

      <section style={{ margin: "16px 0", padding: 12, border: "1px solid #eee", borderRadius: 4 }}>
        <h2>2. Dynamic (no cache)</h2>
        <p style={{ color: "#666", fontSize: 13 }}>Fetched fresh on every request — cache: "no-store"</p>
        <p><strong>{dynamicPost.title}</strong></p>
      </section>

      <section style={{ margin: "16px 0", padding: 12, border: "1px solid #eee", borderRadius: 4 }}>
        <h2>3. ISR (revalidate: 60s)</h2>
        <p style={{ color: "#666", fontSize: 13 }}>Cached, refreshed every 60 seconds</p>
        <p><strong>{revalidatedPost.title}</strong></p>
      </section>

      <p style={{ color: "#666", fontSize: 13, marginTop: 16 }}>
        Rendered at: {new Date().toISOString()}
      </p>
    </div>
  )
}
