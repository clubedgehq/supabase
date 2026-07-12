import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 brand-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 text-center sm:px-6 lg:px-8 lg:pt-28">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
          <span className="size-1.5 rounded-full bg-brand" />
          Clubedge is now generally available
        </div>
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Build in a weekend,{" "}
          <span className="text-brand">scale to millions</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
          Clubedge is the open developer platform. Start your project with a Postgres database,
          Authentication, instant APIs, Realtime subscriptions, Storage, and Vector embeddings.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/#"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-strong"
          >
            Start your project
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
          >
            Request a demo
          </Link>
        </div>

        <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="size-3 rounded-full bg-surface-2" />
            <span className="size-3 rounded-full bg-surface-2" />
            <span className="size-3 rounded-full bg-surface-2" />
            <span className="ml-3 text-xs text-muted">app.clubedge.com</span>
          </div>
          <pre className="overflow-x-auto p-5 text-left font-mono text-sm leading-relaxed text-foreground">
            <code>{`import { createClient } from '@clubedge/clubedge-js'

const clubedge = createClient(URL, KEY)

// Read your data
const { data } = await clubedge
  .from('countries')
  .select('name, capital')
  .order('name')`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
