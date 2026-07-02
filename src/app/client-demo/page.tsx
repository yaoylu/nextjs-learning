"use client"
// ↑ 这一行声明: 这是 Client Component — 跑在浏览器上
// 可以: useState、useEffect、onClick、浏览器 API
// 不可以: 直接 await fetch（要用 useEffect）

import { useState } from "react"

export default function ClientDemo() {
  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)

  return (
    <div>
      <h1>Client Component</h1>
      <p>This component runs in the <strong>browser</strong> — it has interactivity:</p>

      <div style={{ margin: "16px 0" }}>
        <button onClick={() => setCount(c => c + 1)}>
          Count: {count}
        </button>
      </div>

      <div style={{ margin: "16px 0" }}>
        <button onClick={() => setClicked(true)}>
          {clicked ? "You clicked me!" : "Click me"}
        </button>
      </div>

      <p style={{ color: "#666", fontSize: 14 }}>
        View page source → you'll see a placeholder, not this content (CSR).
      </p>
    </div>
  )
}
