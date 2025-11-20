import { Metadata } from 'next';
import Script from 'next/script';
import { generateMetadata as generateFullMetadata } from '@/lib/seo/generateMetadata';
import { SchedulerCluster } from '@/components/SchedulerCluster';

export const metadata: Metadata = generateFullMetadata({
  title: 'Free Online HVAC Quote | Intelligent Design Air Conditioning',
  description: 'Tucson homeowners: Get a free HVAC system quote online in under 2 minutes. No pressure, just real pricing from Tucson\'s #1-rated AC company.',
  canonicalUrl: '/free-hvac-quote',
  type: 'website'
});

export default function FreeHVACQuotePage() {
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
                Free Online HVAC Quote
              </h1>
              <p className="text-xl md:text-2xl mb-4" data-testid="text-hero-subtitle">
                Get real pricing for your new HVAC system in under 2 minutes
              </p>
              <p className="text-lg opacity-90" data-testid="text-hero-tagline">
                No pressure, no surprises—just honest pricing from Tucson's #1-rated AC company
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Commerce Widget Container */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Widget loads here via Contractor Commerce plugin */}
              <div id="concom-navigator" navigator-key="NzdTlJWvihCCWjsf" className="min-h-[600px]" data-testid="widget-hvac-quote" />
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-card py-12 md:py-16 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Intelligent Design?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center" data-testid="stat-reviews">
                  <div className="text-5xl font-bold text-primary mb-4" data-testid="text-reviews-count">22,000+</div>
                  <h3 className="text-xl font-semibold mb-2">Five-Star Reviews</h3>
                  <p className="text-muted-foreground">
                    Trusted by thousands of Tucson homeowners
                  </p>
                </div>
                <div className="text-center" data-testid="stat-availability">
                  <div className="text-5xl font-bold text-primary mb-4" data-testid="text-availability">24/7</div>
                  <h3 className="text-xl font-semibold mb-2">Emergency Service</h3>
                  <p className="text-muted-foreground">
                    Always available when you need us most
                  </p>
                </div>
                <div className="text-center" data-testid="stat-guarantee">
                  <div className="text-5xl font-bold text-primary mb-4" data-testid="text-guarantee">100%</div>
                  <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">
                    We stand behind every installation
                  </p>
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
                Common Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How accurate is the online quote?</h3>
                  <p className="text-muted-foreground">
                    Our online quote calculator provides real pricing based on your system specifications. 
                    Final pricing may vary slightly after an in-home assessment to account for installation 
                    complexity, ductwork modifications, or electrical upgrades.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Is there any obligation to purchase?</h3>
                  <p className="text-muted-foreground">
                    Absolutely not. Our online quote is 100% free with zero obligation. You're simply getting 
                    transparent pricing information to help you make an informed decision.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What information do I need to provide?</h3>
                  <p className="text-muted-foreground">
                    You'll need basic information about your home (square footage, number of stories) and your 
                    current HVAC system. The entire process takes less than 2 minutes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What's included in the quoted price?</h3>
                  <p className="text-muted-foreground">
                    Our quotes include the complete HVAC system, professional installation, removal and disposal 
                    of your old system, permits, warranty registration, and post-installation support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduler CTA */}
        <section className="bg-card py-12 md:py-16 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prefer to Talk to a Comfort Advisor?
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">
                Schedule a free in-home consultation for a detailed assessment and personalized recommendations
              </p>
              <SchedulerCluster position="cta" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
