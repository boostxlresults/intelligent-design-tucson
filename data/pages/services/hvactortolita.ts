// Optimized HVAC & AC page for Tortolita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvactortolitaData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Tortolita, AZ | Call (520) 333-2665",
  description: "Trusted HVAC & AC services in Tortolita, AZ. Expert repairs, installations & maintenance. Call Intelligent Design Air Conditioning at (520) 333-2665 today!",
  slug: "hvac-tortolita",
  
  // Hero Section
  h1: "Expert HVAC & AC Services in Tortolita, AZ",
  h2Subheading: "Reliable Cooling Solutions Tailored for Southern Arizona’s Climate",
  tagline: "Same-Day Service | Licensed Technicians | 46+ Years Experience | 4.97-Star Rated",
  heroImage: "/generated_images/HVAC_tech_ductwork_inspection_e319390e.webp",
  heroImageAlt: "HVAC Tortolita in Tucson",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Fast 68-Minute Response",
    "description": "We respond quickly to keep your AC running during Tortolita\u2019s extreme heat."
  },
  {
    "title": "Advanced HVAC Equipment",
    "description": "We install and service energy-efficient AC units built for Southern Arizona\u2019s climate."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From ductwork to AC tune-ups, repairs, and new installations, we handle it all."
  },
  {
    "title": "Transparent Pricing",
    "description": "No hidden fees, upfront quotes to fit your budget with quality guaranteed."
  },
  {
    "title": "Expert Team of 52 Licensed Technicians",
    "description": "Experienced pros trained to handle Tortolita\u2019s unique cooling challenges."
  },
  {
    "title": "Warranty-Backed Work",
    "description": "We stand behind our services with strong warranties for your peace of mind."
  }
],
  content: {
    mainHeading: "Expert HVAC & AC Services in Tortolita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive HVAC & AC Services in Tortolita",
            "level": 2,
            "content": "Comprehensive HVAC & AC Services in Tortolita"
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design Air Conditioning offers expert HVAC and AC services tailored to Tortolita\u2019s demanding climate. Whether you need a full AC installation, ductwork repair, or routine maintenance, our licensed technicians ensure your system performs efficiently during scorching Southern Arizona summers and monsoon seasons."
      },
      {
            "type": "paragraph",
            "content": "Our team understands the toll hard water and dust can take on HVAC components. We specialize in precision AC tune-ups and repairs that extend equipment life and improve air quality. From emergency fixes to scheduled maintenance, we keep your home cool and comfortable year-round."
      },
      {
            "type": "cta",
            "heading": "Get Reliable HVAC Service Today",
            "content": "Call Intelligent Design Air Conditioning at (520) 333-2665 for fast, expert HVAC and AC solutions in Tortolita, AZ.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Tortolita Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Tortolita Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star Google rating from 23,000+ reviews, Intelligent Design Air Conditioning has earned the trust of Tortolita residents. Our commitment to quality workmanship and responsive service sets us apart in the greater Tucson area."
      },
      {
            "type": "paragraph",
            "content": "We back all HVAC installations and repairs with solid warranties, ensuring your investment is protected. Our 52 licensed technicians are trained to diagnose and solve complex HVAC issues efficiently, providing peace of mind through every season."
      },
      {
            "type": "heading",
            "heading": "Serving the Tortolita Community",
            "level": 2,
            "content": "Serving the Tortolita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Tortolita and nearby neighborhoods, we\u2019re honored to support homes near Honey Bee Canyon Petroglyphs, Tortolita Preserve Trailhead, Wild Burro Trailhead, and Honey Bee Canyon Park. After a day exploring local gems or dining at Ol\u2019 Pot Hole, The Highlands Bar & Grille, or Sky Rider Cafe, count on Intelligent Design to keep your home cool and comfortable."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Now",
            "content": "Don\u2019t wait for the heat to become unbearable. Contact Intelligent Design Air Conditioning at (520) 333-2665 for expert HVAC and AC services in Tortolita, AZ.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Tortolita'),
};
