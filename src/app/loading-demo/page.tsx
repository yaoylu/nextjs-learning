// 故意加 2 秒延迟，让 loading.tsx 有时间显示

async function slowFetch() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    cache: "no-store",
  })
  return res.json()
}

export default async function LoadingDemoPage() {
  const posts = await slowFetch()

  return (
    <div>
      <h1>Loading Demo</h1>
      <p>This page took 2 seconds to load. You saw loading.tsx while waiting.</p>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
