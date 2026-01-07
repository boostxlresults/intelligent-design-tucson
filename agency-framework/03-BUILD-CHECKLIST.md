# Website Rebuild Build Checklist

This comprehensive checklist covers every element required for a high-quality, conversion-focused, SEO-optimized website rebuild. The Replit Agent should work through each section systematically.

---

## Phase 1: Project Foundation

### 1.1 Technical Setup
- [ ] Next.js project initialized with Pages Router
- [ ] TypeScript configured
- [ ] Tailwind CSS configured with custom brand colors
- [ ] shadcn/ui components installed
- [ ] Folder structure established (pages, components, lib, public, data, styles)
- [ ] Environment variables configured
- [ ] ESLint and formatting configured

### 1.2 Design System
- [ ] Brand colors defined in Tailwind config and CSS variables
- [ ] Typography scale established (headings, body, captions)
- [ ] Spacing system consistent throughout
- [ ] Dark mode support (if required)
- [ ] Component library set up (Button, Card, Form components)

### 1.3 Global Components
- [ ] Header/Navigation component (desktop and mobile)
- [ ] Footer component with NAP information
- [ ] Mobile navigation (hamburger menu, collapsible sections)
- [ ] Floating action bar for mobile (click-to-call, schedule)
- [ ] Breadcrumb component
- [ ] CTA button components (primary, secondary, outline)

---

## Phase 2: Core Pages

### 2.1 Homepage
- [ ] Hero section with primary CTA
- [ ] Service overview section
- [ ] Trust signals section (reviews, certifications, awards)
- [ ] About/Why Choose Us section
- [ ] Service areas overview
- [ ] Testimonials/Reviews section
- [ ] Final CTA section
- [ ] Mobile responsive
- [ ] Schema markup (Organization, LocalBusiness)

### 2.2 About Page
- [ ] Company story/history
- [ ] Mission/values
- [ ] Team section (if applicable)
- [ ] Certifications and accreditations
- [ ] Community involvement (if applicable)
- [ ] Schema markup

### 2.3 Contact Page
- [ ] Contact form (functional)
- [ ] Business hours
- [ ] Phone number (click-to-call)
- [ ] Email address
- [ ] Physical address with Google Maps embed
- [ ] Schema markup (LocalBusiness with ContactPoint)

### 2.4 Service Area Page(s)
- [ ] Overview of all service areas
- [ ] Links to individual location pages (if creating them)
- [ ] Map visualization (if appropriate)
- [ ] Schema markup

---

## Phase 3: Service Pages

### 3.1 Service Page Template
Each service page must include:
- [ ] Full-width hero section with service-specific background
- [ ] Service description (comprehensive, SEO-optimized)
- [ ] Key benefits/features section (6+ highlights with icons)
- [ ] Process/How it works section
- [ ] FAQ section (5-10 questions with JSON-LD schema)
- [ ] Related services internal links
- [ ] Trust signals (reviews module)
- [ ] Multiple CTAs throughout
- [ ] Schema markup (Service, FAQPage, HowTo if applicable)

### 3.2 Service Pages to Create
*List all services from discovery - each gets a dedicated page*
- [ ] [Service 1]
- [ ] [Service 2]
- [ ] [Service 3]
- [ ] [Continue for all services...]

### 3.3 Service Page SEO
- [ ] Unique meta title for each page (with location if local)
- [ ] Unique meta description for each page
- [ ] Open Graph tags
- [ ] Proper heading hierarchy (single H1, logical H2/H3)
- [ ] Internal links to related services
- [ ] External links to authoritative sources (where appropriate)

---

## Phase 4: Location Pages (If Applicable)

### 4.1 Location Page Template
Each location page must include:
- [ ] Location-specific hero with city/area name
- [ ] Services available in this area
- [ ] Local content (references to area, landmarks, community)
- [ ] Zip codes served
- [ ] Driving directions or service radius info
- [ ] Local testimonials (if available)
- [ ] CTAs with location context
- [ ] LocalBusiness schema with specific address/service area

