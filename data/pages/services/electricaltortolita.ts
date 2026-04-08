// Optimized Electrical page for Tortolita - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const electricaltortolitaData: ServicePageData = {
  // SEO & Meta
  title: "Electrical Services in Tortolita, AZ | Call (520) 333-2665",
  description: "Trusted electrical services in Tortolita, AZ. Expert repairs, panel upgrades, EV chargers & more. Call Intelligent Design today!",
  slug: "electrical-tortolita",
  
  // Hero Section
  h1: "Expert Electrical Services in Tortolita, AZ",
  h2Subheading: "Reliable Electrical Repairs, Upgrades & Installations for Your Home",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/Electrical_service_work_e21d02b3.webp",
  heroImageAlt: "Professional electrician providing expert electrical service in Tortolita, Arizona modern homes",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "Our average response time ensures your electrical issues are addressed promptly."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "We use cutting-edge tools and techniques to handle complex electrical challenges."
  },
  {
    "title": "Comprehensive Electrical Solutions",
    "description": "From panel upgrades to EV charger installs and whole-home rewiring, we cover it all."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Upfront estimates with no hidden fees tailored to your Tortolita home\u2019s needs."
  },
  {
    "title": "Certified & Licensed Technicians",
    "description": "52 skilled electricians with decades of experience protect your home and family."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "We back our work with solid warranties for peace of mind in Southern Arizona."
  }
],
  content: {
    mainHeading: "Expert Electrical Services in Tortolita, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Trusted Electrical Services Tailored for Tortolita Homes",
            "level": 2,
            "content": "Trusted Electrical Services Tailored for Tortolita Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Tortolita, AZ means facing unique electrical challenges caused by intense summer heat, monsoon storms, and hard water exposure. Our licensed electricians specialize in durable electrical repairs and upgrades designed to withstand these harsh conditions. Whether you need a full panel replacement or troubleshooting after a storm, we ensure your home's electrical system remains safe and efficient."
      },
      {
            "type": "paragraph",
            "content": "We install energy-efficient LED lighting, new outlets, EV chargers, and provide whole-home rewiring tailored to older homes in the greater Tucson area. Our team understands local codes and uses corrosion-resistant materials to combat the effects of Southern Arizona\u2019s extreme climate. With Intelligent Design, your electrical system is built to last."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Don\u2019t wait until a minor issue turns into a costly repair. Call (520) 333-2665 now for prompt, expert service in Tortolita.",
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
            "content": "Our commitment to quality and customer satisfaction has earned us a 4.97-star Google rating from over 23,000 reviews. Tortolita residents trust our licensed team to deliver reliable electrical work that meets the highest safety standards. With more than 46 years of experience serving Southern Arizona, we understand the local environment and electrical demands better than anyone."
      },
      {
            "type": "paragraph",
            "content": "Every project is backed by a comprehensive warranty, giving you peace of mind against the damaging effects of monsoons, heat, and hard water. Our technicians continually update their skills and certifications to provide the best service possible. When you hire Intelligent Design, you\u2019re investing in dependable electrical solutions built to protect your home for years to come."
      },
      {
            "type": "heading",
            "heading": "Serving the Tortolita Community",
            "level": 2,
            "content": "Serving the Tortolita Community"
      },
      {
            "type": "paragraph",
            "content": "We\u2019re proud to serve homeowners near iconic local spots like Honey Bee Canyon Petroglyphs, Tortolita Preserve Trailhead, Wild Burro Trailhead, and Honey Bee Canyon Park. Our team often enjoys lunch breaks at nearby favorites such as Ol\u2019 Pot Hole, The Highlands Bar & Grille, Tortolita Preserve Trailhead caf\u00e9, and Sky Rider Cafe. This deep local connection helps us understand Tortolita\u2019s unique needs and provide personalized electrical solutions."
      },
      {
            "type": "cta",
            "heading": "Ready to Upgrade Your Electrical System?",
            "content": "Contact Intelligent Design for expert electrical repairs, panel upgrades, EV charger installations, and more. Call (520) 333-2665 today!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'Tortolita'),
};
