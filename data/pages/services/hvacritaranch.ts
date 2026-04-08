// Optimized HVAC & AC page for Rita Ranch - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacritaranchData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Rita Ranch, AZ | Call (520) 333-2665",
  description: "Expert HVAC & AC services in Rita Ranch, AZ. Fast response, skilled technicians, and reliable repairs for Southern Arizona’s extreme heat.",
  slug: "hvac-rita-ranch",
  
  // Hero Section
  h1: "Reliable HVAC & AC Services in Rita Ranch, AZ",
  h2Subheading: "Keeping Your Home Comfortable Year-Round with Expert HVAC Solutions",
  tagline: "Fast 68-Min Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | Comprehensive HVAC Services | Industry-Leading Warranty",
  heroImage: "/generated_images/HVAC_tech_refrigerant_check_e01028f3.webp",
  heroImageAlt: "Professional HVAC technician servicing air conditioning system in Rita Ranch, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response ensures your AC is fixed fast during extreme heat."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "52 licensed technicians skilled in HVAC repair, installation, and ductwork."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From AC tune-ups to ductwork and maintenance, we cover all your cooling needs."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Clear estimates with no hidden fees for every HVAC and AC service."
  },
  {
    "title": "Experienced & Certified Team",
    "description": "Over 46 years serving Rita Ranch with licensed, background-checked professionals."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "We back all HVAC installations and repairs with a solid warranty for peace of mind."
  }
],
  content: {
    mainHeading: "Reliable HVAC & AC Services in Rita Ranch, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert HVAC & AC Repair and Installation in Rita Ranch",
            "level": 2,
            "content": "Expert HVAC & AC Repair and Installation in Rita Ranch"
      },
      {
            "type": "paragraph",
            "content": "In the harsh Southern Arizona climate, reliable air conditioning is essential. Our technicians specialize in AC repair, installation, and ductwork designed to handle Rita Ranch\u2019s extreme heat, monsoons, and hard water conditions. We use advanced diagnostic tools to ensure efficient performance and longer system life."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a seasonal AC tune-up, emergency repairs, or a new HVAC system installation, Intelligent Design Air Conditioning, Plumbing, Solar, & Electric delivers fast, quality service. Our preventative maintenance keeps your system running smoothly and helps avoid costly breakdowns during peak summer months."
      },
      {
            "type": "cta",
            "heading": "Get Your AC Ready for the Arizona Heat Today",
            "content": "Call us now for expert HVAC and AC services in Rita Ranch with fast response times and trusted technicians.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Rita Ranch Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Rita Ranch Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years of experience and a 4.97-star Google rating from 23,000+ reviews, Intelligent Design is a trusted name in Rita Ranch. Our licensed technicians are trained to address the unique HVAC challenges posed by Southern Arizona\u2019s climate, ensuring your home stays comfortable no matter the weather."
      },
      {
            "type": "paragraph",
            "content": "We stand behind our work with industry-leading warranties on all HVAC installations and repairs. Our transparent pricing and attentive customer service have made us a top choice for air conditioning service and ductwork in the greater Tucson area."
      },
      {
            "type": "heading",
            "heading": "Serving the Rita Ranch Community",
            "level": 2,
            "content": "Serving the Rita Ranch Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve Rita Ranch neighbors near local landmarks like Joining Hands, the Tucson Rodeo Parade and Tucson Wagon & History Museum, Pima Air & Space Museum, and the 390th Memorial Museum. After a day exploring, enjoy dining at Rancho Rustico Restaurant, Taqueria 2 Hermanos, The Rattler at del Lago, or Rocking K Market bar & restaurant \u2014 knowing your home\u2019s HVAC system is in expert hands."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service in Rita Ranch Today",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for dependable HVAC & AC solutions tailored to Southern Arizona\u2019s climate.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Rita Ranch'),
};
