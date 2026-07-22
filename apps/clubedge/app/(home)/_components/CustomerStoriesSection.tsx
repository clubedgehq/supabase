'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from 'ui'

import SectionContainer from '@/components/Layouts/SectionContainer'

const customerStories = [
  {
    name: 'City Athletics Club',
    initial: 'CA',
    tagline: 'Moved from spreadsheets to a fully digital member management system.',
    quote:
      'Before Clubedge, we were managing 400 members across five spreadsheets. Now everything is in one place — renewals, events, attendance — and our volunteers actually enjoy admin work.',
    author: 'Maria Santos, Club Administrator',
    bgColor: '#1a3a5c',
    bgGradient: 'linear-gradient(to bottom left, #1e4976 0%, #0f2540 100%)',
    dimBgColor: '#152d47',
    textColor: 'light' as 'light' | 'dark',
  },
  {
    name: 'Westside Debate Society',
    initial: 'WD',
    tagline: 'Streamlined event registrations and reduced no-shows by 60%.',
    quote:
      'Clubedge gave us QR check-in, automated reminders, and a clean registration flow. Our event attendance improved almost immediately after switching.',
    author: 'James Okafor, President',
    bgColor: '#2d1a5c',
    bgGradient: 'linear-gradient(to bottom left, #3a2070 0%, #1a0f40 100%)',
    dimBgColor: '#251550',
    textColor: 'light' as 'light' | 'dark',
  },
  {
    name: 'Northdale Community Association',
    initial: 'NC',
    tagline: 'Replaced three separate tools with a single unified platform.',
    quote:
      "We were paying for a form tool, an email tool, and a file storage tool separately. Clubedge replaced all three and cost us less. The time we save each week is significant.",
    author: 'Priya Nair, Operations Lead',
    bgColor: '#1a3d2b',
    bgGradient: 'linear-gradient(to bottom left, #1e4d35 0%, #0f2518 100%)',
    dimBgColor: '#152d20',
    textColor: 'light' as 'light' | 'dark',
  },
  {
    name: 'Summit Hiking Group',
    initial: 'SH',
    tagline: 'Used Edgey AI to automate their weekly member digest.',
    quote:
      'Edgey helped us set up an automated weekly summary for our members. It pulls upcoming events, new files, and announcements. Our members love the consistency.',
    author: 'Lena Fischer, Coordinator',
    bgColor: '#3d2a1a',
    bgGradient: 'linear-gradient(to bottom left, #4d3520 0%, #25180f 100%)',
    dimBgColor: '#2d2015',
    textColor: 'light' as 'light' | 'dark',
  },
  {
    name: 'Lakefront Rowing Club',
    initial: 'LR',
    tagline: 'Onboarded 200 new members in a single season with zero friction.',
    quote:
      "The member onboarding flow in Clubedge is exactly what we needed. New members fill in a form, get assigned to a group, and receive their welcome pack automatically. It's seamless.",
    author: 'Thomas Eriksson, Secretary',
    bgColor: '#1a3a4d',
    bgGradient: 'linear-gradient(to bottom left, #1e4a61 0%, #0f2535 100%)',
    dimBgColor: '#15303d',
    textColor: 'light' as 'light' | 'dark',
  },
]

// Change INACTIVE_PAD to adjust closed column width automatically
const INACTIVE_PAD = 22 // px padding on each side of icon in closed columns
const ACTIVE_PAD = 32 // px padding on each side when card is open
const ICON_PX = 32 // w-8 = 32px
const INACTIVE_COL_WIDTH = INACTIVE_PAD * 2 + ICON_PX // = 76px

function InitialChip({
  story,
  size = 'md',
}: {
  story: (typeof customerStories)[0]
  size?: 'sm' | 'md'
}) {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center font-semibold shrink-0',
        size === 'md' ? 'h-8 w-8 text-xs' : 'h-6 w-6 text-[10px]'
      )}
      style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
    >
      {story.initial}
    </div>
  )
}

export function CustomerStoriesSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className="py-24 flex flex-col gap-16">
      {/* Header row */}
      <SectionContainer className="py-0!">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h3 className="text-2xl md:text-4xl text-foreground-lighter max-w-xl">
            How clubs and associations <br />{' '}
            <span className="text-foreground">are growing with Clubedge</span>
          </h3>
          <Link
            href="#"
            className="text-sm text-foreground-light hover:text-foreground underline"
          >
            More stories
          </Link>
        </div>
      </SectionContainer>

      {/* Cards row */}
      <SectionContainer className="py-0!">
        {/* Mobile: stacked cards */}
        <div className="flex flex-col gap-2 md:hidden">
          {customerStories.map((story, index) => {
            const isActive = index === activeIdx
            return (
              <div
                key={story.name}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={story.name}
                onClick={() => setActiveIdx(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveIdx(index)
                  }
                }}
                className="text-left rounded-lg p-5 flex flex-col gap-4 overflow-hidden transition-opacity cursor-pointer"
                style={{ background: isActive ? story.bgGradient : story.dimBgColor }}
              >
                <InitialChip story={story} size="sm" />
                {isActive && (
                  <div className="flex flex-col gap-3 flex-1">
                    <div>
                      <p className="text-sm font-medium text-white">{story.name}</p>
                      <p className="text-xs mt-0.5 text-white/60">{story.tagline}</p>
                    </div>
                    <p
                      className="text-xl font-normal leading-snug text-pretty text-white"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {story.quote}
                    </p>
                    <p className="text-xs text-white/65 mb-4">{story.author}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Desktop: animated accordion grid */}
        <div
          className="hidden md:grid min-h-[480px] gap-2"
          style={{
            gridTemplateColumns: customerStories
              .map((_, i) => (i === activeIdx ? '1fr' : `${INACTIVE_COL_WIDTH}px`))
              .join(' '),
          }}
        >
          {customerStories.map((story, index) => {
            const isActive = index === activeIdx
            return (
              <motion.div
                layout
                key={story.name}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                aria-label={story.name}
                onClick={() => setActiveIdx(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveIdx(index)
                  }
                }}
                className="text-left flex flex-col items-start gap-8 overflow-hidden cursor-pointer"
                style={{
                  background: story.bgGradient,
                  borderRadius: 8,
                  padding: isActive ? ACTIVE_PAD : `${ACTIVE_PAD}px ${INACTIVE_PAD}px`,
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)',
                }}
                transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
              >
                <motion.div layout>
                  <InitialChip story={story} />
                </motion.div>

                <motion.div
                  layout
                  className="flex flex-col gap-1.5 flex-1 w-[35rem]"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    filter: isActive ? 'blur(0px)' : 'blur(2px)',
                  }}
                  transition={{
                    duration: 0.42,
                    ease: [0.165, 0.84, 0.44, 1],
                    delay: isActive ? 0.2 : 0,
                  }}
                  aria-hidden={!isActive}
                  {...(!isActive ? { inert: true } : {})}
                >
                  <motion.div layout className="flex flex-col gap-1">
                    <motion.p layout className="text-sm font-medium text-white">
                      {story.name}
                    </motion.p>
                    <motion.p layout className="text-xs leading-relaxed text-pretty text-white/60">
                      {story.tagline}
                    </motion.p>
                  </motion.div>

                  <motion.div layout className="flex flex-col gap-4 mt-auto">
                    <motion.p
                      layout
                      className="text-2xl font-normal leading-snug text-balance text-white"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {story.quote}
                    </motion.p>
                    <motion.p layout className="text-xs text-white/65 mb-4">
                      {story.author}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </SectionContainer>
    </div>
  )
}
