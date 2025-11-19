# Migration Automation Scripts

These scripts automate repetitive tasks during the React → Next.js migration.

## Scripts

### 1. convert-metadata.ts
Converts `<MetaHead>` component usage to Next.js `generateMetadata()` function.

**Usage:**
```bash
tsx scripts/convert-metadata.ts client/src/pages/HVACTucson.tsx app/hvac-tucson/page.tsx
```

**What it does:**
- Extracts props from `<MetaHead>` component
- Generates `generateMetadata()` export
- Removes `<MetaHead>` import and usage
- Adds Next.js `Metadata` import

**Before:**
```tsx
import { MetaHead } from "@/components/MetaHead";

export default function HVACTucson() {
  return (
    <>
      <MetaHead
        title="HVAC Services Tucson"
        description="Expert HVAC services..."
        canonicalUrl="/hvac-tucson"
      />
      {/* content */}
    </>
  );
}
```

**After:**
```tsx
import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: "HVAC Services Tucson",
  description: "Expert HVAC services...",
  canonicalUrl: "/hvac-tucson"
});

export default function HVACTucson() {
  return (
    <>
      {/* content */}
    </>
  );
}
```

---

### 2. convert-schemas.ts
Converts client-side schema injection (useEffect) to server-side JSX.

**Usage:**
```bash
tsx scripts/convert-schemas.ts client/src/pages/HVACTucson.tsx app/hvac-tucson/page.tsx
```

**What it does:**
- Extracts schema objects from `useEffect` blocks
- Generates schema variables in component
- Creates JSX `<script>` tags for schemas
- Removes `useEffect` blocks
- Removes `useEffect` import if no longer needed

**Before:**
```tsx
import { useEffect } from 'react';

export default function HVACTucson() {
  useEffect(() => {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "HVAC Services"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(serviceSchema);
    document.head.appendChild(script);
    
    return () => document.head.removeChild(script);
  }, []);
  
  return <div>Content</div>;
}
```

**After:**
```tsx
export default function HVACTucson() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HVAC Services"
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div>Content</div>
    </>
  );
}
```

---

### 3. update-imports.ts
Updates imports from wouter to Next.js navigation.

**Usage:**
```bash
tsx scripts/update-imports.ts client/src/components/Header.tsx components/layout/Header.tsx
```

**What it does:**
- Replaces `import { Link } from 'wouter'` → `import Link from 'next/link'`
- Replaces `import { useLocation } from 'wouter'` → `import { usePathname } from 'next/navigation'`
- Replaces `<Link to=` → `<Link href=`
- Replaces `useLocation()` → `usePathname()`
- Replaces `setLocation()` → `router.push()`

**Before:**
```tsx
import { Link, useLocation } from 'wouter';

export function Header() {
  const [location, setLocation] = useLocation();
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

**After:**
```tsx
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

---

### 4. migrate-structure.ts
Copies entire directory structure from React to Next.js with conversions.

**Usage:**
```bash
tsx scripts/migrate-structure.ts client/src app
```

**What it does:**
- Recursively copies all files
- Maps React paths to Next.js paths
- Classifies files (page, component, data, utility, asset)
- Applies import updates to all TypeScript files
- Applies metadata/schema conversions to page files
- Creates Next.js directory structure

**File Mappings:**

| React Path | Next.js Path | Type |
|------------|--------------|------|
| `client/src/pages/Home.tsx` | `app/page.tsx` | Page |
| `client/src/pages/HVACTucson.tsx` | `app/(service-locations)/hvac-tucson/page.tsx` | Page |
| `client/src/pages/BlogPost.tsx` | `app/blog/[category]/[slug]/page.tsx` | Page |
| `client/src/components/Header.tsx` | `components/layout/Header.tsx` | Component |
| `client/src/components/ui/button.tsx` | `components/ui/button.tsx` | Component |
| `client/src/data/faqs/hvac.ts` | `data/faqs/hvac.ts` | Data |
| `client/src/lib/utils.ts` | `lib/utils.ts` | Utility |

---

## Batch Processing Examples

