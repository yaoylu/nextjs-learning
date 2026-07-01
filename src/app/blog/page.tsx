import Link from "next/link"

export default function BlogPage() {
  const posts = [
    { slug: "hello-world", title: "Hello World" },
    { slug: "learn-nextjs", title: "Learning Next.js" },
    { slug: "react-vs-nextjs", title: "React vs Next.js" },
  ]

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
