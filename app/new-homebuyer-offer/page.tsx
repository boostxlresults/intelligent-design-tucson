import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Gift, Shield, Clock, Award, Star, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';

export const metadata: Metadata = generateSEOMetadata({
  title: 'New Homebuyer Offer | FREE 2-Year Protection Plan | Intelligent Design Tucson',
  description: 'Congratulations on your new home! Receive a FREE 2-Year Deluxe Family Protection Plan ($1,200 value) with 5 annual inspections covering HVAC, plumbing, electrical, roofing, and water heater. 15% off all repairs, no dispatch fees, and 24/7 emergency service.',
  canonicalUrl: 'https://intelligentdesignac.com/new-homebuyer-offer',
  keywords: ['new homebuyer offer Tucson', 'home protection plan', 'HVAC maintenance plan', 'new home services', 'Tucson homebuyer benefits'],
});

// Schema markup for the offer
const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "FREE 2-Year Deluxe Family Protection Plan for New Homebuyers",
  "description": "Complimentary 2-year home protection plan covering HVAC, plumbing, electrical, roofing, and water heater with 5 annual inspections, 15% off repairs, no dispatch fees, and 24/7 emergency service",
  "price": "0",
  "priceCurrency": "USD",
  "eligibleRegion": {
    "@type": "Place",
    "name": "Tucson, AZ"
  },
  "itemOffered": {
    "@type": "Service",
    "name": "Deluxe Family Protection Plan",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
    }
  }
};

export default function NewHomebuyerOfferPage() {
  const benefits = [
    'Five (5) Full-System Inspections Per Year',
    'HVAC System Inspection & Tune-Up',
    'Plumbing System Inspection',
    'Electrical System Safety Inspection',
    'Roofing Inspection',
    'Water Heater Inspection',
    '15% OFF All Repairs',
    'No Dispatch Fees Ever',
    'Vouchers Toward System Replacements',
    '24/7 Emergency Service—Even on Holidays',
    'Priority Front-of-the-Line Service',
    'No Extra Charges for Appointment Times',
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
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center py-24 md:py-32"
          style={{
            backgroundImage: 'linear-gradient(rgba(13, 45, 122, 0.85), rgba(13, 45, 122, 0.85)), url(/images/hvac-hero.jpg)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold mb-6">
                <Gift className="w-5 h-5" />
                EXCLUSIVE OFFER
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
                Congratulations on Your New Home!
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-4" data-testid="text-hero-offer">
                Receive a FREE 2-Year Deluxe Family Protection Plan
              </p>
              <p className="text-xl text-white/90 mb-8" data-testid="text-hero-value">
                A $1,200 Value — Absolutely FREE for New Homeowners in Tucson
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                  <a href="#claim-offer" data-testid="button-claim-offer-hero">
                    Claim Your FREE Plan <Sparkles className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  <a href="tel:+1520-333-2665" data-testid="button-call-hero">
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground" data-testid="text-breadcrumb-current">
                New Homebuyer Offer
              </span>
            </div>
          </div>
        </nav>

        {/* Value Proposition Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Your FREE Protection Plan?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Protect your biggest investment with comprehensive home system coverage for the next two years
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">5 Annual Inspections</h3>
                  <p className="text-muted-foreground">
                    Complete inspections of HVAC, plumbing, electrical, roofing, and water heater systems
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">15% OFF All Repairs</h3>
                  <p className="text-muted-foreground">
                    Save on any repair work needed during your 2-year coverage period
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                  <p className="text-muted-foreground">
                    Priority service available day or night, weekends and holidays included
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Complete Benefits List */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Complete Protection Plan Benefits</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to keep your new home running smoothly
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
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

        {/* Trust Indicators */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Tucson Homeowners Trust Intelligent Design</h2>
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

        {/* Claim Form Section */}
        <section id="claim-offer" className="py-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-form-title">
                Claim Your FREE 2-Year Protection Plan
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below to activate your $1,200 value protection plan
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-firstName"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-lastName"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="realtorName" className="block text-sm font-medium mb-2">
                      Realtor/Agent Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="realtorName"
                      name="realtorName"
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      data-testid="input-realtorName"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-2">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      data-testid="input-address"
                    />
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium mb-2">
                      ZIP Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      pattern="[0-9]{5}"
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      data-testid="input-zipCode"
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> By submitting this form, you agree to be contacted by Intelligent Design regarding your FREE 2-Year Deluxe Family Protection Plan. Your information will be kept confidential and never shared with third parties.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-6 h-auto"
                    data-testid="button-submit-form"
                  >
                    Claim My FREE Protection Plan <Gift className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Who is eligible for this offer?</h3>
                  <p className="text-muted-foreground">
                    This offer is available to new homeowners in the Tucson area who have recently purchased a home. The protection plan must be activated within 30 days of your home closing date.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Is there really no cost?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! This 2-year protection plan (valued at $1,200) is completely FREE for new homeowners. There are no hidden fees, no obligations, and no credit card required.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What happens after the 2 years?</h3>
                  <p className="text-muted-foreground">
                    After your 2-year protection plan expires, you'll have the option to continue with our maintenance plans, but there's absolutely no obligation. Many homeowners choose to continue because they've experienced the value and peace of mind.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">When will my inspections be scheduled?</h3>
                  <p className="text-muted-foreground">
                    Once you activate your protection plan, our team will contact you to schedule your first comprehensive home systems inspection at a time that's convenient for you. We'll then set up a schedule for your remaining inspections throughout the 2-year period.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Protect Your New Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't miss out on this exclusive $1,200 value offer for new Tucson homeowners
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                <a href="#claim-offer" data-testid="button-claim-offer-footer">
                  Claim Your FREE Plan Now <Sparkles className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                <a href="tel:+1520-333-2665">
                  Call (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
