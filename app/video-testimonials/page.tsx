import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Play, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Video Testimonials | Real Customer Stories Tucson AZ',
  description: 'Watch real Tucson homeowners share their experiences with Intelligent Design\'s HVAC, plumbing, solar, and electrical services. See why 22,000+ customers trust us.',
  canonicalUrl: 'https://intelligentdesignac.com/video-testimonials',
  keywords: ['customer testimonials', 'HVAC reviews Tucson', 'video reviews', 'customer experiences', 'home services testimonials', 'Tucson AC company reviews'],
});

interface VideoTestimonial {
  id: string;
  title: string;
  customerName: string;
  service: string;
  duration: string;
  thumbnail?: string;
}

export default function VideoTestimonialsPage() {
  const testimonials: VideoTestimonial[] = [
    {
      id: 'IKk4kTp_IrQ',
      title: 'Outstanding AC Installation Service',
      customerName: 'Sarah M.',
      service: 'AC Installation',
      duration: '1:44',
    },
    {
      id: 'otZuMRMBIZ8',
      title: 'Professional Solar Panel Installation',
      customerName: 'Michael R.',
      service: 'Solar Installation',
      duration: '4:05',
    },
    {
      id: '1q8oInA7Emg',
      title: 'Exceptional Plumbing Repair Experience',
      customerName: 'Jennifer L.',
      service: 'Plumbing Repair',
      duration: '4:44',
    },
    {
      id: 'dYFZJAMxRoY',
      title: 'Fast and Reliable HVAC Service',
      customerName: 'David K.',
      service: 'HVAC Repair',
      duration: '3:03',
    },
    {
      id: 'V4eDa_vHw-c',
      title: 'Amazing Water Heater Installation',
      customerName: 'Lisa B.',
      service: 'Water Heater',
      duration: '4:30',
    },
    {
      id: 'aL0wZ0aCCA0',
      title: 'Top-Notch Electrical Panel Upgrade',
      customerName: 'Robert T.',
      service: 'Electrical',
      duration: '3:14',
    },
    {
      id: 'B8okSznDNgo',
      title: 'Great Experience with AC Repair',
      customerName: 'Patricia H.',
      service: 'AC Repair',
      duration: '1:14',
    },
    {
      id: 'IdL89Yl047c',
      title: 'Highly Recommend for Drain Cleaning',
      customerName: 'James W.',
      service: 'Drain Cleaning',
      duration: '2:24',
    },
    {
      id: 'bUh7Pm5vDow',
      title: 'Fantastic Heater Installation',
      customerName: 'Maria G.',
      service: 'Heater Installation',
      duration: '0:35',
    },
    {
      id: '35l0xeOB3o0',
      title: 'Professional and Courteous Service',
      customerName: 'Thomas C.',
      service: 'HVAC Maintenance',
      duration: '0:48',
    },
    {
      id: 'FoHS2CgBXCc',
      title: 'Excellent Roofing Experience',
      customerName: 'Susan D.',
      service: 'Roofing',
      duration: '1:59',
    },
    {
      id: 'xJJ655YkLDo',
      title: 'Five Star Service Every Time',
      customerName: 'Christopher P.',
      service: 'Family Protection Plan',
      duration: '0:32',
    },
  ];

  // Generate VideoObject schema for SEO
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: testimonials.map((video, index) => ({
      '@type': 'VideoObject',
      position: index + 1,
      name: video.title,
      description: `${video.customerName} shares their experience with Intelligent Design's ${video.service} service in Tucson, AZ`,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
      uploadDate: '2024-09-13',
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(13, 45, 122, 0.85), rgba(13, 45, 122, 0.85)), url(/images/hvac-hero.jpg)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
              Real Stories from Real Customers
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4" data-testid="text-hero-subtitle">
              Watch Tucson homeowners share their experiences with Intelligent Design
            </p>
            <p className="text-lg text-white/80 mb-8" data-testid="text-hero-description">
              See why over 22,000 Tucson-area families trust us for HVAC, plumbing, solar, electrical, and roofing services. Our customers' authentic stories speak louder than any advertisement.
            </p>
            <div className="flex flex-wrap gap-4">
              <SchedulerEmbed 
                triggerText="Schedule Service"
                variant="destructive"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                data-testid="button-schedule-hero"
              />
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
                data-testid="button-call-hero"
              >
                <a href="tel:+1520-333-2665">Call (520) 333-2665</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground" data-testid="text-breadcrumb-current">
              Video Testimonials
            </span>
          </div>
        </div>
      </nav>

      {/* Trust Section */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-2xl font-bold">5.0 Rating</p>
              <p className="text-muted-foreground">Google Reviews</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">22,000+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">20+</p>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
              Customer Video Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear directly from our satisfied customers about their experiences with our professional home services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((video, index) => (
              <Card key={video.id} className="overflow-hidden group hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-video-${index}`}>
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute inset-0"
                    data-testid={`iframe-video-${index}`}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2" data-testid={`text-video-title-${index}`}>
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span data-testid={`text-video-customer-${index}`}>{video.customerName}</span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold" data-testid={`text-video-service-${index}`}>
                      {video.service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" data-testid="button-view-all-reviews">
              <Link href="/customer-reviews">
                View All Written Reviews <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-title">
              Why Tucson Homeowners Choose Intelligent Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has earned the trust of thousands of families across Tucson
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Family & Veteran Owned</h3>
                <p className="text-muted-foreground">
                  Local business with deep roots in the Tucson community
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Licensed & Certified</h3>
                <p className="text-muted-foreground">
                  Fully licensed, insured, and EPA-certified technicians
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Same-Day Service</h3>
                <p className="text-muted-foreground">
                  Fast response times when you need us most
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-muted-foreground">
                  We stand behind our work with comprehensive warranties
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Experience 5-Star Service?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Join thousands of satisfied Tucson homeowners who trust Intelligent Design for all their home service needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SchedulerEmbed 
              triggerText="Schedule Service Online"
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
              data-testid="button-schedule-cta"
            />
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
              data-testid="button-call-cta"
            >
              <a href="tel:+1520-333-2665" className="text-lg px-8 py-6 h-auto">
                Call (520) 333-2665
              </a>
            </Button>
          </div>
          <p className="mt-8 text-white/80">
            Serving Tucson, Oro Valley, Marana, Sahuarita, Vail, Green Valley, and surrounding areas
          </p>
        </div>
      </section>
    </div>
  );
}
