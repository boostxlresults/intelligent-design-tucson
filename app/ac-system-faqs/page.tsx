import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Air Conditioning System FAQs | Expert HVAC Answers Tucson',
  description: 'Get expert answers to common air conditioning questions. Learn about AC maintenance, efficiency, troubleshooting, and when to call a professional HVAC technician in Tucson.',
  canonicalUrl: 'https://intelligentdesignac.com/ac-system-faqs',
  keywords: ['air conditioning FAQs', 'HVAC questions', 'AC maintenance', 'air conditioner troubleshooting', 'AC repair', 'Tucson HVAC', 'AC efficiency'],
});

interface FAQ {
  question: string;
  answer: string | JSX.Element;
}

export default function ACSystemFAQsPage() {
  const faqs: FAQ[] = [
    {
      question: 'How does an air conditioner work?',
      answer: (
        <>
          <p className="mb-4">
            An air conditioner works by removing heat and humidity from indoor air and transferring it outside. The system uses refrigerant, which cycles through four main components: the evaporator coil, compressor, condenser coil, and expansion valve.
          </p>
          <p className="mb-4">
            Inside your home, warm air passes over the cold evaporator coil, where the refrigerant absorbs heat and humidity. The refrigerant then travels to the outdoor compressor, which pressurizes it into a hot gas. This hot gas moves to the condenser coil, where it releases heat to the outside air and condenses back into a liquid. The cycle repeats continuously to maintain your desired temperature.
          </p>
          <p>
            Watch our featured video below for a detailed visual explanation of how air conditioners work!
          </p>
        </>
      ),
    },
    {
      question: 'How often should I change my air filter?',
      answer: 'You should change your air filter every 1-3 months, depending on usage and filter type. Homes with pets, allergies, or high dust levels may need more frequent changes (every 30-60 days). Standard 1-inch filters should be changed monthly, while higher-quality pleated filters can last 2-3 months. A clogged filter reduces airflow, decreases efficiency, and can cause your system to work harder, leading to higher energy bills and potential breakdowns.',
    },
    {
      question: 'Why is my AC running but not cooling?',
      answer: 'Several issues can cause an AC to run without cooling effectively: a dirty air filter restricting airflow, low refrigerant levels due to a leak, a frozen evaporator coil, a malfunctioning compressor, or a faulty thermostat. The outdoor condenser unit may also be blocked by debris or vegetation. If your AC runs continuously without cooling, turn it off and contact a professional HVAC technician to diagnose and repair the issue before it causes further damage.',
    },
    {
      question: 'What temperature should I set my thermostat?',
      answer: 'For optimal comfort and efficiency, set your thermostat to 78°F when you\'re home during summer months. When you\'re away, increase the temperature to 85°F to save energy without stressing the system. Each degree below 78°F can increase your cooling costs by 3-5%. Use a programmable or smart thermostat to automatically adjust temperatures based on your schedule. At night, you can lower the temperature slightly for better sleep comfort.',
    },
    {
      question: 'How long should an air conditioner last?',
      answer: 'A well-maintained air conditioning system typically lasts 12-15 years in Arizona\'s climate, though some high-quality units can last up to 20 years with proper care. Factors affecting lifespan include: regular professional maintenance, timely repairs, proper sizing for your home, quality of installation, and frequency of use. To maximize your AC\'s lifespan, schedule annual tune-ups, change filters regularly, keep the outdoor unit clean, and address issues promptly before they escalate.',
    },
    {
      question: 'What is SEER rating and why does it matter?',
      answer: 'SEER (Seasonal Energy Efficiency Ratio) measures an air conditioner\'s cooling efficiency. Higher SEER ratings mean greater energy efficiency and lower operating costs. The minimum SEER for new units is 14, but high-efficiency models range from 16-25+ SEER. In Arizona\'s hot climate, investing in a higher SEER unit (16-20) can significantly reduce your monthly energy bills. A 16 SEER unit can save up to 30% on cooling costs compared to a 10 SEER unit. The upfront cost difference is often recovered within 3-5 years through energy savings.',
    },
    {
      question: 'Why does my AC freeze up?',
      answer: 'AC freezing occurs when the evaporator coil gets too cold, causing moisture to freeze. Common causes include: restricted airflow from a dirty filter or blocked vents, low refrigerant levels, a malfunctioning blower fan, closed or blocked supply registers, or outdoor temperatures below 60°F. If your AC freezes, turn it off immediately and let it thaw completely (2-4 hours) before running it again. Check and replace the filter, ensure all vents are open, and if the problem persists, call a professional to check refrigerant levels and airflow.',
    },
    {
      question: 'How often should I have my AC serviced?',
      answer: 'Have your air conditioning system professionally serviced at least once per year, ideally in spring before peak cooling season. In Arizona\'s extreme climate, bi-annual service (spring and fall) is highly recommended. Professional maintenance includes: cleaning coils, checking refrigerant levels, testing electrical components, lubricating moving parts, inspecting ductwork, calibrating thermostats, and identifying potential issues. Regular maintenance prevents 95% of AC breakdowns, improves efficiency by 15-20%, extends system lifespan, and maintains manufacturer warranties.',
    },
    {
      question: 'What size air conditioner do I need for my home?',
      answer: 'Proper AC sizing is critical for efficiency and comfort. Size is measured in tons (1 ton = 12,000 BTU/hour). A general guideline is 1 ton per 400-600 square feet, but many factors affect sizing: insulation quality, ceiling height, number of windows, sun exposure, local climate, and number of occupants. In Tucson, homes typically need 1.5-5 tons depending on size. An oversized unit cycles too frequently and doesn\'t remove humidity effectively. An undersized unit runs constantly and struggles to cool. Always have a professional perform a Manual J load calculation for accurate sizing.',
    },
    {
      question: 'Why is my AC making strange noises?',
      answer: 'Different AC noises indicate specific problems. Squealing or screeching suggests a worn belt or motor bearing. Grinding indicates metal-on-metal contact from damaged bearings. Banging or clanking means loose or broken internal components. Hissing may signal a refrigerant leak. Bubbling or gurgling indicates a refrigerant line issue or condensate drain problem. Clicking during startup is normal, but continuous clicking suggests an electrical issue. Never ignore strange noises - they typically worsen and lead to costly repairs if left unaddressed. Contact an HVAC professional for diagnosis.',
    },
    {
      question: 'Can I install an air conditioner myself?',
      answer: 'DIY air conditioner installation is not recommended and is illegal in most areas without proper licensing. AC installation requires: EPA certification for handling refrigerant, electrical expertise for wiring and breaker installation, knowledge of load calculations, proper ductwork design and installation, and understanding of building codes. Improper installation voids warranties, reduces efficiency by 30%, shortens system lifespan, creates safety hazards, and can result in carbon monoxide risks if ductwork is improperly connected. Professional installation ensures optimal performance, safety, and warranty protection.',
    },
    {
      question: 'What causes high energy bills in summer?',
      answer: 'High summer energy bills are typically caused by: an aging, inefficient AC system (especially below 13 SEER), dirty air filters reducing airflow, refrigerant leaks forcing the system to work harder, poor insulation allowing cool air to escape, air duct leaks losing 20-30% of cooled air, thermostat set too low (below 75°F), lack of regular maintenance, and excessive sun exposure through windows. Solutions include: upgrading to a high-efficiency system, sealing duct leaks, improving insulation, using programmable thermostats, and scheduling professional tune-ups. These improvements can reduce cooling costs by 20-40%.',
    },
    {
      question: 'Should I repair or replace my air conditioner?',
      answer: 'Use the $5,000 rule: multiply the repair cost by your system\'s age in years. If the result exceeds $5,000, replace the unit. For example, a $400 repair on a 10-year-old unit = $4,000 (repair). A $600 repair on a 12-year-old unit = $7,200 (replace). Also consider replacing if: the system is over 12 years old, requires frequent repairs, uses R-22 refrigerant (being phased out), has a SEER rating below 13, or your energy bills are consistently high. New systems offer better efficiency, reliability, and often pay for themselves through energy savings within 5-7 years.',
    },
    {
      question: 'What is a dual-stage or variable-speed AC?',
      answer: 'Dual-stage AC units have two capacity levels: high (100%) for extremely hot days and low (60-70%) for moderate days. Variable-speed systems adjust capacity in small increments from 40-100%. Benefits include: 20-30% better energy efficiency, improved humidity control, more consistent temperatures, quieter operation, and longer equipment life. These systems run longer at lower speeds, removing more humidity and distributing air more evenly. While they cost 15-25% more upfront, the energy savings and improved comfort often justify the investment, especially in Arizona\'s climate where AC runs 6-8 months yearly.',
    },
    {
      question: 'How can I improve my indoor air quality?',
      answer: 'Improve indoor air quality by: upgrading to high-MERV filters (MERV 11-13) that capture smaller particles, installing UV air purifiers to kill bacteria and mold, adding whole-home dehumidifiers to maintain 30-50% humidity, ensuring proper ventilation with ERV/HRV systems, scheduling regular duct cleaning every 3-5 years, sealing duct leaks to prevent contamination, and maintaining your AC system annually. Consider air purification systems with HEPA filtration for allergies or asthma. Clean indoor air reduces allergies, prevents mold growth, eliminates odors, and creates a healthier living environment.',
    },
  ];

  // Generate FAQPage schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: typeof faq.answer === 'string' ? faq.answer : faq.answer.props.children.filter((child: any) => typeof child === 'string' || child?.type === 'p').map((child: any) => typeof child === 'string' ? child : child.props.children).join(' '),
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(13, 45, 122, 0.85), rgba(13, 45, 122, 0.85)), url(/images/hvac-hero.jpg)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
              Air Conditioning System FAQs
            </h1>
            <p className="text-xl text-white/90 mb-8" data-testid="text-hero-description">
              Expert answers to your most common air conditioning questions from Tucson's trusted HVAC professionals
            </p>
            <div className="flex flex-wrap gap-4">
              <SchedulerEmbed 
                triggerText="Schedule AC Service"
                variant="destructive"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                data-testid="button-schedule-hero"
              />
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
                data-testid="button-call-hero"
              >
                <a href="tel:+1520-333-2665">Call For Free Quote</a>
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
            <Link href="/services/hvac" className="hover:text-foreground" data-testid="link-breadcrumb-hvac">
              Air Conditioning
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground" data-testid="text-breadcrumb-current">
              FAQs
            </span>
          </div>
        </div>
      </nav>

      {/* Featured Video Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-video-title">
              How Air Conditioners Work
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch this video to understand the science behind air conditioning
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/QWD3O1TyJRg?si=KB1IuGyBZUt0dYC4" 
                title="How Air Conditioners Work - YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg"
                data-testid="iframe-featured-video"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get expert answers to the most common air conditioning questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6" data-testid={`card-faq-${index}`}>
                <h3 className="text-xl font-bold mb-4 text-primary" data-testid={`text-question-${index}`}>
                  {faq.question}
                </h3>
                <div className="prose prose-lg max-w-none text-foreground/90" data-testid={`text-answer-${index}`}>
                  {faq.answer}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Still Have Questions About Your AC System?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Our expert HVAC technicians are here to help! Schedule a service visit or call us for personalized advice on your air conditioning system.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SchedulerEmbed 
              triggerText="Schedule AC Service"
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
              data-testid="button-schedule-cta"
            />
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
              data-testid="button-call-cta"
            >
              <a href="tel:+1520-333-2665" className="text-lg px-8 py-6 h-auto">
                Call (520) 333-2665
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
