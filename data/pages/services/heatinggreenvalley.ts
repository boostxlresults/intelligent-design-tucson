// Optimized Heating page for Green Valley - SERP API enriched
import type { ServicePageData } from '@/types/services';
import { heatingLocationFAQs } from '@/data/faqs/hvac';
import { getRefinementQuestions } from '@/data/faqs/refinementQuestions';

export const heatinggreenvalleyData: ServicePageData = {
  // SEO & Meta
  title: "Heating Services in Green Valley, AZ | Call (520) 333-2665",
  description: "Trusted heating repair, installation & maintenance in Green Valley, AZ. Fast service by experts. Call Intelligent Design today!",
  slug: "heating-green-valley",
  
  // Hero Section
  h1: "Heating Services in Green Valley, AZ",
  h2Subheading: "Expert Heating Repair, Installation & Maintenance Tailored for Southern Arizona",
  tagline: "Fast Response | Licensed Experts | 46+ Years Experience | Transparent Pricing | 4.97-Star Rating | Warranty Backed",
  heroImage: "/generated_images/Heating_tech_heat_pump_service_fdc5a775.webp",
  heroImageAlt: "Professional heating technician servicing heat pump system in Green Valley retirement community",
  
  // Service Info
  serviceName: "Heating",
  category: "HVAC",
  
  // Content
  highlights: [
  {
    "title": "68-Minute Average Response",
    "description": "Rapid heating repairs to keep your home comfortable during chilly desert nights."
  },
  {
    "title": "Advanced Heating Equipment",
    "description": "Expertise in furnaces, heat pumps, and energy-efficient systems for lasting warmth."
  },
  {
    "title": "Comprehensive Heating Services",
    "description": "From tune-ups to installations, we handle all heating needs with precision."
  },
  {
    "title": "Transparent Pricing",
    "description": "Clear, upfront quotes with no hidden fees ensures honest service every time."
  },
  {
    "title": "Certified HVAC Technicians",
    "description": "52 licensed pros with 46+ years experience ready to serve Green Valley residents."
  },
  {
    "title": "Reliable Warranty Coverage",
    "description": "Protection on parts and labor for peace of mind after every heating service."
  }
],
  content: {
    mainHeading: "Heating Services in Green Valley, AZ",
    sections: [
      {
            "type": "heading",
            "heading": "Expert Heating Solutions for Green Valley Homes",
            "level": 2,
            "content": "Expert Heating Solutions for Green Valley Homes"
      },
      {
            "type": "paragraph",
            "content": "Living in Green Valley means experiencing cool desert evenings and sudden temperature drops. Our heating services ensure your furnace or heat pump operates efficiently, providing consistent warmth even during chilly monsoon nights. We specialize in diagnosing issues caused by Southern Arizona\u2019s hard water and dust, which can impact heating system performance."
      },
      {
            "type": "paragraph",
            "content": "Whether you need a heating tune-up, furnace installation, or heat pump repair, our licensed technicians use advanced diagnostic tools to deliver precise solutions. Regular maintenance combats wear from extreme heat and dust storms, extending your system\u2019s lifespan and improving energy efficiency."
      },
      {
            "type": "cta",
            "heading": "Schedule Your Heating Service Today",
            "content": "Call Intelligent Design to experience fast, reliable heating repair and installation tailored for Green Valley\u2019s unique climate.",
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
            "content": "With over 46 years serving the greater Tucson area, Intelligent Design has earned a 4.97-star Google rating from 23,000+ reviews. Our commitment to transparent pricing and honest workmanship builds lasting trust with Green Valley homeowners."
      },
      {
            "type": "paragraph",
            "content": "Every heating service we provide includes warranty coverage on parts and labor, ensuring your investment is protected. Our skilled technicians bring unparalleled expertise to each job, backed by ongoing training and certifications tailored to Southern Arizona\u2019s HVAC challenges."
      },
      {
            "type": "heading",
            "heading": "Serving the Green Valley Community",
            "level": 2,
            "content": "Serving the Green Valley Community"
      },
      {
            "type": "paragraph",
            "content": "We proudly serve families near landmarks like Historic Canoa Ranch, Titan Missile Museum, Tumacacori National Historical Park, and Desert Meadows Park. After a day exploring local sites or dining at Garage Sports Bar, JoJo's Restaurant, Tito and Pep, or Cotton Restaurant, trust Intelligent Design to keep your home cozy year-round."
      },
      {
            "type": "cta",
            "heading": "Get Reliable Heating Service in Green Valley",
            "content": "Contact Intelligent Design Air Conditioning, Plumbing, Solar, & Electric now for expert heating repair, maintenance, and installation.",
            "buttonText": "Call (520) 333-2665",
            "buttonLink": "tel:+15203332665"
      }
]
  },
  faqs: heatingLocationFAQs,
  commonQuestions: getRefinementQuestions('Heating', 'Green Valley'),
};
