import VideoWithHighlights from 'components/VideoWithHighlights'
import MainProducts from 'data/MainProducts'
import { useSendTelemetryEvent } from 'lib/telemetry'
import Link from 'next/link'
import { topTweets } from 'shared-data/tweets'
import { Button, IconDiscord } from 'ui'

import ProductModules from '../ProductModules'

export default () => {
  const sendTelemetryEvent = useSendTelemetryEvent()

  return {
    heroSection: {
      heading: (
        <>
          <span className="block text-[#F4FFFA00] bg-clip-text bg-linear-to-b from-foreground to-foreground-light">
            Run your organization
          </span>
          <span className="text-transparent bg-clip-text bg-linear-to-br from-[#0EA5E9] via-[#0EA5E9] to-[#06B6D4] block md:ml-0">
            effortlessly
          </span>
        </>
      ),
      subheading: (
        <>
          Clubedge is the all-in-one platform for clubs and associations. <br className="hidden md:block" />
          Centralize members, events, forms, files, announcements, analytics, automations and Edgey, your AI assistant, in a single modern platform.
        </>
      ),
      image: '/images/index/gradient-bg.png',
      cta: {
        label: 'Book a live demo',
        link: 'https://clubedge.live/book-demo',
      },
      secondaryCta: {
        label: 'Learn more',
        link: 'https://clubedge.live',
      },
    },
    productsSection: {
      products: {
        ...MainProducts,
        vector: {
          name: 'Forms & Registrations',
          icon: 'M4.13477 12.8129C4.13477 14.1481 4.43245 15.4138 4.96506 16.5471M12.925 4.02271C11.5644 4.02271 10.276 4.33184 9.12614 4.88371M21.7152 12.8129C21.7152 11.4644 21.4115 10.1867 20.8688 9.0447M12.925 21.6032C14.2829 21.6032 15.5689 21.2952 16.717 20.7454M16.717 20.7454C17.2587 21.5257 18.1612 22.0366 19.1831 22.0366C20.84 22.0366 22.1831 20.6935 22.1831 19.0366C22.1831 17.3798 20.84 16.0366 19.1831 16.0366C17.5263 16.0366 16.1831 17.3798 16.1831 19.0366C16.1831 19.6716 16.3804 20.2605 16.717 20.7454ZM4.96506 16.5471C4.16552 17.086 3.63965 17.9999 3.63965 19.0366C3.63965 20.6935 4.98279 22.0366 6.63965 22.0366C8.2965 22.0366 9.63965 20.6935 9.63965 19.0366C9.63965 17.3798 8.2965 16.0366 6.63965 16.0366C6.01951 16.0366 5.44333 16.2248 4.96506 16.5471ZM9.12614 4.88371C8.58687 4.08666 7.67444 3.56274 6.63965 3.56274C4.98279 3.56274 3.63965 4.90589 3.63965 6.56274C3.63965 8.2196 4.98279 9.56274 6.63965 9.56274C8.2965 9.56274 9.63965 8.2196 9.63965 6.56274C9.63965 5.94069 9.45032 5.36285 9.12614 4.88371ZM20.8688 9.0447C21.6621 8.50486 22.1831 7.59464 22.1831 6.56274C22.1831 4.90589 20.84 3.56274 19.1831 3.56274C17.5263 3.56274 16.1831 4.90589 16.1831 6.56274C16.1831 8.2196 17.5263 9.56274 19.1831 9.56274C19.8081 9.56274 20.3884 9.37165 20.8688 9.0447Z',
          description: (
            <>
              <strong>Build forms for registrations, surveys and feedback</strong>, then control who can access and respond.
            </>
          ),
          description_short: 'Flexible forms for any use case',
          label: '',
          url: 'https://clubedge.live/features#forms',
        },
        'data-api': {
          name: 'Trainings & Workshops',
          icon: 'M4.13477 12.8129C4.13477 14.1481 4.43245 15.4138 4.96506 16.5471M12.925 4.02271C11.5644 4.02271 10.276 4.33184 9.12614 4.88371M21.7152 12.8129C21.7152 11.4644 21.4115 10.1867 20.8688 9.0447M12.925 21.6032C14.2829 21.6032 15.5689 21.2952 16.717 20.7454M16.717 20.7454C17.2587 21.5257 18.1612 22.0366 19.1831 22.0366C20.84 22.0366 22.1831 20.6935 22.1831 19.0366C22.1831 17.3798 20.84 16.0366 19.1831 16.0366C17.5263 16.0366 16.1831 17.3798 16.1831 19.0366C16.1831 19.6716 16.3804 20.2605 16.717 20.7454ZM4.96506 16.5471C4.16552 17.086 3.63965 17.9999 3.63965 19.0366C3.63965 20.6935 4.98279 22.0366 6.63965 22.0366C8.2965 22.0366 9.63965 20.6935 9.63965 19.0366C9.63965 17.3798 8.2965 16.0366 6.63965 16.0366C6.01951 16.0366 5.44333 16.2248 4.96506 16.5471ZM9.12614 4.88371C8.58687 4.08666 7.67444 3.56274 6.63965 3.56274C4.98279 3.56274 3.63965 4.90589 3.63965 6.56274C3.63965 8.2196 4.98279 9.56274 6.63965 9.56274C8.2965 9.56274 9.63965 8.2196 9.63965 6.56274C9.63965 5.94069 9.45032 5.36285 9.12614 4.88371ZM20.8688 9.0447C21.6621 8.50486 22.1831 7.59464 22.1831 6.56274C22.1831 4.90589 20.84 3.56274 19.1831 3.56274C17.5263 3.56274 16.1831 4.90589 16.1831 6.56274C16.1831 8.2196 17.5263 9.56274 19.1831 9.56274C19.8081 9.56274 20.3884 9.37165 20.8688 9.0447Z',
          description: (
            <>
              <strong>Organize trainings, workshops and internal sessions</strong> with schedules, resources and discussion forums.
            </>
          ),
          description_short: 'Host training sessions and education',
          label: '',
          url: 'https://clubedge.live/features#trainings',
        },
      },
    },
    dashboardFeatures: {
      title: (
        <>
          <span className="text-foreground">Manage your organization</span>
          <br className="hidden sm:block" /> from a powerful unified dashboard
        </>
      ),
      tabs: [
        {
          label: 'Member Management',
          panel: ({ isDark }: { isDark: boolean }) => (
            <VideoWithHighlights
              video={{
                title: 'Clubedge member management',
                sources: [
                  {
                    src: `https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-table-editor${isDark ? '' : '-light'}`,
                    type: 'video/mp4',
                  },
                ],
                poster: `/images/index/dashboard/supabase-table-editor${isDark ? '' : '-light'}.png`,
              }}
            />
          ),
          highlights: [
            {
              label: 'Member profiles and directory',
              link: 'https://clubedge.live',
            },
            {
              label: 'Attendance tracking',
              link: 'https://clubedge.live',
            },
            {
              label: 'Membership management',
              link: 'https://clubedge.live',
            },
            { label: 'Automated reminders', link: 'https://clubedge.live' },
            { label: 'Role-based access', link: 'https://clubedge.live' },
          ],
        },
        {
          label: 'Events & Activities',
          panel: ({ isDark }: { isDark: boolean }) => (
            <VideoWithHighlights
              video={{
                title: 'Clubedge events management',
                sources: [
                  {
                    src: `https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-sql-editor${isDark ? '' : '-light'}`,
                    type: 'video/mp4',
                  },
                ],
                poster: `/images/index/dashboard/supabase-sql-editor${isDark ? '' : '-light'}.png`,
              }}
            />
          ),
          highlights: [
            { label: 'Visual calendar interface', link: 'https://clubedge.live' },
            {
              label: 'RSVP management',
              link: 'https://clubedge.live',
            },
            {
              label: 'Automated notifications',
              link: 'https://clubedge.live',
            },
            {
              label: 'Recurring events',
              link: 'https://clubedge.live',
            },
          ],
        },
        {
          label: 'Analytics & Edgey AI',
          panel: ({ isDark }: { isDark: boolean }) => (
            <VideoWithHighlights
              video={{
                title: 'Clubedge analytics and AI',
                sources: [
                  {
                    src: `https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-rls${isDark ? '' : '-light'}`,
                    type: 'video/mp4',
                  },
                ],
                poster: `/images/index/dashboard/supabase-rls${isDark ? '' : '-light'}.png`,
              }}
            />
          ),
          highlights: [
            { label: 'Engagement tracking', link: 'https://clubedge.live' },
            {
              label: 'Growth indicators',
              link: 'https://clubedge.live',
            },
            {
              label: 'AI-powered suggestions',
              link: 'https://clubedge.live',
            },
            {
              label: 'Automated workflows',
              link: 'https://clubedge.live',
            },
            {
              label: 'Export capabilities',
              link: 'https://clubedge.live',
            },
          ],
        },
      ],
    },
    twitterSocialSection: {
      heading: 'Join the community',
      subheading: 'Connect with clubs and organizations using Clubedge to manage their communities.',
      ctas: (
        <Button asChild variant="default" size="small">
          <Link
            href={'https://clubedge.live'}
            target="_blank"
            tabIndex={-1}
            onClick={() =>
              sendTelemetryEvent({
                action: 'homepage_clubedge_button_clicked',
              })
            }
          >
            Explore Clubedge
          </Link>
        </Button>
      ),
      tweets: topTweets,
    },
  }
}
