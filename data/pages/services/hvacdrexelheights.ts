// Optimized HVAC & AC page for Drexel Heights - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacdrexelheightsData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Drexel Heights, AZ | Call (520) 333-2665",
  description: "Expert HVAC & AC services in Drexel Heights, AZ. Fast response, licensed techs, and quality repairs. Call Intelligent Design today!",
  slug: "hvac-drexel-heights",
  
  // Hero Section
  h1: "Reliable HVAC & AC Services in Drexel Heights, AZ",
  h2Subheading: "Keeping Your Home Cool and Comfortable in Southern Arizona’s Heat",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating | Comprehensive HVAC Solutions | Warranty Backed",
  heroImage: "/generated_images/HVAC_tech_condenser_repair_1_d670661c.webp",
  heroImageAlt: "Professional HVAC technician repairing outdoor AC condenser unit in Drexel Heights, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "Rapid service ensures your AC issues are addressed quickly, even during peak summer heat."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "Our 52 licensed technicians use cutting-edge tools for AC repair, installation, and ductwork."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From AC tune-ups to full system installations and duct maintenance, we handle it all."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Upfront quotes with no hidden fees keep your cooling solutions affordable and clear."
  },
  {
    "title": "Highly Qualified Team",
    "description": "46+ years of experience backed by 23,000+ 5-star reviews ensures top-notch service quality."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "All services come with reliable warranties protecting your investment against future issues."
  }
],
  content: {
    mainHeading: "Reliable HVAC & AC Services in Drexel Heights, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert HVAC & AC Solutions Tailored for Drexel Heights",
            "level": 2,
            "content": "Expert HVAC & AC Solutions Tailored for Drexel Heights"
      },
      {
            "type": "paragraph",
            "content": "Drexel Heights experiences intense summer heat and seasonal monsoons that challenge your HVAC systems. Intelligent Design specializes in AC repair and installation designed to withstand these extremes, including corrosion-resistant components for hard water areas. Our technicians expertly handle ductwork sealing and maintenance to optimize airflow and indoor air quality."
      },
      {
            "type": "paragraph",
            "content": "Regular AC tune-ups and HVAC maintenance are essential in Southern Arizona\u2019s demanding climate. We provide thorough inspections, refrigerant checks, and coil cleanings to keep your system running efficiently year-round. Our proactive approach reduces breakdowns during critical heatwaves and extends your unit\u2019s lifespan."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Don't wait for the heat to become unbearable. Call our team now for fast, reliable HVAC and AC services in Drexel Heights.",
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
            "content": "With over 46 years serving the greater Tucson area, Intelligent Design has built a reputation for trustworthy, dependable HVAC services. Our 4.97-star Google rating from more than 23,000 reviews reflects our commitment to customer satisfaction and technical excellence."
      },
      {
            "type": "paragraph",
            "content": "We back all our HVAC and AC work with industry-leading warranties, giving you peace of mind in Southern Arizona\u2019s challenging climate. Our licensed technicians ensure every repair and installation meets rigorous quality standards tailored to local conditions."
      },
      {
            "type": "heading",
            "heading": "Serving the Drexel Heights Community",
            "level": 2,
            "content": "Serving the Drexel Heights Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Drexel Heights and nearby landmarks like the historic San Xavier del Bac Mission, scenic Valley of the Moon, Tin Town\u2019s vibrant arts district, and the iconic El Con Tower. After a service visit, enjoy local favorites like Hustle Bustle Cafe, Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, or Flaps and Racks."
      },
      {
            "type": "cta",
            "heading": "Ready to Beat the Heat in Drexel Heights?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for expert HVAC and AC services tailored to Southern Arizona\u2019s climate challenges.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Drexel Heights'),
};
