# Blog System Migration Guide
## From REST API + Client Fetch → Next.js Filesystem SSR

**Objective:** Convert 231 markdown blog posts from client-side REST API fetching to Next.js server-side static generation with filesystem-based data sourcing.

---

## Current Blog Architecture (React + Vite)

### Backend: Express API Route
```typescript
// server/routes.ts
app.get("/api/blog/:category/:slug", async (req, res) => {
  const { category, slug } = req.params;
  
  try {
    // Read markdown file from public/content/blog/{category}/{slug}.md
    const filePath = path.join(process.cwd(), 'public/content/blog', category, `${slug}.md`);
    const fileContent = readFileSync(filePath, 'utf-8');
    
    // Parse frontmatter
    const { data: frontmatter, content } = matter(fileContent);
    
    // Convert markdown to HTML
    const htmlContent = marked.parse(content);
    
    // Sanitize HTML
    const cleanHTML = DOMPurify.sanitize(htmlContent);
    
    // Return JSON
    res.json({
      frontmatter,
      content,
      htmlContent: cleanHTML
    });
  } catch (error) {
    res.status(404).json({ error: 'Blog post not found' });
  }
});
```

### Frontend: Client-Side Fetch
```tsx
// client/src/pages/BlogPost.tsx
export default function BlogPost() {
  const { category, slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadPost() {
      const response = await fetch(`/api/blog/${category}/${slug}`);
      const data = await response.json();
      setPost(data);
      setLoading(false);
    }
    loadPost();
  }, [category, slug]);
  
  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;
  
  return (
    <>
      <MetaHead
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        // ... meta tags
      />
      <article dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
    </>
  );
}
```

### Problems with Current Approach

1. ❌ **No SSR:** Meta tags and content not in initial HTML
2. ❌ **Client-Side Rendering:** Requires JavaScript for crawlers
3. ❌ **API Dependency:** Extra network request on every page load
4. ❌ **SEO Issues:** Crawlers might not execute JavaScript
5. ❌ **Performance:** Slower initial page render
6. ❌ **AI Search:** ChatGPT/Perplexity may not see content

---

## Next.js Blog Architecture (Server-Side Static Generation)

### File Structure
```
intelligent-design-nextjs/
├── app/
│   └── blog/
│       ├── page.tsx                    # Blog index
│       ├── [category]/
│       │   ├── page.tsx                # Category listing
│       │   └── [slug]/
│       │       └── page.tsx            # Individual blog post
├── lib/
│   └── blog/
│       ├── getBlogIndex.ts             # Get all posts metadata
│       ├── getPost.ts                  # Get single post
│       ├── getAllPosts.ts              # Get all posts (for SSG)
│       ├── getCategoryPosts.ts         # Get posts by category
│       └── types.ts                    # TypeScript interfaces
├── public/
│   └── content/
│       └── blog/
│           ├── hvac/
│           │   ├── post-1.md
│           │   ├── post-2.md
│           │   └── ...
│           ├── plumbing/
│           ├── solar/
│           ├── electrical/
│           ├── roofing/
│           └── home-tips/
└── data/
    └── blogIndex.json                  # Metadata for all 231 posts
```

### Step 1: Create Blog Utilities

#### lib/blog/types.ts
```typescript
export interface BlogFrontmatter {
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  modifiedDate?: string;
  featured: boolean;
  heroImage?: string;
  canonicalUrl?: string;
  excerpt?: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  frontmatter: BlogFrontmatter;
  content: string;        // Raw markdown
  htmlContent: string;    // Parsed HTML
}

export interface BlogIndexEntry {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishDate: string;
  featured: boolean;
  url: string;
}
```

#### lib/blog/getBlogIndex.ts
```typescript
import { readFileSync } from 'fs';
import path from 'path';
import type { BlogIndexEntry } from './types';

export function getBlogIndex(): BlogIndexEntry[] {
  const indexPath = path.join(process.cwd(), 'data/blogIndex.json');
  const indexContent = readFileSync(indexPath, 'utf-8');
  const index = JSON.parse(indexContent);
  return index.posts || [];
}

export function getBlogIndexByCategory(category: string): BlogIndexEntry[] {
  const allPosts = getBlogIndex();
  return allPosts.filter(post => post.category === category);
}

export function getFeaturedPosts(limit: number = 3): BlogIndexEntry[] {
  const allPosts = getBlogIndex();
  return allPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}
```

