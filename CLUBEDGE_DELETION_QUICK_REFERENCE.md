# CLUBEDGE - QUICK DELETION REFERENCE

## TL;DR - What Can Be Deleted?

### APPS (Delete All 7)
```
❌ /apps/www              (~500MB)  - Supabase marketing
❌ /apps/studio           (~400MB)  - Supabase Studio
❌ /apps/design-system    (~200MB)  - Design showcase
❌ /apps/docs             (~800MB)  - Documentation
❌ /apps/learn            (~300MB)  - Learning resources
❌ /apps/lite-studio      (~200MB)  - Lite Studio
❌ /apps/ui-library       (~150MB)  - UI Library showcase

TOTAL: ~2.5GB saved
```

### PACKAGES (Delete 4)
```
❌ /packages/api-types    - Used by ui-library only
❌ /packages/pg-meta      - Used by studio only (Supabase-specific)
❌ /packages/build-icons  - Build tool (optional if not rebuilding)
❌ /packages/generator    - Build tool (optional if not generating)

TOTAL: ~300MB saved
```

### PACKAGES (Must Keep - 11)
```
✅ /packages/ai-commands
✅ /packages/common
✅ /packages/config
✅ /packages/dev-tools
✅ /packages/eslint-config-supabase
✅ /packages/icons
✅ /packages/marketing
✅ /packages/shared-data
✅ /packages/tsconfig
✅ /packages/ui
✅ /packages/ui-patterns
```

---

## One-Line Deletion Commands

```bash
# Delete all other apps
rm -rf /vercel/share/v0-project/apps/{www,studio,design-system,docs,learn,lite-studio,ui-library}

# Delete unused packages
rm -rf /vercel/share/v0-project/packages/{api-types,pg-meta,generator,build-icons}

# Clean and verify
cd /vercel/share/v0-project
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm --filter=clubedge dev
```

---

## Size Comparison

| Setup | Size | What You Keep |
|-------|------|---|
| Current | ~3.5GB | Everything |
| Minimal | ~1GB | Just clubedge + required packages |
| Lean | ~1.8GB | clubedge + docs + packages |

---

## What Breaks If I Delete The Wrong Thing?

### If You Delete Required Packages
- clubedge won't run
- Missing imports: `ui`, `common`, `config`, `icons`, `marketing`, `ui-patterns`
- These 10 packages have cascading dependencies

### If You Delete Other Apps
- NOTHING breaks
- These are standalone apps that don't depend on clubedge
- clubedge doesn't use them

### If You Delete Unused Packages
- NOTHING breaks
- `api-types`, `pg-meta`, `generator`, `build-icons` are NOT used by clubedge
- Only used by other apps (studio, docs, ui-library)

---

## Safe Check Before Deleting

```bash
# Verify clubedge works NOW
pnpm --filter=clubedge dev

# Then delete with confidence
rm -rf /vercel/share/v0-project/apps/www
# etc...

# Verify clubedge still works
pnpm install
pnpm --filter=clubedge dev
```

---

## Dependencies Used By Clubedge Only

These packages are used ONLY by clubedge (not by other apps):
- ✅ ai-commands
- ✅ marketing (mostly)
- ✅ shared-data (mostly)

These are safe to delete if you're running clubedge standalone, but they provide useful functionality so keep them unless you really need to minimize.

---

## Packages Used By Multiple Apps

| Package | Used By | Keep? |
|---------|---------|---|
| ui | All apps | ✅ KEEP |
| common | All apps | ✅ KEEP |
| config | All apps | ✅ KEEP |
| icons | Most apps | ✅ KEEP |
| tsconfig | All apps | ✅ KEEP |

---

## Bottom Line

**Just delete this and don't break clubedge:**
```bash
rm -rf /vercel/share/v0-project/apps/{www,studio,design-system,docs,learn,lite-studio,ui-library}
rm -rf /vercel/share/v0-project/packages/{api-types,pg-meta}
```

**Safe size reduction: ~2.8GB**
