// Optimized Plumbing page for East Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingeasttucsonData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing in East Tucson, AZ | Call (520) 333-2665",
  description: "Trusted plumbing services in East Tucson, AZ. Fast repairs, installations & leak detection. Call Intelligent Design at (520) 333-2665 today.",
  slug: "plumbing-east-tucson",
  
  // Hero Section
  h1: "Professional Plumbing Services in East Tucson, AZ",
  h2Subheading: "Reliable Repairs, Installations, and Leak Detection Near You",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | 4.97-Star Rated | Warranty Included",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Plumbing East Tucson in Tucson",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "Prompt service to quickly address plumbing emergencies and minimize damage."
  },
  {
    "title": "Advanced Leak Detection Technology",
    "description": "Non-invasive equipment locates leaks without disrupting your property."
  },
  {
    "title": "Comprehensive Plumbing Services",
    "description": "From water heater installation to pipe repair, we cover all your plumbing needs."
  },
  {
    "title": "Upfront, Competitive Pricing",
    "description": "Clear estimates with no hidden fees ensure budget-friendly solutions."
  },
  {
    "title": "52 Licensed, Skilled Technicians",
    "description": "Experienced professionals trained specifically for Southern Arizona plumbing challenges."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "All services backed by guarantees for lasting peace of mind."
  }
],
  content: {
    mainHeading: "Professional Plumbing Services in East Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive Plumbing Solutions for East Tucson Homes",
            "content": "Comprehensive Plumbing Solutions for East Tucson Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in East Tucson means dealing with unique plumbing challenges like hard water buildup, extreme heat, and monsoon-related pipe damage. Our expert technicians are equipped to handle everything from water heater installations that withstand Arizona\u2019s scorching temperatures to efficient leak detection that prevents costly water waste. We specialize in repairing and replacing pipes, toilets, and faucets tailored to the demands of our local climate."
      },
      {
            "type": "paragraph",
            "content": "Whether you\u2019re facing a sudden pipe burst or need routine maintenance to protect your plumbing system against Arizona\u2019s dry heat and seasonal monsoons, Intelligent Design Air Conditioning, Plumbing, Solar, & Electric delivers fast, reliable service. Our team uses state-of-the-art tools to diagnose issues quickly and provide durable repairs that keep your home safe and comfortable year-round."
      },
      {
            "type": "cta",
            "heading": "Need Plumbing Help in East Tucson Now?",
            "content": "Call Intelligent Design for fast, expert plumbing service you can trust. Our licensed technicians are ready to help 24/7.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why East Tucson Homeowners Choose Intelligent Design",
            "content": "Why East Tucson Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star Google rating from more than 23,000 reviews, homeowners in East Tucson trust Intelligent Design for dependable plumbing solutions. Our team\u2019s extensive knowledge of local plumbing issues, including hard water corrosion and monsoon pipe damage, sets us apart from competitors."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every job with reliable warranties and transparent pricing, ensuring you get lasting value. Our 52 licensed technicians undergo continual training to stay ahead of the latest plumbing technologies and local code requirements, providing you with expert service on every visit."
      },
      {
            "type": "heading",
            "heading": "Serving the East Tucson Community",
            "content": "Serving the East Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving East Tucson neighborhoods near landmarks like Tin Town, Fort Lowell Museum, Presidio San Agust\u00edn del Tucs\u00f3n Museum, and Valley of the Moon, we understand the community\u2019s unique needs. Whether you\u2019re enjoying a meal at Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, La Frida Mexican Grill & Seafood, or Baja Cafe on Broadway, you can rely on Intelligent Design for quick, quality plumbing service close to home."
      },
      {
            "type": "cta",
            "heading": "Ready for Expert Plumbing Service?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric today for trusted plumbing solutions in East Tucson, AZ.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'East Tucson'),
};
