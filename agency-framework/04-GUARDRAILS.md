# GUARDRAILS - Mandatory Rules for Website Rebuilds

**CRITICAL: These rules are NON-NEGOTIABLE. The Replit Agent must follow every rule in this document without exception. If a rule conflicts with a user request, the agent must flag the conflict and seek clarification rather than violating the guardrail.**

---

## 1. ARCHITECTURE RULES

### 1.1 Router Type - MANDATORY
```
USE: Next.js Pages Router
DO NOT USE: Next.js App Router
```
**Rationale:** Our agency has standardized on Pages Router for consistency, maintainability, and team familiarity. App Router, while newer, introduces complexity that doesn't align with our workflow.

**If the agent suggests switching to App Router:**
- STOP immediately
- Reference this guardrail
- Continue with Pages Router

### 1.2 Folder Structure - MANDATORY
```
/pages          - All page routes (NOT /app)
/components     - React components
/lib            - Utility functions, helpers, SEO tools
/styles         - Global styles, Tailwind config
/public         - Static assets (images, llms.txt, robots.txt)
/data           - Content data files (JSON, markdown)
```

**Never create an `/app` directory for routing.**

### 1.3 Technology Stack - MANDATORY
```
Framework:     Next.js with Pages Router
Language:      TypeScript (strict)
Styling:       Tailwind CSS
Components:    shadcn/ui (Radix primitives)
Icons:         lucide-react (actions), react-icons/si (logos)
Forms:         react-hook-form with zod validation
Data Fetching: getStaticProps, getServerSideProps, or API routes
```

**Do not introduce alternative libraries without explicit approval:**
- No styled-components, Emotion, or CSS-in-JS alternatives
- No Material UI, Chakra UI, or alternative component libraries
- No Redux, MobX, or state management libraries (use React state/context)

### 1.4 App Router Recovery - IF PROJECT STARTED INCORRECTLY

If the project was accidentally created with App Router (has `/app` folder):

**STOP all other work and fix this first:**

1. **Delete the `/app` directory completely**
2. **Create `/pages` directory**
3. **Recreate routing structure:**
   ```
   /pages
   ├── _app.tsx          # App wrapper
   ├── _document.tsx     # Document customization
   ├── index.tsx         # Homepage (/)
   ├── about.tsx         # About page (/about)
   ├── contact.tsx       # Contact page (/contact)
   ├── services/
   │   ├── index.tsx     # Services listing (/services)
   │   └── [slug].tsx    # Dynamic service page (/services/[slug])
   └── api/              # API routes
       └── contact.ts    # Form handler
   ```
4. **Update imports to Pages Router patterns:**
   - Use `import { useRouter } from 'next/router'` (NOT `next/navigation`)
   - Use `getStaticProps`, `getServerSideProps` for data fetching
   - Use `Head` from `next/head` for meta tags
5. **Verify no App Router remnants:**
   - No `layout.tsx` files (use `_app.tsx` instead)
   - No `loading.tsx` files
   - No `error.tsx` files (use custom `_error.tsx`)
   - No `page.tsx` files (use `index.tsx` or named files)
   - No `'use client'` directives needed for client components
6. **Test the application runs correctly**

**Only after completing this recovery can you proceed with the build.**

---

## 2. SEO RULES

### 2.1 Every Page Must Have
- [ ] Unique `<title>` tag (format: "Page Title | Business Name")
- [ ] Unique `<meta name="description">` (150-160 characters, includes CTA)
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Single `<h1>` tag (only one per page)
- [ ] Logical heading hierarchy (H1 > H2 > H3, no skipping)

### 2.2 Schema Markup Requirements
**Every site must have:**
- Organization schema (in layout/site-wide)
- LocalBusiness schema (with accurate NAP)

**Every service page must have:**
- Service schema
- FAQPage schema (if FAQ section present)
- BreadcrumbList schema

**Blog posts must have:**
- Article or BlogPosting schema
- BreadcrumbList schema

### 2.3 NAP Consistency
**Name, Address, Phone must be IDENTICAL everywhere:**
- Header
- Footer  
- Contact page
- Schema markup
- Any page displaying business info

**Format must match Google Business Profile exactly.**

### 2.4 Required Files
```
/public/robots.txt    - Properly configured, not blocking important pages
/public/sitemap.xml   - Auto-generated or manually created
/public/llms.txt      - AI search optimization file
```

---

## 3. CONTENT RULES

### 3.1 No Placeholder Content
**NEVER launch or present to client with:**
- Lorem ipsum text
- "Coming soon" placeholders (unless specifically requested)
- Stock photo placeholders without actual images
- [Bracket placeholders] in live content
- Sample/demo data

### 3.2 Image Requirements
- All images must have descriptive alt text
- Images must be optimized (WebP/AVIF preferred)
- No images over 500KB unless absolutely necessary
- Hero/LCP images must have priority loading
- Below-fold images must lazy load

