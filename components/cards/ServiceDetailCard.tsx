import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { ReactNode } from "react";

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  pitch: string;
  cta: string;
  color: string;
}

interface ServiceDetailCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceDetailCard({ service, index }: ServiceDetailCardProps) {
  return (
    <FadeIn 
      direction="up"
      delay={index * 0.1}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10 rounded-full" />
      
      <div className="flex flex-col gap-10 items-start max-w-4xl mx-auto">
        {/* Content Side */}
        <div className="w-full space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 flex items-center gap-4">
              {service.title}
            </h2>
            <p className="text-xl text-white font-light leading-relaxed">
              {service.pitch}
            </p>
          </div>

          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg font-bold w-full sm:w-auto">
                {service.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
