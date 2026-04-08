// Optimized Solar Installation page for Tanque Verde - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialSolarInstallationFAQs } from '@/data/faqs/solar';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const solarinstallationtanqueverdeData: ServicePageData = {
  // SEO & Meta
  title: "Solar Installation in Tanque Verde, AZ | Call (520) 333-2665",
  description: "Expert solar installation in Tanque Verde, AZ. Save with solar panels, battery storage & financing. Call Intelligent Design at (520) 333-2665 today!",
  slug: "solar-installation-tanque-verde",
  
  // Hero Section
  h1: "Solar Installation Services in Tanque Verde, AZ",
  h2Subheading: "Harness Southern Arizona’s Sun with Expert Solar Solutions",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | Trusted Team | Solid Warranties",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Solar Installation Tanque Verde in Tucson",
  
  // Service Info
  serviceName: "Solar Installation",
  category: "Solar",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response Time",
    "description": "Our local team responds quickly to your solar installation needs across Tanque Verde."
  },
  {
    "title": "Advanced Solar Equipment",
    "description": "We install high-efficiency solar panels and cutting-edge battery storage systems."
  },
  {
    "title": "Comprehensive Solar Services",
    "description": "From system design to net metering setup, we handle every step of your solar project."
  },
  {
    "title": "Competitive, Transparent Pricing",
    "description": "Affordable solar options with clear quotes and flexible financing tailored for your budget."
  },
  {
    "title": "52 Licensed Solar Technicians",
    "description": "Our certified experts bring over four decades of experience to each solar installation."
  },
  {
    "title": "Reliable Solar Warranties",
    "description": "Enjoy peace of mind with industry-leading warranties on panels and installation workmanship."
  }
],
  content: {
    mainHeading: "Solar Installation Services in Tanque Verde, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Professional Solar Installation Tailored for Tanque Verde",
            "level": 2,
            "content": "Professional Solar Installation Tailored for Tanque Verde"
      },
      {
            "type": "paragraph",
            "content": "Tanque Verde\u2019s intense sun and scorching summer heat make solar energy a smart investment. Our installations feature durable, high-efficiency panels designed to withstand Southern Arizona\u2019s extreme conditions, including monsoons and hard water exposure. We ensure your system performs optimally year-round to maximize savings."
      },
      {
            "type": "paragraph",
            "content": "We specialize in integrating solar battery storage solutions to capture excess energy, enabling power use during cloudy days or outages. Our expert technicians also handle net metering setup, ensuring you receive credit for surplus electricity generated. Intelligent Design offers flexible solar financing options to make clean energy affordable for every homeowner."
      },
      {
            "type": "cta",
            "heading": "Ready to Go Solar in Tanque Verde?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for a free solar consultation and quote.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Tanque Verde Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Tanque Verde Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star rating from more than 23,000 reviews, our reputation in Tanque Verde and greater Tucson is unmatched. We prioritize trust, transparency, and customer satisfaction on every project, ensuring your solar system delivers reliable performance and savings."
      },
      {
            "type": "paragraph",
            "content": "Our solar installations come backed by comprehensive warranties on panels and workmanship. Combined with the expertise of 52 licensed technicians, Intelligent Design guarantees top-tier quality and durability tailored to the unique environmental challenges of Southern Arizona."
      },
      {
            "type": "heading",
            "heading": "Serving the Tanque Verde Community",
            "level": 2,
            "content": "Serving the Tanque Verde Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve Tanque Verde residents near landmarks like Fort Lowell Museum, Trail Dust Town, Javelina Rocks, and Sabino Canyon Recreation Area. Our team enjoys supporting local favorites such as The Gardens at Bear Canyon, Tanque Verde Ranch, Zio Peppe, and The Barnyard Crafthouse & Eatery while delivering exceptional solar solutions to your neighborhood."
      },
      {
            "type": "cta",
            "heading": "Start Saving with Solar Today",
            "content": "Join countless Tanque Verde homeowners switching to solar with Intelligent Design. Call now for your free consultation!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialSolarInstallationFAQs,
  commonQuestions: getRefinementQuestions('Solar Installation', 'Tanque Verde'),
};
