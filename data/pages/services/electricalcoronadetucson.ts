// Optimized Electrical page for Corona de Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const electricalcoronadetucsonData: ServicePageData = {
  // SEO & Meta
  title: "Expert Electrical Services in Corona de Tucson, AZ | (520) 333-2665",
  description: "Trusted electrical services in Corona de Tucson, AZ. Panel upgrades, EV chargers, lighting & more. Call Intelligent Design at (520) 333-2665 today!",
  slug: "electrical-corona-de-tucson",
  
  // Hero Section
  h1: "Electrical Services in Corona de Tucson, AZ",
  h2Subheading: "Reliable, Licensed Electrical Solutions for Your Home or Business",
  tagline: "Same-Day Service | Licensed | 46+ Years Experience | 52 Techs | 68-Min Response | Warranty Backed",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Electrical Coronade Tucson in Tucson",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response to keep your electrical issues from causing downtime."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "State-of-the-art tools and skilled technicians ensure safe, precise electrical work."
  },
  {
    "title": "Comprehensive Electrical Services",
    "description": "From panel upgrades to whole-home rewiring and EV charger installation."
  },
  {
    "title": "Transparent Pricing",
    "description": "Upfront, competitive pricing with no hidden fees or surprise charges."
  },
  {
    "title": "Licensed & Experienced Team",
    "description": "52 licensed electricians with 46+ years serving Southern Arizona\u2019s unique electrical needs."
  },
  {
    "title": "Reliable Warranty",
    "description": "All electrical work is backed by a solid warranty for your peace of mind."
  }
],
  content: {
    mainHeading: "Electrical Services in Corona de Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Electrical Repairs and Upgrades in Corona de Tucson",
            "level": 2,
            "content": "Expert Electrical Repairs and Upgrades in Corona de Tucson"
      },
      {
            "type": "paragraph",
            "content": "Living in Corona de Tucson means dealing with Southern Arizona\u2019s extreme heat, monsoon storms, and hard water\u2014conditions that can stress electrical systems. Our licensed technicians specialize in electrical panel upgrades designed to handle increased loads safely and efficiently. We also provide whole-home rewiring to replace outdated or damaged wiring, ensuring your home meets current safety standards."
      },
      {
            "type": "paragraph",
            "content": "Beyond repairs, we install EV chargers, modern lighting solutions, and additional outlets tailored to your lifestyle. Our expert team understands the local climate\u2019s impact on electrical components and uses durable materials engineered for longevity in desert conditions. Whether you need emergency repairs or system upgrades, Intelligent Design delivers fast, reliable service."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Don\u2019t let electrical issues disrupt your day. Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric now for expert electrical service in Corona de Tucson.",
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
            "content": "With a 4.97-star Google rating based on over 23,000 reviews, Intelligent Design is a trusted name in Corona de Tucson. Our customers consistently praise our prompt response and professional workmanship. We know you expect quality and reliability, which is why we back all electrical services with a comprehensive warranty."
      },
      {
            "type": "paragraph",
            "content": "Our team of 52 licensed electricians brings over 46 years of combined experience, uniquely qualified to address the challenges posed by Southern Arizona\u2019s climate. Whether it\u2019s monsoon-related surge protection or installing corrosion-resistant outlets, we tailor each job to local needs."
      },
      {
            "type": "heading",
            "heading": "Serving the Corona de Tucson Community",
            "level": 2,
            "content": "Serving the Corona de Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve residents near landmarks like Old Pueblo Hall, Colossal Cave Mountain Park, Presidio San Agust\u00edn del Tucs\u00f3n Museum, and San Xavier del Bac Mission. Whether you\u2019re enjoying a meal at Argenziano's, Toro Bravo, Charquitas Mexican Food, or La Herradura Street Tacos & Bar, know that Intelligent Design is your local partner for dependable electrical service."
      },
      {
            "type": "cta",
            "heading": "Get Reliable Electrical Solutions Now",
            "content": "Protect your home and family with expert electrical services tailored to Corona de Tucson\u2019s unique environment. Call Intelligent Design today!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'Corona de Tucson'),
};
