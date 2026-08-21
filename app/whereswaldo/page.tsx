import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Camera, Heart, Upload, Trophy, AlertTriangle, Calendar, Users, Star, Award, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo/generateMetadata';

export const metadata: Metadata = generateSEOMetadata({
  title: "Where's Waldo Contest | Win $1,000 Monthly | Intelligent Design",
  description: "Spot Andrew or Aimee out in Tucson, snap a selfie, and win $1,000! Intelligent Design is giving away $1,000 every month in our Where's Waldo contest. Follow us, tag us, and enter to win.",
  canonicalUrl: 'https://www.idesignac.com/whereswaldo',
  keywords: ["Where's Waldo contest", 'Intelligent Design contest', 'win $1000 Tucson', 'selfie contest Tucson', 'Intelligent Design giveaway'],
});

// Schema markup for the contest
const contestSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Where's Waldo? — Spot Andrew or Aimee & Win $1,000",
  "description": "Monthly $1,000 giveaway contest. Spot Andrew or Aimee from Intelligent Design out in Tucson, take a selfie with them, and enter to win.",
  "organizer": {
    "@type": "LocalBusiness",
    "name": "Intelligent Design Air Conditioning, Plumbing, Solar, & Electric",
    "url": "https://www.idesignac.com"
  },
  "location": {
    "@type": "Place",
    "name": "Greater Tucson Area",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tucson",
      "addressRegion": "AZ"
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free to enter"
  }
};

