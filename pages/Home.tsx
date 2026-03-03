import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Users, TrendingUp, Monitor, Search, BarChart, CheckCircle2, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import SectionSeparator from "@/components/ui/SectionSeparator";
import heroBg from "@/assets/hero-bg.png";
import servicesBg from "@/assets/services-bg.png";
import IndustryFocus from "@/components/sections/IndustryFocus";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO 
        title="Home" 
        description="Highpoint Digital turns clicks into clients. We help service-based businesses dominate their local market with high-converting websites, paid ads, and data-driven digital marketing strategies." 
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-60">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Digital Marketing Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-5xl" direction="up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] text-white mb-8">
              We Turn Clicks <br/>
              <span className="text-primary">Into Clients.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              Highpoint Digital helps service-based businesses dominate their local market with high-converting websites, paid ads, and data-driven digital marketing strategies.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
              We don’t chase vanity metrics. We build predictable lead systems that generate real enquiries, real bookings, and real revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-7 text-lg h-auto group shadow-[0_0_20px_-5px_var(--color-primary)] cursor-pointer" })}
              >
                  Get a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className={buttonVariants({ variant: "outline", size: "lg", className: "border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-7 text-lg h-auto hover:border-white/40 cursor-pointer" })}
              >
                  View Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionSeparator />

      {/* TRUST / POSITIONING STRIP */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-5xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
               Built for Growth. Engineered for Results.
             </h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               We partner with ambitious businesses who are ready to scale. Whether you’re a trades business, local service provider, or growing brand — we create digital systems that deliver measurable ROI.
             </p>
          </FadeIn>
        </div>
      </section>

      <SectionSeparator />

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <FadeIn direction="right">
                 <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                   Your Growth Partner — <br/>
                   <span className="text-primary">Not Just Another Agency.</span>
                 </h2>
                 <div className="space-y-8 text-xl text-muted-foreground">
                   <p>
                     At Highpoint Digital, we combine strategy, creativity, and performance marketing to help businesses grow faster and smarter. Every campaign is built around one core objective: generating qualified leads that convert.
                   </p>
                   <p>
                     No guesswork. No bloated retainers. Just clear strategy, transparent reporting, and results you can track.
                   </p>
                 </div>
                 <div className="mt-10">
                   <Link 
                     href="/about" 
                     className={buttonVariants({ variant: "outline", className: "border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 py-7 text-lg font-bold cursor-pointer" })}
                   >
                       Learn More About Us
                   </Link>
                 </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2}>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-8 mt-16">
                       <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover-glow group transition-all duration-500">
                          <BarChart className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                          <h3 className="text-white text-xl font-bold mb-3">Data Driven</h3>
                          <p className="text-muted-foreground leading-relaxed">Decisions based on real performance metrics.</p>
                       </div>
                       <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover-glow group transition-all duration-500">
                          <Users className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                          <h3 className="text-white text-xl font-bold mb-3">Client Focused</h3>
                          <p className="text-muted-foreground leading-relaxed">Your growth is our primary success metric.</p>
                       </div>
                    </div>
                    <div className="space-y-8">
                       <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover-glow group transition-all duration-500">
                          <Target className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                          <h3 className="text-white text-xl font-bold mb-3">Precision Targeting</h3>
                          <p className="text-muted-foreground leading-relaxed">Reaching the right people at the right time.</p>
                       </div>
                       <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover-glow group transition-all duration-500">
                          <Zap className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" />
                          <h3 className="text-white text-xl font-bold mb-3">Fast Execution</h3>
                          <p className="text-muted-foreground leading-relaxed">Rapid deployment of winning strategies.</p>
                       </div>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      <SectionSeparator />

      {/* SERVICES PREVIEW SECTION */}
      <section className="py-32 bg-secondary/30 border-y border-white/5 relative">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 -z-10 opacity-20 pointer-events-none">
             <img src={servicesBg} alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-20">
            <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">What We Do Best</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Paid Advertising",
                desc: "Google Ads and Meta Ads campaigns designed to drive consistent, high-quality leads at the lowest possible cost."
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Website Design",
                desc: "Modern, high-converting websites built to turn visitors into enquiries and bookings."
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: "SEO & Local Optimisation",
                desc: "Rank higher, get found locally, and build long-term organic traffic that compounds over time."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Lead Generation Systems",
                desc: "Full funnel strategy including landing pages, automation, CRM setup, and follow-up systems."
              }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <div className="bg-background border border-white/10 p-10 rounded-3xl h-full hover:border-primary/50 transition-all duration-500 group flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/services" 
              className={buttonVariants({ variant: "ghost", size: "lg", className: "bg-white text-black hover:bg-white/90 rounded-full px-10 py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer" })}
            >
              Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* RESULTS / VALUE SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-4">
           <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-[3rem] p-10 md:p-20 border border-primary/20 shadow-2xl shadow-primary/5">
              <FadeIn className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Marketing That Actually Moves the Needle.</h2>
              </FadeIn>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 mb-16">
                {[
                  "Data-driven strategy backed by real analytics",
                  "Clear monthly reporting and performance tracking",
                  "Conversion-focused landing pages",
                  "Automated follow-up systems to maximise leads",
                  "Scalable growth strategies"
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="flex items-start gap-5">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/30">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-xl text-white/90 font-light">{item}</span>
                  </FadeIn>
                ))}
              </div>
              
              <FadeIn className="text-center pt-10 border-t border-white/10">
                <p className="text-3xl font-display font-bold text-white">We focus on what matters — <span className="text-primary">revenue growth.</span></p>
              </FadeIn>
           </div>
        </div>
      </section>

      <SectionSeparator />

      {/* PROCESS SECTION */}
      <section className="py-32 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4">
           <FadeIn className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our 3-Step Growth Framework</h2>
           </FadeIn>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
             {[
               {
                 step: "01",
                 title: "Strategy",
                 desc: "We audit your business, competitors, and market to build a tailored growth plan."
               },
               {
                 step: "02",
                 title: "Build",
                 desc: "We launch campaigns, optimise your website, and implement tracking systems."
               },
               {
                 step: "03",
                 title: "Scale",
                 desc: "We refine, optimise, and scale what’s working to maximise ROI."
               }
             ].map((item, index) => (
               <FadeIn key={index} delay={index * 0.2} className="relative group">
                 <div className="bg-background border border-white/10 p-12 rounded-3xl h-full hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                   <div className="text-8xl font-display font-bold text-white/5 mb-8 absolute top-8 right-10 pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                     {item.step}
                   </div>
                   <h3 className="text-3xl font-bold text-primary mb-6">{item.title}</h3>
                   <p className="text-muted-foreground text-lg leading-relaxed">
                     {item.desc}
                   </p>
                 </div>
               </FadeIn>
             ))}
           </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}