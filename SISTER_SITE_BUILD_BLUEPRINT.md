# 🚀 Next.js SSR Home Services Website - Build Blueprint
## AI-SEO & Traditional SEO Optimized | Conversion-Focused Architecture

**Document Version:** 1.0  
**Last Updated:** November 2025  
**Source Project:** Intelligent Design Tucson (Reference Implementation)  
**Target Framework:** Next.js 16+ with App Router & Server-Side Rendering

---

## 📋 BUSINESS INFORMATION (FILL IN BEFORE STARTING)

### Company Details
```yaml
COMPANY_NAME: "[Company Name Here]"
BUSINESS_LEGAL_NAME: "[Legal Business Name]"
TAGLINE: "[Company Tagline/Slogan]"
PHONE: "[Primary Phone Number]"
PHONE_DISPLAY: "[Formatted Phone: (520) 333-2665]"
EMAIL: "[Primary Email]"
WEBSITE_URL: "[https://newsite.com]"
CURRENT_SITE_URL: "[https://currentsite.com if exists]"
```

### Address (NAP Data)
```yaml
STREET_ADDRESS: "[123 Main Street]"
CITY: "[City]"
STATE: "[State Abbreviation]"
STATE_FULL: "[Full State Name]"
ZIP_CODE: "[Primary Zip]"
COUNTRY: "US"
```

### Geo Coordinates
```yaml
LATITUDE: "[e.g., 32.2540]"
LONGITUDE: "[e.g., -110.9742]"
SERVICE_RADIUS_MILES: "[e.g., 50]"
```

### Service Categories (Select All That Apply)
```yaml
SERVICES:
  - HVAC: [yes/no]
  - Heating: [yes/no]
  - Plumbing: [yes/no]
  - Electrical: [yes/no]
  - Solar: [yes/no]
  - Roofing: [yes/no]
  - Other: "[Specify additional services]"
```

### Service Areas (List All Cities/Neighborhoods)
```yaml
PRIMARY_LOCATION: "[Main city]"
SERVICE_AREAS:
  - "[Location 1]"
  - "[Location 2]"
  - "[Location 3]"
  # Add 15-25 total locations for maximum SEO coverage
```

### Service Area Zip Codes (List All)
```yaml
ZIP_CODES:
  - "[Zip 1]"
  - "[Zip 2]"
  - "[Zip 3]"
  # List 30-50 zip codes for DefinedRegion schema optimization
```

### Third-Party Integrations
```yaml
GOOGLE_TAG_MANAGER_ID: "[GTM-XXXXXXX]"
GOOGLE_BUSINESS_PROFILE_URL: "[https://maps.google.com/...]"
SERVICETITAN_TENANT_ID: "[If applicable]"
SERVICETITAN_SCHEDULER_URL: "[Scheduler embed URL]"
FACEBOOK_URL: "[https://facebook.com/...]"
INSTAGRAM_URL: "[https://instagram.com/...]"
YELP_URL: "[https://yelp.com/...]"
BBB_URL: "[https://bbb.org/... if applicable]"
```

### Trust Signals
```yaml
YEARS_IN_BUSINESS: "[e.g., 20]"
TOTAL_REVIEWS: "[e.g., 22000]"
AVERAGE_RATING: "[e.g., 4.97]"
DISPLAY_RATING: "5.0"  # Always show 5.0 for Google badge
BBB_RATING: "[A+ or applicable]"
LICENSES: "[List all license numbers]"
CERTIFICATIONS: "[List certifications]"
WARRANTY_YEARS: "[e.g., 100% satisfaction guarantee]"
```

### Brand Identity
```yaml
PRIMARY_COLOR: "[Brand blue hex: #1e40af]"
SECONDARY_COLOR: "[Brand yellow hex: #fbbf24]"
ACCENT_COLOR: "[Brand red hex: #dc2626]"
FAMILY_OWNED: [yes/no]
VETERAN_OWNED: [yes/no]
EMPLOYEE_COUNT: "[e.g., 50-100]"
```

---

## 🏗️ TECHNICAL ARCHITECTURE SPECIFICATIONS

### Required Tech Stack
```json
{
  "framework": "Next.js 16.0.1+",
  "rendering": "Server-Side Rendering (SSR) + Static Site Generation (SSG)",
  "typescript": "Required (strict mode)",
  "styling": "Tailwind CSS 4.0+",
  "ui_components": "shadcn/ui (Radix UI primitives)",
  "fonts": "Inter (Google Fonts or self-hosted)",
  "image_optimization": "next/image with sharp",
  "state_management": "@tanstack/react-query 5.60+",
  "form_handling": "react-hook-form + @hookform/resolvers",
  "validation": "zod + drizzle-zod",
  "icons": "lucide-react (primary), react-icons/si (logos)",
  "animations": "framer-motion (optional)",
  "markdown": "gray-matter + marked + DOMPurify",
  "meta_tags": "Next.js Metadata API (native)",
  "deployment": "Replit Publishing or Vercel"
}
```

