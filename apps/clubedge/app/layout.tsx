import '@code-hike/mdx/styles.css'
import 'config/code-hike.css'
import '../styles/globals.css'
import '../pages/launch-week/launchWeek.css'

import { inter, manrope, sourceCodePro } from '~/lib/fonts'
import type { Metadata, Viewport } from 'next'

import Providers from './providers'
import { APP_NAME, DEFAULT_META_DESCRIPTION } from '@/lib/constants'

const site_title = `${APP_NAME} | The All-in-One Platform for Clubs & Associations`

export const metadata: Metadata = {
  title: site_title,
  description: DEFAULT_META_DESCRIPTION,
  openGraph: {
    type: 'website',
    url: 'https://clubedge.live/',
    siteName: 'Clubedge',
    images: [
      {
        url: 'https://clubedge.live/images/og/clubedge-og.png',
        width: 1200,
        height: 630,
        alt: 'Clubedge — The All-in-One Platform for Clubs & Associations',
      },
    ],
  },
  twitter: {
    creator: '@clubedgehq',
    site: '@clubedgehq',
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/favicon.ico',
  },
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${inter.variable} ${sourceCodePro.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
