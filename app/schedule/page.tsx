import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Calendar, Phone, Mail, MessageSquare, Clock, MapPin, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Customer Service & Scheduling | Contact Intelligent Design Tucson',
  description: 'Customer Service & Scheduling Made Easy! Over 22,000 Five-Star Reviews. BBB A+ Rated. Free Estimates. 100% Satisfaction Guaranteed!',
  canonicalUrl: 'https://intelligentdesignac.com/schedule',
  keywords: ['schedule service', 'customer service', 'contact us', 'book appointment', 'HVAC scheduling Tucson', 'emergency service'],
});

export default function SchedulePage() {
  const contactMethods = [
    {
      icon: Calendar,
      title: 'Schedule Online',
      description: 'Book your appointment 24/7 with our easy online scheduler. Choose your preferred date and time.',
      cta: 'Schedule Now',
      action: 'schedule',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our friendly customer service team. Available for emergencies 24/7.',
      cta: 'Call (520) 333-2665',
      action: 'call',
      href: 'tel:+1520-333-2665',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: MessageSquare,
      title: 'Text Us',
      description: 'Send us a text message for quick questions or to schedule service on the go.',
      cta: 'Text (520) 333-2665',
      action: 'text',
      href: 'sms:+1520-333-2665',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within one business day.',
      cta: 'Email Us',
      action: 'email',
      href: 'mailto:info@intelligentdesignac.com',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: 'Emergency Service Only' },
    { day: '24/7 Emergency', hours: 'Always Available' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(13, 45, 122, 0.85), rgba(13, 45, 122, 0.85)), url(/images/hvac-hero.jpg)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-title">
              Customer Service & Scheduling
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4" data-testid="text-hero-subtitle">
              Choose Your Preferred Way to Connect
            </p>
            <p className="text-lg text-white/80 mb-8" data-testid="text-hero-description">
              Whether you prefer online scheduling, phone calls, text messages, or email - we make it easy to get the service you need. Available 24/7 for emergencies.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">22,000+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">BBB A+ Rated</span>
              </div>
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
            <span className="text-foreground" data-testid="text-breadcrumb-current">
              Schedule
            </span>
          </div>
        </div>
      </nav>

      {/* Contact Methods Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-methods-title">
              How Would You Like to Connect?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover-elevate active-elevate-2 transition-all" data-testid={`card-method-${index}`}>
                <CardHeader>
                  <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <method.icon className={`w-8 h-8 ${method.color}`} />
                  </div>
                  <CardTitle className="text-2xl" data-testid={`text-method-title-${index}`}>
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-base" data-testid={`text-method-description-${index}`}>
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {method.action === 'schedule' ? (
                    <SchedulerEmbed 
                      triggerText={method.cta}
                      variant="default"
                      size="lg"
                      className="w-full"
                      data-testid={`button-method-${index}`}
                    />
                  ) : (
                    <Button 
                      asChild
                      variant="default"
                      size="lg"
                      className="w-full"
                      data-testid={`button-method-${index}`}
                    >
                      <a href={method.href}>
                        {method.cta}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Business Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0" data-testid={`hours-${index}`}>
                      <span className="font-semibold">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-sm font-semibold text-destructive">
                    🚨 24/7 Emergency Service Available
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    We're here when you need us most
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location & Service Area */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Location & Service Area</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Main Office:</p>
                    <p className="text-muted-foreground">
                      1145 E Fort Lowell Rd<br />
                      Tucson, AZ 85719
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">Service Areas:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <div>• Tucson</div>
                      <div>• Oro Valley</div>
                      <div>• Marana</div>
                      <div>• Sahuarita</div>
                      <div>• Vail</div>
                      <div>• Green Valley</div>
                      <div>• Catalina</div>
                      <div>• Rita Ranch</div>
                    </div>
                  </div>

                  <Button asChild variant="outline" className="w-full mt-4">
                    <Link href="/areas-served">
                      View All Service Areas <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Intelligent Design?</h2>
            <p className="text-xl text-muted-foreground">
              The home service company Tucson trusts most
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">22,000+</div>
                <p className="font-semibold mb-1">Five-Star Reviews</p>
                <p className="text-sm text-muted-foreground">
                  Real customers, real results
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">A+</div>
                <p className="font-semibold mb-1">BBB Rating</p>
                <p className="text-sm text-muted-foreground">
                  Trusted business excellence
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="font-semibold mb-1">Satisfaction Guaranteed</p>
                <p className="text-sm text-muted-foreground">
                  We stand behind our work
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <p className="font-semibold mb-1">Years Experience</p>
                <p className="text-sm text-muted-foreground">
                  Family & veteran owned
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Schedule your service today and experience the Intelligent Design difference
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <SchedulerEmbed 
              triggerText="Schedule Service Online"
              variant="outline"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto"
              data-testid="button-schedule-cta"
            />
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500"
              data-testid="button-call-cta"
            >
              <a href="tel:+1520-333-2665" className="text-lg px-8 py-6 h-auto">
                Call (520) 333-2665
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
