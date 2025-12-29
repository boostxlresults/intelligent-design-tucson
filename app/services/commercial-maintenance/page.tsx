import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Shield, Phone, Clock, Award, Star, Calendar, Wrench, Zap, Droplets, Building2, Sun, Thermometer, Flame, ShowerHead, Lightbulb, Hammer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Commercial Maintenance Services Tucson | HVAC, Plumbing, Electrical | Intelligent Design',
  description: 'Comprehensive commercial maintenance plans for Tucson businesses. HVAC, plumbing, electrical, roofing, and solar services with priority response, preventive maintenance, and 24/7 emergency support. Reduce downtime and protect your investment.',
  canonicalUrl: 'https://www.idesignac.com/services/commercial-maintenance',
  keywords: ['commercial HVAC maintenance Tucson', 'commercial plumbing services', 'commercial electrical maintenance', 'business maintenance plans', 'commercial property maintenance Tucson', 'preventive maintenance commercial'],
});

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Commercial Maintenance Services - Intelligent Design",
  "description": "Learn about Intelligent Design's comprehensive commercial maintenance services for Tucson businesses, covering HVAC, plumbing, electrical, roofing, and solar systems.",
  "thumbnailUrl": "https://img.youtube.com/vi/3fO-4mWg3vk/maxresdefault.jpg",
  "uploadDate": "2024-01-01T00:00:00Z",
  "contentUrl": "https://www.youtube.com/watch?v=3fO-4mWg3vk",
  "embedUrl": "https://www.youtube.com/embed/3fO-4mWg3vk",
  "publisher": {
    "@type": "Organization",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.idesignac.com/logo.png"
    }
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Maintenance Services",
  "description": "Comprehensive commercial maintenance plans covering HVAC, plumbing, electrical, roofing, and solar systems for Tucson businesses",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "telephone": "+1-520-333-2665",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tucson",
      "addressRegion": "AZ"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Tucson, Arizona"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Maintenance Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial HVAC Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Plumbing Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Electrical Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Roofing Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Solar Maintenance"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What commercial maintenance services does Intelligent Design offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide comprehensive commercial maintenance for HVAC systems (heating and cooling), plumbing, electrical, roofing, and solar installations. Our services cover offices, retail spaces, restaurants, warehouses, medical facilities, and more."
      }
    },
    {
      "@type": "Question",
      "name": "How often should commercial HVAC systems be serviced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial HVAC systems should be professionally inspected and maintained at least twice per year—before the cooling season and before the heating season. High-use facilities may require quarterly maintenance for optimal efficiency and longevity."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer emergency commercial services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide 24/7 emergency services for commercial clients. Our priority response program ensures minimal downtime for your business with rapid response times and dedicated commercial technicians."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of a commercial maintenance plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Commercial maintenance plans provide priority scheduling, discounted repair rates, preventive maintenance visits, extended equipment life, improved energy efficiency, reduced emergency repairs, and compliance documentation for insurance and regulatory requirements."
      }
    }
  ]
};

