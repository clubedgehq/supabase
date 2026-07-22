# CLUBEDGE - SAFE FOLDERS TO DELETE

Analysis of which folders can be safely deleted from the monorepo without breaking the Club Edge application.

---

## CLUBEDGE WORKSPACE DEPENDENCIES (Required - DO NOT DELETE)

These 10 packages are directly required by clubedge and must be kept:

```
✓ ai-commands           - AI command utilities
✓ common                - Shared utilities and hooks
✓ config                - Configuration files (Tailwind, TypeScript, ESLint)
✓ dev-tools             - Development utilities
✓ eslint-config-supabase - ESLint configuration
✓ icons                 - Icon components (lucide-react wrappers)
✓ marketing             - Marketing components and utilities
✓ shared-data           - Shared data structures and constants
✓ ui                    - Main design system (50+ components)
✓ ui-patterns           - UI pattern components
```

---

## APPS TO DELETE (If not needed)

These applications can be safely deleted if you only need clubedge:

| App | Size | Used By | Safe to Delete |
|-----|------|---------|---|
| **www** | ~500MB | Supabase marketing site | ✅ YES |
| **studio** | ~400MB | Supabase Studio dashboard | ✅ YES |
| **design-system** | ~200MB | Design system showcase | ✅ YES |
| **docs** | ~800MB | Supabase documentation | ✅ YES |
| **learn** | ~300MB | Learning resources | ✅ YES |
| **lite-studio** | ~200MB | Lite Studio app | ✅ YES |
| **ui-library** | ~150MB | UI Library showcase | ✅ YES |

**Total potential savings: ~2.5GB+**

---

## PACKAGES TO DELETE (If not needed)

These packages are NOT used by clubedge and can be deleted:

| Package | Used By | Safe to Delete | Notes |
|---------|---------|---|---|
| **api-types** | ui-library only | ✅ YES | TypeScript types for APIs |
| **build-icons** | Build process only | ⚠️ MAYBE | Only if you don't rebuild icons |
| **generator** | Build process | ⚠️ MAYBE | Generators for documentation |
| **pg-meta** | studio only | ✅ YES | PostgreSQL metadata (studio dependency) |
| **tsconfig** | ⚠️ Referenced by config | ⚠️ NO | Keep - referenced by other packages |

---

## SAFE DELETION GUIDE

### Option 1: MINIMAL SETUP (Clubedge Only)

Keep only:
- `/apps/clubedge`
- `/packages/ai-commands`
- `/packages/common`
- `/packages/config`
- `/packages/dev-tools`
- `/packages/eslint-config-supabase`
- `/packages/icons`
- `/packages/marketing`
- `/packages/shared-data`
- `/packages/ui`
- `/packages/ui-patterns`
- `/packages/tsconfig` (required by config)

**Delete:**
```bash
# Delete other apps
rm -rf /apps/www
rm -rf /apps/studio
rm -rf /apps/design-system
rm -rf /apps/docs
rm -rf /apps/learn
rm -rf /apps/lite-studio
rm -rf /apps/ui-library

# Delete unused packages
rm -rf /packages/api-types
rm -rf /packages/pg-meta
rm -rf /packages/build-icons    # (optional - only if not rebuilding)
rm -rf /packages/generator       # (optional - only if not generating docs)
```

**Estimated size reduction: 2.5GB+**

### Option 2: LEAN SETUP (Clubedge + Documentation)

If you want to keep documentation (docs app), also keep:
- `/apps/docs`
- All packages from Option 1

**Delete from Option 1:** www, studio, design-system, learn, lite-studio, ui-library

**Estimated size reduction: ~1.6GB**

### Option 3: DEVELOPMENT SETUP (Clubedge + All Support)

Keep everything except:
- `/apps/studio` (Supabase-specific)
- `/apps/www` (Supabase-specific)
- `/packages/pg-meta` (Supabase-specific)
- `/packages/api-types` (UI-library only)

This keeps design tools and learning resources for development.

**Estimated size reduction: ~900MB**

---

## DEPENDENCY TREE

```
clubedge
├── ai-commands
├── common
│   └── config
│   └── tsconfig (indirect)
├── config
│   └── tsconfig
├── dev-tools
├── eslint-config-supabase
│   └── (ESLint rules only)
├── icons
│   └── lucide-react (external)
├── marketing
│   └── ui
│   └── common
├── shared-data
├── ui (50+ shadcn components)
│   ├── common
│   ├── config
│   └── icons
└── ui-patterns
    ├── ui
    ├── common
    └── framer-motion
```

