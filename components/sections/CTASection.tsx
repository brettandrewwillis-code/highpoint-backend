import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-bottom-right z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            Ready to Reach Your Highpoint?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            If you’re serious about growing your business and generating consistent leads, let’s build a strategy that works.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col items-center gap-4"
          >
            <Link href="/contact">
              <div className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-8 text-xl h-auto group shadow-[0_0_20px_-5px_var(--color-primary)] cursor-pointer" })}>
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Limited strategy sessions available each month.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
