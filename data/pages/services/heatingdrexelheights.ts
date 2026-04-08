// Optimized Heating page for Drexel Heights - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { heatingLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const heatingdrexelheightsData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in Drexel Heights, AZ | Call (520) 333-2665",
  description: "Expert heating services in Drexel Heights, AZ. Reliable repairs, installations & maintenance. Call Intelligent Design at (520) 333-2665 today.",
  slug: "heating-drexel-heights",
  
  // Hero Section
  h1: "Heating Services in Drexel Heights, AZ",
  h2Subheading: "Efficient Heating Repair, Installation & Maintenance for Your Tucson Home",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | 4.97-Star Rated",
  heroImage: "/generated_images/Heating_tech_diagnostic_testing_13e9c3f9.webp",
  heroImageAlt: "Professional heating technician providing expert service in Drexel Heights, Arizona",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "Rapid 68-Minute Response Time",
    "description": "We prioritize your comfort with an average response time under 70 minutes."
  },
  {
    "title": "Advanced Heating Equipment",
    "description": "We service and install high-efficiency furnaces and heat pumps built for desert climates."
  },
  {
    "title": "Comprehensive Heating Services",
    "description": "From tune-ups to full heating system installations, we cover all your needs."
  },
  {
    "title": "Transparent, Competitive Pricing",
    "description": "Clear estimates with no hidden fees ensure you get value and trust."
  },
  {
    "title": "Certified, Experienced Technicians",
    "description": "52 licensed pros ready to handle complex heating challenges in Drexel Heights."
  },
  {
    "title": "Reliable Warranty Protection",
    "description": "All services backed by solid warranties to protect your investment."
  }
],
  content: {
    mainHeading: "Heating Services in Drexel Heights, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Heating Solutions Tailored for Drexel Heights Homes",
            "level": 2,
            "content": "Expert Heating Solutions Tailored for Drexel Heights Homes"
      },
      {
            "type": "paragraph",
            "content": "Intelligent Design provides specialized heating repair, installation, and maintenance services designed for the unique Southern Arizona climate. Our team understands how monsoons, hard water, and extreme heat affect your heating system\u2019s durability and efficiency."
      },
      {
            "type": "paragraph",
            "content": "We offer furnace installation suited to desert winters and heat pump servicing that ensures optimal performance year-round. Our heating tune-ups prevent breakdowns during cooler months, keeping your Drexel Heights home comfortable and energy-efficient."
      },
      {
            "type": "cta",
            "heading": "Need Reliable Heating Service in Drexel Heights?",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric for fast, expert heating repairs and installations.",
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
            "content": "With over 46 years of experience and 52 licensed technicians, Intelligent Design is the trusted choice in heating services. Our 4.97-star rating from over 23,000 reviews reflects our commitment to quality and customer satisfaction."
      },
      {
            "type": "paragraph",
            "content": "We stand behind our work with strong warranties and a promise of transparent pricing. Homeowners rely on us for dependable heating solutions that withstand Drexel Heights\u2019 harsh climate challenges."
      },
      {
            "type": "heading",
            "heading": "Serving the Drexel Heights Community",
            "level": 2,
            "content": "Serving the Drexel Heights Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving Drexel Heights and the greater Tucson area, we\u2019re familiar with local landmarks like San Xavier del Bac Mission, Valley of the Moon, Tin Town, and El Con Tower. Whether you\u2019re dining nearby at Hustle Bustle Cafe, Redbird Scratch Kitchen + Bar (Sam Hughes), Casa Madre Restaurant, or Flaps and Racks, you can trust Intelligent Design to keep your home warm and comfortable."
      },
      {
            "type": "cta",
            "heading": "Get Your Heating System Ready for Drexel Heights Winters",
            "content": "Schedule your heating repair or tune-up with Intelligent Design today and experience unmatched service.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingLocationFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'Drexel Heights'),
};
