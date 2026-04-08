// Optimized HVAC & AC page for Corona de Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvaccoronadetucsonData: ServicePageData = {
  // SEO & Meta
  title: "Expert HVAC & AC Services in Corona de Tucson, AZ | (520) 333-2665",
  description: "Reliable HVAC & AC services in Corona de Tucson, AZ. Fast response, expert repairs, installations & maintenance. Call (520) 333-2665 today!",
  slug: "hvac-corona-de-tucson",
  
  // Hero Section
  h1: "Trusted HVAC & AC Services in Corona de Tucson, AZ",
  h2Subheading: "Efficient Cooling & Heating Solutions for Southern Arizona Homes",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/HVAC_tech_successful_completion_bd112b6c.webp",
  heroImageAlt: "Professional HVAC technician completing AC service in Corona de Tucson, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "We prioritize your comfort with an average 68-minute on-site response time."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "State-of-the-art diagnostic tools ensure precise AC repairs and installations."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From ductwork repairs to AC tune-ups, we cover all your HVAC needs."
  },
  {
    "title": "Transparent, Fair Pricing",
    "description": "Upfront quotes with no hidden fees tailored to Corona de Tucson homeowners."
  },
  {
    "title": "52 Licensed Technicians",
    "description": "Our certified team brings over 46 years of combined local HVAC experience."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "All services backed by robust warranties for lasting peace of mind."
  }
],
  content: {
    mainHeading: "Trusted HVAC & AC Services in Corona de Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Professional HVAC & AC Repair and Installation",
            "level": 2,
            "content": "Professional HVAC & AC Repair and Installation"
      },
      {
            "type": "paragraph",
            "content": "Corona de Tucson\u2019s extreme heat and monsoon season demand reliable air conditioning systems. Intelligent Design Air Conditioning ensures your AC operates efficiently with expert repairs and installations. We specialize in diagnosing ductwork issues and performing thorough AC tune-ups to optimize airflow and energy use."
      },
      {
            "type": "paragraph",
            "content": "Our technicians are trained to handle Southern Arizona\u2019s unique challenges including hard water damage to HVAC components and dust accumulation. We use advanced equipment to maintain your system\u2019s longevity and keep your indoor air clean and cool throughout the year."
      },
      {
            "type": "cta",
            "heading": "Ready for Reliable HVAC Service?",
            "content": "Contact Intelligent Design Air Conditioning today for fast, expert HVAC and AC repairs in Corona de Tucson.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Corona de Tucson Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Corona de Tucson Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "Our 4.97-star Google rating from over 23,000 reviews reflects our unwavering commitment to quality and customer satisfaction. We understand how crucial a functioning HVAC system is in Southern Arizona\u2019s heat, which is why we deliver prompt, reliable service every time."
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design Air Conditioning stands behind every job with comprehensive warranties. Our licensed technicians bring decades of experience, ensuring your HVAC system is repaired or installed to the highest standards."
      },
      {
            "type": "heading",
            "heading": "Serving the Corona de Tucson Community",
            "level": 2,
            "content": "Serving the Corona de Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving neighborhoods near landmarks like Old Pueblo Hall, Colossal Cave Mountain Park, Presidio San Agust\u00edn del Tucs\u00f3n Museum, and San Xavier del Bac Mission. Whether you\u2019re enjoying a meal at Argenziano's, Toro Bravo, Charquitas Mexican Food, or La Herradura Street Tacos & Bar, you can trust Intelligent Design for your home\u2019s HVAC needs."
      },
      {
            "type": "cta",
            "heading": "Experience Superior HVAC & AC Service Today",
            "content": "Call (520) 333-2665 to schedule your AC tune-up, repair, or installation with Corona de Tucson\u2019s trusted experts.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Corona de Tucson'),
};
