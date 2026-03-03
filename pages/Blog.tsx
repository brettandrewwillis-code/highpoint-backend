import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SEO from "@/components/SEO";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Blog" 
        description="Insights, strategies, and guides for trade and service businesses looking to scale. Learn about Google Ads, SEO, and lead generation." 
      />
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 border-b border-white/5">
        <FadeIn className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-primary font-medium tracking-widest uppercase text-sm block mb-4">The Knowledge Base</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Insights for Growth</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Actionable advice on marketing, sales, and operations for the modern trade business.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1} className="flex flex-col h-full group">
              <Link 
                href={`/blog/${post.slug}`}
                className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
              >
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/10">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                           {post.author.charAt(0)}
                        </div>
                        <span className="text-xs text-white/80">{post.author}</span>
                      </div>
                      <span className="text-primary text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                        Read Article <ArrowRight className="ml-1 w-3 h-3" />
                      </span>
                    </div>
                  </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>

      <CTASection />
      <Footer />
    </div>
  );
}
