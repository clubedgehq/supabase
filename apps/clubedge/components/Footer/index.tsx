'use client'

import { CheckIcon } from '@heroicons/react/outline'
import { REALTIME_CHANNEL_STATES } from '@supabase/supabase-js'
import SupabaseWordmark from '~/components/Nav/SupabaseWordmark'
import supabase from '~/lib/supabase'
import footerData from 'data/Footer'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import {
  Badge,
  Button,
  cn,
  IconInstagram,
  IconTwitterX,
  IconYoutubeSolid,
  Input,
} from 'ui'
import { ThemeToggle } from 'ui-patterns/ThemeToggle'

import useDarkLaunchWeeks from '../../hooks/useDarkLaunchWeeks'
import SectionContainer from '../Layouts/SectionContainer'

interface Props {
  className?: string
  hideFooter?: boolean
}

const Footer = (props: Props) => {
  const pathname = usePathname()

  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterStatus('loading')
    try {
      const res = await fetch('/api-v2/submit-form-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      })
      if (!res.ok) throw new Error()
      setNewsletterStatus('success')
    } catch {
      setNewsletterStatus('error')
    }
  }

  const isDarkLaunchWeek = useDarkLaunchWeeks()
  const isGAWeek = pathname?.includes('/ga-week')
  const forceDark = isDarkLaunchWeek

  useEffect(() => {
    const channel = supabase.channel('footer')
    if (channel.state === REALTIME_CHANNEL_STATES.closed) {
      channel.subscribe()
    }
    return () => {
      channel.unsubscribe()
    }
  }, [])

  if (props.hideFooter) {
    return null
  }

  return (
    <footer
      className={cn(
        'bg-alternative',
        isDarkLaunchWeek && 'bg-[#060809]',
        isGAWeek && 'dark:bg-alternative',
        props.className
      )}
    >
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="w-full py-0!">
        <SectionContainer className="grid grid-cols-2 md:flex items-center justify-between text-foreground md:justify-center gap-8 md:gap-16 xl:gap-28 py-6! md:py-10! text-sm">
          <div className="flex flex-col md:flex-row gap-2 md:items-center">
            We protect your data.
            <Link href="/security" className="text-brand-link hover:underline">
              More on Security
            </Link>
          </div>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center md:items-center">
            <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
              <CheckIcon className="w-4 h-4" /> SOC2 Type 2{' '}
              <span className="text-foreground-lighter hidden sm:inline">Certified</span>
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
              <CheckIcon className="w-4 h-4" /> HIPAA{' '}
              <span className="text-foreground-lighter hidden sm:inline">Compliant</span>
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap flex-nowrap">
              <CheckIcon className="w-4 h-4" /> ISO 27001{' '}
              <span className="text-foreground-lighter hidden sm:inline">Certified</span>
            </li>
          </ul>
        </SectionContainer>
        <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>
      <SectionContainer className="py-8">
        <div className="xl:grid xl:grid-cols-7 xl:gap-4">
          <div className="xl:col-span-2 flex flex-col gap-8">
            <Link href="#" as="/" className="w-40">
              <SupabaseWordmark className="w-40 h-[30px]" />
            </Link>
            <div className="flex space-x-5">
              <a
                href="https://x.com/clubedgehq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">X (Twitter)</span>
                <IconTwitterX size={22} />
              </a>

              <a
                href="https://instagram.com/clubedgehq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Instagram</span>
                <IconInstagram size={22} />
              </a>

              <a
                href="https://linkedin.com/company/clubedgehq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">LinkedIn</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://youtube.com/@clubedgehq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">YouTube</span>
                <IconYoutubeSolid size={22} />
              </a>

              <a
                href="https://facebook.com/clubedgeso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-lighter hover:text-foreground transition"
              >
                <span className="sr-only">Facebook</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            <div>
              {newsletterStatus === 'success' ? (
                <div className="flex flex-col gap-1">
                  <p className="text-brand-link text-sm">Thanks for subscribing!</p>
                  <p className="text-foreground-lighter text-xs">
                    You'll hear from us when we publish our next newsletter issue.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                  <p className="text-foreground-lighter text-sm">
                    Get product updates and news from Supabase.
                  </p>
                  <Input
                    type="email"
                    placeholder="Your email"
                    aria-label="Email for newsletter"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="flex-1 md:max-w-72 xl:max-w-[80%] h-6! text-xs px-2"
                  />
                  <Button
                    variant="primary"
                    size="tiny"
                    type="submit"
                    loading={newsletterStatus === 'loading'}
                    className="w-fit"
                  >
                    Subscribe
                  </Button>
                </form>
              )}
              {newsletterStatus === 'error' && (
                <p className="text-destructive text-sm mt-2">Something went wrong. Try again.</p>
              )}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-5 xl:mt-0">
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 xl:grid-cols-6">
              {footerData.map((segment) => {
                return (
                  <div key={`footer_${segment.title}`}>
                    <h6 className="text-foreground overwrite text-base">{segment.title}</h6>
                    <ul className="mt-4 space-y-2">
                      {segment.links.map(({ component: Component, ...link }, idx) => {
                        const children = (
                          <div
                            className={`text-sm transition-colors ${
                              link.url || Component
                                ? 'text-foreground-lighter hover:text-foreground'
                                : 'text-muted hover:text-foreground-lighter'
                            } `}
                          >
                            {link.text}
                            {!link.url && !Component && (
                              <div className="ml-2 inline text-xs xl:ml-0 xl:block 2xl:ml-2 2xl:inline">
                                <Badge>Coming soon</Badge>
                              </div>
                            )}
                          </div>
                        )

                        return (
                          <li key={`${segment.title}_link_${idx}`}>
                            {link.url ? (
                              link.url.startsWith('https') ? (
                                <a href={link.url}>{children}</a>
                              ) : (
                                <Link href={link.url}>{children}</Link>
                              )
                            ) : (
                              Component && <Component>{children}</Component>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-default mt-32 flex justify-between border-t pt-8">
          <small className="small">&copy; Supabase Inc</small>
          <div className={cn(forceDark && 'hidden')}>
            <ThemeToggle forceDark={forceDark} />
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer
