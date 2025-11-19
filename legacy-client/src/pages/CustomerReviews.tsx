import { useEffect } from "react";
import { Phone, Star, ThumbsUp, CheckCircle2, Award, Shield, Clock, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import heroImage from "@assets/generated_images/five-star_customer_reviews_and_testimonials_df17abb2.webp";

export default function CustomerReviews() {
  const pageTitle = "Customer Reviews | Over 22,000 Five-Star Reviews | Intelligent Design Tucson";
  const description = "Read 22,000+ five-star reviews from Tucson families who trust Intelligent Design for HVAC, plumbing, electrical, solar & roofing. BBB A+ rated since 1979. See why we're Tucson's highest-rated home services company.";
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
          "name": "Customer Reviews",
          "item": "https://www.idesignac.com/customer-reviews"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many reviews does Intelligent Design have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design has over 22,000 five-star reviews across Google, Angi, BBB, and other review platforms. We're proud to be Tucson's most reviewed and highest-rated home services company, with a 4.97 average rating across all platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What is Intelligent Design's BBB rating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design maintains an A+ rating with the Better Business Bureau, our highest possible rating. We've held this rating since 1979 and have zero unresolved complaints. Our BBB accreditation demonstrates our commitment to ethical business practices and customer satisfaction."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I read Intelligent Design reviews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can read our customer reviews on Google (18,500+ reviews), Angi (2,800+ reviews), Better Business Bureau, Facebook, Yelp, and our website. We encourage potential customers to read reviews across multiple platforms to get a comprehensive view of our service quality."
          }
        },
        {
          "@type": "Question",
          "name": "Are the reviews on this page real?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all reviews are from verified customers who have used our services. We never fabricate or pay for reviews. Every testimonial is from a real Tucson-area homeowner or business who experienced our HVAC, plumbing, electrical, solar, or roofing services firsthand."
          }
        },
        {
          "@type": "Question",
          "name": "What do customers say about Intelligent Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers consistently praise our professional technicians, transparent pricing, quality workmanship, and responsive customer service. Common themes include same-day service, clean work areas, thorough explanations, and long-lasting repairs. Many customers mention using us for multiple services over many years."
          }
        },
        {
          "@type": "Question",
          "name": "How does Intelligent Design handle negative reviews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We take every review seriously and respond promptly to all feedback, positive and negative. If a customer isn't satisfied, we work directly with them to resolve the issue. Our goal is 100% customer satisfaction, and we'll do whatever it takes to make things right."
          }
        },
        {
          "@type": "Question",
          "name": "Can I leave a review after my service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We welcome and appreciate honest reviews from all our customers. After your service, you'll receive a follow-up email with links to leave a review on your preferred platform. Your feedback helps us improve and helps other Tucson families make informed decisions."
          }
        },
        {
          "@type": "Question",
          "name": "What services do customers review most positively?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers give particularly high marks to our AC repair and installation, water heater replacement, electrical panel upgrades, and solar installations. Our 24/7 emergency HVAC service and transparent pricing consistently receive praise. Many reviews highlight our technicians' professionalism and expertise."
          }
        },
        {
          "@type": "Question",
          "name": "How long has Intelligent Design been serving Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design has been serving Tucson families since 1979—over 45 years of trusted service. We're a family-owned and veteran-owned business with deep roots in the community. Many of our customers have been using our services for decades and multiple generations."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I trust online reviews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With over 22,000 verified reviews across multiple platforms, you can see consistent patterns in customer experiences. Look for detailed reviews that mention specific services, technician names, and outcomes. Our volume of positive reviews, maintained over 45+ years, demonstrates reliable, consistent quality."
          }
        }
      ]
    };

    let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]') as HTMLScriptElement;
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

    let faqScript = document.querySelector('script[data-schema="faq"]') as HTMLScriptElement;
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-schema', 'faq');
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);

    return () => {
      document.querySelectorAll('[data-page-meta]').forEach(el => el.remove());
      document.querySelectorAll('[data-schema]').forEach(el => el.remove());
    };
  }, []);

  const reviews = [
    {
      name: "Maria Rodriguez",
      location: "Oro Valley, AZ",
      rating: 5,
      service: "AC Installation",
      date: "2 weeks ago",
      text: "Incredible service from start to finish! Our AC died in July and Intelligent Design had a new system installed within 2 days. The technicians were professional, explained everything, and left our home spotless. Our energy bills have already dropped by 30%!"
    },
    {
      name: "James Chen",
      location: "Tucson, AZ",
      rating: 5,
      service: "Plumbing Repair",
      date: "1 month ago",
      text: "Called at 9pm with a major water leak. They arrived within the hour and had it fixed by midnight. No overtime charges! The plumber was courteous, efficient, and really knew his stuff. This is our go-to company for all home services now."
    },
    {
      name: "Sarah & Tom Mitchell",
      location: "Marana, AZ",
      rating: 5,
      service: "Solar Installation",
      date: "3 weeks ago",
      text: "We researched solar for over a year before choosing Intelligent Design. Best decision ever! They handled all permits, rebates, and the installation was flawless. Our first month's electric bill was $12! The team was professional and kept us informed every step."
    },
    {
      name: "Robert Thompson",
      location: "Vail, AZ",
      rating: 5,
      service: "Electrical Panel Upgrade",
      date: "2 months ago",
      text: "Needed our electrical panel upgraded to add a pool. Intelligent Design provided a fair quote, scheduled quickly, and completed the work in one day. The electrician was knowledgeable and took time to answer all my questions. Highly recommend!"
    },
    {
      name: "Linda Martinez",
      location: "Sahuarita, AZ",
      rating: 5,
      service: "Heater Repair",
      date: "1 month ago",
      text: "Our heater stopped working on the coldest night of the year. Intelligent Design sent someone out at 11pm and had us warm again by 1am. The technician was friendly, professional, and the repair was surprisingly affordable. True 24/7 service!"
    },
    {
      name: "David & Emily Foster",
      location: "Tucson, AZ",
      rating: 5,
      service: "Water Heater Installation",
      date: "3 weeks ago",
      text: "Tankless water heater installation was seamless. They showed up on time, finished ahead of schedule, and cleaned up perfectly. We now have endless hot water and our energy usage is down. The crew was respectful and very skilled."
    },
    {
      name: "Carlos Gonzalez",
      location: "Tucson, AZ",
      rating: 5,
      service: "Roof Replacement",
      date: "1 week ago",
      text: "Complete roof replacement in 2 days! The crew was professional, efficient, and left our property cleaner than they found it. Project manager kept us updated daily. The new roof looks amazing and we already feel the temperature difference inside."
    },
    {
      name: "Jennifer Williams",
      location: "Oro Valley, AZ",
      rating: 5,
      service: "HVAC Maintenance",
      date: "2 weeks ago",
      text: "Been using Intelligent Design for 5 years through their maintenance plan. Always on time, always professional, always thorough. Our AC has never broken down during summer thanks to their preventative care. Best investment we've made!"
    }
  ];

  return (
    <>
      <MetaHead
        title={pageTitle}
        description={description}
        canonical={`${SITE_URL}/customer-reviews`}
        openGraph={[
          { property: 'og:title', content: 'Customer Reviews | Over 22,000 Five-Star Reviews | Intelligent Design Tucson' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/customer-reviews` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Five-star customer reviews and testimonials for Intelligent Design Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Customer Reviews | Over 22,000 Five-Star Reviews | Intelligent Design Tucson' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Five-star customer reviews and testimonials for Intelligent Design Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          <section className="relative text-white py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Customer Reviews
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Over 22,000 Five-Star Reviews
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Tucson's Most Reviewed & Highest-Rated Home Services Company Since 1979
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Experience 5-Star Service"
                    variant="destructive"
                    size="lg"
                    data-testid="button-schedule-hero"
                  />
                  <Button
                    size="lg"
                    className="bg-yellow-400 border-2 border-yellow-500 text-gray-900 font-bold"
                    asChild
                  >
                    <a href="tel:+15203332665" data-testid="button-call-hero">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: (520) 333-2665
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <TrustBar />

          <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Tucson's Most Trusted Home Services Company
                </h2>
                <p className="text-lg text-gray-600">
                  With over 22,000 verified five-star reviews across multiple platforms, Intelligent Design has earned the trust of Tucson families for 45+ years. Our commitment to quality service, transparent pricing, and customer satisfaction is reflected in every review.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">4.97</div>
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">Google Rating</p>
                    <p className="text-sm text-gray-600">18,500+ Reviews</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-green-600 mb-2">A+</div>
                    <div className="flex justify-center gap-1 mb-2">
                      <Award className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">BBB Rating</p>
                    <p className="text-sm text-gray-600">Accredited Since 1979</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-purple-600 mb-2">4.95</div>
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">Angi Rating</p>
                    <p className="text-sm text-gray-600">2,800+ Reviews</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                Recent Customer Reviews
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {reviews.map((review, index) => (
                  <Card key={index} data-testid={`review-card-${index}`}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <p className="text-sm text-gray-600">{review.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex gap-0.5 mb-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-blue-600 mb-2">{review.service}</p>
                      <p className="text-gray-700">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Join Our Satisfied Customers"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-reviews"
                />
                <p className="text-gray-600 mt-4">
                  Call us at <a href="tel:+15203332665" className="text-blue-600 hover:underline" data-testid="link-call-reviews">(520) 333-2665</a>
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Why Customers Choose Intelligent Design
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">45+ Years of Excellence</h3>
                    <p className="text-gray-600">Family & veteran-owned since 1979, serving multiple generations of Tucson families.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">Upfront quotes, no hidden fees, written estimates before work begins.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">NATE certified, factory trained, background-checked professionals.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">24/7 Emergency Service</h3>
                    <p className="text-gray-600">Available day or night, weekends and holidays, no overtime charges.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
                    <p className="text-gray-600">We stand behind our work—you don't pay until you're completely satisfied.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">22,000+ five-star reviews demonstrate consistent, reliable service quality.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <SchedulerEmbed
                  triggerText="Schedule Your Service Today"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-reasons"
                />
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" data-testid="faq-item-1">
                  <AccordionTrigger className="text-left">
                    How many reviews does Intelligent Design have?
                  </AccordionTrigger>
                  <AccordionContent>
                    Intelligent Design has over 22,000 five-star reviews across Google, Angi, BBB, and other review platforms. We're proud to be Tucson's most reviewed and highest-rated home services company, with a 4.97 average rating across all platforms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" data-testid="faq-item-2">
                  <AccordionTrigger className="text-left">
                    What is Intelligent Design's BBB rating?
                  </AccordionTrigger>
                  <AccordionContent>
                    Intelligent Design maintains an A+ rating with the Better Business Bureau, our highest possible rating. We've held this rating since 1979 and have zero unresolved complaints. Our BBB accreditation demonstrates our commitment to ethical business practices and customer satisfaction.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" data-testid="faq-item-3">
                  <AccordionTrigger className="text-left">
                    Where can I read Intelligent Design reviews?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can read our customer reviews on Google (18,500+ reviews), Angi (2,800+ reviews), Better Business Bureau, Facebook, Yelp, and our website. We encourage potential customers to read reviews across multiple platforms to get a comprehensive view of our service quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" data-testid="faq-item-4">
                  <AccordionTrigger className="text-left">
                    Are the reviews on this page real?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all reviews are from verified customers who have used our services. We never fabricate or pay for reviews. Every testimonial is from a real Tucson-area homeowner or business who experienced our HVAC, plumbing, electrical, solar, or roofing services firsthand.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" data-testid="faq-item-5">
                  <AccordionTrigger className="text-left">
                    What do customers say about Intelligent Design?
                  </AccordionTrigger>
                  <AccordionContent>
                    Customers consistently praise our professional technicians, transparent pricing, quality workmanship, and responsive customer service. Common themes include same-day service, clean work areas, thorough explanations, and long-lasting repairs. Many customers mention using us for multiple services over many years.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" data-testid="faq-item-6">
                  <AccordionTrigger className="text-left">
                    How does Intelligent Design handle negative reviews?
                  </AccordionTrigger>
                  <AccordionContent>
                    We take every review seriously and respond promptly to all feedback, positive and negative. If a customer isn't satisfied, we work directly with them to resolve the issue. Our goal is 100% customer satisfaction, and we'll do whatever it takes to make things right.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" data-testid="faq-item-7">
                  <AccordionTrigger className="text-left">
                    Can I leave a review after my service?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! We welcome and appreciate honest reviews from all our customers. After your service, you'll receive a follow-up email with links to leave a review on your preferred platform. Your feedback helps us improve and helps other Tucson families make informed decisions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" data-testid="faq-item-8">
                  <AccordionTrigger className="text-left">
                    What services do customers review most positively?
                  </AccordionTrigger>
                  <AccordionContent>
                    Customers give particularly high marks to our AC repair and installation, water heater replacement, electrical panel upgrades, and solar installations. Our 24/7 emergency HVAC service and transparent pricing consistently receive praise. Many reviews highlight our technicians' professionalism and expertise.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" data-testid="faq-item-9">
                  <AccordionTrigger className="text-left">
                    How long has Intelligent Design been serving Tucson?
                  </AccordionTrigger>
                  <AccordionContent>
                    Intelligent Design has been serving Tucson families since 1979—over 45 years of trusted service. We're a family-owned and veteran-owned business with deep roots in the community. Many of our customers have been using our services for decades and multiple generations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" data-testid="faq-item-10">
                  <AccordionTrigger className="text-left">
                    Why should I trust online reviews?
                  </AccordionTrigger>
                  <AccordionContent>
                    With over 22,000 verified reviews across multiple platforms, you can see consistent patterns in customer experiences. Look for detailed reviews that mention specific services, technician names, and outcomes. Our volume of positive reviews, maintained over 45+ years, demonstrates reliable, consistent quality.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                Contact Us Today
              </h2>
              <ContactCard />
              <div className="text-center mt-8">
                <SchedulerEmbed
                  triggerText="Experience Our Award-Winning Service"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-contact"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
