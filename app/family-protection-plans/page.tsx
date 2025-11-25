import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, CheckCircle2, Shield, Phone, Clock, Award, Star, Calendar, Wrench, Zap, Droplets, Home, Sun } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Intelligent Design Family Protection Plans | Home Maintenance Plans Tucson',
  description: "Don't miss this opportunity to secure your family's comfort and safety. Sign up now and experience the financial benefits of a well-maintained home. Priority service, up to 20% discounts, and 5 free annual visits.",
  canonicalUrl: 'https://www.idesignac.com/family-protection-plans',
  keywords: ['family protection plan Tucson', 'HVAC maintenance plan', 'plumbing maintenance plan', 'home service agreement', 'affordable home maintenance Tucson'],
});

const planSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Intelligent Design Family Protection Plans",
  "description": "Comprehensive home protection plans covering HVAC, plumbing, electrical, roofing, and solar systems with annual inspections, repair discounts, and priority service",
  "brand": {
    "@type": "Organization",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "offerCount": "7"
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
        "text": "Our Family Protection Plans include priority service 24/7/365, up to 5 free annual visits, up to 20% discount on all services and repairs, $0 service fees for select plans, no overtime rates, front-of-the-line priority service, exclusive product offers, and 5 complementary maintenance appointments (AC Tune Up, Heating Tune Up, Whole Home Plumbing Inspection, Whole Home Electrical Inspection, and Roofing Inspection)."
      }
    },
    {
      "@type": "Question",
      "name": "What plans are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer 7 different plans: Basic, Classic, Deluxe, and Premium comprehensive plans, plus single-service options including HVAC Only, Plumbing Only, and Solar Monitoring plans."
      }
    },
    {
      "@type": "Question",
      "name": "How do I sign up for a Family Protection Plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply call us at (520) 333-2665 to speak with one of our Family Protection Plan Experts, or ask your service professional to enroll you during your next appointment."
      }
    }
  ]
};

