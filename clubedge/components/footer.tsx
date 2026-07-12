import Link from "next/link"
import { Logo } from "./logo"
import { Github, Twitter, Youtube } from "lucide-react"

const columns = [
  {
    title: "Product",
    links: ["Database", "Auth", "Storage", "Realtime", "Edge Functions", "Vector"],
  },
  {
    title: "Developers",
    links: ["Documentation", "Guides", "API Reference", "Changelog", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Customers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Support", "Community", "Partners", "Security", "Terms"],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-semibold tracking-tight">Clubedge</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The open developer platform. Build in a weekend, scale to millions.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="GitHub" className="text-muted hover:text-foreground">
                <Github className="size-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted hover:text-foreground">
                <Twitter className="size-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-muted hover:text-foreground">
                <Youtube className="size-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Clubedge. All rights reserved.</p>
          <p className="text-sm text-muted">Built for developers, everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
