import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileText, Wrench, BookOpen, Download, ExternalLink, Snowflake, Droplets, Sun, Zap, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Resources & Guides | Intelligent Design Tucson',
  description: 'Free HVAC, plumbing, solar, electrical, and roofing resources for Tucson homeowners. Expert guides, maintenance tips, and seasonal advice from Intelligent Design.',
  canonicalUrl: '/resources',
  keywords: ['hvac guides', 'plumbing tips', 'tucson home maintenance', 'solar resources', 'electrical safety guides'],
});

export default function ResourcesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' }
  ]);

  const resourceCategories = [
    {
      title: 'HVAC Resources',
      icon: Snowflake,
      description: 'Air conditioning, heating, and indoor air quality guides',
      link: '/blog/hvac',
      count: '92 articles',
    },
    {
      title: 'Plumbing Resources',
      icon: Droplets,
      description: 'Plumbing maintenance, repairs, and troubleshooting tips',
      link: '/blog/plumbing',
      count: '47 articles',
    },
    {
      title: 'Solar Energy Resources',
      icon: Sun,
      description: 'Solar installation guides and energy savings tips',
      link: '/blog/solar',
      count: '46 articles',
    },
    {
      title: 'Electrical Resources',
      icon: Zap,
      description: 'Electrical safety and maintenance guides',
      link: '/blog/electrical',
      count: '1 article',
    },
    {
      title: 'Roofing Resources',
      icon: Home,
      description: 'Roofing repair and maintenance advice',
      link: '/blog/roofing',
      count: '2 articles',
    },
    {
      title: 'Home Maintenance Tips',
      icon: BookOpen,
      description: 'Seasonal maintenance and general home care guides',
      link: '/blog/home-tips',
      count: '43 articles',
    },
  ];

  const quickLinks = [
    {
      title: 'Service Areas',
      description: 'Find out if we serve your area in Tucson and surrounding communities',
      link: '/service-areas',
      icon: ExternalLink,
    },
    {
      title: 'Financing Options',
      description: 'Flexible financing plans for HVAC, plumbing, and solar installations',
      link: '/financing',
      icon: FileText,
    },
    {
      title: 'Our Guarantees',
      description: 'Learn about our 100% satisfaction guarantee and service commitments',
      link: '/guarantees',
      icon: Wrench,
    },
    {
      title: 'Customer Reviews',
      description: 'Read what our 22,000+ satisfied customers have to say',
      link: '/customer-reviews',
      icon: FileText,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground mb-6" data-testid="breadcrumb-nav">
              <a href="/" className="hover:text-primary" data-testid="link-breadcrumb-home">Home</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">Resources</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
              Homeowner Resources & Guides
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Expert advice and helpful resources for maintaining your home's HVAC, plumbing, electrical, solar, and roofing systems in Tucson, Arizona.
            </p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Browse Resources by Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {resourceCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card key={category.title} className="hover-elevate" data-testid={`card-resource-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Link href={category.link} className="block p-6" data-testid={`link-category-${category.link.split('/').pop()}`}>
                      <div className="mb-4">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {category.description}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {category.count}
                      </p>
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Quick Links</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Card key={link.title} className="hover-elevate" data-testid={`card-quick-link-${link.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-2">
                            {link.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {link.description}
                          </p>
                          <Link href={link.link} data-testid={`link-quicklink-${link.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <Button variant="outline" size="sm" data-testid={`button-view-${link.title.toLowerCase().replace(/\s+/g, '-')}`}>
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Our expert technicians are available 24/7 for emergency service throughout Tucson and surrounding areas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:520-333-2665" data-testid="link-phone-cta">
                    <Button size="lg" variant="secondary" data-testid="button-call-now">
                      Call 520-333-2665
                    </Button>
                  </a>
                  <Link href="/contact" data-testid="link-contact-cta">
                    <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-schedule">
                      Schedule Service
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
