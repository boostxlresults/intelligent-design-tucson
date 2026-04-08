// Optimized HVAC & AC page for Oro Valley - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacorovalleyData: ServicePageData = {
  // SEO & Meta
  title: "Expert HVAC & AC Services in Oro Valley, AZ | Call (520) 333-2665",
  description: "Trusted HVAC & AC services in Oro Valley, AZ. Fast response, expert repairs, and installs. Call Intelligent Design Air Conditioning today!",
  slug: "hvac-oro-valley",
  
  // Hero Section
  h1: "Reliable HVAC & AC Services in Oro Valley, AZ",
  h2Subheading: "Efficient Cooling Solutions Built for Southern Arizona’s Demanding Climate",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97 Stars | 23,000+ Reviews | Satisfaction Guaranteed",
  heroImage: "/generated_images/HVAC_tech_professional_portrait_1_7cfc258c.webp",
  heroImageAlt: "Professional HVAC technician servicing air conditioning system in Oro Valley, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "We prioritize fast service to beat Oro Valley\u2019s extreme heat and keep your home comfortable."
  },
  {
    "title": "Advanced HVAC Equipment & Expertise",
    "description": "We handle all AC systems including ductwork, smart thermostats, and high-efficiency units."
  },
  {
    "title": "Comprehensive HVAC & AC Services",
    "description": "From tune-ups and repairs to installations and duct cleaning, we cover all your cooling needs."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "No hidden fees\u2014just honest estimates to fit your budget and maximize energy savings."
  },
  {
    "title": "Highly Skilled Team of 52 Licensed Technicians",
    "description": "Our certified pros bring decades of experience to every job, ensuring expert service."
  },
  {
    "title": "Robust Warranty Protection",
    "description": "Enjoy peace of mind with industry-leading warranties on parts and labor."
  }
],
  content: {
    mainHeading: "Reliable HVAC & AC Services in Oro Valley, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Top HVAC & AC Services Tailored for Oro Valley Homes",
            "level": 2,
            "content": "Top HVAC & AC Services Tailored for Oro Valley Homes"
      },
      {
            "type": "paragraph",
            "content": "Oro Valley\u2019s hot, dry climate and seasonal monsoons demand reliable air conditioning systems. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we specialize in keeping your HVAC system running efficiently through the toughest weather. From expert AC repairs to preventative maintenance, our technicians ensure your home stays cool while protecting your equipment from dust and hard water damage."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a full AC installation with high-efficiency models or precise ductwork repairs to improve airflow, our team uses the latest tools and technology. We also offer AC tune-ups to optimize performance and lower energy bills\u2014critical in Southern Arizona\u2019s extreme heat. Trust us to handle everything from smart thermostat integration to routine HVAC service plans."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Call Intelligent Design Air Conditioning now to experience fast, expert HVAC and air conditioning service in Oro Valley.",
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
            "content": "With over 46 years of experience and a 4.97-star Google rating from more than 23,000 reviews, Intelligent Design stands out as Oro Valley\u2019s trusted HVAC provider. Our commitment to quality workmanship and customer satisfaction has earned us a loyal local following. We understand the unique challenges posed by Southern Arizona\u2019s climate and tailor our services accordingly."
      },
      {
            "type": "paragraph",
            "content": "Every job comes backed by comprehensive warranties on all parts and labor, giving you confidence in your investment. Our 52 licensed technicians are trained to deliver reliable solutions quickly, minimizing downtime during Oro Valley\u2019s hottest periods. We strive to exceed expectations with transparent pricing and friendly, knowledgeable service."
      },
      {
            "type": "heading",
            "heading": "Serving the Oro Valley Community",
            "level": 2,
            "content": "Serving the Oro Valley Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving homes near local landmarks like Picture Rock Petroglyphs, Mona\u2019s Bridge, Steam Pump Ranch, and the Rio Vista Labyrinth, we\u2019re deeply rooted in the Oro Valley community. We also support local favorites such as North Italia, Redbird Scratch Kitchen + Bar, The Parish, and Wildflower. Our team understands the local environment and works to provide HVAC solutions perfectly suited to your neighborhood."
      },
      {
            "type": "cta",
            "heading": "Ready to Beat the Heat?",
            "content": "Contact Intelligent Design Air Conditioning now for dependable HVAC and AC service that Oro Valley residents trust.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Oro Valley'),
};
