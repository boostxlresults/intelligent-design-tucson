// Optimized HVAC & AC page for SaddleBrooke - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacsaddlebrookeData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in SaddleBrooke, AZ | Call (520) 333-2665",
  description: "Top HVAC & AC service in SaddleBrooke, AZ. Expert repairs, installation & maintenance. Call (520) 333-2665 for fast, reliable local service.",
  slug: "hvac-saddle-brooke",
  
  // Hero Section
  h1: "Expert HVAC & AC Services in SaddleBrooke, AZ",
  h2Subheading: "Reliable Cooling Solutions Tailored for Southern Arizona’s Climate",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/HVAC_tech_mini-split_install_9d494ba5.webp",
  heroImageAlt: "Professional HVAC technician servicing luxury air conditioning system in SaddleBrooke, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response",
    "description": "We prioritize fast service to beat the Arizona heat and monsoon season delays."
  },
  {
    "title": "Advanced HVAC Technology",
    "description": "Utilizing cutting-edge equipment for efficient AC repair, installation, and maintenance."
  },
  {
    "title": "Comprehensive Service Scope",
    "description": "From AC tune-ups to ductwork and plumbing, we cover all your home comfort needs."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Upfront quotes with no hidden fees ensure affordable, fair pricing for SaddleBrooke residents."
  },
  {
    "title": "Certified & Experienced Team",
    "description": "52 licensed technicians bring 46+ years of expertise to every job."
  },
  {
    "title": "Industry-Leading Warranty",
    "description": "We back our HVAC solutions with solid warranties for your peace of mind."
  }
],
  content: {
    mainHeading: "Expert HVAC & AC Services in SaddleBrooke, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive HVAC & AC Services Designed for SaddleBrooke",
            "level": 2,
            "content": "Comprehensive HVAC & AC Services Designed for SaddleBrooke"
      },
      {
            "type": "paragraph",
            "content": "Living in SaddleBrooke means facing Southern Arizona\u2019s intense summer heat, monsoon storms, and hard water challenges. Our HVAC services are tailored to keep your home cool and comfortable year-round. From precise AC repair to full system installations, we ensure your cooling equipment withstands the harsh climate effectively."
      },
      {
            "type": "paragraph",
            "content": "Our team specializes in air conditioning tune-ups, ductwork repairs, and routine maintenance that improve system efficiency and extend equipment life. We address issues caused by dust accumulation, mineral deposits from hard water, and the strain of extreme temperatures, helping you avoid costly breakdowns."
      },
      {
            "type": "cta",
            "heading": "Schedule Your HVAC Service Today",
            "content": "Stay cool this summer with expert HVAC and AC services from Intelligent Design. Call (520) 333-2665 now for prompt, reliable service in SaddleBrooke.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why SaddleBrooke Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why SaddleBrooke Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "Our 4.97-star Google rating from over 23,000 reviews reflects our commitment to quality and customer satisfaction. Homeowners trust our licensed technicians for honest, timely HVAC solutions that stand up to SaddleBrooke\u2019s climate extremes."
      },
      {
            "type": "paragraph",
            "content": "We offer robust warranties on all HVAC installations and repairs, giving you confidence in your investment. Our team\u2019s expertise and quick average response time of 68 minutes ensure your comfort is restored without delay."
      },
      {
            "type": "heading",
            "heading": "Serving the SaddleBrooke Community",
            "level": 2,
            "content": "Serving the SaddleBrooke Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve the greater SaddleBrooke area near local landmarks like the Historic Kannally Ranch House, Oracle Historical Society, Oracle State Park, and the Vista Sun Wheel. After your service, enjoy a meal at nearby favorites such as Fork & Fire Catalina Grill, Riot Grill, The Preserve Fine Dining, or The Roadrunner Grill."
      },
      {
            "type": "cta",
            "heading": "Ready to Experience Superior HVAC Service?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for trusted HVAC and AC solutions in SaddleBrooke. Call (520) 333-2665 today!",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'SaddleBrooke'),
};
