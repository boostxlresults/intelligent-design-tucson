# Template Repository Structure Outline

This document outlines the complete file structure and contents for the starter template repository. When cloning this template for a new client project, all boilerplate code, components, and configurations are ready to customize.

---

## Complete File Structure

```
/
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Git ignore rules
├── next.config.js                    # Next.js configuration (Pages Router)
├── package.json                      # Dependencies and scripts
├── postcss.config.js                 # PostCSS for Tailwind
├── tailwind.config.ts                # Tailwind configuration with brand tokens
├── tsconfig.json                     # TypeScript configuration
│
├── replit.md                         # Project documentation (customize per client)
├── MASTER-DISCOVERY-PROMPT.md        # Discovery prompt for agent
├── BUILD-CHECKLIST.md                # Comprehensive build checklist
├── GUARDRAILS.md                     # Mandatory rules
│
├── pages/                            # Next.js Pages Router
│   ├── _app.tsx                      # App wrapper (providers, global styles)
│   ├── _document.tsx                 # Document customization (fonts, scripts)
│   ├── index.tsx                     # Homepage
│   ├── about.tsx                     # About page
│   ├── contact.tsx                   # Contact page
│   ├── services/
│   │   ├── index.tsx                 # Services overview
│   │   └── [slug].tsx                # Dynamic service page template
│   ├── locations/
│   │   ├── index.tsx                 # Service areas overview
│   │   └── [slug].tsx                # Dynamic location page template
│   ├── blog/
│   │   ├── index.tsx                 # Blog index with categories
│   │   ├── [slug].tsx                # Individual blog post
│   │   └── category/
│   │       └── [category].tsx        # Category archive
│   ├── knowledge-hub.tsx             # Resource center
│   ├── privacy-policy.tsx            # Privacy policy
│   ├── terms-of-service.tsx          # Terms of service
│   ├── 404.tsx                       # Custom 404 page
│   └── api/                          # API routes
│       ├── contact.ts                # Contact form handler
│       └── sitemap.ts                # Dynamic sitemap
│
├── components/
│   ├── ui/                           # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   ├── accordion.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   └── [other shadcn components]
│   │
│   ├── layout/
│   │   ├── Header.tsx                # Site header with navigation
│   │   ├── Footer.tsx                # Site footer with NAP
│   │   ├── MobileNav.tsx             # Mobile navigation menu
│   │   ├── FloatingActionBar.tsx     # Mobile CTA bar
│   │   ├── Breadcrumbs.tsx           # Breadcrumb navigation
│   │   └── Layout.tsx                # Page layout wrapper
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx           # Configurable hero
│   │   ├── ServicesGrid.tsx          # Service cards grid
│   │   ├── TrustSignals.tsx          # Reviews, certifications
│   │   ├── Testimonials.tsx          # Testimonial carousel
│   │   ├── CTASection.tsx            # Call-to-action section
│   │   ├── FAQSection.tsx            # FAQ accordion with schema
│   │   ├── ContactForm.tsx           # Contact form component
│   │   ├── ServiceAreaMap.tsx        # Service area display
│   │   └── TeamSection.tsx           # Team members grid
│   │
│   ├── blog/
│   │   ├── BlogCard.tsx              # Blog post preview card
│   │   ├── BlogGrid.tsx              # Blog posts grid
│   │   ├── CategoryFilter.tsx        # Category filter component
│   │   └── RelatedPosts.tsx          # Related posts section
│   │
│   ├── seo/
│   │   ├── SEOHead.tsx               # Meta tags, OG tags component
│   │   ├── SchemaMarkup.tsx          # JSON-LD schema component
│   │   └── Breadcrumbs.tsx           # Breadcrumb with schema
│   │
│   └── integrations/
│       ├── GoogleAnalytics.tsx       # GA4 component
│       ├── GoogleTagManager.tsx      # GTM component
│       ├── SchedulerModal.tsx        # Scheduling widget wrapper
│       └── ReviewsWidget.tsx         # Reviews integration
│
├── lib/
│   ├── seo/
│   │   ├── generateMetadata.ts       # Meta tag generator
│   │   ├── generateOrganizationSchema.ts
│   │   ├── generateLocalBusinessSchema.ts
│   │   ├── generateServiceSchema.ts
│   │   ├── generateFAQSchema.ts
│   │   ├── generateBreadcrumbSchema.ts
│   │   ├── generateArticleSchema.ts
│   │   └── index.ts                  # Schema exports
│   │
│   ├── content/
│   │   ├── getServices.ts            # Fetch services data
│   │   ├── getLocations.ts           # Fetch locations data
│   │   ├── getBlogPosts.ts           # Fetch blog posts
│   │   └── markdownParser.ts         # Markdown to HTML
│   │
│   ├── utils/
│   │   ├── cn.ts                     # Class name utility (clsx + tailwind-merge)
│   │   ├── formatPhone.ts            # Phone number formatter
│   │   ├── formatAddress.ts          # Address formatter
│   │   └── slugify.ts                # URL slug generator
│   │
│   └── config/
│       ├── site.ts                   # Site-wide configuration
│       ├── navigation.ts             # Navigation structure
│       └── business.ts               # Business information (NAP)
│
├── styles/
│   ├── globals.css                   # Global styles, Tailwind imports
│   └── components.css                # Custom component styles (if needed)
│
├── public/
│   ├── robots.txt                    # Search engine directives
│   ├── llms.txt                      # AI search optimization (template)
│   ├── favicon.ico                   # Favicon
│   ├── logo.png                      # Site logo (replace)
│   ├── logo.svg                      # Site logo SVG (replace)
│   ├── og-image.jpg                  # Default OG image (replace)
│   └── images/
│       ├── hero/                     # Hero images
│       ├── services/                 # Service images
│       ├── team/                     # Team photos
│       ├── blog/                     # Blog images
│       └── icons/                    # Custom icons
│
├── data/
│   ├── services/
│   │   ├── manifest.json             # Service slugs and metadata
│   │   └── [service-slug].json       # Individual service data
│   │
│   ├── locations/
│   │   ├── manifest.json             # Location slugs and metadata
│   │   └── [location-slug].json      # Individual location data
│   │
│   ├── blog/
│   │   └── posts/                    # Markdown blog posts
│   │       └── [post-slug].md
│   │
│   └── content/
│       ├── testimonials.json         # Testimonials data
│       ├── faqs.json                 # Site-wide FAQs
│       └── team.json                 # Team members data
│
└── scripts/
    ├── scrape-content.ts             # Content migration script
    ├── generate-sitemap.ts           # Sitemap generation
    └── optimize-images.ts            # Image optimization script
```

