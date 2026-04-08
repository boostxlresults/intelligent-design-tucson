// Optimized Electrical page for Sahuarita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const electricalsahuaritaData: ServicePageData = {
  // SEO & Meta
  title: "Electrical Services in Sahuarita, AZ | Call (520) 333-2665",
  description: "Trusted electrical services in Sahuarita, AZ. Expert repairs, panel upgrades, EV charger installation. Call Intelligent Design at (520) 333-2665.",
  slug: "electrical-sahuarita",
  
  // Hero Section
  h1: "Expert Electrical Services in Sahuarita, AZ",
  h2Subheading: "Reliable Solutions for Your Home’s Electrical Needs",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Warranty | Transparent Pricing | Local Service",
  heroImage: "/generated_images/Electrical_service_work_e21d02b3.webp",
  heroImageAlt: "Licensed electrician providing expert electrical service in modern Sahuarita home",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response ensures quick electrical repairs when you need them most."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "Our 52 licensed technicians use the latest tools for safe panel upgrades and EV charger installs."
  },
  {
    "title": "Comprehensive Electrical Services",
    "description": "From whole-home rewiring to lighting and outlet repairs, we cover all your electrical needs."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "Upfront estimates with no hidden fees, tailored to Sahuarita homeowners\u2019 budgets."
  },
  {
    "title": "Highly Qualified Team",
    "description": "Over 46 years of experience and 23,000+ reviews make us the trusted local choice."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "We back our work with strong warranties for peace of mind in Southern Arizona\u2019s climate."
  }
],
  content: {
    mainHeading: "Expert Electrical Services in Sahuarita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Sahuarita\u2019s Trusted Electrical Repair & Installation",
            "level": 2,
            "content": "Sahuarita\u2019s Trusted Electrical Repair & Installation"
      },
      {
            "type": "paragraph",
            "content": "Living in Sahuarita means facing unique electrical challenges, from intense summer heat to monsoon storms that can damage wiring. At Intelligent Design, we specialize in repairing and upgrading electrical panels to handle increased loads safely. Our team also installs EV chargers, ensuring your home is ready for the future of transportation."
      },
      {
            "type": "paragraph",
            "content": "We understand the wear that Southern Arizona\u2019s hard water and dust can put on electrical systems. That\u2019s why we offer whole-home rewiring services and outlet replacements to maintain safety and efficiency. Our technicians are trained to adhere to local codes, providing solutions that last through Sahuarita\u2019s demanding conditions."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Don\u2019t wait for electrical issues to escalate. Contact Intelligent Design for expert repairs and upgrades tailored to Sahuarita homes.",
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
            "content": "Our reputation in Sahuarita is built on trust, professionalism, and consistent quality. With a 4.97-star Google rating from over 23,000 reviews, homeowners rely on us for honest assessments and durable electrical solutions. We prioritize your safety and comfort with every service call."
      },
      {
            "type": "paragraph",
            "content": "We stand behind our work with comprehensive warranties and a commitment to transparent pricing. Our licensed technicians undergo continuous training to stay current with electrical codes and innovations, ensuring your home\u2019s system is efficient and code-compliant in Sahuarita\u2019s unique environment."
      },
      {
            "type": "heading",
            "heading": "Serving the Sahuarita Community",
            "level": 2,
            "content": "Serving the Sahuarita Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Sahuarita and the greater Tucson area, we\u2019re close to landmarks like the ASARCO Mineral Discovery Center & Mine Tours, Titan Missile Museum, Tumacacori National Historical Park, and the Empire Ranch Foundation. After your service, enjoy local favorites like National Eats, El Patio Mexican Restaurant, Manuel's Mexican Restaurant, or JerryBobs Restaurant."
      },
      {
            "type": "cta",
            "heading": "Ready to Upgrade Your Home\u2019s Electrical System?",
            "content": "Call Intelligent Design for fast, reliable electrical services tailored to Sahuarita\u2019s climate and lifestyle.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'Sahuarita'),
};
