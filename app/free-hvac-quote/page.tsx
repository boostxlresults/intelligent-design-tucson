import { Metadata } from 'next';
import { generateMetadata as generateFullMetadata } from '@/lib/seo/generateMetadata';
import { SchedulerCluster } from '@/components/SchedulerCluster';
import Link from 'next/link';
import { CheckCircle2, Shield, Clock, Award, ThermometerSun, Zap, Leaf, Home } from 'lucide-react';

export const metadata: Metadata = generateFullMetadata({
  title: 'Free Online HVAC Quote Tucson | AC System Pricing Calculator',
  description: 'Get a free HVAC quote online in under 2 minutes. See real pricing for central AC, heat pumps, and ductless systems in Tucson. No sales pressure—just honest estimates from Arizona\'s #1-rated HVAC company with 22,000+ five-star reviews.',
  canonicalUrl: '/free-hvac-quote',
  type: 'website'
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a new HVAC system cost in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Tucson, new HVAC system costs typically range from $7,000 to $25,000 depending on the system type, size (measured in tons), efficiency rating (SEER), and installation complexity. A standard 3-ton, 14 SEER central AC system averages $8,500-$12,000 installed, while high-efficiency heat pump systems range from $12,000-$18,000. Our free online quote calculator provides accurate pricing based on your specific home requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the online HVAC quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our online quote calculator provides real pricing based on your system specifications, home size, and efficiency preferences. Final pricing may vary slightly (typically within 5-10%) after an in-home assessment to account for installation complexity, ductwork modifications, electrical upgrades, or permit requirements specific to your situation."
      }
    },
    {
      "@type": "Question",
      "name": "What size HVAC system do I need for my Tucson home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HVAC sizing depends on your home's square footage, insulation quality, window count, ceiling height, and Tucson's extreme summer temperatures. As a general guide: 1,000-1,500 sq ft needs 2-2.5 tons, 1,500-2,000 sq ft needs 2.5-3 tons, 2,000-2,500 sq ft needs 3-3.5 tons, and 2,500-3,000 sq ft typically needs 3.5-4 tons. Our quote calculator factors in Tucson's unique climate demands for accurate sizing recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "What SEER rating should I choose in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For Tucson's extreme summer heat with 100+ degree temperatures for months, we recommend minimum 16 SEER for cost-effective efficiency, with 18-20+ SEER providing optimal energy savings. Higher SEER systems cost more upfront but save significantly on electricity during Arizona summers when AC runs 12+ hours daily. The federal minimum is now 15 SEER for new installations in the Southwest region."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in your HVAC installation quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our HVAC quotes include: the complete system (indoor and outdoor units), professional installation by licensed technicians, removal and disposal of your old system, all necessary permits and inspections, thermostat installation or upgrade, warranty registration, system commissioning and testing, and post-installation support. Ductwork modifications, electrical upgrades, or code-required improvements are itemized separately if needed."
      }
    },
    {
      "@type": "Question",
      "name": "How long does HVAC installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard HVAC replacement typically takes 1 day (6-10 hours) for straightforward installations. More complex projects requiring ductwork modifications, electrical panel upgrades, or system relocations may take 2 days. We schedule installations to minimize your time without air conditioning, especially critical during Tucson's hot summer months."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer HVAC financing in Tucson?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer flexible financing options including 0% APR for qualified buyers, low monthly payment plans, and same-as-cash options. Many Tucson homeowners finance their new HVAC system to get high-efficiency equipment that saves more in monthly energy costs than the financing payment. Our quote calculator shows financing options alongside upfront pricing."
      }
    },
    {
      "@type": "Question",
      "name": "What brands do you install?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We install premium HVAC brands including Lennox, Trane, Carrier, Rheem, Goodman, and Daikin. As factory-authorized dealers, we offer manufacturer warranties and trained installation technicians for each brand. Our quote tool shows options across multiple brands at different price points so you can compare features and value."
      }
    }
  ]
};

