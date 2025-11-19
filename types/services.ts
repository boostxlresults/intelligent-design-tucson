import type { FAQItem, ServiceFAQs } from '@/data/faqs/types';

export interface CommonQuestion {
  question: string;
  answer: string;
}

export interface ServiceHighlight {
  title: string;
  description: string;
}

// Discriminated union for content blocks
export type HeadingSection = {
  type: "heading";
  heading: string;
  level?: number;
  content: string;
};

export type ParagraphSection = {
  type: "paragraph";
  content: string;
};

export type ListSection = {
  type: "list";
  content: string;
  items?: string[];
};

export type CTASection = {
  type: "cta";
  heading: string;
  content: string;
  buttonText: string;
  buttonLink: string;
};

export type TestimonialSection = {
  type: "testimonial";
  quote: string;
  author: string;
  location: string;
  service: string;
};

export type CaseStudySection = {
  type: "case_study";
  title: string;
  location: string;
  challenge: string;
  solution: string;
  timeframe: string;
  equipment?: string;
  customerQuote?: string;
  results: {
    label: string;
    value: string;
  }[];
};

export type HowToSection = {
  type: "howto";
  heading: string;
  description: string;
  steps: {
    id: string;
    name: string;
    description: string;
    duration?: string;
    tools?: string[];
  }[];
};

// Legacy format (for backward compatibility)
export type LegacyContentSection = {
  heading?: string;
  content: string;
  subsections?: {
    heading: string;
    content: string;
  }[];
};

// Union type supporting all formats
export type ContentSection = 
  | HeadingSection 
  | ParagraphSection 
  | ListSection 
  | CTASection
  | TestimonialSection
  | CaseStudySection
  | HowToSection
  | LegacyContentSection;

export interface ServicePageData {
  // SEO & Meta
  title: string;
  description: string;
  slug: string;
  
  // Hero Section
  h1: string;
  h2Subheading: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Service Info
  serviceName: string;
  category: 'HVAC' | 'Plumbing' | 'Solar' | 'Electrical' | 'Roofing';
  
  // Content
  highlights: ServiceHighlight[];
  content: {
    mainHeading: string;
    sections: ContentSection[];
  };
  
  // Interactive Content
  faqs: ServiceFAQs | null;
  commonQuestions: CommonQuestion[];
  
  // Schema
  serviceType?: string;
  areaServed?: string;
}

export interface LocationPageData {
  // SEO & Meta
  title: string;
  description: string;
  slug: string;
  
  // Hero Section
  h1: string;
  h2Subheading: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Location Info
  locationName: string;
  locationDisplayName: string;
  zipCodes?: string[];
  
  // Services offered at this location
  services: {
    icon: string;
    title: string;
    description: string;
    link: string;
  }[];
  
  // Highlights
  highlights: ServiceHighlight[];
  
  // Content
  content: {
    sections: ContentSection[];
  };
  
  // FAQ
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // NAP
  showOfficeInfo: boolean;
}

export interface ServiceLocationPageData {
  // SEO & Meta
  title: string;
  description: string;
  slug: string;
  
  // Hero Section
  h1: string;
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Combined Info
  serviceName: string;
  locationName: string;
  category: 'HVAC' | 'Plumbing' | 'Solar' | 'Electrical' | 'Roofing';
  
  // Content
  content: {
    mainHeading: string;
    sections: ContentSection[];
  };
  
  // Interactive Content
  faqs: ServiceFAQs | null;
  commonQuestions: CommonQuestion[];
}
