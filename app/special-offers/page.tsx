import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Gift, DollarSign, Calendar, Phone, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Special Offers & Promotions | Intelligent Design Tucson',
  description: 'Save on HVAC, plumbing, solar, electrical, and roofing services in Tucson. View current promotions, seasonal discounts, and special financing offers from Intelligent Design.',
  canonicalUrl: '/special-offers',
  keywords: ['hvac deals tucson', 'plumbing discounts', 'air conditioning specials', 'solar financing', 'tucson home service deals'],
});

export default function SpecialOffersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Special Offers', path: '/special-offers' }
  ]);

  const offers = [
    {
      id: 'hvac-inspection',
      title: '86-Point HVAC System Inspection',
      description: 'Comprehensive inspection of your heating and cooling system to identify issues before they become costly repairs.',
      price: 'Starting at $79',
      badge: 'Most Popular',
      features: [
        'Complete system diagnostics',
        'Air filter inspection and replacement recommendations',
        'Thermostat calibration check',
        'Refrigerant level assessment',
        'Written report with recommendations',
      ],
      cta: 'Schedule Inspection',
      link: '/contact',
    },
    {
      id: 'plumbing-service',
      title: 'Plumbing Service Special',
      description: 'Professional plumbing inspection and maintenance to keep your home flowing smoothly.',
      price: 'Call for Pricing',
      badge: 'New Customer Special',
      features: [
        'Leak detection and repair',
        'Water heater inspection',
        'Drain cleaning',
        'Fixture inspection',
        'Priority scheduling',
      ],
      cta: 'Get Quote',
      link: '/contact',
    },
    {
      id: 'solar-consultation',
      title: 'Free Solar Consultation',
      description: 'Discover how much you can save with solar energy. Get a free assessment and customized proposal.',
      price: 'FREE',
      badge: 'Limited Time',
      features: [
        'Energy usage analysis',
        'Custom solar system design',
        'Savings projection report',
        'Financing options review',
        'No obligation quote',
      ],
      cta: 'Schedule Consultation',
      link: '/contact',
    },
    {
      id: 'financing',
      title: 'Flexible Financing Options',
      description: 'Make home improvements affordable with our special financing plans for qualified customers.',
      price: 'As low as 0% APR',
      badge: 'Subject to Credit Approval',
      features: [
        'Competitive rates',
        'Flexible payment terms',
        'Quick approval process',
        'Available for all services',
        'Multiple financing partners',
      ],
      cta: 'Learn More',
      link: '/financing',
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
              <span className="text-foreground">Special Offers</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <Gift className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-page-title">
                Special Offers & Promotions
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Save on expert HVAC, plumbing, solar, electrical, and roofing services in Tucson. Family and veteran-owned company with over 22,000 satisfied customers.
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offers.map((offer) => (
                <Card key={offer.id} className="hover-elevate" data-testid={`card-offer-${offer.id}`}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl font-bold text-foreground flex-1">
                        {offer.title}
                      </h2>
                      {offer.badge && (
                        <Badge variant="default" className="ml-2" data-testid={`badge-offer-${offer.id}`}>
                          {offer.badge}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {offer.description}
                    </p>

                    <div className="flex items-baseline gap-2 mb-6">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-3xl font-bold text-primary">
                        {offer.price}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      {offer.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={offer.link} data-testid={`link-offer-${offer.id}`}>
                      <Button className="w-full" size="lg" data-testid={`button-cta-${offer.id}`}>
                        {offer.cta}
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Intelligent Design?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-sm text-muted-foreground">We stand behind our work with a complete satisfaction guarantee</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">24/7 Emergency Service</h3>
                <p className="text-sm text-muted-foreground">Available around the clock for urgent repairs</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">22,000+ Happy Customers</h3>
                <p className="text-sm text-muted-foreground">Trusted by Tucson families since day one</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Family & Veteran Owned</h3>
                <p className="text-sm text-muted-foreground">Proudly serving our community with integrity</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Save on Quality Service?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Contact us today to learn more about our current promotions and schedule your service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:520-333-2665" data-testid="link-phone-cta">
                    <Button size="lg" variant="secondary" data-testid="button-call-now">
                      Call 520-333-2665
                    </Button>
                  </a>
                  <Link href="/contact" data-testid="link-contact-cta">
                    <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-contact">
                      Contact Us
                    </Button>
                  </Link>
                </div>
                <p className="text-sm mt-6 opacity-75">
                  *Offers subject to change. Some restrictions may apply. Call for details.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
