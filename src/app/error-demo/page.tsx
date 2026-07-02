// 故意随机抛出错误，演示 error.tsx 的效果

export default async function ErrorDemoPage() {
  // 50% 概率抛错
  if (Math.random() > 0.5) {
    throw new Error("Random server error! Refresh to try again.")
  }

  return (
    <div>
      <h1>Error Demo</h1>
      <p>This page randomly throws errors. Refresh a few times to see the error UI.</p>
      <p>Lucky! No error this time.</p>
    </div>
  )
}
