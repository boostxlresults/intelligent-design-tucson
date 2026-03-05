import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import { getPageSchemas } from '@/lib/seo/schemaRegistry';
import { askAboutThisPlaceFAQs } from '@/data/faqs/askAboutThisPlace';
import ServiceFAQ from '@/components/content/ServiceFAQ';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';
import Link from 'next/link';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Frequently Asked Questions | Intelligent Design Tucson',
  description: 'Get answers to common questions about HVAC, plumbing, electrical, solar, and roofing services in Tucson. 24/7 emergency service, free estimates, financing available. Call (520) 333-2665.',
  canonicalUrl: 'https://www.idesignac.com/faq',
  keywords: [
    'HVAC FAQ Tucson', 'plumbing questions Tucson', 'AC repair cost Tucson',
    'solar installation FAQ Arizona', 'electrician FAQ Tucson', 'roofing FAQ Tucson',
    'Intelligent Design FAQ', 'home services questions Tucson',
    'emergency AC repair Tucson', 'water heater FAQ', 'EV charger installation FAQ'
  ],
});

// Categorize FAQs for organized display
const faqCategories = [
  {
    id: 'emergency-availability',
    title: 'Emergency Service & Availability',
    description: '24/7 emergency service, service areas, and scheduling',
    icon: '🔧',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 0 && i <= 2),
  },
  {
    id: 'pricing-estimates',
    title: 'Pricing, Estimates & Financing',
    description: 'Free estimates, transparent pricing, and flexible financing options',
    icon: '💰',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 3 && i <= 6),
  },
  {
    id: 'hvac',
    title: 'Air Conditioning & Heating (HVAC)',
    description: 'AC repair, installation, maintenance, and common HVAC questions',
    icon: '❄️',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 7 && i <= 12),
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Drain cleaning, water heaters, slab leaks, and sewer services',
    icon: '🚿',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 13 && i <= 19),
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Panel upgrades, EV chargers, generators, and electrical work',
    icon: '⚡',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 20 && i <= 24),
  },
  {
    id: 'solar',
    title: 'Solar Installation',
    description: 'Solar panels, incentives, costs, and energy savings',
    icon: '☀️',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 25 && i <= 27),
  },
  {
    id: 'roofing',
    title: 'Roofing Services',
    description: 'Roof repair, replacement, inspections, and roofing types',
    icon: '🏠',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 28 && i <= 31),
  },
  {
    id: 'credentials-trust',
    title: 'Credentials & Trust',
    description: 'Licensing, insurance, veteran ownership, and customer ratings',
    icon: '✅',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 32 && i <= 35),
  },
  {
    id: 'booking',
    title: 'Booking & Scheduling',
    description: 'How to schedule service, same-day availability, and contact info',
    icon: '📅',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 36 && i <= 37),
  },
  {
    id: 'tucson-specific',
    title: 'Tucson-Specific Questions',
    description: 'Desert climate tips, monsoon prep, hard water, and local advice',
    icon: '🌵',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 38 && i <= 41),
  },
  {
    id: 'additional',
    title: 'Additional Services',
    description: 'Duct cleaning, smart thermostats, water filtration, and more',
    icon: '🔌',
    faqs: askAboutThisPlaceFAQs.faqs.filter((_, i) => i >= 42),
  },
];

export default function FAQPage() {
  // Generate page schemas including FAQPage schema
  const schemas = getPageSchemas({
    pageType: 'info',
    canonicalUrl: 'https://www.idesignac.com/faq',
    pageData: {
      faqs: askAboutThisPlaceFAQs.faqs,
    },
  });

  return (
    <>
      {/* JSON-LD Schema */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get answers to common questions about HVAC, plumbing, electrical, solar, and roofing 
            services from Tucson&apos;s highest-rated home services company. Can&apos;t find your answer? 
            Call us at{' '}
            <a href="tel:5203332665" className="text-primary font-semibold hover:underline">
              (520) 333-2665
            </a>
            .
          </p>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="scroll-mt-20"
        >
          <ServiceFAQ
            faqs={category.faqs}
            sectionHeading={category.title}
            sectionDescription={category.description}
            serviceName={category.title}
            serviceId={category.id}
          />
        </section>
      ))}

      {/* Summary Stats */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Why Tucson Trusts Intelligent Design
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">46+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Serving Tucson</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">4.97</div>
              <div className="text-sm text-muted-foreground mt-1">Google Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">23K+</div>
              <div className="text-sm text-muted-foreground mt-1">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Call us anytime or schedule a free estimate online.
            We serve all of greater Tucson including Oro Valley, Marana, Vail, Sahuarita, and Green Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5203332665"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors"
            >
              Call (520) 333-2665
            </a>
            <Link
              href="/free-hvac-quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/10 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Scheduler */}
      <SchedulerEmbed />
    </>
  );
}