### 4.2 Location Pages to Create
*List all service areas from discovery*
- [ ] [Location 1]
- [ ] [Location 2]
- [ ] [Location 3]
- [ ] [Continue for all locations...]

### 4.3 Location + Service Matrix (Advanced)
*For maximum local SEO, create pages combining service + location*
- [ ] [Service A] in [Location 1]
- [ ] [Service A] in [Location 2]
- [ ] [Continue for priority combinations...]

---

## Phase 5: Content & Resources

### 5.1 Blog/Resource Center
- [ ] Blog index page with category filtering
- [ ] Blog post template with proper formatting
- [ ] Category pages for content organization
- [ ] Author information (if applicable)
- [ ] Related posts section
- [ ] Social sharing buttons
- [ ] Article schema markup

### 5.2 Content Migration (If Applicable)
- [ ] Scrape/export existing blog posts
- [ ] Convert content to markdown
- [ ] Optimize images (WebP/AVIF)
- [ ] Update internal links
- [ ] Add/update meta descriptions
- [ ] Preserve URL structure OR set up redirects

### 5.3 Knowledge Hub / Resource Pages
- [ ] Knowledge Hub landing page (central resource directory)
- [ ] FAQ compilation page(s)
- [ ] Educational guides
- [ ] Video library page (if applicable)
- [ ] Downloadable resources (if applicable)

### 5.4 AI Search Optimization
- [ ] llms.txt file created with comprehensive business information
- [ ] Natural language Q&A content throughout site
- [ ] Conversational FAQ sections
- [ ] Clear, structured content for AI parsing
- [ ] Comprehensive schema markup

---

## Phase 6: Conversion Optimization

### 6.1 CTAs Throughout Site
- [ ] Primary CTA in header (visible on all pages)
- [ ] Hero CTA on every page
- [ ] Mid-page CTAs on long-form content
- [ ] Footer CTA section
- [ ] Floating mobile action bar
- [ ] Exit-intent or scroll-triggered CTAs (optional)

### 6.2 Forms
- [ ] Contact form functional and validated
- [ ] Form submissions stored/emailed properly
- [ ] Thank you page/confirmation message
- [ ] Form spam protection
- [ ] Mobile-friendly form design

### 6.3 Click-to-Call
- [ ] Phone numbers are tel: links
- [ ] Click-to-call tracking set up (if using GTM)
- [ ] Phone number visible in header and footer
- [ ] Mobile floating call button

### 6.4 Scheduling Integration (If Applicable)
- [ ] Scheduling widget integrated (ServiceTitan, Calendly, etc.)
- [ ] Modal/embed functioning properly
- [ ] Mobile responsive scheduling experience
- [ ] Proper tracking on scheduling events

### 6.5 Special Offers/Promotions
- [ ] Promotional offer pages created
- [ ] Offer schema markup
- [ ] Clear terms and conditions
- [ ] Expiration dates managed

---

## Phase 7: SEO Implementation

### 7.1 On-Page SEO
- [ ] Unique title tags for all pages (optimized format)
- [ ] Meta descriptions for all pages (compelling, with CTA)
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] Canonical URLs set correctly
- [ ] Proper heading hierarchy on all pages
- [ ] Alt text for all images
- [ ] Internal linking strategy implemented

### 7.2 Technical SEO
- [ ] robots.txt configured correctly
- [ ] XML sitemap generating
- [ ] 404 page created
- [ ] Redirects configured (301/308 for old URLs)
- [ ] No broken internal links
- [ ] No duplicate content issues
- [ ] Mobile-friendly (passes Google test)
- [ ] HTTPS enforced

### 7.3 Schema Markup
- [ ] Organization schema (site-wide)
- [ ] LocalBusiness schema (with correct NAP)
- [ ] Service schema for each service page
- [ ] FAQPage schema for FAQ sections
- [ ] BreadcrumbList schema
- [ ] Article/BlogPosting schema for blog posts
- [ ] Review/AggregateRating schema (if applicable)
- [ ] HowTo schema (where appropriate)
- [ ] VideoObject schema (if videos present)

