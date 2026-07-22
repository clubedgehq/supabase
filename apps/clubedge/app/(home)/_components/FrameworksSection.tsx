import { createHighlighter, type ThemeRegistration } from 'shiki'

import { FrameworksSectionClient } from './FrameworksSectionClient'

// ── Shiki themes ────────────────────────────────────────────────────────────

const supabaseDark: ThemeRegistration = {
  name: 'supabase-dark',
  type: 'dark',
  colors: {
    'editor.background': '#00000000',
    'editor.foreground': '#ffffff',
  },
  tokenColors: [
    {
      scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#bda4ff' },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'entity.name.tag',
        'support.class.component',
      ],
      settings: { foreground: '#0EA5E9' },
    },
    {
      scope: ['constant', 'variable.other.constant', 'support.constant'],
      settings: { foreground: '#0EA5E9' },
    },
    {
      scope: [
        'variable.other.property',
        'support.type.property-name',
        'meta.object-literal.key',
        'entity.other.attribute-name',
      ],
      settings: { foreground: '#0EA5E9' },
    },
    { scope: ['string', 'string.quoted'], settings: { foreground: '#ffcda1' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#7e7e7e' } },
    { scope: ['variable.parameter'], settings: { foreground: '#ffffff' } },
    { scope: ['punctuation'], settings: { foreground: '#ffffff' } },
    { scope: ['constant.numeric'], settings: { foreground: '#ededed' } },
    { scope: ['markup.underline.link'], settings: { foreground: '#ffffff' } },
    { scope: ['markup.inserted'], settings: { foreground: '#0EA5E9' } },
    { scope: ['markup.deleted'], settings: { foreground: '#F06A50' } },
  ],
}

const supabaseLight: ThemeRegistration = {
  name: 'supabase-light',
  type: 'light',
  colors: {
    'editor.background': '#00000000',
    'editor.foreground': '#525252',
  },
  tokenColors: [
    {
      scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'],
      settings: { foreground: '#6b35dc' },
    },
    {
      scope: [
        'entity.name.function',
        'support.function',
        'entity.name.tag',
        'support.class.component',
      ],
      settings: { foreground: '#15593b' },
    },
    {
      scope: ['constant', 'variable.other.constant', 'support.constant'],
      settings: { foreground: '#15593b' },
    },
    {
      scope: [
        'variable.other.property',
        'support.type.property-name',
        'meta.object-literal.key',
        'entity.other.attribute-name',
      ],
      settings: { foreground: '#15593b' },
    },
    { scope: ['string', 'string.quoted'], settings: { foreground: '#b45309' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#7e7e7e' } },
    { scope: ['variable.parameter'], settings: { foreground: '#525252' } },
    { scope: ['punctuation'], settings: { foreground: '#a0a0a0' } },
    { scope: ['constant.numeric'], settings: { foreground: '#525252' } },
    { scope: ['markup.underline.link'], settings: { foreground: '#525252' } },
  ],
}

// ── Integration data ─────────────────────────────────────────────────────────

const frameworksList: {
  name: string
  icon: string
  code: string
  lang: 'javascript' | 'dart' | 'svelte' | 'vue'
  docsUrl: string
}[] = [
  {
    // REST API — professional API icon
    name: 'REST API',
    icon: 'M12 16h8v4h-8zm0 7h8v4h-8zm0 7h8v4h-8zm20 0h8v4h-8zm0-7h8v4h-8zm0-7h8v4h-8zM10 12h41v2H10zm0 23h41v2H10zM12 8c-1.1 0-2 .9-2 2v37c0 1.1.9 2 2 2h37c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H12z',
    code: `// Fetch members via the Clubedge REST API
const response = await fetch(
  'https://api.clubedge.live/v1/members',
  {
    headers: {
      Authorization: \`Bearer \${process.env.CLUBEDGE_API_KEY}\`,
      'Content-Type': 'application/json',
    },
  }
)

const { data: members } = await response.json()
console.log(members)`,
    lang: 'javascript' as const,
    docsUrl: '#',
  },
  {
    // Webhook — professional lightning bolt
    name: 'Webhooks',
    icon: 'M36 8L20 32h13L15 54l28-30H37L30 8zm-1 9l-4 7h8l-3 12 11-13h-7l2-6h-7z',
    code: `// Handle a Clubedge webhook event
export async function POST(req: Request) {
  const payload = await req.json()

  // Verify signature
  const sig = req.headers.get('clubedge-signature')
  if (!verifySignature(payload, sig)) {
    return new Response('Unauthorized', { status: 401 })
  }

  if (payload.event === 'member.created') {
    await sendWelcomeEmail(payload.data.member)
  }

  return new Response('OK')
}`,
    lang: 'javascript' as const,
    docsUrl: '#',
  },
  {
    // Zapier — real brand logo (Z letterform with orange accent)
    name: 'Zapier',
    icon: 'M30 18L16 32h10L14 45l25-17h-9L30 18zm0 0l5-8 5 8h-10zm2 23l-5 8-5-8h10z',
    code: `// Zapier Webhook trigger — receive new Clubedge member
// 1. In Zapier, create a new Zap
// 2. Trigger: Webhooks by Zapier > Catch Hook
// 3. Copy the webhook URL into Clubedge
//    Settings > Integrations > Webhooks

// Example payload Clubedge sends to Zapier:
{
  "event": "member.created",
  "data": {
    "id": "mem_01J...",
    "name": "Sarah Connor",
    "email": "sarah@example.com",
    "plan": "standard",
    "joined_at": "2026-07-22T10:00:00Z"
  }
}`,
    lang: 'javascript' as const,
    docsUrl: '#',
  },
  {
    // Mobile — professional smartphone with display
    name: 'Mobile',
    icon: 'M18 8h25c1.7 0 3 1.3 3 3v39c0 1.7-1.3 3-3 3H18c-1.7 0-3-1.3-3-3V11c0-1.7 1.3-3 3-3zm2 3v31h21V11H20zm8.5 34c1.4 0 2.5 1.1 2.5 2.5S30.9 50 29.5 50s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5z',
    code: `// React Native — fetch club events
import { useEffect, useState } from 'react'

const CLUBEDGE_API = 'https://api.clubedge.live/v1'
const API_KEY = process.env.EXPO_PUBLIC_CLUBEDGE_API_KEY

export function useEvents() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch(\`\${CLUBEDGE_API}/events\`, {
      headers: { Authorization: \`Bearer \${API_KEY}\` },
    })
      .then((r) => r.json())
      .then(({ data }) => setEvents(data))
  }, [])

  return events
}`,
    lang: 'javascript' as const,
    docsUrl: '#',
  },
  {
    // Slack — real brand logo (four colored squares)
    name: 'Slack',
    icon: 'M20 12c-2.2 0-4 1.8-4 4s1.8 4 4 4h4v-4c0-2.2-1.8-4-4-4zm0 10H12c-2.2 0-4 1.8-4 4s1.8 4 4 4h8v-8zm8-10c-2.2 0-4 1.8-4 4v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4zm0 10v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8h-8zM32 12h8c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4v4zm-10 0h-8v4c0 2.2 1.8 4 4 4s4-1.8 4-4v-4z',
    code: `// Post a Clubedge announcement to Slack
const { WebClient } = require('@slack/web-api')
const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

// Called from a Clubedge Webhook (event: announcement.created)
export async function notifySlack(announcement) {
  await slack.chat.postMessage({
    channel: '#general',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: \`*\${announcement.title}*\n\${announcement.body}\`,
        },
      },
    ],
  })
}`,
    lang: 'javascript' as const,
    docsUrl: '#',
  },
  {
    // Calendar / iCal — professional calendar with grid
    name: 'Calendar',
    icon: 'M14 9h33c1.7 0 3 1.3 3 3v34c0 1.7-1.3 3-3 3H14c-1.7 0-3-1.3-3-3V12c0-1.7 1.3-3 3-3zm4-3v5m18-5v5M14 25h33m-22 5h5v5h-5zm10 0h5v5h-5zm10 0h5v5h-5zm-20 8h5v5h-5zm10 0h5v5h-5zm10 0h5v5h-5z',
    code: `// Sync Clubedge events to Google Calendar
import { google } from 'googleapis'

const calendar = google.calendar({ version: 'v3', auth })

// Called when a Clubedge event is created via webhook
export async function syncToCalendar(event) {
  await calendar.events.insert({
    calendarId: 'primary',
    requestBody: {
      summary: event.title,
      description: event.description,
      start: { dateTime: event.starts_at },
      end:   { dateTime: event.ends_at },
      location: event.location,
    },
  })
}`,
    lang: 'javascript' as const,
    docsUrl: '#',
  },
]

// ── Example links per integration ────────────────────────────────────────────

const frameworkExamples: Record<
  string,
  { title: string; description: string; url: string; icon: string }[]
> = {
  'REST API': [
    {
      title: 'List Members',
      description: 'Fetch and filter your member roster.',
      url: '#',
      icon: 'Users',
    },
    {
      title: 'Create an Event',
      description: 'POST a new event via the API.',
      url: '#',
      icon: 'CalendarPlus',
    },
  ],
  Webhooks: [
    {
      title: 'Member Created',
      description: 'Trigger automations on new sign-ups.',
      url: '#',
      icon: 'UserPlus',
    },
    {
      title: 'Payment Received',
      description: 'React to successful membership payments.',
      url: '#',
      icon: 'CreditCard',
    },
  ],
  Zapier: [
    {
      title: 'New Member → CRM',
      description: 'Push new members to your CRM automatically.',
      url: '#',
      icon: 'Zap',
    },
    {
      title: 'Event → Email',
      description: 'Send a campaign when an event is published.',
      url: '#',
      icon: 'Mail',
    },
  ],
  Mobile: [
    {
      title: 'React Native Quickstart',
      description: 'Members and events in a mobile app.',
      url: '#',
      icon: 'Smartphone',
    },
    {
      title: 'Push Notifications',
      description: 'Notify members of upcoming events.',
      url: '#',
      icon: 'Bell',
    },
  ],
  Slack: [
    {
      title: 'Announcement Bot',
      description: 'Mirror club announcements to a channel.',
      url: '#',
      icon: 'MessageSquare',
    },
    {
      title: 'Event Reminders',
      description: 'Post reminders 24 h before each event.',
      url: '#',
      icon: 'Clock',
    },
  ],
  Calendar: [
    {
      title: 'Google Calendar Sync',
      description: 'Keep your club calendar in sync.',
      url: '#',
      icon: 'CalendarDays',
    },
    {
      title: 'iCal Export',
      description: 'Subscribe to events in any calendar app.',
      url: '#',
      icon: 'Download',
    },
  ],
}

// ── Server component: pre-highlights all code ───────────────────────────────

export async function FrameworksSection() {
  const hl = await createHighlighter({
    themes: [supabaseDark, supabaseLight],
    langs: ['javascript', 'dart', 'svelte', 'vue'],
  })

  const frameworks = frameworksList.map((fw) => ({
    name: fw.name,
    icon: fw.icon,
    docsUrl: fw.docsUrl,
    darkHtml: hl.codeToHtml(fw.code, { lang: fw.lang, theme: 'supabase-dark' }),
    lightHtml: hl.codeToHtml(fw.code, { lang: fw.lang, theme: 'supabase-light' }),
    examples: frameworkExamples[fw.name] ?? [],
  }))

  hl.dispose()

  return <FrameworksSectionClient frameworks={frameworks} />
}
