import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import FadeIn from "@/components/animations/FadeIn";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Highpoint Digital." 
      />
      <Navbar />
      
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Highpoint Digital ("us", "we", or "our") operates the website and provides digital marketing services. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
              </p>
              <p className="mt-4">
                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Names</li>
                <li>Phone numbers</li>
                <li>Email addresses</li>
                <li>Business names</li>
                <li>Job titles</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>
                We use personal information collected via our website for a variety of business purposes described below:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>To send you administrative information.</li>
                <li>To fulfill and manage your orders.</li>
                <li>To post testimonials.</li>
                <li>To request feedback.</li>
                <li>To send you marketing and promotional communications.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade your personal information with third parties for their promotional purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at info@highpointdigital.com.au.
              </p>
            </section>
          </div>
        </FadeIn>
      </div>

      <Footer />
    </div>
  );
}
