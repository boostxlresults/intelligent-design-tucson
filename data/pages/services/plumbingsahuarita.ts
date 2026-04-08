// Optimized Plumbing page for Sahuarita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { plumbingLocationGeneralFAQs } from '@/data/faqs/plumbing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const plumbingsahuaritaData: ServicePageData = {
  // SEO & Meta
  title: "Expert Plumbing Services in Sahuarita, AZ | Call (520) 333-2665",
  description: "Trusted plumbing services in Sahuarita, AZ. Fast repairs, installations, and leak detection by licensed experts. Call (520) 333-2665 today!",
  slug: "plumbing-sahuarita",
  
  // Hero Section
  h1: "Reliable Plumbing Services in Sahuarita, AZ",
  h2Subheading: "Fast, Licensed, and Experienced Plumbing Solutions for Your Home",
  tagline: "68-Minute Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | 52 Technicians | 100% Warranty",
  heroImage: "/generated_images/Sahuarita_Arizona_residential_community_f19c419a.webp",
  heroImageAlt: "Professional plumber providing expert plumbing service in Sahuarita, Arizona residential community",
  
  // Service Info
  serviceName: "Plumbing",
  category: "Plumbing",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response ensures your plumbing emergency is handled quickly."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "State-of-the-art leak detection and repair tools tailored for Southern Arizona plumbing."
  },
  {
    "title": "Comprehensive Plumbing Services",
    "description": "From water heater installation to faucet repair, we cover all your plumbing needs."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Upfront estimates with no hidden fees, making budgeting easy and fair."
  },
  {
    "title": "Highly Qualified Team",
    "description": "52 licensed technicians with 46+ years of combined plumbing experience."
  },
  {
    "title": "Reliable Warranty Protection",
    "description": "We back our work with a 100% satisfaction warranty for peace of mind."
  }
],
  content: {
    mainHeading: "Reliable Plumbing Services in Sahuarita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Plumbing Solutions Tailored for Sahuarita Homes",
            "level": 2,
            "content": "Expert Plumbing Solutions Tailored for Sahuarita Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Sahuarita means dealing with unique plumbing challenges like hard water buildup and the impact of extreme heat on pipes. Our expert technicians specialize in repairing and maintaining plumbing systems that withstand these local conditions, ensuring your home\u2019s water flow is always optimal. Whether it\u2019s fixing leaks or installing energy-efficient water heaters, we use the latest technology for durable, long-lasting solutions."
      },
      {
            "type": "paragraph",
            "content": "We understand the urgency of plumbing problems during monsoon season when sudden pipe bursts and water damage risks increase. Our rapid response team averages just 68 minutes to your door, equipped to diagnose and repair issues quickly. From toilet repairs to comprehensive pipe replacements, Intelligent Design provides reliable service that Sahuarita homeowners trust."
      },
      {
            "type": "cta",
            "heading": "Get Your Plumbing Fixed Fast in Sahuarita",
            "content": "Don\u2019t wait for a minor leak to cause major damage. Call Intelligent Design today for expert plumbing service in Sahuarita.",
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
            "content": "With over 46 years of experience and 52 licensed technicians, Intelligent Design has earned a 4.97-star rating from more than 23,000 satisfied customers. Our reputation for honest, dependable plumbing service makes us the go-to choice in Sahuarita and the greater Tucson area."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every job with a 100% satisfaction warranty, ensuring your plumbing system performs flawlessly after our service. Our transparent pricing and expert advice help you make informed decisions without surprises."
      },
      {
            "type": "heading",
            "heading": "Serving the Sahuarita Community",
            "level": 2,
            "content": "Serving the Sahuarita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Sahuarita, near landmarks like the ASARCO Mineral Discovery Center & Mine Tours, Titan Missile Museum, Tumacacori National Historical Park, and Empire Ranch Foundation. After a day exploring these historic sites, enjoy local favorites like National Eats, El Patio Mexican Restaurant, Manuel's Mexican Restaurant, or JerryBobs Restaurant. We\u2019re honored to support the homes and families in this vibrant community with expert plumbing services tailored to Southern Arizona\u2019s climate."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Plumbing Service Today",
            "content": "Experience trusted, fast, and expert plumbing repairs in Sahuarita with Intelligent Design. Call us now to book your appointment.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: plumbingLocationGeneralFAQs,
  commonQuestions: getRefinementQuestions('Plumbing', 'Sahuarita'),
};
