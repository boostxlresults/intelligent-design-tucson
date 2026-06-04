import { Metadata } from 'next';
import { generateMetadata as generateFullMetadata } from '@/lib/seo/generateMetadata';
import { SchedulerCluster } from '@/components/SchedulerCluster';
import Link from 'next/link';
import { CheckCircle2, Shield, Clock, Award, ThermometerSun, Zap, DollarSign, Star, Phone, ArrowRight } from 'lucide-react';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';
import { SITE_URL } from '@/lib/constants';
import ClientSchemas from '@/components/schemas/ClientSchemas';
import QuoteCallout from '@/components/integrations/QuoteCallout';

const productSchemas = getPageSchemas({
  pageType: 'product',
  canonicalUrl: `${SITE_URL}/new-air-conditioner`,
  pageData: {
    productCategory: 'HVAC'
  }
});

export const metadata: Metadata = generateFullMetadata({
  title: 'New Air Conditioner Tucson | AC Replacement from $7,000 | Same-Day Install',
  description: 'Get a new air conditioner installed in Tucson starting at $7,000. Same-day AC replacement available. Free instant online estimate in 2 minutes. 23,000+ five-star reviews. Lennox, Trane, Carrier. Financing available. Call (520) 333-2665.',
  canonicalUrl: '/new-air-conditioner',
  keywords: [
    'new air conditioner',
    'new air conditioner tucson',
    'ac replacement',
    'ac replacement tucson',
    'ac unit replacement',
    'new ac unit',
    'new ac system',
    'air conditioner replacement',
    'replace ac unit',
    'new central air conditioner',
    'ac installation tucson'
  ],
  type: 'website'
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a new air conditioner cost in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A new air conditioner in Tucson costs between $7,000 and $25,000 installed, depending on system size, efficiency rating (SEER), and brand. A standard 3-ton, 15 SEER central AC replacement averages $8,500-$12,000. High-efficiency 18+ SEER systems range from $12,000-$18,000. Intelligent Design offers free instant online estimates and flexible financing options including 0% APR."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to replace an air conditioner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most AC replacements are completed in one day (6-10 hours). Intelligent Design offers same-day AC replacement for emergency situations when your system fails during Tucson's extreme summer heat. Complex installations requiring ductwork modifications or electrical upgrades may take 2 days."
      }
    },
    {
      "@type": "Question",
      "name": "What are signs I need a new air conditioner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key signs you need a new air conditioner include: your AC is 10-15+ years old, frequent repairs costing more than $1,000/year, rising electricity bills despite maintenance, uneven cooling throughout your home, the system uses R-22 refrigerant (phased out), or your AC cannot keep up with Tucson's 100°F+ summer temperatures."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best air conditioner brand for Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best AC brands for Tucson's extreme heat include Lennox (highest efficiency ratings up to 26 SEER), Trane (exceptional durability), and Carrier (excellent value). Intelligent Design is a factory-authorized dealer for all major brands and can recommend the best system for your home size, budget, and efficiency goals."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer financing for a new air conditioner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Intelligent Design offers flexible financing for new air conditioner installations including 0% APR for qualified buyers, low monthly payments starting under $100/month, and same-as-cash options. Many homeowners find that the energy savings from a new high-efficiency AC system offset the monthly financing payment."
      }
    },
    {
      "@type": "Question",
      "name": "What size air conditioner do I need for my home in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AC sizing for Tucson homes depends on square footage, insulation, and our extreme summer heat. General guidelines: 1,000-1,500 sq ft needs 2-2.5 tons, 1,500-2,000 sq ft needs 2.5-3 tons, 2,000-2,500 sq ft needs 3-3.5 tons, and 2,500-3,000 sq ft needs 3.5-4 tons. Our free online estimator calculates the right size for your specific home."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "New Air Conditioner Installation Tucson",
  "description": "Professional new air conditioner installation and AC replacement in Tucson, AZ. Same-day service available. Starting at $7,000 installed with manufacturer warranty.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4740 S Park Ave",
      "addressLocality": "Tucson",
      "addressRegion": "AZ",
      "postalCode": "85714"
    },
    "telephone": "+1-520-333-2665",
    "url": "https://www.idesignac.com",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "23000",
      "bestRating": "5"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson",
    "containedInPlace": {
      "@type": "State",
      "name": "Arizona"
    }
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "7000",
    "highPrice": "25000",
    "priceCurrency": "USD",
    "offerCount": "12"
  },
  "serviceType": "Air Conditioner Replacement",
  "termsOfService": "https://www.idesignac.com/guarantees"
};

