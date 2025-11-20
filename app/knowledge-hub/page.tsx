import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, BookOpen, Video, MessageSquare, AlertCircle, FileText, Zap, Droplets, Sun, Wrench, Home, Lightbulb, Award, Users, ShieldCheck, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';
import Image from 'next/image';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Intelligent Design Knowledge Hub | Expert Home Services Education Center Tucson AZ',
  description: 'Your comprehensive resource for HVAC, plumbing, solar, electrical, and roofing education. Access 230+ expert articles, video tutorials, FAQs, and guides from Tucson\'s trusted home services company.',
  canonicalUrl: 'https://intelligentdesignac.com/knowledge-hub',
  keywords: ['home services education', 'HVAC guides', 'plumbing tips', 'solar information', 'electrical advice', 'roofing resources', 'Tucson home improvement', 'home maintenance guides'],
});

interface ResourceCategory {
  title: string;
  description: string;
  icon: any;
  href: string;
  count?: string;
  color: string;
}

export default function KnowledgeHubPage() {
  const featuredResources: ResourceCategory[] = [
    {
      title: 'Video Education Library',
      description: 'Watch our complete collection of educational videos covering HVAC systems, plumbing, solar installation, and electrical work. Learn from expert technicians with visual demonstrations.',
      icon: Video,
      href: '/education-library',
      color: 'text-red-600',
    },
    {
      title: 'Air Conditioning System FAQs',
      description: 'Get answers to 15 comprehensive questions about AC systems, including maintenance, efficiency, troubleshooting, and when to call professionals. Features expert video explanations.',
      icon: MessageSquare,
      href: '/ac-system-faqs',
      color: 'text-blue-600',
    },
    {
      title: 'R22 Refrigerant Phaseout Guide',
      description: 'Understanding the EPA refrigerant phase-out and what it means for your air conditioning system. Learn about replacement options, costs, and timelines.',
      icon: AlertCircle,
      href: '/r22-phaseout',
      color: 'text-orange-600',
    },
  ];

  const blogCategories: ResourceCategory[] = [
    {
      title: 'HVAC & Air Conditioning',
      description: 'Expert guides on air conditioning repair, maintenance, energy efficiency, system selection, and troubleshooting common AC issues in Tucson\'s desert climate.',
      icon: Zap,
      href: '/blog/hvac',
      count: '92 articles',
      color: 'text-blue-600',
    },
    {
      title: 'Plumbing',
      description: 'Comprehensive plumbing resources covering water heaters, leak detection, drain clearing, water filtration, fixture installation, and preventive maintenance.',
      icon: Droplets,
      href: '/blog/plumbing',
      count: '47 articles',
      color: 'text-cyan-600',
    },
    {
      title: 'Solar Energy',
      description: 'Everything you need to know about residential and commercial solar installation, tax credits, energy monitoring, cost analysis, and ROI calculations.',
      icon: Sun,
      href: '/blog/solar',
      count: '46 articles',
      color: 'text-yellow-600',
    },
    {
      title: 'Home Tips & Advice',
      description: 'Practical homeowner guides for seasonal maintenance, energy savings, indoor air quality, system efficiency, and protecting your home investment.',
      icon: Home,
      href: '/blog/home-tips',
      count: '43 articles',
      color: 'text-green-600',
    },
    {
      title: 'Roofing',
      description: 'Professional roofing insights including repair vs. replacement decisions, material comparisons, maintenance schedules, and protecting your roof investment.',
      icon: Wrench,
      href: '/blog/roofing',
      count: '2 articles',
      color: 'text-gray-600',
    },
    {
      title: 'Electrical',
      description: 'Electrical safety tips, panel upgrades, generator installation, lighting efficiency, and understanding your home\'s electrical systems.',
      icon: Lightbulb,
      href: '/blog/electrical',
      count: '1 article',
      color: 'text-purple-600',
    },
  ];

  const whyTrustUs = [
    {
      icon: Award,
      title: 'Family & Veteran Owned',
      description: 'Serving Tucson with integrity and pride since our founding. Our commitment to quality service runs deep.',
    },
    {
      icon: Users,
      title: '22,000+ Happy Customers',
      description: 'Over two decades of trusted service with a 5.0-star Google rating and thousands of satisfied homeowners.',
    },
    {
      icon: ShieldCheck,
      title: 'Licensed & Certified',
      description: 'Fully licensed, insured, and EPA-certified technicians with ongoing training in the latest technologies.',
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Services',
      description: 'HVAC, plumbing, solar, electrical, roofing, and drain/sewer services—all from one trusted company.',
    },
  ];

  // Generate Organization schema for SEO
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Intelligent Design - Knowledge Hub',
    description: 'Comprehensive home services education center providing expert resources on HVAC, plumbing, solar, electrical, and roofing systems.',
    url: 'https://intelligentdesignac.com/knowledge-hub',
    publisher: {
      '@type': 'Organization',
      name: 'Intelligent Design',
      logo: {
        '@type': 'ImageObject',
        url: 'https://intelligentdesignac.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://intelligentdesignac.com/knowledge-hub',
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
              Intelligent Design Knowledge Hub
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4" data-testid="text-hero-subtitle">
              Your Complete Home Services Education Center
            </p>
            <p className="text-lg text-white/80 mb-8" data-testid="text-hero-description">
              Access 230+ expert articles, video tutorials, comprehensive FAQs, and professional guides covering HVAC, plumbing, solar, electrical, and roofing systems. Learn from Tucson's most trusted home services company with over 22,000 satisfied customers.
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
              Knowledge Hub
            </span>
          </div>
        </div>
      </nav>

      {/* Featured Resources Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-featured-title">
              Featured Educational Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most comprehensive guides and resources to help you understand and maintain your home systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <Link key={index} href={resource.href} data-testid={`link-featured-${index}`}>
                <Card className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer">
                  <CardHeader>
                    <resource.icon className={`w-12 h-12 mb-4 ${resource.color}`} />
                    <CardTitle className="text-xl" data-testid={`text-featured-title-${index}`}>
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-base" data-testid={`text-featured-description-${index}`}>
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-semibold">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-blog-title">
              Expert Articles by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our library of 230+ in-depth articles written by licensed professionals with decades of experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogCategories.map((category, index) => (
              <Link key={index} href={category.href} data-testid={`link-category-${index}`}>
                <Card className="h-full hover-elevate active-elevate-2 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <category.icon className={`w-10 h-10 ${category.color}`} />
                      {category.count && (
                        <span className="text-sm font-semibold text-muted-foreground" data-testid={`text-category-count-${index}`}>
                          {category.count}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl" data-testid={`text-category-title-${index}`}>
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-base" data-testid={`text-category-description-${index}`}>
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-semibold">
                      Browse Articles <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" data-testid="button-view-all-blogs">
              <Link href="/blog">
                View All 230+ Articles <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Trust Intelligent Design Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-trust-title">
              Why Trust Intelligent Design?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              For over two decades, we've been Tucson's most trusted source for home services expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyTrustUs.map((item, index) => (
              <Card key={index} data-testid={`card-trust-${index}`}>
                <CardHeader className="text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg" data-testid={`text-trust-title-${index}`}>
                    {item.title}
                  </CardTitle>
                  <CardDescription data-testid={`text-trust-description-${index}`}>
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics We Cover Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-topics-title">
              Comprehensive Home Services Topics
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about maintaining and improving your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">HVAC & Air Conditioning</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AC repair and troubleshooting</li>
                <li>• System maintenance schedules</li>
                <li>• Energy efficiency optimization</li>
                <li>• SEER ratings explained</li>
                <li>• Duct cleaning and sealing</li>
                <li>• Smart thermostat installation</li>
                <li>• Indoor air quality solutions</li>
                <li>• Heat pump systems</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Plumbing Systems</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Water heater selection & repair</li>
                <li>• Leak detection methods</li>
                <li>• Drain clearing solutions</li>
                <li>• Water filtration systems</li>
                <li>• Fixture installation guides</li>
                <li>• Sewer line inspection</li>
                <li>• Water softener benefits</li>
                <li>• Preventive maintenance</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Solar Energy</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Residential solar installation</li>
                <li>• Tax credits and incentives</li>
                <li>• ROI calculations</li>
                <li>• System sizing guides</li>
                <li>• Energy monitoring</li>
                <li>• Maintenance requirements</li>
                <li>• Battery storage options</li>
                <li>• Commercial solar solutions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Electrical Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Panel upgrades</li>
                <li>• Generator installation</li>
                <li>• Lighting efficiency</li>
                <li>• Outlet and switch repair</li>
                <li>• Circuit breaker issues</li>
                <li>• Home energy audits</li>
                <li>• Safety inspections</li>
                <li>• Smart home integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Roofing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Repair vs. replacement</li>
                <li>• Material comparisons</li>
                <li>• Roof coating benefits</li>
                <li>• Inspection schedules</li>
                <li>• Storm damage assessment</li>
                <li>• Skylight installation</li>
                <li>• Ventilation systems</li>
                <li>• Warranty information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Home Maintenance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Seasonal checklists</li>
                <li>• Energy saving tips</li>
                <li>• DIY vs. professional</li>
                <li>• System lifespan guides</li>
                <li>• Emergency preparedness</li>
                <li>• Cost-saving strategies</li>
                <li>• Home value protection</li>
                <li>• Warranty management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Need Expert Help With Your Home Systems?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Our licensed technicians are ready to help with HVAC, plumbing, solar, electrical, and roofing services throughout Tucson and surrounding areas.
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
