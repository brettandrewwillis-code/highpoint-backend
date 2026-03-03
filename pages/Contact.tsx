import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import FadeIn from "@/components/animations/FadeIn";
import SEO from "@/components/SEO";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  company: z.string().min(2, "Business name is required"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

import { siteConfig } from "@/config";

// ...

import { InlineWidget } from "react-calendly";

export default function Contact() {
  // ... (keep form logic)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ... */}
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 border-b border-white/5">
        {/* ... */}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
          
          {/* Contact Form - Left Side (3 cols) */}
          {/* ... (keep form) */}

          {/* Contact Info & Booking - Right Side (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Direct Booking CTA */}
            <FadeIn direction="left" delay={0.1}>
              <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                <InlineWidget 
                  url={siteConfig.links.bookCall}
                  styles={{ height: '600px' }}
                  pageSettings={{
                    backgroundColor: '0a0a0a',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '8dc73f',
                    textColor: 'ffffff'
                  }}
                />
              </div>
            </FadeIn>

            {/* Contact Details */}
            <FadeIn direction="left" delay={0.2}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Email Us</h5>
                      <a href={`mailto:${siteConfig.company.email}`} className="text-muted-foreground hover:text-primary transition-colors">{siteConfig.company.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Call Us</h5>
                      <a href={`tel:${siteConfig.company.phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">{siteConfig.company.phoneDisplay}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-1">Headquarters</h5>
                      <p className="text-muted-foreground">{siteConfig.company.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