---

## STEP-BY-STEP DELETION (Minimal Setup)

### 1. Verify clubedge runs before deletion

```bash
cd /vercel/share/v0-project
pnpm install
pnpm --filter=clubedge dev
# Test at http://localhost:3000
```

### 2. Delete apps

```bash
rm -rf /vercel/share/v0-project/apps/www
rm -rf /vercel/share/v0-project/apps/studio
rm -rf /vercel/share/v0-project/apps/design-system
rm -rf /vercel/share/v0-project/apps/docs
rm -rf /vercel/share/v0-project/apps/learn
rm -rf /vercel/share/v0-project/apps/lite-studio
rm -rf /vercel/share/v0-project/apps/ui-library
```

### 3. Delete unused packages

```bash
rm -rf /vercel/share/v0-project/packages/api-types
rm -rf /vercel/share/v0-project/packages/pg-meta
rm -rf /vercel/share/v0-project/packages/generator
# Optional:
rm -rf /vercel/share/v0-project/packages/build-icons
```

### 4. Clean and reinstall

```bash
cd /vercel/share/v0-project
rm -rf node_modules
rm -rf pnpm-lock.yaml (or package-lock.json)
pnpm install
```

### 5. Verify clubedge still works

```bash
pnpm --filter=clubedge dev
# Test at http://localhost:3000
```

### 6. Update pnpm-workspace.yaml (Optional cleanup)

If needed, edit `/vercel/share/v0-project/pnpm-workspace.yaml` to remove references to deleted directories.

---

## WHAT NOT TO DELETE

**KEEP ALWAYS:**
- ✅ `/apps/clubedge` - Your main app
- ✅ `/packages/ui` - Design system (50+ components)
- ✅ `/packages/common` - Shared utilities
- ✅ `/packages/config` - Build configuration
- ✅ `/packages/tsconfig` - TypeScript config
- ✅ `/packages/icons` - Icon library

**KEEP FOR DEVELOPMENT:**
- ✅ `/packages/dev-tools` - Development utilities
- ✅ `/packages/eslint-config-supabase` - Linting
- ✅ `/packages/ai-commands` - AI utilities

**MAYBE KEEP:**
- ⚠️ `/packages/marketing` - If using marketing components
- ⚠️ `/packages/shared-data` - If using shared data

**SAFE TO DELETE:**
- ❌ `/apps/www` - Supabase marketing (not needed for clubedge)
- ❌ `/apps/studio` - Supabase Studio (not needed for clubedge)
- ❌ `/apps/docs` - Documentation (if not needed)
- ❌ `/packages/api-types` - UI-library only
- ❌ `/packages/pg-meta` - Studio only
- ❌ `/packages/generator` - Build tools for docs
- ❌ `/packages/build-icons` - Icon building (if not rebuilding)

---

## SIZE COMPARISON

### Current Monorepo
```
Total: ~3.5GB+
├── apps: ~2.5GB
└── packages: ~1GB
```

### Minimal Setup (clubedge only)
```
Total: ~1GB
├── apps/clubedge: ~400MB
└── packages (10 only): ~600MB
```

### Lean Setup (clubedge + docs)
```
Total: ~1.8GB
├── apps/clubedge: ~400MB
├── apps/docs: ~800MB
└── packages: ~600MB
```

---

## IMPORTANT NOTES

1. **Before Deleting**: Test clubedge locally and confirm it works
2. **Keep Backups**: Git commit before major deletions
3. **pnpm-workspace.yaml**: May need updating after deletions
4. **Build Scripts**: Check if any build scripts reference deleted folders
5. **Git History**: You can recover deleted files from git if needed

---

## RECOMMENDATION

For a **production Club Edge deployment**, use **Option 1 (Minimal Setup)**:
- Delete 7 apps (~2GB saved)
- Delete 4 packages (~300MB saved)
- Keep only what clubedge needs
- Reduces complexity and build times
- Final size: ~1GB

---

## VERIFICATION CHECKLIST

After deletions, verify:

```
✓ cd /vercel/share/v0-project
✓ pnpm install (should complete without errors)
✓ pnpm --filter=clubedge dev (should start on port 3000)
✓ http://localhost:3000 (should load the homepage)
✓ Homepage should show Club Edge branding (not Supabase)
✓ All links should work (book-demo, learn more, etc.)
✓ No console errors or missing imports
✓ All components render correctly
```

