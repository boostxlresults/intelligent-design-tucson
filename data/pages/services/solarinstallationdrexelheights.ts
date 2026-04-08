// Optimized Solar Installation page for Drexel Heights - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { residentialSolarInstallationFAQs } from '@/data/faqs/solar';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const solarinstallationdrexelheightsData: ServicePageData = {
  // SEO & Meta
  title: "Solar Installation Drexel Heights AZ | Call (520) 333-2665",
  description: "Expert solar installation in Drexel Heights, AZ. Save energy with Intelligent Design’s licensed team. Call (520) 333-2665 today.",
  slug: "solar-installation-drexel-heights",
  
  // Hero Section
  h1: "Solar Installation Services in Drexel Heights, AZ",
  h2Subheading: "Harness Southern Arizona’s Sun with Trusted Solar Experts",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | Comprehensive Warranty | Local Specialists",
  heroImage: "/images/placeholder.webp",
  heroImageAlt: "Solar Installation Drexel Heights in Tucson",
  
  // Service Info
  serviceName: "Solar Installation",
  category: "Solar",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "We prioritize quick service to address your solar needs efficiently and reliably."
  },
  {
    "title": "Advanced Solar Equipment",
    "description": "We install premium panels and solar battery storage suited for Drexel Heights\u2019 climate."
  },
  {
    "title": "Full-Service Solar Solutions",
    "description": "From system design to net metering setup, we handle every step seamlessly."
  },
  {
    "title": "Competitive, Transparent Pricing",
    "description": "Upfront quotes with flexible solar financing tailored to your budget."
  },
  {
    "title": "Certified & Licensed Technicians",
    "description": "Our 52 licensed pros bring 46+ years of combined local solar installation expertise."
  },
  {
    "title": "Comprehensive Warranty Coverage",
    "description": "Enjoy peace of mind with robust warranties protecting your solar investment."
  }
],
  content: {
    mainHeading: "Solar Installation Services in Drexel Heights, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Solar Installation Tailored for Drexel Heights",
            "level": 2,
            "content": "Expert Solar Installation Tailored for Drexel Heights"
      },
      {
            "type": "paragraph",
            "content": "Drexel Heights benefits from abundant sunshine year-round, making solar energy an ideal choice. Our expert team designs solar systems optimized to withstand Southern Arizona\u2019s extreme heat, monsoon storms, and hard water conditions. We use durable, high-efficiency panels paired with solar battery storage to ensure reliable energy day and night."
      },
      {
            "type": "paragraph",
            "content": "We also assist with net metering setup, allowing you to sell excess power back to the grid and maximize savings. Our licensed technicians customize each installation for your home\u2019s orientation and energy needs, ensuring top performance and durability through harsh seasonal changes."
      },
      {
            "type": "cta",
            "heading": "Ready to Switch to Solar?",
            "content": "Contact Intelligent Design for professional solar installation in Drexel Heights. Call now to schedule a free consultation.",
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
            "content": "With over 46 years serving the greater Tucson area, Intelligent Design has earned a stellar 4.97-star rating from more than 23,000 customers. Our commitment to quality and transparency has built deep trust in the community. We stand behind every solar installation with strong warranties and ongoing support."
      },
      {
            "type": "paragraph",
            "content": "Our team of 52 licensed technicians combines local expertise with cutting-edge solar technology. We understand Southern Arizona\u2019s unique climate challenges and deliver solutions that last. Intelligent Design is your dependable partner for sustainable energy and cost savings."
      },
      {
            "type": "heading",
            "heading": "Serving the Drexel Heights Community",
            "level": 2,
            "content": "Serving the Drexel Heights Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve Drexel Heights and surrounding neighborhoods near landmarks like San Xavier del Bac Mission, Valley of the Moon, Tin Town, and El Con Tower. Our local roots connect us to the community\u2019s lifestyle, from dining at Hustle Bustle Cafe and Redbird Scratch Kitchen + Bar (Sam Hughes) to enjoying meals at Casa Madre Restaurant and Flaps and Racks."
      },
      {
            "type": "cta",
            "heading": "Start Saving with Solar Today",
            "content": "Join countless Drexel Heights residents choosing Intelligent Design for expert solar installation. Call us at (520) 333-2665 to get started.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: residentialSolarInstallationFAQs,
  commonQuestions: getRefinementQuestions('Solar Installation', 'Drexel Heights'),
};
