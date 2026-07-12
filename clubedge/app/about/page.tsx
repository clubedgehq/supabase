import type { Metadata } from "next"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "About | Clubedge",
  description: "We are on a mission to give every developer a powerful, open backend.",
}

const values = [
  { title: "Open by default", desc: "We build in the open and give developers full control of their data." },
  { title: "Developer first", desc: "Great docs, fast tooling, and APIs that feel intuitive from the start." },
  { title: "Built to scale", desc: "From a weekend prototype to millions of users on the same platform." },
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Giving developers an <span className="text-brand">open backend</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted">
            Clubedge started with a simple idea: developers should be able to build a complete
            product without reinventing the backend every time. Today we help teams around the
            world ship faster on an open, scalable platform.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-surface p-8">
              <h2 className="text-lg font-semibold text-brand">{v.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
