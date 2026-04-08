// Optimized HVAC & AC page for Cortaro - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvaccortaroData: ServicePageData = {
  // SEO & Meta
  title: "Expert HVAC & AC Services in Cortaro, AZ | Call (520) 333-2665",
  description: "Trusted HVAC & AC services in Cortaro, AZ. Fast response, expert repairs, installations & maintenance. Call Intelligent Design at (520) 333-2665 today.",
  slug: "hvac-cortaro",
  
  // Hero Section
  h1: "HVAC & AC Services in Cortaro, AZ",
  h2Subheading: "Reliable Cooling & Heating Solutions Tailored for Southern Arizona",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 52 Technicians | Transparent Pricing | Robust Warranty",
  heroImage: "/generated_images/HVAC_tech_outdoor_condenser_1_981748d4.webp",
  heroImageAlt: "HVAC Cortaro in Tucson",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "Swift service ensures your AC is up and running before the Arizona heat intensifies."
  },
  {
    "title": "Advanced HVAC Equipment",
    "description": "We use top-tier brands and cutting-edge technology for energy-efficient cooling."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From ductwork and AC tune-ups to full installations and emergency repairs."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "No hidden fees\u2014just honest estimates tailored to your Cortaro home\u2019s needs."
  },
  {
    "title": "Certified & Licensed Technicians",
    "description": "52 skilled professionals with decades of combined experience serving Tucson\u2019s climate."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "Peace of mind with warranties protecting your HVAC investment for years to come."
  }
],
  content: {
    mainHeading: "HVAC & AC Services in Cortaro, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Professional HVAC & AC Services in Cortaro",
            "level": 2,
            "content": "Professional HVAC & AC Services in Cortaro"
      },
      {
            "type": "paragraph",
            "content": "Living in Cortaro means enduring Southern Arizona\u2019s extreme heat and monsoon storms. Our HVAC and AC services are designed to keep your home comfortable year-round despite these harsh conditions. Whether you need an AC repair, installation, or routine maintenance, we tailor solutions to combat the challenges of hard water, dust, and intense sun exposure."
      },
      {
            "type": "paragraph",
            "content": "Our expert technicians specialize in ductwork inspection and repair to improve airflow and indoor air quality. Regular AC tune-ups and system checks help prevent breakdowns during peak summer months, saving you from costly emergency repairs. We also install energy-efficient units that reduce utility bills while maximizing cooling performance."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Don\u2019t wait for the heat to take over. Contact Intelligent Design for fast, reliable HVAC and AC service in Cortaro.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Cortaro Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Cortaro Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and 23,000+ Google reviews averaging 4.97 stars, Intelligent Design has earned the trust of Cortaro residents. Our technicians are not only licensed but continually trained on the latest HVAC technologies and repair techniques, ensuring top-tier service every visit."
      },
      {
            "type": "paragraph",
            "content": "We back all our work with a robust warranty, giving homeowners confidence in their investment. From installation to maintenance and repairs, our team stands behind every job, committed to quality and customer satisfaction."
      },
      {
            "type": "heading",
            "heading": "Serving the Cortaro Community",
            "level": 2,
            "content": "Serving the Cortaro Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Cortaro and the greater Tucson area, we\u2019re familiar with the local environment and community landmarks like Picture Rock Petroglyphs, Tumacacori National Historical Park, Steam Pump Ranch, and Casa Grande Ruins National Monument. Whether you\u2019re enjoying a meal at Guadalajara's Grill & Tequila Bar, Sushi Cortaro, Ol\u2019 Pot Hole, or Asian Spice Restaurant, you can trust us to keep your home comfortable and cool."
      },
      {
            "type": "cta",
            "heading": "Ready for Expert HVAC Service?",
            "content": "Call Intelligent Design today for dependable HVAC and AC service in Cortaro, AZ. Experience fast, expert care you can rely on.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Cortaro'),
};
