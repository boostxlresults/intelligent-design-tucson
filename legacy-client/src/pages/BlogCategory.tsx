import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "wouter";
import { Search, Calendar, Clock, ChevronRight, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import TrustBar from "@/components/TrustBar";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import Fuse from "fuse.js";
import blogHero from "@assets/generated_images/Intelligent_Design_team_of_technicians_d7ef5e9f.webp";
import blogIndexData from "@/data/blogIndex.json";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  heroImage: string;
  publishedAt: string;
  author: string;
  readingTime: number;
  featured: boolean;
}

interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
}

interface BlogIndex {
  posts: BlogPost[];
  categories: BlogCategory[];
}

const POSTS_PER_PAGE = 12;

const categoryColors: Record<string, string> = {
  hvac: "bg-blue-100 text-blue-800",
  solar: "bg-yellow-100 text-yellow-800",
  plumbing: "bg-cyan-100 text-cyan-800",
  roofing: "bg-stone-100 text-stone-800",
  electrical: "bg-purple-100 text-purple-800",
  "home-tips": "bg-green-100 text-green-800",
};

const categoryServiceLinks: Record<string, { title: string; url: string }[]> = {
  hvac: [
    { title: "AC Repair", url: "/ac-repair-tucson" },
    { title: "AC Installation", url: "/ac-installation-tucson" },
    { title: "Heater Services", url: "/heater-service-tucson" },
  ],
  solar: [
    { title: "Solar Installation", url: "/residential-solar-installation-tucson" },
    { title: "Solar Tax Credits", url: "/solar-tax-credits-arizona" },
    { title: "Solar AC", url: "/solar-ac-tucson" },
  ],
  plumbing: [
    { title: "Water Heater Repair", url: "/water-heater-repair-tucson" },
    { title: "Drain Clearing", url: "/drain-clearing-tucson" },
    { title: "Leak Detection", url: "/leak-detection-tucson" },
  ],
  roofing: [
    { title: "Roof Repair", url: "/residential-roof-repair-tucson" },
    { title: "Roof Installation", url: "/residential-roof-installation-tucson" },
    { title: "Roof Inspection", url: "/residential-roof-inspection-tucson" },
  ],
  electrical: [
    { title: "Electrical Repair", url: "/electrical-repair-tucson" },
    { title: "Panel Upgrades", url: "/electrical-panel-upgrades-tucson" },
    { title: "Generator Installation", url: "/generac-installation-tucson" },
  ],
  "home-tips": [
    { title: "All Services", url: "/" },
    { title: "Family Protection Plans", url: "/family-protection-plans" },
    { title: "Financing Options", url: "/financing" },
  ],
};

