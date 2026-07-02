import Link from "next/link"

// 模拟博客数据（实际项目中从数据库或 CMS 获取）
const posts: Record<string, { title: string; content: string }> = {
  "hello-world": {
    title: "Hello World",
    content: "Welcome to my blog! This is the first post.",
  },
  "learn-nextjs": {
    title: "Learning Next.js",
    content: "Next.js makes React development easier with SSR, routing, and more.",
  },
  "react-vs-nextjs": {
    title: "React vs Next.js",
    content: "React is a library, Next.js is a framework built on top of React.",
  },
}

// generateStaticParams — 告诉 Next.js 在 build 时预先生成哪些页面
// 构建时: Next.js 调用这个函数 → 得到 slug 列表 → 为每个 slug 生成静态 HTML
// 效果: /blog/hello-world, /blog/learn-nextjs, /blog/react-vs-nextjs 变成静态页面（SSG）
export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
  // 返回: [{ slug: "hello-world" }, { slug: "learn-nextjs" }, { slug: "react-vs-nextjs" }]
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <Link href="/blog">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/blog">← Back to Blog</Link>
    </div>
  )
}
