import { Hammer, Ban, Trophy } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function IndustryFocus() {
  return (
    <section className="py-24 bg-zinc-900/50 border-y border-white/5">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">Why Specialization Matters</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Built for Trades & Service Businesses
          </h2>
          <p className="text-xl text-muted-foreground">
            Generalist agencies treat a plumber the same as an e-commerce store. We know that's a recipe for burning cash.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pain Points */}
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                <Hammer className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Reality</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span><strong>Feast or Famine:</strong> Weeks of overtime followed by dead silence.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span><strong>Bad Leads:</strong> "Price shoppers" who waste hours of your time and never book.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span><strong>Invisible Online:</strong> Competitors with worse service are ranking higher than you.</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Generic Agencies */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full hover:bg-white/10 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                <Ban className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Generic Agencies</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span><strong>Vanity Metrics:</strong> Reporting on "clicks" and "reach" instead of booked jobs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span><strong>Cookie Cutter:</strong> Using the same template for a roofer that they use for a bakery.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span><strong>No Industry Knowledge:</strong> They don't know the difference between a rough-in and a fit-out.</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Highpoint Advantage */}
          <FadeIn delay={0.3} className="h-full">
            <div className="bg-white/5 border border-primary/20 p-8 rounded-3xl h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 relative z-10">
                <Trophy className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">The Highpoint Way</h3>
              <ul className="space-y-4 text-white/80 relative z-10">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Exclusive Leads:</strong> We build assets you own. No sharing leads with 5 other tradies.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Revenue Focused:</strong> We track cost-per-lead and cost-per-acquisition.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Market Dominance:</strong> We aim to make you the #1 authority in your service area.</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
