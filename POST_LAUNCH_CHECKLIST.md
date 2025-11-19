# Post-Launch Checklist - Intelligent Design Tucson

**Purpose:** Testing and validation tasks to complete after the site is published live on www.idesignac.com

**Status:** Awaiting deployment to production

---

## 🔍 Google Rich Results Testing

### Homepage Schema Validation

**Test URL:** https://www.idesignac.com

**Tool:** https://search.google.com/test/rich-results

**Expected Results:**
- [ ] ✅ **0 Errors** (Green checkmarks)
- [ ] ✅ **Organization Schema** detected and valid
- [ ] ✅ **LocalBusiness Schema** detected and valid
- [ ] ✅ **BreadcrumbList Schema** detected and valid
- [ ] ✅ Preview shows: Logo, business name, 4.97 rating, 22,000+ reviews, address

---

### Service Page Schema Validation

**Tool:** https://search.google.com/test/rich-results

**Test these 5 sample service pages:**

#### 1. AC Installation
**URL:** https://www.idesignac.com/ac-installation-tucson

**Expected Results:**
- [ ] ✅ 0 Errors
- [ ] ✅ Service schema detected with correct address: "1145 E Fort Lowell Rd"
- [ ] ✅ FAQPage schema detected (from ServiceFAQ component)
- [ ] ✅ BreadcrumbList schema detected
- [ ] ✅ Numeric coordinates: 32.2655122, -110.9540688 (not strings)
- [ ] ✅ Aggregate rating: 4.97 (number, not string)
- [ ] ✅ Review count: 22000 (number, not string)

#### 2. AC Repair
**URL:** https://www.idesignac.com/ac-repair-tucson

**Expected Results:**
- [ ] ✅ 0 Errors
- [ ] ✅ Service schema with correct NAP data
- [ ] ✅ FAQPage schema detected
- [ ] ✅ BreadcrumbList schema detected
- [ ] ✅ All numeric values are numbers (not strings)

#### 3. Commercial Solar Installation
**URL:** https://www.idesignac.com/commercial-solar-installation-tucson

**Expected Results:**
- [ ] ✅ 0 Errors
- [ ] ✅ Service schema with correct NAP data
- [ ] ✅ FAQPage schema detected
- [ ] ✅ BreadcrumbList schema detected
- [ ] ✅ All numeric values are numbers (not strings)

#### 4. Metal Roofs
**URL:** https://www.idesignac.com/metal-roofs-tucson

**Expected Results:**
- [ ] ✅ 0 Errors
- [ ] ✅ Service schema with correct NAP data
- [ ] ✅ FAQPage schema detected
- [ ] ✅ BreadcrumbList schema detected
- [ ] ✅ All numeric values are numbers (not strings)

#### 5. Electrical Panel Upgrades
**URL:** https://www.idesignac.com/electrical-panel-upgrades-tucson

**Expected Results:**
- [ ] ✅ 0 Errors
- [ ] ✅ Service schema with correct NAP data
- [ ] ✅ FAQPage schema detected
- [ ] ✅ BreadcrumbList schema detected
- [ ] ✅ All numeric values are numbers (not strings)

---

## 📊 Google Search Console Setup

### Initial Setup
- [ ] Verify domain ownership in Google Search Console
- [ ] Submit XML sitemap to Google Search Console
- [ ] Verify sitemap is accessible at https://www.idesignac.com/sitemap.xml

### Rich Results Monitoring
- [ ] Check **"Logo"** report (Organization schema)
- [ ] Check **"Breadcrumb"** report (BreadcrumbList schema)
- [ ] Check **"FAQ"** report (FAQPage schema)
- [ ] Monitor for any validation issues or warnings

### URL Inspection
- [ ] Test homepage with URL Inspection Tool
- [ ] Test 5 sample service pages with URL Inspection Tool
- [ ] Verify Googlebot can access all pages
- [ ] Verify no robots.txt blocking issues

---

## 🗺️ Google Business Profile Verification

### NAP Consistency Check
- [ ] Verify address on website matches GBP: **1145 E Fort Lowell Rd, Tucson, AZ 85719**
- [ ] Verify phone number matches GBP: **(520) 333-2665**
- [ ] Verify business hours match GBP: **24/7 (00:00-23:59)**
- [ ] Verify all schemas use correct NAP data

