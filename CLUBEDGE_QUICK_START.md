# Club Edge - Quick Start Reference

## ⚡ Quick Facts

- **What:** Club Edge branding applied to hero page
- **Where:** `/apps/clubedge/app/(home)/_components/Hero.tsx`
- **When:** 2026-07-22
- **What Changed:** 8 content items (headline, buttons, description)
- **Breaking Changes:** None ✅

---

## 🚀 To Run Club Edge

```bash
cd /vercel/share/v0-project
pnpm install
pnpm --filter=clubedge dev
# → Opens http://localhost:3000
```

---

## 📝 What's New in Hero

### Headlines
| Element | Before | After |
|---------|--------|-------|
| Main | "Build in a weekend" | "Connect with Your Club" |
| Accent | "Scale to millions" | "Build Your Community" |

### Description
| Before | After |
|--------|-------|
| Technical features (database, APIs, functions) | Community benefits (collaborate, connect, grow) |

### Buttons
| Button | Before | After |
|--------|--------|-------|
| Primary Text | "Start your project" | "Join Club Edge" |
| Primary Link | supabase.com/dashboard | clubedge.co/join |
| Secondary Text | "Request a demo" | "Learn more" |

---

## 📁 Files Modified

```
apps/clubedge/app/(home)/_components/Hero.tsx
├── Headline text (2 changes)
├── Description paragraph (1 change)
├── Button text (2 changes)
├── Button links (1 change)
└── Telemetry events (2 changes)
```

---

## ✅ Checklist

- ✅ `.env.local` created from `.env.local.example`
- ✅ Hero component updated with Club Edge messaging
- ✅ CTA buttons point to correct URLs
- ✅ Telemetry events tracking community actions
- ✅ No breaking changes to component structure
- ✅ Monorepo fully intact and functional

---

## 📊 Before vs After

```
BEFORE (Supabase Developer Focus)
├── "Build in a weekend" → Developer speed
├── "Scale to millions" → Technical scale
├── Tech features → APIs, databases, functions
└── Start project → For developers

AFTER (Club Edge Community Focus)
├── "Connect with Your Club" → Community connection
├── "Build Your Community" → People scale
├── Community benefits → Collaboration, growth
└── Join Club Edge → For community members
```

---

## 🔗 Related Documentation

1. **CLUBEDGE_FINAL_SUMMARY.md** - Full details and comparison
2. **HERO_CHANGES_VISUAL.md** - Visual side-by-side comparison
3. **CLUBEDGE_HERO_UPDATE.md** - Detailed technical breakdown
4. **CLUBEDGE_SETUP_GUIDE.md** - Setup and configuration

---

## 🐛 Troubleshooting

### ❌ "Cannot find module 'ui'"
**Solution:** You're trying to run clubedge outside the monorepo
```bash
# Don't do this:
cd apps/clubedge && npm start

# Do this:
cd /vercel/share/v0-project && pnpm --filter=clubedge dev
```

### ❌ App not updating
**Solution:** Restart the dev server
```bash
# Stop current dev server (Ctrl+C)
# Then restart:
pnpm --filter=clubedge dev
```

### ❌ Port 3000 already in use
**Solution:** Use different port
```bash
pnpm --filter=clubedge dev -- --port 3001
```

---

## 📱 What You'll See

### Mobile (Stacked)
```
[HEADLINE]
Connect with Your Club

[ACCENT]
Build Your Community

[DESCRIPTION]
Club Edge empowers communities...

[JOIN BUTTON]
[LEARN MORE BUTTON]
```

### Desktop (2 Column)
```
[HEADLINE]              [DESCRIPTION]
[ACCENT]               (beside headline)

[BUTTONS]
```

---

## 🎯 Key Changes in Order of Importance

1. **Headline** - First impression, audience signal
2. **CTA Button** - Primary conversion action
3. **Description** - Benefits explanation
4. **Accent Text** - Brand reinforcement
5. **Secondary Button** - Alternative path
6. **Event Tracking** - Analytics improvement

---

## 📈 Analytics to Track

After deployment, monitor:
- `join_clubedge_button_clicked` - Primary signup interest
- `learn_more_button_clicked` - Educational interest
- Conversion rate: Hero → Join
- Bounce rate from hero section

---

## 🔄 To Revert Changes

```bash
# Restore original (Supabase version)
git checkout apps/clubedge/app/\(home\)/_components/Hero.tsx

# Restore from before our changes
git checkout HEAD~1 apps/clubedge/app/\(home\)/_components/Hero.tsx
```

---

## 📦 What's Included

```
Modified Files:
├── Hero.tsx (hero component)

Created Files:
├── .env.local (environment config)
└── Documentation (4 files)

Packages (No changes, but required):
├── packages/ui (design system)
├── packages/common (utilities)
├── packages/marketing (components)
├── packages/config (config)
└── packages/icons (icons)
```

---

## 🎓 Key Concepts

### Club Edge
- **Purpose:** Community platform
- **Audience:** Club members, organizers
- **Focus:** Connection, collaboration, growth
- **Org:** clubedgehq on GitHub

### www (Original)
- **Purpose:** Supabase marketing website
- **Audience:** Developers
- **Focus:** Technical features
- **Org:** supabase

### Both Use
- Same design system (`packages/ui`)
- Same monorepo structure
- Same build tools (Next.js, Tailwind, Radix)

---

## 💡 Tips

- Club Edge needs the monorepo to run (workspace dependencies)
- Changes are content-only, safe to test
- Telemetry helps track user behavior
- Brand messaging is now audience-appropriate

---

## 📞 Questions?

- **How to run?** → `pnpm --filter=clubedge dev`
- **What changed?** → Hero component text and links
- **Why?** → To match Club Edge brand identity
- **Safe?** → Yes, no breaking changes
- **Where's the code?** → `apps/clubedge/app/(home)/_components/Hero.tsx`

---

**Last Updated:** 2026-07-22  
**Status:** Ready to use  
**Confidence:** High ✅
