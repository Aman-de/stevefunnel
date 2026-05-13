import { ArrowRight } from 'lucide-react';
import unitrustLogo from './assets/unitrust-logo.png';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 font-sans selection:bg-[#C5A059]/30 selection:text-white flex flex-col">
      <nav className="w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 py-4 md:py-6 px-4 md:px-8 lg:px-12 flex justify-between items-center fixed top-0">
        <a href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C5A059] to-[#8C6D33] flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            <span className="font-heading font-bold text-black text-sm">CF</span>
          </div>
          <span className="font-heading font-bold tracking-tight text-white text-lg group-hover:text-[#C5A059] transition-colors">Current Financial</span>
        </a>
        <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to Home
        </a>
      </nav>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 block">Legal & Compliance</span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 font-medium mb-6">Effective Date: May 13, 2026</p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C5A059] to-transparent rounded-full mx-auto"></div>
        </div>

        <div className="w-full glass-panel p-6 sm:p-10 md:p-14 rounded-[24px] border border-white/5 bg-[#0A0A0A]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 blur-3xl pointer-events-none rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10 text-gray-300 font-light leading-relaxed space-y-10">
            
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Current Financial Group LLC ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at currentfinancialgroup.com or interact with us via SMS or other communications.
              </p>
              <p>
                Please read this policy carefully. If you disagree with its terms, please discontinue use of our site and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-gray-100 mb-2 mt-6">Information Collected Directly From You</h3>
              <p className="mb-3">We may collect the following personal information that you provide directly to us:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Contact preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-100 mb-2 mt-6">Information Collected From Other Sources</h3>
              <p className="mb-3">We also collect personal information about individuals from the following public sources:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>Public government databases, including state Department of Insurance licensee records</li>
                <li>Publicly available social media groups and platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>To comply with our legal obligations</li>
                <li>To deliver and facilitate delivery of services to you</li>
                <li>To evaluate and improve our services, products, marketing, and user experience</li>
                <li>To respond to your inquiries and offer support</li>
                <li>To send administrative information</li>
                <li>To send marketing and promotional communications about career opportunities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">4. SMS Communications</h2>
              <p className="mb-4">
                Current Financial Group LLC may send SMS messages to individuals who have expressed interest in career opportunities with our organization. By responding to our messages, you consent to receive further SMS communications from us.
              </p>
              <p className="mb-4">
                Message frequency varies. Message and data rates may apply.
              </p>
              <p className="mb-4">
                To opt out of SMS communications at any time, reply <strong className="text-white">STOP</strong> to any message. For help, reply <strong className="text-white">HELP</strong>.
              </p>
              <p>
                We do not share your phone number or mobile information with third parties or affiliates for marketing or promotional purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">5. Disclosure of Your Information</h2>
              <p className="mb-3">
                We may share your information with the following categories of third-party service providers who assist us in operating our business:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-400">
                <li>Cloud computing services</li>
                <li>Communication and collaboration tools</li>
                <li>Data storage service providers</li>
                <li>Sales and marketing tools</li>
                <li>Website hosting service providers</li>
              </ul>
              <p>
                We do not sell your personal information to third parties. We do not disclose your information to business partners, affiliates, or subsidiaries.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us at:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 inline-block">
                <p className="mb-2"><strong className="text-gray-400">Email:</strong> <a href="mailto:steven@currentfinancialgroup.com" className="text-[#C5A059] hover:underline">steven@currentfinancialgroup.com</a></p>
                <p><strong className="text-gray-400">Website:</strong> currentfinancialgroup.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">8. Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="font-semibold text-white mb-2">Current Financial Group LLC</p>
                <p className="mb-4 text-gray-400">
                  701 State Route 440 Ste 16 #1274<br/>
                  Jersey City, NJ 07304
                </p>
                <p className="mb-2"><strong className="text-gray-500">Email:</strong> <a href="mailto:steven@currentfinancialgroup.com" className="text-[#C5A059] hover:underline">steven@currentfinancialgroup.com</a></p>
                <p><strong className="text-gray-500">Website:</strong> currentfinancialgroup.com</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="w-full relative z-10 border-t border-white/5 bg-[#030303] pt-8 pb-8 overflow-hidden mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-600 font-medium">Powered by</span>
              <img src={unitrustLogo} alt="UniTrust Financial Group" className="h-4 mix-blend-multiply brightness-75 contrast-125" />
            </div>
            <p className="text-[10px] md:text-xs text-gray-600 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Current Financial. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