### Google Maps Integration
- [ ] Verify business appears correctly on Google Maps
- [ ] Check that embedded map on website displays correct location
- [ ] Verify reviews count shows 22,000+ reviews
- [ ] Verify rating displays as 5.0 (actual: 4.97)

---

## 🔐 Technical Validation

### SSL & Security
- [ ] Verify valid SSL certificate on production domain
- [ ] Test HTTPS redirect (HTTP → HTTPS)
- [ ] Check for mixed content warnings
- [ ] Verify secure headers (HSTS, CSP, X-Frame-Options)

### Robots & Crawling
- [ ] Verify robots.txt is accessible: https://www.idesignac.com/robots.txt
- [ ] Confirm no blocking of important resources
- [ ] Verify XML sitemap is listed in robots.txt
- [ ] Check for noindex tags (should not be present on public pages)

### Performance
- [ ] Run Google PageSpeed Insights (Mobile)
- [ ] Run Google PageSpeed Insights (Desktop)
- [ ] Target: 90+ score for both Mobile and Desktop
- [ ] Verify Core Web Vitals are in "Good" range

---

## 🎯 Conversion Tracking

### ServiceTitan Integration
- [ ] Test scheduler embed widget functionality
- [ ] Verify Dynamic Number Insertion (DNI) is working
- [ ] Test "Schedule Service" buttons on all pages
- [ ] Verify form submissions reach ServiceTitan

### Google Tag Manager
- [ ] Verify GTM container (GTM-WKG99GJ) is firing
- [ ] Test conversion tracking events
- [ ] Verify Google Analytics is receiving data
- [ ] Test event tracking on key user actions

---

## 📱 Cross-Device Testing

### Mobile Testing
- [ ] Test homepage on iPhone (Safari)
- [ ] Test homepage on Android (Chrome)
- [ ] Test service pages on mobile devices
- [ ] Verify mobile navigation works correctly
- [ ] Test floating action bar on mobile

### Desktop Testing
- [ ] Test homepage on Chrome, Firefox, Safari, Edge
- [ ] Test service pages across all browsers
- [ ] Verify hover-activated dropdown navigation
- [ ] Test scheduler modal functionality

---

## 🔎 SEO Validation

### Meta Tags
- [ ] Verify unique title tags on all pages
- [ ] Verify unique meta descriptions on all pages
- [ ] Verify Open Graph tags are present
- [ ] Verify Twitter Card tags are present

### Schema.org Validator
- [ ] Test homepage: https://validator.schema.org/
- [ ] Test 5 sample service pages
- [ ] Verify no syntax errors
- [ ] Verify no warnings about missing properties

---

## 📈 Post-Launch Monitoring (First 30 Days)

### Google Search Console
- [ ] Week 1: Check for crawl errors
- [ ] Week 1: Monitor rich result impressions
- [ ] Week 2: Check for manual actions or penalties
- [ ] Week 2: Review Performance report for organic traffic
- [ ] Week 4: Analyze search queries driving traffic
- [ ] Week 4: Check average position for target keywords

### Analytics
- [ ] Week 1: Verify traffic is being recorded
- [ ] Week 2: Review top landing pages
- [ ] Week 4: Analyze conversion rates
- [ ] Week 4: Review bounce rates by page type

---

## 🎯 Local SEO Verification

### Citations & Directories
- [ ] Verify NAP consistency across Yelp, BBB, Facebook
- [ ] Check business listings on major directories
- [ ] Verify social media profiles are updated
- [ ] Confirm all "sameAs" links in schema are valid

### Local Pack / Map Pack
- [ ] Search "hvac tucson" - check if business appears in Local Pack
- [ ] Search "plumber tucson" - check Local Pack visibility
- [ ] Search "solar installation tucson" - check Local Pack visibility
- [ ] Search "electrician tucson" - check Local Pack visibility
- [ ] Search "roofer tucson" - check Local Pack visibility

---

## ✅ Final Verification

- [ ] All 40 service pages load without errors
- [ ] All internal links work correctly
- [ ] All external links open in new tabs
- [ ] Contact forms submit successfully
- [ ] Phone numbers are clickable on mobile
- [ ] Email addresses are clickable
- [ ] Social media links work correctly
- [ ] No console errors on any page
- [ ] No 404 errors in Google Search Console

---

**Checklist Created:** November 5, 2025  
**Ready for Production Testing:** Awaiting deployment  
**Critical Priority:** Schema validation and NAP consistency
