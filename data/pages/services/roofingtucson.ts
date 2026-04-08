// Optimized Roofing page for Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialRoofRepairFAQs } from '@/data/faqs/roofing';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const roofingtucsonData: ServicePageData = {
  // SEO & Meta
  title: "Expert Roofing in Tucson, AZ | Call (520) 333-2665 Today",
  description: "Trusted roofing services in Tucson, AZ. Roof repair, replacement, inspections, and more. Call (520) 333-2665 for fast, reliable roofing solutions.",
  slug: "roofing-tucson",
  
  // Hero Section
  h1: "Roofing Services in Tucson, AZ",
  h2Subheading: "Durable Roof Repair, Replacement & Inspection Tailored for Southern Arizona",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Comprehensive Roofing | Transparent Pricing | Warranty Backed",
  heroImage: "/generated_images/residential_roof_installation_crew_9ad609fb.webp",
  heroImageAlt: "Professional roofing crew installing new roof in Tucson, Arizona",
  
  // Service Info
  serviceName: "Roofing",
  category: "Roofing",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response Time",
    "description": "Our average response time is under 70 minutes for emergency roofing needs."
  },
  {
    "title": "Advanced Roofing Technology",
    "description": "We utilize the latest tools for tile, shingle, flat roofs, and roof coating applications."
  },
  {
    "title": "Comprehensive Roofing Services",
    "description": "From roof inspections to full replacements, we handle all roofing types and sizes."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Clear estimates with no hidden fees, tailored to your Tucson roofing project."
  },
  {
    "title": "Experienced, Licensed Team",
    "description": "52 certified technicians with over 46 years delivering quality roofing solutions."
  },
  {
    "title": "Robust Warranty Coverage",
    "description": "Our roofing work is backed by industry-leading warranties for your peace of mind."
  }
],
  content: {
    mainHeading: "Roofing Services in Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Roofing Services Built for Tucson\u2019s Climate",
            "level": 2,
            "content": "Expert Roofing Services Built for Tucson\u2019s Climate"
      },
      {
            "type": "paragraph",
            "content": "Southern Arizona\u2019s harsh climate demands roofing solutions that stand up to extreme heat, intense monsoon storms, and hard water damage. At Intelligent Design, we specialize in durable roofing systems including tile, shingle, and flat roofs designed to resist cracking, warping, and water intrusion. Our roof coatings offer added protection against UV rays and extend the lifespan of your roof."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a detailed roof inspection to identify leaks or a complete roof replacement, our licensed technicians bring decades of experience to every job. We understand Tucson\u2019s unique weather challenges and tailor repairs and installations accordingly, ensuring your home stays protected year-round."
      },
      {
            "type": "cta",
            "heading": "Protect Your Tucson Home with Expert Roofing",
            "content": "Schedule your roofing inspection or repair today with Intelligent Design\u2019s trusted team.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Tucson Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Tucson Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of roofing experience and a 4.97-star rating from more than 23,000 reviews, Intelligent Design is Tucson\u2019s most trusted roofing company. Our clients appreciate our prompt, professional service and thorough workmanship that meets the highest standards."
      },
      {
            "type": "paragraph",
            "content": "We stand behind every roofing project with robust warranties and a commitment to customer satisfaction. Our 52 licensed technicians undergo continuous training to stay current with the latest roofing technologies and Southern Arizona building codes."
      },
      {
            "type": "heading",
            "heading": "Serving the Tucson Community",
            "level": 2,
            "content": "Serving the Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Tucson and the greater Tucson area, we are honored to work in neighborhoods near local landmarks like Fort Lowell Museum, Tin Town, Valley of the Moon, and Old Tucson. We support community favorites such as Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, Perche' No, and Caf\u00e9 \u00e0 La C'Art. Intelligent Design is your local partner for roofing solutions tailored to Tucson\u2019s unique environment."
      },
      {
            "type": "cta",
            "heading": "Get Your Tucson Roof Ready for Any Weather",
            "content": "Contact Intelligent Design today for expert roofing repairs, replacements, and inspections.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialRoofRepairFAQs,
  commonQuestions: getRefinementQuestions('Roofing', 'Tucson'),
};
