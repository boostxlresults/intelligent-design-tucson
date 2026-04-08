// Optimized Electrical page for Drexel Heights - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const electricaldrexelheightsData: ServicePageData = {
  // SEO & Meta
  title: "Electrical Services in Drexel Heights, AZ | Call (520) 333-2665",
  description: "Expert electrical services in Drexel Heights, AZ. Fast response, panel upgrades, EV chargers, lighting & rewiring. Call (520) 333-2665 today!",
  slug: "electrical-drexel-heights",
  
  // Hero Section
  h1: "Reliable Electrical Services in Drexel Heights, AZ",
  h2Subheading: "Comprehensive Electrical Solutions for Your Home or Business",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rated | EV Charger Specialists | Warranty Included",
  heroImage: "/generated_images/Electrical_service_work_e21d02b3.webp",
  heroImageAlt: "Professional licensed electrician providing expert electrical service to Drexel Heights home",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "Our technicians arrive quickly to handle urgent electrical repairs in Drexel Heights."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "We use cutting-edge tools for panel upgrades, EV charger installs, and whole-home rewiring."
  },
  {
    "title": "Comprehensive Electrical Services",
    "description": "From lighting installations to outlet repairs, we cover all residential and commercial needs."
  },
  {
    "title": "Transparent Pricing",
    "description": "No hidden fees \u2014 clear estimates ensure you know the cost before work begins."
  },
  {
    "title": "Highly Qualified Team",
    "description": "52 licensed technicians with 46+ years experience deliver trusted, quality workmanship."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "All electrical services include warranties for peace of mind and lasting safety."
  }
],
  content: {
    mainHeading: "Reliable Electrical Services in Drexel Heights, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Electrical Repairs and Upgrades in Drexel Heights",
            "level": 2,
            "content": "Expert Electrical Repairs and Upgrades in Drexel Heights"
      },
      {
            "type": "paragraph",
            "content": "Living in Drexel Heights means facing electrical challenges caused by Southern Arizona\u2019s harsh climate. Our team specializes in panel upgrades to handle extreme heat and prevent overloads. We also install EV chargers tailored to local homes, making green driving more convenient."
      },
      {
            "type": "paragraph",
            "content": "From whole-home rewiring to installing energy-efficient lighting, our licensed electricians ensure your system meets current safety codes. We understand the impact of monsoons and hard water on wiring integrity, so we use durable materials designed to withstand these conditions."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Contact Intelligent Design for prompt, professional electrical solutions in Drexel Heights. Call now for your free estimate!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Drexel Heights Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Drexel Heights Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years serving the Tucson area, Intelligent Design earns trust through nearly 23,000 five-star reviews. Our commitment to quality workmanship and customer satisfaction sets us apart in Drexel Heights and beyond."
      },
      {
            "type": "paragraph",
            "content": "We back every electrical project with solid warranties and employ only licensed technicians who prioritize safety and reliability. Our average 68-minute response time ensures your electrical issues are resolved quickly and professionally."
      },
      {
            "type": "heading",
            "heading": "Serving the Drexel Heights Community",
            "level": 2,
            "content": "Serving the Drexel Heights Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Drexel Heights and the greater Tucson area, we\u2019re close to landmarks like San Xavier del Bac Mission, Valley of the Moon, Tin Town, and El Con Tower. After your service, enjoy local favorites such as Hustle Bustle Cafe, Redbird Scratch Kitchen + Bar (Sam Hughes), Casa Madre Restaurant, or Flaps and Racks."
      },
      {
            "type": "cta",
            "heading": "Get Trusted Electrical Services in Drexel Heights Now",
            "content": "Don\u2019t wait for electrical problems to worsen. Call Intelligent Design for expert repairs, upgrades, and installations you can trust.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'Drexel Heights'),
};
