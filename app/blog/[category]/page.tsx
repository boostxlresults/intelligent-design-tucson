import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Category name mapping
const categoryNames: Record<string, string> = {
  'hvac': 'HVAC',
  'plumbing': 'Plumbing',
  'solar': 'Solar',
  'electrical': 'Electrical',
  'roofing': 'Roofing',
  'home-tips': 'Home Tips',
};

const categoryDescriptions: Record<string, string> = {
  'hvac': 'Expert HVAC tips, guides, and advice for Tucson homeowners. Learn about air conditioning, heating, and indoor air quality.',
  'plumbing': 'Professional plumbing advice and solutions for common household issues. From drain cleaning to water heater repair.',
  'solar': 'Everything you need to know about solar energy in Arizona. Installation guides, cost breakdowns, and solar incentives.',
  'electrical': 'Electrical safety tips, troubleshooting guides, and expert advice for your home electrical system.',
  'roofing': 'Roofing maintenance, repair, and replacement guides for Arizona homes. Protect your home from the desert sun.',
  'home-tips': 'General home maintenance tips and seasonal guides to keep your Tucson home in perfect condition year-round.',
};

interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  heroImage?: string;
  tags?: string[];
  excerpt?: string;
}

// Generate static params for all blog categories
export async function generateStaticParams() {
  return Object.keys(categoryNames).map((category) => ({
    category,
  }));
}

async function getCategoryPosts(category: string): Promise<BlogPostSummary[]> {
  try {
    const categoryPath = path.join(process.cwd(), 'public', 'content', 'blog', category);
    const files = await fs.readdir(categoryPath);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    const posts = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = path.join(categoryPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const { data } = matter(content);
        
        // Calculate reading time
        const wordsPerMinute = 200;
        const words = content.trim().split(/\s+/).length;
        const readingTime = Math.ceil(words / wordsPerMinute);
        
        return {
          slug: file.replace('.md', ''),
          title: data.title || 'Untitled',
          description: data.description || '',
          publishedAt: data.publishedAt || data.date || new Date().toISOString(),
          readingTime,
          heroImage: data.heroImage,
          tags: data.tags || [],
          excerpt: data.excerpt || data.description,
        };
      })
    );
    
    // Sort by date, newest first
    return posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch (error) {
    console.error(`Error loading posts for category ${category}:`, error);
    return [];
  }
}

// Metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  
  if (!categoryNames[category]) {
    return {
      title: 'Category Not Found',
    };
  }
  
  const categoryName = categoryNames[category];
  const description = categoryDescriptions[category] || `Browse all ${categoryName} articles and guides from Intelligent Design.`;
  
  return generateSEOMetadata({
    title: `${categoryName} Blog | Intelligent Design Tucson`,
    description,
    canonicalUrl: `https://intelligentdesignac.com/blog/${category}`,
    keywords: [categoryName, 'Tucson', 'Arizona', 'home services', 'blog', 'articles'],
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  
  if (!categoryNames[category]) {
    notFound();
  }
  
  const categoryName = categoryNames[category];
  const posts = await getCategoryPosts(category);
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-foreground" data-testid="link-breadcrumb-blog">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground" data-testid={`text-breadcrumb-${category}`}>
                {categoryName}
              </span>
            </div>
          </div>
        </nav>
        
        {/* Category Header */}
        <section className="bg-card border-b border-border py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-category-title">
              {categoryName} Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl" data-testid="text-category-description">
              {categoryDescriptions[category]}
            </p>
            <div className="mt-4 text-sm text-muted-foreground" data-testid="text-post-count">
              {posts.length} {posts.length === 1 ? 'article' : 'articles'}
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground" data-testid="text-no-posts">
                  No articles found in this category yet.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => {
                  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  });
                  
                  return (
                    <Card
                      key={post.slug}
                      className="hover-elevate overflow-hidden flex flex-col"
                      data-testid={`card-post-${post.slug}`}
                    >
                      <Link href={`/blog/${category}/${post.slug}`} className="flex flex-col h-full">
                        {post.heroImage && (
                          <div className="aspect-video bg-muted overflow-hidden">
                            <img
                              src={post.heroImage}
                              alt={post.title}
                              className="w-full h-full object-cover"
                              data-testid={`img-hero-${post.slug}`}
                            />
                          </div>
                        )}
                        
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <time dateTime={post.publishedAt} data-testid={`text-date-${post.slug}`}>
                                {publishedDate}
                              </time>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span data-testid={`text-time-${post.slug}`}>
                                {post.readingTime} min
                              </span>
                            </div>
                          </div>
                          
                          <h2 className="text-xl font-bold text-foreground mb-2 line-clamp-2" data-testid={`text-title-${post.slug}`}>
                            {post.title}
                          </h2>
                          
                          {post.excerpt && (
                            <p className="text-muted-foreground mb-4 line-clamp-3 flex-1" data-testid={`text-excerpt-${post.slug}`}>
                              {post.excerpt}
                            </p>
                          )}
                          
                          <div className="mt-auto">
                            <Button variant="ghost" size="sm" className="p-0 h-auto hover:no-default-hover-elevate" data-testid={`button-read-${post.slug}`}>
                              Read More →
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>
    </div>
  );
}
