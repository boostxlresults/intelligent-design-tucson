import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { Phone, Clock, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import TrustBar from "@/components/TrustBar";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import { generateArticleSchema, generateBreadcrumbSchema, type ParsedBlogPost } from "../../../lib/markdownParser";

export default function BlogPost() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const [blogPost, setBlogPost] = useState<ParsedBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Scroll to top when component mounts or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, slug]);

  useEffect(() => {
    async function loadBlogPost() {
      if (!category || !slug) {
        setError("Invalid blog post URL");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/blog/${category}/${slug}`);
        if (!response.ok) {
          throw new Error("Blog post not found");
        }
        
        const parsed = await response.json();
        setBlogPost(parsed);
        setLoading(false);
      } catch (err) {
        console.error("Error loading blog post:", err);
        setError("Failed to load blog post");
        setLoading(false);
      }
    }

    loadBlogPost();
  }, [category, slug]);

  useEffect(() => {
    if (!blogPost) return;

    const { frontmatter } = blogPost;
    const currentUrl = `${SITE_URL}/blog/${category}/${slug}`;

    const categoryNames: Record<string, string> = {
      hvac: 'HVAC & Air Conditioning',
      solar: 'Solar Energy',
      plumbing: 'Plumbing',
      roofing: 'Roofing',
      electrical: 'Electrical',
      'home-tips': 'Home Tips',
    };

    const articleSchema = generateArticleSchema(blogPost, frontmatter.canonicalUrl || currentUrl);
    const breadcrumbSchema = generateBreadcrumbSchema(
      category,
      categoryNames[category] || category,
      frontmatter.title,
      frontmatter.canonicalUrl || currentUrl
    );

    const schemas = [
      { id: 'article-schema', data: articleSchema, attr: 'article' },
      { id: 'breadcrumb-schema', data: breadcrumbSchema, attr: 'breadcrumb' },
    ];

    schemas.forEach(({ id, data, attr }) => {
      let script = document.querySelector(`script[data-schema="${attr}"]`) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', attr);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });

    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
    };
  }, [blogPost, category, slug]);

  if (loading) {
    return (
      <>
        <GTM />
        <DNIInjector />
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg" data-testid="text-loading">Loading blog post...</div>
          </div>
        </main>
        <Footer />
        <MobileFloatingActions />
      </>
    );
  }

  if (error || !blogPost) {
    return (
      <>
        <GTM />
        <DNIInjector />
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-error-title">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8" data-testid="text-error-message">{error || "The blog post you're looking for doesn't exist."}</p>
            <Link href="/blog">
              <Button data-testid="button-back-to-blog">Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
        <MobileFloatingActions />
      </>
    );
  }

  const { frontmatter, htmlContent, readingTime, tableOfContents } = blogPost;
  const publishDate = new Date(frontmatter.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const categoryNames: Record<string, string> = {
    hvac: 'HVAC & Air Conditioning',
    solar: 'Solar Energy',
    plumbing: 'Plumbing',
    roofing: 'Roofing',
    electrical: 'Electrical',
    'home-tips': 'Home Tips',
  };

  const currentUrl = frontmatter.canonicalUrl || `${SITE_URL}/blog/${category}/${slug}`;
  const imageUrl = frontmatter.heroImage 
    ? `${SITE_URL}${frontmatter.heroImage}` 
    : `${SITE_URL}/images/blog/default.jpg`;

  return (
    <>
      <GTM />
      <DNIInjector />
      <MetaHead
        title={`${frontmatter.title} | Intelligent Design Tucson`}
        description={frontmatter.description}
        canonical={currentUrl}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: frontmatter.title },
          { property: 'og:description', content: frontmatter.description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: currentUrl },
          { property: 'og:type', content: 'article' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: frontmatter.title },
          { property: 'article:published_time', content: frontmatter.publishedAt },
          { property: 'article:modified_time', content: frontmatter.updatedAt || frontmatter.publishedAt },
          { property: 'article:author', content: frontmatter.author || 'Intelligent Design Team' },
          { property: 'article:section', content: frontmatter.category },
          { property: 'article:tag', content: frontmatter.tags?.join(', ') || '' },
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: frontmatter.title },
          { name: 'twitter:description', content: frontmatter.description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: frontmatter.title },
        ]}
      />
      <Header />
      
      <main>
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
          {frontmatter.heroImage && (
            <div className="absolute inset-0">
              <img
                src={frontmatter.heroImage}
                alt={frontmatter.title}
                className="w-full h-full object-cover"
                data-testid="img-hero"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60" />
            </div>
          )}
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
            <nav className="flex items-center justify-center gap-2 text-sm mb-6" data-testid="nav-breadcrumb">
              <Link href="/" className="text-white/80 hover:text-white" data-testid="link-home">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <Link href="/blog" className="text-white/80 hover:text-white" data-testid="link-blog">
                Blog
              </Link>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <Link href={`/blog/${category}`} className="text-white/80 hover:text-white" data-testid={`link-category-${category}`}>
                {categoryNames[category] || category}
              </Link>
              <ChevronRight className="w-4 h-4 text-white/60" />
              <span className="text-white" data-testid="text-current-post">Current Post</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-post-title">
              {frontmatter.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2" data-testid="div-publish-date">
                <Calendar className="w-5 h-5" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-2" data-testid="div-reading-time">
                <Clock className="w-5 h-5" />
                <span>{readingTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3 space-y-8">
            {tableOfContents.length > 0 && (
              <Card className="p-6 sticky top-24" data-testid="card-table-of-contents">
                <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="block text-sm hover:text-[hsl(25,85%,55%)] transition-colors"
                      style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
                      data-testid={`link-toc-${item.id}`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </Card>
            )}

            <Card className="p-6" data-testid="card-cta-sidebar">
              <h3 className="text-lg font-bold mb-4">Need HVAC Service?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Expert technicians available 24/7 for all your heating and cooling needs.
              </p>
              <Button className="w-full mb-3" data-testid="button-call-now">
                <Phone className="w-4 h-4 mr-2" />
                Call (520) 333-2665
              </Button>
              <Button variant="outline" className="w-full" data-testid="button-schedule-service">
                Schedule Service
              </Button>
            </Card>
          </aside>

          <article className="lg:col-span-9 prose prose-lg max-w-none" data-testid="article-content">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

            <div className="mt-12 p-8 bg-[hsl(215,15%,92%)] rounded-lg not-prose" data-testid="div-cta-inline">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact Intelligent Design today for expert HVAC, plumbing, solar, electrical, and roofing services in Tucson.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" data-testid="button-cta-call">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (520) 333-2665
                </Button>
                <Button size="lg" variant="outline" data-testid="button-cta-schedule">
                  Schedule Online
                </Button>
              </div>
            </div>
          </article>
        </div>

        {frontmatter.relatedServices && frontmatter.relatedServices.length > 0 && (
          <section className="bg-[hsl(215,15%,92%)] py-16" data-testid="section-related-services">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {frontmatter.relatedServices.map((service, index) => (
                  <Card key={index} className="p-6 hover-elevate" data-testid={`card-related-service-${index}`}>
                    <h3 className="text-xl font-bold mb-2 capitalize">{service.replace(/-/g, ' ')}</h3>
                    <p className="text-muted-foreground mb-4">
                      Professional {service.replace(/-/g, ' ')} services in Tucson.
                    </p>
                    <Link href={`/${service}-tucson`}>
                      <Button variant="outline" data-testid={`button-learn-more-${index}`}>
                        Learn More
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16" data-testid="section-related-posts">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover-elevate" data-testid="card-related-post-placeholder">
                <div className="text-sm text-muted-foreground mb-2">Coming Soon</div>
                <h3 className="text-xl font-bold mb-2">More articles coming soon</h3>
                <p className="text-muted-foreground">
                  Check back for more helpful guides and tips from our experts.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <TrustBar />
      </main>

      <Footer />
      <MobileFloatingActions />
    </>
  );
}
