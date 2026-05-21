// Optimized Electrical page for Tucson - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { electricalRepairFAQs } from '@/data/faqs/electrical';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const electricaltucsonData: ServicePageData = {
  // SEO & Meta
  title: "Electrician Tucson AZ | Licensed & Insured | Same-Day Service | Intelligent Design",
  description: "Licensed electricians in Tucson with 23,000+ five-star reviews. Panel upgrades, EV chargers, rewiring, repairs & installations. Same-day service, upfront pricing, no overtime charges. Call (520) 333-2665.",
  slug: "electrical-tucson",
  
  // Hero Section
  h1: "Reliable Electrical Services in Tucson, AZ",
  h2Subheading: "Skilled Electricians Handling Repairs, Upgrades & Installations",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | Comprehensive Services | Warranty Included",
  heroImage: "/generated_images/Electrical_service_work_e21d02b3.webp",
  heroImageAlt: "Professional electrician providing expert electrical service in Tucson, Arizona",
  
  // Service Info
  serviceName: "Electrical",
  category: "Electrical",
  
  // Content
  highlights: [
  {
    "title": "Rapid Response Time",
    "description": "Average 68-minute response to electrical emergencies across Tucson and nearby areas."
  },
  {
    "title": "Advanced Equipment & Expertise",
    "description": "52 licensed technicians use state-of-the-art tools for precise diagnostics and repairs."
  },
  {
    "title": "Wide Range of Services",
    "description": "From panel upgrades and EV charger installs to whole-home rewiring and lighting solutions."
  },
  {
    "title": "Competitive & Transparent Pricing",
    "description": "Upfront estimates with no hidden fees, ensuring affordable electrical solutions."
  },
  {
    "title": "Experienced, Licensed Team",
    "description": "46+ years of industry experience with fully certified electricians you can trust."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "All electrical work backed by solid warranties for lasting peace of mind."
  }
],
  content: {
    mainHeading: "Reliable Electrical Services in Tucson, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Comprehensive Electrical Services Tailored for Tucson Homes",
            "level": 2,
            "content": "Comprehensive Electrical Services Tailored for Tucson Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Tucson means dealing with unique electrical challenges caused by extreme heat, monsoon storms, and hard water corrosion. Our expert electricians specialize in panel upgrades designed to handle increased loads from air conditioning units and EV chargers, ensuring your home\u2019s electrical system remains safe and efficient. We also provide whole-home rewiring to replace outdated wiring vulnerable to Tucson\u2019s harsh climate."
      },
      {
            "type": "paragraph",
            "content": "From installing energy-efficient LED lighting to adding extra outlets in high-demand areas, we customize every service to meet your lifestyle. Whether you need fast repairs after a monsoon-related outage or want to future-proof your home with the latest electrical technologies, Intelligent Design delivers dependable solutions with lasting quality."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Electrical Service Today",
            "content": "Call (520) 333-2665 to connect with Tucson\u2019s trusted electrical experts. Fast, reliable service is just a phone call away.",
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
            "content": "With a 4.97-star Google rating and over 23,000 reviews, our reputation speaks volumes about our quality and customer care. Tucson homeowners trust us for transparent pricing, expert workmanship, and timely service. Our licensed electricians bring 46+ years of combined experience to every job, ensuring your electrical system is safe and code-compliant."
      },
      {
            "type": "paragraph",
            "content": "We stand behind our work with robust warranties that protect your investment. Whether it\u2019s a panel upgrade or a complex EV charger installation, our commitment to excellence guarantees peace of mind for Tucson residents."
      },
      {
            "type": "heading",
            "heading": "Serving the Tucson Community",
            "level": 2,
            "content": "Serving the Tucson Community"
      },
      {
            "type": "paragraph",
            "content": "Proudly serving neighborhoods around Tucson\u2019s iconic landmarks like Fort Lowell Museum, Tin Town, Valley of the Moon, and Old Tucson, we understand local needs. Our team supports the community near popular spots such as Redbird Scratch Kitchen + Bar in Sam Hughes, Casa Madre Restaurant, Perche' No, and Caf\u00e9 \u00e0 La C'Art. We bring local knowledge and personalized service to every electrical project."
      },
      {
            "type": "cta",
            "heading": "Get Expert Electrical Help in Tucson Now",
            "content": "Don\u2019t let electrical issues disrupt your home. Contact Intelligent Design for fast, reliable service by calling (520) 333-2665 today.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: electricalRepairFAQs,
  commonQuestions: getRefinementQuestions('Electrical', 'Tucson'),
};