export default function WheresWaldoPage() {
  const howToEnter = [
    {
      icon: Users,
      step: '1',
      title: 'Spot Andrew or Aimee',
      description: "See Andrew or Aimee from Intelligent Design out and about in Tucson? It's your lucky day!",
    },
    {
      icon: Camera,
      step: '2',
      title: 'Snap a Selfie',
      description: 'Walk up, say hi, and take a selfie with them. They love meeting the community!',
    },
    {
      icon: Heart,
      step: '3',
      title: 'Follow & Like Our Page',
      description: "Make sure you're following and have liked the Intelligent Design page on social media.",
    },
    {
      icon: Upload,
      step: '4',
      title: 'Post & Tag Us',
      description: 'Upload your selfie to your social media page and tag @intelligentdesigntucson (Instagram/TikTok) or @IntelligentDesignAC (Facebook). That\'s it — you\'re entered!',
    },
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contestSchema)
        }}
      />

      <div className="min-h-screen flex flex-col bg-background">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-family-desktop.webp"
              alt="The Intelligent Design family — spot them in Tucson and win!"
              fill
              priority
              sizes="100vw"
              className="object-cover hidden md:block"
            />
            <Image
              src="/images/hero-family-mobile.webp"
              alt="The Intelligent Design family — spot them in Tucson and win!"
              fill
              priority
              sizes="100vw"
              className="object-cover md:hidden"
            />
            <div className="absolute inset-0 bg-[rgba(13,45,122,0.75)]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold mb-6">
                <Trophy className="w-5 h-5" />
                MONTHLY $1,000 GIVEAWAY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Where's Waldo?
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-4">
                Spot Andrew or Aimee. Snap a Selfie. Win $1,000.
              </p>
              <p className="text-xl text-white/90 mb-8">
                We're giving away $1,000 every single month to one lucky winner. All you have to do is find us out in Tucson!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                  <a href="#how-to-enter">
                    How to Enter <Camera className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/50 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                  <a href="#rules">
                    Contest Rules
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">
                Where's Waldo Contest
              </span>
            </div>
          </div>
        </nav>

        {/* How to Enter Section */}
        <section id="how-to-enter" className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Enter</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four simple steps to enter our monthly $1,000 drawing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howToEnter.map((item, index) => (
                <Card key={index} className="hover-elevate transition-all relative overflow-hidden">
                  <CardContent className="p-8 text-center">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                      {item.step}
                    </div>
                    <item.icon className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prize Details Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prize Details</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real cash. Real winners. Every single month.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                  <h3 className="text-3xl font-bold text-primary mb-2">$1,000</h3>
                  <p className="font-semibold">Monthly Prize</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    One winner drawn each month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Monthly Drawing</h3>
                  <p className="font-semibold">Random Selection</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    All qualifying entries go into the monthly drawing
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                  <h3 className="text-xl font-bold mb-2">Unlimited Entries</h3>
                  <p className="font-semibold">Spot Us Again? Enter Again!</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Each unique selfie encounter counts as a new entry
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Brought to You by Tucson's Most Trusted Home Services Company</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 mx-auto mb-3 fill-yellow-400 text-yellow-400" />
                  <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                  <p className="font-semibold">Google Rating</p>
                  <p className="text-sm text-muted-foreground">23,000+ Reviews</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">A+</div>
                  <p className="font-semibold">BBB Rating</p>
                  <p className="text-sm text-muted-foreground">Accredited Since 1979</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">46+</div>
                  <p className="font-semibold">Years in Business</p>
                  <p className="text-sm text-muted-foreground">Family & Veteran Owned</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="font-semibold">Satisfaction</p>
                  <p className="text-sm text-muted-foreground">Guaranteed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Official Rules & Disclaimers Section */}
        <section id="rules" className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Official Contest Rules & Disclaimers</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Please read the following terms carefully before participating
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Eligibility
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Must be 18 years of age or older to participate and win.</li>
                    <li>• Must be a legal resident of the United States.</li>
                    <li>• Employees of Intelligent Design Air Conditioning, Plumbing, Solar, & Electric and their immediate family members are not eligible.</li>
                    <li>• Void where prohibited by law.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Camera className="w-5 h-5 text-primary" />
                    How to Enter
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Spot Andrew or Aimee from Intelligent Design in public in the Tucson, AZ area.</li>
                    <li>• Take a selfie photo with Andrew or Aimee (with their consent).</li>
                    <li>• Follow and like the official Intelligent Design page on the social media platform where you post.</li>
                    <li>• Upload the selfie to your personal social media account (Instagram, Facebook, TikTok, or X/Twitter).</li>
                    <li>• Tag the official Intelligent Design page in your post: @intelligentdesigntucson on Instagram and TikTok, or @IntelligentDesignAC on Facebook.</li>
                    <li>• Your social media profile must be set to public for verification purposes.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Drawing & Prize
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• One (1) winner will be selected per calendar month via random drawing from all qualifying entries.</li>
                    <li>• Prize: $1,000 USD.</li>
                    <li>• Winner will be notified via direct message on the social media platform used for entry.</li>
                    <li>• Winner must respond within 72 hours of notification or a new winner will be selected.</li>
                    <li>• Prize may be subject to applicable federal, state, and local taxes. Winner is responsible for all tax obligations.</li>
                    <li>• Prize is non-transferable and cannot be exchanged for other goods or services.</li>
                    <li>• Each unique selfie encounter counts as one (1) entry per month. Multiple entries from separate encounters are permitted.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                    <AlertTriangle className="w-5 h-5" />
                    Safety Disclaimer
                  </h3>
                  <ul className="space-y-2 text-yellow-800 dark:text-yellow-300/90">
                    <li>• <strong>Do NOT engage in any dangerous, reckless, or illegal activities</strong> in an attempt to obtain a selfie.</li>
                    <li>• Do not follow, stalk, chase, or pursue Andrew or Aimee by vehicle or on foot in any unsafe manner.</li>
                    <li>• Do not approach while they are driving or operating a vehicle.</li>
                    <li>• Do not trespass on private property to obtain a selfie.</li>
                    <li>• Do not interrupt them during private family events, medical appointments, or other clearly private situations.</li>
                    <li>• Intelligent Design reserves the right to disqualify any entry obtained through unsafe, harassing, or inappropriate behavior.</li>
                    <li>• Participants assume all risk associated with their participation in this contest.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    General Terms
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• By entering, participants grant Intelligent Design the right to use their name, likeness, and social media post for promotional purposes without additional compensation.</li>
                    <li>• Intelligent Design reserves the right to modify, suspend, or terminate this contest at any time without prior notice.</li>
                    <li>• Intelligent Design is not responsible for lost, late, misdirected, or incomplete entries, or for any technical malfunctions of social media platforms.</li>
                    <li>• This contest is in no way sponsored, endorsed, administered by, or associated with Instagram, Facebook, TikTok, X/Twitter, or any other social media platform.</li>
                    <li>• All decisions made by Intelligent Design regarding the contest are final and binding.</li>
                    <li>• By participating, entrants agree to release and hold harmless Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, its officers, directors, employees, and agents from any and all liability, claims, or actions arising from participation in this contest or acceptance of any prize.</li>
                    <li>• This contest is governed by the laws of the State of Arizona.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Sponsor
                  </h3>
                  <p className="text-muted-foreground">
                    This contest is sponsored by Intelligent Design Air Conditioning, Plumbing, Solar, & Electric, located in Tucson, Arizona. For questions about the contest, contact us at (520) 333-2665 or email info@idesignac.com.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Think You Can Find Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Keep your eyes peeled around Tucson — Andrew and Aimee could be anywhere! Follow us on social media to stay in the loop.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-yellow-500 text-lg px-8 py-6 h-auto">
                <a href="https://www.instagram.com/intelligentdesigntucson" target="_blank" rel="noopener noreferrer">
                  Follow on Instagram
                </a>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 text-lg px-8 py-6 h-auto">
                <a href="https://www.facebook.com/IntelligentDesignAC" target="_blank" rel="noopener noreferrer">
                  Follow on Facebook
                </a>
              </Button>
              <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 text-white border-gray-900 text-lg px-8 py-6 h-auto">
                <a href="https://www.tiktok.com/@intelligentdesigntucson" target="_blank" rel="noopener noreferrer">
                  Follow on TikTok
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Termination Disclaimer */}
        <div className="text-center py-6 px-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            This contest is subject to end anytime on the authority of Intelligent Design management.
          </p>
        </div>
      </div>
    </>
  );
}