### Project Structure (Next.js App Router)
```
project-root/
├── app/
│   ├── layout.tsx                    # Root layout with GTM, DNI, global components
│   ├── page.tsx                      # Homepage
│   ├── not-found.tsx                 # Custom 404 page
│   ├── sitemap.ts                    # Dynamic XML sitemap
│   ├── robots.ts                     # Robots.txt generation
│   │
│   ├── services/
│   │   └── [service]/
│   │       └── page.tsx              # Dynamic service pages (69+ pages)
│   │
│   ├── service-areas/
│   │   └── [location]/
│   │       └── page.tsx              # Dynamic location pages (20+ pages)
│   │
│   ├── [location]/
│   │   └── [service]/
│   │       └── page.tsx              # Location+Service matrix (140+ pages)
│   │
│   ├── blog/
│   │   ├── page.tsx                  # Blog index
│   │   └── [slug]/
│   │       └── page.tsx              # Individual blog posts
│   │
│   ├── about-us/page.tsx
│   ├── contact/page.tsx
│   ├── financing/page.tsx
│   ├── careers/page.tsx
│   ├── customer-reviews/page.tsx
│   ├── privacy-policy/page.tsx
│   └── [other-info-pages]/page.tsx
│
├── components/
│   ├── ui/                           # shadcn/ui components (50+)
│   ├── layout/
│   │   ├── Header.tsx                # Sticky header with dropdowns
│   │   ├── Footer.tsx                # Comprehensive footer with NAP
│   │   └── MobileFloatingActions.tsx # Sticky mobile CTAs
│   ├── content/
│   │   ├── ServiceFAQ.tsx            # FAQ accordion with JSON-LD schema
│   │   ├── CommonQuestions.tsx       # AI-search optimized Q&A
│   │   ├── TrustBar.tsx              # Social proof bar
│   │   ├── ReviewCarousel.tsx        # Customer testimonials
│   │   └── ContactCard.tsx           # Contact CTAs
│   ├── integrations/
│   │   ├── SchedulerEmbed.tsx        # ServiceTitan or booking widget
│   │   ├── GoogleMapEmbed.tsx        # Google Maps integration
│   │   └── GoogleReviewsBadge.tsx    # Reviews display
│   └── seo/
│       ├── SchemaGenerator.tsx       # Server-side schema utilities
│       └── BreadcrumbSchema.tsx      # Breadcrumb generation
│
├── lib/
│   ├── seo/
│   │   ├── generateLocationSchema.ts # LocalBusiness + DefinedRegion
│   │   ├── generateServiceSchema.ts  # Service schema factory
│   │   ├── generateFAQSchema.ts      # FAQ schema generator
│   │   ├── generateBreadcrumbs.ts    # Breadcrumb schema
│   │   ├── zipCodes.ts               # Zip code schemas
│   │   ├── zipCodeFAQs.ts            # Dynamic zip code FAQs
│   │   └── schemaRegistry.ts         # Centralized schema system
│   ├── utils.ts                      # Utility functions
│   └── constants.ts                  # Business constants (NAP)
│
├── data/
│   ├── pages/
│   │   ├── services/
│   │   │   ├── manifest.json         # Service page routing
│   │   │   └── [service-slug].ts     # Service page data
│   │   └── locations/
│   │       └── [location-slug].ts    # Location page data
│   ├── faqs/
│   │   ├── hvac.ts
│   │   ├── plumbing.ts
│   │   ├── electrical.ts
│   │   ├── solar.ts
│   │   └── roofing.ts
│   └── services.ts                   # Service definitions
│
├── shared/
│   └── zipcodes.ts                   # Zip code mappings
│
├── public/
│   ├── images/
│   ├── logo.png
│   └── og-image.jpg
│
├── next.config.ts                    # Next.js configuration with redirects
├── tailwind.config.ts                # Tailwind with brand colors
└── tsconfig.json                     # TypeScript strict mode
```

---

## 🎯 SEO ARCHITECTURE STANDARDS

### 1. Meta Tags (Every Page Must Have)

**Implementation:** Use Next.js `generateMetadata()` function

```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Unique Page Title (60 chars max) | Company Name",
    description: "150-160 character description with primary keyword naturally integrated",
    alternates: {
      canonical: `${SITE_URL}/page-slug`
    },
    openGraph: {
      title: "Same as meta title or customized",
      description: "Same as meta description",
      url: `${SITE_URL}/page-slug`,
      siteName: "Company Name",
      images: [{
        url: `${SITE_URL}/og-image-page.jpg`,
        width: 1200,
        height: 630,
        alt: "Descriptive alt text"
      }],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Same as OG title",
      description: "Same as OG description",
      images: [`${SITE_URL}/og-image-page.jpg`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    }
  }
}
```

**Title Formula:**
- Service Pages: `{Service} {Location} {State} | {Benefit/CTA} | {Company}`
- Location Pages: `{Service Category} Services {Location} {State} | {Company}`
- Service+Location: `{Service} in {Location}, {State} | Expert {Category} | {Company}`

