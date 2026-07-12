import { Database, KeyRound, HardDrive, Zap, FunctionSquare, Boxes } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Database",
    desc: "A dedicated Postgres database. Full CRUD, indexes, triggers, and functions out of the box.",
  },
  {
    icon: KeyRound,
    title: "Authentication",
    desc: "Add user sign-ups and logins with email, magic links, and social providers.",
  },
  {
    icon: HardDrive,
    title: "Storage",
    desc: "Store, organize, and serve large files with a global CDN and simple access rules.",
  },
  {
    icon: Zap,
    title: "Realtime",
    desc: "Listen to database changes and build collaborative apps with live subscriptions.",
  },
  {
    icon: FunctionSquare,
    title: "Edge Functions",
    desc: "Deploy globally distributed TypeScript functions close to your users.",
  },
  {
    icon: Boxes,
    title: "Vector",
    desc: "Store embeddings and run similarity search to power your AI applications.",
  },
]

export function FeaturesGrid() {
  return (
    <section id="product" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to ship
          </h2>
          <p className="mt-4 text-pretty text-muted">
            Clubedge gives you the tools to build a product, without reinventing the backend.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-brand/60"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
