'use client'

import { useSendTelemetryEvent } from '~/lib/telemetry'
import Link from 'next/link'
import { Button } from 'ui'

export function CTASection() {
  const sendTelemetryEvent = useSendTelemetryEvent()

  return (
    <div className="relative overflow-hidden py-32">
      <div className="relative z-20 flex flex-col items-center text-center gap-6">
        <h2 className="h2">
          <span className="text-foreground-lighter">Ready to centralize your club</span>
          <span className="text-foreground block sm:inline"> or association?</span>
        </h2>
        <div className="flex items-center gap-2">
          <Button asChild size="medium">
            <Link
              href="https://clubedge.live/book-demo"
              onClick={() =>
                sendTelemetryEvent({
                  action: 'book_demo_button_clicked',
                  properties: { buttonLocation: 'CTA Banner' },
                })
              }
            >
              Book a live demo
            </Link>
          </Button>
          <Button asChild size="medium" variant="default">
            <Link
              href="https://clubedge.live/contact"
              onClick={() =>
                sendTelemetryEvent({
                  action: 'contact_us_button_clicked',
                  properties: { buttonLocation: 'CTA Banner' },
                })
              }
            >
              Contact us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