### 3.3 Content Migration Integrity
When migrating content from existing site:
- Preserve all existing URLs OR set up 301/308 redirects
- Maintain all existing content (don't delete without approval)
- Preserve internal links (update to new URLs if changed)
- Preserve meta descriptions (improve, don't delete)
- Maintain publication dates for blog posts

---

## 4. CONVERSION RULES

### 4.1 CTA Requirements
**Every page must have:**
- At least one clear call-to-action above the fold
- Phone number visible (click-to-call enabled)
- Path to contact/schedule/quote

**Long-form pages (1000+ words) must have:**
- CTA in hero section
- CTA mid-page
- CTA at bottom

### 4.2 Mobile Conversion
**Mobile experience must include:**
- Sticky header with phone number or CTA
- Floating action bar (call + schedule buttons)
- Thumb-friendly button sizes (min 44x44px tap targets)
- Forms optimized for mobile input

### 4.3 Forms
- All forms must be functional before presenting to client
- Form validation must be user-friendly
- Success states must be clear
- Error states must be helpful

---

## 5. PERFORMANCE RULES

### 5.1 Core Web Vitals Targets
```
LCP (Largest Contentful Paint):  < 2.5 seconds
FID (First Input Delay):         < 100 milliseconds  
CLS (Cumulative Layout Shift):   < 0.1
```

### 5.2 PageSpeed Requirements
```
Mobile Score:   90+ (minimum 85)
Desktop Score:  95+ (minimum 90)
```

### 5.3 Performance Practices
**Always:**
- Optimize images before adding to project
- Use Next.js Image component with proper sizing
- Lazy load below-fold content
- Minimize third-party scripts
- Use font subsetting

**Never:**
- Add unoptimized images (>500KB)
- Load all JavaScript upfront
- Use render-blocking resources
- Add unnecessary dependencies

---

## 6. CODE QUALITY RULES

### 6.1 TypeScript
- Strict mode enabled
- No `any` types without justification
- Proper interface/type definitions
- No TypeScript errors in build

### 6.2 Component Standards
- Functional components only (no class components)
- Props properly typed
- Semantic HTML elements used appropriately
- Accessibility attributes included (aria labels, roles)

### 6.3 File Organization
- One component per file (unless tightly coupled)
- Components in /components folder
- Pages in /pages folder
- Utilities in /lib folder
- No deeply nested folder structures (max 3 levels)

### 6.4 Naming Conventions
```
Components:    PascalCase (HeroSection.tsx)
Pages:         kebab-case (about-us.tsx)
Utilities:     camelCase (generateSchema.ts)
CSS Classes:   Tailwind utilities (no custom classes unless necessary)
```

---

## 7. INTEGRATION RULES

### 7.1 Required Integrations
Every site must be prepared for:
- Google Analytics 4
- Google Tag Manager
- Google Search Console

### 7.2 Integration Implementation
- Use environment variables for all API keys/IDs
- Never hardcode sensitive values
- Document integration setup in replit.md
- Test integrations before launch

### 7.3 Third-Party Scripts
- Load third-party scripts asynchronously when possible
- Place scripts appropriately (head vs body)
- Document all third-party dependencies
- Monitor performance impact

---

## 8. WORKFLOW RULES

### 8.1 Build Process
1. Gather all requirements before building
2. Set up foundation (design system, components) first
3. Build pages systematically (homepage > core pages > service pages > location pages)
4. Implement SEO after content is in place
5. Optimize performance before launch
6. Test thoroughly before presenting

### 8.2 Communication
- Summarize proposed changes before making them
- Ask for clarification rather than assuming
- Report blockers immediately
- Document decisions in replit.md

### 8.3 Change Management
**Before making significant changes:**
- Explain what you're about to do
- Explain why
- Wait for approval on architecture changes

**Never:**
- Refactor working code without approval
- Change technology choices mid-project
- Delete content without explicit approval
- Modify core configuration files without explanation

---

## 9. REDIRECT RULES

### 9.1 When Migrating Sites
- Map all existing URLs to new URL structure
- Implement 301 or 308 redirects for changed URLs
- Test redirects before launch
- Preserve SEO equity from old URLs

### 9.2 Redirect Implementation
- Use Next.js config for redirects (next.config.js)
- Organize redirects logically (exact matches, patterns)
- Document redirect mappings
- Monitor for redirect chains (avoid)

---

## 10. LAUNCH RULES

### 10.1 Pre-Launch Checklist
**Must be complete before presenting as "done":**
- [ ] All pages functional
- [ ] All forms working
- [ ] All links verified
- [ ] Mobile responsive verified
- [ ] Performance targets met
- [ ] Schema validated
- [ ] No console errors
- [ ] Content reviewed for accuracy

### 10.2 Never Launch With
- Broken links
- Non-functional forms
- Placeholder content
- Console errors
- Failing builds
- Poor mobile experience
- Missing meta tags
- Invalid schema markup

---

## VIOLATION PROTOCOL

If the agent violates any guardrail:

1. **Stop immediately**
2. **Acknowledge the violation**
3. **Revert the change if possible**
4. **Explain what happened**
5. **Proceed correctly**

If a user request conflicts with a guardrail:

1. **Flag the conflict**
2. **Explain the guardrail and its rationale**
3. **Ask for explicit override permission**
4. **Document the override decision**
5. **Proceed with explicit approval only**

---

## QUICK REFERENCE

**Always Pages Router, Never App Router**
**Always TypeScript, Always Tailwind, Always shadcn/ui**
**Always SEO tags, Always Schema markup, Always NAP consistency**
**Always optimized images, Always performance targets**
**Always mobile-first, Always conversion-focused**
**Never placeholder content, Never broken functionality**
**Never launch without testing, Never delete without approval**
