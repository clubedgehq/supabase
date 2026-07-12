import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: "Pricing | Clubedge",
  description: "Simple, predictable pricing that scales with your project.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "/ month",
    desc: "Perfect for hobby projects and experiments.",
    features: ["Up to 2 projects", "500 MB database", "1 GB file storage", "Community support"],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$25",
    cadence: "/ month",
    desc: "For production apps that need room to grow.",
    features: [
      "Unlimited projects",
      "8 GB database included",
      "100 GB file storage",
      "Daily backups",
      "Email support",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    desc: "Dedicated support and infrastructure at scale.",
    features: ["Dedicated infrastructure", "Sso and audit logs", "99.99% uptime SLA", "24/7 priority support"],
    cta: "Contact sales",
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Predictable pricing, <span className="text-brand">designed to scale</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted">
            Start free and only pay for what you use. No surprises.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                tier.featured ? "border-brand bg-surface" : "border-border bg-surface"
              }`}
            >
              {tier.featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-semibold">{tier.name}</h2>
              <p className="mt-2 text-sm text-muted">{tier.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{tier.price}</span>
                <span className="text-sm text-muted">{tier.cadence}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 inline-flex size-5 items-center justify-center rounded-full bg-brand-soft text-brand">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                  tier.featured
                    ? "bg-brand text-white hover:bg-brand-strong"
                    : "border border-border bg-background text-foreground hover:bg-surface-2"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
