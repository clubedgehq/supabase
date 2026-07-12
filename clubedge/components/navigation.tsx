"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const links = [
  { label: "Product", href: "/#product" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2" aria-label="Clubedge home">
            <Logo />
            <span className="text-lg font-semibold tracking-tight">Clubedge</span>
          </Link>
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            href="/#"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-strong"
          >
            Start your project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/#"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-brand px-3 py-2 text-center text-sm font-medium text-white"
              >
                Start your project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
