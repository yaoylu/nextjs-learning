"use client"

import { useState } from "react"

// 改为 Client Component — 构建时不执行，不会阻断 build
export default function ErrorDemoPage() {
  const [shouldError] = useState(() => Math.random() > 0.5)

  if (shouldError) {
    throw new Error("Random client error! Click 'Try again' to retry.")
  }

  return (
    <div>
      <h1>Error Demo</h1>
      <p>This page randomly throws errors. Refresh a few times to see the error UI.</p>
      <p>Lucky! No error this time.</p>
    </div>
  )
}
