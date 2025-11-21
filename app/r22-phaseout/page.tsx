import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';

export const metadata: Metadata = generateSEOMetadata({
  title: 'R22 Phaseout Tucson | Intelligent Design',
  description: 'The Environmental Protection Agency has decided to gradually phase out use of R22 refrigerant because it has a destructive impact on the ozone layer that surrounds the Earth, protecting us from ultraviolet radiation.',
  canonicalUrl: 'https://www.idesignac.com/r22-phaseout',
  keywords: ['R22', 'freon', 'refrigerant', 'phaseout', 'air conditioning', 'HVAC', 'Tucson', 'Arizona'],
});

export default function R22PhaseoutPage() {
  const faqs = [
    {
      id: 'why-r22-phaseout',
      question: 'Why is R22 refrigerant being phased out?',
      answer: (
        <>
          <p className="mb-4">
            The Environmental Protection Agency has decided to gradually phase out use of R22 refrigerant because it has a destructive impact on the ozone layer that surrounds the Earth, protecting us from ultraviolet radiation.
          </p>
          <p>
            If your air conditioner is more than a decade old, then it is highly likely that it runs on a substance called R22 refrigerant, otherwise known as freon. As of January 1, 2020, R22 will no longer be produced in the United States. That's not all: R22 can also no longer be imported. So, what does this mean for you, if you have an air conditioner that uses R22? Will you still be able to get the refrigerant you need? Do you need to replace your air conditioner? Intelligent Design Air Conditioning, Plumbing, Solar, & Electric is here with the answers to all of your questions about the R22 phaseout.
          </p>
        </>
      ),
    },
    {
      id: 'price-increase',
      question: 'Will the price of my refrigerant go up because of the R22 phaseout?',
      answer: (
        <p>
          While R22 is still legal, it is no longer being manufactured domestically, and it can't be imported from other countries. Thus, there is now a finite supply of R22 in the United States. While the price has remained stable, it is possible that the cost of R22 will increase in the future due to diminished supplies. However, no one knows when—or if—this will happen. As more homeowners decide to replace their air conditioning units, it is possible that demand for R22 will never exceed the available supply.
        </p>
      ),
    },
    {
      id: 'is-illegal',
      question: 'Is R22 refrigerant now illegal to use?',
      answer: (
        <p>
          While you may have heard people talk about the "freon ban," R22 is still legal to use in your air conditioner. You will not be penalized in any way for continuing to use an air conditioner that runs on R22. In any case you should trust a professional to assess your system to determine any needed changes in the future before these potential penalties become reality.
        </p>
      ),
    },
    {
      id: 'should-replace',
      question: 'If my air conditioner uses R22 refrigerant, should I replace it?',
      answer: (
        <>
          <p className="mb-4">
            We are not recommending that you replace your old air conditioner simply because of the R22 phaseout. If your air conditioner does use R22, however, then it is a decade or more old. When units have been in use for that long, they begin to show their age. It is possible that your air conditioner will begin to require more frequent <Link href="/services/hvac-repair" className="text-primary hover:underline">repairs</Link>, or that it may break down more often. If that happens, then replacing it may be more cost-effective than continuing to maintain it.
          </p>
          <p>
            If you have any more questions about the R22 ban, then feel free to get in touch with the team here at Intelligent Design Air Conditioning, Plumbing, Solar, & Electric in Tucson! You can always reach us at <a href="tel:+1520-214-8811" className="text-primary hover:underline">(520) 214-8811</a> for the heating and air conditioning services you need.
          </p>
        </>
      ),
    },
    {
      id: 'how-to-tell',
      question: 'How can I tell if my air conditioner uses R22 refrigerant?',
      answer: (
        <p>
          If your air conditioner was manufactured before 2010, then it probably uses R22. However, if you want to confirm that this is the case, then ask an HVAC professional to look at your unit. Intelligent Design Air Conditioning, Plumbing, Solar, & Electric would be happy to come out and take a look for you at no charge. While we are there we can give you any and all options you have to replace update the system.
        </p>
      ),
    },
  ];

  return (
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
              The #1 Rated R22 Phaseout in Tucson
            </h1>
            <p className="text-xl text-white/90 mb-8" data-testid="text-hero-description">
              Expert guidance and solutions for the R22 refrigerant phaseout in Tucson, Arizona
            </p>
            <div className="flex flex-wrap gap-4">
              <SchedulerEmbed 
                triggerText="Schedule Online Now"
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
                <a href="tel:+1520-333-2665">Call For A Free Quote</a>
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
              R22 Phaseout
            </span>
          </div>
        </div>
      </nav>

      {/* Table of Contents */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4" data-testid="text-toc-title">Jump to:</h2>
            <ul className="space-y-2">
              {faqs.map((faq, index) => (
                <li key={faq.id}>
                  <a 
                    href={`#${faq.id}`}
                    className="text-primary hover:underline flex items-start gap-2"
                    data-testid={`link-toc-${faq.id}`}
                  >
                    <span className="text-muted-foreground">{index + 1})</span>
                    <span>{faq.question}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* FAQ Sections */}
      <div className="py-12">
        {faqs.map((faq, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? 'bg-background' : 'bg-muted/30';
          
          return (
            <section 
              key={faq.id}
              id={faq.id}
              className={`py-16 ${bgClass}`}
              data-testid={`section-faq-${faq.id}`}
            >
              <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid={`text-question-${faq.id}`}>
                    {faq.question}
                  </h2>
                  <div className="prose prose-lg max-w-none text-foreground/90" data-testid={`text-answer-${faq.id}`}>
                    {faq.answer}
                  </div>
                  
                  {index === 0 && (
                    <div className="flex flex-wrap gap-4 mt-8">
                      <SchedulerEmbed 
                        triggerText="Schedule Online Now"
                        variant="destructive"
                        data-testid="button-schedule-section1"
                      />
                      <Button 
                        asChild
                        variant="outline"
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
                        data-testid="button-call-section1"
                      >
                        <a href="tel:+1520-333-2665">Call For A Free Quote</a>
                      </Button>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="flex flex-wrap gap-4 mt-8 justify-center">
                      <SchedulerEmbed 
                        triggerText="Schedule Online Now"
                        variant="destructive"
                        data-testid="button-schedule-section4"
                      />
                      <Button 
                        asChild
                        variant="outline"
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
                        data-testid="button-call-section4"
                      >
                        <a href="tel:+1520-333-2665">Call For A Free Quote</a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Need Help with Your R22 Air Conditioner?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Contact Intelligent Design today for expert advice on the R22 phaseout and explore your options for upgrading to a more efficient air conditioning system.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SchedulerEmbed 
              triggerText="Schedule Online Now"
              variant="destructive"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              data-testid="button-schedule-cta"
            />
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
              data-testid="button-call-cta"
            >
              <a href="tel:+1520-333-2665">Call (520) 333-2665</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
