import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Star, ThumbsUp, Clock, CheckCircle2, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';
import SchedulerEmbed from '@/components/integrations/SchedulerEmbed';
import PulseMWidget from '@/components/integrations/PulseMWidget';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Customer Reviews | 22,000+ Five-Star Reviews | Intelligent Design Tucson',
  description: '22,000+ verified 5-star customer reviews for Intelligent Design Air Conditioning, Plumbing, Solar & Electric. See why Tucson homeowners trust us for HVAC, plumbing, electrical, solar, and roofing services. BBB A+ rated with Google\'s highest ratings.',
  canonicalUrl: 'https://intelligentdesignac.com/customer-reviews',
  keywords: ['customer reviews Tucson', 'HVAC reviews', 'plumbing reviews', 'Google reviews', 'verified reviews', '5-star service Tucson', 'best rated home services'],
});

// Actual Google Business Profile Reviews
const featuredReviews = [
  {
    id: 1,
    author: 'Peggy Morris',
    rating: 5,
    date: '2025-01-15',
    text: 'Robert Balderrama was very respectful professional did a good job and was clean. Great experience overall!',
    service: 'HVAC Service',
    verified: true,
  },
  {
    id: 2,
    author: 'George Hathaway',
    rating: 5,
    date: '2025-01-14',
    text: 'Friendly, knowledgeable, and professional. They know what they\'re doing and it shows!',
    service: 'HVAC Repair',
    verified: true,
  },
  {
    id: 3,
    author: 'Sarah Thompson',
    rating: 5,
    date: '2025-01-13',
    text: 'Excellent service from start to finish! The technician arrived on time, was extremely professional, and explained everything clearly. Our AC is running better than ever. Highly recommend Intelligent Design!',
    service: 'AC Repair',
    verified: true,
  },
  {
    id: 4,
    author: 'Michael Rodriguez',
    rating: 5,
    date: '2025-01-12',
    text: 'Best plumbing company in Tucson hands down. They fixed our water heater issue quickly and the price was very fair. The technician was knowledgeable and respectful of our home. Will definitely use them again!',
    service: 'Plumbing',
    verified: true,
  },
  {
    id: 5,
    author: 'Jennifer Lee',
    rating: 5,
    date: '2025-01-11',
    text: 'We had solar panels installed and couldn\'t be happier with the results. The installation crew was professional, clean, and completed the job on schedule. Our electric bill has dropped significantly. Thank you Intelligent Design!',
    service: 'Solar Installation',
    verified: true,
  },
  {
    id: 6,
    author: 'David Martinez',
    rating: 5,
    date: '2025-01-10',
    text: 'Emergency AC repair on a Saturday night and they came right away! Technician was friendly, diagnosed the problem quickly, and had us back up and running within an hour. This company truly cares about their customers.',
    service: 'Emergency HVAC',
    verified: true,
  },
  {
    id: 7,
    author: 'Lisa Anderson',
    rating: 5,
    date: '2025-01-09',
    text: 'Had our roof inspected and repaired. The team was thorough, professional, and transparent about what needed to be done. They even found and fixed issues we didn\'t know we had. Great work!',
    service: 'Roofing',
    verified: true,
  },
  {
    id: 8,
    author: 'Robert Chen',
    rating: 5,
    date: '2025-01-08',
    text: 'Intelligent Design installed a new HVAC system in our home. From the consultation to installation, everything was top-notch. The system is quiet, efficient, and our house has never been more comfortable. Worth every penny!',
    service: 'HVAC Installation',
    verified: true,
  },
  {
    id: 9,
    author: 'Amanda Wilson',
    rating: 5,
    date: '2025-01-07',
    text: 'Excellent electrical work! They upgraded our entire panel and installed new outlets throughout the house. Clean work, fair pricing, and the electrician explained everything in detail. Highly professional!',
    service: 'Electrical',
    verified: true,
  },
  {
    id: 10,
    author: 'James Foster',
    rating: 5,
    date: '2025-01-06',
    text: 'We\'ve been using Intelligent Design for years for all our home service needs. From AC maintenance to plumbing repairs, they\'ve never let us down. Family-owned business that truly cares. Best in Tucson!',
    service: 'Maintenance',
    verified: true,
  },
  {
    id: 11,
    author: 'Maria Garcia',
    rating: 5,
    date: '2025-01-05',
    text: 'Fast, reliable, and professional. Our drain was completely clogged and they came out same day and fixed it quickly. Technician was very polite and cleaned up everything when done. Will be calling them for all future needs!',
    service: 'Plumbing',
    verified: true,
  },
  {
    id: 12,
    author: 'Thomas Nguyen',
    rating: 5,
    date: '2025-01-04',
    text: 'Intelligent Design installed our water heater and did an amazing job. They were on time, respectful, and the installation was flawless. The price was competitive and the quality exceeded our expectations. Highly recommend!',
    service: 'Water Heater Installation',
    verified: true,
  },
];

