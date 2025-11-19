# SEO Utilities for Next.js Migration

**⚠️ IMPORTANT:** These utilities are for the FUTURE Next.js migration project, not the current React application.

## Purpose

These utilities eliminate 92 duplicate schema components and standardize SEO implementation across all 153 pages in the Next.js migration.

## Utilities

### 1. generateServiceSchema.ts
Generates Service schema for service pages (69 pages).

**Example:**
```tsx
import { generateServiceSchema } from '@/lib/seo';

const schema = generateServiceSchema({
  serviceName: 'HVAC & Air Conditioning Services in Tucson, AZ',
  description: 'Expert HVAC services...',
  location: 'Tucson',
  services: ['AC Repair', 'AC Installation', 'Maintenance'],
  canonicalUrl: 'https://intelligentdesignhvac.com/hvac-tucson'
});
```

### 2. generateLocationSchema.ts
Generates LocalBusiness schema for location pages (21 pages).

**Example:**
```tsx
import { generateLocationSchema } from '@/lib/seo';

const schema = generateLocationSchema({
  location: 'Tucson',
  services: ['HVAC', 'Plumbing', 'Solar', 'Electrical', 'Roofing'],
  canonicalUrl: 'https://intelligentdesignhvac.com/tucson'
});
```

### 3. generateBreadcrumbs.ts
Generates Breadcrumb schema for all pages (153 pages).

**Example:**
```tsx
import { generateBreadcrumbs } from '@/lib/seo';

const schema = generateBreadcrumbs([
  { name: 'Home', url: '/' },
  { name: 'Tucson Services', url: '/tucson' },
  { name: 'HVAC Tucson', url: '/hvac-tucson' }
]);
```

### 4. generateFAQSchema.ts
Generates FAQPage schema from FAQ data (service pages with FAQs).

**Example:**
```tsx
import { generateFAQSchema } from '@/lib/seo';
import { hvacLocationFAQs } from '@/data/faqs/hvac';

const schema = generateFAQSchema(hvacLocationFAQs);
```

### 5. generateMetadata.ts
Standardizes Next.js Metadata API usage across all pages.

**Example:**
```tsx
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'HVAC Services Tucson AZ | Air Conditioning Repair & Installation',
  description: 'Expert HVAC & AC services in Tucson...',
  canonicalUrl: '/hvac-tucson',
  keywords: ['hvac tucson', 'ac repair tucson', 'air conditioning tucson']
});
```

### 6. generateArticleSchema.ts
Generates Article schema for blog posts (231 posts).

**Example:**
```tsx
import { generateArticleSchema } from '@/lib/seo';

const schema = generateArticleSchema({
  title: 'Ultimate Guide to HVAC Maintenance',
  description: 'Learn everything about HVAC maintenance...',
  publishedDate: '2024-01-15T08:00:00Z',
  modifiedDate: '2024-01-20T10:30:00Z',
  authorName: 'Intelligent Design Team',
  imageUrl: '/blog/hvac-maintenance-guide.jpg',
  canonicalUrl: '/blog/hvac/hvac-maintenance-guide'
});
```

## Complete Page Example

Here's how all utilities work together in a Next.js page:

```tsx
// app/(service-locations)/hvac-tucson/page.tsx
import { generateMetadata, generateServiceSchema, generateBreadcrumbs, generateFAQSchema } from '@/lib/seo';
import { hvacLocationFAQs } from '@/data/faqs/hvac';

// Server-side metadata generation
export const metadata = generateMetadata({
  title: 'HVAC Services Tucson AZ | Air Conditioning Repair & Installation',
  description: 'Expert HVAC & AC services in Tucson, AZ...',
  canonicalUrl: '/hvac-tucson'
});

// Server component
export default function HVACTucsonPage() {
  // Generate all schemas server-side
  const serviceSchema = generateServiceSchema({
    serviceName: 'HVAC & Air Conditioning Services in Tucson, AZ',
    description: metadata.description,
    location: 'Tucson',
    services: ['AC Repair', 'AC Installation', 'Maintenance', 'Ductless Mini-Splits'],
    canonicalUrl: 'https://intelligentdesignhvac.com/hvac-tucson'
  });

  const breadcrumbSchema = generateBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Tucson Services', url: '/tucson' },
    { name: 'HVAC Tucson', url: '/hvac-tucson' }
  ]);

  const faqSchema = generateFAQSchema(hvacLocationFAQs);

  return (
    <>
      {/* Inject schemas in initial HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Page content */}
      <main>
        {/* All your page content */}
      </main>
    </>
  );
}
```

## Benefits

### Before (Current React + 92 Schema Components):
```tsx
// client/src/pages/HVACTucson.tsx
import ACServiceSchema from '@/components/ACServiceSchema';
import { useEffect } from 'react';

export default function HVACTucson() {
  useEffect(() => {
    // Client-side schema injection
    const script = document.createElement('script');
    script.textContent = JSON.stringify({ /* hardcoded schema */ });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  
  return (
    <>
      <ACServiceSchema />  {/* One of 92 duplicate components */}
      {/* content */}
    </>
  );
}
```

### After (Next.js + SEO Utilities):
```tsx
// app/hvac-tucson/page.tsx
import { generateServiceSchema, generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({ /* config */ });

export default function HVACTucsonPage() {
  const schema = generateServiceSchema({ /* config */ });
  
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* content */}
    </>
  );
}
```

**Improvements:**
✅ Schemas in initial HTML (not client-side)  
✅ 92 components → 6 utilities  
✅ Single source of truth for NAP data  
✅ Type-safe with TypeScript  
✅ Easy to maintain and update  
✅ Perfect for AI search engines (ChatGPT, Perplexity, Gemini)  

## Migration Usage

When migrating a page from React to Next.js:

1. **Replace `<MetaHead>` with `generateMetadata()`:**
   ```tsx
   // Before
   <MetaHead title="..." description="..." />
   
   // After
   export const metadata = generateMetadata({ title: "...", description: "..." });
   ```

2. **Replace `useEffect` schema injection with server-side:**
   ```tsx
   // Before
   useEffect(() => {
     const schema = { /* ... */ };
     // DOM manipulation
   }, []);
   
   // After
   const schema = generateServiceSchema({ /* ... */ });
   return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
   ```

3. **Replace hardcoded schema components:**
   ```tsx
   // Before
   import ACRepairSchema from '@/components/ACRepairSchema';
   <ACRepairSchema />
   
   // After
   const schema = generateServiceSchema({ /* config */ });
   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
   ```

## Files

- `constants.ts` - Single source of truth for NAP data
- `generateServiceSchema.ts` - Service schema factory (69 pages)
- `generateLocationSchema.ts` - LocalBusiness schema factory (21 pages)
- `generateBreadcrumbs.ts` - Breadcrumb schema factory (all pages)
- `generateFAQSchema.ts` - FAQ schema factory (service pages)
- `generateMetadata.ts` - Next.js metadata factory (all pages)
- `generateArticleSchema.ts` - Article schema factory (231 blogs)
- `index.ts` - Barrel export for all utilities

## Zero Data Loss Guarantee

These utilities preserve 100% of current SEO implementation while improving:
- All 704 FAQs → `generateFAQSchema()`
- All meta tags → `generateMetadata()`
- All service schemas → `generateServiceSchema()`
- All location schemas → `generateLocationSchema()`
- All breadcrumbs → `generateBreadcrumbs()`
- All blog schemas → `generateArticleSchema()`

**Every byte of SEO work is preserved and enhanced.**
