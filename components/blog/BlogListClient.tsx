'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ChevronRight, Snowflake, Wrench, Sun, Zap, Home, Lightbulb, Flame, PipetteIcon, Wind } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BlogSearch from './BlogSearch';
import CategoryFilter from './CategoryFilter';

const categoryIcons: Record<string, typeof Snowflake> = {
  'hvac': Snowflake,
  'plumbing': Wrench,
  'solar': Sun,
  'electrical': Zap,
  'roofing': Home,
  'home-tips': Lightbulb,
  'water-heater': Flame,
  'drain-sewer': PipetteIcon,
  'indoor-air-quality': Wind,
};

interface BlogPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  heroImage?: string;
  heroImageExists: boolean;
  tags?: string[];
}

interface Category {
  slug: string;
  name: string;
  description: string;
}

interface BlogListClientProps {
  posts: BlogPost[];
  categories: Category[];
  categoryDefaultImages: Record<string, string>;
}

export default function BlogListClient({ posts, categories, categoryDefaultImages }: BlogListClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoriesWithCounts = useMemo(() => {
    return categories.map(cat => ({
      ...cat,
      count: posts.filter(p => p.category === cat.slug).length
    }));
  }, [categories, posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <BlogSearch onSearch={setSearchQuery} placeholder="Search articles..." />
        <div className="flex-1">
          <CategoryFilter 
            categories={categoriesWithCounts}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12" data-testid="no-results-message">
          <p className="text-muted-foreground text-lg">
            No articles found matching your criteria.
          </p>
          <Badge 
            onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
            variant="outline"
            className="mt-4 cursor-pointer"
            data-testid="button-clear-filters"
          >
            Clear filters
          </Badge>
        </div>
      ) : (
        <>
          <p className="text-muted-foreground mb-6" data-testid="text-results-count">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => {
              const CategoryIcon = categoryIcons[post.category] || Lightbulb;
              const displayImage = post.heroImageExists ? post.heroImage : categoryDefaultImages[post.category];
              
              return (
                <Link 
                  key={`${post.category}-${post.slug}`} 
                  href={`/blog/${post.category}/${post.slug}`}
                  data-testid={`link-blog-post-${post.slug}`}
                >
                  <Card className="h-full hover-elevate overflow-hidden flex flex-col">
                    <div className="relative h-48 w-full">
                      {post.heroImageExists && post.heroImage ? (
                        <Image
                          src={post.heroImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <CategoryIcon className="h-16 w-16 text-primary/40" />
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg line-clamp-2 mb-2 flex-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readingTime} min</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
