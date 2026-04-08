// Optimized HVAC & AC page for Sahuarita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacsahuaritaData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Sahuarita, AZ | Call (520) 333-2665",
  description: "Expert HVAC & AC repair, installation, and maintenance in Sahuarita, AZ. Fast, reliable service tailored for Southern Arizona's heat. Call (520) 333-2665.",
  slug: "hvac-sahuarita",
  
  // Hero Section
  h1: "Professional HVAC & AC Services in Sahuarita, AZ",
  h2Subheading: "Reliable Air Conditioning Solutions Built for Southern Arizona’s Climate",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/HVAC_tech_maintenance_check_1_7125b76e.webp",
  heroImageAlt: "Professional HVAC technician servicing air conditioning system in Sahuarita, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response Time",
    "description": "We prioritize quick service to keep your home cool during Sahuarita\u2019s extreme heat."
  },
  {
    "title": "Advanced AC Equipment Expertise",
    "description": "Our technicians specialize in energy-efficient systems designed for desert climates."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From AC tune-ups and ductwork to repairs and full installations, we cover it all."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Upfront quotes with no surprises, ensuring value for every dollar spent."
  },
  {
    "title": "52 Licensed & Trained Technicians",
    "description": "Our skilled team delivers dependable service backed by extensive Southern Arizona experience."
  },
  {
    "title": "Robust Warranty Coverage",
    "description": "We stand behind our work with warranties that protect your investment and peace of mind."
  }
],
  content: {
    mainHeading: "Professional HVAC & AC Services in Sahuarita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert HVAC & AC Services Tailored to Sahuarita",
            "level": 2,
            "content": "Expert HVAC & AC Services Tailored to Sahuarita"
      },
      {
            "type": "paragraph",
            "content": "At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we understand the unique challenges Sahuarita homeowners face. The intense summer heat, coupled with monsoon humidity and hard water effects, demands reliable and efficient HVAC and AC systems. Our expert technicians specialize in air conditioning repair, installation, and maintenance designed specifically for Southern Arizona\u2019s climate."
      },
      {
            "type": "paragraph",
            "content": "We offer comprehensive services including AC tune-ups, ductwork inspections, and repairs to optimize airflow and energy efficiency. Whether upgrading to modern, energy-saving units or performing routine HVAC maintenance, our team ensures your home stays comfortable year-round despite the desert\u2019s extremes."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Don\u2019t wait for the heat to become unbearable. Contact Intelligent Design for fast, expert HVAC & AC service in Sahuarita.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Sahuarita Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Sahuarita Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star rating from more than 23,000 reviews, Intelligent Design is a trusted name in Sahuarita HVAC services. Our commitment to customer satisfaction and quality workmanship has earned us loyal customers throughout the greater Tucson area."
      },
      {
            "type": "paragraph",
            "content": "We back all our HVAC installations and repairs with strong warranties, ensuring your system operates reliably through Sahuarita\u2019s harsh summers and unpredictable monsoons. Our licensed technicians bring unmatched expertise and professionalism to every job."
      },
      {
            "type": "heading",
            "heading": "Serving the Sahuarita Community",
            "level": 2,
            "content": "Serving the Sahuarita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Sahuarita and nearby areas, we\u2019re honored to support communities near landmarks like ASARCO Mineral Discovery Center & Mine Tours, Titan Missile Museum, Tumacacori National Historical Park, and Empire Ranch Foundation. When you need a break, enjoy local favorites such as National Eats, El Patio Mexican Restaurant, Manuel\u2019s Mexican Restaurant, and JerryBobs Restaurant."
      },
      {
            "type": "cta",
            "heading": "Ready for Reliable HVAC & AC Service?",
            "content": "Experience the Intelligent Design difference with fast, expert HVAC and AC solutions tailored to Sahuarita\u2019s climate.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Sahuarita'),
};