---

## Key Configuration Files

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // Add external image domains here
  },
  async redirects() {
    return [
      // Add redirects here during migration
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### lib/config/site.ts
```typescript
export const siteConfig = {
  name: '[BUSINESS NAME]',
  tagline: '[BUSINESS TAGLINE]',
  description: '[BUSINESS DESCRIPTION FOR META]',
  url: 'https://[DOMAIN].com',
  ogImage: '/og-image.jpg',
  
  // Customize these per client
  phone: '(XXX) XXX-XXXX',
  email: 'info@[domain].com',
  address: {
    street: '[STREET ADDRESS]',
    city: '[CITY]',
    state: '[STATE]',
    zip: '[ZIP]',
    country: 'US',
  },
  
  // Social links
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    youtube: '',
    yelp: '',
  },
  
  // Business hours
  hours: {
    monday: '8:00 AM - 5:00 PM',
    tuesday: '8:00 AM - 5:00 PM',
    wednesday: '8:00 AM - 5:00 PM',
    thursday: '8:00 AM - 5:00 PM',
    friday: '8:00 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  },
  
  // Integration IDs (from environment variables)
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '',
};
```

### lib/config/business.ts
```typescript
// Canonical business information for schema markup
// This ensures NAP consistency across the entire site

export const businessInfo = {
  '@type': 'LocalBusiness',
  name: '[BUSINESS NAME]',
  legalName: '[LEGAL BUSINESS NAME]',
  description: '[BUSINESS DESCRIPTION]',
  url: 'https://[DOMAIN].com',
  telephone: '+1-XXX-XXX-XXXX',
  email: 'info@[domain].com',
  
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[STREET ADDRESS]',
    addressLocality: '[CITY]',
    addressRegion: '[STATE]',
    postalCode: '[ZIP]',
    addressCountry: 'US',
  },
  
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0.000000,  // Replace with actual coordinates
    longitude: 0.000000,
  },
  
  foundingDate: '[YEAR]',
  founder: {
    '@type': 'Person',
    name: '[FOUNDER NAME]',
  },
  
  // Service area (customize based on business)
  areaServed: [
    {
      '@type': 'City',
      name: '[CITY]',
      containedIn: '[STATE]',
    },
  ],
  
  // Add relevant business categories
  additionalType: [
    'https://schema.org/[BusinessType]',
  ],
  
  priceRange: '$$', // $, $$, $$$, $$$$
  
  sameAs: [
    // Social media and directory URLs
    'https://www.facebook.com/[page]',
    'https://www.google.com/maps?cid=[google_cid]',
    'https://www.yelp.com/biz/[business]',
  ],
};
```

---

## Pre-Built Component Examples

### HeroSection.tsx
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function HeroSection({ title, subtitle, backgroundImage, primaryCTA, secondaryCTA }: HeroProps) {
  // Configurable hero component with gradient overlay
  // Mobile-responsive with proper CTA sizing
}
```

### FAQSection.tsx
```typescript
interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
  includeSchema?: boolean;
}

export function FAQSection({ title, faqs, includeSchema = true }: FAQSectionProps) {
  // Accordion FAQ component
  // Automatically includes FAQPage JSON-LD schema when enabled
}
```

---

## Environment Variables Template

```bash
# .env.local (create per project, never commit)

# Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Integrations (as needed)
NEXT_PUBLIC_SCHEDULER_ID=
NEXT_PUBLIC_CHAT_WIDGET_ID=

# API Keys (if needed, use Replit secrets)
# Never commit actual values
```

---

## Scripts for Content Migration

### scripts/scrape-content.ts
```typescript
// Content migration script template
// Customize for each source platform (WordPress, Wix, Squarespace, etc.)

// Features:
// - Scrape existing pages and blog posts
// - Convert HTML to Markdown
// - Download and optimize images
// - Preserve meta descriptions
// - Map URL structure for redirects
// - Generate migration report
```

---

## Template Customization Checklist

When starting a new project from this template:

1. [ ] Update `lib/config/site.ts` with client information
2. [ ] Update `lib/config/business.ts` with NAP details
3. [ ] Replace logo files in `/public/`
4. [ ] Update brand colors in `tailwind.config.ts`
5. [ ] Customize `replit.md` with project specifics
6. [ ] Update `public/llms.txt` with client content
7. [ ] Configure environment variables
8. [ ] Add client-specific services to `/data/services/`
9. [ ] Add service areas to `/data/locations/`
10. [ ] Run content migration scripts if applicable

---

## Template Maintenance

**Update the template when:**
- New best practices emerge
- shadcn/ui components are updated
- Performance optimizations are discovered
- New schema types become relevant
- Agency processes evolve

**Keep versioned:**
- Use semantic versioning (v1.0.0, v1.1.0, v2.0.0)
- Document changes in CHANGELOG.md
- Tag releases in Git
