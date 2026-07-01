import Link from "next/link"

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
      <Link href="/blog">← Back to Blog</Link>
    </div>
  )
}
