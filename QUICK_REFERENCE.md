# Quick Reference: www Analysis & Club Edge

## ONE-PAGE SUMMARY

### Your 4 Questions - Answered

| Question | Answer | Details |
|----------|--------|---------|
| **Can www work standalone?** | **NO** | Requires entire monorepo + 10+ workspace packages |
| **Does it depend on design-system/ui/studio?** | **YES** | Depends on `packages/ui` (the design system) |
| **What UI library is used?** | **Multi-layer** | Radix UI + shadcn/ui + Tailwind CSS + custom components |
| **Are there relations between them?** | **VERY TIGHTLY** | All apps share the same `packages/ui` design system |

---

## The UI Stack (5 Layers)

```
LAYER 5: Your App (apps/www, apps/clubedge)
         ↓ imports from
LAYER 4: Design System (packages/ui)
         ↓ contains styled with
LAYER 3: shadcn/ui Components (Tailwind-styled Radix)
         ↓ built on
LAYER 2: Radix UI Primitives (Unstyled components)
         + Tailwind CSS (Utility framework)
         ↓ renders as
LAYER 1: HTML + CSS in Browser
```

---

## Dependencies at a Glance

### Workspace Packages (Internal - CRITICAL)
```
"ui": "workspace:*"              ← 50+ components
"common": "workspace:*"          ← Hooks & utilities
"marketing": "workspace:*"       ← Marketing components
"config": "workspace:*"          ← Tailwind theme
"icons": "workspace:*"           ← Icon library
+ 5 more workspace packages
```

### External Packages (npm - Important)
```
"radix-ui": "1.4.3"              ← Base components
"tailwindcss": "4.2.4"           ← Styling
"next": "15.5.18"                ← Framework
"react": "19.2.6"                ← UI library
"lucide-react": "*"              ← Icons
"framer-motion": "11.18.2"       ← Animations
+ 30 more npm packages
```

---

## What is packages/ui?

**The centralized design system containing:**
- 50+ ready-to-use components (shadcn/ui + custom)
- Tailwind CSS configuration and theme
- CSS variables for theming
- Utility functions and hooks
- Global styles

**Used by:** ALL apps (www, studio, design-system, ui-library, clubedge)

**Exports:** `export { Button, Card, Input, Dialog, ... }`

---

## How to Use Club Edge

### Clone Complete ✅
```
Source: /apps/www
Destination: /apps/clubedge
Package name updated: "clubedge"
```

### Run It
```bash
cd /vercel/share/v0-project
pnpm install
pnpm --filter=clubedge dev
# Open http://localhost:3000
```

### Modify It
- Edit `/apps/clubedge/app/page.tsx` for homepage
- Add components to `/apps/clubedge/components/`
- Customize styling with Tailwind
- Use `import { Button } from 'ui'` for design system components

### Deploy It
```bash
pnpm --filter=clubedge build
pnpm --filter=clubedge start
```

---

## Can www Be Standalone?

### What Breaks:
```
import { Button } from 'ui'              ❌ Can't find 'ui'
import { useAuth } from 'common'         ❌ Can't find 'common'
import { HeroSection } from 'marketing'  ❌ Can't find 'marketing'
```

### Why:
- `workspace:*` references point to monorepo packages
- Monorepo packages don't exist outside the monorepo
- No pnpm-workspace.yaml to resolve them
- No external npm packages with these names

### To Make It Standalone:
1. Copy all packages/ to standalone project
2. Create pnpm-workspace.yaml
3. Update all workspace:* to resolved paths
4. OR Publish packages to npm (more complex)

---

## File Created for You

| File | Size | Contains |
|------|------|----------|
| `WWW_ANALYSIS.md` | 9 KB | Technical deep-dive analysis |
| `CLUBEDGE_SETUP_GUIDE.md` | 11 KB | Setup & configuration guide |
| `DEPENDENCY_VISUALIZATION.md` | 15 KB | Visual architecture & diagrams |
| `ANALYSIS_SUMMARY.md` | 10 KB | Executive summary |
| `QUICK_REFERENCE.md` | This file | One-page reference |
| `/apps/clubedge/` | 26 dirs | Your new app copy |

---

## Component Examples from packages/ui

### Import & Use Pattern
```typescript
import { Button, Card, Input, Dialog } from 'ui'

export function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button>Submit</Button>
    </Card>
  )
}
```

### What Happens:
1. Import resolves to `/packages/ui/index.tsx`
2. Gets component from `/packages/ui/src/components/Button/`
3. Component uses Tailwind classes: `"px-4 py-2 bg-blue-500"`
4. Tailwind CSS compiles to actual CSS
5. CSS variables applied from theme
6. Browser renders styled component

