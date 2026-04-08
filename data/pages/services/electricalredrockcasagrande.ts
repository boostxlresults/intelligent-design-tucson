// Optimized Electrical page for Red Rock / Casa Grande - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';
import { electricalRepairFAQs } from '@/data/faqs/electrical';

export const electricalredrockcasagrandeData: ServicePageData = {
  // SEO & Meta
  title: "Electrical Services in Red Rock / Casa Grande, AZ | Call (520) 333-2665",
  description: "Trusted electrical services in Red Rock / Casa Grande, AZ. Expert repairs, panel upgrades, EV charger install. Call (520) 333-2665 today!",
  slug: "electrical-red-rock-casa-grande",
  
  // Hero Section
  h1: "Expert Electrical Services in Red Rock / Casa Grande, AZ",
  h2Subheading: "Reliable Electrical Repairs, Upgrades & Installations for Your Home",
  tagline: "Fast Response | Licensed Electricians | 46+ Years Experience | Upfront Pricing | Comprehensive Services | Satisfaction Guaranteed",
  heroImage: "/generated_images/Electrical_service_work_e21d02b3.webp",
  heroImageAlt: "Professional electrical service in Red Rock / Casa Grande",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response to electrical emergencies across Red Rock and Casa Grande."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "52 licensed technicians equipped for panel upgrades, EV chargers, lighting, and rewiring."
  },
  {
    "title": "Comprehensive Electrical Services",
    "description": "From whole-home rewiring to outlet repairs and smart home electrical installations."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Upfront quotes with no hidden fees tailored to Red Rock and Casa Grande homes."
  },
  {
    "title": "Highly Qualified Team",
    "description": "46+ years of industry experience maintaining safety in Southern Arizona\u2019s extreme climate."
  },
  {
    "title": "Warranty & Satisfaction",
    "description": "All electrical work backed by strong warranties and our 4.97-star customer satisfaction guarantee."
  }
],
  content: {
    mainHeading: "Expert Electrical Services in Red Rock / Casa Grande, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive Electrical Solutions for Red Rock / Casa Grande Homes",
            "level": 2,
            "content": "Comprehensive Electrical Solutions for Red Rock / Casa Grande Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Southern Arizona means dealing with unique electrical challenges, from monsoon storms to extreme heat that can damage wiring and panels. Our team specializes in durable electrical repairs, panel upgrades to handle increased loads, and installing EV chargers designed for local conditions. Protect your home with expert lighting solutions and efficient outlet installations to keep your family safe and powered."
      },
      {
            "type": "paragraph",
            "content": "We also provide whole-home rewiring services to replace outdated or damaged systems, ensuring compliance with modern safety codes. Whether you need a quick repair or a major upgrade, Intelligent Design\u2019s licensed electricians deliver reliable, code-compliant work tailored specifically for Red Rock and Casa Grande residences."
      },
      {
            "type": "cta",
            "heading": "Need Electrical Help Now?",
            "content": "Call our expert team today for fast, reliable electrical service in Red Rock and Casa Grande. We\u2019re just a phone call away!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Red Rock / Casa Grande Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Red Rock / Casa Grande Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star Google rating from more than 23,000 reviews, Intelligent Design is a trusted name in Southern Arizona electrical service. Our customers value our fast response times and transparent pricing, knowing we prioritize safety and long-lasting solutions adapted to local weather and electrical demands."
      },
      {
            "type": "paragraph",
            "content": "All electrical work is performed by our 52 licensed technicians and backed by strong warranties. We stand behind every job, ensuring your home\u2019s electrical system withstands the harsh monsoons, intense sun, and hard water conditions common to the Red Rock and Casa Grande areas."
      },
      {
            "type": "heading",
            "heading": "Serving the Red Rock / Casa Grande Community",
            "level": 2,
            "content": "Serving the Red Rock / Casa Grande Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve homes near local landmarks like Casa Grande Ruins National Monument, Old Sasco Building Remains, Casa Grande Ruins Visitor Center, and Ironwood Forest National Monument. Our team is part of the community and supports local businesses including Hideout Steakhouse and BBQ, BeDillon\u2019s Restaurant, Karavela\u2019s Mexican and Peruvian Food, and Big House Cafe & Catering."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Protect your home with expert electrical services tailored for Red Rock and Casa Grande\u2019s unique climate and electrical needs.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'Red Rock / Casa Grande'),
};
