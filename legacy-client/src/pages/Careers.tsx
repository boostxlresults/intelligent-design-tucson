import { useEffect } from "react";
import { Phone, CheckCircle2, Users, Heart, TrendingUp, Shield, Award, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import GTM from "@/components/GTM";
import DNIInjector from "@/components/DNIInjector";
import { MetaHead } from "@/components/MetaHead";
import { SITE_URL } from "@/lib/constants";
import careersHero from "@assets/generated_images/Intelligent_Design_team_of_technicians_d7ef5e9f.webp";

export default function Careers() {
  const description = "Join Tucson's #1 rated home services company! Intelligent Design is hiring HVAC technicians, plumbers, electricians, solar installers, and more. Competitive pay, full benefits, paid training, company vehicles, and family-friendly culture. Apply today!";
  const imageUrl = `${SITE_URL}${careersHero}`;

  useEffect(() => {
    // Load WhoHire script
    const script = document.createElement('script');
    script.src = 'https://plugin.whohire.com';
    script.async = true;
    script.setAttribute('data-careers-script', '');
    document.body.appendChild(script);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What positions is Intelligent Design currently hiring for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design is hiring for various positions including HVAC Service Technicians, HVAC Installers, Licensed Plumbers, Solar Energy Installers, Licensed Electricians, Customer Service Representatives, and more. Check our current job openings on this page to see all available positions and apply today."
          }
        },
        {
          "@type": "Question",
          "name": "What benefits do Intelligent Design employees receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design offers comprehensive benefits including competitive pay, health insurance (medical, dental, vision), 9 paid holidays, quarterly and yearly bonuses, company-provided vehicles you take home, gas cards, paid training, uniforms with laundry service, company iPad and smartphone, life insurance, disability insurance, and employee discounts on services."
          }
        },
        {
          "@type": "Question",
          "name": "Does Intelligent Design provide training for new employees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Intelligent Design provides advanced training in sales, technical skills, and management. We invest in our team members' professional development to help them grow their careers. Our training programs cover the latest technologies and best practices in HVAC, plumbing, solar, electrical, and roofing services."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need experience to apply for a job at Intelligent Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While experience in HVAC, plumbing, electrical, or solar is valuable, we also hire motivated individuals who are eager to learn. We provide comprehensive training and mentorship programs to help you develop the skills needed to succeed. Licensed technicians and installers are especially encouraged to apply."
          }
        },
        {
          "@type": "Question",
          "name": "How do I apply for a position at Intelligent Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can apply directly through our careers page by browsing current openings and submitting your application online. You can also call our office at (520) 333-2665 to speak with our hiring team. We review applications regularly and reach out to qualified candidates for interviews."
          }
        },
        {
          "@type": "Question",
          "name": "What is the company culture like at Intelligent Design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design is a family and veteran-owned company with a family-friendly culture. Founded by Marine veteran Andrew Dobbins, we bring military precision, integrity, and strong values to everything we do. Our team of 80+ members operates like a family, supporting each other and celebrating successes together."
          }
        },
        {
          "@type": "Question",
          "name": "Does Intelligent Design offer career advancement opportunities?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We believe in promoting from within and providing clear career paths for our team members. Many of our current managers and lead technicians started in entry-level positions. We offer ongoing training, mentorship, and opportunities to advance into leadership roles as you grow with the company."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of vehicles does Intelligent Design provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design provides fully stocked company vans and trucks that you take home each night. Our service vehicles are equipped with the tools and parts you need to provide excellent service. We also provide company gas cards, so you never worry about fuel costs for work-related driving."
          }
        },
        {
          "@type": "Question",
          "name": "Is Intelligent Design an equal opportunity employer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Intelligent Design is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We hire based on qualifications, skills, and cultural fit regardless of race, color, religion, gender, age, national origin, disability status, or veteran status."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Intelligent Design different from other employers in Tucson?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Intelligent Design stands out with competitive market-leading pay, comprehensive benefits, a family-friendly culture, company vehicles you take home, fully-stocked trucks, advanced training opportunities, and a proven track record as Tucson's #1 rated home services company with over 22,000 five-star reviews. We invest in our people because we know they're our greatest asset."
          }
        }
      ]
    };

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
          "name": "Careers",
          "item": "https://www.idesignac.com/careers"
        }
      ]
    };

    const schemas = [
      { id: 'faq-schema', data: faqSchema, attr: 'faq' },
      { id: 'breadcrumb-schema', data: breadcrumbSchema, attr: 'breadcrumb' }
    ];

    schemas.forEach(({ id, data, attr }) => {
      let script = document.querySelector(`script[data-schema="${attr}"]`) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', attr);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });

    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
      document.querySelectorAll('script[data-careers-script]').forEach(el => el.remove());
    };
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Best in Market Pay",
      description: "Competitive compensation packages with performance bonuses and commission opportunities"
    },
    {
      icon: Shield,
      title: "Comprehensive Benefits",
      description: "Medical, dental, vision, prescription drugs, life insurance, and disability coverage for the whole family"
    },
    {
      icon: Home,
      title: "Company Vehicle",
      description: "Fully stocked company van or truck you take home each night, plus company gas card"
    },
    {
      icon: Award,
      title: "Paid Training",
      description: "Advanced training in sales, technical skills, and management to grow your career"
    },
    {
      icon: Users,
      title: "Family Environment",
      description: "Work with a team that treats you like family in a supportive, collaborative culture"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "9 paid holidays, PTO, family leave options, and flexible scheduling when possible"
    }
  ];

  return (
    <>
      <MetaHead
        title="Careers at Intelligent Design Tucson | HVAC, Plumbing, Solar & Electrical Jobs"
        description={description}
        canonical={`${SITE_URL}/careers`}
        openGraph={{
          title: "Careers at Intelligent Design Tucson | Join Our Team",
          description,
          image: imageUrl,
          url: `${SITE_URL}/careers`,
        }}
        twitter={{
          title: "Careers at Intelligent Design Tucson | Join Our Team",
          description,
          image: imageUrl,
          imageAlt: "Intelligent Design team of professional technicians in Tucson",
        }}
      />
      <GTM />
      <DNIInjector />
      <Header />
      <MobileFloatingActions />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative text-white py-16 md:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${careersHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" data-testid="heading-hero">
                Join the Intelligent Design Family
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-6" data-testid="text-trust-indicator">
                Tucson's #1 Rated Home Services Company
              </p>
              <p className="text-xl mb-8 text-gray-200" data-testid="text-hero-description">
                Build Your Career with a Family & Veteran-Owned Company | Competitive Pay | Full Benefits | Paid Training
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="destructive"
                  asChild
                >
                  <a href="#current-openings" data-testid="button-view-jobs-hero">
                    View Current Openings
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold"
                  asChild
                >
                  <a href="tel:+15203332665" data-testid="button-call-hero">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (520) 333-2665
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* TrustBar Component */}
        <TrustBar />

        {/* Benefits Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3" data-testid="heading-benefits">
              When You Join Our Family, You Get This & More
            </h2>
            <p className="text-center text-gray-600 mb-10">
              Competitive compensation and industry-leading benefits package
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  data-testid={`card-benefit-${index}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex-shrink-0 mb-4">
                      <benefit.icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary/5 border-2 border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Additional Benefits Include:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Monthly, quarterly & yearly rewards and bonuses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Company-provided iPad & smartphone with service software</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Company-provided uniforms with paid laundry service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Employee discounts on all company services</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ongoing professional development opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Clear career advancement paths</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Family leave (maternity and paternity)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Food and snacks provided</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 my-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Join Our Team?
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Browse our current openings below and apply today!
                </p>
                <Button
                  size="lg"
                  variant="default"
                  asChild
                >
                  <a href="#current-openings" data-testid="button-view-jobs-content">
                    View Open Positions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work Here Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" data-testid="heading-why-work-here">
                Why Choose a Career at Intelligent Design?
              </h2>
              
              <p className="text-gray-700 mb-6">
                At <strong>Intelligent Design Air Conditioning, Plumbing, Solar, & Electric</strong>, we're not just another employer—we're a family. Founded by Marine veteran Andrew Dobbins in 2009, our company has grown from a three-person garage operation to Tucson's most trusted home services company with over 80 team members and more than 22,000 five-star reviews.
              </p>

              <p className="text-gray-700 mb-6">
                When you join Intelligent Design, you're joining a team that values <strong>integrity, excellence, and military precision</strong> in everything we do. Our family and veteran-owned roots mean we understand the importance of loyalty, hard work, and taking care of our people. We don't just offer jobs—we offer careers with real growth potential, comprehensive support, and a workplace where you're truly valued.
              </p>

              <div className="bg-blue-50 border-l-4 border-primary p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What Makes Us Different
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Competitive Market Pay:</strong> We pay at the top of the market because we hire the best and want to keep them</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Best Advertising = Leads Galore:</strong> Our reputation and marketing bring you consistent work and earning opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Top Company Reputation:</strong> Work for Tucson's #1 rated company—a name you can be proud to represent</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Family-Friendly Environment:</strong> Work-life balance matters—we support our team members' personal lives and families</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Career Growth:</strong> Many of our managers and lead technicians started in entry-level positions and advanced with us</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                Positions We're Hiring For
              </h3>

              <p className="text-gray-700 mb-6">
                We're always looking for talented, motivated individuals to join our growing team. Whether you're an experienced technician or just starting your career in the trades, we have opportunities across multiple specialties:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">HVAC Positions</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• HVAC Service Technicians</li>
                    <li>• HVAC Installation Technicians</li>
                    <li>• HVAC Helpers & Apprentices</li>
                    <li>• Ductwork Specialists</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Plumbing Positions</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Licensed Plumbers</li>
                    <li>• Plumbing Service Technicians</li>
                    <li>• Plumbing Installation Specialists</li>
                    <li>• Drain Cleaning Technicians</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Solar & Electrical</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Solar Energy Installers</li>
                    <li>• Licensed Electricians</li>
                    <li>• Solar Sales Consultants</li>
                    <li>• Electrical Helpers</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">Other Positions</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Customer Service Representatives</li>
                    <li>• Dispatchers</li>
                    <li>• Administrative Staff</li>
                    <li>• Sales & Marketing Roles</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                What Our Team Says
              </h3>

              <p className="text-gray-700 mb-6">
                Don't just take our word for it—talk to our current HVAC technicians, plumbers, solar installers, and other team members. They'll tell you why working with Intelligent Design is the best decision they've made for their careers. Our team members consistently cite our supportive culture, excellent pay and benefits, professional growth opportunities, and the pride they feel representing Tucson's #1 rated home services company.
              </p>

            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section id="current-openings" className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3" data-testid="heading-current-openings">
              Explore Our Current Job Openings
            </h2>
            <p className="text-center text-gray-600 mb-12">
              See all available positions and apply online today
            </p>
            
            {/* WhoHire Plugin Embed */}
            <div 
              id="hirewho-plugin" 
              data-slug="intelligentdesignairconditioningplumbingroofingsolarelectric"
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
              data-testid="container-whohire"
            />
            
            <div className="text-center mt-8">
              <p className="text-gray-700 mb-4">
                Don't see a position that fits? We're always looking for talented people!
              </p>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-recruiting">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Our Recruiting Team: (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4" data-testid="heading-faq">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Get answers to common questions about careers at Intelligent Design
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-1">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What positions is Intelligent Design currently hiring for?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Intelligent Design is hiring for various positions including HVAC Service Technicians, HVAC Installers, Licensed Plumbers, Solar Energy Installers, Licensed Electricians, Customer Service Representatives, and more. Check our current job openings on this page to see all available positions and apply today.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-2">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What benefits do Intelligent Design employees receive?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Intelligent Design offers comprehensive benefits including competitive pay, health insurance (medical, dental, vision), 9 paid holidays, quarterly and yearly bonuses, company-provided vehicles you take home, gas cards, paid training, uniforms with laundry service, company iPad and smartphone, life insurance, disability insurance, and employee discounts on services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-3">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Does Intelligent Design provide training for new employees?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes! Intelligent Design provides advanced training in sales, technical skills, and management. We invest in our team members' professional development to help them grow their careers. Our training programs cover the latest technologies and best practices in HVAC, plumbing, solar, electrical, and roofing services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Do I need experience to apply for a job at Intelligent Design?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  While experience in HVAC, plumbing, electrical, or solar is valuable, we also hire motivated individuals who are eager to learn. We provide comprehensive training and mentorship programs to help you develop the skills needed to succeed. Licensed technicians and installers are especially encouraged to apply.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-5">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  How do I apply for a position at Intelligent Design?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  You can apply directly through our careers page by browsing current openings and submitting your application online. You can also call our office at (520) 333-2665 to speak with our hiring team. We review applications regularly and reach out to qualified candidates for interviews.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What is the company culture like at Intelligent Design?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Intelligent Design is a family and veteran-owned company with a family-friendly culture. Founded by Marine veteran Andrew Dobbins, we bring military precision, integrity, and strong values to everything we do. Our team of 80+ members operates like a family, supporting each other and celebrating successes together.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-7" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-7">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Does Intelligent Design offer career advancement opportunities?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Absolutely! We believe in promoting from within and providing clear career paths for our team members. Many of our current managers and lead technicians started in entry-level positions. We offer ongoing training, mentorship, and opportunities to advance into leadership roles as you grow with the company.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-8" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-8">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What kind of vehicles does Intelligent Design provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Intelligent Design provides fully stocked company vans and trucks that you take home each night. Our service vehicles are equipped with the tools and parts you need to provide excellent service. We also provide company gas cards, so you never worry about fuel costs for work-related driving.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-9" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-9">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Is Intelligent Design an equal opportunity employer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, Intelligent Design is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. We hire based on qualifications, skills, and cultural fit regardless of race, color, religion, gender, age, national origin, disability status, or veteran status.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-10" className="bg-gray-50 border border-gray-200 rounded-lg px-6" data-testid="accordion-faq-10">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  What makes Intelligent Design different from other employers in Tucson?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Intelligent Design stands out with competitive market-leading pay, comprehensive benefits, a family-friendly culture, company vehicles you take home, fully-stocked trucks, advanced training opportunities, and a proven track record as Tucson's #1 rated home services company with over 22,000 five-star reviews. We invest in our people because we know they're our greatest asset.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-cta">
              Start Your Career with Tucson's #1 Rated Company
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join our team and enjoy competitive pay, comprehensive benefits, and a family-friendly work environment!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
              >
                <a href="#current-openings" data-testid="button-apply-cta">
                  Apply Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground"
                asChild
              >
                <a href="tel:+15203332665" data-testid="button-call-cta">
                  <Phone className="w-5 h-5 mr-2" />
                  (520) 333-2665
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
