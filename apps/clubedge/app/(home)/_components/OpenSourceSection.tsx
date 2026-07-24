'use client'

import staticContent from '.generated/staticContent/_index.json'
import { useSendTelemetryEvent } from '~/lib/telemetry'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { Button } from 'ui'

import { kFormatter } from '../../../lib/helpers'
import SectionContainer from '@/components/Layouts/SectionContainer'

// ── Pixel font (5×7 per glyph) ─────────────────────────────────────────────

const GLYPHS: Record<string, string[]> = {
  '0': ['01110', '10001', '10011', '10101', '11001', '10001', '01110'],
  '1': ['00100', '01100', '00100', '00100', '00100', '00100', '01110'],
  '2': ['01110', '10001', '00001', '00110', '01000', '10000', '11111'],
  '3': ['01110', '10001', '00001', '00110', '00001', '10001', '01110'],
  '4': ['00010', '00110', '01010', '10010', '11111', '00010', '00010'],
  '5': ['11111', '10000', '11110', '00001', '00001', '10001', '01110'],
  '6': ['01110', '10001', '10000', '11110', '10001', '10001', '01110'],
  '7': ['11111', '00001', '00010', '00100', '01000', '01000', '01000'],
  '8': ['01110', '10001', '10001', '01110', '10001', '10001', '01110'],
  '9': ['01110', '10001', '10001', '01111', '00001', '10001', '01110'],
  '.': ['00000', '00000', '00000', '00000', '00000', '00000', '00100'],
  K: ['10001', '10010', '10100', '11000', '10100', '10010', '10001'],
  ' ': ['00000', '00000', '00000', '00000', '00000', '00000', '00000'],
}

function textToPixelMask(text: string): Set<string> {
  const mask = new Set<string>()
  let cursorX = 0
  for (const ch of text) {
    const glyph = GLYPHS[ch]
    if (!glyph) {
      cursorX += 3
      continue
    }
    for (let row = 0; row < glyph.length; row++) {
      for (let col = 0; col < glyph[row].length; col++) {
        if (glyph[row][col] === '1') mask.add(`${cursorX + col},${row}`)
      }
    }
    cursorX += 6 // 5 wide + 1 gap
  }
  return mask
}

// ── Contribution graph ──────────────────────────────────────────────────────

const CELL = 3
const GAP = 0.5
const COLS = 72
const ROWS = 40

const githubStars = 1200
const TEXT = kFormatter(githubStars)
const TEXT_MASK = textToPixelMask(TEXT)
const TEXT_W = TEXT.length * 6 - 1
const TEXT_H = 7
const TEXT_OFFSET_X = Math.floor((COLS - TEXT_W) / 2)
const TEXT_OFFSET_Y = Math.floor((ROWS - TEXT_H) / 2)

const LEVELS_BG = [
  'color-mix(in oklch, var(--foreground) 5%, var(--background))',
  'hsl(var(--brand-400) / 0.08)',
  'hsl(var(--brand-500) / 0.1)',
  'hsl(var(--brand-600) / 0.12)',
  'hsl(var(--brand-default) / 0.12)',
]

const LEVELS_TEXT = [
  'hsl(var(--brand-600))',
  'hsl(var(--brand-default))',
  'hsl(var(--brand-default))',
  'hsl(var(--brand-600))',
  'hsl(var(--brand-500))',
]

function makeGrid(): { level: number; isText: boolean }[][] {
  let seed = 0x9e3779b9
  const rand = () => {
    seed ^= seed << 13
    seed ^= seed >> 17
    seed ^= seed << 5
    return (seed >>> 0) / 0xffffffff
  }
  return Array.from({ length: COLS }, (_, c) =>
    Array.from({ length: ROWS }, (_, r) => {
      const v = rand()
      const level = v < 0.45 ? 0 : v < 0.65 ? 1 : v < 0.8 ? 2 : v < 0.92 ? 3 : 4
      const localX = c - TEXT_OFFSET_X
      const localY = r - TEXT_OFFSET_Y
      const isText = TEXT_MASK.has(`${localX},${localY}`)
      return { level, isText }
    })
  )
}

const GRID = makeGrid()
const SVG_W = COLS * (CELL + GAP) - GAP
const SVG_H = ROWS * (CELL + GAP) - GAP

function ContribGraph() {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      {GRID.map((col, c) =>
        col.map(({ level, isText }, r) => (
          <rect
            key={`${c}-${r}`}
            x={c * (CELL + GAP)}
            y={r * (CELL + GAP)}
            width={CELL}
            height={CELL}
            rx={1}
            fill={isText ? LEVELS_TEXT[level] : LEVELS_BG[level]}
            opacity={isInView ? 1 : 0}
            style={{
              transition: `opacity ${isText ? '0.6s' : '0.4s'} ease ${isText ? 0.3 + c * 0.015 : c * 0.02 + r * 0.01}s`,
            }}
          />
        ))
      )}
    </svg>
  )
}

// ── Component ───────────────────────────────────────────────────────────────

export function OpenSourceSection() {
  const sendTelemetryEvent = useSendTelemetryEvent()

  return (
    <div className="relative">
      {/* Stat graph — right half, full-height bleed (desktop) */}
      <div
        className="hidden md:block absolute inset-y-0 right-0 w-1/2"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 25%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 80% at 50% 50%, black 25%, transparent 75%)',
        }}
      >
        <ContribGraph />
        <p className="absolute bottom-6 w-full text-center text-xs text-foreground-muted tracking-widest uppercase">
          Communities using Clubedge
        </p>
      </div>

      <SectionContainer className="z-10 py-24!">
        <div className="flex flex-col mx-auto md:mx-0 items-center md:items-start gap-6 w-full max-w-lg">
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6 w-full">
            <div>
              <h2 className="text-4xl text-foreground text-balance">Built for every club and association</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground-lighter">
                From sports clubs and student societies to non-profits and professional associations
                — Clubedge gives every community the tools they need to grow, organize, and thrive.
                Simple to set up, powerful enough to scale.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild size="small" variant="default">
                <Link href="/dashboard" onClick={() => sendTelemetryEvent({ action: 'homepage_get_started_clicked' })}>
                  Get started free
                </Link>
              </Button>
              <Button asChild size="small" variant="outline">
                <Link href="/contact/sales">Book a demo</Link>
              </Button>
            </div>
          </div>

          {/* Contrib graph — stacked below the text on mobile */}
          <div
            className="md:hidden relative w-full aspect-2/1 mt-2"
            style={{
              maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 25%, transparent 75%)',
              WebkitMaskImage:
                'radial-gradient(ellipse 70% 80% at 50% 50%, black 25%, transparent 75%)',
            }}
          >
            <ContribGraph />
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
