// Optimized Solar Installation page for Oro Valley - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialSolarInstallationFAQs } from '@/data/faqs/solar';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const solarinstallationorovalleyData: ServicePageData = {
  // SEO & Meta
  title: "Solar Installation Oro Valley AZ | Call (520) 333-2665",
  description: "Expert solar installation in Oro Valley, AZ. Trusted local service with fast response, quality equipment, and solar financing options.",
  slug: "solar-installation-oro-valley",
  
  // Hero Section
  h1: "Solar Installation in Oro Valley, AZ",
  h2Subheading: "Harness Southern Arizona’s Sun with Trusted Solar Experts",
  tagline: "Fast Response | Licensed Technicians | 46+ Years Experience | Quality Equipment | Solar Financing | Warranty Included",
  heroImage: "/generated_images/Oro_Valley_residential_area_b0254757.webp",
  heroImageAlt: "Professional solar panel installation on Oro Valley home with Catalina Mountain views",
  
  // Service Info
  serviceName: "Solar Installation",
  category: "Solar",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response Time",
    "description": "Our average response time ensures your solar needs are addressed promptly and efficiently."
  },
  {
    "title": "High-Quality Solar Equipment",
    "description": "We install advanced solar panels and battery storage systems designed for Arizona\u2019s harsh climate."
  },
  {
    "title": "Comprehensive Solar Services",
    "description": "From system design to installation, maintenance, and net metering setup, we cover all solar needs."
  },
  {
    "title": "Transparent and Competitive Pricing",
    "description": "Affordable solar installation with clear pricing and flexible financing options tailored to your budget."
  },
  {
    "title": "Experienced Licensed Technicians",
    "description": "Our 52 certified technicians bring 46+ years of expertise ensuring professional, code-compliant solar installs."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "All installations include solid manufacturer and workmanship warranties for your peace of mind."
  }
],
  content: {
    mainHeading: "Solar Installation in Oro Valley, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Professional Solar Panel Installation in Oro Valley",
            "level": 2,
            "content": "Professional Solar Panel Installation in Oro Valley"
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric specializes in solar panel installations designed for Oro Valley\u2019s unique climate. Our solar systems are engineered to withstand extreme heat, monsoon storms, and hard water corrosion common in Southern Arizona. We use premium panels and solar battery storage to maximize energy independence and savings."
      },
      {
            "type": "paragraph",
            "content": "Our expert team handles everything from initial consultation and site assessment to installation and net metering coordination with local utilities. With over 46 years of experience, we ensure your system is optimized for maximum efficiency and durability, helping you reduce energy costs sustainably."
      },
      {
            "type": "cta",
            "heading": "Ready to Go Solar in Oro Valley?",
            "content": "Contact us today for a free consultation and discover how solar energy can benefit your home.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Oro Valley Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Oro Valley Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "Our 4.97-star Google rating with over 23,000 reviews reflects our commitment to quality and customer satisfaction. Oro Valley residents trust our licensed technicians for reliable, code-compliant solar installations tailored to local needs."
      },
      {
            "type": "paragraph",
            "content": "We back every solar installation with comprehensive warranties, giving you confidence in your investment. Our transparent pricing and flexible solar financing options make clean energy accessible and affordable."
      },
      {
            "type": "heading",
            "heading": "Serving the Oro Valley Community",
            "level": 2,
            "content": "Serving the Oro Valley Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Oro Valley and the greater Tucson area, we\u2019re familiar with local landmarks like Picture Rock Petroglyphs, Mona's Bridge, Steam Pump Ranch, and the Rio Vista Labyrinth. We also support nearby favorites such as North Italia, Redbird Scratch Kitchen + Bar, The Parish, and Wildflower, reflecting our deep community roots."
      },
      {
            "type": "cta",
            "heading": "Start Your Solar Journey Today",
            "content": "Join thousands of satisfied customers who trust Intelligent Design for their solar needs. Call us now to schedule your free solar consultation.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialSolarInstallationFAQs,
  commonQuestions: getRefinementQuestions('Solar Installation', 'Oro Valley'),
};