### Migrate All Service Pages
```bash
# Create list of service pages
ls client/src/pages/HVAC*.tsx > service-pages.txt
ls client/src/pages/Heating*.tsx >> service-pages.txt
ls client/src/pages/Plumbing*.tsx >> service-pages.txt

# Process each file
while IFS= read -r file; do
  filename=$(basename "$file" .tsx)
  kebab=$(echo "$filename" | sed 's/\([A-Z]\)/-\1/g' | tr '[:upper:]' '[:lower:]' | sed 's/^-//')
  
  tsx scripts/convert-metadata.ts "$file" "app/(service-locations)/$kebab/page.tsx"
  tsx scripts/convert-schemas.ts "app/(service-locations)/$kebab/page.tsx" "app/(service-locations)/$kebab/page.tsx"
done < service-pages.txt
```

### Migrate All Components
```bash
find client/src/components -name "*.tsx" | while read file; do
  dest=$(echo "$file" | sed 's|client/src/components|components|')
  tsx scripts/update-imports.ts "$file" "$dest"
done
```

### Migrate All Data Files
```bash
cp -r client/src/data/* data/
```

---

## Prerequisites

Install tsx globally:
```bash
npm install -g tsx
```

Or use npx:
```bash
npx tsx scripts/convert-metadata.ts [...]
```

---

## Testing Scripts

Before running on production files, test on sample files:

```bash
# Create test directory
mkdir -p test-migration/input
mkdir -p test-migration/output

# Copy a sample file
cp client/src/pages/HVACTucson.tsx test-migration/input/

# Test conversion
tsx scripts/convert-metadata.ts test-migration/input/HVACTucson.tsx test-migration/output/page.tsx
tsx scripts/convert-schemas.ts test-migration/output/page.tsx test-migration/output/page.tsx

# Review output
cat test-migration/output/page.tsx
```

---

## Migration Workflow

**Recommended order:**

1. **Setup** (Day 1)
   ```bash
   # Create Next.js project
   npx create-next-app@latest intelligent-design-nextjs
   
   # Copy utilities and data first
   cp -r lib/seo intelligent-design-nextjs/lib/
   cp -r data/* intelligent-design-nextjs/data/
   ```

2. **Components** (Day 2-3)
   ```bash
   # Migrate all components
   tsx scripts/migrate-structure.ts client/src/components intelligent-design-nextjs/components
   ```

3. **Pages - Pilot** (Day 4)
   ```bash
   # Migrate one page as pilot
   tsx scripts/convert-metadata.ts client/src/pages/HVACTucson.tsx app/hvac-tucson/page.tsx
   tsx scripts/convert-schemas.ts app/hvac-tucson/page.tsx app/hvac-tucson/page.tsx
   
   # Test thoroughly
   npm run dev
   ```

4. **Pages - Batch** (Day 5-14)
   ```bash
   # Migrate all service pages
   # (Use batch processing example above)
   
   # Migrate all blog pages
   # (Use blog migration guide)
   
   # Migrate info pages one by one
   ```

5. **Verification** (Day 15-17)
   ```bash
   # Test all pages
   npm run build
   npm run start
   
   # Check for errors
   grep -r "MetaHead" app/
   grep -r "useEffect" app/ | grep schema
   grep -r "wouter" app/
   ```

---

## Error Handling

Scripts will exit with error code 1 if:
- Input file not found
- Cannot parse metadata/schemas
- Cannot write output file

Check script output for error details.

---

## Limitations

**Manual review still required for:**
- Complex schema logic
- Dynamic metadata generation
- Custom routing patterns
- Special component logic

**Scripts handle 90% of repetitive work, but always review output before deploying.**

---

## Success Verification

After running scripts, verify:

✅ All imports updated (no wouter references)  
✅ All pages have `generateMetadata()` export  
✅ All schemas in JSX `<script>` tags  
✅ No `useEffect` schema injection  
✅ No `<MetaHead>` components  
✅ TypeScript compiles without errors  
✅ Next.js build succeeds  

---

**These scripts save 20-30 hours of manual conversion work across 153 pages.**