#### lib/blog/getPost.ts
```typescript
import { readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';
import type { BlogPost, BlogFrontmatter } from './types';

export async function getPost(category: string, slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(
      process.cwd(),
      'public/content/blog',
      category,
      `${slug}.md`
    );
    
    const fileContent = readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    // Parse markdown to HTML
    const htmlContent = marked.parse(content) as string;
    
    // Sanitize HTML (server-side safe with isomorphic-dompurify)
    const cleanHTML = DOMPurify.sanitize(htmlContent);
    
    return {
      slug,
      category,
      frontmatter: data as BlogFrontmatter,
      content,
      htmlContent: cleanHTML
    };
  } catch (error) {
    console.error(`Error loading blog post ${category}/${slug}:`, error);
    return null;
  }
}
```

#### lib/blog/getAllPosts.ts
```typescript
import { getBlogIndex } from './getBlogIndex';

export async function getAllPosts() {
  const index = getBlogIndex();
  
  // Return params for generateStaticParams
  return index.map(post => ({
    category: post.category,
    slug: post.slug
  }));
}

export async function getAllCategories() {
  const index = getBlogIndex();
  const categories = new Set(index.map(post => post.category));
  return Array.from(categories);
}
```

### Step 2: Create Blog Page (Server Component)

#### app/blog/[category]/[slug]/page.tsx
```tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, getAllPosts } from '@/lib/blog';
import { generateMetadata, generateArticleSchema, generateBreadcrumbs } from '@/lib/seo';

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

// Generate static params for all 231 blog posts
export async function generateStaticParams() {
  return await getAllPosts();
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.category, params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The blog post you are looking for does not exist.'
    };
  }
  
  return generateMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.frontmatter.excerpt || '',
    canonicalUrl: `/blog/${params.category}/${params.slug}`,
    imageUrl: post.frontmatter.heroImage || '/og-image.jpg',
    keywords: post.frontmatter.tags,
    type: 'article',
    publishedTime: post.frontmatter.publishDate,
    modifiedTime: post.frontmatter.modifiedDate,
    author: post.frontmatter.author
  });
}

// Server component - renders on server
export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.category, params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Generate schemas server-side
  const articleSchema = generateArticleSchema({
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.frontmatter.excerpt || '',
    publishedDate: post.frontmatter.publishDate,
    modifiedDate: post.frontmatter.modifiedDate,
    authorName: post.frontmatter.author,
    imageUrl: post.frontmatter.heroImage || '/og-image.jpg',
    canonicalUrl: `https://intelligentdesignhvac.com/blog/${params.category}/${params.slug}`
  });
  
  const breadcrumbSchema = generateBreadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.frontmatter.category, url: `/blog/${params.category}` },
    { name: post.frontmatter.title, url: `/blog/${params.category}/${params.slug}` }
  ]);
  
  return (
    <>
      {/* Inject schemas in initial HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Blog post content */}
      <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <div className="text-muted-foreground">
            <time dateTime={post.frontmatter.publishDate}>
              {new Date(post.frontmatter.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {' • '}
            <span>{post.frontmatter.author}</span>
          </div>
        </header>
        
        <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
      </article>
    </>
  );
}
```

### Step 3: Category Page

#### app/blog/[category]/page.tsx
```tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogIndexByCategory, getAllCategories } from '@/lib/blog';
import { generateMetadata } from '@/lib/seo';

interface Props {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map(category => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryNames: Record<string, string> = {
    hvac: 'HVAC & Air Conditioning',
    plumbing: 'Plumbing',
    solar: 'Solar Energy',
    electrical: 'Electrical',
    roofing: 'Roofing',
    'home-tips': 'Home Tips'
  };
  
  const categoryName = categoryNames[params.category] || params.category;
  
  return generateMetadata({
    title: `${categoryName} Blog | Intelligent Design`,
    description: `Expert tips, guides, and insights about ${categoryName.toLowerCase()}.`,
    canonicalUrl: `/blog/${params.category}`
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const posts = getBlogIndexByCategory(params.category);
  
  if (posts.length === 0) {
    notFound();
  }
  
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        {/* Category name */}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <article key={post.slug} className="border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.category}/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground mb-4">
              {post.description}
            </p>
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString()}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
}
```

### Step 4: Blog Index Page

#### app/blog/page.tsx
```tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogIndex, getFeaturedPosts } from '@/lib/blog';
import { generateMetadata } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Blog | Intelligent Design Tucson',
  description: 'Expert tips, guides, and insights about HVAC, plumbing, solar, electrical, and roofing.',
  canonicalUrl: '/blog'
});

