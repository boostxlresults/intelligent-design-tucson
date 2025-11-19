/**
 * FAQ Schema Generator for Next.js Migration
 * Generates FAQPage schema from FAQ data
 * 
 * Usage in Next.js page:
 * import { generateFAQSchema } from '@/lib/seo/generateFAQSchema';
 * import { hvacLocationFAQs } from '@/data/faqs/hvac';
 * const schema = generateFAQSchema(hvacLocationFAQs);
 */

export interface FAQ {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
