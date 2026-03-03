import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/animations/FadeIn";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Terms of Service" 
        description="Terms of Service for Highpoint Digital." 
      />
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Highpoint Digital website and services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Description</h2>
              <p>
                Highpoint Digital provides digital marketing services, including but not limited to paid advertising management, search engine optimisation, website design, and lead generation systems. Specific deliverables are outlined in individual client service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
              <p>
                You agree to provide accurate and complete information when engaging with our services. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p>
                All content provided on this website is for informational purposes only. The website and its original content, features, and functionality are owned by Highpoint Digital and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Payment and Refunds</h2>
              <p>
                Fees for our services are set forth in individual proposals or service agreements. Unless otherwise stated in writing, all fees are non-refundable once services have commenced.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall Highpoint Digital, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of Australia, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at info@highpointdigital.com.au.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </div>
  );
}
