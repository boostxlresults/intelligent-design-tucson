import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, CheckCircle2, Star, Shield, Users, Clock, Award, Phone, Heart, Flag } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';
import { whyChooseFAQs } from '@/data/faqs/general';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Intelligent Design | Tucson\'s Most Trusted Home Services Company',
  description: 'Discover why over 23,000 Tucson families choose Intelligent Design for HVAC, plumbing, solar, electrical & roofing. Family & veteran-owned, serving Tucson since 1979. BBB A+ rated. 80+ professional technicians serving Greater Tucson 24/7.',
  canonicalUrl: 'https://www.idesignac.com/about',
  keywords: ['About Intelligent Design', 'Tucson home services', 'family owned', 'veteran owned', 'HVAC company', 'plumbing company', 'BBB A+'],
});

const highlights = [
  {
    icon: Star,
    title: '23,000+ Five-Star Reviews',
    description: 'Trusted by thousands of Tucson families',
  },
  {
    icon: Shield,
    title: 'BBB A+ Rated',
    description: 'Excellence in customer service',
  },
  {
    icon: Users,
    title: '80+ Technicians',
    description: 'Fully licensed and certified professionals',
  },
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Always here when you need us',
  },
  {
    icon: Heart,
    title: 'Family-Owned',
    description: '46+ years serving Tucson since 1979',
  },
  {
    icon: Flag,
    title: 'Veteran-Owned',
    description: 'Military precision and integrity',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section - Uses Next.js Image for LCP optimization */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image with Next.js Image for LCP optimization */}
        <div className="absolute inset-0">
          <Image
            src="/generated_images/happy_Tucson_family_with_technician_74923601.webp"
            alt="Happy Tucson family with Intelligent Design technician"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[rgba(13,45,122,0.85)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
              Why Tucson Chooses Intelligent Design
            </h1>
            <p className="text-xl text-white/90 mb-8" data-testid="text-hero-description">
              Family & Veteran-Owned • BBB A+ Rated • 23,000+ Five-Star Reviews
            </p>
            <div className="flex flex-wrap gap-4">
              <SchedulerEmbed 
                triggerText="Schedule Service"
                variant="destructive"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                data-testid="button-schedule-hero"
              />
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
                data-testid="button-call-hero"
              >
                <a href="tel:5203332665">Call (520) 333-2665</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground" data-testid="link-breadcrumb-home">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground" data-testid="text-breadcrumb-about">
              About Us
            </span>
          </div>
        </div>
      </nav>

      {/* Highlights Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-4 text-center" data-testid={`card-highlight-${index}`}>
                <highlight.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm mb-1">{highlight.title}</h3>
                <p className="text-xs text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-section-title">
            Why We're Tucson's Most Trusted Home Services Company
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              With 46+ years of combined home services expertise, Intelligent Design has been the name Tucson families trust for HVAC, plumbing, electrical, solar, and roofing services. Founded in 2011 by U.S. Marine Corps veteran Andrew Dobbins, our company united with Wood's Plumbing (established 1979) in 2022 to create Southern Arizona's most comprehensive home services provider. As a family and veteran-owned company, we understand what matters most to homeowners—reliability, honesty, and exceptional service.
            </p>
            <p>
              With over 23,000 five-star reviews and a BBB A+ rating, our reputation speaks for itself. Our team of 80+ highly trained technicians is available 24/7 to serve you, and we're the only company in Tucson offering all five major trades under one roof.
            </p>
            <p>
              We're not just contractors—we're your neighbors. We live here, work here, and are committed to making Tucson homes more comfortable, efficient, and valuable. When you choose Intelligent Design, you're choosing a company that treats every customer like family.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6" data-testid="text-what-sets-us-apart">
            What Sets Us Apart
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6" data-testid="card-all-trades">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                All Five Trades Under One Roof
              </h3>
              <p className="text-muted-foreground">
                HVAC, plumbing, electrical, solar, and roofing—one company you can trust for all your home service needs. No more juggling multiple contractors.
              </p>
            </Card>
            
            <Card className="p-6" data-testid="card-same-day">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                Same-Day Service Available
              </h3>
              <p className="text-muted-foreground">
                With 80+ technicians, we can often provide same-day service throughout Greater Tucson. When you need help fast, we're there.
              </p>
            </Card>
            
            <Card className="p-6" data-testid="card-satisfaction">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                100% Satisfaction Guaranteed
              </h3>
              <p className="text-muted-foreground">
                You don't pay until you're completely satisfied with our work. That's our promise to every customer, every time.
              </p>
            </Card>
            
            <Card className="p-6" data-testid="card-certified">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                Licensed & Certified Professionals
              </h3>
              <p className="text-muted-foreground">
                Every technician is background-checked, drug-tested, and continuously trained on the latest technologies and best practices.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6" data-testid="text-our-story">
            Our Story: Family & Veteran-Owned Excellence
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <h3 className="text-xl font-bold text-foreground">Founded on Family Values</h3>
            <p>
              Intelligent Design was founded in 2011 by U.S. Marine Corps veteran Andrew Dobbins, committed to bringing honest, reliable home services to Tucson. In 2022, our company united with Wood's Plumbing—a trusted Tucson institution since 1979—creating a powerhouse with 46+ years of combined home services expertise. As a veteran-owned business, we bring military precision, discipline, and integrity to every job we complete.
            </p>
            <p>
              What started as a small HVAC company has grown into Tucson's most comprehensive home services provider, but we've never forgotten our roots. We still treat every customer like family, and every home like our own.
            </p>
            
            <h3 className="text-xl font-bold text-foreground mt-8">Growth Built on Trust</h3>
            <p>
              From day one, we've focused on earning trust through exceptional service. Our 23,000+ five-star reviews didn't happen by accident—they're the result of doing the right thing, every time, for every customer.
            </p>
            <p>
              Today, our team of 80+ technicians serves thousands of Tucson families across all five major trades: HVAC, plumbing, electrical, solar, and roofing. This makes us unique in Southern Arizona—one company you can trust for all your home service needs.
            </p>
            
            <h3 className="text-xl font-bold text-foreground mt-8">Commitment to Excellence</h3>
            <p>
              We don't just meet industry standards—we exceed them. Our comprehensive certifications, ongoing training programs, and rigorous quality control demonstrate our commitment to the highest quality work across all trades.
            </p>
            <p>
              Every technician on our team is background-checked, drug-tested, and continuously trained on the latest technologies and best practices. We invest in our people because we know that great service starts with great people.
            </p>
            
            <h3 className="text-xl font-bold text-foreground mt-8">Community First</h3>
            <p>
              We're more than a business—we're part of the Tucson community. We sponsor local youth sports, support veteran organizations, and give back to the families who have supported us.
            </p>
            <p>
              When you choose Intelligent Design, you're supporting a local business that reinvests in our community. We're here for the long haul, and we're committed to making Tucson a better place to live.
            </p>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-special-programs">
            Special Programs & Offers
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're committed to supporting our community with exclusive programs for new homeowners and real estate professionals.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover-elevate" data-testid="card-new-homebuyer">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">New Homebuyer Offer</h3>
              <p className="text-muted-foreground mb-4">Special savings and priority service for new homeowners in Tucson.</p>
              <Button asChild variant="outline" data-testid="button-new-homebuyer">
                <Link href="/new-homebuyer-offer">Learn More</Link>
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover-elevate" data-testid="card-realtors">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">REALTORS® Offer</h3>
              <p className="text-muted-foreground mb-4">Partner with us to provide your clients with exceptional home services.</p>
              <Button asChild variant="outline" data-testid="button-realtors">
                <Link href="/realtors-offer">Learn More</Link>
              </Button>
            </Card>
            
            <Card className="p-6 text-center hover-elevate" data-testid="card-protection-plans">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Family Protection Plans</h3>
              <p className="text-muted-foreground mb-4">Comprehensive coverage for all your home's major systems.</p>
              <Button asChild variant="outline" data-testid="button-protection-plans">
                <Link href="/family-protection-plans">Learn More</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8" data-testid="text-faqs-title">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {whyChooseFAQs.faqs.slice(0, 5).map((faq, index) => (
              <Card key={index} className="p-6" data-testid={`card-faq-${index}`}>
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-cta-title">
            Ready to Experience the Intelligent Design Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied Tucson families who trust us for all their home service needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SchedulerEmbed 
              triggerText="Schedule Service Now"
              variant="destructive"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              data-testid="button-schedule-cta"
            />
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 border-white"
              data-testid="button-call-cta"
            >
              <a href="tel:5203332665">
                <Phone className="w-5 h-5 mr-2" />
                (520) 333-2665
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
