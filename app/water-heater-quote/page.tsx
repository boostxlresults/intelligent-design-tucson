import { Metadata } from 'next';
import { generateMetadata as generateFullMetadata } from '@/lib/seo/generateMetadata';
import { SchedulerCluster } from '@/components/SchedulerCluster';

export const metadata: Metadata = generateFullMetadata({
  title: 'Free Online Water Heater Quote | Intelligent Design Tucson',
  description: 'Get a real-time quote for your new water heater—tank or tankless—in just 2 minutes. No pressure, no surprises.',
  canonicalUrl: '/water-heater-quote',
  type: 'website'
});

export default function WaterHeaterQuotePage() {
  return (
    <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/90 to-primary py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-hero">
                Free Online Water Heater Quote
              </h1>
              <p className="text-xl md:text-2xl mb-4" data-testid="text-hero-subtitle">
                Get instant pricing for tank or tankless water heaters
              </p>
              <p className="text-lg opacity-90" data-testid="text-hero-tagline">
                Compare options and prices in 2 minutes—no sales pressure
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Commerce Widget Container */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Widget loads here via Contractor Commerce plugin */}
              <div id="concom-navigator" navigator-key="ugVQLX7twEC3x7nG" className="min-h-[600px]" data-testid="widget-water-heater-quote" />
            </div>
          </div>
        </section>

        {/* Water Heater Options */}
        <section className="bg-card py-12 md:py-16 border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Choose the Right Water Heater for Your Home
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background p-8 rounded-lg border">
                  <h3 className="text-2xl font-bold mb-4">Tank Water Heaters</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Lower upfront cost</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Proven, reliable technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Simpler installation and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Available in gas or electric</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    Best for: Budget-conscious homeowners, standard hot water needs
                  </p>
                </div>
                <div className="bg-background p-8 rounded-lg border">
                  <h3 className="text-2xl font-bold mb-4">Tankless Water Heaters</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Endless hot water on demand</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>30% more energy efficient</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>20+ year lifespan (vs. 10-15 for tanks)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Space-saving wall-mounted design</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground">
                    Best for: Large families, high hot water usage, long-term savings
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
                Why Tucson Trusts Intelligent Design
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center" data-testid="stat-reviews">
                  <div className="text-5xl font-bold text-primary mb-4" data-testid="text-reviews-count">22,000+</div>
                  <h3 className="text-xl font-semibold mb-2">Five-Star Reviews</h3>
                  <p className="text-muted-foreground">
                    Thousands of satisfied customers
                  </p>
                </div>
                <div className="text-center" data-testid="stat-installation-speed">
                  <div className="text-5xl font-bold text-primary mb-4" data-testid="text-installation-speed">Same Day</div>
                  <h3 className="text-xl font-semibold mb-2">Installation Available</h3>
                  <p className="text-muted-foreground">
                    Get hot water back fast
                  </p>
                </div>
                <div className="text-center" data-testid="stat-warranty">
                  <div className="text-5xl font-bold text-primary mb-4" data-testid="text-warranty">10-Year</div>
                  <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
                  <p className="text-muted-foreground">
                    Parts and labor covered
                  </p>
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
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How do I know what size water heater I need?</h3>
                  <p className="text-muted-foreground">
                    Our online calculator considers your household size, number of bathrooms, and typical hot 
                    water usage to recommend the right capacity. For tank water heaters, this is measured in 
                    gallons (40, 50, 75). For tankless, it's measured in flow rate (GPM).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Should I choose gas or electric?</h3>
                  <p className="text-muted-foreground">
                    Gas water heaters typically cost less to operate but require venting. Electric models are 
                    easier to install and maintain. Our quote tool will show you both options with energy cost 
                    comparisons based on Tucson rates.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What's included in the installation price?</h3>
                  <p className="text-muted-foreground">
                    Our quotes include the water heater unit, professional installation, removal and disposal 
                    of your old unit, all necessary permits, expansion tank (if required), and code-compliant 
                    installation per Tucson building standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">How long does installation take?</h3>
                  <p className="text-muted-foreground">
                    Standard tank water heater replacement typically takes 2-4 hours. Tankless installation 
                    may require 4-6 hours due to gas line or electrical modifications. Same-day installation 
                    is available for most situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduler CTA */}
        <section className="py-12 md:py-16">
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