**Description Formula:**
- Lead with benefit/value proposition
- Include primary keyword naturally
- Include location for local SEO
- Include trust signal (years, reviews, rating)
- End with clear CTA
- 150-160 characters exactly

### 2. Schema.org Structured Data (JSON-LD)

**Required Schemas Per Page Type:**

#### A. Homepage Schemas
1. **Organization Schema** (with complete NAP)
2. **LocalBusiness Schema** (with all service areas)
3. **WebSite Schema** (with search action)
4. **BreadcrumbList Schema**

#### B. Service Page Schemas
1. **Service Schema** (specific service details)
2. **LocalBusiness Schema** (with service areas)
3. **FAQPage Schema** (from FAQ component)
4. **BreadcrumbList Schema**
5. **Offer Schema** (optional - for promotions)

#### C. Location Page Schemas
1. **LocalBusiness Schema** (location-specific)
2. **DefinedRegion Schema** (zip code targeting) ⭐
3. **GeoCircle Schema** (service radius)
4. **FAQPage Schema** (location FAQs)
5. **BreadcrumbList Schema**

#### D. Service+Location Page Schemas
1. **Service Schema** (location-specific service)
2. **LocalBusiness Schema** (with location data)
3. **DefinedRegion Schema** (location zip codes) ⭐
4. **FAQPage Schema**
5. **BreadcrumbList Schema**

#### E. Blog Post Schemas
1. **Article Schema** (with author, publish date)
2. **BreadcrumbList Schema**
3. **Organization Schema** (as publisher)

**Critical: DefinedRegion Schema for Zip Code Targeting**

```typescript
// Use DefinedRegion, NOT PostalCodeSpecification (Schema.org compliant)
const areaServed = zipCodes.map(zip => ({
  "@type": "DefinedRegion",
  "postalCode": zip,
  "addressCountry": "US"
}));
```

**Schema Implementation Rules:**
- ✅ All schemas in initial HTML (server-side rendering)
- ✅ Use `<script type="application/ld+json">` tags
- ✅ Validate with Google Rich Results Test
- ✅ Validate with Schema.org validator
- ✅ Centralize NAP data (single source of truth)
- ✅ No duplicate schemas on same page
- ✅ Include all required properties per schema type

### 3. Internal Linking Strategy

**Linking Rules:**
1. **Homepage** links to all main service categories (6-7 services)
2. **Service pages** link to all location variations
3. **Location pages** link to all services offered
4. **Service+Location pages** link to:
   - Parent service page
   - Parent location page
   - Related services in same location
   - Same service in nearby locations
5. **Blog posts** link to 3-5 related service pages

**Link Anchor Text:**
- Use descriptive, keyword-rich anchors
- Avoid generic "click here" or "learn more"
- Include location + service in anchors
- Examples: "AC repair in Tucson", "Oro Valley HVAC services"

### 4. URL Structure

**URL Best Practices:**
```
Homepage: /
Service: /services/{service-slug}
Location: /service-areas/{location-slug}
Service+Location: /{location-slug}/{service-slug}
Blog: /blog/{slug}
Info: /{page-slug}
```

**Slug Requirements:**
- All lowercase
- Hyphens (not underscores)
- No trailing slashes
- Include primary keyword
- Keep under 60 characters
- No stop words when possible

### 5. Image Optimization

**Image Requirements:**
- Use `next/image` component (required)
- WebP or AVIF format (auto-converted by Next.js)
- Descriptive alt text (include keywords naturally)
- Width/height attributes specified
- Lazy loading enabled (default)
- Priority loading for above-fold images
- Responsive sizes attribute

**Alt Text Formula:**
```
"{Service} {action} in {Location} - {Company Name}"
Example: "HVAC technician installing air conditioner in Tucson - Company Name"
```

---

## 🤖 AI SEARCH ENGINE OPTIMIZATION (AI-SEO)

### Core AI-SEO Principles

**Goal:** Optimize for Large Language Model (LLM) citations from ChatGPT, Perplexity, Claude, Gemini, and other AI search engines.

**Requirements:**
1. ✅ All content in initial HTML (SSR required)
2. ✅ Natural language, conversational content
3. ✅ Comprehensive FAQ sections (11+ questions per page)
4. ✅ Question-focused content structure
5. ✅ Rich structured data (schema.org)
6. ✅ Long-form, authoritative content (1500+ words/page)

### 1. FAQ System Architecture

#### ServiceFAQ Component (11+ FAQs per service page)

**Implementation:**
```typescript
// components/content/ServiceFAQ.tsx
import { Accordion } from "@/components/ui/accordion";

export function ServiceFAQ({ faqs, service, location }) {
  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="faq-section">
        <h2>Frequently Asked Questions About {service} in {location}</h2>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>
                <h3>{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
```

**FAQ Content Standards:**
- Minimum 11 FAQs per service page
- Questions written in natural language (how people actually ask)
- Answers 100-200 words each
- Include keywords naturally
- Use semantic HTML (H2 section, H3 questions)
- Generate FAQPage schema automatically

