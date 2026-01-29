import { Metadata } from 'next';
import Link from 'next/link';

import { Calendar, Clock, ChevronRight, ArrowRight, Snowflake, Wrench, Sun, Zap, Home, Lightbulb, Flame, PipetteIcon, Wind } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogListClient from '@/components/blog/BlogListClient';

const categoryIcons = {
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

const categories = [
  {
    slug: 'hvac',
    name: 'HVAC',
    description: 'Air conditioning, heating, and indoor air quality tips',
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    description: 'Expert plumbing advice and solutions',
  },
  {
    slug: 'water-heater',
    name: 'Water Heater',
    description: 'Water heater guides and installation tips',
  },
  {
    slug: 'drain-sewer',
    name: 'Drain & Sewer',
    description: 'Drain cleaning and sewer maintenance guides',
  },
  {
    slug: 'solar',
    name: 'Solar',
    description: 'Solar energy guides and installation tips',
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    description: 'Electrical safety and maintenance guides',
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    description: 'Roofing repair and maintenance advice',
  },
  {
    slug: 'indoor-air-quality',
    name: 'Indoor Air Quality',
    description: 'Air filtration and indoor air quality guides',
  },
  {
    slug: 'home-tips',
    name: 'Home Tips',
    description: 'General home maintenance and seasonal guides',
  },
];

interface BlogPostSummary {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  heroImage?: string;
  heroImageExists: boolean;
  tags?: string[];
  excerpt?: string;
}

// Check if an image file exists in the public directory
async function imageExists(imagePath: string | undefined): Promise<boolean> {
  if (!imagePath) return false;
  try {
    // Remove leading slash for file path
    const filePath = path.join(process.cwd(), 'public', imagePath.replace(/^\//, ''));
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getAllPosts(): Promise<BlogPostSummary[]> {
  try {
    const blogBasePath = path.join(process.cwd(), 'public', 'content', 'blog');
    const allPosts: BlogPostSummary[] = [];
    
    for (const category of categories) {
      try {
        const categoryPath = path.join(blogBasePath, category.slug);
        const files = await fs.readdir(categoryPath);
        const mdFiles = files.filter(file => file.endsWith('.md'));
        
        const posts = await Promise.all(
          mdFiles.map(async (file) => {
            const filePath = path.join(categoryPath, file);
            const content = await fs.readFile(filePath, 'utf-8');
            const { data } = matter(content);
            
            const wordsPerMinute = 200;
            const words = content.trim().split(/\s+/).length;
            const readingTime = Math.ceil(words / wordsPerMinute);
            
            const heroImageExists = await imageExists(data.heroImage);
            
            return {
              slug: file.replace('.md', ''),
              category: category.slug,
              title: data.title || 'Untitled',
              description: data.description || '',
              publishedAt: data.publishedAt || data.date || new Date().toISOString(),
              readingTime,
              heroImage: data.heroImage,
              heroImageExists,
              tags: data.tags || [],
              excerpt: data.excerpt || data.description,
            };
          })
        );
        
        allPosts.push(...posts);
      } catch (error) {
        console.error(`Error loading posts for category ${category.slug}:`, error);
      }
    }
    
    return allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

// Metadata generation
export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'Blog | Intelligent Design Tucson - HVAC, Plumbing, Solar & More',
    description: 'Expert advice and guides on HVAC, plumbing, solar, electrical, and roofing services in Tucson. Get tips from Arizona\'s trusted home services professionals.',
    canonicalUrl: 'https://www.idesignac.com/blog',
    keywords: ['blog', 'HVAC', 'plumbing', 'solar', 'electrical', 'roofing', 'Tucson', 'home services', 'home tips'],
  });
}

export default async function BlogIndexPage() {
  const allPosts = await getAllPosts();
  
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground" data-testid="text-breadcrumb-blog">
                Blog
              </span>
            </div>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
              Intelligent Design Blog
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto" data-testid="text-page-description">
              Expert advice and insights on HVAC, plumbing, solar, electrical, and roofing services in Tucson and Southern Arizona
            </p>
          </div>
        </section>
        
        {/* Categories Grid */}
        <section className="py-12 md:py-16 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-categories-heading">
              Browse by Category
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const Icon = categoryIcons[category.slug as keyof typeof categoryIcons];
                return (
                  <Card
                    key={category.slug}
                    className="hover-elevate"
                    data-testid={`card-category-${category.slug}`}
                  >
                    <Link href={`/blog/${category.slug}`} className="block p-6">
                      <div className="mb-4">
                        <Icon className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-category-name-${category.slug}`}>
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-4" data-testid={`text-category-desc-${category.slug}`}>
                        {category.description}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Browse articles
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* All Articles with Search and Filter */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8" data-testid="text-all-articles-heading">
              All Articles
            </h2>
            
            <BlogListClient 
              posts={allPosts} 
              categories={categories}
              categoryDefaultImages={categoryDefaultImages}
            />
          </div>
        </section>
      </main>

    </div>
  );
}
