import { useEffect } from "react";
import { Phone, BookOpen, Wind, Droplets, Sun, Zap, Home as HomeIcon, FileText, Shield, CreditCard, MapPin, CheckCircle2, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import TrustBar from "@/components/TrustBar";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import ContactCard from "@/components/ContactCard";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import heroImage from "@assets/generated_images/home_improvement_resources_and_guides_1bf33fd4.webp";

export default function Resources() {
  const pageTitle = "Home Services Resources | Expert Tips & Guides from Intelligent Design";
  const description = "Your comprehensive resource center for HVAC, plumbing, solar, electrical, and roofing information. Expert guides, tips, and advice from Tucson's most trusted home services company. Over 22,000 five-star reviews.";
  const imageUrl = `${SITE_URL}${heroImage}`;

  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.idesignac.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://www.idesignac.com/resources"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What home services resources does Intelligent Design provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design provides comprehensive educational resources covering HVAC, plumbing, solar, electrical, and roofing services. Our expert guides include maintenance checklists, buying guides, energy-saving tips, safety information, and troubleshooting advice tailored specifically for Tucson homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "How can I save money on my energy bills in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can save on energy bills by scheduling regular HVAC maintenance, upgrading to a programmable or smart thermostat, sealing ductwork, improving insulation, installing solar panels, upgrading to energy-efficient appliances, and ensuring your AC system is properly sized for your home. Our energy-saving guides provide detailed tips specific to Tucson's climate."
          }
        },
        {
          "@type": "Question",
          "name": "When should I replace my HVAC system instead of repairing it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consider replacing your HVAC system if it's over 10-15 years old, requires frequent expensive repairs, has declining efficiency, uses outdated refrigerant (R-22), or repair costs exceed 50% of replacement cost. Our HVAC replacement guides help you make informed decisions based on your specific situation."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I schedule HVAC maintenance in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Tucson's extreme climate, we recommend HVAC maintenance twice per year—spring tune-up for your AC before summer heat, and fall service for your heating system before winter. Regular maintenance extends equipment life, improves efficiency, prevents breakdowns, and maintains warranty coverage."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of solar panels in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tucson's abundant sunshine makes solar highly beneficial: significant electric bill savings (often 50-100%), federal tax credits (30% of system cost), increased home value, protection against rising utility rates, environmental benefits, and excellent return on investment. Our solar resources explain the complete installation process and financial benefits."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my water heater needs replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Signs your water heater needs replacement include: age over 10-12 years, rusty water, strange noises, leaks around the base, inconsistent water temperature, or inadequate hot water. Our water heater buying guide helps you choose between tank, tankless, and hybrid models based on your household needs."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do to prepare my home for monsoon season?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Monsoon preparation includes: roof inspection and repairs, gutter cleaning, AC system check, ensuring proper drainage around your home, trimming trees near structures, securing outdoor items, checking backup power options, and verifying sump pumps work. Our monsoon preparation guide provides a complete checklist."
          }
        },
        {
          "@type": "Question",
          "name": "How can I improve my home's indoor air quality?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Improve indoor air quality by: changing HVAC filters regularly, installing air purification systems, scheduling duct cleaning, maintaining proper humidity levels, using ventilation systems, sealing air leaks, and scheduling regular HVAC maintenance. Our air quality resources explain various solutions and their benefits."
          }
        },
        {
          "@type": "Question",
          "name": "When should I upgrade my electrical panel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upgrade your electrical panel if: your home is over 25 years old, you're adding major appliances or EV charging, breakers trip frequently, you see flickering lights, the panel feels warm, you have a fuse box instead of breakers, or you're planning home additions. Our electrical safety guides explain warning signs and upgrade benefits."
          }
        },
        {
          "@type": "Question",
          "name": "What type of roof is best for Tucson homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For Tucson's climate, tile roofs (clay or concrete) offer excellent durability and heat reflection, metal roofs provide longevity and energy efficiency, and flat roofs with reflective coating work well for modern designs. Each material has pros and cons regarding cost, lifespan, and energy efficiency. Our roofing resources help you choose the right material."
          }
        },
        {
          "@type": "Question",
          "name": "Does Intelligent Design offer financing for home improvements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer flexible financing options with competitive rates, multiple payment plans, and special promotional financing. Our financing programs make it easy to afford necessary repairs, system replacements, and energy-efficient upgrades. Visit our Financing page for current offers and application information."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Family Protection Plan and is it worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our Family Protection Plan is a comprehensive maintenance membership covering HVAC, plumbing, and electrical systems. Benefits include: priority scheduling, discounted repairs, annual tune-ups, no overtime charges, extended warranties, and peace of mind. Members save hundreds annually and experience fewer emergency breakdowns. Learn more on our Family Protection Plans page."
          }
        }
      ]
    };

    let existingFAQScript = document.querySelector('script[type="application/ld+json"]');
    if (existingFAQScript && existingFAQScript.hasAttribute('data-page-meta')) {
      existingFAQScript.remove();
    }

    const faqSchemaScript = document.createElement('script');
    faqSchemaScript.type = 'application/ld+json';
    faqSchemaScript.textContent = JSON.stringify(faqSchema);
    faqSchemaScript.setAttribute('data-page-meta', '');
    document.head.appendChild(faqSchemaScript);

    const breadcrumbSchemaScript = document.createElement('script');
    breadcrumbSchemaScript.type = 'application/ld+json';
    breadcrumbSchemaScript.textContent = JSON.stringify(breadcrumbSchema);
    breadcrumbSchemaScript.setAttribute('data-page-meta', '');
    document.head.appendChild(breadcrumbSchemaScript);

    return () => {
      document.querySelectorAll('[data-page-meta]').forEach(el => el.remove());
    };
  }, []);

  const hvacResources = [
    { title: "When to Replace vs Repair Your AC", description: "Expert guidance on making the right decision for your cooling system" },
    { title: "How to Improve Indoor Air Quality", description: "Comprehensive solutions for healthier home air in Tucson" },
    { title: "HVAC Maintenance Checklist", description: "Seasonal maintenance tasks to keep your system running efficiently" },
    { title: "Energy Saving Tips for Tucson Homes", description: "Reduce your utility bills while staying comfortable year-round" }
  ];

  const plumbingResources = [
    { title: "Common Plumbing Problems & Solutions", description: "Troubleshoot and fix frequent plumbing issues" },
    { title: "Water Heater Buying Guide", description: "Choose the perfect water heater for your household needs" },
    { title: "How to Prevent Frozen Pipes", description: "Protect your plumbing during Tucson's occasional freezes" },
    { title: "Water Conservation Tips", description: "Save water and money with smart plumbing practices" }
  ];

  const solarResources = [
    { title: "Solar Installation Process Guide", description: "Step-by-step overview of going solar in Tucson" },
    { title: "Understanding Solar Tax Credits", description: "Maximize your savings with federal and state incentives" },
    { title: "Solar Panel Maintenance Guide", description: "Keep your solar investment performing at peak efficiency" },
    { title: "Is Solar Right for Your Home?", description: "Determine if solar makes financial sense for you" }
  ];

  const electricalResources = [
    { title: "Electrical Safety Tips", description: "Essential safety practices for your home electrical system" },
    { title: "When to Upgrade Your Electrical Panel", description: "Signs it's time for a panel upgrade and what to expect" },
    { title: "GENERAC Generator Buyers Guide", description: "Choose the right backup power solution for your home" },
    { title: "Energy Efficiency Guide", description: "Electrical upgrades that reduce energy consumption" }
  ];

  const roofingResources = [
    { title: "Roof Inspection Checklist", description: "What to look for during regular roof inspections" },
    { title: "Choosing the Right Roof Material", description: "Compare roofing options for Tucson's unique climate" },
    { title: "When to Replace Your Roof", description: "Signs your roof needs replacement vs repair" },
    { title: "Monsoon Preparation Guide", description: "Protect your roof and home during monsoon season" }
  ];

  const companyResources = [
    {
      title: "Financing Options",
      description: "Flexible payment plans for your home improvement projects",
      icon: CreditCard,
      link: "/financing"
    },
    {
      title: "Family Protection Plans",
      description: "Comprehensive maintenance memberships for peace of mind",
      icon: Shield,
      link: "/family-protection-plans"
    },
    {
      title: "Guarantees & Warranties",
      description: "Industry-leading guarantees on all our work",
      icon: CheckCircle2,
      link: "/guarantees"
    },
    {
      title: "Areas We Serve",
      description: "Professional service throughout Greater Tucson",
      icon: MapPin,
      link: "/areas-served"
    }
  ];

  return (
    <>
      <MetaHead
        title={pageTitle}
        description={description}
        canonical={`${SITE_URL}/resources`}
        openGraph={[
          { property: 'og:title', content: 'Home Services Resources | Expert Tips & Guides from Intelligent Design' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/resources` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Home improvement resources and educational guides' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Home Services Resources | Expert Tips & Guides from Intelligent Design' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Home improvement resources and educational guides' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <Header />
      <MobileFloatingActions />
      
      <main>
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Home improvement resources and educational guides"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,70%,25%)]/90 to-[hsl(215,70%,25%)]/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
              Home Services Resources
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
              Expert Tips & Guides from Intelligent Design
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Your trusted source for HVAC, plumbing, solar, electrical, and roofing information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,50%)] text-white text-lg px-8"
                asChild
                data-testid="button-schedule-service"
              >
                <a href="tel:520-333-2665">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (520) 333-2665
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8"
                asChild
                data-testid="button-schedule-online"
              >
                <Link href="#scheduler">
                  Schedule Service Online
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-[hsl(25,85%,55%)]" data-testid="icon-resources" />
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-6" data-testid="text-intro-heading">
                Your Comprehensive Resource Center
              </h2>
              <p className="text-lg text-[hsl(215,10%,40%)] mb-6">
                Welcome to Intelligent Design's Resource Center—your trusted source for expert information on HVAC, plumbing, solar, electrical, and roofing services. As Tucson's most trusted home services company with over 22,000 five-star reviews, we're committed to educating homeowners with practical guides, maintenance tips, and industry insights.
              </p>
              <p className="text-lg text-[hsl(215,10%,40%)]">
                Whether you're troubleshooting a problem, planning a major upgrade, or simply want to maintain your home more effectively, our resource library provides the expert knowledge you need to make informed decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Wind className="h-12 w-12 mx-auto mb-4 text-[hsl(215,70%,25%)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="text-hvac-resources-heading">
                HVAC Resources
              </h2>
              <p className="text-lg text-[hsl(215,10%,40%)] max-w-3xl mx-auto">
                Expert guidance for heating, cooling, and air quality systems in Tucson's extreme climate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {hvacResources.map((resource, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-hvac-resource-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(215,70%,25%)]">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[hsl(215,10%,40%)] italic">Coming soon - In-depth guide with expert tips and recommendations</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,50%)] text-white"
                asChild
                data-testid="button-hvac-services"
              >
                <Link href="/ac-service-tucson">
                  View HVAC Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Droplets className="h-12 w-12 mx-auto mb-4 text-[hsl(215,70%,25%)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="text-plumbing-resources-heading">
                Plumbing Resources
              </h2>
              <p className="text-lg text-[hsl(215,10%,40%)] max-w-3xl mx-auto">
                Comprehensive plumbing information for homeowners and businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {plumbingResources.map((resource, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-plumbing-resource-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(215,70%,25%)]">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[hsl(215,10%,40%)] italic">Coming soon - Expert plumbing advice and solutions</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,50%)] text-white"
                asChild
                data-testid="button-plumbing-services"
              >
                <Link href="/plumbing-maintenance-tucson">
                  View Plumbing Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Sun className="h-12 w-12 mx-auto mb-4 text-[hsl(215,70%,25%)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="text-solar-resources-heading">
                Solar Resources
              </h2>
              <p className="text-lg text-[hsl(215,10%,40%)] max-w-3xl mx-auto">
                Everything you need to know about going solar in sunny Tucson
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {solarResources.map((resource, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-solar-resource-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(215,70%,25%)]">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[hsl(215,10%,40%)] italic">Coming soon - Complete solar energy information</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,50%)] text-white"
                asChild
                data-testid="button-solar-services"
              >
                <Link href="/residential-solar-installation-tucson">
                  View Solar Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Zap className="h-12 w-12 mx-auto mb-4 text-[hsl(215,70%,25%)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="text-electrical-resources-heading">
                Electrical Resources
              </h2>
              <p className="text-lg text-[hsl(215,10%,40%)] max-w-3xl mx-auto">
                Essential electrical safety and upgrade information for your home
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {electricalResources.map((resource, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-electrical-resource-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(215,70%,25%)]">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[hsl(215,10%,40%)] italic">Coming soon - Critical electrical guidance and tips</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,50%)] text-white"
                asChild
                data-testid="button-electrical-services"
              >
                <Link href="/electrical-repair-tucson">
                  View Electrical Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <HomeIcon className="h-12 w-12 mx-auto mb-4 text-[hsl(215,70%,25%)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="text-roofing-resources-heading">
                Roofing Resources
              </h2>
              <p className="text-lg text-[hsl(215,10%,40%)] max-w-3xl mx-auto">
                Protect your investment with expert roofing knowledge for Tucson's climate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {roofingResources.map((resource, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-roofing-resource-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-xl text-[hsl(215,70%,25%)]">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[hsl(215,10%,40%)] italic">Coming soon - Professional roofing insights</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,50%)] text-white"
                asChild
                data-testid="button-roofing-services"
              >
                <Link href="/residential-roof-repair-tucson">
                  View Roofing Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <FileText className="h-12 w-12 mx-auto mb-4 text-[hsl(25,85%,55%)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="text-company-resources-heading">
                Company Resources
              </h2>
              <p className="text-lg text-[hsl(215,10%,40%)] max-w-3xl mx-auto">
                Learn more about our services, guarantees, and customer programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyResources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card key={index} className="hover-elevate" data-testid={`card-company-resource-${index}`}>
                    <CardHeader className="text-center">
                      <Icon className="h-10 w-10 mx-auto mb-3 text-[hsl(25,85%,55%)]" />
                      <CardTitle className="text-lg text-[hsl(215,70%,25%)]">{resource.title}</CardTitle>
                      <CardDescription className="text-center">{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button 
                        variant="outline"
                        className="w-full"
                        asChild
                        data-testid={`button-company-resource-${index}`}
                      >
                        <Link href={resource.link}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[hsl(215,15%,92%)]">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-8 text-center" data-testid="text-faq-heading">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full space-y-4" data-testid="accordion-faq">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-1">
                  What home services resources does Intelligent Design provide?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Intelligent Design provides comprehensive educational resources covering HVAC, plumbing, solar, electrical, and roofing services. Our expert guides include maintenance checklists, buying guides, energy-saving tips, safety information, and troubleshooting advice tailored specifically for Tucson homeowners.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-2">
                  How can I save money on my energy bills in Tucson?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  You can save on energy bills by scheduling regular HVAC maintenance, upgrading to a programmable or smart thermostat, sealing ductwork, improving insulation, installing solar panels, upgrading to energy-efficient appliances, and ensuring your AC system is properly sized for your home. Our energy-saving guides provide detailed tips specific to Tucson's climate.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-3">
                  When should I replace my HVAC system instead of repairing it?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Consider replacing your HVAC system if it's over 10-15 years old, requires frequent expensive repairs, has declining efficiency, uses outdated refrigerant (R-22), or repair costs exceed 50% of replacement cost. Our HVAC replacement guides help you make informed decisions based on your specific situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-4">
                  How often should I schedule HVAC maintenance in Tucson?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  In Tucson's extreme climate, we recommend HVAC maintenance twice per year—spring tune-up for your AC before summer heat, and fall service for your heating system before winter. Regular maintenance extends equipment life, improves efficiency, prevents breakdowns, and maintains warranty coverage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-5">
                  What are the benefits of solar panels in Tucson?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Tucson's abundant sunshine makes solar highly beneficial: significant electric bill savings (often 50-100%), federal tax credits (30% of system cost), increased home value, protection against rising utility rates, environmental benefits, and excellent return on investment. Our solar resources explain the complete installation process and financial benefits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-6">
                  How do I know if my water heater needs replacement?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Signs your water heater needs replacement include: age over 10-12 years, rusty water, strange noises, leaks around the base, inconsistent water temperature, or inadequate hot water. Our water heater buying guide helps you choose between tank, tankless, and hybrid models based on your household needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-7">
                  What should I do to prepare my home for monsoon season?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Monsoon preparation includes: roof inspection and repairs, gutter cleaning, AC system check, ensuring proper drainage around your home, trimming trees near structures, securing outdoor items, checking backup power options, and verifying sump pumps work. Our monsoon preparation guide provides a complete checklist.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-8">
                  How can I improve my home's indoor air quality?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Improve indoor air quality by: changing HVAC filters regularly, installing air purification systems, scheduling duct cleaning, maintaining proper humidity levels, using ventilation systems, sealing air leaks, and scheduling regular HVAC maintenance. Our air quality resources explain various solutions and their benefits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-9">
                  When should I upgrade my electrical panel?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Upgrade your electrical panel if: your home is over 25 years old, you're adding major appliances or EV charging, breakers trip frequently, you see flickering lights, the panel feels warm, you have a fuse box instead of breakers, or you're planning home additions. Our electrical safety guides explain warning signs and upgrade benefits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-10">
                  What type of roof is best for Tucson homes?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  For Tucson's climate, tile roofs (clay or concrete) offer excellent durability and heat reflection, metal roofs provide longevity and energy efficiency, and flat roofs with reflective coating work well for modern designs. Each material has pros and cons regarding cost, lifespan, and energy efficiency. Our roofing resources help you choose the right material.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-11">
                  Does Intelligent Design offer financing for home improvements?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Yes! We offer flexible financing options with competitive rates, multiple payment plans, and special promotional financing. Our financing programs make it easy to afford necessary repairs, system replacements, and energy-efficient upgrades. Visit our Financing page for current offers and application information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-[hsl(215,70%,25%)] hover:text-[hsl(25,85%,55%)]" data-testid="accordion-trigger-faq-12">
                  What is a Family Protection Plan and is it worth it?
                </AccordionTrigger>
                <AccordionContent className="text-[hsl(215,10%,40%)]">
                  Our Family Protection Plan is a comprehensive maintenance membership covering HVAC, plumbing, and electrical systems. Benefits include: priority scheduling, discounted repairs, annual tune-ups, no overtime charges, extended warranties, and peace of mind. Members save hundreds annually and experience fewer emergency breakdowns. Learn more on our Family Protection Plans page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-[hsl(25,85%,55%)] hover:bg-[hsl(25,85%,50%)] text-white"
                asChild
                data-testid="button-contact-us"
              >
                <a href="tel:520-333-2665">
                  <Phone className="mr-2 h-5 w-5" />
                  Have Questions? Call (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="scheduler" className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(215,70%,25%)] mb-4" data-testid="text-scheduler-heading">
                Schedule Your Service Today
              </h2>
              <p className="text-lg text-[hsl(215,10%,40%)]">
                Book online 24/7 or call us for immediate assistance
              </p>
            </div>
            <SchedulerEmbed />
          </div>
        </section>

        <ContactCard />
      </main>

      <Footer />
    </>
  );
}
