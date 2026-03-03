import FadeIn from "@/components/animations/FadeIn";

interface Stat {
  label: string;
  value: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-20 border-y border-white/5 bg-white/2 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn 
              key={index}
              delay={index * 0.1}
              className="text-center md:text-left"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-muted-foreground uppercase tracking-wider text-sm">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
