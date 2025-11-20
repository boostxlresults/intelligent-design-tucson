import { Metadata } from 'next';
import Script from 'next/script';
import { generateMetadata as generateFullMetadata } from '@/lib/seo/generateMetadata';
import { SchedulerCluster } from '@/components/SchedulerCluster';
import { Wind, DollarSign, Shield, Wrench } from 'lucide-react';

export const metadata: Metadata = generateFullMetadata({
  title: 'Filter Shop | Intelligent Design Air Conditioning',
  description: 'Shop high-quality air filters for your HVAC system. Delivered to your door or professionally installed. Same-day service available in Tucson.',
  canonicalUrl: '/filter-shop',
  type: 'website'
});

export default function FilterShopPage() {
  return (
    <>
      <Script
        src="https://plugin.contractorcommerce.com?key=D32QhwUokdL5YZLParGpbxc7TuBTkYanGNQSR4zd"
        strategy="lazyOnload"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-hero">
                HVAC Filter Shop
              </h1>
              <p className="text-xl md:text-2xl mb-4" data-testid="text-hero-subtitle">
                Premium air filters delivered to your door
              </p>
              <p className="text-lg opacity-90" data-testid="text-hero-tagline">
                Or schedule professional installation—we'll bring them to you
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Commerce Widget Container */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Widget loads here via Contractor Commerce plugin */}
              <div id="concom-navigator" navigator-key="uaab4SY6TlT6rnz5" className="min-h-[600px]" data-testid="widget-filter-shop" />
            </div>
          </div>
        </section>

        {/* Filter Benefits */}
        <section className="bg-card py-12 md:py-16 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Regular Filter Changes Matter
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4" data-testid="benefit-air-quality">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Wind className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Better Indoor Air Quality</h3>
                    <p className="text-muted-foreground">
                      Clean filters trap dust, pollen, pet dander, and allergens—keeping your family's air 
                      healthier and reducing allergy symptoms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="benefit-energy-bills">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lower Energy Bills</h3>
                    <p className="text-muted-foreground">
                      A clean filter allows proper airflow, reducing strain on your AC system and cutting 
                      energy costs by up to 15%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="benefit-system-lifespan">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Extended System Lifespan</h3>
                    <p className="text-muted-foreground">
                      Regular filter changes prevent dust buildup on critical components, helping your HVAC 
                      system last years longer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="benefit-prevent-repairs">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Prevent Costly Repairs</h3>
                    <p className="text-muted-foreground">
                      Dirty filters cause 70% of HVAC breakdowns. Simple filter changes can prevent expensive 
                      emergency repairs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Types */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Choose Your Filter Type
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                      MERV 8-10
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Standard Filters</h3>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Basic dust and pollen protection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Change every 1-3 months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Most affordable option</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground text-center">
                    Best for: Homes without pets or allergies
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-primary">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-2">
                      MERV 11-13
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Premium Filters</h3>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Captures pet dander & allergens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Superior air quality</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Ideal for Tucson's dust</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground text-center">
                    <strong>Most Popular</strong> for Tucson homes
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                      MERV 14-16
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Medical-Grade</h3>
                  <ul className="space-y-2 mb-4 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Hospital-level filtration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Removes bacteria & viruses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Best for severe allergies</span>
                    </li>
                  </ul>
                  <p className="text-xs text-muted-foreground text-center">
                    Best for: Asthma, allergies, immunocompromised
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Installation Option */}
        <section className="bg-card py-12 md:py-16 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want Us to Install Your Filters?
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">
                Add professional filter installation to your next service call—or schedule a filter-only visit
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div data-testid="stat-installation-cost">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-installation-cost">$0</div>
                  <p className="text-sm">Added to Service Call</p>
                </div>
                <div data-testid="stat-installation-speed">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-installation-speed">Same Day</div>
                  <p className="text-sm">Installation Available</p>
                </div>
                <div data-testid="stat-service-convenience">
                  <div className="text-4xl font-bold text-primary mb-2" data-testid="text-service-convenience">We Bring</div>
                  <p className="text-sm">The Right Size Filter</p>
                </div>
              </div>
              <SchedulerCluster position="cta" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Filter Shop Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How do I know what size filter I need?</h3>
                  <p className="text-muted-foreground">
                    Your filter size is printed on the side of your current filter (e.g., 16x25x1, 20x20x1). 
                    If you can't find it, measure the length, width, and depth. Our filter shop guides you 
                    through finding the right size.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">How often should I change my filter?</h3>
                  <p className="text-muted-foreground">
                    In Tucson's dusty climate, we recommend changing standard filters every 30-60 days 
                    (monthly during peak summer AC use). Premium filters can last 60-90 days. Homes with pets 
                    or allergies should change filters more frequently.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What's the difference between MERV ratings?</h3>
                  <p className="text-muted-foreground">
                    MERV (Minimum Efficiency Reporting Value) measures how well filters trap particles. 
                    Higher MERV = better filtration. MERV 8-10 is basic, MERV 11-13 is ideal for most Tucson 
                    homes, and MERV 14-16 is medical-grade for severe allergies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I use any filter in my HVAC system?</h3>
                  <p className="text-muted-foreground">
                    Most residential systems handle MERV 8-13 filters well. Very high MERV filters (14-16) can 
                    restrict airflow in some systems, reducing efficiency. Our team can recommend the best 
                    filter for your specific system during service calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
