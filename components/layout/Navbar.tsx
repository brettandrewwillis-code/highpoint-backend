import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo-large.png";
import { siteConfig } from "@/config";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Free Audit", href: "/audit" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl shadow-black/5" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            <img src={logo} alt={siteConfig.company.name} className="h-[95px] md:h-[135px] w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-white/80"
              }`}
            >
                {link.name}
            </Link>
          ))}
          <a href={siteConfig.links.bookCall} target="_blank" rel="noreferrer">
            <div className={buttonVariants({ className: "bg-primary hover:bg-primary/90 text-white rounded-full px-6 cursor-pointer" })}>
              Book Strategy Call
            </div>
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-white/10 w-[300px] p-0">
              <div className="flex flex-col h-full p-8">
                <div className="mb-8">
                  <img src={logo} alt={siteConfig.company.name} className="h-[108px] w-auto object-contain" />
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className={`text-xl font-medium transition-colors ${
                        location === link.href ? "text-primary" : "text-white/80 hover:text-white"
                      }`}
                    >
                        {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
