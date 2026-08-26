import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Clock, Calendar, ChevronRight, User, Thermometer, Droplets, Sun, Zap, Home as HomeIcon, Lightbulb, Flame, PipetteIcon, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import TrustBar from "@/components/content/TrustBar";
import TableOfContents from "@/components/navigation/TableOfContents";
import FloatingTOCButton from "@/components/navigation/FloatingTOCButton";
import RelatedPosts from "@/components/blog/RelatedPosts";
import RelatedServices from "@/components/blog/RelatedServices";
import PreferredSourceBadge from "@/components/PreferredSourceBadge";

import { parseMarkdown, type ParsedBlogPost, generateArticleSchema, generateBreadcrumbSchema, generateVideoSchema } from '@/lib/markdownParser';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import { promises as fs } from 'fs';
import path from 'path';

// Category icons for fallback display
const categoryIcons: Record<string, typeof Thermometer> = {
  'hvac': Thermometer,
  'plumbing': Droplets,
  'solar': Sun,
  'electrical': Zap,
  'roofing': HomeIcon,
  'home-tips': Lightbulb,
  'water-heater': Flame,
  'drain-sewer': PipetteIcon,
  'indoor-air-quality': Wind,
};

// Default hero images for each category when specific post image is missing
const categoryDefaultImages: Record<string, string> = {
  'hvac': '/generated_images/ac_maintenance_expert_tips.png',
  'plumbing': '/generated_images/choosing_right_plumber.png',
  'solar': '/generated_images/choosing_solar_installer_steps.png',
  'electrical': '/generated_images/electrical_panel_upgrade.png',
  'roofing': '/generated_images/asphalt_shingle_roof_detail_d24441ea.png',
  'home-tips': '/generated_images/home_energy_audit.png',
  'water-heater': '/generated_images/tankless_water_heater_benefits.png',
  'drain-sewer': '/generated_images/drain_cleaning_tools_guide.png',
  'indoor-air-quality': '/generated_images/indoor_air_quality_health.png',
};

