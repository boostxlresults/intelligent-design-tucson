import type { FAQItem } from '@/data/faqs/types';

export interface CommonQuestion {
  question: string;
  answer: string;
}

export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface ContentSection {
  heading?: string;
  content: string;
  subsections?: {
    heading: string;
    content: string;
  }[];
}

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
  faqs: FAQItem[];
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
  tagline: string;
  heroImage: string;
  heroImageAlt: string;
  
  // Location Info
  locationName: string;
  locationDisplayName: string;
  
  // Services offered at this location
  services: {
    icon: string;
    title: string;
    description: string;
    link: string;
  }[];
  
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
  faqs: FAQItem[];
  commonQuestions: CommonQuestion[];
}
