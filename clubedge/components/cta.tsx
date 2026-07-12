import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 brand-grid opacity-30" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Start building with Clubedge today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted">
              Sign up and launch your first project in minutes. No credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#"
                className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-strong"
              >
                Start your project
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
