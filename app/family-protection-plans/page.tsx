import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, CheckCircle2, Shield, Phone, Clock, Award, Star, Calendar, Wrench, Zap, Droplets, Home, Sun, FileText, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Family Protection Plans | Tucson Home Maintenance Membership | Intelligent Design',
  description: "Tucson home maintenance membership plans from $5/month. Annual inspections, up to 15% repair discounts, 24/7 smart AC monitoring, warranty extensions, filter & service credits, and sign-on bonuses. Call (520) 333-2665.",
  canonicalUrl: 'https://www.idesignac.com/family-protection-plans',
  keywords: ['family protection plan Tucson', 'HVAC maintenance plan', 'plumbing maintenance plan', 'home service agreement', 'smart AC monitoring', 'affordable home maintenance Tucson'],
});

// PDF featured near the top of the page. Replace the file at
// public/family-protection-plans-overview.pdf with the final version — the path/URL stays the same.
const PLAN_PDF = '/family-protection-plans-overview.pdf';
const PLAN_PDF_PREVIEW = '/images/family-protection-plans-preview.png';

type Plan = {
  name: string;
  price: string;
  unit: string;
  note?: string;
  icon: typeof Shield;
  featured?: boolean;
  badge?: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: 'Deluxe Plan',
    price: '$48.88',
    unit: '/mo',
    note: 'Price includes your first HVAC system — each additional unit is half off.',
    icon: Shield,
    featured: true,
    badge: 'Best Value',
    features: [
      'Five annual inspections',
      '15% repair discount',
      '2-year warranty extension',
      'Complimentary drain treatment, water testing, standard filter, thermostat batteries & thermal imaging',
      'Emergency response & priority booking',
      '3-year inflation protection',
      '24/7 Remote Protection & Alerts (Smart AC Monitoring)',
      'Piggy Bank Earnings: $10 monthly service/repair credit',
      '$25 Filter Credit',
      '$500 Sign-On Bonus for service/repair after 1 year of membership',
    ],
  },
  {
    name: 'HVAC Only Plan',
    price: '$32.88',
    unit: '/mo',
    note: 'Price includes your first HVAC system — each additional unit is half off.',
    icon: Wrench,
    features: [
      'Annual heating & cooling maintenance',
      '10% repair discount',
      '2-year extended repair warranty',
      '24/7 Remote Protection & Alerts (Smart AC Monitoring)',
      'Piggy Bank Earnings: $10 monthly service/repair credit',
      '$25 Filter Credit',
      '$250 Sign-On Bonus for service/repair after 1 year of membership',
    ],
  },
  {
    name: 'Smart AC Only Plan',
    price: '$5',
    unit: '/mo',
    icon: Zap,
    features: [
      '24/7 Remote Protection & Alerts (Smart AC Monitoring)',
      'Piggy Bank Earnings: $10 monthly service/repair credit',
      '1-year warranty on parts & labor',
      '$100 Sign-On Bonus for service/repair after 1 year of membership',
    ],
  },
  {
    name: 'Plumbing Only Plan',
    price: '$14.88',
    unit: '/mo',
    icon: Droplets,
    features: [
      'Annual plumbing inspection',
      'Water heater flush',
      '10% repair discount',
      '2-year extended repair warranty',
    ],
  },
  {
    name: 'Solar Monitoring Add-On',
    price: '$14.88',
    unit: '/mo',
    note: 'Transfer fee applies. Monitoring for SolarEdge & Enphase systems.',
    icon: Sun,
    features: [
      '10% repair discount',
      'Annual solar inspection',
      'Monitoring support for SolarEdge & Enphase systems; other systems receive one extra annual solar inspection',
    ],
  },
];

const planSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Intelligent Design Family Protection Plans",
  "description": "Tucson home maintenance membership plans covering HVAC, plumbing, solar, and smart-AC monitoring with annual inspections, repair discounts, warranty extensions, and priority service.",
  "brand": {
    "@type": "Organization",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "5.00",
    "highPrice": "48.88",
    "offerCount": 5
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What plans are available and what do they cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Deluxe Plan is $48.88/month (includes your first HVAC system; each additional unit is half off). Single-service options include the HVAC Only Plan at $32.88/month, the Smart AC Only Plan at $5/month, and the Plumbing Only Plan at $14.88/month, plus a Solar Monitoring add-on at $14.88/month."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the Deluxe Family Protection Plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Deluxe Plan includes five annual inspections, a 15% repair discount, a 2-year warranty extension, complimentary drain treatment, water testing, standard filter, thermostat batteries and thermal imaging, emergency response and priority booking, 3-year inflation protection, 24/7 smart AC monitoring, $10 monthly Piggy Bank service credit, a $25 filter credit, and a $500 sign-on bonus for service or repair after one year of membership."
      }
    },
    {
      "@type": "Question",
      "name": "How do I sign up for a Family Protection Plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call (520) 333-2665 to speak with John Anderson, our Customer Service Representative, or ask your service professional to enroll you during your next appointment."
      }
    }
  ]
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Family Protection Plans - Intelligent Design Home Maintenance Plans",
  "description": "Learn about Intelligent Design's Family Protection Plans offering home maintenance coverage for HVAC, plumbing, solar, and smart-AC monitoring. Priority service, repair discounts, and annual inspections.",
  "thumbnailUrl": "https://img.youtube.com/vi/7fvu8D6HN_g/maxresdefault.jpg",
  "uploadDate": "2024-01-01T00:00:00Z",
  "contentUrl": "https://www.youtube.com/watch?v=7fvu8D6HN_g",
  "embedUrl": "https://www.youtube.com/embed/7fvu8D6HN_g",
  "publisher": {
    "@type": "Organization",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.idesignac.com/logo.png"
    }
  }
};

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.icon;
  return (
    <Card className={`relative flex flex-col overflow-hidden ${plan.featured ? 'border-2 border-yellow-500 shadow-xl' : 'border border-border shadow-sm'}`}>
      {plan.badge && (
        <div className="absolute right-0 top-0 rounded-bl-lg bg-yellow-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-gray-900">
          {plan.badge}
        </div>
      )}
      <div className={`px-6 pt-6 ${plan.featured ? 'bg-primary text-primary-foreground' : ''} ${plan.featured ? 'pb-6' : 'pb-4'}`}>
        <div className="mb-3 flex items-center gap-2">
          <Icon className={`h-6 w-6 ${plan.featured ? 'text-yellow-400' : 'text-primary'}`} />
          <h3 className="text-xl font-bold">{plan.name}</h3>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold">{plan.price}</span>
          <span className={`text-base font-semibold ${plan.featured ? 'text-white/80' : 'text-muted-foreground'}`}>{plan.unit}</span>
        </div>
        {plan.note && (
          <p className={`mt-2 text-sm ${plan.featured ? 'text-white/80' : 'text-muted-foreground'}`}>{plan.note}</p>
        )}
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <ul className="space-y-3">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <span className="text-sm leading-snug">{f}</span>
            </li>
          ))}
        </ul>
        <Button asChild size="lg" className={`mt-6 h-auto w-full py-4 text-base font-bold ${plan.featured ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600 border-yellow-500' : ''}`}>
          <a href="tel:5203332665">
            <Phone className="mr-2 h-5 w-5" /> Enroll — (520) 333-2665
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function FamilyProtectionPlansPage() {
  const featured = plans.find((p) => p.featured)!;
  const rest = plans.filter((p) => !p.featured);

  const benefits = [
    "Priority service 24 hours a day, 7 days a week, 365 days a year",
    "Up to five free annual inspection visits",
    "Up to 15% off all repairs (based on plan selected)",
    "24/7 smart AC monitoring with remote alerts",
    "Piggy Bank Earnings: monthly service & repair credits",
    "Sign-on bonuses and filter credits that put money back in your pocket",
    "Warranty extensions on parts and labor",
    "Inflation protection that locks in your value (Deluxe)",
  ];

  const whyChoose = [
    "Drastically reduce the chance of sudden breakdowns or emergencies",
    "Have peace of mind knowing your home's major systems are protected",
    "Reduce future repair costs and extend equipment life",
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(planSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

      <div className="min-h-screen flex flex-col bg-background">
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/family-protection-hero.png" alt="Family protection plans for your home" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(13,45,122,0.85)]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-hero-title">
                Intelligent Design Family Protection Plans
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-2" data-testid="text-hero-reviews">
                Over 23,000 Five-Star Reviews
              </p>
              <p className="text-xl md:text-2xl text-yellow-400 font-bold mb-6" data-testid="text-hero-subtitle">
                Give Your Family Peace of Mind
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Protect your home&apos;s major systems for as little as $5/month. Annual inspections, repair discounts, 24/7 smart AC monitoring, and credits that pay you back.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                  <a href="tel:5203332665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" /> Call For A Free Quote
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  <a href="#plans" data-testid="button-view-plans">
                    View Plans &amp; Pricing
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground" data-testid="text-breadcrumb-current">Family Protection Plans</span>
            </div>
          </div>
        </nav>

        {/* PDF feature block — just below the hero */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-lg md:grid-cols-2 md:items-center md:p-8">
              <div className="order-2 md:order-1">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  <FileText className="h-4 w-4" /> Plan Details
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  See every plan, side by side
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our one-page guide breaks down exactly what each Family Protection Plan covers &mdash; inspections, discounts, warranties, monitoring, and the credits that pay you back. Download it, print it, or bring it to your next appointment.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="h-auto py-4 text-base font-bold">
                    <a href={PLAN_PDF} target="_blank" rel="noopener noreferrer" data-testid="button-pdf-download">
                      <Download className="mr-2 h-5 w-5" /> View the Plan Guide (PDF)
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-auto py-4 text-base font-bold">
                    <a href="tel:5203332665">
                      <Phone className="mr-2 h-5 w-5" /> Ask a Question
                    </a>
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <a href={PLAN_PDF} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-xl border border-border shadow-md transition hover:shadow-xl" aria-label="Open the Family Protection Plans guide (PDF)">
                  <Image
                    src={PLAN_PDF_PREVIEW}
                    alt="Family Protection Plans comparison guide — HVAC Only, Deluxe Family, and SmartAC Monitoring plans"
                    width={1000}
                    height={1295}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-primary shadow">
                      <FileText className="h-4 w-4" /> Open full PDF
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Star className="w-10 h-10 text-yellow-500 mb-2" />
                <p className="font-bold text-sm">Over 23,000 Five-Star Reviews</p>
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

        {/* Plans + pricing */}
        <section className="py-16 bg-muted/30" id="plans">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Choose Your Family Protection Plan
              </h2>
              <p className="text-xl md:text-2xl font-bold text-primary/80 mb-4">
                HVAC &bull; Plumbing &bull; Solar &bull; Smart Monitoring: One Call Covers It All
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Simple monthly pricing, no surprises. Enroll over the phone in minutes.
              </p>
            </div>

            {/* Featured plan */}
            <div className="mx-auto mb-10 max-w-md md:max-w-lg">
              <PlanCard plan={featured} />
            </div>

            {/* Remaining plans */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {rest.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Pricing shown is per month. Additional HVAC units on the Deluxe and HVAC Only plans are half off the first unit&apos;s price.
            </p>
          </div>
        </section>

        {/* Video */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How the Plans Protect Your Home
              </h2>
            </div>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7fvu8D6HN_g?si=tzMh4SNWhrFU0ZL7"
                title="Family Protection Plans - Intelligent Design Home Maintenance Plans"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Would you like to */}
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
              <a href="tel:5203332665" data-testid="button-call-cta-1">
                <Phone className="w-5 h-5 mr-2" /> Call Now to Learn More
              </a>
            </Button>
          </div>
        </section>

        {/* Why choose */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose Intelligent Design Family Protection Plans?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Unparalleled benefits, one trusted local team
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Smart AC Monitoring</h3>
                  <p className="text-muted-foreground">24/7 remote protection and alerts on every plan</p>
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
            <div className="rounded-lg bg-muted/50 p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Talk to your Family Protection Plan expert
              </h3>
              <p className="text-lg text-muted-foreground mb-1">
                <strong className="text-foreground">John Anderson</strong>, Customer Service Representative
              </p>
              <a href="tel:5203332665" className="text-2xl font-bold text-yellow-600 hover:underline">(520) 333-2665</a>
            </div>
          </div>
        </section>

        {/* Benefits */}
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

        {/* Prose */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Affordable Home Maintenance in Tucson
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Owning a home in Tucson comes with its own set of challenges and unexpected costs, from regular air conditioner maintenance to sudden water heater replacements. There is a smarter way to manage these responsibilities without breaking the bank: Intelligent Design&apos;s <strong>Family Protection Plans</strong>.
              </p>
              <p>
                Members gain access to repair discounts, warranty extensions, and monthly credits on top of our already competitive rates &mdash; while receiving the same world-class service from our certified technicians that you have come to expect and trust.
              </p>
              <p>
                Whether you need a comprehensive air conditioner check-up during Tucson&apos;s scorching summers or an emergency water heater replacement, our team delivers top-notch service at member-exclusive rates. The <strong>Family Protection Plan</strong> is not just a discount program; it is a long-term partnership aimed at making your home more comfortable and sustainable.
              </p>
            </div>
          </div>
        </section>

        {/* One-stop-shop */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
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

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach Out to Us Today!</h2>
            <p className="text-xl mb-8 opacity-90">
              Lock in peace of mind for your home. Call to enroll in minutes or ask us which plan fits your home best.
            </p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
              <a href="tel:5203332665" data-testid="button-call-final">
                <Phone className="w-5 h-5 mr-2" /> (520) 333-2665
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
