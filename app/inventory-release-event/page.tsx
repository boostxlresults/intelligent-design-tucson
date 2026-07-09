import { Metadata } from 'next';
import Image from 'next/image';
import { Phone, CheckCircle2, Clock, Shield, Award, Star, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HVACInventoryForm } from '@/components/forms/HVACInventoryForm';

export const metadata: Metadata = {
  title: 'One-Day HVAC Inventory Release | Up to 50% Off | Intelligent Design Tucson',
  description: 'Limited one-day event: 4 brand-new, unused HVAC systems from previous model year must be installed to clear inventory. Up to 50% off for qualified Tucson homeowners. Forever Warranty available.',
  robots: {
    index: false,
    follow: false,
  },
};

const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "One-Day HVAC Inventory Release Event",
  "description": "4 brand-new, unused HVAC systems from previous model year available at up to 50% off for qualified Tucson homeowners",
  "eligibleRegion": {
    "@type": "Place",
    "name": "Tucson, AZ"
  },
  "itemOffered": {
    "@type": "Service",
    "name": "HVAC System Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
    }
  }
};

export default function HVACInventoryEventPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema)
        }}
      />

      <div className="min-h-screen flex flex-col bg-background">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/generated_images/hvac_inventory_event.png"
              alt="Premium HVAC system installation in Tucson"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(13,45,122,0.85)]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full font-bold mb-6 animate-pulse">
                <AlertCircle className="w-5 h-5" />
                ONLY 4 UNITS AVAILABLE
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
                One-Day HVAC Inventory Release
              </h1>
              
              <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-4" data-testid="text-hero-offer">
                Up to 50% Off Premium HVAC Installation
              </p>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-description">
                We have 4 brand-new, unused HVAC systems from a previous model year that must be installed to clear inventory. Once claimed, this event ends.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto font-bold">
                  <a href="#claim-unit" data-testid="button-claim-hero">
                    Check Availability Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  <a href="tel:5203332665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" /> (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Scarcity Counter Section */}
        <section className="py-8 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6" />
              <p className="text-xl font-bold">
                ONE DAY ONLY — When these 4 units are gone, the offer ends
              </p>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes This Different</h2>
              <p className="text-xl text-muted-foreground">
                This is not a recurring promotion. It's a one-time inventory release.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Brand-new, never installed equipment",
                "Top-of-the-line premium systems",
                "Previous model year — fully supported",
                "Up to 50% off installation costs",
                "Forever Warranty available",
                "Professional installation by trusted local team",
                "Same high-efficiency performance",
                "Limited to 4 qualified homeowners"
              ].map((benefit, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-5 flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-lg">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators - Compact */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-5 text-center">
                  <Star className="w-10 h-10 mx-auto mb-2 fill-yellow-400 text-yellow-400" />
                  <div className="text-2xl font-bold text-primary">5.0</div>
                  <p className="text-sm text-muted-foreground">3,500+ Google Reviews</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 text-center">
                  <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">A+</div>
                  <p className="text-sm text-muted-foreground">BBB Rated</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 text-center">
                  <Clock className="w-10 h-10 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">46+</div>
                  <p className="text-sm text-muted-foreground">Years Serving Tucson</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 text-center">
                  <Shield className="w-10 h-10 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground">Satisfaction Guaranteed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Claim Form Section */}
        <section id="claim-unit" className="py-16">
          <div className="max-w-xl mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold mb-4">
                <AlertCircle className="w-5 h-5" />
                Only 4 Units Available
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-form-title">
                Claim Your Unit
              </h2>
              <p className="text-lg text-muted-foreground">
                Submit your information to check availability and reserve your spot
              </p>
            </div>

            <HVACInventoryForm />

            <p className="text-center text-sm text-muted-foreground mt-6">
              These units move quickly. After submitting, call us immediately at{' '}
              <a href="tel:5203332665" className="text-primary font-semibold hover:underline">
                (520) 333-2665
              </a>{' '}
              to confirm availability.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss This Opportunity
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Most people will miss this. Four homeowners won't.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto font-bold">
                <a href="#claim-unit" data-testid="button-claim-footer">
                  Reserve Your Unit Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                <a href="tel:5203332665" data-testid="button-call-footer">
                  <Phone className="w-5 h-5 mr-2" /> Call (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
