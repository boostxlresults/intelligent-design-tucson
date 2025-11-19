import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer 24/7 emergency HVAC service in Tucson?",
    answer: "Yes! We provide 24/7 emergency HVAC, plumbing, electrical, and roofing services throughout Tucson and surrounding areas. When your AC breaks down in the Arizona heat or you have a plumbing emergency, we're here to help any time of day or night. Just call (520) 333-2665 and we'll dispatch a technician immediately.",
  },
  {
    question: "What areas in Tucson do you service?",
    answer: "We proudly serve all of Tucson and the surrounding communities including Oro Valley, Marana, Vail, Sahuarita, Green Valley, Catalina Foothills, SaddleBrooke, and as far as Gladden Farms to the North. If you're in the greater Tucson area, we can help!",
  },
  {
    question: "How quickly can you respond to a service call?",
    answer: "We understand that home comfort and safety issues need fast attention. For emergency situations, we typically respond within 1-2 hours. For scheduled maintenance and non-emergency repairs, we offer same-day and next-day appointment slots to fit your schedule.",
  },
  {
    question: "Do you offer financing options for larger projects?",
    answer: "Absolutely! We offer flexible financing options for major installations and repairs, including HVAC system replacements, solar panel installations, electrical panel upgrades, and roof replacements. Ask our team about current promotional financing offers and payment plans that fit your budget.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer: "Yes, all of our technicians are fully licensed, certified, and insured. We invest heavily in ongoing training to ensure our team stays current with the latest technologies and best practices in HVAC, plumbing, solar, electrical, and roofing services.",
  },
  {
    question: "What makes Intelligent Design different from other Tucson contractors?",
    answer: "As a family and veteran-owned business serving Tucson for over 45 years, we combine decades of experience with cutting-edge technology and genuine care for our community. With 22,000+ five-star reviews, BBB A+ rating, and our commitment to never upsell unnecessary services, we've built our reputation on honesty and quality workmanship.",
  },
  {
    question: "How much does AC repair cost in Tucson?",
    answer: "AC repair costs vary depending on the issue, but we always provide transparent, upfront pricing before any work begins. Simple repairs like capacitor replacements might cost $150-$300, while more complex repairs could range from $300-$800. We never surprise you with hidden fees, and we'll always explain your options clearly.",
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for new installations and major repairs. For diagnostic service calls, there's a standard trip charge that goes toward any repairs if you choose to proceed with our services. Emergency service calls may have different pricing—call us at (520) 333-2665 for details.",
  },
  {
    question: "What HVAC brands do you install and service?",
    answer: "We install and service all major HVAC brands including Carrier, Trane, Lennox, Goodman, Rheem, York, and more. Our technicians are factory-trained on multiple brands, so we can expertly service whatever system you have. We'll help you choose the best brand and model for your specific needs and budget.",
  },
  {
    question: "How often should I have my AC serviced in Tucson?",
    answer: "In Tucson's extreme climate, we recommend having your AC system serviced twice a year—once in spring before the hot season begins, and once in fall. Regular maintenance helps prevent breakdowns during peak summer heat, improves energy efficiency, and extends the life of your system.",
  },
  {
    question: "Do you offer maintenance plans?",
    answer: "Yes! Our preventive maintenance plans include regular tune-ups, priority scheduling, discounts on repairs, and extended warranties. These plans are designed to keep your systems running efficiently year-round while saving you money on unexpected repairs. Ask about our current maintenance plan options when you call.",
  },
  {
    question: "Can you help with Tucson's hard water problems?",
    answer: "Absolutely! Tucson's hard water can damage appliances and plumbing. We offer comprehensive water softener installations, water filtration systems, and water treatment solutions. We'll test your water and recommend the right system to protect your home and improve water quality.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our services
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-card"
              data-testid={`faq-${index}`}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
