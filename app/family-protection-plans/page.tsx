import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Shield, Clock, Award, Wrench, Phone, Calendar, ThermometerSun, Droplets, Zap, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Family Protection Plans | Home Maintenance Plans | Intelligent Design Tucson',
  description: 'Protect your Tucson home with our Family Protection Plans. Includes annual HVAC tune-ups, plumbing inspections, electrical safety checks, 15% off repairs, priority service, and 24/7 emergency support. Choose from Signature, Deluxe, and Ultimate plans.',
  canonicalUrl: 'https://www.idesignac.com/family-protection-plans',
  keywords: ['family protection plan Tucson', 'home maintenance plan', 'HVAC maintenance', 'plumbing inspection', 'home service agreement', 'Tucson home protection'],
});

const planSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Family Protection Plans",
  "description": "Comprehensive home protection plans covering HVAC, plumbing, electrical, and roofing systems with annual inspections, repair discounts, and priority service",
  "brand": {
    "@type": "Organization",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "199",
    "highPrice": "499",
    "offerCount": "3"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in the Family Protection Plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Family Protection Plans include annual system inspections, tune-ups, priority scheduling, repair discounts of 15% or more, no dispatch fees, and 24/7 emergency service. Coverage varies by plan tier (Signature, Deluxe, or Ultimate)."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a Family Protection Plan cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our plans start at $199/year for the Signature Plan covering HVAC maintenance, up to $499/year for the Ultimate Plan covering all home systems including HVAC, plumbing, electrical, roofing, and water heater."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel my protection plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can cancel at any time. We offer prorated refunds for unused portions of annual plans."
      }
    }
  ]
};

export default function FamilyProtectionPlansPage() {
  const plans = [
    {
      name: "Signature Plan",
      price: "$199",
      period: "/year",
      description: "Essential HVAC protection for peace of mind",
      features: [
        "Annual HVAC Tune-Up & Inspection",
        "Priority Scheduling",
        "15% OFF All HVAC Repairs",
        "No Dispatch Fees",
        "24/7 Emergency Service",
        "Filter Reminders",
      ],
      highlighted: false,
    },
    {
      name: "Deluxe Plan",
      price: "$349",
      period: "/year",
      description: "Complete HVAC & Plumbing protection",
      features: [
        "Everything in Signature, PLUS:",
        "Annual Plumbing Inspection",
        "Water Heater Inspection",
        "15% OFF All Plumbing Repairs",
        "Drain Camera Inspection",
        "Priority Front-of-Line Service",
      ],
      highlighted: true,
    },
    {
      name: "Ultimate Plan",
      price: "$499",
      period: "/year",
      description: "Total home system protection",
      features: [
        "Everything in Deluxe, PLUS:",
        "Electrical Safety Inspection",
        "Roofing Inspection",
        "15% OFF All Repairs (All Services)",
        "Vouchers Toward System Replacements",
        "VIP Priority Service",
      ],
      highlighted: false,
    },
  ];

  const benefits = [
    {
      icon: ThermometerSun,
      title: "HVAC Maintenance",
      description: "Keep your AC and heating running efficiently with annual tune-ups and inspections"
    },
    {
      icon: Droplets,
      title: "Plumbing Protection",
      description: "Prevent costly water damage with professional plumbing inspections and maintenance"
    },
    {
      icon: Zap,
      title: "Electrical Safety",
      description: "Ensure your home's electrical system is safe and up to code with expert inspections"
    },
    {
      icon: Home,
      title: "Roofing Inspection",
      description: "Catch small issues before they become expensive repairs with annual roof checks"
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(planSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <section 
          className="relative bg-cover bg-center py-24 md:py-32"
          style={{
            backgroundImage: 'linear-gradient(rgba(13, 45, 122, 0.85), rgba(13, 45, 122, 0.85)), url(/images/hvac-hero.jpg)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold mb-6">
                <Shield className="w-5 h-5" />
                HOME PROTECTION
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
                Family Protection Plans
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-4" data-testid="text-hero-subtitle">
                Protect Your Home. Protect Your Family.
              </p>
              <p className="text-xl text-white/90 mb-8" data-testid="text-hero-description">
                Annual maintenance plans that keep your HVAC, plumbing, electrical, and roofing systems running smoothly — with priority service and repair discounts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                  <a href="#plans" data-testid="button-view-plans-hero">
                    View Plans <Calendar className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  <a href="tel:+1520-333-2665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" /> (520) 333-2665
                  </a>
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
              <span className="text-foreground" data-testid="text-breadcrumb-current">
                Family Protection Plans
              </span>
            </div>
          </div>
        </nav>

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose a Protection Plan?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Regular maintenance extends equipment life, improves efficiency, and prevents costly emergency repairs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" id="plans">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Protection Plan</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select the level of coverage that fits your home and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative ${plan.highlighted ? 'border-primary border-2 shadow-lg' : ''}`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      <p className="text-muted-foreground mt-2">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild
                      className="w-full"
                      variant={plan.highlighted ? 'default' : 'outline'}
                      data-testid={`button-select-plan-${index}`}
                    >
                      <a href="tel:+1520-333-2665">Select Plan</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Plans Include</h2>
              <p className="text-xl text-muted-foreground">
                Every Family Protection Plan comes with these valuable benefits
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Priority Scheduling Over Non-Members",
                "No Dispatch or Service Call Fees",
                "24/7 Emergency Service Availability",
                "15% OFF All Covered Repairs",
                "Seasonal Maintenance Reminders",
                "Transferable Coverage When You Sell",
                "No Extra Charges for Appointment Times",
                "Dedicated Customer Support Line",
              ].map((benefit, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">What is included in the Family Protection Plan?</h3>
                  <p className="text-muted-foreground">
                    Our Family Protection Plans include annual system inspections, tune-ups, priority scheduling, repair discounts of 15% or more, no dispatch fees, and 24/7 emergency service. Coverage varies by plan tier (Signature, Deluxe, or Ultimate).
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">How much does a Family Protection Plan cost?</h3>
                  <p className="text-muted-foreground">
                    Our plans start at $199/year for the Signature Plan covering HVAC maintenance, up to $499/year for the Ultimate Plan covering all home systems including HVAC, plumbing, electrical, roofing, and water heater.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can I cancel my protection plan?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can cancel at any time. We offer prorated refunds for unused portions of annual plans.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Is the plan transferable if I sell my home?</h3>
                  <p className="text-muted-foreground">
                    Yes! All our Family Protection Plans are transferable to the new homeowner, which can be a great selling point for your home.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Home?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of Tucson families who trust Intelligent Design to keep their homes comfortable and safe
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                <a href="tel:+1520-333-2665" data-testid="button-schedule-cta">
                  <Wrench className="w-5 h-5 mr-2" /> Schedule Consultation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                <a href="tel:+1520-333-2665" data-testid="button-call-cta">
                  <Phone className="w-5 h-5 mr-2" /> (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
