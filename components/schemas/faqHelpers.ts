/**
 * FAQ Normalization Helpers
 * Safely extract FAQ arrays from various data structures with runtime validation
 */

import type { ServiceFAQs } from '@/data/faqs/types';

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Normalize FAQs from ServiceFAQs structure or null
 * Returns an empty array if data is invalid or missing
 */
export function normalizeFAQs(faqs: ServiceFAQs | null | undefined): FAQItem[] {
  // Handle null/undefined
  if (!faqs) {
    return [];
  }

  // If it's a ServiceFAQs object with a faqs array
  if (typeof faqs === 'object' && 'faqs' in faqs && Array.isArray(faqs.faqs)) {
    // Validate each FAQ item has required fields
    return faqs.faqs.filter(
      (faq): faq is FAQItem =>
        typeof faq === 'object' &&
        faq !== null &&
        typeof faq.question === 'string' &&
        typeof faq.answer === 'string' &&
        faq.question.length > 0 &&
        faq.answer.length > 0
    );
  }

  // Fallback: empty array (fail gracefully)
  return [];
}

/**
 * Type guard to check if FAQs are valid for schema generation
 */
export function hasValidFAQs(faqs: ServiceFAQs | null | undefined): boolean {
  const normalized = normalizeFAQs(faqs);
  return normalized.length > 0;
}
