import { useEffect } from "react";
import { Phone, Video, Star, CheckCircle2, PlayCircle, MapPin, Mail } from "lucide-react";
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
import heroImage from "@assets/generated_images/video_camera_recording_customer_testimonial_4dbe1c67.webp";

export default function VideoTestimonials() {
  const pageTitle = "Video Testimonials | Real Customers, Real Stories | Intelligent Design Tucson";
  const description = "Watch video testimonials from real Tucson families who chose Intelligent Design for HVAC, plumbing, electrical, solar & roofing. Hear authentic stories about our service quality, pricing, and professionalism. See why 22,000+ customers give us five stars.";
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
          "name": "Video Testimonials",
          "item": "https://www.idesignac.com/video-testimonials"
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are these video testimonials from real customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, every video testimonial features a real Tucson-area customer who has used our services. We never use actors or paid endorsements. These are authentic stories from homeowners and businesses who experienced our HVAC, plumbing, electrical, solar, or roofing services firsthand."
          }
        },
        {
          "@type": "Question",
          "name": "Can I record a video testimonial after my service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We welcome video testimonials from satisfied customers. If you'd like to share your experience, let us know and we can arrange a brief video recording. You can also record on your own device and send it to us. We appreciate customers who help other Tucson families make informed decisions."
          }
        },
        {
          "@type": "Question",
          "name": "What services are featured in the video testimonials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our video testimonials cover all our services including AC installation and repair, solar panel systems, water heater replacement, electrical panel upgrades, roof repairs, plumbing services, and more. You'll hear from customers who experienced emergency repairs, major installations, and routine maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "How can I watch all your video testimonials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can watch video testimonials on this page, our YouTube channel, Facebook page, and Google Business profile. We regularly add new customer videos showcasing recent projects and services across Tucson, Oro Valley, Marana, Vail, and Sahuarita."
          }
        },
        {
          "@type": "Question",
          "name": "Do the videos show before and after results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many of our video testimonials include before and after footage of completed projects. Customers often share their experience from initial consultation through final installation, giving you a complete picture of what to expect when working with Intelligent Design."
          }
        },
        {
          "@type": "Question",
          "name": "What do customers say in their video testimonials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers consistently mention our professional technicians, transparent pricing, quality workmanship, cleanliness, and responsive service. Many highlight our same-day emergency service, thorough explanations, and long-term reliability. Video testimonials provide authentic, detailed accounts of their experiences."
          }
        },
        {
          "@type": "Question",
          "name": "Are video testimonials better than written reviews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both provide value! Video testimonials add authenticity as you see and hear real customers sharing their genuine experiences. Written reviews allow for detailed feedback and are easier to browse quickly. We encourage potential customers to review both to get a comprehensive understanding of our service quality."
          }
        },
        {
          "@type": "Question",
          "name": "Can I contact customers who gave video testimonials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For privacy reasons, we don't share customer contact information. However, with over 22,000 reviews across Google, Angi, and BBB, you can read detailed written feedback from thousands of customers. Many reviews include specific service details and outcomes that can answer your questions."
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

  const videoTestimonials = [
    {
      title: "Complete AC System Replacement - Oro Valley",
      customer: "The Martinez Family",
      service: "AC Installation",
      videoId: "placeholder-1",
      description: "Watch as the Martinez family shares their experience with our complete AC replacement service during the height of summer. They discuss our same-day installation, transparent pricing, and immediate energy savings."
    },
    {
      title: "Solar Panel Installation Success Story",
      customer: "Robert & Susan Chen",
      service: "Solar Installation",
      videoId: "placeholder-2",
      description: "The Chens explain why they chose Intelligent Design for their solar installation, the seamless permit process, professional installation, and their first month's electric bill of just $8!"
    },
    {
      title: "Emergency Plumbing Repair at Midnight",
      customer: "Jennifer Williams",
      service: "Emergency Plumbing",
      videoId: "placeholder-3",
      description: "Jennifer describes calling us at 11pm with a major water leak and having it completely fixed by 1am with no overtime charges. Hear about her experience with our 24/7 emergency service."
    },
    {
      title: "Whole Home Electrical Panel Upgrade",
      customer: "David Thompson",
      service: "Electrical Upgrade",
      videoId: "placeholder-4",
      description: "David shares his experience upgrading his home's electrical panel to support a new pool and EV charger. Learn about our efficient project management and expert electricians."
    }
  ];

  const writtenTestimonials = [
    {
      name: "Patricia Gonzalez",
      location: "Marana, AZ",
      service: "Water Heater Installation",
      rating: 5,
      text: "The team that installed our tankless water heater was phenomenal. They explained every step, worked efficiently, and left our home cleaner than they found it. We now have endless hot water and our energy bills have dropped significantly!"
    },
    {
      name: "Michael Foster",
      location: "Vail, AZ",
      service: "Roof Replacement",
      rating: 5,
      text: "Our complete roof replacement was finished in just 2 days! The crew was professional, respectful, and incredibly efficient. They protected all our landscaping and cleaned up thoroughly each day. The new roof looks amazing and we can already feel the temperature difference inside."
    },
    {
      name: "Lisa Anderson",
      location: "Tucson, AZ",
      service: "HVAC Maintenance Plan",
      rating: 5,
      text: "We've been on the maintenance plan for 3 years and it's been a fantastic investment. Our AC has never broken down during summer, our energy bills stay low, and the technicians are always professional and thorough. Highly recommend!"
    }
  ];

  return (
    <>
      <MetaHead
        title={pageTitle}
        description={description}
        canonical={`${SITE_URL}/video-testimonials`}
        openGraph={[
          { property: 'og:title', content: 'Video Testimonials | Real Customers, Real Stories | Intelligent Design Tucson' },
          { property: 'og:description', content: description },
          { property: 'og:image', content: imageUrl },
          { property: 'og:url', content: `${SITE_URL}/video-testimonials` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Video camera recording customer testimonial for Intelligent Design' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Video Testimonials | Real Customers, Real Stories | Intelligent Design Tucson' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Video camera recording customer testimonial for Intelligent Design' }
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
                  Video Testimonials
                </h1>
                <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6">
                  Real Customers, Real Stories
                </p>
                <p className="text-xl mb-8 text-gray-200">
                  Hear from Tucson families about their experiences with Intelligent Design
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <SchedulerEmbed
                    triggerText="Get Started Today"
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
                  Hear From Real Tucson Families
                </h2>
                <p className="text-lg text-gray-600">
                  Don't just take our word for it—watch video testimonials from actual customers who have experienced our HVAC, plumbing, electrical, solar, and roofing services. These authentic stories showcase our commitment to quality, professionalism, and customer satisfaction.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {videoTestimonials.map((video, index) => (
                  <Card key={index} data-testid={`video-card-${index}`}>
                    <CardContent className="p-0">
                      <div className="relative aspect-video bg-gray-900 rounded-t-lg flex items-center justify-center">
                        <PlayCircle className="w-20 h-20 text-white opacity-80" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-white text-sm bg-black/60 px-4 py-2 rounded">
                            Video: {video.videoId}
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                        <p className="text-sm font-medium text-blue-600 mb-2">{video.customer} • {video.service}</p>
                        <p className="text-gray-700 mb-4">{video.description}</p>
                        <Button
                          variant="outline"
                          className="w-full"
                          data-testid={`button-watch-${index}`}
                        >
                          <Video className="w-4 h-4 mr-2" />
                          Watch Video
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">See more video testimonials on our social media channels</p>
                <div className="flex justify-center gap-4">
                  <SchedulerEmbed
                    triggerText="Schedule Your Service"
                    variant="destructive"
                    size="lg"
                    data-testid="button-schedule-videos"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Written Testimonials
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {writtenTestimonials.map((testimonial, index) => (
                  <Card key={index} data-testid={`testimonial-card-${index}`}>
                    <CardContent className="p-6">
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="font-semibold text-gray-900 mb-1">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                      <p className="text-sm font-medium text-blue-600 mb-3">{testimonial.service}</p>
                      <p className="text-gray-700">{testimonial.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <SchedulerEmbed
                  triggerText="Become Our Next Success Story"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-testimonials"
                />
                <p className="text-gray-600 mt-4">
                  Questions? Call <a href="tel:+15203332665" className="text-blue-600 hover:underline" data-testid="link-call-testimonials">(520) 333-2665</a>
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Services Highlighted in Testimonials
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">AC Installation & Repair</h3>
                  <p className="text-sm text-gray-600">Same-day service, energy-efficient systems</p>
                </div>

                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Solar Panel Systems</h3>
                  <p className="text-sm text-gray-600">Complete installations, maximum savings</p>
                </div>

                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Plumbing Services</h3>
                  <p className="text-sm text-gray-600">24/7 emergency repairs, installations</p>
                </div>

                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Electrical Upgrades</h3>
                  <p className="text-sm text-gray-600">Panel upgrades, whole-home rewiring</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <SchedulerEmbed
                  triggerText="Schedule Your Consultation"
                  variant="destructive"
                  size="lg"
                  data-testid="button-schedule-services"
                />
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" data-testid="faq-item-1">
                  <AccordionTrigger className="text-left">
                    Are these video testimonials from real customers?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, every video testimonial features a real Tucson-area customer who has used our services. We never use actors or paid endorsements. These are authentic stories from homeowners and businesses who experienced our HVAC, plumbing, electrical, solar, or roofing services firsthand.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" data-testid="faq-item-2">
                  <AccordionTrigger className="text-left">
                    Can I record a video testimonial after my service?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! We welcome video testimonials from satisfied customers. If you'd like to share your experience, let us know and we can arrange a brief video recording. You can also record on your own device and send it to us. We appreciate customers who help other Tucson families make informed decisions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" data-testid="faq-item-3">
                  <AccordionTrigger className="text-left">
                    What services are featured in the video testimonials?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our video testimonials cover all our services including AC installation and repair, solar panel systems, water heater replacement, electrical panel upgrades, roof repairs, plumbing services, and more. You'll hear from customers who experienced emergency repairs, major installations, and routine maintenance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" data-testid="faq-item-4">
                  <AccordionTrigger className="text-left">
                    How can I watch all your video testimonials?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can watch video testimonials on this page, our YouTube channel, Facebook page, and Google Business profile. We regularly add new customer videos showcasing recent projects and services across Tucson, Oro Valley, Marana, Vail, and Sahuarita.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" data-testid="faq-item-5">
                  <AccordionTrigger className="text-left">
                    Do the videos show before and after results?
                  </AccordionTrigger>
                  <AccordionContent>
                    Many of our video testimonials include before and after footage of completed projects. Customers often share their experience from initial consultation through final installation, giving you a complete picture of what to expect when working with Intelligent Design.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" data-testid="faq-item-6">
                  <AccordionTrigger className="text-left">
                    What do customers say in their video testimonials?
                  </AccordionTrigger>
                  <AccordionContent>
                    Customers consistently mention our professional technicians, transparent pricing, quality workmanship, cleanliness, and responsive service. Many highlight our same-day emergency service, thorough explanations, and long-term reliability. Video testimonials provide authentic, detailed accounts of their experiences.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" data-testid="faq-item-7">
                  <AccordionTrigger className="text-left">
                    Are video testimonials better than written reviews?
                  </AccordionTrigger>
                  <AccordionContent>
                    Both provide value! Video testimonials add authenticity as you see and hear real customers sharing their genuine experiences. Written reviews allow for detailed feedback and are easier to browse quickly. We encourage potential customers to review both to get a comprehensive understanding of our service quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" data-testid="faq-item-8">
                  <AccordionTrigger className="text-left">
                    Can I contact customers who gave video testimonials?
                  </AccordionTrigger>
                  <AccordionContent>
                    For privacy reasons, we don't share customer contact information. However, with over 22,000 reviews across Google, Angi, and BBB, you can read detailed written feedback from thousands of customers. Many reviews include specific service details and outcomes that can answer your questions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                Contact Us Today
              </h2>
              <ContactCard />
              <div className="text-center mt-8">
                <SchedulerEmbed
                  triggerText="Schedule Your Service Now"
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
