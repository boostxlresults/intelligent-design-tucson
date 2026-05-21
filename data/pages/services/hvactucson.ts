// Optimized HVAC & AC page for Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvactucsonData: ServicePageData = {
  // SEO & Meta
  title: "HVAC Tucson AZ | #1 Rated HVAC Company | 23,000+ Reviews | Intelligent Design",
  description: "Tucson's #1 rated HVAC company — 4.97 stars, 23,000+ reviews, 46+ years serving Tucson families. AC repair, installation, heating & maintenance. Same-day service, no overtime charges. Call (520) 333-2665.",
  slug: "hvac-tucson",
  
  // Hero Section
  h1: "Reliable HVAC & AC Services in Tucson, AZ",
  h2Subheading: "Efficient Cooling Solutions Tailored for Tucson’s Unique Climate",
  tagline: "Same-Day Service | Licensed | 46+ Years Experience | 52 Technicians | 4.97-Star Rating",
  heroImage: "/generated_images/HVAC_tech_AC_repair_1_f17630c6.webp",
  heroImageAlt: "Professional HVAC technician servicing air conditioning system in Tucson, Arizona",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response ensures your AC is back up quickly during Tucson\u2019s heat."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "Our 52 licensed techs use cutting-edge tools for AC repair, installation, and ductwork."
  },
  {
    "title": "Comprehensive HVAC Services",
    "description": "From AC tune-ups to ductwork and full system installs, we cover all your cooling needs."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Honest estimates with no hidden fees, tailored for Tucson\u2019s budget-conscious homeowners."
  },
  {
    "title": "Highly Qualified Team",
    "description": "46+ years experience backed by 23,000+ 5-star reviews shows our commitment to quality."
  },
  {
    "title": "Reliable Warranty Protection",
    "description": "We stand behind our work with warranties that protect your investment long-term."
  }
],
  content: {
    mainHeading: "Reliable HVAC & AC Services in Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert HVAC & AC Solutions Built for Tucson\u2019s Climate",
            "level": 2,
            "content": "Expert HVAC & AC Solutions Built for Tucson\u2019s Climate"
      },
      {
            "type": "paragraph",
            "content": "Tucson\u2019s scorching summers and intense monsoon seasons demand HVAC systems that perform flawlessly. Our AC repair and installation services are designed specifically to handle extreme heat and hard water conditions common in Southern Arizona. We ensure your system runs efficiently and reliably, keeping your home comfortable year-round."
      },
      {
            "type": "paragraph",
            "content": "Whether you need routine AC tune-ups, ductwork repairs, or a full HVAC replacement, our technicians bring deep expertise and advanced diagnostic tools. Proper maintenance reduces energy costs and extends equipment life, crucial in Tucson\u2019s challenging environment where dust and debris impact system performance."
      },
      {
            "type": "cta",
            "heading": "Ready to Beat the Tucson Heat?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for fast, professional HVAC services tailored to your needs.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Tucson Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Tucson Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "Our 4.97-star rating from over 23,000 reviews reflects decades of trusted service in Tucson. Homeowners rely on our skilled technicians for honest advice and quality workmanship, especially when dealing with AC breakdowns during peak summer heat. We prioritize your comfort and safety with every call."
      },
      {
            "type": "paragraph",
            "content": "We back all installations and repairs with solid warranties, ensuring peace of mind. Our licensed team adheres to the highest industry standards, making Intelligent Design a dependable partner for your HVAC needs across the greater Tucson area."
      },
      {
            "type": "heading",
            "heading": "Serving the Tucson Community",
            "level": 2,
            "content": "Serving the Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving neighborhoods near Fort Lowell Museum, Tin Town, Valley of the Moon, and Old Tucson, we understand local needs and climate challenges. After a service call, we recommend enjoying a meal at Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, Perche' No, or Caf\u00e9 \u00e0 La C'Art."
      },
      {
            "type": "cta",
            "heading": "Experience Tucson\u2019s Trusted HVAC Experts",
            "content": "For expert HVAC and AC services that stand up to Tucson\u2019s heat and monsoons, call Intelligent Design today.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Tucson'),
};
