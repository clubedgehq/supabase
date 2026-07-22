# /apps/www - Detailed Analysis & Dependency Investigation

## Executive Summary
**Can `www` be installed locally and work independently?**
**NO** - The `www` application **HEAVILY DEPENDS** on multiple workspace packages and cannot work standalone. It's tightly integrated into a monorepo using pnpm workspaces.

---

## Architecture Overview

### 1. Project Structure
The project uses **pnpm workspaces** with the following structure:
```
supabase (root)
├── apps/
│   ├── www                 ← Website (MARKETING SITE)
│   ├── design-system
│   ├── docs
│   ├── studio
│   ├── ui-library
│   └── learn
├── packages/               ← SHARED PACKAGES (CRITICAL DEPENDENCIES)
│   ├── ui                  ← UI COMPONENT LIBRARY (shadcn)
│   ├── common              ← SHARED UTILITIES & HOOKS
│   ├── marketing           ← MARKETING COMPONENTS & SCHEMAS
│   ├── icons               ← ICON LIBRARY
│   ├── config              ← SHARED CONFIG
│   ├── ai-commands
│   ├── shared-data
│   └── ... 11 more packages
```

**Key Point:** `www` imports from these workspace packages using the `workspace:*` specifier in package.json.

---

## UI Library & Design System Analysis

### PRIMARY UI SOURCES USED IN `www`:

#### 1. **Radix UI** (Base primitives)
- **Package:** `radix-ui` v1.4.3
- **Location:** `packages/ui/src/components/shadcn/ui/`
- **What it is:** Low-level, accessible component primitives
- **Examples:** Dialog, Popover, AlertDialog, Tabs, Dropdown, etc.

#### 2. **shadcn/ui** (Enhanced components)
- **Package:** Part of `ui` package
- **Location:** `packages/ui/src/components/shadcn/ui/`
- **What it is:** Supabase-branded Radix UI components with Tailwind styling
- **Exported Components:**
  ```
  - Button, Card, Input, Select
  - Dialog, AlertDialog, Drawer
  - Accordion, Tabs, Toggle
  - Form, Checkbox, RadioGroup, Switch
  - Breadcrumb, DropdownMenu, CommandPalette
  - Tooltip, Badge, Progress, Skeleton
  - Sidebar, Chart, TreeView
  - ... and many more
  ```

#### 3. **Custom Supabase UI Components**
- **Package:** `ui` package (workspace:*)
- **Location:** `packages/ui/src/components/`
- **Custom Components:**
  ```
  - Button (custom, not shadcn's)
  - Menu, NavMenu
  - SidePanel, LoadingLine
  - ExpandingTextArea
  - AnimatedCounter
  - LogoLoader
  - ThemeProvider, KeyboardShortcut
  - StatusIcon
  - TreeView
  ```

#### 4. **Tailwind CSS** (Styling framework)
- **Version:** 4.2.4 (catalog version)
- **Configuration:** Via `tailwind.config.js` in `packages/config`
- **Theme Tokens:** Defined at root level with color/spacing system

#### 5. **Icons**
- **Primary:** `lucide-react` (*latest)
- **Secondary:** Custom SVG icons from `packages/icons`
- **Social Icons:** `IconTwitterX`, `IconDiscord`, `IconYoutube`, etc.

#### 6. **Marketing Components**
- **Package:** `marketing` (workspace:*)
- **Location:** `packages/marketing/`
- **Purpose:** Reusable marketing sections for landing pages
- **Schemas:** Zod validation schemas for CMS integration

---

## www Dependencies Breakdown

### Direct Package Dependencies (from www/package.json):

#### Workspace Packages (CRITICAL - Must have access):
```json
"ui": "workspace:*",              ← UI COMPONENT LIBRARY
"common": "workspace:*",           ← UTILITIES, HOOKS, PROVIDERS
"marketing": "workspace:*",        ← MARKETING COMPONENTS
"icons": "workspace:*",            ← ICON LIBRARY
"config": "workspace:*",           ← SHARED CONFIGURATION
"ai-commands": "workspace:*",
"dev-tools": "workspace:*",
"shared-data": "workspace:*",
"eslint-config-supabase": "workspace:*",
"api-types": "workspace:*"
```

**These are NOT external npm packages - they are LOCAL monorepo packages!**

#### External UI/Design Packages:
```json
"radix-ui": "catalog:",           ← Base accessible components
"class-variance-authority": "^0.7.1",  ← CSS-in-JS
"clsx": "^2.1.1",                 ← Class name utilities
"lucide-react": "*",              ← Icons
"framer-motion": "^11.18.2",      ← Animations
"recharts": "catalog:",           ← Charts
"next-themes": "catalog:",        ← Theme switching
"@heroicons/react": "^1.0.6"      ← Alternative icons
```

#### Content & Documentation:
```json
"@mdx-js/mdx": "^3.0.1",
"@mdx-js/react": "^3.0.0",
"@code-hike/mdx": "^0.9.0",       ← Code highlighting
"markdown-toc": "^1.2.0",
"remark": "^15.0.1",
"react-markdown": "^10.1.0",
"next-mdx-remote-client": "^1.1.7"
```

