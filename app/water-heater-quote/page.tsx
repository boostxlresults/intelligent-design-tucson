import { Metadata } from 'next';
import { generateMetadata as generateFullMetadata } from '@/lib/seo/generateMetadata';
import { SchedulerCluster } from '@/components/SchedulerCluster';
import Link from 'next/link';
import { CheckCircle2, Droplets, Flame, Zap, Clock, Shield, ThermometerSun, Gauge } from 'lucide-react';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';
import { SITE_URL } from '@/lib/constants';
import ClientSchemas from '@/components/schemas/ClientSchemas';
import QuoteCallout from '@/components/integrations/QuoteCallout';

const productSchemas = getPageSchemas({
  pageType: 'product',
  canonicalUrl: `${SITE_URL}/water-heater-quote`,
  pageData: {
    productCategory: 'Water Heater'
  }
});

export const metadata: Metadata = generateFullMetadata({
  title: 'Free Online Water Heater Estimate Tucson | Instant Tank & Tankless Pricing Calculator',
  description: 'Get a free, instant online water heater estimate in under 2 minutes. Use our on-screen pricing calculator to compare tank vs. tankless, gas vs. electric with real installation costs. No home visit required—instant estimates from Tucson\'s top-rated plumbers.',
  canonicalUrl: '/water-heater-quote',
  type: 'website'
});

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Intelligent Design Free Online Water Heater Estimate Calculator",
  "description": "Free instant online water heater estimator for Tucson homeowners. Get an on-screen estimate for tank and tankless water heaters, gas and electric options in under 2 minutes. See budget-friendly and premium packages with real installation pricing — no home visit required.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "url": "https://www.idesignac.com/water-heater-quote",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "provider": {
    "@type": "LocalBusiness",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tucson",
      "addressRegion": "AZ",
      "postalCode": "85713"
    },
    "telephone": "+1-520-333-2665",
    "url": "https://www.idesignac.com"
  },
  "featureList": [
    "Instant on-screen water heater estimate",
    "No home visit required",
    "Compare tank vs. tankless options",
    "See real pricing for gas and electric water heaters",
    "Available 24/7",
    "Same-day installation available"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a new water heater cost in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Tucson, water heater costs range from $1,200 to $4,500+ depending on type and capacity. Standard 40-50 gallon tank water heaters cost $1,200-$2,500 installed. Tankless water heaters range from $2,500-$4,500+ installed. Our free online quote calculator provides accurate pricing based on your specific needs, including gas vs. electric options and capacity requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know what size water heater I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Water heater sizing depends on household size and hot water usage. For tank heaters: 1-2 people need 30-40 gallons, 2-3 people need 40-50 gallons, 3-4 people need 50-65 gallons, and 5+ people need 65-80+ gallons. For tankless, sizing is based on flow rate (GPM) and temperature rise. Our online calculator factors in your bathrooms, appliances, and usage patterns for accurate recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "Should I choose a tank or tankless water heater?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tank water heaters cost less upfront ($1,200-$2,500) and work well for standard hot water needs. Tankless water heaters cost more initially ($2,500-$4,500) but provide endless hot water, are 30% more energy efficient, and last 20+ years vs. 10-15 for tanks. Tankless is ideal for large families, high hot water usage, or long-term savings. Our quote tool compares both options with lifetime cost analysis."
      }
    },
    {
      "@type": "Question",
      "name": "Should I choose gas or electric water heater?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gas water heaters typically cost less to operate (natural gas is cheaper than electricity in Tucson) and heat water faster, but require venting and a gas line. Electric water heaters are easier to install, have no combustion safety concerns, and work anywhere with electrical access. Our quote tool shows energy cost comparisons based on current Tucson utility rates to help you decide."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in water heater installation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our water heater installation includes: the water heater unit, professional installation by licensed plumbers, removal and disposal of your old unit, all necessary permits, expansion tank (if required by code), new water connections, pressure relief valve, and code-compliant installation per Tucson building standards. Gas line modifications or electrical upgrades are itemized separately if needed."
      }
    },
    {
      "@type": "Question",
      "name": "How long does water heater installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard tank water heater replacement typically takes 2-4 hours. Tankless water heater installation may require 4-6 hours due to gas line sizing, venting requirements, or electrical modifications. Same-day installation is available for most situations—we understand going without hot water is an emergency, especially for families with young children."
      }
    },
    {
      "@type": "Question",
      "name": "How long do water heaters last in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tank water heaters typically last 8-12 years in Tucson, though our hard water can shorten lifespan without proper maintenance. Tankless water heaters last 20+ years with regular descaling. Signs your water heater needs replacement include: rusty water, rumbling noises, leaks, inconsistent temperatures, or if it's over 10 years old. Annual flushing extends tank water heater life significantly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer same-day water heater installation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer same-day water heater installation for most situations. We stock common tank sizes (40, 50, and 75-gallon) on our service trucks for immediate replacement. For tankless installations or specialty units, we typically schedule within 1-2 business days. Call (520) 333-2665 for emergency water heater service."
      }
    }
  ]
};

