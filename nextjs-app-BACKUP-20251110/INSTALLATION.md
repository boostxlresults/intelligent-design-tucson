# Next.js Installation & Setup Guide

## 🎯 Overview

This Next.js application runs in parallel with the existing React site during the migration period:
- **React Site**: Port 5000 (production traffic)
- **Next.js Site**: Port 3000 (development/testing)

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- React site must be running (no dependencies between them)

## 🚀 Installation Steps

### Step 1: Navigate to Next.js Directory

```bash
cd nextjs-app
```

### Step 2: Install Dependencies

```bash
npm install
```

**Expected Installation Time:** 2-3 minutes

**Package Count:** ~50 packages including:
- Next.js 16.0.1 (with React 19)
- Tailwind CSS + shadcn/ui
- Radix UI components
- TypeScript
- Drizzle ORM (for future database migration)

### Step 3: Verify Installation

After `npm install` completes, verify:

```bash
# Check that node_modules/ was created
ls -la node_modules/

# Verify Next.js is installed
npx next --version
```

Expected output: `16.0.1` (or similar)

### Step 4: Start Development Server

```bash
npm run dev
```

**Expected Output:**
```
▲ Next.js 16.0.1
- Local: http://localhost:3000
- ready in X.XXs
```

**Troubleshooting:**
- If port 3000 is in use, modify `package.json` scripts section
- If build errors occur, check TypeScript/LSP diagnostics

### Step 5: Verify Rendering

Open browser to: `http://localhost:3000`

**Test Pages:**
1. http://localhost:3000/ac-repair-tucson
2. http://localhost:3000/duct-cleaning
3. http://localhost:3000/tucson

**What to Verify:**
✅ Page loads without errors
✅ Hero image displays
✅ Meta tags visible in view-source
✅ JSON-LD schemas present in view-source
✅ Highlights section renders (6 cards)
✅ FAQ section renders (11+ questions)
✅ CommonQuestions section renders (if applicable)

## 📊 Architecture Verification

### Data Flow Test

Verify that the data pipeline works correctly:

1. **Data Files** → Check that page data exists:
   ```bash
   ls -la data/pages/services/*.ts | wc -l
   # Should show: 215
   
   ls -la data/pages/locations/*.ts | wc -l
   # Should show: 13
   ```

2. **Data Indexes** → Check that exports are generated:
   ```bash
   cat data/pages/services/index.ts | grep "export" | wc -l
   # Should show: 215
   
   cat data/pages/locations/index.ts | grep "export" | wc -l
   # Should show: 13
   ```

3. **Page Templates** → Check that imports are correct:
   ```bash
   grep "import \* as serviceExports" app/\[service\]/page.tsx
   # Should show: import * as serviceExports from '@/data/pages/services';
   
   grep "import \* as locationExports" app/\[location\]/page.tsx
   # Should show: import * as locationExports from '@/data/pages/locations';
   ```

## 🔍 SEO Verification

### Server-Side Rendering Test

The CRITICAL test is whether SEO content is visible in initial HTML:

```bash
# Test AC Repair page
curl -s http://localhost:3000/ac-repair-tucson | grep -i "highest-rated ac repair"
# Should return: match found (in <h1> tag)

# Test meta description
curl -s http://localhost:3000/ac-repair-tucson | grep -i "meta name=\"description\""
# Should return: full description tag

# Test JSON-LD schema
curl -s http://localhost:3000/ac-repair-tucson | grep "application/ld+json"
# Should return: 3 matches (Service, Breadcrumb, FAQ schemas)
```

**Critical Success Criteria:**
✅ All meta tags present in initial HTML (not inserted by JavaScript)
✅ All JSON-LD schemas present in initial HTML
✅ All heading content (H1, H2, H3) present in initial HTML
✅ All paragraph content present in initial HTML

## 🐛 Common Issues

### Issue 1: TypeScript/LSP Errors

**Symptom:** TypeScript errors in terminal or editor

**Solution:**
```bash
# Check LSP diagnostics
npx tsc --noEmit

# Fix common issues:
# - Missing type imports
# - Incorrect path aliases
# - Schema type mismatches
```

### Issue 2: Import Resolution Errors

**Symptom:** `Module not found: Can't resolve '@/...'`

**Solution:**
- Verify `tsconfig.json` paths are correct
- Restart TypeScript server in editor
- Clear Next.js cache: `rm -rf .next/`

### Issue 3: Data Not Rendering

**Symptom:** Page loads but shows placeholder data

**Solution:**
```bash
# Verify data file exists
ls data/pages/services/acrepair.ts

# Verify data is exported in index
grep "acrepairData" data/pages/services/index.ts

# Check browser console for import errors
```

### Issue 4: Port Already in Use

**Symptom:** `Error: Port 3000 is already in use`

**Solution:**
```bash
# Option 1: Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Option 2: Use different port
npm run dev -- -p 3001
```

## 📈 Performance Baseline

After successful installation, expected metrics:

| Metric | Target | Actual |
|--------|--------|--------|
| npm install time | 2-3 min | TBD |
| Dev server start | <5 sec | TBD |
| First page load | <1 sec | TBD |
| Page navigation | <500ms | TBD |
| Build time (future) | <2 min | TBD |

## 🎓 Next Steps After Installation

1. **Smoke Test** (15 min)
   - Test 5-10 sample pages
   - Verify all sections render correctly
   - Check browser console for errors

2. **SEO Verification** (30 min)
   - View-source all test pages
   - Validate meta tags
   - Validate JSON-LD schemas
   - Test with SEO tools

3. **Component Migration** (ongoing)
   - Migrate Header component
   - Migrate Footer component
   - Migrate interactive components
   - Migrate utility components

4. **Content Rendering** (Day 10-11)
   - Implement content section rendering
   - Style paragraph/heading components
   - Add image rendering
   - Verify mobile responsiveness

5. **Build & Deploy Test** (Day 12-13)
   - Run production build
   - Test static generation
   - Verify all 228 pages build successfully
   - Test build output locally

## 📝 Installation Checklist

Before marking installation complete:

- [ ] npm install completed successfully
- [ ] node_modules/ directory exists
- [ ] Dev server starts on port 3000
- [ ] At least 3 test pages load without errors
- [ ] View-source shows meta tags in initial HTML
- [ ] View-source shows JSON-LD schemas in initial HTML
- [ ] No critical errors in browser console
- [ ] No critical errors in Next.js terminal output
- [ ] Data files verified (228 total)
- [ ] Data indexes verified (2 files, 228 exports)
- [ ] Page templates verified (importing from indexes)

## 🎉 Success Criteria

Installation is successful when:

1. ✅ All 228 pages are renderable (even if styling is incomplete)
2. ✅ All SEO metadata is server-side rendered
3. ✅ All JSON-LD schemas are server-side rendered
4. ✅ No TypeScript compilation errors
5. ✅ React site continues running on port 5000 (zero disruption)

---

**Last Updated:** November 8, 2025  
**Next Review:** After first successful rendering test  
**Blocking Issues:** None (npm install is manual step, all automation complete)
