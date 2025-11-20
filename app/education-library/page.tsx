import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Youtube, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Video Education Library | Intelligent Design Tucson',
  description: 'Explore our education library to learn about your home\'s systems. Are you curious about how you can take better care of your heating and cooling system? Are you interested in upgrading your current systems?',
  canonicalUrl: 'https://intelligentdesignac.com/education-library',
  keywords: ['education', 'videos', 'HVAC', 'plumbing', 'solar', 'home maintenance', 'Tucson'],
});

export default function EducationLibraryPage() {
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
              Video Education Library
            </h1>
            <p className="text-xl text-white/90 mb-8" data-testid="text-hero-description">
              Learn about your home's HVAC, plumbing, solar, and electrical systems from Tucson's trusted experts
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white border-red-600"
                data-testid="button-youtube-hero"
              >
                <a 
                  href="https://www.youtube.com/@Idesignac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="w-6 h-6" />
                  Visit Our YouTube Channel
                </a>
              </Button>
              <SchedulerEmbed 
                triggerText="Schedule Service"
                variant="default"
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                data-testid="button-schedule-hero"
              />
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
              Video Education Library
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-section-title">
                Our Education Library
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/90 space-y-4">
                <p>
                  Explore our education library to learn about your home's systems. Are you curious about how you can take better care of your heating and cooling system? Are you interested in upgrading your current systems? Or perhaps you want to know how you can{' '}
                  <a 
                    href="https://www.energy.gov/articles/top-11-things-you-didnt-know-about-saving-energy-home-summer-edition" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    make your home more energy-efficient?
                  </a>{' '}
                  If you would like to learn the answers to some of the most common questions homeowners have, then be sure to check out the videos in our education library!
                </p>
                <p>
                  However, if you can't find your answer here, then get in touch with Intelligent Design Air Conditioning, Plumbing, Solar, & Electric today! Our team can give you the info you're looking for. Our friendly office staff can also schedule a service visit for you or help you sign up for our Family Protection Plans. It's our top priority to provide world-class customer service and expert craftsmanship at affordable rates. Our mission is keeping your home and family more comfortable!
                </p>
              </div>
            </div>
            <div>
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/@Idesignac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    data-testid="link-youtube-preview"
                  >
                    <div className="flex flex-col items-center gap-4 p-8">
                      <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center group-hover:bg-red-700 transition-colors">
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold mb-2">Watch Our Videos</p>
                        <p className="text-muted-foreground">
                          Visit @Idesignac on YouTube
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </Card>
            </div>
          </div>

          {/* Featured Video Playlists */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-playlists-title">
                Featured Educational Playlists
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our curated playlists covering HVAC, plumbing, solar, electrical, and home maintenance topics
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Playlist 1 - Example (replace with actual playlist) */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-playlist-1-title">
                  HVAC Systems & Maintenance
                </h3>
                <div className="aspect-video mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?si=Bw_4vDuVOvyjxmJ3&amp;list=PLGh6_eWndI3Ncpv0utLkNAEKVn_i-nnBK"
                    title="HVAC Educational Playlist"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    data-testid="iframe-playlist-1"
                  />
                </div>
                <p className="text-muted-foreground">
                  Learn how air conditioners work, energy efficiency tips, and maintenance best practices
                </p>
              </div>

              {/* Playlist 2 - Real Customer Reviews */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-playlist-2-title">
                  Real Customer Reviews
                </h3>
                <div className="aspect-video mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?si=q1PGlGTgiagiW1wF&amp;list=PLGh6_eWndI3NIxfCi7VvhA5WQ5S3rtlKy"
                    title="Real Customer Reviews"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    data-testid="iframe-playlist-2"
                  />
                </div>
                <p className="text-muted-foreground">
                  Hear directly from Tucson homeowners about their experiences with Intelligent Design. Watch authentic video testimonials showcasing our commitment to quality service, expert craftsmanship, and customer satisfaction across HVAC, plumbing, solar, and electrical projects.
                </p>
              </div>

              {/* Playlist 3 - Public Service Announcements */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-playlist-3-title">
                  Intelligent Design Public Service Announcements
                </h3>
                <div className="aspect-video mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?si=PUzBOKEvB6Y8TM-0&amp;list=PLGh6_eWndI3OMneotJ6sH3mZzX_LxPDxv"
                    title="Intelligent Design Public Service Announcements"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    data-testid="iframe-playlist-3"
                  />
                </div>
                <p className="text-muted-foreground">
                  Stay informed with important safety tips, seasonal maintenance reminders, and emergency preparedness advice from our expert team. Watch timely PSAs covering topics like extreme weather preparation, energy-saving strategies, and critical home system alerts to keep your family safe and comfortable year-round.
                </p>
              </div>

              {/* Playlist 4 - Placeholder */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-playlist-4-title">
                  Electrical Safety & Upgrades
                </h3>
                <div className="aspect-video mb-4">
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID_HERE"
                    title="Electrical Educational Playlist"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    data-testid="iframe-playlist-4"
                  />
                </div>
                <p className="text-muted-foreground">
                  Learn about electrical safety, panel upgrades, and modern home electrical systems
                </p>
              </div>
            </div>

            {/* Subscribe CTA */}
            <div className="mt-12 text-center">
              <Button 
                asChild
                variant="destructive"
                size="lg"
                className="bg-red-600 hover:bg-red-700"
                data-testid="button-subscribe"
              >
                <a 
                  href="https://www.youtube.com/@Idesignac?sub_confirmation=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe on YouTube for More Videos
                </a>
              </Button>
            </div>
          </div>

          {/* Topics Covered */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="text-topics-title">
              Topics Covered in Our Videos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'How Air Conditioners Work',
                  description: 'Learn the science behind cooling your home efficiently',
                },
                {
                  title: 'Energy Efficiency Ratings',
                  description: 'Understand SEER ratings and how to reduce energy bills',
                },
                {
                  title: 'Indoor Air Quality',
                  description: 'Improve the air you breathe with proper HVAC maintenance',
                },
                {
                  title: 'Solar-Powered Systems',
                  description: "Harness the sun's power to cool and power your home",
                },
                {
                  title: 'Whole-House Energy Audits',
                  description: 'Discover ways to make your home more energy-efficient',
                },
                {
                  title: 'HVAC Maintenance Tips',
                  description: 'Keep your systems running smoothly year-round',
                },
              ].map((topic, index) => (
                <Card key={index} className="p-6" data-testid={`card-topic-${index}`}>
                  <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
                  <p className="text-muted-foreground">{topic.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Our education library explains the answers to some of the most common questions we hear. You'll learn how an AC actually works, for example. In addition, you can explore the benefits of{' '}
              <Link href="/services/solar" className="text-primary hover:underline">
                whole-house energy audits
              </Link>{' '}
              and{' '}
              <Link href="/services/hvac" className="text-primary hover:underline">
                indoor air quality
              </Link>
              . The education library also discusses energy efficiency ratings. These are, of course, a major concern to anyone who would like to reduce their energy bills and their impact on the environment. Additionally, we recommend checking out our videos on solar-powered air conditioners. These allow you to harness the sun's power to cool your home! Furthermore, we explain the basics of HVAC costs.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-title">
              Have More Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our team is here to help! Schedule a service visit or contact us for expert advice on your home's systems.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <SchedulerEmbed 
                triggerText="Schedule Online Now"
                variant="destructive"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
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
                  Call For A Free Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
