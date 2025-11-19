# 301 Redirect Strategy - WordPress to React Migration

## 🎯 Goal
Preserve 100% of SEO equity, backlinks, and indexed pages by properly redirecting all old WordPress URLs to new React build URLs.

## 📊 Current Situation

**Old WordPress Site Structure:**
- Blog posts: `www.idesignac.com/POST-SLUG/` (flat, no categories)
- Service pages: `www.idesignac.com/SERVICE-CATEGORY/SERVICE-NAME/`
- Total blog posts: 291 (from sitemaps)
- Migrated blog posts: 231
- Unmigrated blog posts: 60 (need strategy)

**New React Build Structure:**
- Blog posts: `www.idesignac.com/blog/CATEGORY/POST-SLUG`
- Service pages: `www.idesignac.com/services/CATEGORY/SERVICE-NAME`
- Total blog posts: 231 (categorized by topic)

## 🚨 Critical Impact
Without proper redirects, you will lose:
- ❌ All existing SEO rankings for blog posts
- ❌ Backlinks from other sites (will return 404)
- ❌ Google Search Console health score
- ❌ Indexed pages (Google sees them as deleted)
- ❌ Direct traffic from bookmarks/saved links
- ❌ Trust with Google (site migration handled poorly)

## ✅ Implementation Steps

### Phase 1: Redirect Mapping Audit
1. **Export all old URLs** from WordPress sitemaps
   - Blog posts: `/post-sitemap1.xml` + `/post-sitemap2.xml` = 291 URLs
   - Service pages: `/page-sitemap.xml`
   - Categories/tags: Archive pages
   
2. **Map to new URLs** using the redirect mapping script:
   ```bash
   tsx scripts/generateRedirectMap.ts
   ```
   
3. **Review unmapped URLs** (60 blog posts not migrated):
   - Option A: Redirect to related content (preferred)
   - Option B: Redirect to category page
   - Option C: Return 410 Gone (permanently removed)

4. **Verify redirect-map.csv** contains all mappings

### Phase 2: Configure Vercel Redirects
1. **Update vercel.json** with all redirect rules
2. **Use regex patterns** for efficiency where possible
3. **Handle trailing slashes** (old site uses them, new site doesn't)
4. **Test locally** before deployment

### Phase 3: Testing & Validation
Run validation script to test redirects:
```bash
tsx scripts/validateRedirects.ts
```

The script verifies:
- ✅ Old URLs return 301 (permanent redirect)
- ✅ Destination URLs return 200 (success)
- ✅ No redirect chains (single hop)
- ✅ Works with/without trailing slashes

### Phase 4: Google Search Console Prep
**Before Launch:**
- [ ] Document current indexed page count
- [ ] Screenshot Coverage report (baseline)
- [ ] Export all indexed URLs from GSC
- [ ] Set up GSC email alerts for crawl errors

**After Launch:**
- [ ] Submit new XML sitemap
- [ ] Monitor Coverage report daily (first week)
- [ ] Fix any 4xx errors within 48 hours
- [ ] Weekly reports on crawl stats for 30 days

## 📁 Files Created

### `vercel.json`
Main redirect configuration deployed to Vercel. Contains:
- 301 redirect rules for all URL changes
- Security headers
- Cache headers for static assets

### `redirect-map.csv`
Master mapping of all redirects:
- Column 1: Old URL path
- Column 2: New URL path
- Column 3: HTTP status code (301)
- Column 4: Notes/reason for redirect

### `scripts/generateRedirectMap.ts`
Automated script to:
- Scan migrated blog posts
- Match old URLs to new URLs
- Generate CSV redirect map
- Identify unmapped URLs for manual review

### `scripts/validateRedirects.ts`
Testing script to:
- Test redirect HTTP status codes
- Verify destination URLs are valid
- Check for redirect chains
- Report pass/fail for each redirect

## 🔢 Redirect Count Estimates

| Category | Count | Status |
|----------|-------|--------|
| Blog posts (migrated) | 231 | ✅ Ready to map |
| Blog posts (unmigrated) | 60 | ⚠️ Needs strategy |
| Service pages | 15-20 | ✅ Ready to map |
| Category/tag archives | 10-15 | ✅ Ready to map |
| Special pages | 5-10 | ✅ Ready to map |
| **TOTAL** | **320-350** | **In Progress** |

## 🎯 Success Criteria

**Google Search Console (Post-Launch):**
- ✅ 4xx errors: < 5 (temporary spikes acceptable)
- ✅ Indexed pages: Maintained or increased
- ✅ Coverage issues: Resolved within 1 week
- ✅ Crawl stats: Stable or improved
- ✅ Core Web Vitals: Maintained or improved

**Redirect Performance:**
- ✅ All 301 redirects return correct status
- ✅ No redirect chains (single hop)
- ✅ Destination URLs all return 200 OK
- ✅ Load time: < 500ms for redirects

## 📝 Manual Review Needed

### 60 Unmigrated Blog Posts
These old blog posts were not migrated to the new site. Options:
1. **Redirect to related content** - Find similar blog post
2. **Redirect to category page** - Send to relevant blog category
3. **Return 410 Gone** - Signal permanent removal to search engines

**Recommended approach:** Review each URL, determine best redirect target, and update `redirect-map.csv` accordingly.

## 🚀 Deployment Checklist

**Before deploying to production:**
- [ ] Complete redirect-map.csv with all 300-350 redirects
- [ ] Update vercel.json with all redirect rules
- [ ] Run `tsx scripts/validateRedirects.ts` - all tests pass
- [ ] Test 10+ sample redirects manually
- [ ] Verify trailing slash handling
- [ ] Document GSC baseline metrics
- [ ] Set up GSC monitoring alerts

**After deploying to production:**
- [ ] Test 20+ live redirects in production
- [ ] Submit new XML sitemap to GSC
- [ ] Monitor GSC Coverage report daily (first week)
- [ ] Track indexed page count
- [ ] Weekly reports for 30 days
- [ ] Fix any issues within 48 hours

## 🎓 Resources

**Vercel Redirects Documentation:**
https://vercel.com/docs/projects/project-configuration#redirects

**Google Search Console:**
https://search.google.com/search-console

**HTTP Status Codes:**
- 301: Permanent redirect (SEO equity passes to new URL)
- 302: Temporary redirect (SEO equity stays with old URL)
- 410: Gone (content permanently removed)

## 💡 Pro Tips

1. **Use 301, not 302** - Permanent redirects pass SEO equity
2. **Avoid redirect chains** - Direct old URL → new URL (not old → temp → new)
3. **Test before deploying** - Broken redirects are worse than no redirects
4. **Monitor GSC closely** - First 30 days are critical
5. **Keep redirect-map.csv** - Historical record of all URL changes
6. **Handle trailing slashes** - Old WordPress uses them, new React doesn't

---

**Status:** 🚨 CRITICAL PATH ITEM - Must complete before launch to preserve SEO equity.

**Owner:** Development team + SEO lead  
**Priority:** P0 (Blocker for launch)  
**Timeline:** Must complete before production deployment
