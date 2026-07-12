import type { Metadata } from "next"
import { FeaturesGrid } from "@/components/features-grid"
import { CTA } from "@/components/cta"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Features | Clubedge",
  description: "Explore the full Clubedge platform: database, auth, storage, realtime, and more.",
}

const comparison = [
  "Fully managed Postgres database",
  "Row Level Security policies",
  "Auto-generated REST and GraphQL APIs",
  "Realtime subscriptions over websockets",
  "Global file storage with CDN",
  "Serverless edge functions",
  "Vector embeddings for AI",
  "Daily backups and point-in-time recovery",
]

export default function FeaturesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            A complete backend, <span className="text-brand">batteries included</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted">
            Every Clubedge project comes with the building blocks you need to launch and grow.
          </p>
        </div>
      </section>

      <FeaturesGrid />

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight">What&apos;s included</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {comparison.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <Check className="size-3.5" />
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  )
}
