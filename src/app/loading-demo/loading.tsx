// loading.tsx — 约定文件
// 当 page.tsx 在服务端 await 数据时，自动显示这个组件
// 基于 React Suspense 实现，不需要手动写 loading state

export default function Loading() {
  return (
    <div style={{ padding: 20, color: "#666" }}>
      <p>Loading posts...</p>
    </div>
  )
}