export default function FamilyProtectionPlansPage() {
  const mainPlans = [
    { name: "Basic", image: "/images/plans/basic.jpg" },
    { name: "Classic", image: "/images/plans/classic.jpg" },
    { name: "Deluxe", image: "/images/plans/deluxe.jpg" },
    { name: "Premium", image: "/images/plans/premium.jpg" },
  ];

  const basicPlans = [
    { name: "Plumbing Only", image: "/images/plans/plumbing-only.jpg" },
    { name: "HVAC Only", image: "/images/plans/hvac-only.jpg" },
  ];

  const benefits = [
    "Priority Service 24 Hours a Day, Seven Days a Week, 365 Days a Year",
    "Up to 5 Free Annual Visits",
    "Up to 20% Discount on All Services and Repairs (Based on Plan Selected)",
    "$0 Service Fees (For select plans)",
    "No Overtime Rates",
    "Drastically Reduced Chance of Sudden Breakdowns",
    "Front-Of-The-Line Priority Service (Priority service is based on selected plan)",
    "Exclusive Product Offers",
    "5 Complementary Maintenance Appointments a Year (AC Tune Up, Heating Tune Up, Whole Home Plumbing Inspection, Whole Home Electrical Inspection, and Roofing Inspection)",
  ];

  const whyChoose = [
    "Drastically Reduce The Chance of Sudden Breakdowns or Emergencies",
    "Have Peace of Mind Knowing We Have Your Home Maintenance Needs Protected",
    "Reduce Future Repairs",
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
          className="relative bg-cover bg-center py-20 md:py-28"
          style={{
            backgroundImage: 'linear-gradient(rgba(13, 45, 122, 0.85), rgba(13, 45, 122, 0.85)), url(/images/family-protection-hero.png)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-hero-title">
                Intelligent Design Family Protection Plans
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-2" data-testid="text-hero-reviews">
                Over 22,000 Five-Star Reviews
              </p>
              <p className="text-xl md:text-2xl text-yellow-400 font-bold mb-6" data-testid="text-hero-subtitle">
                Give Your Family Peace of Mind
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Don't miss this opportunity to secure your family's comfort and safety. Sign up now and experience the financial benefits of a well-maintained home.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                  <a href="tel:+1520-333-2665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" /> Call For A Free Quote
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  <a href="#plans" data-testid="button-view-plans">
                    View Plans
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

        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Star className="w-10 h-10 text-yellow-500 mb-2" />
                <p className="font-bold text-sm">Over 22,000 Five Star Reviews</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-10 h-10 text-primary mb-2" />
                <p className="font-bold text-sm">Lifetime Warranties Available</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-10 h-10 text-primary mb-2" />
                <p className="font-bold text-sm">24/7 Emergency Service</p>
              </div>
              <div className="flex flex-col items-center">
                <Calendar className="w-10 h-10 text-primary mb-2" />
                <p className="font-bold text-sm">No Extra Charges For Appointment Times</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="plans">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Protect and Extend the Life of Your Home's Major Systems
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive protection plans designed to keep your home running smoothly year-round
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {mainPlans.map((plan, index) => (
                <Card key={index} className="overflow-hidden hover-elevate transition-all cursor-pointer group">
                  <div className="relative aspect-[330/465]">
                    <Image
                      src={plan.image}
                      alt={`${plan.name} Family Protection Plan`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Basic Family Protection Plans
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Single-service plans for targeted protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
              {basicPlans.map((plan, index) => (
                <Card key={index} className="overflow-hidden hover-elevate transition-all cursor-pointer group">
                  <div className="relative aspect-[330/465]">
                    <Image
                      src={plan.image}
                      alt={`${plan.name} Protection Plan`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Now Offering Solar Monitoring
              </h2>
            </div>

            <div className="max-w-sm mx-auto">
              <Card className="overflow-hidden hover-elevate transition-all cursor-pointer group">
                <div className="relative aspect-[330/465]">
                  <Image
                    src="/images/plans/solar-monitoring.jpg"
                    alt="Monthly Solar Monitoring Plan"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 330px"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Would you like to:</h2>
            <ul className="text-left max-w-2xl mx-auto space-y-4 mb-8">
              {whyChoose.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">
              Then our Family Protection Plans are right for you!
            </h3>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
              <a href="tel:+1520-333-2665" data-testid="button-call-cta-1">
                <Phone className="w-5 h-5 mr-2" /> Call Now to Learn More
              </a>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Intelligent Design Family Protection Plans?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our Family Protection Plans offer unparalleled benefits
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground">State-of-the-art diagnostic tools and equipment</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Comprehensive Coverage</h3>
                  <p className="text-muted-foreground">HVAC, plumbing, solar, roofing, and electrical</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Home className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Peace of Mind</h3>
                  <p className="text-muted-foreground">Round-the-clock protection for your loved ones</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Call now at <a href="tel:+1520-333-2665" className="text-yellow-600 hover:underline">(520) 333-2665</a> to speak with one of our Family Protection Plan Experts.
              </h3>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Benefits of Family Protection Plans
              </h2>
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

        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Affordable Home Maintenance in Tucson
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Owning a home in Tucson comes with its own set of challenges and unexpected costs, from the need for regular air conditioner maintenance to sudden water heater replacements. However, there's a smarter way to manage these responsibilities without breaking the bank: Intelligent Design's <strong>Family Protection Plans</strong>.
              </p>
              <p>
                By joining our exclusive Family Protection Plans, you gain access to a plethora of special discounts on our already competitively priced affordable services. But the perks don't stop at cost savings. You'll continue to receive the same world-class service from our certified technicians that you've come to expect and trust.
              </p>
              <p>
                Whether you're in need of a comprehensive air conditioner check-up during Tucson's scorching summers or an emergency water heater replacement, our team is committed to delivering top-notch service at member-exclusive rates.
              </p>
              <p>
                Why compromise on quality when you can have both affordability and excellence? The <strong>Family Protection Plan</strong> isn't just a discount program; it's a long-term partnership aimed at making your home more comfortable and sustainable.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg mb-4">
                To become a member and start enjoying these exclusive benefits, simply contact our office for more details. You can also ask your service professional to enroll you during your next appointment.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Not Just the #1 Rated HVAC Maintenance Plans in Tucson
              </h2>
              <p className="text-xl text-muted-foreground">
                Intelligent Design is your one-stop-shop for HVAC, Plumbing, Solar, Roofing, and Electrical!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Wrench, label: "HVAC" },
                { icon: Droplets, label: "Plumbing" },
                { icon: Sun, label: "Solar" },
                { icon: Home, label: "Roofing" },
                { icon: Zap, label: "Electrical" },
                { icon: Shield, label: "Protection Plans" },
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <service.icon className="w-8 h-8 text-primary mb-2" />
                    <span className="font-medium">{service.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reach Out to Us Today!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't sweat the heat or plumbing problems! Contact us today to schedule your AC, solar, electrical, and plumbing services and experience hassle-free solutions for your home.
            </p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
              <a href="tel:+1520-333-2665" data-testid="button-call-final">
                <Phone className="w-5 h-5 mr-2" /> (520) 333-2665
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
