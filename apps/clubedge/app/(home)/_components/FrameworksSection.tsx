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
    // REST API — two horizontal arrows (request/response)
    name: 'REST API',
    icon: 'M10 27h30l-6-6m6 6-6 6M51 34H21l6 6m-6-6 6-6',
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
    // Webhook — lightning bolt
    name: 'Webhooks',
    icon: 'M35 9L20 32h14l-8 20 22-26H33z',
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
    // Zapier — Z letterform made of three lines
    name: 'Zapier',
    icon: 'M13 16h35l-35 29h35M13 30.5h35',
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
    // Mobile — phone outline with home button
    name: 'Mobile',
    icon: 'M20 8h21a3 3 0 013 3v39a3 3 0 01-3 3H20a3 3 0 01-3-3V11a3 3 0 013-3zm10.5 40a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM20 13h21v33H20z',
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
    // Slack — four rounded squares arranged in a hashtag/app grid
    name: 'Slack',
    icon: 'M22 13a4 4 0 00-4 4v4h8v-4a4 4 0 00-4-4zm17 0a4 4 0 00-4 4v4h8v-4a4 4 0 00-4-4zM13 22v8h4v-8h-4zm31 0v8h4v-8h-4zM22 35a4 4 0 00-4 4v4h8v-4a4 4 0 00-4-4zm17 0a4 4 0 00-4 4v4h8v-4a4 4 0 00-4-4zM13 35v8h4v-8h-4zm31 0v8h4v-8h-4z',
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
    // Calendar / iCal — square with two tab notches and grid lines
    name: 'Calendar',
    icon: 'M14 20h33v27H14zm8-8v8m17-8v8M14 29h33M23 37h5v5h-5zm10 0h5v5h-5z',
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
