import { PRODUCT_MODULES_NAMES, PRODUCT_NAMES } from 'shared-data/products'

type ProductsArrayItem = PRODUCT_NAMES | PRODUCT_MODULES_NAMES

export type Example = {
  type: string
  tags: string[]
  products: ProductsArrayItem[]
  title: string
  description: string
  author?: string
  author_url?: string
  author_img?: string
  repo_name?: string
  repo_url?: string
  vercel_deploy_url?: string
  demo_url?: string
}

const Examples: Example[] = [
  {
    type: 'example',
    tags: ['Members', 'Onboarding'],
    products: [PRODUCT_NAMES.DATABASE, PRODUCT_NAMES.AUTHENTICATION],
    title: 'Member Onboarding Flow',
    description:
      'Set up a complete member onboarding experience with custom intake forms, role assignment, and automatic welcome emails — ready in minutes.',
    author: 'Clubedge Team',
    author_url: 'https://clubedge.live',
    repo_url: '#',
    demo_url: '#',
  },
  {
    type: 'example',
    tags: ['Events', 'Registration'],
    products: [PRODUCT_NAMES.DATABASE, PRODUCT_NAMES.AUTHENTICATION],
    title: 'Event Registration & Attendance',
    description:
      'Create an event, collect registrations, and track attendance on the day using QR code check-in — all from one dashboard.',
    author: 'Clubedge Team',
    author_url: 'https://clubedge.live',
    repo_url: '#',
    demo_url: '#',
  },
  {
    type: 'example',
    tags: ['Forms', 'Surveys'],
    products: [PRODUCT_NAMES.DATABASE],
    title: 'Member Survey & Feedback Form',
    description:
      'Build a custom survey form, share it with your members, and view aggregated results — no coding required.',
    author: 'Clubedge Team',
    author_url: 'https://clubedge.live',
    repo_url: '#',
    demo_url: '#',
  },
  {
    type: 'example',
    tags: ['Communication', 'Announcements'],
    products: [PRODUCT_NAMES.DATABASE],
    title: 'Broadcast Announcement',
    description:
      'Send a targeted announcement to a subset of members filtered by role, status, or group with a single click.',
    author: 'Clubedge Team',
    author_url: 'https://clubedge.live',
    repo_url: '#',
    demo_url: '#',
  },
  {
    type: 'example',
    tags: ['Storage', 'Files'],
    products: [PRODUCT_NAMES.STORAGE],
    title: 'Document Library Setup',
    description:
      'Organize club documents into folders, set access permissions per group, and let members download files securely.',
    author: 'Clubedge Team',
    author_url: 'https://clubedge.live',
    repo_url: '#',
    demo_url: '#',
  },
  {
    type: 'example',
    tags: ['Trainings', 'Schedule'],
    products: [PRODUCT_NAMES.DATABASE],
    title: 'Training Session Planner',
    description:
      'Schedule a series of training sessions, attach resources and materials, and open enrollment to registered members.',
    author: 'Clubedge Team',
    author_url: 'https://clubedge.live',
    repo_url: '#',
    demo_url: '#',
  },
]

export default Examples
