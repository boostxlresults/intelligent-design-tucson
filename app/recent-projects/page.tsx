import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Award, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';
import RealWorkLabsWidget from '@/components/integrations/RealWorkLabsWidget';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Recent Projects | Real Home Service Results in Tucson AZ',
  description: 'See our latest HVAC, plumbing, solar, electrical, and roofing projects in Tucson. Browse before and after photos, customer testimonials, and project details from Intelligent Design.',
  canonicalUrl: 'https://www.idesignac.com/recent-projects',
  keywords: ['recent projects', 'HVAC installations Tucson', 'before and after', 'customer projects', 'home improvements', 'project gallery', 'Tucson home services'],
});

export default function RecentProjectsPage() {
  const projectStats = [
    {
      icon: CheckCircle,
      number: '22,000+',
      label: 'Projects Completed',
      description: 'Successfully completed home service projects',
    },
    {
      icon: Star,
      number: '5.0',
      label: 'Average Rating',
      description: 'Based on thousands of customer reviews',
    },
    {
      icon: Award,
      number: '20+',
      label: 'Years Experience',
      description: 'Serving Tucson families since 2003',
    },
    {
      icon: Users,
      number: '100%',
      label: 'Satisfaction Rate',
      description: 'Backed by our satisfaction guarantee',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
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
              Recent Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4" data-testid="text-hero-subtitle">
              See Our Latest Home Service Installations & Repairs
            </p>
            <p className="text-lg text-white/80 mb-8" data-testid="text-hero-description">
              Browse real projects from Tucson homeowners who trusted Intelligent Design for HVAC, plumbing, solar, electrical, and roofing services. See the quality craftsmanship and attention to detail that has earned us 22,000+ satisfied customers.
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
              Recent Projects
            </span>
          </div>
        </div>
      </nav>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <Card key={index} data-testid={`card-stat-${index}`}>
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="text-4xl font-bold text-primary mb-2" data-testid={`text-stat-number-${index}`}>
                    {stat.number}
                  </p>
                  <p className="font-semibold text-lg mb-1" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-stat-description-${index}`}>
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section with RealWorkLabs Widget */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-projects-title">
              Browse Our Latest Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore real installations and repairs from homeowners across Tucson and surrounding areas
            </p>
          </div>

          {/* RealWorkLabs Widget Container */}
          <div className="bg-card rounded-lg border border-border p-6">
            <RealWorkLabsWidget 
              serviceType="all"
              limit={12}
              showLoadingState={true}
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Showing recent projects from across all service categories. Each project includes real customer reviews matched with actual job details from our ServiceTitan system.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-categories-title">
              Project Types We Complete
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive home services for every need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary">HVAC Projects</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AC installations and replacements</li>
                  <li>• Heater system upgrades</li>
                  <li>• Ductless mini-split installations</li>
                  <li>• Duct cleaning and sealing</li>
                  <li>• Smart thermostat installations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary">Plumbing Projects</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Water heater replacements</li>
                  <li>• Whole-home repiping</li>
                  <li>• Water filtration systems</li>
                  <li>• Leak detection and repair</li>
                  <li>• Fixture installations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary">Solar Projects</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Residential solar panel installations</li>
                  <li>• Commercial solar systems</li>
                  <li>• Solar + battery storage</li>
                  <li>• Energy monitoring systems</li>
                  <li>• Solar AC solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary">Electrical Projects</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Panel upgrades and replacements</li>
                  <li>• Generator installations</li>
                  <li>• Lighting upgrades</li>
                  <li>• Outlet and switch installations</li>
                  <li>• Home energy audits</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary">Roofing Projects</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Roof replacements</li>
                  <li>• Roof repairs and maintenance</li>
                  <li>• Roof coating applications</li>
                  <li>• Skylight installations</li>
                  <li>• Commercial roofing</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary">Drain & Sewer Projects</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sewer line repairs</li>
                  <li>• Camera inspections</li>
                  <li>• Trenchless pipe repair</li>
                  <li>• Drain clearing services</li>
                  <li>• Preventive maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Join thousands of satisfied Tucson homeowners who trust Intelligent Design for quality craftsmanship and exceptional service.
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
