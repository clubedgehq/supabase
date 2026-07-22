# Apps/www Dependency Visualization & Architecture

## Question: Can www Work Standalone?

```
QUESTION: Does www depend on design-system, ui library, studio?
ANSWER:   YES - heavily dependent on packages/ui (design system)
QUESTION: Can I extract www and run it independently?
ANSWER:   NO - requires entire workspace infrastructure
```

---

## Visual Dependency Tree

### www Application (apps/www)

```
┌─────────────────────────────────┐
│      apps/www                   │  ← Marketing Website
│  (Next.js + React App)          │
└────────────────┬────────────────┘
                 │
    ┌────────────┼────────────────┬─────────────────┐
    │            │                │                 │
    ▼            ▼                ▼                 ▼
┌────────┐  ┌──────────┐  ┌────────────┐  ┌──────────────┐
│ UI LIB │  │ COMMON   │  │ MARKETING  │  │ CONFIG       │
│(50+    │  │ (Hooks,  │  │(CMS        │  │(Tailwind,    │
│comps)  │  │Providers)│  │Schemas)    │  │TypeScript)   │
└────────┘  └──────────┘  └────────────┘  └──────────────┘
     │            │             │                 │
     └─────────────┴─────────────┴─────────────────┘
                    │
          ┌─────────┴──────────┐
          │                    │
          ▼                    ▼
    ┌──────────────┐    ┌─────────────┐
    │ Radix UI     │    │ Tailwind    │
    │ (Primitive   │    │ CSS         │
    │  Components) │    │ (Styling)   │
    └──────────────┘    └─────────────┘
          │                    │
          └─────────────────────┘
                    │
          ┌─────────┴──────────┐
          │                    │
          ▼                    ▼
    ┌──────────────┐    ┌─────────────┐
    │ lucide-react │    │ framer-    │
    │ (Icons)      │    │ motion     │
    │              │    │ (Animation)│
    └──────────────┘    └─────────────┘
```

---

## The Complete UI Stack (Layers)

```
                          ┌──────────────────────────────┐
                          │  apps/www                    │
                          │  (Marketing Website)         │
                          └──────────────┬───────────────┘
                                         │
                                    imports from
                                         │
                          ┌──────────────▼───────────────┐
                          │  packages/ui                 │
                          │  (Supabase Design System)    │
                          │                              │
                          │  Exports:                    │
                          │  - 50+ components            │
                          │  - Theme system              │
                          │  - Utilities & hooks         │
                          └──────────────┬───────────────┘
                                         │
                            styled with  │  + enhanced with
                                    ┌────┴─────┐
                        ┌───────────┘           └────────────┐
                        │                                    │
           ┌────────────▼──────────────┐    ┌──────────────▼────────┐
           │ shadcn/ui                 │    │ Custom Supabase       │
           │ (Radix + Tailwind)        │    │ Components            │
           │                           │    │                       │
           │ - Dialog                  │    │ - Button (custom)     │
           │ - Dropdown                │    │ - NavMenu             │
           │ - Form                    │    │ - SidePanel           │
           │ - Accordion               │    │ - LoadingLine         │
           │ - Tabs                    │    │ - ThemeProvider       │
           │ - Card                    │    │ - AnimatedCounter     │
           │ - Input                   │    │ - TreeView            │
           │ - Select                  │    │ - StatusIcon          │
           │ ... (40 more)             │    │ ... (more custom)     │
           └────────────┬──────────────┘    └──────────────┬────────┘
                        │                                   │
                        └───────────────┬───────────────────┘
                                        │
                         ┌──────────────┴──────────────┐
                         │                             │
            ┌────────────▼──────────────┐  ┌──────────▼────────────┐
            │ Radix UI                  │  │ Tailwind CSS          │
            │ (Unstyled Primitives)     │  │ (Utility-first        │
            │                           │  │  Framework)           │
            │ Provides:                 │  │                       │
            │ - Accessibility           │  │ Provides:             │
            │ - Behavior                │  │ - Colors              │
            │ - Events                  │  │ - Spacing             │
            │ - Keyboard handling       │  │ - Typography          │
            │ - Focus management        │  │ - Animations          │
            │                           │  │ - Responsive design   │
            └───────────────────────────┘  └───────────────────────┘
                        │                           │
                        │      Compiled into        │
                        └───────────────┬───────────┘
                                        │
                                        │
                          ┌─────────────▼──────────────┐
                          │  Final Styled Component    │
                          │  (HTML + CSS classes)      │
                          └────────────────────────────┘
```