### 7.4 Local SEO
- [ ] NAP consistency across all pages
- [ ] Google Business Profile linked
- [ ] Local business schema with geo coordinates
- [ ] Service area pages with relevant local content
- [ ] Zip codes included where appropriate

---

## Phase 8: Performance Optimization

### 8.1 Core Web Vitals
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] PageSpeed Insights score 90+ (mobile & desktop)

### 8.2 Image Optimization
- [ ] All images converted to WebP/AVIF
- [ ] Proper image sizing (not oversized)
- [ ] Lazy loading for below-fold images
- [ ] Priority loading for hero/LCP images
- [ ] Alt text on all images

### 8.3 Code Optimization
- [ ] Minimal JavaScript bundle
- [ ] CSS purged of unused styles
- [ ] Fonts optimized (subset, preload)
- [ ] Third-party scripts loaded efficiently
- [ ] No render-blocking resources

---

## Phase 9: Integrations

### 9.1 Analytics & Tracking
- [ ] Google Analytics 4 installed
- [ ] Google Tag Manager configured
- [ ] Conversion tracking set up (forms, calls, schedules)
- [ ] Google Search Console configured
- [ ] Sitemap submitted to Google

### 9.2 Third-Party Widgets
- [ ] Review widget integrated (if applicable)
- [ ] Chat widget integrated (if applicable)
- [ ] Scheduling widget integrated (if applicable)
- [ ] Social media feeds (if applicable)
- [ ] All widgets mobile responsive

### 9.3 Business Integrations
- [ ] CRM integration (if applicable)
- [ ] Email marketing integration (if applicable)
- [ ] Payment processing (if applicable)

---

## Phase 10: Quality Assurance

### 10.1 Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 10.2 Responsive Testing
- [ ] Mobile phones (320px - 480px)
- [ ] Large phones (480px - 768px)
- [ ] Tablets (768px - 1024px)
- [ ] Laptops (1024px - 1440px)
- [ ] Desktops (1440px+)

### 10.3 Functionality Testing
- [ ] All navigation links work
- [ ] All CTAs link correctly
- [ ] Forms submit successfully
- [ ] Phone numbers dial correctly
- [ ] Email links open mail client
- [ ] External links open in new tabs
- [ ] Maps display correctly
- [ ] Videos play correctly
- [ ] Scheduling widgets function

### 10.4 Content Review
- [ ] No placeholder/lorem ipsum text
- [ ] No spelling or grammar errors
- [ ] All images display correctly
- [ ] Contact information accurate
- [ ] Business hours accurate
- [ ] Pricing accurate (if displayed)

### 10.5 SEO Validation
- [ ] Schema markup validates (schema.org validator)
- [ ] No crawl errors in console
- [ ] Sitemap accessible
- [ ] robots.txt correct
- [ ] All meta tags present

---

## Phase 11: Launch Preparation

### 11.1 Pre-Launch
- [ ] Final content review with client
- [ ] All forms tested with real submissions
- [ ] Redirects tested (if migrating URLs)
- [ ] Performance benchmarks recorded
- [ ] Backup of current site (if applicable)

### 11.2 DNS & Deployment
- [ ] Deploy to production
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] www/non-www redirect configured
- [ ] Old hosting prepared for redirect (if applicable)

### 11.3 Post-Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing of key pages
- [ ] Monitor for 404 errors
- [ ] Monitor Core Web Vitals
- [ ] Verify analytics tracking
- [ ] Test all forms in production
- [ ] Document any issues for follow-up

---

## Completion Signoff

**Project Complete When:**
- [ ] All Phase 1-11 items checked or marked N/A
- [ ] Client has reviewed and approved
- [ ] Site is live and accessible
- [ ] No critical errors in console or logs
- [ ] Performance scores meet targets
- [ ] All integrations functioning

**Final Documentation:**
- [ ] replit.md updated with final architecture
- [ ] Any custom functionality documented
- [ ] Login credentials documented (if applicable)
- [ ] Handoff notes prepared for client
