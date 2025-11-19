/**
 * FAQ Data Types
 * 
 * Centralized type definitions for FAQ questions and answers
 * used across all service and city pages
 */

export interface FAQItem {
  /**
   * The question text in natural language
   * Should end with a question mark
   * Optimized for voice search and AI extraction
   */
  question: string;
  
  /**
   * The answer text
   * Should be 2-3 sentences, standalone, factual, and friendly
   * Optimized for LLM summarization and extraction
   */
  answer: string;
}

export interface ServiceFAQs {
  /**
   * Unique identifier for the service (matches page name)
   */
  serviceId: string;
  
  /**
   * Human-readable service name for display
   */
  serviceName: string;
  
  /**
   * Array of FAQ items (minimum 11 for AI search optimization)
   */
  faqs: FAQItem[];
}

export interface CityFAQs {
  /**
   * City name
   */
  cityName: string;
  
  /**
   * Array of city-specific FAQ items
   */
  faqs: FAQItem[];
}
