"use client"

import { useState, useEffect } from "react"

// Client Component 获取数据 — 需要 useEffect + useState + loading 状态
// 对比 Server Component: 直接 await fetch()，简洁得多

export default function ClientFetchDemo() {
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Client Fetch</h1>
      <p>Data fetched in the <strong>browser</strong> after page load:</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <p style={{ color: "#666", fontSize: 14, marginTop: 12 }}>
        View page source → you'll see "Loading..." not the data (fetched client-side).
      </p>
    </div>
  )
}
