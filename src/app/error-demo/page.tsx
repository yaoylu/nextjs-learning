"use client"

import { useState, useEffect } from "react"

// 用 useEffect 触发错误 — useEffect 只在浏览器运行，构建时不执行
export default function ErrorDemoPage() {
  const [shouldError, setShouldError] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (Math.random() > 0.5) {
      setShouldError(true)
    }
    setChecked(true)
  }, [])

  if (shouldError) {
    throw new Error("Random client error! Click 'Try again' to retry.")
  }

  if (!checked) return <p>Loading...</p>

  return (
    <div>
      <h1>Error Demo</h1>
      <p>This page randomly throws errors. Refresh a few times to see the error UI.</p>
      <p>Lucky! No error this time.</p>
    </div>
  )
}
