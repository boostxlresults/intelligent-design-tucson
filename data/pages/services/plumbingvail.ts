// Optimized Plumbing page for Vail - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingvailData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing Services in Vail, AZ | Call (520) 333-2665",
  description: "Trusted plumbing in Vail, AZ. Fast repairs, installations & leak detection by licensed pros. Call (520) 333-2665 today!",
  slug: "plumbing-vail",
  
  // Hero Section
  h1: "Professional Plumbing Services in Vail, AZ",
  h2Subheading: "Reliable Plumbing Repairs, Installations, and Maintenance for Your Home",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/Vail_Arizona_desert_landscape_74c9ba44.webp",
  heroImageAlt: "Professional plumbing service in Vail, Arizona desert community",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response to plumbing emergencies in Vail and surrounding areas."
  },
  {
    "title": "State-of-the-Art Equipment",
    "description": "Advanced leak detection and pipe repair technology tailored for Southern Arizona\u2019s climate."
  },
  {
    "title": "Comprehensive Plumbing Services",
    "description": "From water heater installs to faucet and toilet repairs, we handle it all professionally."
  },
  {
    "title": "Transparent Pricing",
    "description": "Competitive, upfront quotes with no hidden fees for every plumbing job."
  },
  {
    "title": "Highly Qualified Team",
    "description": "52 licensed technicians with over 46 years of combined experience serving Vail residents."
  },
  {
    "title": "Reliable Warranty",
    "description": "We back our work with industry-leading warranties to ensure lasting peace of mind."
  }
],
  content: {
    mainHeading: "Professional Plumbing Services in Vail, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Plumbing Solutions for Vail Homes",
            "level": 2,
            "content": "Expert Plumbing Solutions for Vail Homes"
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design provides specialized plumbing services designed to tackle the unique challenges of Vail\u2019s desert climate. Our technicians expertly address issues caused by hard water buildup, pipe corrosion, and the strain monsoons place on plumbing systems. Whether you need water heater installation or emergency leak detection, we ensure your home stays comfortable and safe year-round."
      },
      {
            "type": "paragraph",
            "content": "We service all plumbing needs including faucet installation, pipe repair, toilet repair, and more. Our team uses cutting-edge equipment for precise diagnostics and efficient repairs. With decades of experience, our licensed plumbers guarantee work that withstands Southern Arizona\u2019s temperature extremes and seasonal weather events."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Plumbing Service Today",
            "content": "Don\u2019t wait to fix plumbing problems that can worsen with extreme heat or monsoon rains. Call Intelligent Design now for fast, reliable service in Vail, AZ.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Vail Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Vail Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With a 4.97-star Google rating from over 23,000 reviews, Intelligent Design has earned the trust of Vail residents through consistent, high-quality plumbing work. Our commitment to transparency, punctuality, and expert craftsmanship makes us the go-to plumbing company in the greater Tucson area."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every job with robust warranties, ensuring your plumbing system remains reliable long after our technicians leave. Our licensed team\u2019s experience and dedication make Intelligent Design a dependable partner for all your plumbing needs."
      },
      {
            "type": "heading",
            "heading": "Serving the Vail Community",
            "level": 2,
            "content": "Serving the Vail Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Vail and nearby areas, we are honored to support communities near Colossal Cave Mountain Park, Old Pueblo Hall, Rio Vista Labyrinth, and Historic Canoa Ranch in Pima County. Residents and businesses around JoJo's Restaurant, Tito and Pep, The Rattler at del Lago, and Montgomery's Grill & Saloon rely on our expert plumbing services to keep their homes and establishments running smoothly."
      },
      {
            "type": "cta",
            "heading": "Contact Intelligent Design for Trusted Plumbing in Vail",
            "content": "Experience prompt, professional plumbing service tailored to Vail\u2019s unique needs. Call us today to schedule your appointment.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Vail'),
};