**FAQ Question Types:**
1. What is {service}?
2. How much does {service} cost in {location}?
3. How long does {service} take?
4. Do you offer emergency {service} in {location}?
5. What are signs I need {service}?
6. How often should I {service action}?
7. What's included in {service}?
8. Do you offer warranties on {service}?
9. Are you licensed and insured for {service}?
10. What areas do you serve for {service}?
11. How do I schedule {service} in {location}?

#### CommonQuestions Component (5-8 Q&As per page)

**Purpose:** Non-collapsible, conversational Q&A optimized for AI search voice queries

```typescript
// components/content/CommonQuestions.tsx
export function CommonQuestions({ questions }) {
  return (
    <section className="common-questions">
      <h2>Common Questions</h2>
      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <h3>{q.question}</h3>
          <p>{q.answer}</p>
        </div>
      ))}
    </section>
  );
}
```

**CommonQuestions Standards:**
- 5-8 questions per page
- Non-collapsible (always visible)
- Shorter answers (50-100 words)
- More conversational tone
- Voice search optimized
- No schema generation (just content)

### 2. Zip Code FAQ System (Location Pages)

**Dynamic Zip Code FAQs** - Generate 3 location-specific FAQs per location page:

```typescript
// lib/seo/zipCodeFAQs.ts
export function generateZipCodeFAQs(location: string, zipCodes: string[]) {
  return [
    {
      question: `What zip codes does ${COMPANY_NAME} serve in ${location}?`,
      answer: `We proudly serve all of ${location} including zip codes ${zipCodes.slice(0, 5).join(', ')}${zipCodes.length > 5 ? ', and more' : ''}. Our service area covers ${zipCodes.length} zip codes throughout the ${location} area...`
    },
    {
      question: `Do you provide ${PRIMARY_SERVICE} services to all ${location} zip codes?`,
      answer: `Yes! ${COMPANY_NAME} provides comprehensive ${PRIMARY_SERVICE} services to every neighborhood in ${location}. Whether you're in zip code ${zipCodes[0]} or ${zipCodes[zipCodes.length - 1]}, our team is ready to help...`
    },
    {
      question: `How quickly can you respond to emergency service calls in ${location} (${zipCodes[0]})?`,
      answer: `We offer 24/7 emergency service throughout ${location}. Our average response time is under 60 minutes for emergency calls in zip codes ${zipCodes.slice(0, 3).join(', ')}, and more...`
    }
  ];
}
```

### 3. Voice Search Optimization

**Voice Query Patterns to Target:**
- "Who does {service} near me?"
- "Best {service} company in {location}"
- "How much does {service} cost?"
- "Emergency {service} in {location}"
- "{service} open now near {location}"

**Optimization Techniques:**
1. Answer questions directly in first paragraph
2. Use question headings (H2, H3)
3. Include location + service in first 100 words
4. Write in conversational, natural tone
5. Use structured data (FAQPage schema)
6. Include hours of operation
7. Include pricing information when possible

### 4. Knowledge Base / Hub Page

**Create comprehensive knowledge hub:** `/about-{company-slug}` or `/knowledge-hub`

**Content Requirements:**
- Company history and mission
- Service category overviews
- Educational content library
- Industry certifications
- Technology/equipment used
- Service process explanations
- Warranty and guarantee details
- Community involvement
- Awards and recognition

**SEO Benefits:**
- Builds topical authority
- Provides comprehensive resource for AI citations
- Internal linking hub
- Brand story for trust building

---

## 📊 CONTENT ARCHITECTURE

### Page Types & Content Requirements

#### 1. Homepage
**Content Blocks:**
1. Hero Section (H1, tagline, primary CTA)
2. Trust Bar (reviews, years, BBB, certifications)
3. Service Tiles (6-7 main services with icons)
4. About Section (2-3 paragraphs)
5. Service Area Map
6. Why Choose Us (6 reasons with icons)
7. Review Carousel (5-10 testimonials)
8. Final CTA Section

**Word Count:** 800-1200 words  
**Schema:** Organization, LocalBusiness, WebSite, BreadcrumbList  
**Internal Links:** Link to all service categories, 3-5 location pages

#### 2. Service Pages (e.g., /services/ac-repair-tucson)
**Content Blocks:**
1. Hero Section (service-specific background image)
2. Service Overview (3-4 paragraphs)
3. 6 Service Highlights (CheckCircle icons)
4. Why Choose Us for This Service
5. Service Process (step-by-step)
6. Pricing Information (ranges or starting prices)
7. ServiceFAQ Component (11+ FAQs)
8. CommonQuestions Component (5-8 Q&As)
9. Service Areas Served
10. Related Services Links
11. Final CTA

**Word Count:** 1500-2500 words  
**Schema:** Service, LocalBusiness, FAQPage, BreadcrumbList  
**Internal Links:** Link to all locations, related services

#### 3. Location Pages (e.g., /service-areas/oro-valley)
**Content Blocks:**
1. Hero Section (location-specific)
2. Location Overview (2-3 paragraphs about serving this area)
3. Service Tiles (all services offered in this location)
4. Why We Love Serving {Location}
5. Zip Codes We Serve (display all zip codes)
6. Zip Code FAQ Component (3 dynamic FAQs)
7. ServiceFAQ Component (11+ location-specific FAQs)
8. Neighborhoods We Serve
9. Emergency Service Information
10. Customer Reviews from {Location}
11. Final CTA

**Word Count:** 1200-1800 words  
**Schema:** LocalBusiness, DefinedRegion (zip codes), GeoCircle, FAQPage, BreadcrumbList  
**Internal Links:** Link to all services, nearby locations

#### 4. Service+Location Pages (e.g., /oro-valley/ac-repair)
**Content Blocks:**
1. Hero Section (location + service specific)
2. Service in Location Overview
3. 6 Service Highlights
4. Why Choose Us in {Location}
5. Service Area Coverage
6. ServiceFAQ Component (11+ FAQs)
7. Pricing for {Location}
8. Related Services in {Location}
9. Same Service in Nearby Locations
10. Final CTA

**Word Count:** 1200-1800 words  
**Schema:** Service, LocalBusiness, DefinedRegion, FAQPage, BreadcrumbList  
**Internal Links:** Parent service, parent location, related pages

#### 5. Blog Posts
**Content Blocks:**
1. Hero Image (AI-generated or stock)
2. Article Content (markdown)
3. Table of Contents (for long posts)
4. Author Bio
5. Related Articles
6. CTA to schedule service

**Word Count:** 800-2000 words  
**Schema:** Article, Organization (publisher), BreadcrumbList  
**Publishing:** Target 1-2 posts per week minimum

---

## 🎨 DESIGN & UX STANDARDS

### Visual Design Requirements

#### Color Scheme
```css
:root {
  /* Primary Colors (Brand Blue) */
  --primary: 217 91% 60%;        /* Brand blue */
  --primary-foreground: 0 0% 100%;

  /* Secondary Colors (Brand Yellow) */
  --secondary: 45 93% 47%;       /* Brand yellow */
  --secondary-foreground: 0 0% 0%;

  /* Accent Colors (Brand Red) */
  --accent: 0 84% 60%;           /* Brand red for CTAs */
  --accent-foreground: 0 0% 100%;

  /* Base Colors */
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --card: 0 0% 100%;
  --card-foreground: 222 47% 11%;
  --muted: 210 40% 96%;
  --muted-foreground: 215 16% 47%;
  --border: 214 32% 91%;

  /* Destructive */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;

  /* Radius */
  --radius: 0.5rem;
}
```

#### Typography
- **Font Family:** Inter (Google Fonts or self-hosted)
- **H1:** 36-48px, font-weight: 700, line-height: 1.2
- **H2:** 30-36px, font-weight: 700, line-height: 1.3, color: yellow/accent
- **H3:** 24-28px, font-weight: 600, line-height: 1.4
- **Body:** 16-18px, font-weight: 400, line-height: 1.6
- **Mobile H1:** 28-32px (responsive)

#### Hero Section Design
**Required Elements:**
- Full-width background image (service/location specific)
- Dark gradient overlay (rgba(0,0,0,0.4) to rgba(0,0,0,0.6))
- White text over gradient
- H1 (60-70 characters max)
- H2 subheading (yellow color, 80-100 characters)
- Dual CTAs (Phone + Schedule buttons)
- Red phone CTA, Yellow schedule CTA

**Hero Image Specifications:**
- 1920x1080px minimum
- WebP format
- Shows technician, equipment, or service in action
- Professional quality
- Brand colors visible when possible

#### Trust Signals (Must Include)
1. **Review Count & Rating** - "22,000+ reviews, 5.0 stars"
2. **Years in Business** - "{X}+ years serving {Location}"
3. **BBB Rating** - "BBB A+ Rated"
4. **License Numbers** - "Licensed & Insured (#123456)"
5. **Warranties** - "100% Satisfaction Guarantee"
6. **Family/Veteran Owned** - Badge if applicable
7. **24/7 Service** - If applicable

#### Mobile-First Requirements
1. **Sticky Header** - Phone number always visible
2. **Mobile Floating Action Bar** - Bottom-fixed CTAs
3. **Click-to-Call** - Phone links with tel: protocol
4. **Touch-Friendly** - Minimum 44px touch targets
5. **Responsive Images** - srcset for all images
6. **Fast Loading** - Target LCP < 2.5s on mobile

### Conversion Optimization

#### Call-to-Action Strategy
**Primary CTAs (Red buttons):**
- "Call Now: {Phone Number}"
- "Emergency Service Available 24/7"

**Secondary CTAs (Yellow buttons):**
- "Schedule Online"
- "Get Free Estimate"
- "Book Appointment"

**CTA Placement:**
- Hero section (2 CTAs)
- After every major content section
- Mobile floating action bar
- Footer

#### ServiceTitan Scheduler Integration
```typescript
// components/integrations/SchedulerEmbed.tsx
export function SchedulerEmbed() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg">
          Schedule Online
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <iframe
          src={SERVICETITAN_SCHEDULER_URL}
          width="100%"
          height="600px"
          frameBorder="0"
        />
      </DialogContent>
    </Dialog>
  );
}
```

#### Google Maps Embed
```typescript
export function GoogleMapEmbed() {
  return (
    <iframe
      src={GOOGLE_BUSINESS_PROFILE_EMBED_URL}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
```

---

## ⚡ PERFORMANCE STANDARDS

### Core Web Vitals Targets
```yaml
Largest Contentful Paint (LCP): < 2.5 seconds
First Input Delay (FID): < 100 milliseconds
Cumulative Layout Shift (CLS): < 0.1
Time to First Byte (TTFB): < 600 milliseconds
First Contentful Paint (FCP): < 1.8 seconds
```

### PageSpeed Insights Targets
```yaml
Performance Score: 90+
Accessibility Score: 100
Best Practices Score: 95+
SEO Score: 100
```

### Optimization Techniques
1. **Image Optimization**
   - Use next/image component
   - WebP/AVIF formats
   - Lazy loading (default)
   - Priority for above-fold images
   - Responsive srcset

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based splitting (automatic in Next.js)
   - Component-level splitting when needed

3. **Caching Strategy**
   - Static assets: Cache-Control max-age=31536000
   - HTML pages: Cache-Control no-cache (revalidate)
   - API routes: Cache-Control s-maxage=60, stale-while-revalidate

4. **Font Optimization**
   - Use next/font for automatic optimization
   - Preload critical fonts
   - Font-display: swap

5. **CSS Optimization**
   - Inline critical CSS
   - Remove unused CSS (automatic with Tailwind)
   - Minify CSS in production

---

## 🛡️ ACCESSIBILITY STANDARDS (WCAG 2.1 AA)

### Required Accessibility Features

#### 1. Font Size Controls
```typescript
// components/AccessibilityToggle.tsx
- Small (16px)
- Medium (18px - default)
- Large (20px)
- Extra Large (24px)
```

#### 2. High Contrast Mode
- Toggle between normal and high contrast
- Persist preference in localStorage
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text

#### 3. Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Skip to main content link

#### 4. Screen Reader Support
- Semantic HTML (nav, main, article, aside, footer)
- ARIA labels where needed
- Alt text on all images
- Form labels properly associated

#### 5. Color Contrast
**Minimum Ratios:**
- Normal text: 4.5:1
- Large text (18px+): 3:1
- UI components: 3:1
- Graphics: 3:1

#### 6. Accessible Forms
- All inputs have associated labels
- Error messages clearly visible
- Required fields marked with aria-required
- Success/error states announced to screen readers

---

## 🔐 SECURITY & COMPLIANCE

### Required Implementations

#### 1. Cookie Consent (GDPR/CCPA Compliant)
```typescript
// components/CookieConsent.tsx
- Banner on first visit
- Accept / Reject / Customize options
- Persist choice in localStorage
- Integrate with GTM for tracking consent
```

#### 2. Privacy Policy Page
**Required Sections:**
- Information collection
- Cookie usage
- Third-party services (GTM, GA4, ServiceTitan)
- Data retention
- User rights (GDPR/CCPA)
- Contact information

#### 3. Security Headers
```typescript
// next.config.ts
{
  headers: [
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin'
    }
  ]
}
```

#### 4. Form Security
- CSRF protection
- Input validation (client + server)
- XSS prevention (React auto-escapes)
- Rate limiting on form submissions

---

## 📱 THIRD-PARTY INTEGRATIONS

### Google Tag Manager Setup
```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
```

### Dynamic Number Insertion (DNI)
```typescript
// components/integrations/DNIInjector.tsx
// Placeholder for ServiceTitan or CallRail DNI script
```

---

## 🚀 CONTENT EXPANSION STRATEGY

### Service + Location Matrix

**Formula:** {Total Services} × {Total Locations} = {Total Pages}

**Example:**
- 7 Services (HVAC, Heating, Plumbing, Electrical, Solar, Roofing, Drain/Sewer)
- 20 Locations (Tucson, Oro Valley, Marana, etc.)
- = 140 Service+Location pages

**Implementation:**
```typescript
// app/[location]/[service]/page.tsx
export async function generateStaticParams() {
  const locations = await getLocations();
  const services = await getServices();
  
  const params = [];
  for (const location of locations) {
    for (const service of services) {
      params.push({
        location: location.slug,
        service: service.slug
      });
    }
  }
  return params;
}
```

### Blog Content Strategy

**Publishing Cadence:** 2-4 posts per week

**Content Categories:**
- Service education (How-to guides)
- Maintenance tips
- Seasonal content
- Local news/events
- Customer success stories
- Industry trends
- Energy efficiency tips

**Blog SEO:**
- Target long-tail keywords
- Include location mentions
- Link to 3-5 service pages
- 800-2000 words per post
- Include images and videos
- Optimize for featured snippets

---

## 📋 PRE-LAUNCH CHECKLIST

### Content Verification
- [ ] All NAP data consistent across all pages
- [ ] All phone numbers formatted correctly
- [ ] All service pages have 11+ FAQs
- [ ] All location pages have zip code FAQs
- [ ] All pages have unique meta titles
- [ ] All pages have unique meta descriptions
- [ ] All images have descriptive alt text

### Schema Validation
- [ ] Test 10 random pages with Google Rich Results Test
- [ ] Test 10 random pages with Schema.org validator
- [ ] Verify all DefinedRegion schemas use correct type
- [ ] Verify all LocalBusiness schemas have complete NAP
- [ ] Verify all FAQPage schemas generate correctly
- [ ] Verify all BreadcrumbList schemas are accurate

### Performance Testing
- [ ] PageSpeed Insights on 10 key pages (90+ target)
- [ ] Core Web Vitals green on all test pages
- [ ] Lighthouse audit on homepage (90+ all categories)
- [ ] Mobile speed test (LCP < 2.5s)
- [ ] Test on slow 3G connection

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (desktop + iOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Chrome Android

### Functional Testing
- [ ] All navigation menus work
- [ ] All internal links functional
- [ ] All CTAs clickable
- [ ] Phone links work (click-to-call)
- [ ] Scheduler widget opens and loads
- [ ] Forms submit successfully
- [ ] Google Maps embed loads
- [ ] Mobile floating actions work

### SEO Testing
- [ ] Sitemap.xml generates correctly
- [ ] Robots.txt configured
- [ ] Canonical URLs on all pages
- [ ] No broken links (internal or external)
- [ ] All redirects working (if applicable)
- [ ] 404 page displays correctly

### Analytics Setup
- [ ] GTM container loads
- [ ] GA4 tracking fires
- [ ] Conversion tracking configured
- [ ] Phone call tracking configured (DNI)
- [ ] Form submission tracking
- [ ] Button click tracking

---

## 🎯 SUCCESS METRICS (First 30 Days)

### SEO Metrics
- [ ] 90%+ of pages indexed in Google Search Console
- [ ] Average position improving for target keywords
- [ ] Impressions increasing week-over-week
- [ ] Click-through rate (CTR) 3%+ average
- [ ] Zero critical errors in Search Console

### Traffic Metrics
- [ ] Organic traffic baseline established
- [ ] Mobile traffic 60-70% of total
- [ ] Bounce rate < 50% for service pages
- [ ] Average session duration 2+ minutes
- [ ] Pages per session 2.5+

### Conversion Metrics
- [ ] Form submissions tracked
- [ ] Phone calls tracked
- [ ] Scheduler widget conversions tracked
- [ ] Overall conversion rate 3-5%
- [ ] Cost per lead decreasing (if paid traffic)

### Technical Metrics
- [ ] Core Web Vitals all green
- [ ] Average page load < 3 seconds
- [ ] Zero critical errors in console
- [ ] Uptime 99.9%+
- [ ] Mobile performance score 90+

---

## 💡 IMPLEMENTATION INSTRUCTIONS

### Step 1: Project Initialization

1. **Create New Replit Project:**
   - Template: Next.js (TypeScript)
   - Name: {company-name}-website

2. **Update Configuration:**
   - Fill in all business information at top of this document
   - Update `lib/constants.ts` with NAP data
   - Configure `next.config.ts` with domain and redirects

3. **Install Dependencies:**
```bash
npm install @radix-ui/react-accordion @radix-ui/react-dialog \
  @tanstack/react-query lucide-react class-variance-authority \
  clsx tailwind-merge framer-motion gray-matter marked dompurify \
  react-hook-form @hookform/resolvers zod
```

### Step 2: Research & Content Gathering

1. **Analyze Current Site** (if exists):
   - Scrape existing content
   - Map current URL structure
   - Extract service descriptions
   - Collect customer reviews
   - Identify top-performing pages

2. **Research Business:**
   - Interview owner/manager
   - Understand service offerings
   - Identify unique selling points
   - Gather trust signals (licenses, awards, etc.)
   - Collect customer testimonials

3. **Define Service Areas:**
   - List all cities/neighborhoods served
   - Gather all zip codes in service area
   - Map service radius
   - Identify competitor coverage gaps

### Step 3: Content Creation

1. **Write Service Descriptions:**
   - 1500+ words per main service
   - Include benefits, process, pricing info
   - Write 11+ FAQs per service
   - Create 6 service highlights

2. **Write Location Descriptions:**
   - 1200+ words per location
   - Include neighborhood info
   - Write 3 zip code FAQs
   - Write 11+ location FAQs

3. **Generate Service+Location Content:**
   - Combine service + location context
   - Customize for local audience
   - Include location-specific benefits
   - Add local trust signals

### Step 4: Technical Implementation

1. **Build Schema System:**
   - Create schema generation utilities
   - Implement DefinedRegion for zip codes
   - Centralize NAP data
   - Test with validators

2. **Implement SEO:**
   - Create metadata generation functions
   - Build sitemap.ts
   - Configure robots.ts
   - Set up redirects (if migrating)

3. **Build Components:**
   - Header with navigation
   - Footer with NAP
   - ServiceFAQ with schema
   - CommonQuestions
   - TrustBar
   - Mobile floating actions

### Step 5: Testing & Launch

1. **Pre-Launch Testing:**
   - Complete pre-launch checklist above
   - Fix all critical issues
   - Optimize performance
   - Validate schemas

2. **Deploy:**
   - Deploy to Replit Publishing or Vercel
   - Configure custom domain (if applicable)
   - Set up SSL/TLS
   - Monitor initial traffic

3. **Post-Launch:**
   - Submit sitemap to Google Search Console
   - Update Google Business Profile
   - Monitor analytics
   - Track conversions
   - Address any issues

---

## 📚 REFERENCE RESOURCES

### Schema.org Documentation
- https://schema.org/LocalBusiness
- https://schema.org/Service
- https://schema.org/FAQPage
- https://schema.org/DefinedRegion (⭐ Use this, not PostalCodeSpecification)

### Google Tools
- Google Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Search Console: https://search.google.com/search-console
- Tag Manager: https://tagmanager.google.com

### Validation Tools
- Schema.org Validator: https://validator.schema.org/
- W3C HTML Validator: https://validator.w3.org/
- WAVE Accessibility: https://wave.webaim.org/

### Next.js Documentation
- App Router: https://nextjs.org/docs/app
- Metadata API: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Image Optimization: https://nextjs.org/docs/app/api-reference/components/image

---

## ✅ QUALITY GATES

Every sister site build MUST pass these quality gates:

### Content Quality
- [ ] All pages 1200+ words minimum
- [ ] All service pages have 11+ FAQs
- [ ] All location pages have 3+ zip code FAQs
- [ ] Zero spelling/grammar errors
- [ ] All content proofread by human

### Technical Quality
- [ ] 100% TypeScript (no any types)
- [ ] Zero console errors
- [ ] Zero build warnings
- [ ] All pages server-side rendered
- [ ] All images optimized

### SEO Quality
- [ ] All pages have unique titles
- [ ] All pages have unique descriptions
- [ ] All pages have canonical URLs
- [ ] All schemas validate with Google
- [ ] All schemas validate with Schema.org

### Performance Quality
- [ ] PageSpeed 90+ on all test pages
- [ ] Core Web Vitals all green
- [ ] LCP < 2.5s on mobile
- [ ] Mobile performance score 90+

### Accessibility Quality
- [ ] WCAG 2.1 AA compliant
- [ ] Lighthouse accessibility 100
- [ ] All images have alt text
- [ ] All forms have labels
- [ ] Keyboard navigation works

---

## 🎓 TRAINING GUIDE FOR AI AGENT

**When you receive this blueprint in a new Replit project, follow this sequence:**

1. **Read and Understand:**
   - Read entire blueprint
   - Identify all placeholders marked with [brackets]
   - Ask user to fill in business information section

2. **Research:**
   - Analyze current website if URL provided
   - Research business and competitors
   - Understand service area and demographics

3. **Plan:**
   - Create task list with phases
   - Estimate timeline (typically 15-25 days)
   - Identify any missing information

4. **Build:**
   - Start with technical foundation
   - Build reusable components first
   - Generate schema system
   - Create page templates
   - Batch-create pages

5. **Test:**
   - Follow pre-launch checklist
   - Fix all issues before launch
   - Get user approval

6. **Launch:**
   - Deploy to production
   - Monitor for 48 hours
   - Address any issues quickly

**Key Principles:**
- ✅ Always use server-side rendering
- ✅ Always use DefinedRegion (not PostalCodeSpecification)
- ✅ Always validate schemas before launch
- ✅ Always optimize for AI search engines
- ✅ Always maintain consistent NAP data
- ✅ Never use placeholder/mock data in production

---

## 📄 FILE MANIFEST

**This blueprint should be accompanied by these reference files from the source project:**

```
Reference Files to Include:
├── lib/seo/generateLocationSchema.ts    # DefinedRegion implementation
├── lib/seo/zipCodeFAQs.ts              # Zip code FAQ generator
├── lib/seo/schemaRegistry.ts           # Schema system
├── components/content/ServiceFAQ.tsx    # FAQ component
├── components/content/CommonQuestions.tsx
├── components/layout/Header.tsx         # Navigation example
├── next.config.ts                       # Next.js configuration
├── tailwind.config.ts                   # Tailwind configuration
└── PRE_LAUNCH_CHECKLIST.md             # Comprehensive checklist
```

---

**END OF BLUEPRINT**

**Document Status:** Production-Ready  
**Last Validation:** November 2025  
**Success Rate:** 100% (1/1 implementations successful)  
**Avg Build Time:** 15-25 days for 250-500 pages

**This blueprint represents the culmination of building the highest-ranking AI-search and conversion-optimized home services website. Use it to replicate this success for every sister site.**
