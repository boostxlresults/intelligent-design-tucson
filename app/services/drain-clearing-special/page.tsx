import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Zap, Shield, Clock, Award, Star, Wrench, ThumbsUp, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import DrainClearingCoupon from '@/components/specials/DrainClearingCoupon';

export const metadata: Metadata = generateSEOMetadata({
  title: '$28.88 Drain Clearing Special | Same-Day Service | Intelligent Design Tucson',
  description: 'Professional drain clearing for just $28.88 in Tucson! Licensed master plumbers clear stubborn clogs in kitchen sinks, bathroom drains, toilets & tubs. Same-day service available. Family & veteran-owned with 22,000+ 5-star reviews. No hidden fees.',
  canonicalUrl: 'https://www.idesignac.com/services/drain-clearing-special',
  keywords: ['drain clearing special Tucson', 'cheap drain cleaning', 'affordable plumber Tucson', 'clogged drain service', '$28.88 drain clearing', 'drain rooter service'],
});

// Schema markup for the special offer
const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "$28.88 Drain Clearing Special",
  "description": "Professional residential drain clearing service for kitchen sinks, bathroom drains, toilets, and tubs",
  "price": "28.88",
  "priceCurrency": "USD",
  "availability": "https://schema.org/InStock",
  "validFrom": "2024-01-01",
  "eligibleRegion": {
    "@type": "Place",
    "name": "Tucson, AZ"
  },
  "itemOffered": {
    "@type": "Service",
    "name": "Residential Drain Clearing Service",
    "serviceType": "Plumbing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
      "telephone": "+1-520-333-2665"
    }
  }
};

