import { motion } from "framer-motion";

export default function SectionSeparator() {
  return (
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </div>
  );
}
