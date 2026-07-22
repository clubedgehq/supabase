import type { ReactNode } from 'react'
import { products } from 'shared-data'
import { PRODUCT_NAMES, PRODUCT_SHORTNAMES } from 'shared-data/products'

export type ProductType = {
  [key: string]: {
    name: string
    icon: string
    description: ReactNode
    description_short: string
    label: string
    url: string
  }
}

const MainProducts: ProductType = {
  [PRODUCT_SHORTNAMES.DATABASE]: {
    name: 'Members & Memberships',
    icon: products.database.icon[24],
    description: (
      <>
        <strong>Centralize member profiles, roles, statuses and renewals</strong> for your whole club or association.
      </>
    ),
    description_short: 'Manage all your members in one place',
    label: '',
    url: 'https://clubedge.live/features#members',
  },
  [PRODUCT_SHORTNAMES.AUTHENTICATION]: {
    name: 'Events & Activities',
    icon: products.authentication.icon[24],
    description: (
      <>
        <strong>Create and manage on-site or online events</strong> with registrations, tickets, QR-based attendance and engagement tools.
      </>
    ),
    description_short: 'Organize and track all your events',
    label: '',
    url: 'https://clubedge.live/features#events',
  },
  [PRODUCT_SHORTNAMES.STORAGE]: {
    name: 'File Storage',
    icon: products.storage.icon[24],
    description: (
      <>
        <strong>A simple, secure space</strong> to store your documents and media related to your club or association.
      </>
    ),
    description_short: 'Centralized storage for all files',
    label: '',
    url: 'https://clubedge.live/features#storage',
  },
  [PRODUCT_SHORTNAMES.FUNCTIONS]: {
    name: 'Communication & Announcements',
    icon: products.functions.icon[24],
    description: (
      <>
        <strong>Inform and engage members</strong> with announcements, reminders and email broadcasts.
      </>
    ),
    description_short: 'Keep your members informed',
    label: '',
    url: 'https://clubedge.live/features#communication',
  },
  [PRODUCT_SHORTNAMES.REALTIME]: {
    name: 'Edgey AI Assistant',
    icon: products.realtime.icon[24],
    description: (
      <>
        <strong>Use Edgey to assist leaders</strong> with guidance, suggestions and light automation inside Clubedge.
      </>
    ),
    description_short: 'AI-powered workflow automation',
    label: '',
    url: 'https://clubedge.live/features#edgey',
  },
}

export default MainProducts