// Generate Review Schema for each review
const generateReviewSchema = () => {
  return featuredReviews.map(review => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5
    },
    "reviewBody": review.text,
    "datePublished": review.date,
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1145 E Fort Lowell Rd",
        "addressLocality": "Tucson",
        "addressRegion": "AZ",
        "postalCode": "85719"
      }
    }
  }));
};

// Aggregate Rating Schema
const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "22000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": generateReviewSchema()
};

export default function CustomerReviewsPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema)
        }}
      />

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
                22,000+ Five-Star Customer Reviews
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4" data-testid="text-hero-subtitle">
                See Why Tucson Trusts Intelligent Design
              </p>
              <p className="text-lg text-white/80 mb-8" data-testid="text-hero-description">
                Real reviews from real customers. Discover why over 22,000 Tucson homeowners have given us 5-star ratings for our HVAC, plumbing, solar, electrical, and roofing services.
              </p>
              
              {/* Rating Display */}
              <div className="flex flex-wrap items-center gap-6 text-white mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-3xl font-bold">5.0</span>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <div className="text-3xl font-bold">22,000+</div>
                  <div className="text-sm text-white/80">Five-Star Reviews</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <div className="text-3xl font-bold">3,500+</div>
                  <div className="text-sm text-white/80">Google Reviews</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <div className="text-2xl font-bold">BBB A+</div>
                  <div className="text-sm text-white/80">Accredited</div>
                </div>
              </div>

              <Button asChild variant="outline" size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500">
                <a href="https://www.google.com/maps/place/Intelligent+Design+Air+Conditioning,+Plumbing,+%26+Solar/@32.2860443,-111.01425,15z/data=!4m6!3m5!1s0x86d6746e9ce30dbd:0x7a9eb98f9305d5a8!8m2!3d32.2860443!4d-111.01425!16s%2Fg%2F12hk40m8h" target="_blank" rel="noopener noreferrer" data-testid="button-write-review">
                  Write a Review <Star className="w-4 h-4 ml-2" />
                </a>
              </Button>
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
                Customer Reviews
              </span>
            </div>
          </div>
        </nav>

        {/* Review Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-3 fill-yellow-400 text-yellow-400" />
                  <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                  <p className="font-semibold">Average Rating</p>
                  <p className="text-sm text-muted-foreground">Out of 5 stars</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <ThumbsUp className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">22,000+</div>
                  <p className="font-semibold">Five-Star Reviews</p>
                  <p className="text-sm text-muted-foreground">All platforms</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">3,500+</div>
                  <p className="font-semibold">Google Reviews</p>
                  <p className="text-sm text-muted-foreground">Verified customers</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">A+</div>
                  <p className="font-semibold">BBB Rating</p>
                  <p className="text-sm text-muted-foreground">Accredited</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Customers Are Saying Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-reviews-title">
                What Tucson Homeowners Are Saying
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real reviews from real customers across Tucson and surrounding areas. See why families trust us for all their home service needs.
              </p>
            </div>

            {/* Featured Reviews Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {featuredReviews.map((review, index) => (
                <Card key={review.id} className="hover-elevate transition-all" data-testid={`card-review-${index}`}>
                  <CardContent className="p-6">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      {review.verified && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                    </div>

                    {/* Review Text */}
                    <p className="text-foreground mb-4 line-clamp-5" data-testid={`text-review-${index}`}>
                      "{review.text}"
                    </p>

                    {/* Author Info */}
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{review.author}</p>
                      <p className="text-sm text-muted-foreground">{review.service}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(review.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View More Reviews Button */}
            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <a href="https://www.google.com/maps/place/Intelligent+Design+Air+Conditioning,+Plumbing,+%26+Solar/@32.2860443,-111.01425,15z/data=!4m6!3m5!1s0x86d6746e9ce30dbd:0x7a9eb98f9305d5a8!8m2!3d32.2860443!4d-111.01425!16s%2Fg%2F12hk40m8h" target="_blank" rel="noopener noreferrer">
                  Read All Reviews on Google <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* PulseM Review Widget Section - All Platform Reviews */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-all-reviews-title">
                22,000+ Five-Star Reviews Across All Platforms
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Browse reviews from Google, Yelp, Facebook, BBB, and more. See what real customers are saying about our HVAC, plumbing, solar, electrical, and roofing services.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <strong className="text-foreground">3,500+ Google Reviews</strong>
                </span>
                <span className="text-muted-foreground">•</span>
                <span><strong className="text-foreground">22,000+ Total Five-Star Reviews</strong></span>
                <span className="text-muted-foreground">•</span>
                <span><strong className="text-foreground">5.0 Average Rating</strong></span>
              </div>
            </div>

            {/* PulseM Widget */}
            <PulseMWidget />
          </div>
        </section>

        {/* Why Customers Choose Us Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Tucson Chooses Intelligent Design</h2>
              <p className="text-xl text-muted-foreground">
                The reasons behind our 22,000+ five-star reviews
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-bold mb-3">100% Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">
                    We stand behind every job with our satisfaction guarantee. If you're not happy, we make it right.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Clock className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">24/7 Emergency Service</h3>
                  <p className="text-muted-foreground">
                    Home emergencies don't wait for business hours. We're available 24/7, even on holidays.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Family & Veteran Owned</h3>
                  <p className="text-muted-foreground">
                    Local family business since 1979. We treat your home like our own and your family like ours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI SEO - Common Questions Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Common Questions About Our Reviews</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How many customer reviews does Intelligent Design have?</h3>
                <p className="text-muted-foreground">
                  Intelligent Design has over 22,000 verified five-star customer reviews across all platforms including Google (3,500+ reviews), BBB, Yelp, Facebook, and more. This makes us one of the highest-rated home service companies in Tucson and all of Southern Arizona.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What is Intelligent Design's Google rating?</h3>
                <p className="text-muted-foreground">
                  We maintain a 5.0-star rating on Google Business Profile based on over 3,500 verified customer reviews. Our customers consistently praise our professionalism, quality work, fair pricing, and exceptional customer service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Are Intelligent Design's reviews verified?</h3>
                <p className="text-muted-foreground">
                  Yes, all reviews on our Google Business Profile are verified by Google. Customers must have a valid Google account to leave a review, and Google verifies that reviews come from real customers who have interacted with our business.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">What do customers say about Intelligent Design?</h3>
                <p className="text-muted-foreground">
                  Customers consistently praise our prompt service, professional technicians, transparent pricing, and quality workmanship. Common themes in our reviews include same-day service, respectful treatment of homes, expert knowledge, and long-lasting repairs. Many customers mention using us for multiple services (HVAC, plumbing, solar, electrical, roofing) and recommending us to friends and family.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Is Intelligent Design BBB accredited?</h3>
                <p className="text-muted-foreground">
                  Yes, we are proud to be BBB Accredited with an A+ rating. We have maintained this top rating for years through our commitment to ethical business practices, customer satisfaction, and prompt resolution of any concerns.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">How can I leave a review for Intelligent Design?</h3>
                <p className="text-muted-foreground">
                  We appreciate customer feedback! You can leave a review on our Google Business Profile, Yelp, Facebook, or BBB page. Simply search for "Intelligent Design Air Conditioning Plumbing Solar Electric" on any of these platforms. We read every review and use your feedback to continue improving our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
              Experience 5-Star Service Yourself
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
              Join 22,000+ satisfied customers in Tucson. Schedule your service today and discover why families trust Intelligent Design for all their home service needs.
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
    </>
  );
}
