import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, CheckCircle2, DollarSign, Phone, Droplets, Shield, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';

export const metadata: Metadata = generateSEOMetadata({
  title: '$48.88 Drain Clearing Special | Tucson Plumbing | Intelligent Design',
  description: 'Limited time offer! Get professional drain clearing for just $48.88 in Tucson. Expert plumbers, fast service, satisfaction guaranteed. Clear clogged drains, sinks, and toilets. Call (520) 333-2665 today!',
  canonicalUrl: 'https://www.idesignac.com/drain-clearing-special',
  keywords: ['drain clearing special Tucson', 'drain clearing coupon', 'clogged drain Tucson', 'plumbing special', 'drain unclogging deal'],
});

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "$48.88 Drain Clearing Special",
  "description": "Professional drain clearing service for just $48.88 in the Tucson area",
  "price": "48.88",
  "priceCurrency": "USD",
  "eligibleRegion": {
    "@type": "Place",
    "name": "Tucson, AZ"
  },
  "itemOffered": {
    "@type": "Service",
    "name": "Drain Clearing Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in the $48.88 drain clearing special?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our $48.88 drain clearing special includes professional drain clearing for one drain line using standard methods. This covers most kitchen sink, bathroom sink, shower, and tub clogs. Additional lines or specialty equipment may require an additional charge."
      }
    },
    {
      "@type": "Question",
      "name": "How long is the $48.88 drain clearing offer valid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This special offer is available for a limited time. Call (520) 333-2665 to confirm current availability and schedule your service."
      }
    }
  ]
};

export default function DrainClearingSpecialPage() {
  const benefits = [
    "Professional Licensed Plumbers",
    "Fast Same-Day Service Available",
    "Upfront Pricing - No Hidden Fees",
    "100% Satisfaction Guaranteed",
    "24/7 Emergency Service",
    "Family & Veteran Owned",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="min-h-screen flex flex-col bg-background">
        {/* Hero Section - Optimized with Next.js Image for LCP */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/plumbing-hero.jpg"
              alt="Drain clearing special offer in Tucson"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(13,45,122,0.85)]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold mb-6">
                <DollarSign className="w-5 h-5" />
                LIMITED TIME OFFER
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
                $48.88 Drain Clearing Special
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-4" data-testid="text-hero-price">
                Professional Drain Clearing for Just $48.88
              </p>
              <p className="text-xl text-white/90 mb-8" data-testid="text-hero-description">
                Fast, reliable drain clearing from Tucson's trusted plumbing experts. Clear kitchen sinks, bathroom drains, shower clogs, and more!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                  <a href="tel:5203332665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" /> Claim Special Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  <Link href="/services/drain-clearing" data-testid="link-learn-more-hero">
                    Learn More About Our Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services/drain-clearing" className="hover:text-foreground" data-testid="link-breadcrumb-drain">
                Drain Clearing
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground" data-testid="text-breadcrumb-current">
                $48.88 Special
              </span>
            </div>
          </div>
        </nav>

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Intelligent Design?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tucson's trusted plumbing experts with 23,000+ five-star reviews
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Droplets, title: "Expert Plumbers", description: "Licensed, background-checked technicians with years of experience" },
                { icon: Clock, title: "Fast Service", description: "Same-day service available, we work around your schedule" },
                { icon: Shield, title: "Guaranteed Work", description: "100% satisfaction guaranteed on all drain clearing services" },
                { icon: Award, title: "23,000+ Reviews", description: "Trusted by thousands of Tucson homeowners" },
                { icon: DollarSign, title: "Upfront Pricing", description: "No hidden fees, no surprises - just honest pricing" },
                { icon: Phone, title: "24/7 Available", description: "Emergency drain service when you need it most" },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
              <p className="text-xl text-muted-foreground">
                Professional drain clearing service at an unbeatable price
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/50 border-2 border-primary">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Clear That Clog?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Call now to schedule your $48.88 drain clearing service
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground text-lg px-8 py-6 h-auto">
                  <a href="tel:5203332665" data-testid="button-call-cta">
                    <Phone className="w-5 h-5 mr-2" /> (520) 333-2665
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What is included in the $48.88 drain clearing special?</h3>
                  <p className="text-muted-foreground">
                    Our $48.88 drain clearing special includes professional drain clearing for one drain line using standard methods. This covers most kitchen sink, bathroom sink, shower, and tub clogs. Additional lines or specialty equipment may require an additional charge.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How long is the $48.88 drain clearing offer valid?</h3>
                  <p className="text-muted-foreground">
                    This special offer is available for a limited time. Call (520) 333-2665 to confirm current availability and schedule your service.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What types of drains can you clear?</h3>
                  <p className="text-muted-foreground">
                    We can clear kitchen sinks, bathroom sinks, shower drains, bathtub drains, floor drains, and more. For main sewer line clogs, we offer specialized rooter services.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How quickly can you come out?</h3>
                  <p className="text-muted-foreground">
                    We offer same-day service for most drain clearing calls. For emergencies, we have 24/7 availability to help when you need it most.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Let a Clogged Drain Ruin Your Day</h2>
            <p className="text-xl mb-8 opacity-90">
              Call now and save with our $48.88 drain clearing special
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                <a href="tel:5203332665" data-testid="button-call-final">
                  <Phone className="w-5 h-5 mr-2" /> (520) 333-2665
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                <Link href="/services/drain-clearing" data-testid="link-services-final">
                  View All Drain Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
