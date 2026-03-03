import { useRoute, Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import SEO from "@/components/SEO";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
      />
      <Navbar />

      {/* Article Header */}
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl relative">
        <FadeIn>
          <Link href="/blog">
            <div className={buttonVariants({ variant: "ghost", className: "text-muted-foreground hover:text-white mb-8 pl-0 group cursor-pointer" })}>
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </div>
          </Link>

          <div className="flex items-center gap-4 text-sm text-primary font-medium tracking-widest uppercase mb-6">
            <span className="bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between py-8 border-y border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-white font-bold">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-white rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 max-w-5xl mb-20">
        <FadeIn delay={0.1}>
          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 relative">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 max-w-3xl mb-24">
        <FadeIn delay={0.2}>
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </FadeIn>
      </article>

      {/* Next Article CTA */}
      <div className="border-t border-white/10 py-20 bg-white/2">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <p className="text-muted-foreground mb-4">Enjoyed this article?</p>
           <h3 className="text-3xl font-bold text-white mb-8">Ready to implement these strategies in your business?</h3>
           <Link href="/contact">
             <div className={buttonVariants({ size: "lg", className: "bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg cursor-pointer" })}>
               Book Your Strategy Call
             </div>
           </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
