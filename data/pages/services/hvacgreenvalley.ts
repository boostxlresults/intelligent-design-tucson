// Optimized HVAC & AC page for Green Valley - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { hvacLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const hvacgreenvalleyData: ServicePageData = {
  // SEO & Meta
  title: "HVAC & AC Services in Green Valley, AZ | Call (520) 333-2665",
  description: "Expert HVAC & AC services in Green Valley, AZ. Fast response, skilled techs, and reliable repairs. Call Intelligent Design at (520) 333-2665 today.",
  slug: "hvac-green-valley",
  
  // Hero Section
  h1: "Reliable HVAC & AC Services in Green Valley, AZ",
  h2Subheading: "Keeping Southern Arizona Homes Cool & Comfortable Year-Round",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rating",
  heroImage: "/generated_images/HVAC_tech_home_arrival_1_038eed95.webp",
  heroImageAlt: "Professional HVAC technician providing reliable air conditioning service to Green Valley retirement community home",
  
  // Service Info
  serviceName: "HVAC & AC",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response Time",
    "description": "Quick service ensures your AC is up and running during extreme Arizona heat."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "We handle all HVAC systems, ductwork, and AC tune-ups with precision tools."
  },
  {
    "title": "Comprehensive HVAC & AC Services",
    "description": "From repairs to installations and maintenance, we cover every cooling need."
  },
  {
    "title": "Transparent & Competitive Pricing",
    "description": "No hidden fees\u2014just honest estimates tailored for Green Valley residents."
  },
  {
    "title": "Skilled Team of 52 Licensed Technicians",
    "description": "Experienced pros trained to tackle Southern Arizona\u2019s unique climate challenges."
  },
  {
    "title": "Industry-Leading Warranty Protection",
    "description": "Peace of mind with warranties backing all parts and labor on HVAC services."
  }
],
  content: {
    mainHeading: "Reliable HVAC & AC Services in Green Valley, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert HVAC & AC Solutions for Green Valley Homes",
            "level": 2,
            "content": "Expert HVAC & AC Solutions for Green Valley Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Green Valley means facing extreme heat, dust storms, and monsoon humidity. Our HVAC and AC services are designed specifically to combat Southern Arizona\u2019s harsh climate. We specialize in AC repair, installation, ductwork, and routine maintenance to keep your system efficient and reliable all year."
      },
      {
            "type": "paragraph",
            "content": "Hard water buildup and dust can severely reduce your AC\u2019s efficiency. Our skilled technicians use cutting-edge diagnostic tools and eco-friendly refrigerants to ensure optimal performance. From thorough AC tune-ups to complex duct sealing, we protect your home\u2019s indoor air quality and comfort."
      },
      {
            "type": "cta",
            "heading": "Need Fast HVAC Service in Green Valley?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for expert HVAC & AC solutions with a rapid response. We\u2019re ready to help you today.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      },
      {
            "type": "heading",
            "heading": "Why Green Valley Homeowners Choose Intelligent Design",
            "level": 2,
            "content": "Why Green Valley Homeowners Choose Intelligent Design"
      },
      {
            "type": "paragraph",
            "content": "With over 46 years serving Southern Arizona, Intelligent Design has earned a 4.97-star rating from more than 23,000 satisfied customers. Our commitment to quality workmanship and timely service makes us a trusted name in Green Valley and the greater Tucson area."
      },
      {
            "type": "paragraph",
            "content": "We stand behind all HVAC and AC services with strong warranty coverage on parts and labor. Our team of 52 licensed technicians undergoes continual training to stay current on industry advancements, ensuring your home\u2019s comfort system performs flawlessly."
      },
      {
            "type": "heading",
            "heading": "Serving the Green Valley Community",
            "level": 2,
            "content": "Serving the Green Valley Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving homes near Historic Canoa Ranch, Pima County, the Titan Missile Museum, Tumacacori National Historical Park, and Desert Meadows Park. We\u2019re honored to support residents who enjoy local favorites like Garage Sports Bar, JoJo's Restaurant, Tito and Pep, and Cotton Restaurant. Intelligent Design is your local HVAC partner, ready to keep your home cool and comfortable."
      },
      {
            "type": "cta",
            "heading": "Experience the Best HVAC & AC Service in Green Valley",
            "content": "Don\u2019t let the Arizona heat get the best of your home. Call Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for trusted HVAC and AC solutions today.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: hvacLocationFAQs,
  commonQuestions: getRefinementQuestions('HVAC & AC', 'Green Valley'),
};