---

## Architecture Diagram (ASCII)

```
MONOREPO STRUCTURE:

supabase/
├── pnpm-workspace.yaml          ← Declares monorepo
├── packages/
│   ├── ui/                      ← DESIGN SYSTEM ⭐
│   ├── common/
│   ├── marketing/
│   ├── config/
│   └── ... (10+ packages)
└── apps/
    ├── www/                     ← Original
    ├── clubedge/                ← Your copy ✨
    ├── studio/
    └── ... (other apps)

ALL APPS USE SAME DESIGN SYSTEM (packages/ui)
```

---

## Styling Layer Breakdown

```
What You Write:
  import { Button } from 'ui'
  <Button variant="primary">Click</Button>

What Tailwind Does:
  Scans for classes used by Button component
  Generates CSS: .bg-blue-500 { background-color: #3b82f6; }

What CSS Variables Do:
  Override colors: --color-primary from theme

What Radix UI Does:
  Provides accessibility: aria-*, keyboard handling, focus mgmt

Final Result:
  <button class="px-4 py-2 bg-blue-500 rounded">Click</button>
  (fully styled, accessible, interactive)
```

---

## Environment Setup

### Install
```bash
cd /vercel/share/v0-project
pnpm install
```

### Development
```bash
# Run clubedge only
pnpm --filter=clubedge dev

# Or run all apps
pnpm dev
```

### Build
```bash
pnpm --filter=clubedge build
```

### TypeScript Check
```bash
pnpm --filter=clubedge typecheck
```

### Linting
```bash
pnpm --filter=clubedge lint
```

---

## What You Get with Club Edge

### Ready to Use:
- ✅ Next.js 16 app
- ✅ React 19 components
- ✅ 50+ UI components from design system
- ✅ Tailwind CSS styling
- ✅ TypeScript support
- ✅ Dark/Light theme support (via next-themes)
- ✅ Responsive design built-in
- ✅ Animation libraries (Framer Motion, GSAP)

### Directory Structure:
```
clubedge/
├── app/                    ← Next.js pages
│   ├── layout.tsx         ← Root layout + providers
│   ├── page.tsx           ← Homepage
│   └── ...
├── components/            ← React components (40+ included)
├── lib/                   ← Utilities
├── public/                ← Static assets
├── styles/                ← Global CSS
├── package.json           ← Dependencies
└── tsconfig.json         ← TypeScript config
```

---

## Key Differences: www vs clubedge

| Aspect | www | clubedge |
|--------|-----|----------|
| Purpose | Supabase marketing site | Your Club Edge app |
| Package name | "www" | "clubedge" |
| Version | 0.0.3 | 0.0.1 |
| Code | Original | Identical copy |
| Dependencies | Same (workspace packages) | Same (workspace packages) |
| Location | `/apps/www/` | `/apps/clubedge/` |
| Relationship | Original | Sibling |

---

## Decision Tree: What to Do Now?

```
Q: Do you want to modify clubedge within the monorepo?
├─ YES → Edit `/apps/clubedge/` files and run with `pnpm --filter=clubedge dev`
└─ NO → Keep as backup or delete if not needed

Q: Do you want to extract clubedge as standalone?
├─ YES → Copy entire packages/ + create workspace.yaml (complex)
└─ NO → Keep in monorepo (recommended)

Q: Do you need to understand the design system?
├─ YES → Read DEPENDENCY_VISUALIZATION.md and CLUBEDGE_SETUP_GUIDE.md
└─ NO → Just use `import { Button } from 'ui'` and go!

Q: Do you want to modify components?
├─ YES → Edit `/packages/ui/src/components/`
└─ NO → Use them as-is from all apps
```

---

## One More Thing...

### The Monorepo is Powerful!

Benefits of this setup:
- ✅ Shared components across all apps
- ✅ Single source of truth for design system
- ✅ Easy to update styling everywhere
- ✅ Consistent branding across apps
- ✅ Code reuse without duplication
- ✅ Simple local development

Don't extract unless you have a specific reason to!

---

## Need More Details?

- **Technical Details** → Read `WWW_ANALYSIS.md`
- **Setup & Usage** → Read `CLUBEDGE_SETUP_GUIDE.md`
- **Architecture & Diagrams** → Read `DEPENDENCY_VISUALIZATION.md`
- **Executive Summary** → Read `ANALYSIS_SUMMARY.md`
- **Quick Questions** → This file (`QUICK_REFERENCE.md`)

---

**Status: Analysis Complete ✅ | Club Edge Ready ✅ | Documentation Done ✅**

