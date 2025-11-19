import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, Clock, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingActions from "@/components/layout/MobileFloatingActions";
import TrustBar from "@/components/content/TrustBar";
import GTM from "@/components/integrations/GTM";
import DNIInjector from "@/components/integrations/DNIInjector";
import { parseBlogPost, type ParsedBlogPost } from '@/lib/markdownParser';
import { generateBlogMetadata } from '@/lib/seo/generateMetadata';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/generateServiceSchema';
import { promises as fs } from 'fs';
import path from 'path';

// Category name mapping
const categoryNames: Record<string, string> = {
  hvac: 'HVAC & Air Conditioning',
  solar: 'Solar Energy',
  plumbing: 'Plumbing',
  roofing: 'Roofing',
  electrical: 'Electrical',
  'home-tips': 'Home Tips',
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const categories = ['hvac', 'plumbing', 'solar', 'electrical', 'roofing', 'home-tips'];
  const params: Array<{ category: string; slug: string }> = [];

  for (const category of categories) {
    try {
      const dirPath = path.join(process.cwd(), 'blog', category);
      const files = await fs.readdir(dirPath);
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      for (const file of mdFiles) {
        const slug = file.replace('.md', '');
        params.push({ category, slug });
      }
    } catch (error) {
      // Category directory may not exist yet
      console.log(`Blog category not found: ${category}`);
    }
  }

  return params;
}

// Server-side blog post loader
async function getBlogPost(category: string, slug: string): Promise<ParsedBlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'blog', category, `${slug}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    return parseBlogPost(content);
  } catch (error) {
    console.error(`Error loading blog post: ${category}/${slug}`, error);
    return null;
  }
}

// Server-side metadata generation
export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string };
}): Promise<Metadata> {
  const blogPost = await getBlogPost(params.category, params.slug);

  if (!blogPost) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  const categoryName = categoryNames[params.category] || params.category;
  return generateBlogMetadata(blogPost, params.category, categoryName);
}

export default async function BlogPostPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const blogPost = await getBlogPost(params.category, params.slug);

  if (!blogPost) {
    notFound();
  }

  const { frontmatter, html } = blogPost;
  const currentUrl = frontmatter.canonicalUrl || `https://www.idesignac.com/blog/${params.category}/${params.slug}`;
  const categoryName = categoryNames[params.category] || params.category;

  // Generate schemas server-side
  const articleSchema = generateArticleSchema(blogPost, currentUrl);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.idesignac.com/' },
    { name: 'Blog', url: 'https://www.idesignac.com/blog' },
    { name: categoryName, url: `https://www.idesignac.com/blog/${params.category}` },
    { name: frontmatter.title, url: currentUrl }
  ]);

  // Format date
  const publishedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
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

      <GTM />
      <DNIInjector />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
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
                  href={`/blog/${params.category}`}
                  className="hover:text-foreground"
                  data-testid={`link-breadcrumb-${params.category}`}
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
                <time dateTime={frontmatter.date} data-testid="text-publish-date">
                  {publishedDate}
                </time>
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4" />
                <span data-testid="text-read-time">{frontmatter.readTime} read</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-article-title">
                {frontmatter.title}
              </h1>

              {frontmatter.excerpt && (
                <p className="text-xl text-muted-foreground" data-testid="text-article-excerpt">
                  {frontmatter.excerpt}
                </p>
              )}
            </header>

            {/* Article Body */}
            <div
              className="prose prose-lg prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:text-foreground prose-blockquote:text-muted-foreground prose-code:text-foreground max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
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
                  <a href="tel:+15203332665" data-testid="button-call-cta">
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

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
