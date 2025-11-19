import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import MobileFloatingActions from "@/components/MobileFloatingActions";
import SchedulerEmbed from "@/components/SchedulerEmbed";
import LazyImage from "@/components/LazyImage";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import { Phone, Users, Award, Heart, Shield } from "lucide-react";
import dobbinsFamilyHero from "@assets/image_1761773038901.webp";

export default function AboutUs() {
  const pageTitle = "About Us - Intelligent Design Tucson | Family & Veteran-Owned Since 1979";
  const description = 'Learn about Intelligent Design, Tucson\'s family and veteran-owned home services company. Founded by Marine veteran Andrew Dobbins in 2009, we provide HVAC, plumbing, solar, electrical, and roofing services with integrity and excellence.';
  const imageUrl = `${SITE_URL}${dobbinsFamilyHero}`;

  const teamMembers = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    name: `Team Member ${i + 1}`,
    role: i === 0 ? 'CEO & Owner' : i < 4 ? 'Senior Technician' : i < 8 ? 'Lead Installer' : i < 14 ? 'Service Technician' : 'Support Staff',
    image: `https://ui-avatars.com/api/?name=Team+Member+${i + 1}&background=1e3a5f&color=fff&size=400&bold=true`
  }));

  return (
    <>
      <MetaHead
        title={pageTitle}
        description={description}
        canonical={`${SITE_URL}/about-us`}
        openGraph={[
          { property: 'og:title', content: 'About Us - Intelligent Design Tucson | Family & Veteran-Owned' },
          { property: 'og:description', content: description },
          { property: 'og:url', content: `${SITE_URL}/about-us` },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Intelligent Design' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image', content: imageUrl },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:alt', content: 'Dobbins family - founders of Intelligent Design Tucson' }
        ]}
        twitter={[
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: 'About Us - Intelligent Design Tucson | Family & Veteran-Owned' },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: imageUrl },
          { name: 'twitter:image:alt', content: 'Dobbins family - founders of Intelligent Design Tucson' }
        ]}
      />
      <GTM />
      <DNIInjector />
      <Schema />
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${dobbinsFamilyHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
          
          <div className="relative z-10 w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground" data-testid="heading-about-us">
                  Family & Veteran-Owned Since 1979
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
                  Serving Tucson with Integrity, Excellence, and Military Precision
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Marine Veteran Owned</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">80+ Team Members</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">22,000+ 5-Star Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-owner">
                  ABOUT THE OWNER
                </h2>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Andrew Dobbins
                </h3>
                <p className="text-lg text-gray-600 mb-6">CEO, Owner</p>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Andrew is a Marine, a loving father and husband, and the founder and owner of Intelligent Design Air Conditioning, Plumbing, Solar, & Electric. An EPA-certified technician, Andrew has been to countless trainings and is certified for Indoor Air Quality by both Lennox and American Standard/Trane. In his 17+ years of experience, Andrew has received the Angi Super Service Award multiple years in a row. He is a strong member of the Tucson community and has two beautiful children and an amazing wife, Brittany.
                  </p>
                  <p>
                    Andrew's military background instilled in him a commitment to precision, integrity, and service that defines Intelligent Design's approach to every customer interaction. His vision transformed a three-person garage operation into Tucson's most trusted home services company.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <LazyImage
                  src="https://www.idesignac.com/wp-content/uploads/2024/04/dobbins-family.jpg.webp"
                  alt="Andrew Dobbins and family"
                  className="w-full rounded-xl shadow-lg"
                  data-testid="img-owner"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                In 2002, after serving in the U.S. Marine Corps as Presidential security at HMX-1 in Quantico, VA., Andrew Dobbins left the Corps and entered the world of air conditioning and heating. Right from the beginning, he brought a different approach to his work. This was the attitude needed to make Intelligent Design the Best Solar, Plumbing, & HVAC Company in Tucson. During his time in the Corps, Andrew had developed a great appreciation for attention to detail. He also understood the importance of exceeding the standard and always improving. This discipline and dedication became the foundation upon which he would build his career.
              </p>
              <p>
                This was to benefit him as he excelled in the fields of product differentiation, heat load engineering, system customization, system design and estimation. Over the next several years, Andrew became adept in all aspects of residential system design. He also received a number of certifications, including EPA certification, Building Performance Institute (BPI) certification (Building Analyst and AC/Heat Pump), heat load certification. Finally, Andrew attained his Arizona Contractor's License (ROC). He was ready for the next step.
              </p>
              <p>
                He was ready for the next step in his life. In 2009, Andrew decided to go into business for himself. He had seen the way things ought to be done, and he had compared it to the way most companies did business. He realized that this was the only way that customers could get the quality and integrity they deserve from the Best Solar, Plumbing, & HVAC Company in Tucson. Starting with three staff members and working out of a home garage, Andrew went all in, selling his truck, his motorcycle, and taking out a second mortgage. It paid off.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Schedule Online Now"
                variant="destructive"
                size="lg"
              />
              <a
                href="tel:+15203332665"
                className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-yellow-500 text-gray-900 hover:bg-yellow-500 px-8 py-3 rounded-lg font-bold transition-colors text-lg"
                data-testid="link-call"
              >
                <Phone className="w-5 h-5" />
                Call For A Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-what-makes-us-different">
                What Makes Intelligent Design the Best Solar, Plumbing, & HVAC Company in Tucson?
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-primary-foreground/90 space-y-6">
              <p>
                Today, Intelligent Design Air Conditioning, Plumbing, Solar, & Electric employs more than 80 people year-round and works from their new property, which they purchased in 2013. Each lead installer for Intelligent Design Air Conditioning, Plumbing, Solar, & Electric has a minimum of 10 years experience. Also, every one of their service technicians is certified, and they have an average experience of 17 years. Because of Intelligent Design's great attention to detail, training, and follow-up, they have received the Angi Super Service Award multiple years in a row and have over 22,000 five-star reviews with a 4.97 average rating.
              </p>
              <p>
                We specialize in a wide range of services, including home system repair and replacement, indoor air quality solutions, custom duct repair and design, and commercial service and replacement. In 2015, we started a new plumbing division to better serve our customers. The new plumbing division provides all plumbing services, which include drain cleaning, water heater installations and repair, leak detection, repiping, and much more. In 2020, we expanded further to include solar installation and electrical services, becoming a true one-stop solution for all home comfort needs.
              </p>
              <p>
                We are so glad that you choose to work with companies like ours and helped make us the Best Solar, Plumbing, & HVAC Company in Tucson. We are dedicated to doing right by our customers and getting the job done right the first time. That's our business philosophy, and we strive to uphold it every day! This community is the reason we are who we are, and we show our support by taking part in community contributions around the area. In fact, we partner and support organizations such as the Tucson Community Food Bank, Make-A-Wish Arizona, and various veteran support programs.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="heading-team">
                MEET THE BEST SOLAR, PLUMBING, & HVAC COMPANY IN TUCSON
              </h2>
              <p className="text-xl text-gray-600">
                Our expert team of certified technicians and dedicated support staff
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
                  data-testid={`card-team-${member.id}`}
                >
                  <LazyImage
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <Heart className="w-16 h-16 text-destructive mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Experience the Intelligent Design Difference
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of satisfied Tucson homeowners who trust us with their home comfort needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <SchedulerEmbed
                triggerText="Schedule Service Today"
                variant="destructive"
                size="lg"
              />
              <a
                href="tel:+15203332665"
                className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-yellow-500 text-gray-900 hover:bg-yellow-500 px-8 py-3 rounded-lg font-bold transition-colors text-lg"
                data-testid="link-call-final"
              >
                <Phone className="w-5 h-5" />
                (520) 333-2665
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileFloatingActions />
    </>
  );
}
