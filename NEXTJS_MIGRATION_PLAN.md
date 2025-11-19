# Next.js Migration Plan - Intelligent Design Tucson
## Complete Migration Guide: Zero Data Loss Guarantee

**Mission:** Migrate 153 pages of SEO/AI SEO-optimized content from React + Vite + Wouter to Next.js 14 App Router with Server-Side Rendering, preserving every byte of optimization work.

**Timeline:** 25-30 days (UPDATED: See MIGRATION_TIMELINE_UPDATE.md for detailed breakdown)  
**Risk Level:** Low (when following this plan)  
**Data Loss Risk:** ZERO (if plan followed precisely)  
**Buffer Time:** 6.5 days built into timeline for issue resolution  
**Quality Gates:** 21 quality gates throughout execution

---

## Table of Contents

1. [Complete Inventory](#complete-inventory)
2. [Current Architecture Analysis](#current-architecture-analysis)
3. [Next.js Architecture Blueprint](#nextjs-architecture-blueprint)
4. [File-by-File Migration Map](#file-by-file-migration-map)
5. [Conversion Patterns by Page Type](#conversion-patterns-by-page-type)
6. [SEO Preservation Checklist](#seo-preservation-checklist)
7. [Automated Migration Scripts](#automated-migration-scripts)
8. [Step-by-Step Execution Plan](#step-by-step-execution-plan)
9. [Testing & Validation](#testing--validation)
10. [Rollback Strategy](#rollback-strategy)

---

## 1. Complete Inventory

### Total File Count
- **Pages:** 236 files (153 unique routes after dynamic imports)
- **Components:** 160 files (including 50 shadcn/ui components)
- **Data Files:** 12 files (FAQ, common questions, blog index)
- **Utility Files:** 5 files (constants, utils, query client, etc.)
- **Hooks:** 2 files (use-mobile, use-toast)
- **Total Frontend Files:** 415 files

### Page Categorization

#### Service + Location Landing Pages (120 pages)
**Pattern:** `{Service}{Location}.tsx`
- HVAC × 20 locations = 20 pages
- Heating × 20 locations = 20 pages
- Plumbing × 20 locations = 20 pages
- Solar Installation × 20 locations = 20 pages
- Electrical × 20 locations = 20 pages
- Roofing × 20 locations = 20 pages

**Locations (20):**
Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Vail, Corona De Tucson, Drexel Heights, Casas Adobes, Tucson Estates, Tortolita, Tanque Verde, Saddle Brooke, Rita Ranch, Rillito, Picture Rocks, Gladden Farms, East Tucson, Cortaro, Avra Valley

**Files:**
```
HVACTucson.tsx, HVACOroValley.tsx, ...[18 more]
HeatingTucson.tsx, HeatingOroValley.tsx, ...[18 more]
PlumbingTucson.tsx, PlumbingOroValley.tsx, ...[18 more]
SolarInstallationTucson.tsx, SolarInstallationOroValley.tsx, ...[18 more]
ElectricalTucson.tsx, ElectricalOroValley.tsx, ...[18 more]
RoofingTucson.tsx, RoofingOroValley.tsx, ...[18 more]
```

#### Service Pages (49 pages)
**HVAC Services (17 pages):**
- ACRepair, ACService, ACInstallation, ACTuneup
- DuctlessMiniSplitRepair, DuctlessMiniSplitInstallation
- DuctCleaning, DuctRepair, DuctInstallation, DuctSealing
- SmartThermostatInstallation, IndoorAirQuality, SolarAC
- HeaterRepair, HeaterService, HeaterInstallation, HeaterTuneup

**Heating (2 pages):**
- HeatPumps, Furnaces

**Plumbing Services (14 pages):**
- WaterFiltration, HybridWaterHeaters, TrenchlessRepair, RooterSpecial
- WaterSofteners, WaterHeaters, WaterHeaterRepair, WaterHeaterInstallation
- WaterHeaterFlush, PlumbingMaintenance, DrainClearing, LeakDetection
- WaterLeakRepair, SewerLineRepair, SewerCameraInspection

**Plumbing Fixtures (3 pages):**
- SinkRepairInstallation, BidetInstallation, GarbageDisposal, ToiletInstallation

**Roofing Services (10 pages):**
- ResidentialRoofRepair, ResidentialRoofInstallation, ResidentialRoofReplacement
- ResidentialRoofCoating, ResidentialRoofInspection
- CommercialRoofRepair, CommercialRoofInstallation, CommercialRoofReplacement
- CommercialRoofCoating, CommercialRoofInspection

**Roofing Types (6 pages):**
- SolarTubularLights, Skylights, FlatRoofs, ShingleRoofs, TileRoofs, PitchedRoofs, MetalRoofs

**Solar Services (6 pages):**
- ResidentialSolarInstallation, CommercialSolarInstallation
- SolarMaintenance, HomeEnergyAudit, SolarTaxCredits, SolarPanelCosts

**Electrical Services (8 pages):**
- ElectricalRepair, GeneracInstallation, GeneracRepair
- ElectricalPanelUpgrades, HomeEnergyUpgrades
- CeilingFanInstallation, OutdoorMotionLighting, LightingUpgrades
- CircuitBreakers, OutletsSwitches

#### Location Pages (21 pages)
**Pattern:** `{Location}.tsx`
```
Tucson, OroValley, Marana, Sahuarita, GreenValley, Vail, CoronaDeTucson,
DrexelHeights, CasasAdobes, TucsonEstates, Tortolita, PictureRocks, Rillito,
Cortaro, AvraValley, EastTucson, CatalinaFoothills, TanqueVerde, RitaRanch,
GladdenFarms, SaddleBrooke, AreasWeServe
```

#### Information Pages (15 pages)
```
Home, AboutUs, KnowledgeHub, Resources, Contact, Financing,
Guarantees, Careers, FamilyProtectionPlans, CustomerReviews,
VideoTestimonials, RecentProjects, NewHomebuyerOffer, RealtorsOffer,
WhyTucsonChoosesIntelligentDesign, PrivacyPolicy
```

#### Blog Pages (4 pages)
```
BlogIndex, BlogCategory, BlogPost, Resources
```

### Component Inventory

#### Custom Components (110 non-UI components)
**Layout Components (7):**
- Header, Footer, MobileFloatingActions, TrustBar
- Hero, ContactCard, BadgeWall

**SEO Components (5):**
- MetaHead, Schema, ServiceFAQ, CommonQuestions
- GTM, DNIInjector

**Utility Components (6):**
- LazyImage, SchedulerEmbed, GoogleMapEmbed, GoogleReviewsBadge
- CookieConsent, CookiePreferences, AccessibilityToggle
- SkipToContent, PageLoadingFallback

**Schema Components (92 specialized schema components):**
- ACInstallationSchema, ACRepairSchema, ACServiceSchema, etc.
- Each service has dedicated schema component
- Pattern: `{ServiceName}Schema.tsx`

#### shadcn/ui Components (50)
All components in `client/src/components/ui/` transfer directly to Next.js:
```
accordion, alert-dialog, alert, aspect-ratio, avatar, badge, breadcrumb,
button, calendar, card, carousel, chart, checkbox, collapsible, command,
context-menu, dialog, drawer, dropdown-menu, form, hover-card, input-otp,
input, label, menubar, navigation-menu, pagination, popover, progress,
radio-group, resizable, scroll-area, select, separator, sheet, sidebar,
skeleton, slider, switch, table, tabs, textarea, toaster, toast, toggle-group,
toggle, tooltip
```

### Data Files Inventory

#### FAQ Data (5 category files)
```
client/src/data/faqs/types.ts
client/src/data/faqs/hvac.ts - Contains hvacLocationFAQs, heatingLocationFAQs
client/src/data/faqs/plumbing.ts
client/src/data/faqs/electrical.ts
client/src/data/faqs/solar.ts
client/src/data/faqs/roofing.ts
```

**Total FAQs:** 704 LLM-optimized questions

#### Common Questions Data (5 category files)
```
client/src/data/commonQuestions/hvac.ts
client/src/data/commonQuestions/plumbing.ts
client/src/data/commonQuestions/electrical.ts
client/src/data/commonQuestions/solar.ts
client/src/data/commonQuestions/roofing.ts
```

#### Blog Index
```
client/src/data/blogIndex.json - Metadata for 231 blog posts
```

### Schema Constants
```
client/src/components/schema/constants.ts - Canonical NAP data
client/src/components/schema/helpers.ts - Schema generation utilities
```

### Assets Inventory

#### Generated Images
- **HVAC Technicians:** 20 images (HVAC_tech_*.webp)
- **Heating Technicians:** 20 images (Heating_tech_*.webp)
- **Total Hero Images:** 40 professional technician images

#### Blog Content
- **231 markdown blog posts** in `public/content/blog/`
- Organized by category (hvac, plumbing, solar, electrical, roofing, home-tips)

---

## 2. Current Architecture Analysis

### Current Tech Stack
```json
{
  "Frontend": "React 18 + TypeScript",
  "Build Tool": "Vite 5.4",
  "Routing": "Wouter 3.3",
  "Styling": "Tailwind CSS 3.4 + shadcn/ui",
  "State": "TanStack Query 5.60",
  "Meta Tags": "react-helmet-async 2.0",
  "Backend": "Express.js 4.21",
  "SSR": "None (Client-Side Rendering only)"
}
```

### Critical SEO Elements (MUST PRESERVE)

#### 1. Meta Tag System
**Current Implementation:**
- Uses `MetaHead` component wrapping `react-helmet-async`
- All 153 pages use SSR-safe constants (SITE_URL)
- Pattern on every page:
  ```tsx
  <MetaHead
    title="Unique Title Here"
    description="150-160 char description"
    canonical={`${SITE_URL}/page-path`}
    robots="index, follow, max-image-preview:large"
    openGraph={[...]}
    twitter={[...]}
  />
  ```

#### 2. Schema Markup System
**Current Implementation:**
- JSON-LD injected via `useEffect` with cleanup
- Every page has 2-4 schemas:
  - Service schema (required on service pages)
  - Breadcrumb schema (all pages)
  - FAQPage schema (generated by ServiceFAQ component)
  - LocalBusiness schema (location pages)
- Uses `data-schema` attributes for identification
- Centralized NAP via `schema/constants.ts`

#### 3. FAQ System
**ServiceFAQ Component:**
- Auto-generates JSON-LD FAQ schema
- Semantic HTML (H2 sections, H3 questions)
- 11+ FAQs per service page for AI search
- Data managed in 5 category files
- **704 total FAQs** to preserve

#### 4. Common Questions Component
**Conversational Q&A:**
- Non-collapsible natural language Q&A
- Optimized for AI search engines
- 5-8 questions per service page
- Deployed to 67 service pages

#### 5. Blog System
**Server-Side Markdown Parsing:**
- Express API endpoint: `/api/blog/:category/:slug`
- Gray-matter for frontmatter
- Marked for markdown → HTML
- DOMPurify for sanitization
- **231 blog posts** with optimized frontmatter

#### 6. Conversion Elements (MUST PRESERVE)
- **ServiceTitan Scheduler:** 3 instances per page
- **Dynamic Number Insertion (DNI):** GTM-managed
- **Google Tag Manager:** GTM-WKG99GJ
- **Mobile Floating Actions:** Sticky call-to-actions
- **TrustBar:** Social proof component

---

## 3. Next.js Architecture Blueprint

### Target Next.js Stack
```json
{
  "Framework": "Next.js 14.2+ (App Router)",
  "Rendering": "Server-Side Rendering (SSR) + Static Generation (SSG)",
  "Styling": "Tailwind CSS 4.0 (same config)",
  "UI": "shadcn/ui (identical components)",
  "State": "TanStack Query 5.60 (same version)",
  "Meta": "Next.js Metadata API (native)",
  "Images": "next/image (optimization)",
  "Deployment": "Vercel (recommended)"
}
```

### Folder Structure
```
intelligent-design-nextjs/
├── app/
│   ├── (marketing)/              # Route group for marketing pages
│   │   ├── page.tsx              # Home page
│   │   ├── about-us/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── ...                   # All info pages
│   ├── (services)/               # Route group for service pages
│   │   ├── [service]/            # Dynamic service pages
│   │   │   └── page.tsx
│   │   └── ...
│   ├── (locations)/              # Route group for location pages
│   │   ├── [location]/
│   │   │   └── page.tsx
│   │   └── ...
│   ├── (service-locations)/      # Service + Location pages
│   │   ├── hvac-[location]/
│   │   │   └── page.tsx
│   │   ├── heating-[location]/
│   │   │   └── page.tsx
│   │   ├── plumbing-[location]/
│   │   │   └── page.tsx
│   │   ├── solar-installation-[location]/
│   │   │   └── page.tsx
│   │   ├── electrical-[location]/
│   │   │   └── page.tsx
│   │   └── roofing-[location]/
│   │       └── page.tsx
│   ├── blog/
│   │   ├── page.tsx              # Blog index
│   │   ├── [category]/
│   │   │   ├── page.tsx          # Category page
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Blog post
│   ├── api/                      # API routes (if needed)
│   │   └── blog/[category]/[slug]/
│   │       └── route.ts
│   ├── layout.tsx                # Root layout
│   └── not-found.tsx             # 404 page
├── components/
│   ├── ui/                       # shadcn/ui components (50 files)
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileFloatingActions.tsx
│   ├── seo/
│   │   ├── ServiceFAQ.tsx
│   │   ├── CommonQuestions.tsx
│   │   └── schema/
│   │       ├── constants.ts
│   │       └── helpers.ts
│   └── ...                       # All other components
├── data/
│   ├── faqs/                     # FAQ data (copy as-is)
│   ├── commonQuestions/          # Common Q data (copy as-is)
│   └── blogIndex.json
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── queryClient.ts
├── public/
│   ├── content/
│   │   └── blog/                 # 231 markdown files
│   └── images/
│       └── generated_images/     # 40 hero images
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Key Architectural Decisions

#### 1. generateMetadata() for SEO
Replace `MetaHead` component with Next.js native `generateMetadata()`:

**Before (Current React):**
```tsx
<MetaHead
  title="HVAC Services Tucson AZ"
  description="Expert HVAC services..."
  canonical={`${SITE_URL}/hvac-tucson`}
  openGraph={[...]}
  twitter={[...]}
/>
```

**After (Next.js):**
```tsx
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "HVAC Services Tucson AZ",
    description: "Expert HVAC services...",
    alternates: {
      canonical: `${SITE_URL}/hvac-tucson`
    },
    openGraph: {
      title: "HVAC Services Tucson AZ",
      description: "Expert HVAC services...",
      url: `${SITE_URL}/hvac-tucson`,
      images: [{ url: `${SITE_URL}/og-hvac-tucson.jpg` }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: "HVAC Services Tucson AZ",
      description: "Expert HVAC services...",
      images: [`${SITE_URL}/og-hvac-tucson.jpg`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large'
      }
    }
  }
}
```

**Benefits:**
- ✅ Included in initial HTML (no JavaScript required)
- ✅ Perfect for all crawlers (Google, AI search engines)
- ✅ Type-safe with TypeScript
- ✅ No duplicate meta tags ever

#### 2. JSON-LD Schema in Server Components
Move schema from `useEffect` to server component scripts:

**Before (Current React):**
```tsx
useEffect(() => {
  const schema = { /* JSON-LD */ };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
  return () => script.remove();
}, []);
```

**After (Next.js Server Component):**
```tsx
export default function HVACTucson() {
  const serviceSchema = { /* JSON-LD */ };
  const breadcrumbSchema = { /* JSON-LD */ };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {/* Page content */}
    </>
  );
}
```

**Benefits:**
- ✅ In initial HTML response
- ✅ No client-side injection
- ✅ Guaranteed crawler visibility
- ✅ No cleanup needed

#### 3. generateStaticParams for Blog
Pre-render all 231 blog posts at build time:

```tsx
export async function generateStaticParams() {
  const blogIndex = await getBlogIndex();
  return blogIndex.posts.map((post) => ({
    category: post.category,
    slug: post.slug
  }));
}
```

**Benefits:**
- ✅ All blogs pre-rendered to HTML
- ✅ Instant page loads
- ✅ Perfect SEO for all blog posts

#### 4. Dynamic Routes with Static Params
Use `generateStaticParams` for service + location pages:

```tsx
// app/(service-locations)/hvac-[location]/page.tsx
export async function generateStaticParams() {
  const locations = [
    'tucson', 'oro-valley', 'marana', 'sahuarita',
    'green-valley', 'vail', 'corona-de-tucson', /* ...17 more */
  ];
  return locations.map(location => ({ location }));
}
```

**Benefits:**
- ✅ All 20 HVAC pages pre-rendered
- ✅ Instant loads
- ✅ Perfect SEO

---

## 4. File-by-File Migration Map

### Mapping Strategy

Each current file maps to Next.js equivalent:

| Current Location | Next.js Location | Type | Notes |
|-----------------|------------------|------|-------|
| `client/src/pages/Home.tsx` | `app/page.tsx` | Root | Home page |
| `client/src/pages/HVACTucson.tsx` | `app/(service-locations)/hvac-tucson/page.tsx` | Static Page | Service + Location |
| `client/src/pages/ACRepair.tsx` | `app/(services)/ac-repair-tucson/page.tsx` | Static Page | Service only |
| `client/src/pages/Tucson.tsx` | `app/(locations)/tucson/page.tsx` | Static Page | Location only |
| `client/src/pages/BlogPost.tsx` | `app/blog/[category]/[slug]/page.tsx` | Dynamic | Blog system |
| `client/src/components/Header.tsx` | `components/layout/Header.tsx` | Component | Direct copy |
| `client/src/components/ui/button.tsx` | `components/ui/button.tsx` | Component | Direct copy |
| `client/src/data/faqs/hvac.ts` | `data/faqs/hvac.ts` | Data | Direct copy |
| `client/src/lib/utils.ts` | `lib/utils.ts` | Utility | Direct copy |

### Conversion Priority

#### Priority 1: Direct Copy (No Changes) - 250 files
- All shadcn/ui components (50 files)
- All data files (12 files)
- All FAQ/common question data
- Most utility files
- All images and assets
- Blog markdown files

#### Priority 2: Simple Updates (Import Changes Only) - 100 files
- Most React components
- Layout components (Header, Footer, etc.)
- UI components (TrustBar, BadgeWall, etc.)
- Update imports only (`@/` alias works in Next.js)

#### Priority 3: Meta Tag Conversion - 153 files
- All page files need `generateMetadata()` function
- Remove `react-helmet-async` usage
- Convert to Next.js Metadata API

#### Priority 4: Schema Conversion - 153 files
- Move JSON-LD from `useEffect` to JSX
- Server-side schema injection
- Preserve all schema data

#### Priority 5: Routing Changes - 15 files
- Replace `wouter` imports with `next/link`
- Replace `Link` component usage
- Replace `useLocation` with Next.js navigation

---

## 5. Conversion Patterns by Page Type

### Pattern A: Service + Location Pages (120 pages)

**Current Structure:**
```tsx
// client/src/pages/HVACTucson.tsx
import { MetaHead } from "@/components/MetaHead";
import { useEffect } from "react";
// ... other imports

export default function HVACTucson() {
  useEffect(() => {
    // Schema injection
  }, []);
  
  return (
    <>
      <MetaHead title="..." description="..." ... />
      <GTM />
      <DNIInjector />
      <Header />
      <main>
        {/* Content */}
      </main>
      <Footer />
      <MobileFloatingActions />
    </>
  );
}
```

**Next.js Structure:**
```tsx
// app/(service-locations)/hvac-tucson/page.tsx
import { Metadata } from 'next';
import GTM from '@/components/GTM';
// ... other imports

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "...",
    description: "...",
    // ... full metadata
  };
}

export default function HVACTucsonPage() {
  const serviceSchema = { /* JSON-LD */ };
  const breadcrumbSchema = { /* JSON-LD */ };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        {/* Content - identical to current */}
      </main>
    </>
  );
}
```

**Key Changes:**
1. ✅ Add `generateMetadata()` export
2. ✅ Remove `<MetaHead>` component
3. ✅ Move schemas from `useEffect` to JSX
4. ✅ Remove `GTM` and `DNIInjector` (move to layout)
5. ✅ Remove `Header`, `Footer` (in layout)
6. ✅ Keep all content, FAQs, conversion elements

### Pattern B: Dynamic Service + Location Pages (6 routes × 20 params = 120 pages)

**Instead of 120 separate files, use 6 dynamic routes:**

```tsx
// app/(service-locations)/hvac-[location]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const LOCATIONS = [
  'tucson', 'oro-valley', 'marana', 'sahuarita',
  // ... all 20 locations
];

export async function generateStaticParams() {
  return LOCATIONS.map(location => ({ location }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = params.location;
  const locationTitle = formatLocationName(location);
  
  return {
    title: `HVAC Services ${locationTitle} AZ | Air Conditioning`,
    description: `Expert HVAC & AC services in ${locationTitle}, Arizona...`,
    // ... full metadata
  };
}

export default function HVACLocationPage({ params }: Props) {
  if (!LOCATIONS.includes(params.location)) {
    notFound();
  }
  
  // Generate location-specific content
  const location = params.location;
  const locationTitle = formatLocationName(location);
  
  return (
    // ... page content with dynamic location data
  );
}
```

**Benefits:**
- ✅ 120 static pages → 6 dynamic routes
- ✅ All 120 pages still pre-rendered at build time
- ✅ Easier to maintain (update 1 file vs 20)
- ✅ Less code duplication

**Trade-off Decision:**
- **Option 1 (Recommended):** Keep 120 separate files for now, migrate exact content
  - Pros: Zero risk, exact preservation
  - Cons: More files to maintain
  
- **Option 2:** Consolidate to 6 dynamic routes
  - Pros: Cleaner codebase, easier updates
  - Cons: Requires content abstraction, small risk

**Recommendation:** Start with Option 1 (separate files), consolidate later if desired.

### Pattern C: Blog System

**Current (API Route + Client Component):**
```tsx
// server/routes.ts
app.get("/api/blog/:category/:slug", (req, res) => {
  // Parse markdown, return JSON
});

// client/src/pages/BlogPost.tsx
export default function BlogPost() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`/api/blog/${category}/${slug}`)
      .then(res => res.json())
      .then(setPost);
  }, []);
  // ...
}
```

**Next.js (Server Component with Static Generation):**
```tsx
// app/blog/[category]/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export async function generateStaticParams() {
  const blogIndex = await getBlogIndex();
  return blogIndex.posts.map(post => ({
    category: post.category,
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.category, params.slug);
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    // ... full metadata
  };
}

async function getPost(category: string, slug: string) {
  const filePath = path.join(process.cwd(), 'public/content/blog', category, `${slug}.md`);
  const fileContent = readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked.parse(content);
  
  return {
    frontmatter: data,
    content,
    htmlContent
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.category, params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
    </article>
  );
}
```

**Benefits:**
- ✅ All 231 blogs pre-rendered to HTML
- ✅ No API calls, no client-side fetching
- ✅ Perfect SEO for every blog post
- ✅ Instant page loads

---

## 6. SEO Preservation Checklist

### Meta Tags Verification (Per Page)
- [ ] Title tag present (50-60 chars optimal)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Robots directive
- [ ] Open Graph: og:title
- [ ] Open Graph: og:description
- [ ] Open Graph: og:url
- [ ] Open Graph: og:image
- [ ] Open Graph: og:type
- [ ] Twitter: twitter:card
- [ ] Twitter: twitter:title
- [ ] Twitter: twitter:description
- [ ] Twitter: twitter:image

### Schema Markup Verification (Per Page)
- [ ] Service schema (service pages)
- [ ] LocalBusiness schema (location pages)
- [ ] Breadcrumb schema (all pages)
- [ ] FAQPage schema (service pages with FAQs)
- [ ] Article schema (blog posts)
- [ ] All schemas use centralized NAP data
- [ ] Schemas in initial HTML (not client-injected)

### Content Preservation
- [ ] All heading hierarchy preserved (H1 → H2 → H3)
- [ ] All body content identical
- [ ] All images with alt text
- [ ] All internal links working
- [ ] All CTAs present
- [ ] ServiceTitan scheduler embedded
- [ ] Phone numbers (DNI compatible)
- [ ] TrustBar component
- [ ] FAQ sections (11+ questions)
- [ ] Common questions sections

### Technical SEO
- [ ] Clean URLs (no .html, no query params)
- [ ] Proper routing structure
- [ ] Sitemap generation configured
- [ ] robots.txt configured
- [ ] 404 page implemented
- [ ] Loading states for dynamic content
- [ ] Image optimization (next/image)

---

## 7. Automated Migration Scripts

### Script 1: Meta Tag Converter

**Purpose:** Convert `MetaHead` usage to `generateMetadata()` function

**Location:** `scripts/convert-metadata.ts`

**Logic:**
1. Read page file
2. Extract `MetaHead` component props
3. Generate `generateMetadata()` function
4. Replace in file

**Example Output:**
```bash
$ npm run convert:metadata client/src/pages/HVACTucson.tsx
✓ Extracted metadata from MetaHead component
✓ Generated generateMetadata() function
✓ File updated: app/hvac-tucson/page.tsx
```

### Script 2: Schema Converter

**Purpose:** Move schemas from `useEffect` to server-side JSX

**Location:** `scripts/convert-schemas.ts`

**Logic:**
1. Extract all schema objects from `useEffect`
2. Generate JSX `<script>` tags
3. Place at top of component return
4. Remove `useEffect` block

### Script 3: Import Path Updater

**Purpose:** Update wouter imports to Next.js

**Location:** `scripts/update-imports.ts`

**Replacements:**
```tsx
// Before
import { Link, useLocation } from 'wouter';

// After
import Link from 'next/link';
import { usePathname } from 'next/navigation';
```

### Script 4: File Structure Migrator

**Purpose:** Copy files from current structure to Next.js structure

**Location:** `scripts/migrate-structure.ts`

**Logic:**
1. Read current file structure
2. Create Next.js folder structure
3. Copy files to correct locations
4. Apply conversions

---

## 8. Step-by-Step Execution Plan

**UPDATED TIMELINE: 25-30 Days** (Previously 17-21 days)

### Resource Allocation Strategy

**Primary Developer (Full-time):**
- Setup, architecture, templates, complex pages
- Quality assurance, testing, deployment
- 8 hours/day dedicated to migration

**User (Collaboration - 2-3 hours/day):**
- Content review and approval
- Testing conversion elements (ServiceTitan, DNI)
- Business metrics validation
- Stakeholder updates

**Parallel Workstreams:**
1. **Core Migration** (Primary Developer) - Sequential, critical path
2. **Content Verification** (User) - Parallel, ongoing
3. **Testing & QA** (Both) - Parallel during batch migration
4. **Documentation** (Primary Developer) - Parallel with migration

### Critical Path Items (Cannot Be Parallelized):
- Days 1-7: Setup, templates, pilot pages
- Day 15-17: Full integration testing
- Day 18-21: Deployment staging
- Day 22-25: Production launch
- Day 26-30: Post-launch monitoring

### Phase 1: Setup & Foundation (Days 1-5) - **EXTENDED from 3 days**

#### Day 1: Next.js Project Initialization
**Duration:** 6-8 hours  
**Lead:** Primary Developer  
**User Involvement:** None

**Tasks:**
1. ✅ Create new Next.js project: `npx create-next-app@latest intelligent-design-nextjs --typescript --tailwind --app --import-alias "@/*"`
2. ✅ Install dependencies from current package.json (review each for Next.js compatibility)
3. ✅ Copy tailwind.config.ts (verify dark mode configuration)
4. ✅ Copy tsconfig.json (adjust for Next.js App Router)
5. ✅ Set up folder structure (app, components, data, lib, public)
6. ✅ Configure next.config.js (images, redirects, env vars)
7. ✅ Copy lib/seo utilities (7 files created in Week 0)
8. ✅ Test build: `npm run build` (expect clean build)

**Deliverables:**
- Working Next.js project skeleton
- All dependencies installed and compatible
- Tailwind CSS configured with dark mode
- TypeScript configured for App Router
- SEO utilities in place

**Quality Gate:** Clean build with zero errors

---

#### Day 2: Component Migration - UI Layer
**Duration:** 6-8 hours  
**Lead:** Primary Developer  
**User Involvement:** None

**Tasks:**
1. ✅ Copy all 50 shadcn/ui components → `components/ui/`
2. ✅ Copy utility files → `lib/` (utils.ts, queryClient.ts, etc.)
3. ✅ Copy constants → `lib/constants.ts` (SITE_URL, business info)
4. ✅ Test component imports in test page
5. ✅ Fix any import path issues (@/ alias verification)
6. ✅ Verify dark mode utilities work

**Deliverables:**
- All UI components working in Next.js
- All utilities available
- Import paths verified
- Dark mode functional

**Quality Gate:** All shadcn components render in test page

---

#### Day 3: Component Migration - Layout & Custom Components
**Duration:** 8 hours  
**Lead:** Primary Developer  
**User Involvement:** None

**Tasks:**
1. ✅ Copy Header, Footer, MobileFloatingActions
2. ✅ Copy TrustBar, BadgeWall, Hero
3. ✅ Copy ServiceFAQ, CommonQuestions
4. ✅ Copy GTM, DNIInjector (update for Next.js Script component)
5. ✅ Copy all other custom components (60+ files)
6. ✅ Update imports (wouter → next/link) using automation script
7. ✅ Create root layout.tsx with Header/Footer
8. ✅ Create template for client components vs server components

**Deliverables:**
- All components migrated (110+ files)
- Root layout functional
- All imports working
- Client/server component pattern established

**Quality Gate:** Homepage renders with Header, Footer, full layout

---

#### Day 4: Data & Asset Migration
**Duration:** 4-6 hours  
**Lead:** Primary Developer  
**User Involvement:** Content verification (1 hour)

**Tasks:**
1. ✅ Copy `data/faqs/` folder (5 files, 704 FAQs)
2. ✅ Copy `data/commonQuestions/` folder (5 files)
3. ✅ Copy `data/blogIndex.json` (231 posts metadata)
4. ✅ Copy `public/content/blog/` (231 markdown files)
5. ✅ Copy `public/images/generated_images/` (40 HVAC/Heating images)
6. ✅ Copy all other public assets (logo, OG images, etc.)
7. ✅ Set up lib/blog utilities for markdown parsing
8. ✅ Test blog markdown parsing with 5 sample posts

**Deliverables:**
- All FAQ data available (704 FAQs verified)
- All common questions data available
- All blog posts in place (231 files)
- All images optimized and in place
- Blog utilities functional

**Quality Gate:** User verifies 10 random FAQs match current site

---

#### Day 5: SEO Utilities Integration & Testing
**Duration:** 6 hours  
**Lead:** Primary Developer  
**User Involvement:** None

**Tasks:**
1. ✅ Test all lib/seo utilities with sample data
2. ✅ Create schema generation examples for each page type
3. ✅ Test metadata generation for all variations
4. ✅ Verify canonical URL generation
5. ✅ Test FAQ schema generation with real FAQ data
6. ✅ Document utility usage patterns
7. ✅ Create troubleshooting guide for common issues

**Deliverables:**
- All SEO utilities tested and documented
- Example usage for each utility
- Troubleshooting guide
- Developer documentation

**Quality Gate:** All utilities generate valid schema.org JSON

---

### Phase 2: Page Templates & Pilots (Days 6-10) - **EXTENDED from 3 days**

#### Day 6: Create Page Templates
**Duration:** 8 hours  
**Lead:** Primary Developer  
**User Involvement:** Template review (1 hour)

**Tasks:**
1. ✅ Create template for Service + Location pages (most complex)
2. ✅ Create template for Service pages
3. ✅ Create template for Location pages
4. ✅ Create template for Info pages
5. ✅ Create template for Blog pages
6. ✅ Each template includes:
   - generateMetadata() function
   - Schema in JSX
   - Full content structure
   - All conversion elements

**Deliverables:**
- 5 reusable page templates
- Templates tested and verified
- Metadata perfect on all templates
- Schemas working on all templates

#### Day 6: Pilot Page Migration
**Tasks:**
1. ✅ Migrate HVACTucson.tsx using template
2. ✅ Verify all SEO elements:
   - Meta tags in HTML
   - Schemas in HTML
   - FAQs rendering
   - Common questions rendering
   - All CTAs working
3. ✅ Test in development
4. ✅ Verify in browser tools
5. ✅ Check View Page Source for schemas

**Deliverables:**
- 1 perfect pilot page
- Complete SEO verification
- Template validated
- Process documented

#### Day 7: Second Pilot + Verification
**Tasks:**
1. ✅ Migrate BlogPost using template
2. ✅ Verify markdown parsing works
3. ✅ Verify all 231 posts accessible
4. ✅ Test blog metadata
5. ✅ Verify blog schemas
6. ✅ Test category pages
7. ✅ Test blog index

**Deliverables:**
- Blog system fully functional
- All 231 posts verified
- Blog SEO perfect
- Templates finalized

### Phase 4: Batch Page Migration (Days 8-14)

#### Day 8-9: Service + Location Pages (120 pages)
**Approach:** Automated script + manual verification

**Tasks:**
1. ✅ Run migration script for all HVAC pages (20)
2. ✅ Spot-check 5 HVAC pages
3. ✅ Run migration script for all Heating pages (20)
4. ✅ Spot-check 5 Heating pages
5. ✅ Run migration script for all Plumbing pages (20)
6. ✅ Spot-check 5 Plumbing pages

**Day 9:**
7. ✅ Run migration script for all Solar pages (20)
8. ✅ Spot-check 5 Solar pages
9. ✅ Run migration script for all Electrical pages (20)
10. ✅ Spot-check 5 Electrical pages
11. ✅ Run migration script for all Roofing pages (20)
12. ✅ Spot-check 5 Roofing pages

**Deliverables:**
- All 120 service+location pages migrated
- 30 pages manually verified
- All schemas present
- All FAQs working

#### Day 10-11: Service Pages (49 pages)
**Tasks:**
1. ✅ Migrate all HVAC service pages (17)
2. ✅ Migrate all Plumbing service pages (17)
3. ✅ Migrate all Roofing service pages (16)
4. ✅ Migrate all Solar service pages (6)
5. ✅ Migrate all Electrical service pages (8)
6. ✅ Spot-check 15 pages total

**Deliverables:**
- All 49 service pages migrated
- 15 pages manually verified

#### Day 12: Location Pages (21 pages)
**Tasks:**
1. ✅ Migrate all 21 location pages
2. ✅ Verify internal links to service+location pages
3. ✅ Verify all location schemas
4. ✅ Spot-check 10 pages

**Deliverables:**
- All 21 location pages migrated
- 10 pages verified
- All internal links working

#### Day 13: Information Pages (15 pages)
**Tasks:**
1. ✅ Migrate Home page
2. ✅ Migrate About Us
3. ✅ Migrate Contact
4. ✅ Migrate all other info pages (12)
5. ✅ Verify all unique content preserved
6. ✅ Test all forms/CTAs

**Deliverables:**
- All 15 info pages migrated
- All CTAs functional
- All forms working

#### Day 14: Final Pages + 404
**Tasks:**
1. ✅ Create not-found.tsx (404 page)
2. ✅ Migrate any remaining pages
3. ✅ Create loading.tsx states
4. ✅ Test error boundaries

**Deliverables:**
- All pages migrated
- 404 page working
- Loading states implemented

### Phase 5: Testing & Validation (Days 15-17)

#### Day 15: SEO Verification
**Tasks:**
1. ✅ Test 20 random pages in View Source
2. ✅ Verify meta tags in HTML
3. ✅ Verify schemas in HTML
4. ✅ Test all internal links
5. ✅ Run broken link checker
6. ✅ Verify canonical URLs
7. ✅ Check robots.txt
8. ✅ Generate sitemap.xml

**Deliverables:**
- SEO audit report
- All issues fixed
- Sitemap generated

#### Day 16: Functional Testing
**Tasks:**
1. ✅ Test all conversion elements:
   - ServiceTitan scheduler opens
   - Phone numbers clickable
   - CTAs working
2. ✅ Test all forms
3. ✅ Test mobile responsiveness
4. ✅ Test accessibility features
5. ✅ Test cookie consent
6. ✅ Verify GTM tracking

**Deliverables:**
- Functional test report
- All conversions working
- Mobile experience perfect

#### Day 17: Performance Testing
**Tasks:**
1. ✅ Run Lighthouse audits (10 random pages)
2. ✅ Test Core Web Vitals
3. ✅ Optimize images if needed
4. ✅ Test bundle size
5. ✅ Test load times
6. ✅ Fix any performance issues

**Deliverables:**
- Performance audit report
- Lighthouse scores documented
- Performance targets met

### Phase 6: Deployment (Days 18-21)

#### Day 18: Pre-Deployment Setup
**Tasks:**
1. ✅ Create Vercel account (if not exists)
2. ✅ Connect GitHub repository
3. ✅ Configure environment variables
4. ✅ Set up custom domain
5. ✅ Configure redirects (if needed)
6. ✅ Test build on Vercel

**Deliverables:**
- Vercel project created
- Domain configured
- Build successful

#### Day 19: Staging Deployment
**Tasks:**
1. ✅ Deploy to Vercel staging
2. ✅ Test all pages on staging
3. ✅ Run SEO checks on staging
4. ✅ Test conversions on staging
5. ✅ Share staging with stakeholders

**Deliverables:**
- Staging site live
- All tests passed
- Stakeholder approval

#### Day 20: Production Deployment
**Tasks:**
1. ✅ Final pre-launch checks
2. ✅ Deploy to production
3. ✅ Verify DNS propagation
4. ✅ Test production site
5. ✅ Submit new sitemap to Google
6. ✅ Monitor for errors

**Deliverables:**
- Production site live
- All systems operational
- Monitoring active

#### Day 21: Post-Launch Monitoring
**Tasks:**
1. ✅ Monitor server logs
2. ✅ Monitor error tracking
3. ✅ Monitor Analytics
4. ✅ Monitor Search Console
5. ✅ Fix any issues immediately
6. ✅ Document launch

**Deliverables:**
- Launch report
- All issues resolved
- Monitoring dashboard

---

## 9. Testing & Validation

### Automated Testing Checklist

#### SEO Testing Script
```typescript
// scripts/test-seo.ts
async function testPageSEO(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  
  const checks = {
    title: html.includes('<title>'),
    description: html.includes('meta name="description"'),
    canonical: html.includes('rel="canonical"'),
    ogTitle: html.includes('property="og:title"'),
    ogDescription: html.includes('property="og:description"'),
    ogImage: html.includes('property="og:image"'),
    twitter: html.includes('name="twitter:card"'),
    schema: html.includes('type="application/ld+json"')
  };
  
  return checks;
}
```

#### Schema Validation Script
```typescript
// scripts/validate-schemas.ts
async function validateSchemas(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  
  // Extract all JSON-LD schemas
  const schemaRegex = /<script type="application\/ld\+json">(.*?)<\/script>/gs;
  const schemas = [...html.matchAll(schemaRegex)];
  
  schemas.forEach((match, index) => {
    try {
      const schema = JSON.parse(match[1]);
      console.log(`✓ Schema ${index + 1} valid:`, schema['@type']);
    } catch (error) {
      console.error(`✗ Schema ${index + 1} invalid:`, error);
    }
  });
}
```

### Manual Testing Checklist (Per Page Type)

#### Service + Location Pages (Sample 10)
- [ ] Meta tags in HTML source
- [ ] Service schema present
- [ ] Breadcrumb schema present
- [ ] FAQ schema present (from ServiceFAQ)
- [ ] All 11+ FAQs rendering
- [ ] Common questions rendering
- [ ] Hero image loads
- [ ] TrustBar visible
- [ ] ServiceTitan scheduler opens
- [ ] Phone numbers clickable
- [ ] All CTAs working
- [ ] Internal links work
- [ ] Mobile responsive
- [ ] Loads under 3 seconds

#### Blog Posts (Sample 10)
- [ ] Meta tags in HTML
- [ ] Article schema present
- [ ] Breadcrumb schema present
- [ ] Markdown renders correctly
- [ ] Images display
- [ ] Code blocks formatted
- [ ] Table of contents works
- [ ] Related posts show
- [ ] Social share buttons work
- [ ] Comments section (if applicable)

---

## 10. Rollback Strategy & Monitoring

### Pre-Deployment Baseline Capture

#### Metrics to Document (Week Before Launch)
1. **Search Console Baselines:**
   - [ ] Average daily impressions (last 28 days)
   - [ ] Average daily clicks (last 28 days)
   - [ ] Average CTR by page type
   - [ ] Core Web Vitals scores (LCP, FID, CLS)
   - [ ] Mobile usability errors count
   - [ ] Index coverage status (should be 153 pages indexed)

2. **Google Analytics 4 Baselines:**
   - [ ] Daily sessions (average last 30 days)
   - [ ] Daily users (average last 30 days)
   - [ ] Bounce rate by page type
   - [ ] Average session duration
   - [ ] Pages per session
   - [ ] Top 20 landing pages (traffic data)
   - [ ] Conversion rate (ServiceTitan scheduler opens)
   - [ ] Phone click conversion rate (DNI)

3. **Technical Baselines:**
   - [ ] Lighthouse SEO scores (sample 10 pages)
   - [ ] Page load times (Core Web Vitals, sample 20 pages)
   - [ ] JavaScript error rate (from browser console)
   - [ ] 404 error count (from Search Console)
   - [ ] Server response times (if applicable)

4. **Business Metrics Baselines:**
   - [ ] Weekly ServiceTitan scheduler opens
   - [ ] Weekly phone calls (DNI tracking)
   - [ ] Weekly form submissions
   - [ ] Average leads per day

### Backup Plan

#### Before Migration Starts
1. ✅ Create full repository backup (Git tag: `pre-nextjs-migration`)
2. ✅ Export current site as static HTML (wget mirror for reference)
3. ✅ Document all current URLs (sitemap.xml copy)
4. ✅ Screenshot 50 random pages (automated script)
5. ✅ Export all Analytics data (last 90 days CSV)
6. ✅ Export Search Console data (last 90 days CSV)
7. ✅ Document all environment variables
8. ✅ Save current Replit deployment settings
9. ✅ Backup `blogIndex.json` and all markdown files
10. ✅ Save current GTM container version

#### During Migration
1. ✅ Keep current site running (no downtime)
2. ✅ Build Next.js site separately on new branch
3. ✅ Test thoroughly on Vercel preview deployment
4. ✅ Use staging environment for 48-hour soak test
5. ✅ Run parallel A/B test (10% traffic to Next.js for 24 hours)

### Post-Deployment Monitoring Setup

#### Immediate Monitoring (First 24 Hours)

**Hour 0-1: Critical Systems Check**
- [ ] All 153 pages return 200 status
- [ ] Homepage loads correctly
- [ ] ServiceTitan scheduler opens on 3 test pages
- [ ] DNI phone numbers working
- [ ] GTM firing correctly (check via Tag Assistant)
- [ ] No JavaScript console errors on 10 sample pages

**Hour 1-6: Traffic Monitoring**
- [ ] Monitor GA4 real-time users (should match typical hourly pattern)
- [ ] Check Vercel Analytics for unusual error rates
- [ ] Monitor server response times
- [ ] Check for 404 errors in Vercel logs
- [ ] Verify Search Console crawl rate normal

**Hour 6-24: Conversion Monitoring**
- [ ] Track ServiceTitan scheduler opens (should match baseline ±20%)
- [ ] Track phone clicks via DNI (should match baseline ±20%)
- [ ] Monitor form submissions
- [ ] Check conversion funnel completion rates

#### Week 1: Daily Monitoring

**Daily Checks (Every Morning, 9 AM):**
1. **Search Console:**
   - Check for new index coverage issues
   - Monitor Core Web Vitals trends
   - Check for new mobile usability errors
   - Verify crawl stats normal (should be same as baseline)

2. **Google Analytics 4:**
   - Daily sessions compared to last week
   - Daily users compared to last week
   - Top landing pages unchanged
   - Bounce rate by page type (should be ±10% of baseline)
   - Conversion events firing correctly

3. **Technical Health:**
   - Vercel deployment status
   - Error log review (any new patterns?)
   - Response time trends
   - 404 error count (should be near zero)

4. **Business Metrics:**
   - ServiceTitan scheduler opens vs. baseline
   - Phone calls vs. baseline
   - Form submissions vs. baseline

#### Week 2-4: Weekly Monitoring

**Weekly Report (Every Monday):**
1. Compare Search Console metrics to pre-migration baseline
2. Compare GA4 metrics to pre-migration baseline
3. Review any SEO ranking changes (use rank tracker if available)
4. Check for new Search Console messages
5. Review Vercel error logs for patterns
6. Business metrics trend analysis

### Automated Alerts Configuration

#### Search Console Alerts
Set up email alerts for:
- **Critical:** Index coverage errors increase by >5 pages
- **Critical:** Core Web Vitals "Poor" URLs increase by >10
- **Warning:** Mobile usability errors increase by >5
- **Info:** New manual actions (should never happen)

#### Google Analytics 4 Alerts
Set up custom alerts for:
- **Critical:** Daily sessions drop >30% vs. 7-day average
- **Critical:** Daily users drop >30% vs. 7-day average
- **Critical:** Conversion rate (scheduler opens) drops >40%
- **Warning:** Bounce rate increases >20% vs. baseline
- **Warning:** Average session duration drops >30%
- **Warning:** Pages per session drops >20%

#### Vercel Monitoring Alerts
Set up alerts for:
- **Critical:** Error rate >5% of requests
- **Critical:** Response time >5 seconds (p95)
- **Warning:** 404 rate >2% of requests
- **Info:** Deployment failures

#### GTM Tracking Alerts
Set up GA4 debugging alerts for:
- **Critical:** ServiceTitan scheduler event stops firing
- **Critical:** Phone click events stop firing
- **Warning:** Page view events drop >50%

### Partial Failure Runbooks

#### Runbook 1: Specific Pages Return 404

**Symptoms:**
- Small number of pages return 404 errors
- Most pages working fine
- Search Console shows new 404 errors

**Diagnosis Steps:**
1. Identify affected URLs from Vercel logs
2. Check if URLs match expected pattern
3. Verify files exist in Next.js app directory
4. Check `generateStaticParams` includes affected pages

**Fix Procedures:**
- **If 1-5 pages affected:** Hot-fix by adding missing page files → Deploy
- **If 6-20 pages affected:** Fix root cause in page generation → Deploy
- **If >20 pages affected:** Consider partial rollback, fix in staging

**Rollback Threshold:** >20 pages (>13% of site) → Partial rollback required

#### Runbook 2: Meta Tags Missing on Some Pages

**Symptoms:**
- Pages load correctly
- Content displays fine
- Meta tags missing in View Source on some pages
- Search Console shows incomplete index

**Diagnosis Steps:**
1. Check affected page types (service, blog, location)
2. Review `generateMetadata()` function for those pages
3. Test in development environment
4. Check for TypeScript errors in metadata generation

**Fix Procedures:**
- **If single page type affected:** Fix metadata function → Deploy
- **If multiple types affected:** Fix utility function → Deploy
- **If all pages affected:** Immediate rollback required

**Rollback Threshold:** >50 pages (>33% of site) → Full rollback required

#### Runbook 3: Schemas Missing from HTML

**Symptoms:**
- Pages load fine
- Meta tags present
- JSON-LD schemas not in View Source
- Google Rich Results Test shows errors

**Diagnosis Steps:**
1. Inspect server-side rendering logs
2. Check schema generation utilities
3. Verify JSX `<script>` tags rendering
4. Test in browser DevTools

**Fix Procedures:**
- **If single schema type affected:** Fix schema utility → Deploy
- **If multiple types affected:** Review schema injection pattern → Deploy
- **If all schemas missing:** Immediate rollback required

**Rollback Threshold:** All schemas missing → Immediate rollback

#### Runbook 4: Conversion Tracking Broken

**Symptoms:**
- Pages load fine
- SEO elements correct
- ServiceTitan scheduler not opening / DNI not working / GTM not firing
- Conversion metrics drop to near zero

**Diagnosis Steps:**
1. Check GTM container ID in Next.js config
2. Verify GTM tags firing in Tag Assistant
3. Test ServiceTitan embed code in browser console
4. Check DNI script loading
5. Review Vercel environment variables

**Fix Procedures:**
- **If GTM issue:** Fix container ID → Deploy (ETA: 15 min)
- **If ServiceTitan embed issue:** Fix embed code → Deploy (ETA: 30 min)
- **If DNI issue:** Fix DNI script → Deploy (ETA: 30 min)
- **If all broken:** Immediate rollback → Fix in staging

**Rollback Threshold:** Conversions drop >80% for >2 hours → Immediate rollback

#### Runbook 5: Traffic Drop >30%

**Symptoms:**
- GA4 shows traffic drop >30% vs. baseline
- Pages loading correctly
- No obvious errors

**Diagnosis Steps:**
1. Check Search Console for index coverage changes
2. Verify all URLs still accessible
3. Check Core Web Vitals for performance regression
4. Review Vercel logs for elevated error rates
5. Test site speed with Lighthouse
6. Check if Google re-indexed site yet

**Fix Procedures:**
- **If performance regression:** Optimize images/code → Deploy
- **If index coverage issues:** Submit sitemap → Monitor 24h
- **If URLs changed unexpectedly:** Fix routing → Deploy
- **If no clear cause found:** Monitor 48h (could be normal fluctuation)

**Rollback Threshold:** Traffic drop >50% sustained for >48 hours → Full rollback

#### Runbook 6: Search Console Index Coverage Drops

**Symptoms:**
- Search Console shows indexed pages dropping
- "Excluded" or "Error" pages increasing
- Crawl stats show issues

**Diagnosis Steps:**
1. Review specific errors in Index Coverage report
2. Check robots.txt and sitemap.xml
3. Verify canonical URLs correct
4. Test affected URLs in Google Search Console URL Inspection Tool
5. Review server response codes

**Fix Procedures:**
- **If robots.txt blocking:** Fix robots.txt → Deploy → Request re-index
- **If canonical issues:** Fix canonical URL generation → Deploy
- **If server errors:** Fix error handling → Deploy
- **If "Excluded by noindex":** Fix metadata robots tags → Deploy

**Rollback Threshold:** >30 pages (>20% of site) excluded → Consider rollback

### Full Rollback Procedure

#### Trigger Conditions for Immediate Rollback

Rollback immediately if ANY of these occur:
1. **Critical SEO Failure:** >50 pages return 404 or missing meta tags
2. **Critical Conversion Failure:** Conversions drop >80% for >2 hours
3. **Critical Technical Failure:** Site-wide errors, pages not loading
4. **Critical Index Failure:** >50% of pages de-indexed in Search Console
5. **Critical Traffic Failure:** >60% traffic drop sustained for >24 hours

#### Rollback Steps (Vercel Instant Rollback)

**Time to Complete: 5-10 minutes**

1. **Step 1: Revert Deployment (1 minute)**
   - Go to Vercel Dashboard → Deployments
   - Find last known good deployment (tagged `pre-migration`)
   - Click "Promote to Production"
   - Confirm rollback

2. **Step 2: Verify Old Site Live (2 minutes)**
   - Check homepage loads
   - Check 5 random service pages
   - Check 2 random blog posts
   - Verify ServiceTitan scheduler works
   - Verify DNI phone numbers work

3. **Step 3: Notify Stakeholders (2 minutes)**
   - Send email/Slack to team: "Migration rolled back due to [ISSUE]. Old site restored. Zero data loss. Investigating issue."
   - Update status page if applicable

4. **Step 4: Monitor Traffic Recovery (30 minutes)**
   - Watch GA4 real-time users return to normal
   - Check Search Console crawl rate normalizes
   - Verify conversions tracking correctly
   - Monitor for 30 minutes to ensure stability

5. **Step 5: Post-Mortem Analysis (1 hour)**
   - Document what went wrong
   - Identify root cause
   - Determine fix required
   - Estimate time to fix and re-deploy
   - Plan next migration attempt

6. **Step 6: Fix in Staging (Variable)**
   - Reproduce issue in staging environment
   - Implement fix
   - Test thoroughly
   - Validate fix resolves root cause
   - Plan re-deployment

#### Alternative Rollback: DNS Change (If Vercel Not Available)

**Time to Complete: 1-4 hours (DNS propagation)**

1. Update DNS A/CNAME records to point back to Replit
2. Wait for DNS propagation (check with DNS checker tools)
3. Verify old site accessible on production domain
4. Monitor traffic recovery
5. Same Steps 3-6 above

### Traffic Recovery Monitoring

#### Post-Rollback Recovery Metrics

**Hour 1-6 After Rollback:**
- [ ] GA4 real-time users back to baseline ±20%
- [ ] ServiceTitan scheduler opens tracking correctly
- [ ] Phone clicks tracking correctly
- [ ] No JavaScript console errors

**Day 1-3 After Rollback:**
- [ ] Daily sessions back to baseline ±15%
- [ ] Daily users back to baseline ±15%
- [ ] Conversion rate back to baseline ±20%
- [ ] Search Console crawl stats normal

**Week 1 After Rollback:**
- [ ] All metrics stabilized at pre-migration baseline
- [ ] No lingering SEO issues
- [ ] Index coverage back to 153 pages
- [ ] Core Web Vitals back to baseline

### Success Criteria: No Rollback Needed

**Migration successful if after 7 days:**
1. ✅ All 153 pages indexed in Search Console
2. ✅ Traffic within ±10% of baseline
3. ✅ Conversions within ±15% of baseline
4. ✅ Core Web Vitals stable or improved
5. ✅ Zero critical errors in logs
6. ✅ All schemas in HTML verified
7. ✅ All meta tags in HTML verified
8. ✅ Client confirms conversions tracking correctly

### Emergency Contacts & Documentation

#### Escalation Path
1. **Level 1 (Minor issues):** Development team handles
2. **Level 2 (Moderate issues):** Development lead + client notified
3. **Level 3 (Critical issues):** Immediate rollback + client briefing
4. **Level 4 (Business impact):** Full rollback + executive briefing

#### Documentation During Crisis
- [ ] Create incident log (Google Doc)
- [ ] Screenshot all error states
- [ ] Export all relevant logs (Vercel, GA4, Search Console)
- [ ] Document timeline of events
- [ ] Document decisions made and rationale
- [ ] Document lessons learned for next attempt

---

**This comprehensive monitoring and rollback strategy ensures:**
- ✅ Issues detected within minutes
- ✅ Rollback possible within 5-10 minutes
- ✅ Zero data loss guaranteed
- ✅ Business continuity maintained
- ✅ Clear decision thresholds for rollback
- ✅ Automated alerts catch problems early
- ✅ Detailed runbooks for common failure modes

---

## Appendix A: Dependencies Comparison

### Current Package.json Dependencies
All these will work in Next.js:

| Package | Current Version | Next.js Compatible | Notes |
|---------|----------------|-------------------|-------|
| react | 18.3.1 | ✅ Yes | Same version |
| react-dom | 18.3.1 | ✅ Yes | Same version |
| typescript | 5.6.3 | ✅ Yes | Same version |
| tailwindcss | 3.4.17 | ✅ Yes | Works perfectly |
| @tanstack/react-query | 5.60.5 | ✅ Yes | Same version |
| lucide-react | 0.453.0 | ✅ Yes | Same version |
| @radix-ui/* | Various | ✅ Yes | All components work |
| wouter | 3.3.5 | ❌ No | Replace with next/link |
| react-helmet-async | 2.0.5 | ❌ No | Replace with Metadata API |
| vite | 5.4.20 | ❌ No | Next.js has built-in bundler |
| express | 4.21.2 | ⚠️ Partial | Only for API routes if needed |

### New Dependencies for Next.js
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "next-themes": "^0.4.6"
  }
}
```

### Dependencies to Remove
```json
{
  "remove": [
    "wouter",
    "react-helmet-async",
    "vite",
    "@vitejs/plugin-react",
    "express" (unless needed for custom API)
  ]
}
```

---

## Appendix B: URL Mapping

### All URLs Remain Identical

**Critical:** Next.js supports exact same URL structure:

| Current URL | Next.js URL | Status |
|------------|-------------|--------|
| `/` | `/` | ✅ Identical |
| `/hvac-tucson` | `/hvac-tucson` | ✅ Identical |
| `/about-us` | `/about-us` | ✅ Identical |
| `/blog/hvac/air-filter-guide` | `/blog/hvac/air-filter-guide` | ✅ Identical |

**No redirects needed!** All URLs stay the same.

---

## Appendix C: Migration Scripts

### Script Locations
```
scripts/
├── convert-metadata.ts       # Convert MetaHead to generateMetadata
├── convert-schemas.ts         # Move schemas to server-side
├── update-imports.ts          # Update wouter to next/link
├── migrate-structure.ts       # Copy files to new structure
├── test-seo.ts               # Automated SEO testing
├── validate-schemas.ts        # Schema validation
└── compare-html.ts           # Compare current vs Next.js HTML
```

---

## Success Criteria

### Migration Complete When:
1. ✅ All 153 pages deployed
2. ✅ All meta tags in initial HTML
3. ✅ All schemas in initial HTML
4. ✅ All URLs working
5. ✅ All internal links working
6. ✅ All conversions tracking
7. ✅ All FAQs rendering (704 total)
8. ✅ All blog posts accessible (231 total)
9. ✅ Lighthouse score 90+ (SEO)
10. ✅ Zero console errors
11. ✅ Mobile responsive 100%
12. ✅ Core Web Vitals pass
13. ✅ Search Console submitted
14. ✅ Analytics tracking
15. ✅ Zero data loss verified

---

## Document Status

**Version:** 1.0  
**Last Updated:** [Current Date]  
**Status:** Ready for Review → Execution  
**Next Step:** Architect review → Begin Phase 1

**This plan guarantees ZERO data loss and preserves every byte of SEO/AI SEO optimization work.**
