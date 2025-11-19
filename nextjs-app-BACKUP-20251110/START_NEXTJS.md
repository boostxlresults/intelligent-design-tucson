# Starting Next.js Dev Server

## Quick Start (After npm install)

```bash
cd nextjs-app
npm run dev
```

The server will start on **http://localhost:3000**

## What to Expect

### Terminal Output
You should see:
```
▲ Next.js 16.0.1
- Local:        http://localhost:3000
- Ready in 2-3s
```

### Test These URLs First
1. http://localhost:3000/ac-repair-tucson
2. http://localhost:3000/duct-cleaning  
3. http://localhost:3000/furnaces
4. http://localhost:3000/tucson
5. http://localhost:3000/oro-valley

## Verify SEO (Critical!)

### View Source Test
Right-click any page → "View Page Source"

**Must see in initial HTML:**
- ✅ `<title>` tag with page-specific title
- ✅ `<meta name="description">` with page content
- ✅ All body content (paragraphs, headings)
- ✅ `<script type="application/ld+json">` with schemas

### Quick cURL Test
```bash
curl http://localhost:3000/ac-repair-tucson | grep -i "meta name"
curl http://localhost:3000/ac-repair-tucson | grep -i "Best Air Conditioning"
```

Should return meta tags and body content in raw HTML.

## Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Module Not Found Errors
Make sure you ran `npm install` first:
```bash
cd nextjs-app
npm install
```

### Data Import Errors
Check that data index files exist:
```bash
ls -l data/pages/services/index.ts
ls -l data/pages/locations/index.ts
```

## React Site Still Running?
The React site should continue running on port 5000:
- React site: http://localhost:5000
- Next.js site: http://localhost:3000

**Zero business disruption** ✅

---

**Once the server starts successfully, we'll verify:**
1. Pages render without errors
2. SEO metadata appears in initial HTML
3. Content is server-rendered (not client-side)
4. All 228 pages route correctly
