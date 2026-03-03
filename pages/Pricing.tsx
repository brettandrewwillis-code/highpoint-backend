import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import SEO from "@/components/SEO";
import PricingCard, { PricingPlan } from "@/components/cards/PricingCard";

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$375",
    period: "/week",
    positioning: "The Foundation",
    audience: "Best for local tradies who need the phone to start ringing immediately.",
    features: [
      "Google Ads Management (Search)",
      "Google Business Profile Optimisation",
      "Basic Call Tracking",
      "Lead Alert Notifications",
      "Monthly Performance Report",
      "Email Support",
      "$1,000 setup fee"
    ],
    cta: "Start Growing",
    highlight: false,
    color: "border-white/10",
    disclaimer: "+ Ad spend (paid directly to platform)"
  },
  {
    name: "Growth",
    price: "$500",
    period: "/week",
    positioning: "The Accelerator",
    audience: "For growing teams that need a consistent flow of leads from multiple channels.",
    features: [
      "Everything in Starter",
      "Meta Ads (FB & Insta Retargeting)",
      "High-Converting Landing Page",
      "CRM & Lead Database Integration",
      "Automated SMS/Email Follow-ups",
      "Fortnightly Reporting",
      "$1,500 setup fee"
    ],
    cta: "Accelerate Now",
    highlight: true,
    color: "border-primary shadow-[0_0_30px_-5px_var(--color-primary)]",
    disclaimer: "+ Ad spend (paid directly to platform)"
  },
  {
    name: "Authority",
    price: "$625",
    period: "/week",
    positioning: "The Dominator",
    audience: "For market leaders who want to dominate search results and automate their sales process.",
    features: [
      "Everything in Growth",
      "Advanced Local SEO (Rankings)",
      "Reputation Management (Reviews)",
      "Content Strategy & Blogs",
      "Priority Support & Strategy Calls",
      "Weekly Reporting",
      "$2,000 setup fee"
    ],
    cta: "Dominate Market",
    highlight: false,
    color: "border-white/10",
    disclaimer: "+ Ad spend (paid directly to platform)"
  },
  {
    name: "Website Design",
    price: "$1,200",
    period: " starting from",
    positioning: "The Digital Storefront",
    audience: "For businesses that need a high-converting, professional online presence.",
    features: [
      "Custom UI/UX Design",
      "Mobile Responsive",
      "SEO Friendly Structure",
      "Fast Loading Speed",
      "Contact Form Integration",
      "CMS Setup (easy edits)",
      "Standard 5-page build"
    ],
    cta: "Build My Site",
    highlight: false,
    color: "border-white/10"
  },
  {
    name: "The Launchpad",
    price: "$2,500",
    period: " one-time",
    positioning: "Complete Turnkey Solution",
    audience: "The ultimate kickstart package. Website, socials, and ads all set up and ready to convert.",
    features: [
      "Everything in Website Design",
      "Everything in Growth Package",
      "Facebook & Instagram Setup",
      "Google Business Profile Setup",
      "1st Week Ads Management Included",
      "Priority Launch Support"
    ],
    cta: "Launch My Business",
    highlight: true,
    color: "border-primary shadow-[0_0_30px_-5px_var(--color-primary)]",
    disclaimer: "Then $500/week for ads management + Ad spend"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Pricing" 
        description="Transparent marketing pricing for trades and service businesses. Choose from Starter, Growth, or Scale packages designed to generate ROI, not just costs." 
      />
      <Navbar />
      
      {/* Hero */}
      <div className="pt-32 pb-20 container mx-auto px-4 text-center border-b border-white/5">
        <FadeIn>
          <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">Investment, Not Expense</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Transparent Pricing.<br/>Predictable Returns.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't charge hourly. We charge for the value, systems, and revenue we bring to your business.
          </p>
        </FadeIn>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap justify-center gap-6 max-w-[1600px] mx-auto items-start">
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-16px)] min-w-[300px] max-w-[400px]">
              <PricingCard plan={plan} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* ROI Philosophy Section */}
      <div className="bg-secondary/30 border-y border-white/5 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <FadeIn direction="right">
               <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Why Highpoint Focuses on ROI</h2>
               <div className="space-y-6 text-muted-foreground text-lg">
                 <p>
                   Most agencies bill you for hours worked or "creative output." We believe that's fundamentally broken. You shouldn't care how long it takes us to write an ad; you should care how much money that ad makes you.
                 </p>
                 <p>
                   Our pricing is structured to allow us to dedicate the necessary resources—expert strategists, premium tools, and relentless optimization—to ensure your campaigns don't just "run," but <strong>perform</strong>.
                 </p>
               </div>
             </FadeIn>
             <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: TrendingUp, title: "Profit First", desc: "Every campaign is engineered with your profit margin in mind. We track CPA, not just CPC." },
                  { icon: ShieldCheck, title: "No Hidden Fees", desc: "Setup fees, management fees, and software costs are all transparently discussed upfront." },
                  { icon: Zap, title: "Speed to Result", desc: "We launch fast and iterate faster. Time is money, and we don't waste either." }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} direction="left">
                    <div className="flex gap-4 p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-colors">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary h-fit">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
             </div>
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
