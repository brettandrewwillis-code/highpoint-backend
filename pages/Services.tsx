import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import SEO from "@/components/SEO";
import React from "react";

interface ServiceSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featuresTitle: string;
  features: string[];
  idealFor?: string;
  result?: string;
  outcome?: string;
  goal?: string;
}

const services: ServiceSection[] = [
  {
    id: "paid-advertising",
    title: "1. Paid Advertising (Google & Meta Ads)",
    subtitle: "Turn ad spend into consistent revenue.",
    description: "We create, manage, and optimise high-performing campaigns across Google and Meta platforms to generate quality leads at scale.",
    featuresTitle: "What's Included:",
    features: [
      "Google Search & Performance Max campaigns",
      "Meta (Facebook & Instagram) lead generation campaigns",
      "Strategic campaign planning",
      "Ad copywriting & creative direction",
      "Conversion tracking setup",
      "Weekly optimisation & reporting"
    ],
    idealFor: "Businesses that want fast, scalable lead generation."
  },
  {
    id: "lead-generation",
    title: "2. Lead Generation Systems",
    subtitle: "More than traffic. We build conversion machines.",
    description: "We design complete funnels that capture, nurture, and convert prospects automatically.",
    featuresTitle: "What's Included:",
    features: [
      "Landing page design",
      "High-converting lead magnets",
      "CRM setup & automation",
      "SMS & email follow-up sequences",
      "Pipeline tracking",
      "Appointment booking integrations"
    ],
    result: "Higher conversion rates and zero wasted leads."
  },
  {
    id: "website-design",
    title: "3. Website Design & Optimisation",
    subtitle: "Your website should sell — not just sit there.",
    description: "We build modern, conversion-focused websites designed to turn visitors into paying customers.",
    featuresTitle: "What's Included:",
    features: [
      "Custom responsive website design",
      "Clear value messaging",
      "Conversion-driven layouts",
      "Speed optimisation",
      "On-page SEO fundamentals",
      "Contact & booking integrations"
    ],
    outcome: "A professional online presence that builds trust and drives action."
  },
  {
    id: "seo",
    title: "4. Search Engine Optimisation (SEO)",
    subtitle: "Be found when it matters most.",
    description: "We position your business at the top of search results for high-intent keywords that bring qualified traffic.",
    featuresTitle: "What's Included:",
    features: [
      "Keyword research & strategy",
      "On-page optimisation",
      "Technical SEO improvements",
      "Local SEO (Google Business optimisation)",
      "Content strategy",
      "Monthly ranking reports"
    ],
    goal: "Sustainable, long-term organic growth."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Services" 
        description="Growth-Driven Digital Marketing That Delivers Real Results. Paid Advertising, Lead Generation, Web Design, and SEO." 
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 container mx-auto px-4 border-b border-white/5">
        <FadeIn className="max-w-4xl mx-auto text-center mb-16">
           <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Growth-Driven Digital Marketing That Delivers Real Results</h1>
          <p className="text-xl md:text-2xl text-white font-light mb-8">
            At Highpoint Digital, we don't sell marketing.<br/>
            <span className="text-primary font-medium">We build predictable growth systems.</span>
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every strategy we implement is designed to generate leads, increase conversions, and maximise ROI — with full transparency and measurable outcomes.
          </p>
        </FadeIn>
      </div>

      {/* Services List */}
      <div className="py-20 container mx-auto px-4 space-y-24">
        {services.map((service, index) => (
          <div key={index} id={service.id} className="flex flex-col items-center scroll-mt-32">
            <FadeIn 
              className="w-full max-w-4xl mx-auto space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{service.title}</h2>
                <h3 className="text-xl text-primary font-medium mb-4">{service.subtitle}</h3>
                <p className="text-lg text-white/80 leading-relaxed">{service.description}</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-white font-bold mb-6 text-lg">{service.featuresTitle}</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {(service.idealFor || service.result || service.outcome || service.goal) && (
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-white font-medium">
                      {service.idealFor && <><span className="text-primary">Ideal For:</span> {service.idealFor}</>}
                      {service.result && <><span className="text-primary">Result:</span> {service.result}</>}
                      {service.outcome && <><span className="text-primary">Outcome:</span> {service.outcome}</>}
                      {service.goal && <><span className="text-primary">Goal:</span> {service.goal}</>}
                    </p>
                  </div>
                )}
              </div>

              <Link 
                href="/contact" 
                className={buttonVariants({ variant: "ghost", className: "bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-bold cursor-pointer" })}
              >
                Start Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              {/* Separator for all items except the last one */}
              {index < services.length - 1 && (
                <div className="w-full h-px bg-white/5 mt-24"></div>
              )}
            </FadeIn>
          </div>
        ))}
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}