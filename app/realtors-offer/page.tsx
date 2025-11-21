import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Gift, Shield, Clock, Award, Star, Sparkles, TrendingUp, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';

export const metadata: Metadata = generateSEOMetadata({
  title: 'REALTORS® Exclusive Offer | FREE 2-Year Protection Plan Gift | Intelligent Design',
  description: 'Exclusive offer for Tucson REALTORS®: Give your clients a FREE 2-Year Deluxe Family Protection Plan ($1,200 value) as a closing gift. Build loyalty, close deals faster, and increase buyer confidence with 5 annual inspections, 15% off repairs, and 24/7 emergency service.',
  canonicalUrl: 'https://www.idesignac.com/realtors-offer',
  keywords: ['realtor closing gift', 'real estate agent benefits', 'home protection plan for realtors', 'Tucson realtor partners', 'closing gift ideas'],
});

// Schema markup for the offer
const offerSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  "name": "FREE 2-Year Deluxe Family Protection Plan for REALTORS®",
  "description": "Exclusive realtor program: Give clients a complimentary 2-year home protection plan covering HVAC, plumbing, electrical, roofing, and water heater with 5 annual inspections",
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

export default function RealtorsOfferPage() {
  const clientBenefits = [
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

  const realtorBenefits = [
    {
      icon: TrendingUp,
      title: 'Close Deals Faster',
      description: 'Stand out from other agents by offering real value that helps buyers feel confident in their purchase decision.',
    },
    {
      icon: Users,
      title: 'Build Client Loyalty',
      description: 'Create lasting relationships that lead to referrals and repeat business for years to come.',
    },
    {
      icon: Heart,
      title: 'Increase Buyer Confidence',
      description: 'Give buyers peace of mind knowing their home systems are protected and maintained for 2 full years.',
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
                <Award className="w-5 h-5" />
                EXCLUSIVE REALTOR PROGRAM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
                Give Your Clients the Ultimate Closing Gift
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-4" data-testid="text-hero-offer">
                FREE 2-Year Deluxe Family Protection Plan
              </p>
              <p className="text-xl text-white/90 mb-8" data-testid="text-hero-value">
                A $1,200 Value Gift for Every Home You Sell — No Cost to You or Your Client
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                  <a href="#register-client" data-testid="button-register-client-hero">
                    Register a Client <Gift className="w-5 h-5 ml-2" />
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
                REALTORS® Offer
              </span>
            </div>
          </div>
        </nav>

        {/* Why This Makes a Difference Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why This Makes You Stand Out</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Give your clients more than just a house — give them peace of mind and a partner they can trust
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {realtorBenefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-8 text-center">
                    <benefit.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Your Clients Get Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Your Clients Receive</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive 2-year protection plan that covers all major home systems
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">5 Annual Inspections</h3>
                  <p className="text-muted-foreground">
                    Complete inspections of HVAC, plumbing, electrical, roofing, and water heater
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">15% OFF All Repairs</h3>
                  <p className="text-muted-foreground">
                    Significant savings on any repair work during the 2-year coverage
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">24/7 Priority Service</h3>
                  <p className="text-muted-foreground">
                    Front-of-the-line emergency service, even on holidays
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Complete Benefits List</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {clientBenefits.map((benefit, index) => (
                  <Card key={index} className="hover-elevate transition-all">
                    <CardContent className="p-4 flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{benefit}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Tucson's Most Trusted Home Services Company</h2>
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
                  <p className="text-sm text-muted-foreground">Family & Veteran Owned</p>
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

        {/* Register Client Form Section */}
        <section id="register-client" className="py-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-form-title">
                Register Your Client for Their FREE Protection Plan
              </h2>
              <p className="text-xl text-muted-foreground">
                Provide your client's information to activate their $1,200 value protection plan
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                    <p className="text-sm font-semibold text-yellow-900">
                      <Award className="w-5 h-5 inline mr-2" />
                      Important: Client details must be submitted within 30 days of the home sale closing date.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="clientFirstName" className="block text-sm font-medium mb-2">
                        Client First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="clientFirstName"
                        name="clientFirstName"
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-clientFirstName"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientLastName" className="block text-sm font-medium mb-2">
                        Client Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="clientLastName"
                        name="clientLastName"
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-clientLastName"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="realtorName" className="block text-sm font-medium mb-2">
                      Your Name (Realtor/Agent) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="realtorName"
                      name="realtorName"
                      required
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      data-testid="input-realtorName"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="clientEmail" className="block text-sm font-medium mb-2">
                        Client Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="clientEmail"
                        name="clientEmail"
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-clientEmail"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientPhone" className="block text-sm font-medium mb-2">
                        Client Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="clientPhone"
                        name="clientPhone"
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                        data-testid="input-clientPhone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="propertyAddress" className="block text-sm font-medium mb-2">
                      Property Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="propertyAddress"
                      name="propertyAddress"
                      required
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      data-testid="input-propertyAddress"
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
                      <strong>Disclaimer:</strong> Client details must be provided within 30 days of the sale closing date to activate the protection plan. By submitting this form, you confirm that the information provided is accurate and that your client has agreed to be contacted by Intelligent Design.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg py-6 h-auto"
                    data-testid="button-submit-form"
                  >
                    Register Client & Activate Plan <Gift className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions for REALTORS®</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Is there any cost to me or my client?</h3>
                  <p className="text-muted-foreground">
                    No! This 2-year protection plan (valued at $1,200) is completely FREE for both you and your client. There are no hidden fees, no obligations, and no strings attached.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">How do I register my clients?</h3>
                  <p className="text-muted-foreground">
                    Simply fill out the registration form above with your client's contact information and property address. You must submit the information within 30 days of the closing date.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What if I have multiple clients?</h3>
                  <p className="text-muted-foreground">
                    You can register as many clients as you'd like! Each home you sell qualifies for this exclusive offer. Simply submit a separate form for each client.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">How will this benefit my business?</h3>
                  <p className="text-muted-foreground">
                    By offering real value to your clients, you differentiate yourself from other agents, build stronger relationships, generate more referrals, and close deals faster. Buyers appreciate agents who go above and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">What happens after the 2 years?</h3>
                  <p className="text-muted-foreground">
                    After the 2-year protection plan expires, your client will have the option to continue with our maintenance plans, but there's no obligation. This builds long-term relationships between your clients and a trusted service provider.
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
              Ready to Elevate Your Client Experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Tucson's top REALTORS® who give their clients the gift of peace of mind
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                <a href="#register-client" data-testid="button-register-footer">
                  Register Your First Client <Sparkles className="w-5 h-5 ml-2" />
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
