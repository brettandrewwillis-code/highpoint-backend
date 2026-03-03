import { Button, buttonVariants } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  positioning: string;
  audience: string;
  features: string[];
  cta: string;
  highlight: boolean;
  color: string;
  disclaimer?: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <FadeIn 
      delay={index * 0.1}
      className="h-full"
    >
      <motion.div 
        whileHover={{ y: -10 }}
        className={`rounded-3xl p-8 md:p-10 border bg-card relative flex flex-col h-full transition-all duration-300 ${plan.color} ${plan.highlight ? 'bg-white/5' : 'bg-white/2'}`}
      >
        {plan.highlight && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Most Popular
          </div>
        )}
        
        <div className="mb-8">
          <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">{plan.positioning}</div>
          <h3 className="text-3xl font-display font-bold text-white mb-4">{plan.name}</h3>
          <div className="flex flex-col mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
              <span className="text-muted-foreground font-medium">{plan.period}</span>
            </div>
            {plan.disclaimer && (
              <span className="text-xs text-muted-foreground mt-2 italic">{plan.disclaimer}</span>
            )}
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
             <p className="text-sm text-white/80 leading-relaxed">
               <span className="text-white font-bold block mb-1">Best For:</span> 
               {plan.audience}
             </p>
          </div>
        </div>

        <div className="flex-grow mb-10">
          <ul className="space-y-4">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/80 group">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/contact" className="w-full block">
          <div 
            className={buttonVariants({ 
              variant: "ghost",
              className: `w-full py-7 rounded-xl font-bold text-lg transition-all duration-300 h-auto cursor-pointer ${
                plan.highlight 
                  ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" 
                  : "bg-white text-black hover:bg-white/90"
              }`
            })}
          >
            {plan.cta}
          </div>
        </Link>
      </motion.div>
    </FadeIn>
  );
}
