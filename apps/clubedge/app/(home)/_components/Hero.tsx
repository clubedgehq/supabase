'use client'

import { useSendTelemetryEvent } from '~/lib/telemetry'
import Link from 'next/link'
import { Button } from 'ui'

import SectionContainer from '@/components/Layouts/SectionContainer'

export function Hero() {
  const sendTelemetryEvent = useSendTelemetryEvent()

  return (
    <SectionContainer className="pt-12 pb-8 md:pt-40! md:pb-16">
      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end">
          <h1 className="text-foreground text-4xl sm:text-5xl sm:leading-none">
            <span className="block">Run your organization</span>
            <span className="text-brand block">effortlessly</span>
          </h1>
          <p className="text-foreground-lighter text-balance">
            Clubedge centralizes members, events, forms, files, announcements, analytics, automations and Edgey, your AI assistant, in a single modern platform.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild size="medium">
            <Link
              href="https://clubedge.live/book-demo"
              onClick={() =>
                sendTelemetryEvent({
                  action: 'book_demo_button_clicked',
                  properties: { buttonLocation: 'Homepage Hero' },
                })
              }
            >
              Book a live demo
            </Link>
          </Button>
          <Button asChild size="medium" variant="default">
            <Link
              href="https://clubedge.live"
              onClick={() =>
                sendTelemetryEvent({
                  action: 'learn_more_button_clicked',
                  properties: { buttonLocation: 'Homepage Hero' },
                })
              }
            >
              Learn more
            </Link>
          </Button>
        </div>
      </div>
    </SectionContainer>
  )
}
