'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { getCategoriesForService } from '@/lib/seo/internalLinking';

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  readingTime?: number;
}

interface RelatedBlogPostsProps {
  serviceType: string;
  posts: BlogPost[];
}

const categoryNames: Record<string, string> = {
  'hvac': 'HVAC',
  'plumbing': 'Plumbing',
  'solar': 'Solar',
  'electrical': 'Electrical',
  'roofing': 'Roofing',
  'home-tips': 'Home Tips',
  'water-heater': 'Water Heater',
  'drain-sewer': 'Drain & Sewer',
  'indoor-air-quality': 'Air Quality',
};

export default function RelatedBlogPosts({ serviceType, posts }: RelatedBlogPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const categories = getCategoriesForService(serviceType);

  return (
    <section className="py-16 bg-white" data-testid="section-related-blog">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold" data-testid="heading-helpful-guides">
              Helpful Guides & Tips
            </h2>
          </div>
          <Link 
            href="/blog" 
            className="hidden md:flex items-center text-primary hover:underline"
            data-testid="link-view-all-blog"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Expert advice and tips from our certified technicians to help you maintain your home systems and make informed decisions.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link 
              key={`${post.category}/${post.slug}`}
              href={`/blog/${post.category}/${post.slug}`}
              data-testid={`link-blog-${post.slug}`}
            >
              <Card className="h-full hover-elevate transition-all duration-200 cursor-pointer">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {categoryNames[post.category] || post.category}
                    </Badge>
                    {post.readingTime && (
                      <span className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readingTime} min read
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground mr-2">Browse by topic:</span>
          {categories.map((cat) => (
            <Link 
              key={cat} 
              href={`/blog/${cat}`}
              data-testid={`link-category-${cat}`}
            >
              <Badge variant="outline" className="cursor-pointer">
                {categoryNames[cat] || cat}
              </Badge>
            </Link>
          ))}
        </div>

        <Link 
          href="/blog" 
          className="mt-6 flex md:hidden items-center text-primary hover:underline"
          data-testid="link-view-all-blog-mobile"
        >
          View All Articles
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </section>
  );
}