export default function BlogCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [location, setLocation] = useLocation();
  const [blogData, setBlogData] = useState<BlogIndex | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = parseInt(urlParams.get("page") || "1", 10);

  useEffect(() => {
    setCurrentPage(pageParam);
  }, [pageParam]);

  useEffect(() => {
    const data = blogIndexData as BlogIndex;
    const categoryExists = data.categories.some(cat => cat.slug === categorySlug);
    if (!categoryExists) {
      setError("Category not found");
    }
    setBlogData(data);
    setLoading(false);
  }, [categorySlug]);

  const currentCategory = blogData?.categories.find(cat => cat.slug === categorySlug);

  useEffect(() => {
    if (!currentCategory || !blogData) return;

    const currentUrl = `${SITE_URL}/blog/category/${categorySlug}`;

    const collectionSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${currentCategory.name} Articles`,
      "description": currentCategory.description,
      "url": currentUrl,
      "publisher": {
        "@type": "Organization",
        "name": "Intelligent Design",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.idesignac.com/logo.png"
        }
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.idesignac.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.idesignac.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": currentCategory.name,
          "item": currentUrl
        }
      ]
    };

    const schemas = [
      { id: 'collection-schema', data: collectionSchema, attr: 'collection' },
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
  }, [currentCategory, categorySlug, blogData]);

  if (loading || !blogData) {
    return (
      <>
        <GTM />
        <DNIInjector />
        <Header />
        <main className="min-h-screen">
          <section className="relative min-h-[300px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[hsl(215,70%,25%)] to-[hsl(215,70%,35%)]">
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 text-center">
              <Skeleton className="h-12 w-64 mx-auto mb-4" data-testid="skeleton-title" />
              <Skeleton className="h-6 w-96 mx-auto" data-testid="skeleton-subtitle" />
            </div>
          </section>
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden" data-testid={`skeleton-card-${i}`}>
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <Footer />
        <MobileFloatingActions />
      </>
    );
  }

  if (error || !currentCategory) {
    return (
      <>
        <GTM />
        <DNIInjector />
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-error-title">Category Not Found</h1>
            <p className="text-muted-foreground mb-8" data-testid="text-error-message">
              {error || "The category you're looking for doesn't exist."}
            </p>
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

  let filteredPosts = blogData.posts.filter(post => post.category === categorySlug);

  if (searchQuery.trim()) {
    const fuse = new Fuse(filteredPosts, {
      keys: ['title', 'excerpt', 'tags'],
      threshold: 0.3,
    });
    filteredPosts = fuse.search(searchQuery).map(result => result.item);
  }

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setLocation(`/blog/category/${categorySlug}?page=${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const relatedServices = categoryServiceLinks[categorySlug!] || [];
  const imageUrl = `${SITE_URL}${blogHero}`;
  const currentUrl = `${SITE_URL}/blog/category/${categorySlug}`;

  return (
    <>
      <GTM />
      <DNIInjector />
      <MetaHead
        title={`${currentCategory.name} | Intelligent Design Tucson Blog`}
        description={currentCategory.description}
        canonical={currentUrl}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: `${currentCategory.name} | Intelligent Design Tucson Blog` },
          { property: 'og:description', content: currentCategory.description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: currentUrl },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: `${currentCategory.name} articles from Intelligent Design Tucson` }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: `${currentCategory.name} | Intelligent Design Tucson Blog` },
          { name: 'twitter:description', content: currentCategory.description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: `${currentCategory.name} articles from Intelligent Design Tucson` }
        ]}
      />
      <Header />
      
      <main>
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={blogHero}
              alt={`${currentCategory.name} articles`}
              className="w-full h-full object-cover"
              data-testid="img-category-hero"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
            <Badge className={`${categoryColors[categorySlug!]} mb-4`} data-testid="badge-category-hero">
              {currentCategory.name}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-category-title">
              {currentCategory.name}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" data-testid="text-category-description">
              {currentCategory.description}
            </p>
            
            <Breadcrumb className="justify-center" data-testid="breadcrumb-navigation">
              <BreadcrumbList className="text-white/90">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-white" data-testid="link-breadcrumb-home">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/70" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog" className="hover:text-white" data-testid="link-breadcrumb-blog">
                    Blog
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/70" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white" data-testid="text-breadcrumb-current">
                    {currentCategory.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-6">
              <Link href="/blog">
                <Button variant="outline" className="backdrop-blur-sm bg-white/90" data-testid="button-all-categories">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Categories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={`Search ${currentCategory.name} articles...`}
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                />
              </div>
            </div>

            {paginatedPosts.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold" data-testid="text-articles-title">
                    {searchQuery ? "Search Results" : `${currentCategory.name} Articles`}
                  </h2>
                  <p className="text-muted-foreground" data-testid="text-articles-count">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {paginatedPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`}>
                      <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full" data-testid={`card-post-${post.slug}`}>
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            data-testid={`img-post-${post.slug}`}
                          />
                        </div>
                        <div className="p-6">
                          <Badge className={categoryColors[post.category] || "bg-gray-100 text-gray-800"} data-testid={`badge-post-category-${post.slug}`}>
                            {currentCategory.name}
                          </Badge>
                          <h3 className="text-xl font-bold mt-4 mb-2" data-testid={`text-post-title-${post.slug}`}>
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`text-post-excerpt-${post.slug}`}>
                            {post.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1" data-testid={`text-post-date-${post.slug}`}>
                              <Calendar className="h-4 w-4" />
                              {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1" data-testid={`text-post-reading-time-${post.slug}`}>
                              <Clock className="h-4 w-4" />
                              {post.readingTime} min read
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2" data-testid="pagination-controls">
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      data-testid="button-prev-page"
                    >
                      Previous
                    </Button>
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={page === currentPage ? "default" : "outline"}
                          onClick={() => handlePageChange(page)}
                          data-testid={`button-page-${page}`}
                        >
                          {page}
                        </Button>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      data-testid="button-next-page"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12" data-testid="empty-state">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-empty-title">No articles found</h3>
                <p className="text-muted-foreground mb-6" data-testid="text-empty-message">
                  {searchQuery ? "Try adjusting your search query." : `No ${currentCategory.name} articles available yet.`}
                </p>
                <Button onClick={() => setSearchQuery("")} data-testid="button-clear-search">
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </section>

        {relatedServices.length > 0 && (
          <section className="py-12 md:py-16 bg-muted/50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" data-testid="text-related-services-title">
                Related {currentCategory.name} Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {relatedServices.map((service, idx) => (
                  <Link key={idx} href={service.url}>
                    <Card className="p-6 text-center hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-service-${idx}`}>
                      <h3 className="text-xl font-bold mb-2" data-testid={`text-service-title-${idx}`}>{service.title}</h3>
                      <ChevronRight className="h-5 w-5 mx-auto text-muted-foreground" />
                    </Card>
                  </Link>
                ))}
              </div>
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6" data-testid="text-cta-subtitle">
                  Need professional {currentCategory.name.toLowerCase()} service in Tucson?
                </p>
                <Button size="lg" asChild data-testid="button-schedule-service">
                  <a href="tel:520-333-2665">
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileFloatingActions />
    </>
  );
}
