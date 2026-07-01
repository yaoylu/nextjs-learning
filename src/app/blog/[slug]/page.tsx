// src/app/blog/[slug]/page.tsx → URL: /blog/hello-world, /blog/learn-nextjs, ...
// [slug] = 动态路由，方括号里的名字变成参数

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This page is dynamically rendered for slug "{slug}".</p>
      <p>
        In a real app, you'd fetch post content from a database or CMS here.
      </p>
      <a href="/blog">← Back to Blog</a>
    </div>
  )
}
