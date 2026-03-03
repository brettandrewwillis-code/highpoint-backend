import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import heroBg from "@/assets/hero-bg.png";
import { Check, Target, Users, BarChart } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="About Us" 
        description="Highpoint Digital was built to eliminate marketing waste for trades and service businesses. Learn about our mission, our founder, and our ROI-obsessed culture." 
      />
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 container mx-auto px-4 border-b border-white/5">
        <FadeIn className="max-w-4xl mx-auto text-center">
           <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">Our Mission</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            To Eliminate Marketing Waste for <span className="text-primary">Hard-Working</span> Businesses.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We believe that every dollar you spend on marketing should fight for your bottom line. No fluff. No vanity metrics. Just measurable growth.
          </p>
        </FadeIn>
      </div>

      {/* Who We Help & Philosophy */}
      <div className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
              Built for Trades, Service, & Local Leaders.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Highpoint Digital wasn't built for Silicon Valley startups or e-commerce giants. It was built for the backbone of the economy—HVAC techs, roofers, lawyers, and local service providers.
              </p>
              <p>
                We understand that you don't care about "impressions" or "brand affinity." You care about phone calls, booked appointments, and revenue in the bank.
              </p>
              <p>
                Our philosophy is simple: <strong>If it doesn't make money, we don't do it.</strong>
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["ROI-Obsessed Culture", "Exclusive Lead Systems", "Total Transparency", "No Long-Term Locks"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn direction="left" className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
               <div className="flex items-start gap-6 mb-8">
                 <div className="p-4 bg-background rounded-2xl border border-white/10 text-primary">
                   <Target className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2">Precision Targeting</h3>
                   <p className="text-muted-foreground">We don't cast a wide net. We use data to identify exactly who needs your service right now.</p>
                 </div>
               </div>
               <div className="flex items-start gap-6 mb-8">
                 <div className="p-4 bg-background rounded-2xl border border-white/10 text-primary">
                   <BarChart className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2">Data-Driven Decisions</h3>
                   <p className="text-muted-foreground">Gut feelings destroy budgets. We optimize based on hard data and conversion tracking.</p>
                 </div>
               </div>
               <div className="flex items-start gap-6">
                 <div className="p-4 bg-background rounded-2xl border border-white/10 text-primary">
                   <Users className="w-8 h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-white mb-2">Partnership, Not Vendor</h3>
                   <p className="text-muted-foreground">We view your budget as our own. If we wouldn't spend it on our business, we won't spend it on yours.</p>
                 </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Founder Story */}
      <div className="py-24 bg-secondary/30 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
               <div className="md:col-span-1">
                 <FadeIn className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 relative group">
                   <img src={heroBg} alt="Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                   <div className="absolute bottom-6 left-6">
                     <p className="text-white font-bold text-lg">Brett Willis</p>
                     <p className="text-primary text-sm">Founder & CEO</p>
                   </div>
                 </FadeIn>
               </div>
               <div className="md:col-span-2">
                 <FadeIn delay={0.2}>
                   <h2 className="text-3xl font-display font-bold text-white mb-6">Why I Started Highpoint</h2>
                   <div className="space-y-6 text-muted-foreground leading-relaxed">
                     <p>
                       "I grew up in a blue-collar family. My dad was a general contractor. I watched him build incredible houses but struggle to find the next job. He was great at what he did, but he hated 'sales' and was constantly burned by marketing agencies that promised the world and delivered nothing."
                     </p>
                     <p>
                       "I built Highpoint Digital to be the agency I wish my dad had. An agency that respects the hard work it takes to earn a dollar. An agency that is transparent, honest, and relentlessly focused on one thing: <strong>Putting more money in your pocket than you pay us.</strong>"
                     </p>
                     <p>
                       "We don't hide behind jargon. We don't lock you into 12-month contracts because we know our results will keep you here. That's the Highpoint promise."
                     </p>
                   </div>
                 </FadeIn>
               </div>
             </div>
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