export default function WaterHeaterQuotePage() {
  return (
    <div className="min-h-screen bg-background">
      <ClientSchemas schemas={productSchemas} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-hero">
              Free Instant Online Water Heater Estimate
            </h1>
            <p className="text-xl md:text-2xl mb-4" data-testid="text-hero-subtitle">
              Get an instant on-screen estimate for tank or tankless water heaters
            </p>
            <p className="text-lg opacity-90 mb-6" data-testid="text-hero-tagline">
              No home visit required—see real pricing instantly in under 2 minutes
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white/20 px-4 py-2 rounded-full">Tank Water Heaters</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Tankless Systems</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Gas & Electric</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Hybrid Heat Pump</span>
            </div>
          </div>
        </div>
      </section>

      {/* Failsafe Quote CTA */}
      <QuoteCallout
        journeyType="waterHeaterQuote"
        heading="Get Your Instant Water Heater Estimate"
        description="Answer a few quick questions, get an instant on-screen estimate with real pricing, and schedule installation when you're ready."
        buttonText="Get My Free Estimate"
      />

      {/* Intro Content Section */}
      <section className="py-12 md:py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8">How Much Does a New Water Heater Cost in Tucson?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Need a new water heater for your Tucson home? Our free instant online water heater estimator gives you real, transparent 
              pricing for tank and tankless water heaters in under 2 minutes—no salesperson, no home visit required. Simply answer 
              a few questions about your household size and hot water needs, and you'll see an instant on-screen estimate for 
              gas and electric options with budget-friendly and premium packages from trusted brands. Our online estimate tool is available 24/7.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              <strong>Tucson water heater costs typically range from $1,200 to $4,500+</strong> depending on type 
              (tank vs. tankless), fuel source (gas vs. electric), and capacity. Standard 40-50 gallon tank water 
              heaters run $1,200-$2,500 installed, while tankless systems range from $2,500-$4,500. Our calculator 
              shows complete pricing including installation, permits, and old unit disposal.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tucson's hard water (with high mineral content) can significantly impact water heater lifespan. We factor 
              in local water conditions when recommending equipment and maintenance schedules. For protection against 
              Tucson's mineral-heavy water, consider adding a <Link href="/services/water-filtration" className="text-primary hover:underline">water 
              softener or filtration system</Link> to extend your water heater's life and improve efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Contractor Commerce Widget Container */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div id="concom-navigator" navigator-key="ugVQLX7twEC3x7nG" className="min-h-[600px]" data-testid="widget-water-heater-quote" />
          </div>
        </div>
      </section>

      {/* Water Heater Options */}
      <section className="bg-card py-12 md:py-16 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Choose the Right Water Heater for Your Home
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Compare tank vs. tankless water heaters to find the best fit for your household needs and budget
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Tank Water Heaters</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Traditional storage tank heaters keep 40-80 gallons of hot water ready for immediate use. 
                  Proven technology trusted by millions of homeowners.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Lower upfront cost:</strong> $1,200-$2,500 installed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Proven reliability:</strong> Simple, time-tested technology</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Easy maintenance:</strong> Annual flushing extends life</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Gas or electric:</strong> Works with either fuel source</span>
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium">Best for:</p>
                  <p className="text-sm text-muted-foreground">Budget-conscious homeowners, standard hot water needs, 1-4 person households</p>
                </div>
              </div>
              <div className="bg-background p-8 rounded-lg border relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                  Most Popular
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Tankless Water Heaters</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  On-demand heating provides endless hot water without storage. Energy-efficient technology 
                  that heats water only when you need it.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Endless hot water:</strong> Never run out mid-shower</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>30% more efficient:</strong> Lower monthly energy bills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>20+ year lifespan:</strong> Twice as long as tank heaters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Space-saving:</strong> Wall-mounted, compact design</span>
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm font-medium">Best for:</p>
                  <p className="text-sm text-muted-foreground">Large families, high hot water usage, long-term savings, limited space</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gas vs Electric Comparison */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Gas vs. Electric Water Heaters
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Both fuel types have advantages—the right choice depends on your home's setup and priorities
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Flame className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-bold">Gas Water Heaters</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">+</span>
                    <span>Lower operating costs (natural gas cheaper than electricity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">+</span>
                    <span>Faster recovery rate—heats water quicker</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">+</span>
                    <span>Works during power outages (with proper venting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">−</span>
                    <span>Requires gas line and proper venting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">−</span>
                    <span>Annual combustion safety inspection recommended</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-xl font-bold">Electric Water Heaters</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">+</span>
                    <span>Easier, less expensive installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">+</span>
                    <span>No combustion—safer indoor air quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">+</span>
                    <span>Works anywhere with electrical access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">−</span>
                    <span>Higher operating costs in most areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">−</span>
                    <span>May require electrical panel upgrade</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-card py-12 md:py-16 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Tucson Trusts Intelligent Design for Water Heaters
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center" data-testid="stat-reviews">
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-reviews-count">23,000+</div>
                <h3 className="text-lg font-semibold mb-1">Five-Star Reviews</h3>
                <p className="text-muted-foreground text-sm">
                  Thousands of satisfied customers
                </p>
              </div>
              <div className="text-center" data-testid="stat-installation-speed">
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-installation-speed">Same Day</div>
                <h3 className="text-lg font-semibold mb-1">Installation Available</h3>
                <p className="text-muted-foreground text-sm">
                  Get hot water back fast
                </p>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-experience">46+ Years</div>
                <h3 className="text-lg font-semibold mb-1">Plumbing Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Serving Tucson since 1979
                </p>
              </div>
              <div className="text-center" data-testid="stat-warranty">
                <div className="text-4xl font-bold text-primary mb-2" data-testid="text-warranty">10-Year</div>
                <h3 className="text-lg font-semibold mb-1">Warranty Protection</h3>
                <p className="text-muted-foreground text-sm">
                  Parts and labor covered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What's Included in Your Water Heater Installation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Water Heater Unit</h3>
                  <p className="text-muted-foreground">Premium brands with manufacturer warranties and proven reliability</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Professional Installation</h3>
                  <p className="text-muted-foreground">Licensed plumbers with manufacturer training and certifications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Old Unit Removal</h3>
                  <p className="text-muted-foreground">Safe disconnection, removal, and proper disposal/recycling</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Permits & Inspections</h3>
                  <p className="text-muted-foreground">All required Tucson/Pima County permits pulled and inspections passed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Expansion Tank</h3>
                  <p className="text-muted-foreground">Required by code—protects your plumbing from thermal expansion</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Pressure Relief Valve</h3>
                  <p className="text-muted-foreground">New T&P valve for safety and code compliance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Water Connections</h3>
                  <p className="text-muted-foreground">New supply lines and fittings for leak-free operation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">System Testing</h3>
                  <p className="text-muted-foreground">Complete operation check, temperature verification, and leak testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card py-12 md:py-16 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Water Heater Quote Questions
            </h2>
            <div className="space-y-8">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does a new water heater cost in Tucson?</h3>
                <p className="text-muted-foreground">
                  Water heater costs in Tucson range from $1,200 to $4,500+ depending on type and capacity. Standard 
                  40-50 gallon tank water heaters cost $1,200-$2,500 installed. Tankless water heaters range from 
                  $2,500-$4,500+ installed. Use our free quote calculator above for pricing specific to your needs.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">How do I know what size water heater I need?</h3>
                <p className="text-muted-foreground">
                  Our online calculator considers your household size, number of bathrooms, and typical hot water 
                  usage to recommend the right capacity. For tank heaters: 1-2 people need 30-40 gallons, 2-3 people 
                  need 40-50 gallons, 3-4 people need 50-65 gallons. For tankless, sizing is measured in flow rate (GPM).
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Should I choose gas or electric?</h3>
                <p className="text-muted-foreground">
                  Gas water heaters typically cost less to operate (natural gas is cheaper than electricity in Tucson) 
                  and heat water faster, but require venting. Electric models are easier to install and have no 
                  combustion concerns. Our quote tool shows energy cost comparisons based on current Tucson rates.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">How long do water heaters last in Tucson?</h3>
                <p className="text-muted-foreground">
                  Tank water heaters typically last 8-12 years in Tucson, though our hard water can shorten lifespan 
                  without proper maintenance. Tankless water heaters last 20+ years with regular descaling. Signs you 
                  need replacement: rusty water, rumbling noises, leaks, inconsistent temperatures, or age over 10 years.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer same-day water heater installation?</h3>
                <p className="text-muted-foreground">
                  Yes! We stock common tank sizes (40, 50, and 75-gallon) on our service trucks for immediate 
                  replacement. We understand going without hot water is an emergency, especially for families. 
                  For tankless or specialty units, we typically schedule within 1-2 business days.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">What's included in the installation price?</h3>
                <p className="text-muted-foreground">
                  Our quotes include the water heater unit, professional installation, removal and disposal of your 
                  old unit, all necessary permits, expansion tank (if required), and code-compliant installation per 
                  Tucson building standards. Gas line modifications or electrical upgrades are itemized separately.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">How long does installation take?</h3>
                <p className="text-muted-foreground">
                  Standard tank water heater replacement typically takes 2-4 hours. Tankless installation may require 
                  4-6 hours due to gas line or electrical modifications. We'll have your hot water running the same day 
                  in most situations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Related Plumbing Services
            </h2>
            <p className="text-muted-foreground mb-8">
              Complete water heater and plumbing solutions for Tucson homes
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/services/tankless-water-heaters" className="bg-card px-4 py-2 rounded-full border hover:border-primary transition-colors">Tankless Water Heaters</Link>
              <Link href="/services/water-heater-repair" className="bg-card px-4 py-2 rounded-full border hover:border-primary transition-colors">Water Heater Repair</Link>
              <Link href="/services/hybrid-water-heaters" className="bg-card px-4 py-2 rounded-full border hover:border-primary transition-colors">Hybrid Heat Pump</Link>
              <Link href="/services/water-filtration" className="bg-card px-4 py-2 rounded-full border hover:border-primary transition-colors">Water Filtration</Link>
              <Link href="/services/plumbing-tucson" className="bg-card px-4 py-2 rounded-full border hover:border-primary transition-colors">Plumbing Services</Link>
              <Link href="/services/leak-detection" className="bg-card px-4 py-2 rounded-full border hover:border-primary transition-colors">Leak Detection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduler CTA */}
      <section className="bg-card py-12 md:py-16 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Advice?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Schedule a free consultation to discuss your water heater options with a licensed plumber
            </p>
            <SchedulerCluster position="middle" />
          </div>
        </div>
      </section>
    </div>
  );
}