export default function NewAirConditionerPage() {
  return (
    <div className="min-h-screen bg-background">
      <ClientSchemas schemas={productSchemas} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Hero Section — Keyword-Optimized */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              New Air Conditioner Installation in Tucson
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              AC Replacement Starting at $7,000 Installed — Same-Day Service Available
            </p>
            <p className="text-lg opacity-90 mb-8">
              Get an instant online estimate in under 2 minutes. No salesperson, no pressure.
            </p>
            
            {/* Trust Bar */}
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="font-semibold">23,000+ Five-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Same-Day Installation</span>
              </div>
            </div>

            {/* Dual CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+15203332665"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (520) 333-2665
              </a>
              <a
                href="#instant-estimate"
                className="inline-flex items-center justify-center gap-2 bg-[#c41230] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#a10f28] transition-colors border-2 border-white/30"
              >
                Get Instant Estimate
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Estimate CTA — Native CC Widget */}
      <div id="instant-estimate">
        <QuoteCallout
          journeyType="systemQuote"
          navigatorKey="NzdTlJWvihCCWjsf"
        />
      </div>

      {/* Why Replace Your AC — Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              When Do You Need a New Air Conditioner?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                If your air conditioner is struggling to keep your Tucson home cool during our 100°F+ summers, 
                it may be time for a replacement. A new air conditioner not only restores comfort but can cut your 
                electricity bills by 20-40% compared to an aging, inefficient system. Modern AC units with 16-26 SEER 
                ratings are engineered specifically for extreme desert climates like ours.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Intelligent Design, we have installed over 10,000 new air conditioners across Tucson since 1979. 
                As factory-authorized dealers for Lennox, Trane, Carrier, Rheem, and Goodman, we offer the full range 
                of options from budget-friendly to premium — all professionally installed by our licensed technicians 
                with a 100% satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="bg-card py-12 md:py-16 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              6 Signs You Need a New Air Conditioner
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              If you are experiencing any of these issues, a new AC system will save you money and restore comfort
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">AC is 10-15+ Years Old</h3>
                    <p className="text-muted-foreground text-sm">
                      The average AC lifespan in Tucson is 12-15 years due to extreme heat stress. Older units lose efficiency every year.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Frequent Expensive Repairs</h3>
                    <p className="text-muted-foreground text-sm">
                      If you are spending $1,000+ per year on AC repairs, a new system pays for itself in avoided repair costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Rising Electric Bills</h3>
                    <p className="text-muted-foreground text-sm">
                      A new high-efficiency AC can cut summer electricity costs by 20-40% compared to a 10+ year old system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Uneven Cooling</h3>
                    <p className="text-muted-foreground text-sm">
                      Hot spots, rooms that will not cool, or constant thermostat adjustments indicate your AC cannot handle the load.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Uses R-22 Refrigerant</h3>
                    <p className="text-muted-foreground text-sm">
                      R-22 (Freon) is phased out and costs $150-300 per pound. A new system uses R-410A at a fraction of the cost.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Cannot Keep Up with Heat</h3>
                    <p className="text-muted-foreground text-sm">
                      If your AC runs all day but cannot reach your set temperature during Tucson summers, it is undersized or failing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              New Air Conditioner Pricing in Tucson
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Every installation includes removal of your old system, 
              permits, and full manufacturer warranty.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Budget Option */}
              <div className="bg-background border rounded-lg overflow-hidden">
                <div className="bg-muted p-4 text-center">
                  <h3 className="text-lg font-bold">Budget-Friendly</h3>
                  <p className="text-sm text-muted-foreground">15 SEER • Great Value</p>
                </div>
                <div className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$7,000–$10,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Installed with warranty</p>
                  <ul className="text-sm text-left space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Goodman or Rheem</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 15 SEER efficiency</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 10-year parts warranty</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Full installation included</li>
                  </ul>
                </div>
              </div>

              {/* Mid-Range Option */}
              <div className="bg-background border-2 border-primary rounded-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                  Most Popular
                </div>
                <div className="bg-primary/10 p-4 text-center">
                  <h3 className="text-lg font-bold">Best Value</h3>
                  <p className="text-sm text-muted-foreground">16-18 SEER • Balanced</p>
                </div>
                <div className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$10,000–$16,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Installed with warranty</p>
                  <ul className="text-sm text-left space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Trane or Carrier</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 16-18 SEER efficiency</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 12-year parts warranty</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Smart thermostat included</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 20-40% energy savings</li>
                  </ul>
                </div>
              </div>

              {/* Premium Option */}
              <div className="bg-background border rounded-lg overflow-hidden">
                <div className="bg-muted p-4 text-center">
                  <h3 className="text-lg font-bold">Premium</h3>
                  <p className="text-sm text-muted-foreground">20-26 SEER • Maximum Savings</p>
                </div>
                <div className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$16,000–$25,000</div>
                  <p className="text-sm text-muted-foreground mb-4">Installed with warranty</p>
                  <ul className="text-sm text-left space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Lennox or Trane XL</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 20-26 SEER efficiency</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Lifetime compressor warranty</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Variable-speed technology</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Lowest possible energy bills</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8 text-sm">
              All prices include professional installation, old system removal, permits, and warranty registration. 
              Financing available from $89/month with approved credit.
            </p>
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <QuoteCallout
        journeyType="systemQuote"
        heading="Ready for Your New Air Conditioner?"
        description="See exact pricing for your home in under 2 minutes. Compare brands, efficiency levels, and financing options."
        buttonText="Get My Exact Price Now"
      />

      {/* What's Included */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What is Included with Your New Air Conditioner
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
              Every AC replacement from Intelligent Design includes everything you need — no surprise charges
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ThermometerSun className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Complete AC System</h3>
                <p className="text-sm text-muted-foreground">Indoor and outdoor units, matched for peak performance</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Expert Installation</h3>
                <p className="text-sm text-muted-foreground">Licensed, factory-trained technicians with 46+ years experience</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Full Warranty</h3>
                <p className="text-sm text-muted-foreground">Manufacturer warranty registered and activated on day one</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Financing Available</h3>
                <p className="text-sm text-muted-foreground">0% APR options and payments as low as $89/month</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-card py-12 md:py-16 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Why Tucson Chooses Intelligent Design for New Air Conditioners
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">23,000+</div>
                <h3 className="text-xl font-bold mb-2">Five-Star Reviews</h3>
                <p className="text-muted-foreground">
                  More verified reviews than any HVAC company in Southern Arizona. Real feedback from your neighbors.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">46+</div>
                <h3 className="text-xl font-bold mb-2">Years in Tucson</h3>
                <p className="text-muted-foreground">
                  Family and veteran-owned since 1979. Three generations of AC installation expertise in the desert.
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <h3 className="text-xl font-bold mb-2">AC Systems Installed</h3>
                <p className="text-muted-foreground">
                  We have replaced more air conditioners in Tucson than any other company. We know desert HVAC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              New Air Conditioner FAQs
            </h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How much does a new air conditioner cost in Tucson?</h3>
                <p className="text-muted-foreground">
                  A new air conditioner in Tucson costs between $7,000 and $25,000 installed, depending on system size, 
                  efficiency rating (SEER), and brand. A standard 3-ton, 15 SEER central AC replacement averages $8,500-$12,000. 
                  High-efficiency 18+ SEER systems range from $12,000-$18,000. Use our free instant estimator above to see 
                  pricing specific to your home.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">How long does it take to replace an air conditioner?</h3>
                <p className="text-muted-foreground">
                  Most AC replacements are completed in one day (6-10 hours). We offer same-day AC replacement for emergency 
                  situations when your system fails during Tucson&apos;s extreme summer heat. Complex installations requiring 
                  ductwork modifications or electrical upgrades may take 2 days.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What are signs I need a new air conditioner?</h3>
                <p className="text-muted-foreground">
                  Key signs include: your AC is 10-15+ years old, frequent repairs costing more than $1,000/year, 
                  rising electricity bills despite maintenance, uneven cooling throughout your home, the system uses 
                  R-22 refrigerant (phased out), or your AC cannot keep up with Tucson&apos;s 100°F+ summer temperatures.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What is the best air conditioner brand for Tucson?</h3>
                <p className="text-muted-foreground">
                  The best AC brands for Tucson&apos;s extreme heat include Lennox (highest efficiency ratings up to 26 SEER), 
                  Trane (exceptional durability), and Carrier (excellent value). As factory-authorized dealers for all major 
                  brands, we recommend the best system for your home size, budget, and efficiency goals.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer financing for a new air conditioner?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer flexible financing including 0% APR for qualified buyers, low monthly payments starting 
                  under $100/month, and same-as-cash options. Many homeowners find that the energy savings from a new 
                  high-efficiency AC system offset the monthly financing payment.
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">What size air conditioner do I need for my home?</h3>
                <p className="text-muted-foreground">
                  AC sizing for Tucson homes depends on square footage, insulation, and our extreme summer heat. 
                  General guidelines: 1,000-1,500 sq ft needs 2-2.5 tons, 1,500-2,000 sq ft needs 2.5-3 tons, 
                  2,000-2,500 sq ft needs 3-3.5 tons, and 2,500-3,000 sq ft needs 3.5-4 tons. Our free online 
                  estimator calculates the right size for your specific home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your New Air Conditioner Installed This Week
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Same-day and next-day AC replacement available. Call now or get an instant online estimate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+15203332665"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (520) 333-2665
              </a>
              <a
                href="#instant-estimate"
                className="inline-flex items-center justify-center gap-2 bg-[#c41230] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#a10f28] transition-colors border-2 border-white/30"
              >
                Get Instant Online Estimate
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              Serving all of Greater Tucson for new air conditioner installation:{' '}
              <Link href="/service-areas" className="text-primary hover:underline">Tucson</Link>,{' '}
              Oro Valley, Marana, Sahuarita, Vail, Green Valley, Catalina Foothills, Tanque Verde, Casas Adobes, and Rita Ranch.
            </p>
          </div>
        </div>
      </section>

      {/* Scheduler */}
      <SchedulerCluster position="bottom" />
    </div>
  );
}