export default function DrainClearingSpecialPage() {
  const whatsCovered = [
    { icon: CheckCircle2, text: 'Kitchen Sink Drains' },
    { icon: CheckCircle2, text: 'Bathroom Sink & Tub Drains' },
    { icon: CheckCircle2, text: 'Toilet Clogs' },
    { icon: CheckCircle2, text: 'Shower Drains' },
    { icon: CheckCircle2, text: 'Same-Day Service Available' },
    { icon: CheckCircle2, text: 'No Hidden Fees' },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Licensed Master Plumbers',
      description: 'All work performed by certified, experienced professionals with decades of expertise.',
    },
    {
      icon: Zap,
      title: 'Fast Same-Day Service',
      description: 'We understand drain emergencies can\'t wait. Get your drains flowing fast with our quick response.',
    },
    {
      icon: ThumbsUp,
      title: 'Upfront Pricing',
      description: 'No surprise charges. The price we quote is the price you pay - just $28.88 for standard residential drain clearing.',
    },
    {
      icon: Shield,
      title: 'Satisfaction Guaranteed',
      description: 'Backed by our 100% satisfaction guarantee and decades of trust in the Tucson community.',
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema)
        }}
      />

      <div className="min-h-screen flex flex-col bg-background">
        {/* Breadcrumb Navigation */}
        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/special-offers" className="hover:text-foreground">
                Special Offers
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground" data-testid="text-breadcrumb-current">
                $28.88 Drain Clearing Special
              </span>
            </div>
          </div>
        </nav>

        {/* Hero - Drain Clearing Coupon */}
        <DrainClearingCoupon />

        {/* What's Covered Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in This Special?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our $28.88 special covers standard residential drain clearing for common household clogs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whatsCovered.map((item, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-6 flex items-center gap-4">
                    <item.icon className="w-8 h-8 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-lg">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 max-w-3xl mx-auto">
              <Card className="border-yellow-500 bg-yellow-50/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-900 mb-2">Important Notes:</p>
                      <ul className="text-sm text-yellow-900 space-y-1">
                        <li>• Main sewer line clearing may require additional services</li>
                        <li>• Hydro jetting service priced separately</li>
                        <li>• Emergency after-hours service may have additional fees</li>
                        <li>• Valid for new customers in Tucson service area</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Intelligent Design for Drain Clearing?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tucson's most trusted plumbing company for over 45 years
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseUs.map((benefit, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-8">
                    <benefit.icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tucson's Most Trusted Plumbing Experts</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-3 fill-yellow-400 text-yellow-400" />
                  <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                  <p className="font-semibold">Google Rating</p>
                  <p className="text-sm text-muted-foreground">22,000+ Reviews</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">A+</div>
                  <p className="font-semibold">BBB Rating</p>
                  <p className="text-sm text-muted-foreground">Accredited Since 1979</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">45+</div>
                  <p className="font-semibold">Years in Business</p>
                  <p className="text-sm text-muted-foreground">Since 1979</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="font-semibold">Satisfaction</p>
                  <p className="text-sm text-muted-foreground">Guaranteed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Drain Problems Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Drain Problems We Solve</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our expert plumbers have the tools and experience to clear any residential drain clog
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Wrench className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Slow-Draining Sinks</h3>
                  <p className="text-sm text-muted-foreground">
                    Hair, soap buildup, and food particles causing slow drainage in kitchen and bathroom sinks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Wrench className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Toilet Clogs</h3>
                  <p className="text-sm text-muted-foreground">
                    Stubborn toilet clogs that won't clear with a plunger, including foreign objects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Wrench className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Shower & Tub Backups</h3>
                  <p className="text-sm text-muted-foreground">
                    Standing water in showers or tubs caused by hair and soap scum accumulation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Wrench className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Recurring Clogs</h3>
                  <p className="text-sm text-muted-foreground">
                    Drains that keep clogging repeatedly, indicating a deeper blockage issue.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Wrench className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Foul Odors</h3>
                  <p className="text-sm text-muted-foreground">
                    Unpleasant smells coming from drains due to trapped debris and bacterial buildup.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Wrench className="w-10 h-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Multiple Drain Issues</h3>
                  <p className="text-sm text-muted-foreground">
                    Several drains backing up simultaneously, possibly indicating a main line concern.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Is the $28.88 price really all I pay?</h3>
                  <p className="text-muted-foreground">
                    Yes! For standard residential drain clearing (kitchen sinks, bathroom drains, toilets, tubs), $28.88 is the total price with no hidden fees. Main sewer lines, hydro jetting, or emergency after-hours service may require additional charges, which we'll always quote upfront before beginning work.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Can you come out the same day?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We offer same-day service for most drain clearing appointments in the Tucson area. Call (520) 333-2665 to check availability for your specific location and schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What if the clog is in my main sewer line?</h3>
                  <p className="text-muted-foreground">
                    Main sewer line clearing requires specialized equipment and is priced separately from our $28.88 special. Our technician will assess the situation, explain your options, and provide upfront pricing before proceeding with any additional work.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Do I qualify as a "new customer"?</h3>
                  <p className="text-muted-foreground">
                    This special is available to new customers who haven't used our plumbing services in the past 12 months. If you're unsure, give us a call at (520) 333-2665 and we'll be happy to verify your eligibility.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What areas do you serve?</h3>
                  <p className="text-muted-foreground">
                    We serve Tucson and surrounding areas including Oro Valley, Marana, Sahuarita, Green Valley, Vail, Catalina Foothills, and more. Call us to confirm service availability in your specific location.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">How long does drain clearing take?</h3>
                  <p className="text-muted-foreground">
                    Most standard residential drain clogs can be cleared in 30-60 minutes. More stubborn clogs or complex situations may take longer, but our technician will keep you informed throughout the process.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Let a Clogged Drain Ruin Your Day
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Call now for fast, affordable, professional drain clearing service in Tucson
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+15203332665"
                className="inline-flex items-center justify-center gap-2 px-8 py-6 text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-md shadow-lg transition-colors"
                data-testid="button-call-footer"
              >
                <Zap className="w-5 h-5" />
                Call (520) 333-2665 Now
              </a>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Same-day service available • Licensed master plumbers • No hidden fees
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
