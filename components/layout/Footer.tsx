import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-large.png";

import { siteConfig } from "@/config";

// ...

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="block mb-6">
                <img src={logo} alt={siteConfig.company.name} className="h-[104px] w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground mb-6">
              Performance Marketing for Trades & Service Businesses
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.links.twitter} className="text-white/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.links.facebook} className="text-white/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={siteConfig.links.instagram} className="text-white/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={siteConfig.links.linkedin} className="text-white/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ... (keep services and company columns) */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services#paid-advertising" className="text-muted-foreground hover:text-white transition-colors block">Paid Advertising</Link></li>
              <li><Link href="/services#lead-generation" className="text-muted-foreground hover:text-white transition-colors block">Lead Generation Systems</Link></li>
              <li><Link href="/services#website-design" className="text-muted-foreground hover:text-white transition-colors block">Website Design</Link></li>
              <li><Link href="/services#seo" className="text-muted-foreground hover:text-white transition-colors block">SEO & Local Optimisation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="text-muted-foreground hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-white transition-colors">
                  {siteConfig.company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.company.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {siteConfig.company.phoneDisplay}
                </a>
              </li>
              <li>
                {siteConfig.company.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