export default function CommercialMaintenancePage() {
  const services = [
    {
      id: 'hvac',
      name: 'Commercial HVAC',
      icon: Thermometer,
      description: 'Comprehensive heating and cooling maintenance for offices, retail, restaurants, and industrial facilities.',
      features: [
        'Rooftop unit (RTU) maintenance',
        'Package unit service and repair',
        'Split system maintenance',
        'VRF/VRV system service',
        'Chiller maintenance',
        'Ductwork inspection and cleaning',
        'Refrigerant management',
        'Thermostat and controls optimization'
      ]
    },
    {
      id: 'plumbing',
      name: 'Commercial Plumbing',
      icon: ShowerHead,
      description: 'Full-service commercial plumbing for restaurants, medical facilities, multi-unit properties, and more.',
      features: [
        'Backflow prevention testing',
        'Grease trap maintenance',
        'Water heater service',
        'Drain cleaning and jetting',
        'Sewer line inspection',
        'Fixture repair and replacement',
        'Water pressure optimization',
        'Leak detection and repair'
      ]
    },
    {
      id: 'electrical',
      name: 'Commercial Electrical',
      icon: Lightbulb,
      description: 'Safe, code-compliant electrical services for commercial and industrial applications.',
      features: [
        'Panel upgrades and maintenance',
        'Lighting retrofits (LED upgrades)',
        'Emergency backup systems',
        'Generator maintenance',
        'Electrical safety inspections',
        'Code compliance updates',
        'EV charging station installation',
        'Power quality analysis'
      ]
    },
    {
      id: 'roofing',
      name: 'Commercial Roofing',
      icon: Hammer,
      description: 'Protect your investment with professional commercial roof maintenance and inspections.',
      features: [
        'Flat roof maintenance',
        'Coating and sealant application',
        'Drainage system inspection',
        'Storm damage assessment',
        'Preventive repairs',
        'Roof penetration sealing',
        'Thermal imaging inspections',
        'Documentation for insurance'
      ]
    },
    {
      id: 'solar',
      name: 'Commercial Solar',
      icon: Sun,
      description: 'Maximize your solar investment with professional maintenance and monitoring.',
      features: [
        'Panel cleaning and inspection',
        'Inverter maintenance',
        'Performance monitoring',
        'Connection and wiring checks',
        'Production optimization',
        'Warranty support',
        'System expansion consultation',
        'ROI analysis and reporting'
      ]
    }
  ];

  const benefits = [
    'Priority 24/7 Emergency Response',
    'Dedicated Commercial Account Manager',
    'Scheduled Preventive Maintenance Visits',
    'Discounted Labor and Parts Rates',
    'No Overtime Charges for Emergency Calls',
    'Comprehensive Documentation for Compliance',
    'Extended Equipment Lifespan',
    'Improved Energy Efficiency',
    'Reduced Unexpected Downtime',
    'Multi-Location Service Coordination',
    'Customizable Service Agreements',
    'Quarterly Performance Reports'
  ];

  const industries = [
    { name: 'Office Buildings', icon: Building2 },
    { name: 'Retail Stores', icon: Building2 },
    { name: 'Restaurants & Food Service', icon: Flame },
    { name: 'Medical & Dental Facilities', icon: Shield },
    { name: 'Warehouses & Industrial', icon: Building2 },
    { name: 'Multi-Family Properties', icon: Building2 },
    { name: 'Schools & Educational', icon: Building2 },
    { name: 'Churches & Non-Profits', icon: Building2 },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
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
            backgroundImage: 'linear-gradient(rgba(13, 45, 122, 0.85), rgba(13, 45, 122, 0.85)), url(/images/hvac-hero.jpg)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl text-center mx-auto">
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold mb-6">
                <Building2 className="w-5 h-5" />
                COMMERCIAL SERVICES
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" data-testid="text-hero-title">
                Commercial Maintenance Services
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-2" data-testid="text-hero-reviews">
                Trusted by Tucson Businesses for 46+ Years
              </p>
              <p className="text-xl md:text-2xl text-yellow-400 font-bold mb-6" data-testid="text-hero-subtitle">
                HVAC • Plumbing • Electrical • Roofing • Solar
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Minimize downtime, maximize efficiency, and protect your business investment with comprehensive commercial maintenance plans tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                  <a href="tel:+1520-333-2665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" /> Call (520) 333-2665
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  <a href="#services" data-testid="button-view-services">
                    View Services
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
              <Link href="/services" className="hover:text-foreground" data-testid="link-breadcrumb-services">
                Services
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground" data-testid="text-breadcrumb-current">
                Commercial Maintenance Services
              </span>
            </div>
          </div>
        </nav>

        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4" data-testid="text-toc-title">Jump to:</h2>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <a 
                      href={`#${service.id}`}
                      className="text-primary hover:underline flex items-center gap-2"
                      data-testid={`link-toc-${service.id}`}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#benefits" className="text-primary hover:underline flex items-center gap-2" data-testid="link-toc-benefits">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Plan Benefits</span>
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-primary hover:underline flex items-center gap-2" data-testid="link-toc-industries">
                    <Building2 className="w-4 h-4" />
                    <span>Industries We Serve</span>
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-primary hover:underline flex items-center gap-2" data-testid="link-toc-faq">
                    <Shield className="w-4 h-4" />
                    <span>FAQs</span>
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center" data-testid="text-video-title">Watch: Commercial Maintenance Services Overview</h2>
              <div className="aspect-video w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/3fO-4mWg3vk?si=xJwTFeXyNwr6mNbP"
                  title="Commercial Maintenance Services - Intelligent Design"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Star className="w-10 h-10 text-yellow-500 mb-2" />
                <p className="font-bold text-sm">Over 22,000 Five Star Reviews</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-10 h-10 text-primary mb-2" />
                <p className="font-bold text-sm">46+ Years Combined Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-10 h-10 text-primary mb-2" />
                <p className="font-bold text-sm">24/7 Emergency Response</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-10 h-10 text-primary mb-2" />
                <p className="font-bold text-sm">Licensed, Bonded & Insured</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="services">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Comprehensive Commercial Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                One trusted partner for all your commercial maintenance needs
              </p>
            </div>

            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const bgClass = isEven ? 'bg-background' : 'bg-muted/30';
              const Icon = service.icon;
              
              return (
                <section 
                  key={service.id}
                  id={service.id}
                  className={`py-12 ${bgClass}`}
                  data-testid={`section-service-${service.id}`}
                >
                  <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary rounded-lg">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold" data-testid={`text-service-title-${service.id}`}>
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground" id="benefits">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Commercial Maintenance Plan Benefits
              </h2>
              <p className="text-xl text-primary-foreground/80">
                Why Tucson businesses trust Intelligent Design for their maintenance needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                <a href="tel:+1520-333-2665" data-testid="button-call-benefits">
                  <Phone className="w-5 h-5 mr-2" /> Get a Custom Quote
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16" id="industries">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tailored commercial maintenance solutions for every industry
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Card key={index} className="hover-elevate transition-all">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                      <p className="font-semibold">{industry.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30" id="faq">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3" data-testid={`text-faq-question-${index}`}>{faq.name}</h3>
                    <p className="text-muted-foreground" data-testid={`text-faq-answer-${index}`}>{faq.acceptedAnswer.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contact us today to discuss a customized commercial maintenance plan for your Tucson business. Our commercial specialists are ready to help you reduce costs and maximize uptime.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                <a href="tel:+1520-333-2665" data-testid="button-call-cta-final">
                  <Phone className="w-5 h-5 mr-2" /> Call (520) 333-2665
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                <Link href="/contact" data-testid="button-contact-cta">
                  Request a Quote Online
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