---

## Dependency Resolution Map

### When you `import { Button } from 'ui'`:

```
1. Browser requests component
   │
   ├─► Look in: /apps/www/node_modules/ui
   │   Result: NOT FOUND (workspace package)
   │
   ├─► Look in: /packages/ui/index.tsx
   │   Result: FOUND - exports Button
   │
   ├─► Resolve: /packages/ui/src/components/Button/index.tsx
   │   
   ├─► Button is built with:
   │   ├─ Tailwind CSS classes (from packages/config)
   │   ├─ Radix UI primitive (from npm)
   │   ├─ CVA (class-variance-authority) for variants
   │   └─ Custom Supabase styling
   │
   ├─► Bundle with:
   │   ├─ React (19.2.6)
   │   ├─ Tailwind CSS (4.2.4)
   │   └─ lucide-react (for icons within button)
   │
   └─► Result: Styled interactive component ready to use
```

---

## Workspace Dependency Structure

```
/supabase (root)
│
├── pnpm-workspace.yaml      ← Declares this as a monorepo
│
├── package.json             ← Root dependencies (turbo, build tools)
│
├── packages/                ← Shared packages
│   ├── ui/                  ← MAIN DESIGN SYSTEM ★
│   │   ├── package.json     ← Defines what ui exports
│   │   ├── src/
│   │   │   ├── components/shadcn/ui/   ← 50+ styled components
│   │   │   ├── components/Button       ← Custom Button
│   │   │   └── lib/utils.ts            ← Utilities
│   │   └── index.tsx        ← Main export file
│   │
│   ├── common/              ← Utilities package
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── hooks/       ← React hooks
│   │   │   ├── auth/        ← Auth helpers
│   │   │   ├── Providers/   ← React context providers
│   │   │   └── ...
│   │   └── index.tsx
│   │
│   ├── marketing/           ← Marketing schemas & components
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── sections/    ← Hero, Pricing, etc.
│   │   │   └── schemas/     ← Zod validators
│   │   └── index.ts
│   │
│   ├── config/              ← Configuration
│   │   ├── tailwind.config.js   ← TAILWIND THEME ★
│   │   ├── typescript/
│   │   └── eslint/
│   │
│   ├── icons/               ← Icon library
│   ├── shared-data/         ← Shared JSON data
│   └── ... (10 more packages)
│
└── apps/                    ← Applications
    ├── www/                 ← Original website
    │   ├── package.json
    │   └── app/             ← Next.js pages
    │
    ├── clubedge/            ← YOUR NEW COPY ✨
    │   ├── package.json     ← References ui, common, marketing
    │   └── app/             ← Next.js pages
    │
    └── ... (other apps)
```

---

## How Styling Works in www

### CSS Resolution Chain:

```
Component Usage:
  import { Button } from 'ui'
  <Button variant="primary">Click</Button>
        │
        ▼
  1. Component code (packages/ui/src/components/Button.tsx)
     - Uses Tailwind classes: "px-4 py-2 rounded"
     - Uses CVA for variants: { primary: "bg-blue-500" }
     - Uses CSS variables: var(--color-primary)
        │
        ▼
  2. Tailwind CSS compilation (packages/config/tailwind.config.js)
     - Scans for used classes
     - Generates CSS from utility definitions
     - Applies theme tokens (colors, spacing)
        │
        ▼
  3. CSS Variables (from packages/ui)
     - --color-primary: #3b82f6
     - --color-surface: #ffffff
     - --radius: 0.5rem
        │
        ▼
  4. Final CSS in Browser
     - .px-4 { padding-left: 1rem; padding-right: 1rem; }
     - .bg-blue-500 { background-color: #3b82f6; }
     - .rounded { border-radius: 0.5rem; }
        │
        ▼
  5. Rendered HTML Element
     <button class="px-4 py-2 rounded bg-blue-500">Click</button>
```

