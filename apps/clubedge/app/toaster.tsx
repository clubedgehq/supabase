'use client'

import { useTheme } from 'next-themes'
import { SonnerToaster } from '../../packages/ui'

export function Toaster() {
  const { theme } = useTheme()
  return <SonnerToaster position="top-right" theme={theme as 'light' | 'dark' | 'system'} />
}
