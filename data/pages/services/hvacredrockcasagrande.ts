// Optimized HVAC & AC page for Red Rock / Casa Grande - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';
import { acRepairFAQs } from '@/data/faqs/hvac';

export const hvacredrockcasagrandeData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Red Rock / Casa Grande, AZ | (520) 333-2665",
  description: "Expert HVAC & AC repair, installation & maintenance in Red Rock / Casa Grande, AZ. Fast, reliable service for Southern Arizona homes.",
  slug: "hvac-red-rock-casa-grande",
  
  // Hero Section
  h1: "HVAC & AC Services in Red Rock / Casa Grande, AZ",
  h2Subheading: "Reliable Air Conditioning Repair, Installation & Maintenance for Southern Arizona Homes",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 52 Technicians | 4.97-Star Rating | Satisfaction Guaranteed",
  heroImage: "/generated_images/HVAC_tech_maintenance_check_1_7125b76e.webp",
  heroImageAlt: "Professional HVAC service in Red Rock / Casa Grande",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "We prioritize quick service to beat extreme heat and restore comfort fast."
  },
  {
    "title": "Expertise in Advanced HVAC Systems",
    "description": "Certified technicians skilled in ductwork, AC tune-ups, and energy-efficient installations."
  },
  {
    "title": "Comprehensive HVAC & AC Solutions",
    "description": "From repairs to full system replacements, we handle all air conditioning needs."
  },
  {
    "title": "Transparent Pricing & Financing Options",
    "description": "Competitive rates with no hidden fees and flexible payment plans available."
  },
  {
    "title": "52 Licensed, Trained Technicians",
    "description": "Our experienced team ensures quality workmanship and professional service."
  },
  {
    "title": "Industry-Leading Warranties",
    "description": "We back our work and equipment with strong warranties for your peace of mind."
  }
],
  content: {
    mainHeading: "HVAC & AC Services in Red Rock / Casa Grande, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive HVAC & Air Conditioning Services in Red Rock / Casa Grande",
            "level": 2,
            "content": "Comprehensive HVAC & Air Conditioning Services in Red Rock / Casa Grande"
      },
      {
            "type": "paragraph",
            "content": "Southern Arizona\u2019s intense heat and monsoon season place high demands on your HVAC system. At Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, we specialize in AC repair, installation, and regular maintenance tailored for Red Rock and Casa Grande homes. Our expert technicians are equipped to handle everything from refrigerant leaks and compressor issues to ductwork repairs that improve airflow and efficiency."
      },
      {
            "type": "paragraph",
            "content": "Regular AC tune-ups are crucial here to combat hard water damage and dust accumulation common in the desert climate. Our comprehensive service includes coil cleaning, filter replacement, and system diagnostics to ensure your unit runs efficiently and reliably all year long. Whether you need a new high-efficiency AC unit installed or urgent repairs during the summer heat wave, we respond quickly to keep your home comfortable."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Call Intelligent Design for prompt, professional HVAC and AC solutions in Red Rock / Casa Grande. Stay cool despite Arizona\u2019s harsh climate.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Red Rock / Casa Grande Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Red Rock / Casa Grande Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "Our reputation in the community is built on trust and quality. With 46+ years of experience and over 23,000 five-star Google reviews, homeowners know they can count on us for dependable HVAC service. We understand the unique cooling challenges faced by local residents and tailor our solutions accordingly."
      },
      {
            "type": "paragraph",
            "content": "Every job is backed by industry-leading warranties on parts and labor, giving you peace of mind. Our team of 52 licensed technicians is dedicated to delivering fast, courteous, and expert service with an average 68-minute response time, making Intelligent Design the top choice for HVAC and AC needs in the greater Tucson area."
      },
      {
            "type": "heading",
            "heading": "Serving the Red Rock / Casa Grande Community",
            "level": 2,
            "content": "Serving the Red Rock / Casa Grande Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve homeowners near local landmarks like Casa Grande Ruins National Monument, Old Sasco Building Remains, Casa Grande Ruins Visitor Center, and Ironwood Forest National Monument. Our technicians are familiar with the area\u2019s conditions, helping us provide tailored HVAC solutions. After a service call, enjoy a meal at nearby favorites such as Hideout Steakhouse and BBQ, BeDillon\u2019s Restaurant, Karavela\u2019s Mexican and Peruvian Food, or Big House Cafe & Catering."
      },
      {
            "type": "cta",
            "heading": "Contact Intelligent Design for HVAC Excellence",
            "content": "Experience expert HVAC and air conditioning service designed for Red Rock / Casa Grande homes. Call us today to schedule your appointment.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: acRepairFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Red Rock / Casa Grande'),
};
