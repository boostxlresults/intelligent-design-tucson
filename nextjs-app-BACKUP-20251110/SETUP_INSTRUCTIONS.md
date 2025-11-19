# Next.js Setup Instructions

## Current Status

✅ **Next.js project created** in `nextjs-app/` directory  
✅ **Dependencies configured** in package.json  
✅ **Tailwind CSS** configured with Intelligent Design brand colors  
✅ **TypeScript** configured for App Router  
✅ **SEO Utilities** copied (7 files in `lib/seo/`)  
✅ **Global CSS** with Intelligent Design branding  
✅ **Root layout** with Inter font and metadata  
✅ **Test homepage** created  

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Homepage (test page)
│   └── globals.css         # Brand colors and styles
├── lib/
│   ├── seo/                # SEO utilities (7 files)
│   │   ├── generateServiceSchema.ts
│   │   ├── generateLocationSchema.ts
│   │   ├── generateBreadcrumbs.ts
│   │   ├── generateFAQSchema.ts
│   │   ├── generateMetadata.ts
│   │   ├── generateArticleSchema.ts
│   │   └── constants.ts
│   ├── constants.ts        # Site constants
│   └── utils.ts            # Utility functions
├── components/             # (To be migrated)
├── data/                   # (To be migrated)
├── public/                 # (To be migrated)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind with brand tokens
├── tsconfig.json           # TypeScript configuration
└── package.json            # All dependencies
```

## Running the Next.js App

### Option 1: In New Repl (RECOMMENDED)
1. Create new Repl named "intelligent-design-nextjs"
2. Copy entire `nextjs-app/` folder to new Repl
3. Run: `npm install`
4. Run: `npm run dev`
5. Visit: https://[your-repl-name].replit.app

### Option 2: In This Repl (Testing Only)
**Note:** Current React site runs on port 5000. Next.js configured for same port but won't run simultaneously.

```bash
# Stop current React site first
# Then run Next.js:
cd nextjs-app
npm install
npm run dev
# Visit: http://localhost:5000
```

### Option 3: Different Port (Side-by-Side Testing)
```bash
# Keep React site running on port 5000
# Run Next.js on different port:
cd nextjs-app
npm install
npm run dev -- -p 3000
# Visit: http://localhost:3000
```

## Next Migration Steps (Day 1-30)

### ✅ Day 1: COMPLETE
- [x] Create Next.js project structure
- [x] Configure Tailwind CSS with brand colors
- [x] Configure TypeScript for App Router
- [x] Copy lib/seo utilities (7 files)
- [x] Copy global CSS with brand styles
- [x] Create root layout with Inter font
- [x] Create test homepage

### Day 2: UI Components (Pending)
- [ ] Copy all 50 shadcn/ui components → `components/ui/`
- [ ] Copy `lib/utils.ts` and `lib/constants.ts`
- [ ] Test component imports in test page
- [ ] Verify dark mode functionality

### Day 3: Custom Components (Pending)
- [ ] Copy Header, Footer, MobileFloatingActions
- [ ] Copy TrustBar, BadgeWall, Hero
- [ ] Copy ServiceFAQ, CommonQuestions
- [ ] Copy GTM, DNIInjector (adapt for Next.js Script)
- [ ] Update imports (wouter → next/link)
- [ ] Create client/server component pattern

### Day 4: Data & Assets (Pending)
- [ ] Copy `data/faqs/` (5 files, 704 FAQs)
- [ ] Copy `data/commonQuestions/` (5 files)
- [ ] Copy `data/blogIndex.json` (231 posts)
- [ ] Copy `public/content/blog/` (231 markdown files)
- [ ] Copy `public/images/` (40+ images)
- [ ] Set up lib/blog utilities for markdown parsing

### Day 5: SEO Testing (Pending)
- [ ] Test all lib/seo utilities with sample data
- [ ] Create schema generation examples
- [ ] Test metadata generation variations
- [ ] Verify canonical URL generation
- [ ] Document utility usage patterns

### Days 6-10: Templates & Pilots (Pending)
- [ ] Create 5 page templates (Service+Location, Service, Location, Info, Blog)
- [ ] Migrate 3 pilot pages with full verification
- [ ] Test automation scripts on pilot pages

### Days 11-19: Batch Migration (Pending)
- [ ] Migrate 120 Service+Location pages
- [ ] Migrate 49 Service pages
- [ ] Migrate 21 Location pages
- [ ] Migrate 15 Info pages
- [ ] Spot-check 30% of all pages

### Days 20-22: Testing (Pending)
- [ ] SEO verification (all 153 pages)
- [ ] Functional testing (conversions, tracking)
- [ ] Performance testing (Lighthouse audits)
- [ ] Cross-browser testing

### Days 23-25: Deployment (Pending)
- [ ] Staging deployment
- [ ] Production deployment
- [ ] Monitoring setup

### Days 26-30: Post-Launch (Pending)
- [ ] Hourly monitoring (Days 26-27)
- [ ] Daily monitoring (Days 28-29)
- [ ] Week 1 report (Day 30)

## Key Files Reference

### SEO Utilities
- **generateMetadata.ts**: Creates Next.js Metadata objects
- **generateServiceSchema.ts**: Service schema for service pages
- **generateLocationSchema.ts**: LocalBusiness schema for location pages
- **generateBreadcrumbs.ts**: BreadcrumbList schema
- **generateFAQSchema.ts**: FAQPage schema from FAQ data
- **generateArticleSchema.ts**: Article/BlogPosting schema
- **constants.ts**: Canonical business data (NAP, URLs, etc.)

### Configuration
- **next.config.ts**: Image optimization, output config
- **tailwind.config.ts**: Brand colors, custom utilities
- **tsconfig.json**: TypeScript with App Router support

## Important Notes

1. **Current React site is still running** on port 5000
2. **Next.js project is ready** but needs `npm install` to run
3. **All SEO utilities are in place** and ready to use
4. **Brand colors preserved** in globals.css
5. **No data loss** - everything copied, not moved

## Migration Automation Scripts

Located in `/scripts/` (outside nextjs-app):
- `convert-metadata.ts` - MetaHead → generateMetadata()
- `convert-schemas.ts` - useEffect → JSX schemas
- `update-imports.ts` - wouter → next/link
- `migrate-structure.ts` - Full directory migration

**Usage:** See `/scripts/README.md`

## Timeline Confidence

**Day 1 Status:** ✅ COMPLETE (6 hours)  
**Overall Timeline:** 25-30 days  
**Confidence Level:** 90%  
**Buffer Time:** 6.5 days built in  
**Quality Gates:** 21 checkpoints throughout

## Questions?

Refer to:
- **NEXTJS_MIGRATION_PLAN.md** - Complete migration blueprint
- **MIGRATION_TIMELINE_UPDATE.md** - Detailed 25-30 day schedule
- **BLOG_MIGRATION_GUIDE.md** - Blog system migration approach
- **scripts/README.md** - Automation script usage

---

**Created:** November 8, 2025  
**Status:** Day 1 Complete, Ready for Day 2  
**Current Site:** Still running (React + Vite)  
**Next.js Project:** Ready for component migration
