'use client';

/**
 * LLM-Optimized Service FAQ Component
 * 
 * Renders FAQ section with:
 * - Semantic HTML (H2 section, H3 questions) for AI extraction
 * - Accordion UI for better UX
 * - Standalone answers optimized for LLM summarization
 * 
 * NOTE: FAQ JSON-LD schema is generated SERVER-SIDE in schemaRegistry.ts
 * This component only handles the visual UI - no client-side schema injection
 * to prevent duplicate FAQPage errors in Google Rich Results Test.
 */

import { useId, useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/data/faqs/types';

interface ServiceFAQProps {
  /**
   * Array of FAQ items to display
   * Should have minimum 11 questions for AI search optimization
   */
  faqs: FAQItem[];
  
  /**
   * Optional section heading
   * Default: "Frequently Asked Questions"
   */
  sectionHeading?: string;
  
  /**
   * Optional section description
   */
  sectionDescription?: string;
  
  /**
   * Service name for schema context
   */
  serviceName?: string;
  
  /**
   * Unique service ID for component identification
   */
  serviceId?: string;
}

export default function ServiceFAQ({ 
  faqs = [], 
  sectionHeading = "Frequently Asked Questions",
  sectionDescription = "Get answers to common questions about our services",
  serviceName,
  serviceId = 'default'
}: ServiceFAQProps) {
  // Defensive check: ensure faqs is an array
  const safeFaqs = Array.isArray(faqs) ? faqs : [];
  
  // Generate unique ID for this component instance
  const componentId = useId();

  // Warning if FAQ count is below AI search minimum
  if (safeFaqs.length < 11 && safeFaqs.length > 0 && process.env.NODE_ENV === 'development') {
    console.warn(
      `[ServiceFAQ] Only ${safeFaqs.length} FAQs provided. Minimum 11 recommended for AI search optimization.`
    );
  }
  
  // Early return if no FAQs provided
  if (safeFaqs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-faq">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header - H2 for semantic hierarchy */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="heading-faq-section"
          >
            {sectionHeading}
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-faq-description">
            {sectionDescription}
          </p>
        </div>

        {/* FAQ List - Custom accordion with semantic HTML */}
        <div className="space-y-4">
          {safeFaqs.map((faq, index) => (
            <FAQItemComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              componentId={componentId}
            />
          ))}
        </div>

        {/* Optional: Display FAQ count for transparency */}
        {serviceName && (
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p data-testid="text-faq-count">
              {faqs.length} common questions about {serviceName}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Individual FAQ Item with semantic HTML structure
 * H3 question + button trigger as siblings (not nested)
 */
function FAQItemComponent({ 
  question, 
  answer, 
  index,
  componentId
}: { 
  question: string; 
  answer: string; 
  index: number;
  componentId: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  
  // Generate unique IDs using componentId to prevent collisions across multiple ServiceFAQ instances
  const uniqueId = componentId.replace(/:/g, '-');
  const questionId = `faq-question-${uniqueId}-${index}`;
  const answerId = `faq-answer-${uniqueId}-${index}`;

  // Measure actual content height for proper animation
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div
      className={`border border-border rounded-lg transition-colors ${
        isOpen ? 'bg-card' : ''
      }`}
      data-testid={`faq-item-${index}`}
    >
      <div className="px-6 py-4">
        {/* H3 heading - standalone for AI extraction */}
        <h3 
          id={questionId}
          className="text-lg font-semibold text-foreground mb-2"
        >
          {question}
        </h3>
        
        {/* Button trigger - sibling to H3, aria-labelledby references H3 for accessibility */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-expanded={isOpen}
          aria-controls={answerId}
          aria-labelledby={questionId}
          data-testid={`faq-question-${index}`}
        >
          <span className="font-medium">{isOpen ? 'Hide Answer' : 'Show Answer'}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Answer content with content-driven height measurement */}
      <div
        id={answerId}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0',
          opacity: isOpen ? 1 : 0,
        }}
        data-testid={`faq-answer-${index}`}
      >
        <div 
          ref={contentRef}
          className="px-6 pb-4 text-base text-muted-foreground leading-relaxed"
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
