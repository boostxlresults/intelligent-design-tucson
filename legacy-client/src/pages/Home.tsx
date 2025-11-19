import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServiceTiles from "@/components/ServiceTiles";
import ReviewCarousel from "@/components/ReviewCarousel";
import TrustedByCommunity from "@/components/TrustedByCommunity";
import BadgeWall from "@/components/BadgeWall";
import FAQ from "@/components/FAQ";
import SEOContent from "@/components/SEOContent";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";

export default function Home() {
  const pageTitle = "Intelligent Design Tucson | HVAC, Plumbing, Solar, Electric & Roofing in Tucson, AZ";
  const description = 'Trusted Tucson HVAC, plumbing, solar, electrical, and roofing services. 45+ years experience, 22,000+ five-star reviews (4.97 rating), BBB A+. Family and veteran-owned, 24/7 emergency service. Call (520) 333-2665.';
  const imageUrl = `${SITE_URL}/og-image.jpg`;

  return (
    <>
      <MetaHead
        title={pageTitle}
        description={description}
        canonical={SITE_URL}
        robots="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        openGraph={[
          { property: 'og:title', content: 'Intelligent Design Tucson | HVAC, Plumbing, Solar, Electric & Roofing' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: SITE_URL },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Intelligent Design - Tucson\'s Highest-Rated Home Service Experts' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'Intelligent Design Tucson | HVAC, Plumbing, Solar, Electric & Roofing' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Intelligent Design - Tucson\'s Highest-Rated Home Service Experts' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <Schema />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">
          <Hero />
          <TrustBar />
          <ServiceTiles />
          <ReviewCarousel />
          <TrustedByCommunity />
          <BadgeWall />
          <SEOContent />
          <FAQ />
          <ContactCard />
        </main>
        <Footer />
        <MobileFloatingActions />
      </div>
    </>
  );
}