#### Other Major Dependencies:
```json
"next": "^15.5.18",               ← Next.js framework
"react": "catalog:",              ← React 19.2.6
"react-dom": "catalog:",
"@supabase/supabase-js": "catalog:", ← Supabase client
"@supabase/ssr": "catalog:",      ← Server-side rendering
"openai": "^4.75.1",              ← AI integrations
"gsap": "^3.13.0",                ← Advanced animations
"framer-motion": "^11.18.2",
"animejs": "^4.0.2"
```

---

## What IS Design System / UI Library?

### `ui` Package = Supabase's Design System
- **Location:** `/packages/ui/`
- **It contains:**
  1. **shadcn/ui components** - Enhanced Radix UI with Supabase branding
  2. **Custom Supabase components** - Unique UI elements
  3. **Tailwind CSS configuration** - Theme, colors, spacing
  4. **Global styles** - CSS variables, theme setup
  5. **Utilities & hooks** - Helper functions

### How it's used in `www`:
```typescript
// From apps/www files
import { Button, Card, Input, Accordion } from 'ui'
import { useTheme } from 'ui'
import type { MyComponentType } from 'ui'
```

The `ui` package is the SINGLE SOURCE OF TRUTH for all UI components used across the entire Supabase monorepo.

---

## The Design System Flow

```
Radix UI (Base) 
    ↓
shadcn/ui (Enhanced)
    ↓
packages/ui (Supabase wrapper + customization)
    ↓
Tailwind CSS (Styling)
    ↓
apps/www (Consumer)
```

### Styling Layers:
1. **Tailwind CSS classes** - Base utility-first CSS
2. **CSS variables** - Theme colors, spacing, fonts
3. **CVA (class-variance-authority)** - Component variants
4. **Component-specific styles** - Custom styling per component
5. **Global styles** - Root theme setup

---

## Can www Work Standalone?

### NO - Here's why:

#### 1. **Workspace Dependencies Cannot be Resolved**
When you copy only `www`, the `workspace:*` imports fail:
```json
// www/package.json still references:
"ui": "workspace:*",          ← BREAKS - ui package not found
"common": "workspace:*",       ← BREAKS - common package not found
"marketing": "workspace:*"     ← BREAKS - marketing package not found
```

#### 2. **Missing UI Components**
All calls to `import { Button } from 'ui'` will fail because the `ui` package doesn't exist.

#### 3. **Missing Shared Utilities**
- Theme providers
- Auth helpers
- Feature flags
- Database types
- Analytics integrations
- All from `common` package

#### 4. **Missing Marketing Schemas**
- CMS integration schemas (Zod validators)
- Reusable marketing component templates
- From `marketing` package

#### 5. **Missing Configuration**
- Tailwind config
- TypeScript config
- ESLint config
- All in `config` and related packages

---

## What You Need to Make www Standalone

If you want to extract `www` and run it independently, you would need to:

### Option 1: Bundle Everything
1. Copy `apps/www/`
2. Copy `packages/ui/` → `www/packages/ui/`
3. Copy `packages/common/` → `www/packages/common/`
4. Copy `packages/marketing/` → `www/packages/marketing/`
5. Copy `packages/icons/`, `packages/config/`, etc.
6. Create a new `pnpm-workspace.yaml` at `www/` root
7. Update all `workspace:*` to local paths

### Option 2: Convert to npm Packages
1. Publish `ui`, `common`, `marketing` to npm
2. Update `www/package.json` to reference npm packages
3. Install from npm instead of workspace

### Option 3: Monorepo as Needed
- Keep entire monorepo
- Run `pnpm install` at root
- Run `pnpm --filter=www dev`
- This works perfectly as-is

---

## Summary Table

| Aspect | Details |
|--------|---------|
| **Framework** | Next.js 16 |
| **Package Manager** | pnpm 10.24 |
| **UI Library** | shadcn/ui + Radix UI + Custom |
| **Styling** | Tailwind CSS v4.2.4 |
| **Icons** | lucide-react + custom SVGs |
| **Animations** | Framer Motion + GSAP |
| **Design System Location** | `/packages/ui/` |
| **Theme System** | CSS variables + Tailwind |
| **Monorepo Tool** | pnpm workspaces |
| **Standalone?** | NO - Too many dependencies |
| **Recommendation** | Keep in monorepo or extract full workspace |

---

## Running www

### Current Setup (Recommended):
```bash
# At root of monorepo
pnpm install
pnpm --filter=www dev
# Runs on http://localhost:3000
```

### With Full Environment:
```bash
pnpm dev  # Runs all apps in parallel
```

---

## Key Files to Understand

- `/apps/www/package.json` - Dependencies
- `/packages/ui/index.tsx` - All exported components
- `/packages/ui/src/components/shadcn/ui/` - Component implementations
- `/packages/common/index.tsx` - Utilities and providers
- `/packages/config/tailwind.config.js` - Tailwind theme
- `/pnpm-workspace.yaml` - Workspace configuration

