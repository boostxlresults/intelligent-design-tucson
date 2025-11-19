import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Search, Calendar, Clock, ChevronRight, User } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export default function BlogIndex() {
  const [location, setLocation] = useLocation();
  const [blogData, setBlogData] = useState<BlogIndex | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const urlParams = new URLSearchParams(window.location.search);
  const pageParam = parseInt(urlParams.get("page") || "1", 10);

  useEffect(() => {
    setCurrentPage(pageParam);
  }, [pageParam]);

  useEffect(() => {
    setBlogData(blogIndexData as BlogIndex);
    setLoading(false);
  }, []);

  useEffect(() => {
    const description = "Expert advice on HVAC, plumbing, solar, electrical, and roofing from Tucson's trusted home services professionals. Tips, guides, and industry insights.";
    
    const collectionSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Intelligent Design Blog",
      "description": description,
      "url": "https://www.idesignac.com/blog",
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
  }, []);

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

  let filteredPosts = blogData.posts;

  if (selectedCategory !== "all") {
    filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
  }

  if (searchQuery.trim()) {
    const fuse = new Fuse(filteredPosts, {
      keys: ['title', 'excerpt', 'tags', 'category'],
      threshold: 0.3,
    });
    filteredPosts = fuse.search(searchQuery).map(result => result.item);
  }

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = regularPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setLocation(`/blog?page=${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const imageUrl = `${SITE_URL}${blogHero}`;
  
  return (
    <>
      <GTM />
      <DNIInjector />
      <MetaHead
        title="Blog | Intelligent Design Tucson"
        description="Expert advice on HVAC, plumbing, solar, electrical, and roofing from Tucson's trusted home services professionals. Tips, guides, and industry insights."
        canonical={`${SITE_URL}/blog`}
        robots="index, follow, max-image-preview:large"
        openGraph={[
          { property: 'og:title', content: 'Blog | Intelligent Design Tucson' },
          { property: 'og:description', content: 'Expert advice on HVAC, plumbing, solar, electrical, and roofing from Tucson\'s trusted home services professionals. Tips, guides, and industry insights.' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/blog` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Intelligent Design blog - Tucson home services experts' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Blog | Intelligent Design Tucson' },
          { name: 'twitter:description', content: 'Expert advice on HVAC, plumbing, solar, electrical, and roofing from Tucson\'s trusted home services professionals. Tips, guides, and industry insights.' },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Intelligent Design blog - Tucson home services experts' }
        ]}
      />
      <Header />
      
      <main>
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={blogHero}
              alt="Intelligent Design team of professional technicians"
              className="w-full h-full object-cover"
              data-testid="img-blog-hero"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" data-testid="text-page-title">
              Intelligent Design Blog
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white" data-testid="text-page-subtitle">
              Expert advice and insights on HVAC, plumbing, solar, electrical, and roofing services in Tucson
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
                  <BreadcrumbPage className="text-white" data-testid="text-breadcrumb-current">Blog</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64" data-testid="select-category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" data-testid="select-category-all">All Categories</SelectItem>
                  {blogData.categories.map((cat) => (
                    <SelectItem key={cat.slug} value={cat.slug} data-testid={`select-category-${cat.slug}`}>
                      {cat.name} ({cat.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {featuredPosts.length > 0 && currentPage === 1 && !searchQuery && selectedCategory === "all" && (
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6" data-testid="text-featured-title">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.category}/${post.slug}`}>
                      <Card className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full" data-testid={`card-featured-${post.slug}`}>
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.heroImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            data-testid={`img-featured-${post.slug}`}
                          />
                        </div>
                        <div className="p-6">
                          <Badge className={categoryColors[post.category] || "bg-gray-100 text-gray-800"} data-testid={`badge-featured-category-${post.slug}`}>
                            {blogData.categories.find(c => c.slug === post.category)?.name || post.category}
                          </Badge>
                          <h3 className="text-xl font-bold mt-4 mb-2" data-testid={`text-featured-title-${post.slug}`}>
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`text-featured-excerpt-${post.slug}`}>
                            {post.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1" data-testid={`text-featured-date-${post.slug}`}>
                              <Calendar className="h-4 w-4" />
                              {formatDate(post.publishedAt)}
                            </span>
                            <span className="flex items-center gap-1" data-testid={`text-featured-reading-time-${post.slug}`}>
                              <Clock className="h-4 w-4" />
                              {post.readingTime} min read
                            </span>
                            <span className="flex items-center gap-1" data-testid={`text-featured-author-${post.slug}`}>
                              <User className="h-4 w-4" />
                              {post.author}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {paginatedPosts.length > 0 ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-6" data-testid="text-all-posts-title">
                  {searchQuery ? "Search Results" : selectedCategory !== "all" ? `${blogData.categories.find(c => c.slug === selectedCategory)?.name} Articles` : "All Articles"}
                </h2>
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
                          <Badge className={categoryColors[post.category] || "bg-gray-100 text-gray-800"} data-testid={`badge-category-${post.slug}`}>
                            {blogData.categories.find(c => c.slug === post.category)?.name || post.category}
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
                  {searchQuery ? "Try adjusting your search query or filters." : "No articles available in this category."}
                </p>
                <Button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} data-testid="button-clear-filters">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-cta-title">
              Need Professional Service?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
              Our Tucson experts are ready to help with all your HVAC, plumbing, solar, electrical, and roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild data-testid="button-schedule-service">
                <a href="tel:520-333-2665">
                  Call (520) 333-2665
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-view-services">
                <Link href="/">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileFloatingActions />
    </>
  );
}