export default function BlogIndexPage() {
  const featuredPosts = getFeaturedPosts(6);
  const allPosts = getBlogIndex();
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map(post => (
            <article key={post.slug} className="border rounded-lg p-6">
              {/* Post card */}
            </article>
          ))}
        </div>
      </section>
      
      {/* All Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-6">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map(post => (
            <article key={post.slug} className="border rounded-lg p-6">
              {/* Post card */}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## Migration Checklist

### Pre-Migration
- [ ] Verify all 231 markdown files in `public/content/blog/`
- [ ] Verify `data/blogIndex.json` has all 231 entries
- [ ] Back up current blog system

### Utilities
- [ ] Create `lib/blog/types.ts`
- [ ] Create `lib/blog/getBlogIndex.ts`
- [ ] Create `lib/blog/getPost.ts`
- [ ] Create `lib/blog/getAllPosts.ts`
- [ ] Create `lib/blog/getCategoryPosts.ts`
- [ ] Test all utilities work correctly

### Pages
- [ ] Create `app/blog/page.tsx` (index)
- [ ] Create `app/blog/[category]/page.tsx` (category)
- [ ] Create `app/blog/[category]/[slug]/page.tsx` (post)
- [ ] Test `generateStaticParams` generates all 231 routes
- [ ] Verify metadata on all pages

### Testing
- [ ] Test 10 random blog posts load correctly
- [ ] Verify markdown renders correctly
- [ ] Verify images display properly
- [ ] Test code blocks format correctly
- [ ] Check meta tags in View Source
- [ ] Verify Article schema in HTML
- [ ] Test all internal links work
- [ ] Test category pages work
- [ ] Test blog index works
- [ ] Performance test (Lighthouse)

---

## Benefits of Next.js Approach

### Before (Current React + API):
```
User Request → Client JS loads → Fetch API → Parse markdown → Render
Time: 2-3 seconds | SEO: Poor (no initial HTML) | AI Search: Poor
```

### After (Next.js SSG):
```
User Request → Pre-rendered HTML sent immediately
Time: < 500ms | SEO: Perfect (full HTML) | AI Search: Perfect
```

### Specific Improvements:

1. ✅ **All 231 blog posts pre-rendered to HTML at build time**
2. ✅ **Meta tags in initial HTML (perfect for crawlers)**
3. ✅ **Article schemas in initial HTML (perfect for AI search)**
4. ✅ **Instant page loads (no API calls)**
5. ✅ **Perfect SEO (Google sees everything)**
6. ✅ **AI Search Ready (ChatGPT/Perplexity can cite)**
7. ✅ **Better performance (pre-rendered HTML)**
8. ✅ **No JavaScript required for content**

---

## File Inventory: Zero Data Loss

### Files to Copy (Exact)
```
public/content/blog/           → public/content/blog/
data/blogIndex.json            → data/blogIndex.json
```

### Dependencies Required
```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "marked": "^16.4.1",
    "isomorphic-dompurify": "^2.15.0"
  }
}
```

### Build Configuration
```javascript
// next.config.js
module.exports = {
  // Enable static export if needed
  output: 'standalone',
  
  // Optimize images
  images: {
    domains: ['intelligentdesignhvac.com']
  }
};
```

---

## Migration Timeline

**Estimated Time:** 2 days

### Day 1: Utilities & Structure
- Hour 1-2: Create `lib/blog/` utilities
- Hour 3-4: Test utilities with sample posts
- Hour 5-6: Create page structure
- Hour 7-8: Test `generateStaticParams`

### Day 2: Pages & Testing
- Hour 1-3: Build blog post page
- Hour 4-5: Build category page
- Hour 6-7: Build index page
- Hour 8: Comprehensive testing

---

## Success Criteria

Migration is successful when:

1. ✅ All 231 blog posts accessible at correct URLs
2. ✅ All meta tags in initial HTML (View Source check)
3. ✅ All Article schemas in initial HTML
4. ✅ All markdown renders correctly
5. ✅ All images display correctly
6. ✅ All code blocks format correctly
7. ✅ All internal links work
8. ✅ Category pages work (6 categories)
9. ✅ Blog index works
10. ✅ Lighthouse SEO score 90+
11. ✅ Page loads under 1 second
12. ✅ Zero console errors

**This blog migration guarantees perfect SEO and AI search visibility for all 231 posts.**
