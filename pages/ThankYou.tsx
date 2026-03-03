import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/animations/FadeIn";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Thank You"
        description="Your market report is being generated. We'll be in touch shortly."
      />
      <Navbar />

      <section className="pt-32 pb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6" data-testid="text-thank-you-title">
              Your Market Report is Being Generated
            </h1>

            <Card className="bg-white/5 border-white/10 mb-8">
              <CardContent className="p-6 sm:p-8">
                <p className="text-white/70 text-base sm:text-lg mb-4">
                  We have received your audit request and our team is preparing your personalised Dominance Plan.
                </p>
                <p className="text-white/50 text-sm">
                  A confirmation has been sent to your email. One of our strategists will be in touch within 24 hours to walk you through your results.
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit">
                <Button
                  data-testid="button-run-another"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg font-bold"
                >
                  Run Another Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button
                  data-testid="button-back-home"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 py-6 text-lg"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