---

## Import Resolution Examples

### Example 1: Importing a UI Component
```typescript
// In apps/www/components/MyComponent.tsx
import { Button, Card } from 'ui'

// Resolution:
// 1. pnpm sees "ui" import
// 2. Checks workspace packages
// 3. Finds /packages/ui/package.json
// 4. Loads /packages/ui/index.tsx
// 5. Gets exports for Button and Card
// 6. Loads actual component files
✅ SUCCESS
```

### Example 2: Importing Common Utilities
```typescript
// In apps/www/hooks/useFetch.ts
import { useAuth } from 'common'

// Resolution:
// 1. pnpm sees "common" import
// 2. Checks workspace packages
// 3. Finds /packages/common/package.json
// 4. Loads /packages/common/index.tsx
// 5. Finds useAuth hook
✅ SUCCESS
```

### Example 3: If www Was Copied Standalone
```typescript
// In /clubedge/components/MyComponent.tsx (STANDALONE)
import { Button } from 'ui'

// Resolution attempt:
// 1. pnpm sees "ui" import
// 2. Checks workspace packages (only clubedge/)
// 3. No workspace.yaml at clubedge root
// 4. Can't find "ui"
// 5. npm registry search (not found there)
❌ FAILS - "Cannot find module 'ui'"
```

---

## How to Make www Standalone

### Option 1: Extract Packages Locally (Recommended for clean extraction)

```bash
# Create new project
clubedge/
  ├── package.json          ← NEW: references local packages
  ├── pnpm-workspace.yaml   ← NEW: workspace config
  ├── apps/
  │   └── clubedge/         ← Copy of www
  └── packages/
      ├── ui/               ← Copy from /packages/ui
      ├── common/           ← Copy from /packages/common
      ├── marketing/        ← Copy from /packages/marketing
      ├── config/           ← Copy from /packages/config
      ├── icons/            ← Copy from /packages/icons
      └── ... (other packages www needs)
```

**Commands:**
```bash
cd clubedge
pnpm install
pnpm --filter=clubedge dev
```

### Option 2: Publish to npm

```json
// In clubedge/package.json
{
  "dependencies": {
    "ui": "^1.0.0",          ← From npm instead of workspace
    "common": "^1.0.0",
    "marketing": "^1.0.0"
  }
}
```

### Option 3: Keep in Monorepo (RECOMMENDED FOR NOW)

```bash
# Current setup works perfectly
cd /supabase
pnpm install
pnpm --filter=clubedge dev
```

---

## Summary: The Three Layers

### Application Layer
- `apps/www` and `apps/clubedge`
- Next.js application
- Uses components and utilities

### Design System Layer
- `packages/ui` (50+ styled components)
- `packages/config` (Tailwind theme)
- Theme variables and utilities

### Foundation Layer
- Radix UI (accessibility primitives)
- Tailwind CSS (styling framework)
- React (component framework)

---

## Key Takeaways

1. **www is NOT standalone** - It needs the entire monorepo
2. **UI library is `packages/ui`** - A wrapper around shadcn/ui + Radix UI
3. **Design system is Tailwind-based** - CSS variables + utility-first
4. **www and clubedge are identical** - Just copies of each other in monorepo
5. **To extract:** Copy packages/ + apps/clubedge/ together
6. **Current setup:** Keep in monorepo, run with `pnpm --filter=clubedge dev`

