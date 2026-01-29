import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Thermometer, Droplets, Sun, Zap, Home, Lightbulb, Flame, PipetteIcon, Wind } from 'lucide-react';

const categoryIcons: Record<string, typeof Thermometer> = {
  'hvac': Thermometer,
  'plumbing': Droplets,
  'solar': Sun,
  'electrical': Zap,
  'roofing': Home,
  'home-tips': Lightbulb,
  'water-heater': Flame,
  'drain-sewer': PipetteIcon,
  'indoor-air-quality': Wind,
};

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

function normalizeHeroImagePath(imagePath: string | undefined): string | undefined {
  if (!imagePath) return undefined;
  if (imagePath.startsWith('/attached_assets/generated_images/')) {
    return imagePath.replace('/attached_assets/generated_images/', '/generated_images/');
  }
  return imagePath;
}

interface RelatedPost {
  slug: string;
  category: string;
  title: string;
  description: string;
  heroImage?: string;
  readingTime: number;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
  currentSlug: string;
}

export default function RelatedPosts({ posts, currentSlug }: RelatedPostsProps) {
  const filteredPosts = posts.filter(post => post.slug !== currentSlug).slice(0, 3);
  
  if (filteredPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 border-t" data-testid="related-posts-section">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {filteredPosts.map((post) => {
          const normalizedImage = normalizeHeroImagePath(post.heroImage);
          const displayImage = normalizedImage || categoryDefaultImages[post.category];
          const CategoryIcon = categoryIcons[post.category] || Lightbulb;
          
          return (
            <Link 
              key={post.slug} 
              href={`/blog/${post.category}/${post.slug}`}
              data-testid={`link-related-post-${post.slug}`}
            >
              <Card className="h-full hover-elevate overflow-hidden">
                <div className="relative h-32 w-full">
                  {displayImage ? (
                    <Image
                      src={displayImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <CategoryIcon className="h-12 w-12 text-primary/40" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-sm line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readingTime} min read
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