export default function FreeHVACQuotePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-hero">
              Free Online HVAC Quote
            </h1>
            <p className="text-xl md:text-2xl mb-4" data-testid="text-hero-subtitle">
              Get real pricing for your new HVAC system in under 2 minutes
            </p>
            <p className="text-lg opacity-90 mb-6" data-testid="text-hero-tagline">
              No pressure, no surprises—just honest pricing from Tucson's #1-rated AC company
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="bg-white/20 px-4 py-2 rounded-full">Central AC Systems</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Heat Pumps</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Ductless Mini-Splits</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">Package Units</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Content Section */}
      <section className="py-12 md:py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8">How Much Does a New HVAC System Cost in Tucson?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Shopping for a new air conditioning system in Tucson? Our free online HVAC quote calculator gives you real, 
              transparent pricing in under 2 minutes—no salesperson required. Simply answer a few questions about your home, 
              and you'll see accurate estimates for central AC systems, heat pumps, ductless mini-splits, and package units 
              from top brands like Lennox, Trane, Carrier, and Rheem.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              <strong>Tucson HVAC costs typically range from $7,000 to $25,000</strong> depending on system type, size, and 
              efficiency rating. Our calculator factors in Tucson's extreme summer heat (with temperatures regularly exceeding 
              100°F from May through September) to recommend properly sized equipment that will keep your home comfortable 
              without wasting energy or wearing out prematurely.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Intelligent Design, we believe you deserve upfront pricing without high-pressure sales tactics. That's why 
              we created this instant quote tool—so you can explore your options, compare systems, and make an informed 
              decision on your timeline. When you're ready, schedule a free in-home consultation to finalize specifications 
              and discuss <Link href="/financing" className="text-primary hover:underline">financing options</Link> that fit your budget.
            </p>
          </div>
        </div>
      </section>

      {/* Contractor Commerce Widget Container */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div id="concom-navigator" navigator-key="NzdTlJWvihCCWjsf" className="min-h-[600px]" data-testid="widget-hvac-quote" />
          </div>
        </div>
      </section>

      {/* What Affects HVAC Cost */}
      <section className="bg-card py-12 md:py-16 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What Affects Your HVAC System Cost?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Understanding the factors that influence pricing helps you make the best decision for your home and budget
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg border">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Home Size</h3>
                <p className="text-muted-foreground text-sm">
                  Square footage, ceiling height, insulation quality, and number of windows determine the cooling capacity 
                  (tonnage) required to maintain comfort during Tucson summers.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Efficiency Rating</h3>
                <p className="text-muted-foreground text-sm">
                  SEER ratings from 15-26 affect both upfront cost and long-term energy savings. Higher SEER systems 
                  cost more but save significantly on Tucson's summer electricity bills.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <ThermometerSun className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">System Type</h3>
                <p className="text-muted-foreground text-sm">
                  Central AC, heat pumps, ductless mini-splits, and package units each have different price ranges, 
                  features, and benefits suited to different home configurations.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <Leaf className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Installation Complexity</h3>
                <p className="text-muted-foreground text-sm">
                  Ductwork modifications, electrical upgrades, code requirements, and access challenges affect 
                  installation labor costs beyond the equipment itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Tucson Homeowners Choose Intelligent Design
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="stat-reviews">
                <div className="text-5xl font-bold text-primary mb-4" data-testid="text-reviews-count">22,000+</div>
                <h3 className="text-xl font-semibold mb-2">Five-Star Reviews</h3>
                <p className="text-muted-foreground">
                  More verified reviews than any HVAC company in Southern Arizona—real feedback from your neighbors
                </p>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="text-5xl font-bold text-primary mb-4" data-testid="text-experience">46+</div>
                <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
                <p className="text-muted-foreground">
                  Family and veteran-owned since 1979, serving Tucson through three generations of HVAC expertise
                </p>
              </div>
              <div className="text-center" data-testid="stat-guarantee">
                <div className="text-5xl font-bold text-primary mb-4" data-testid="text-guarantee">100%</div>
                <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground">
                  We stand behind every installation with comprehensive warranties and lifetime customer support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-card py-12 md:py-16 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What's Included in Your HVAC Installation
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Complete HVAC System</h3>
                  <p className="text-muted-foreground">Indoor and outdoor units, properly matched for optimal performance and efficiency</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Professional Installation</h3>
                  <p className="text-muted-foreground">Licensed, factory-trained technicians following manufacturer specifications</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Old System Removal</h3>
                  <p className="text-muted-foreground">Complete removal and proper disposal/recycling of your existing equipment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Permits & Inspections</h3>
                  <p className="text-muted-foreground">All required City of Tucson or Pima County permits handled and passed inspections</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Thermostat Setup</h3>
                  <p className="text-muted-foreground">New thermostat installation or upgrade to smart thermostat with programming assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Warranty Registration</h3>
                  <p className="text-muted-foreground">Manufacturer warranty activated and registered for full coverage protection</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">System Commissioning</h3>
                  <p className="text-muted-foreground">Complete testing, airflow balancing, and refrigerant charge verification</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Owner Training</h3>
                  <p className="text-muted-foreground">Walkthrough of system operation, maintenance tips, and filter replacement schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions About HVAC Quotes
            </h2>
            <div className="space-y-8">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">How much does a new HVAC system cost in Tucson?</h3>
                <p className="text-muted-foreground">
                  In Tucson, new HVAC system costs typically range from $7,000 to $25,000 depending on the system type, 
                  size (measured in tons), efficiency rating (SEER), and installation complexity. A standard 3-ton, 
                  14 SEER central AC system averages $8,500-$12,000 installed, while high-efficiency heat pump systems 
                  range from $12,000-$18,000. Use our free quote calculator above for pricing specific to your home.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">How accurate is the online HVAC quote?</h3>
                <p className="text-muted-foreground">
                  Our online quote calculator provides real pricing based on your system specifications, home size, and 
                  efficiency preferences. Final pricing typically falls within 5-10% of the online estimate after an 
                  in-home assessment accounts for installation complexity, ductwork modifications, electrical upgrades, 
                  or permit requirements specific to your situation.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">What size HVAC system do I need for my Tucson home?</h3>
                <p className="text-muted-foreground">
                  HVAC sizing depends on your home's square footage, insulation, windows, ceiling height, and Tucson's 
                  extreme summer temperatures. General guidelines: 1,000-1,500 sq ft needs 2-2.5 tons, 1,500-2,000 sq ft 
                  needs 2.5-3 tons, 2,000-2,500 sq ft needs 3-3.5 tons, and 2,500-3,000 sq ft typically needs 3.5-4 tons. 
                  Our quote calculator factors in Tucson's climate for accurate sizing.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">What SEER rating should I choose in Arizona?</h3>
                <p className="text-muted-foreground">
                  For Tucson's extreme summer heat, we recommend minimum 16 SEER for cost-effective efficiency, with 
                  18-20+ SEER providing optimal energy savings. Higher SEER systems cost more upfront but save 
                  significantly when AC runs 12+ hours daily during summer. The federal minimum is 15 SEER for 
                  new installations in the Southwest region.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Is there any obligation to purchase after getting a quote?</h3>
                <p className="text-muted-foreground">
                  Absolutely not. Our online quote is 100% free with zero obligation. You're simply getting transparent 
                  pricing information to help you make an informed decision. Take your time, compare options, and reach 
                  out when you're ready to move forward.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer HVAC financing?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer flexible <Link href="/financing" className="text-primary hover:underline">financing options</Link> including 
                  0% APR for qualified buyers, low monthly payment plans, and same-as-cash options. Many Tucson homeowners 
                  finance high-efficiency equipment that saves more in monthly energy costs than the financing payment.
                </p>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">What brands do you install?</h3>
                <p className="text-muted-foreground">
                  We install premium HVAC brands including Lennox, Trane, Carrier, Rheem, Goodman, and Daikin. As 
                  factory-authorized dealers, we provide manufacturer warranties and trained installation technicians. 
                  Our quote tool shows options across multiple brands so you can compare features and value.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">How long does HVAC installation take?</h3>
                <p className="text-muted-foreground">
                  Standard HVAC replacement typically takes 1 day (6-10 hours). More complex projects requiring ductwork 
                  modifications, electrical upgrades, or system relocations may take 2 days. We schedule installations 
                  to minimize time without air conditioning—especially critical during Tucson summers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Areas */}
      <section className="bg-card py-12 md:py-16 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving All of Greater Tucson
            </h2>
            <p className="text-muted-foreground mb-8">
              We provide HVAC installation throughout Pima County and surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link href="/services/hvac-tucson" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Tucson</Link>
              <Link href="/services/hvac-oro-valley" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Oro Valley</Link>
              <Link href="/services/hvac-marana" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Marana</Link>
              <Link href="/services/hvac-sahuarita" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Sahuarita</Link>
              <Link href="/services/hvac-vail" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Vail</Link>
              <Link href="/service-areas/green-valley" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Green Valley</Link>
              <Link href="/service-areas/catalina-foothills" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Catalina Foothills</Link>
              <Link href="/service-areas/tanque-verde" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Tanque Verde</Link>
              <Link href="/service-areas/casas-adobes" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Casas Adobes</Link>
              <Link href="/service-areas/rita-ranch" className="bg-background px-4 py-2 rounded-full border hover:border-primary transition-colors">Rita Ranch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduler CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prefer to Talk to a Comfort Advisor?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Schedule a free in-home consultation for a detailed assessment and personalized recommendations
            </p>
            <SchedulerCluster position="middle" />
          </div>
        </div>
      </section>
    </div>
  );
}
