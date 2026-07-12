import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Clubedge",
  description: "Product updates, engineering deep dives, and stories from the Clubedge team.",
}

const featured = {
  tag: "Launch",
  title: "Introducing Clubedge Vector: production-ready embeddings",
  excerpt:
    "Store, index, and query embeddings directly next to your data. Build AI features without stitching together a separate vector store.",
  date: "Jul 8, 2026",
  read: "6 min read",
}

const posts = [
  {
    tag: "Engineering",
    title: "How we scaled realtime to millions of concurrent connections",
    date: "Jul 2, 2026",
    read: "8 min read",
  },
  {
    tag: "Product",
    title: "Row Level Security, explained for application developers",
    date: "Jun 24, 2026",
    read: "5 min read",
  },
  {
    tag: "Community",
    title: "Highlights from the Clubedge Launch Week",
    date: "Jun 15, 2026",
    read: "4 min read",
  },
  {
    tag: "Tutorial",
    title: "Build a full-stack app with Next.js and Clubedge",
    date: "Jun 9, 2026",
    read: "10 min read",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-pretty text-muted">
            Product updates, engineering deep dives, and stories from the Clubedge team.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <article className="group grid gap-6 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand/60 lg:grid-cols-2 lg:p-8">
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
              {featured.tag}
            </span>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-pretty text-muted">{featured.excerpt}</p>
            <div className="mt-5 flex items-center gap-3 text-sm text-muted">
              <span>{featured.date}</span>
              <span aria-hidden="true">·</span>
              <span>{featured.read}</span>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-border bg-background">
            <div className="brand-grid h-56 w-full rounded-xl opacity-40" aria-hidden="true" />
          </div>
        </article>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-brand/60"
            >
              <span className="w-fit rounded-full bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
                {post.tag}
              </span>
              <h3 className="mt-4 flex items-start justify-between gap-2 text-lg font-semibold">
                <span className="text-balance">{post.title}</span>
                <ArrowUpRight className="size-4 shrink-0 text-muted transition-colors group-hover:text-brand" />
              </h3>
              <div className="mt-4 flex items-center gap-3 text-sm text-muted">
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.read}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