// Check if an image file exists in the public directory
async function imageExists(imagePath: string | undefined): Promise<boolean> {
  if (!imagePath) return false;
  try {
    const filePath = path.join(process.cwd(), 'public', imagePath.replace(/^\//, ''));
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Category name mapping
const categoryNames: Record<string, string> = {
  hvac: 'HVAC & Air Conditioning',
  solar: 'Solar Energy',
  plumbing: 'Plumbing',
  roofing: 'Roofing',
  electrical: 'Electrical',
  'home-tips': 'Home Tips',
  'water-heater': 'Water Heater',
  'drain-sewer': 'Drain & Sewer',
  'indoor-air-quality': 'Indoor Air Quality',
};

// Transform attached_assets paths to public paths for Next.js Image
function normalizeHeroImagePath(imagePath: string | undefined): string | undefined {
  if (!imagePath) return undefined;
  // Convert /attached_assets/generated_images/... to /generated_images/...
  if (imagePath.startsWith('/attached_assets/generated_images/')) {
    return imagePath.replace('/attached_assets/generated_images/', '/generated_images/');
  }
  return imagePath;
}

// All blog categories
const allCategories = ['hvac', 'plumbing', 'solar', 'electrical', 'roofing', 'home-tips', 'water-heater', 'drain-sewer', 'indoor-air-quality'];

// Generate static params for all blog posts
export async function generateStaticParams() {
  const params: Array<{ category: string; slug: string }> = [];

  for (const category of allCategories) {
    try {
      const dirPath = path.join(process.cwd(), 'public', 'content', 'blog', category);
      const files = await fs.readdir(dirPath);
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      for (const file of mdFiles) {
        const slug = file.replace('.md', '');
        params.push({ category, slug });
      }
    } catch (error) {
      // Category directory may not exist yet
    }
  }

  return params;
}

interface RelatedPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  heroImage?: string;
  readingTime: number;
}

async function getRelatedPosts(category: string, currentSlug: string): Promise<RelatedPost[]> {
  try {
    const dirPath = path.join(process.cwd(), 'public', 'content', 'blog', category);
    const files = await fs.readdir(dirPath);
    const mdFiles = files.filter(file => file.endsWith('.md') && file !== `${currentSlug}.md`);
    
    const posts = await Promise.all(
      mdFiles.slice(0, 6).map(async (file) => {
        const filePath = path.join(dirPath, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const parsed = parseMarkdown(content);
        
        return {
          slug: file.replace('.md', ''),
          category,
          title: parsed.frontmatter.title || 'Untitled',
          description: parsed.frontmatter.description || '',
          heroImage: parsed.frontmatter.heroImage,
          readingTime: parsed.readingTime,
        };
      })
    );
    
    return posts.slice(0, 3);
  } catch (error) {
    return [];
  }
}

// Server-side blog post loader
async function getBlogPost(category: string, slug: string): Promise<ParsedBlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'content', 'blog', category, `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    return parseMarkdown(content);
  } catch (error) {
    console.error(`Error loading blog post: ${category}/${slug}`, error);
    return null;
  }
}

// Server-side metadata generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const blogPost = await getBlogPost(category, slug);

  if (!blogPost) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  const categoryName = categoryNames[category] || category;
  
  // Generate metadata for blog post
  // Use frontmatter canonicalUrl if it differs from the page URL (for duplicate consolidation)
  const pageCanonical = blogPost.frontmatter.canonicalUrl && 
    blogPost.frontmatter.canonicalUrl !== `https://www.idesignac.com/blog/${category}/${slug}` &&
    blogPost.frontmatter.canonicalUrl !== `/blog/${category}/${slug}`
    ? blogPost.frontmatter.canonicalUrl.startsWith('http') 
      ? blogPost.frontmatter.canonicalUrl 
      : `https://www.idesignac.com${blogPost.frontmatter.canonicalUrl}`
    : `https://www.idesignac.com/blog/${category}/${slug}`;

  return generateSEOMetadata({
    title: `${blogPost.frontmatter.title} | Intelligent Design Tucson`,
    description: blogPost.frontmatter.description,
    keywords: blogPost.frontmatter.tags,
    canonicalUrl: pageCanonical,
    imageUrl: blogPost.frontmatter.heroImage,
    type: 'article' as const,
    publishedTime: blogPost.frontmatter.publishedAt,
    author: 'Intelligent Design Tucson',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const blogPost = await getBlogPost(category, slug);

  if (!blogPost) {
    notFound();
  }

  const { frontmatter, htmlContent, readingTime, tableOfContents } = blogPost;
  
  // Get related posts
  const relatedPosts = await getRelatedPosts(category, slug);
  
  // Check if hero image exists
  const normalizedHeroImage = normalizeHeroImagePath(frontmatter.heroImage);
  const heroImageExists = await imageExists(normalizedHeroImage);
  const CategoryIcon = categoryIcons[category] || Lightbulb;
  
  // Convert tableOfContents to TOC items format
  const tocItems = tableOfContents.map(item => ({
    id: item.id,
    label: item.text,
    level: item.level
  }));
  const currentUrl = frontmatter.canonicalUrl || `https://www.idesignac.com/blog/${category}/${slug}`;
  const categoryName = categoryNames[category] || category;

  // Generate schemas server-side
  const articleSchema = generateArticleSchema(blogPost, currentUrl);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.idesignac.com/' },
    { name: 'Blog', url: 'https://www.idesignac.com/blog' },
    { name: categoryName, url: `https://www.idesignac.com/blog/${category}` },
    { name: frontmatter.title, url: currentUrl }
  ]);
  const videoSchema = frontmatter.video ? generateVideoSchema(frontmatter.video, currentUrl) : null;

  // Format date (use publishedAt from frontmatter)
  const publishedDate = new Date(frontmatter.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* JSON-LD Schemas - Server-side rendered */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {videoSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
      )}

      <div className="min-h-screen flex flex-col bg-background">

        <main className="flex-1">
          {/* Hero Image Section - Optimized for LCP */}
          <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
            {normalizedHeroImage && heroImageExists ? (
              <>
                <Image
                  src={normalizedHeroImage}
                  alt={frontmatter.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                  data-testid="img-blog-hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </>
            ) : categoryDefaultImages[category] ? (
              <>
                <Image
                  src={categoryDefaultImages[category]}
                  alt={`${categoryName} article`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover opacity-90"
                  data-testid="img-blog-hero-default"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                <CategoryIcon className="w-32 h-32 text-primary/40" />
              </div>
            )}
          </section>

          {/* Breadcrumb Navigation */}
          <nav className="border-b border-border bg-card">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-foreground" data-testid="link-breadcrumb-blog">
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link
                  href={`/blog/${category}`}
                  className="hover:text-foreground"
                  data-testid={`link-breadcrumb-${category}`}
                >
                  {categoryName}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground truncate" data-testid="text-breadcrumb-current">
                  {frontmatter.title}
                </span>
              </div>
            </div>
          </nav>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={frontmatter.publishedAt} data-testid="text-publish-date">
                  {publishedDate}
                </time>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4" />
                <span data-testid="text-read-time">{readingTime} min read</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-article-title">
                {frontmatter.title}
              </h1>

              {frontmatter.excerpt && (
                <p className="text-xl text-muted-foreground mb-6" data-testid="text-article-excerpt">
                  {frontmatter.excerpt}
                </p>
              )}

              {/* Author Attribution - E-A-T Signal */}
              <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground" data-testid="text-author-name">
                    Written by the Intelligent Design Team
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid="text-author-credentials">
                    46+ years of experience | NATE-certified technicians | BBB A+ rated
                  </p>
                </div>
              </div>
              
              {/* Table of Contents - Jump to Section */}
              {tocItems.length > 0 && (
                <TableOfContents 
                  items={tocItems} 
                  className="mt-6"
                  defaultExpanded={true}
                />
              )}
              
              {/* Trigger point for floating TOC button */}
              <div id="toc-trigger-point" aria-hidden="true" />
            </header>
            
            {/* Floating TOC Button */}
            {tocItems.length > 0 && (
              <FloatingTOCButton items={tocItems} triggerElementId="toc-trigger-point" />
            )}

            {/* Article Body */}
            <div
              className="prose prose-lg prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:text-foreground prose-blockquote:text-muted-foreground prose-code:text-foreground max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              data-testid="content-article-body"
            />

            {/* Tags */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {frontmatter.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      data-testid={`tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Google Preferred Sources Badge */}
            <PreferredSourceBadge />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <RelatedPosts posts={relatedPosts} currentSlug={slug} />
            )}

            {/* Related Services & Areas - Internal Linking for SEO */}
            <RelatedServices category={category} />
          </article>

          {/* CTA Section */}
          <section className="bg-primary text-primary-foreground py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Help with {categoryName}?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Our expert technicians are available 24/7 to help with all your home service needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/10 backdrop-blur border-primary-foreground text-primary-foreground hover:bg-background/20"
                  asChild
                >
                  <Link href="/contact" data-testid="button-contact">
                    Contact Us
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold hover:bg-yellow-500"
                  asChild
                >
                  <a href="tel:5203332665" data-testid="button-call-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Trust Bar */}
          <TrustBar />
        </main>

      </div>
    </>
  );
}
