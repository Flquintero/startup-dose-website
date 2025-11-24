import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Startup Dose',
  description: 'Startup Dose privacy policy describing how we collect, use, and protect your information.',
};

export default function PrivacyPolicy(): JSX.Element {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0d] transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-10">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#111] dark:text-white mb-2">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Last Updated */}
        <p className="text-neutral-600 dark:text-neutral-400 text-center mb-8">
          Last updated: November 24, 2025
        </p>

        {/* Policy Content */}
        <div className="space-y-8">
          {/* Intro */}
          <section className="space-y-4">
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              Startup Dose (&quot;Startup Dose,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website located at{' '}
              <Link href="https://startupdose.com" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                startupdose.com
              </Link>{' '}
              and related services (collectively, the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and protect information about you when you use the Service.
            </p>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              By accessing or using Startup Dose, you agree to this Privacy Policy.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                1. Information We Collect
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              We collect information in three ways: (a) information you provide, (b) information collected automatically, and (c) information from third parties.
            </p>

            <h3 className="text-xl font-bold text-[#111] dark:text-white mt-6">A. Information you provide</h3>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">Depending on how you use the Service, you may provide:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li><strong>Contact information:</strong> such as your name and email address when you subscribe to our newsletter, join a waitlist, contact us, or submit a startup.</li>
              <li><strong>Submission content:</strong> information you include in a startup submission form (e.g., company name, website, description, social links, and contact details).</li>
              <li><strong>Communications:</strong> content of messages or emails you send us.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#111] dark:text-white mt-6">B. Information collected automatically</h3>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">When you visit Startup Dose, we may automatically collect:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li><strong>Device and usage data:</strong> IP address, browser type, device identifiers, operating system, pages viewed, time spent on pages, referring/exit pages, clicks, and other activity.</li>
              <li><strong>Approximate location:</strong> inferred from your IP address.</li>
              <li><strong>Cookies and similar technologies:</strong> used for functionality, analytics, and remembering preferences.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#111] dark:text-white mt-6">C. Information from third parties</h3>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">We may receive information about you from:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li>Analytics providers (e.g., Google Analytics, Plausible, PostHog).</li>
              <li>Email service providers (e.g., Mailchimp, Beehiiv, ConvertKit) when you subscribe or engage with emails (e.g., opens/clicks).</li>
              <li>Social platforms when you interact with embedded content (e.g., X/Twitter, LinkedIn, Instagram, YouTube). These platforms may collect data per their own policies.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                2. How We Use Information
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">We use information to:</p>
            <ol className="list-decimal pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li>Provide and operate the Service, including publishing startup features and maintaining website functionality.</li>
              <li>Send newsletters or updates you requested and manage subscriptions.</li>
              <li>Respond to inquiries, feedback, or requests.</li>
              <li>Analyze usage to understand engagement and improve content and performance.</li>
              <li>Secure the Service and prevent fraud or abuse.</li>
              <li>Comply with legal obligations and enforce our terms.</li>
            </ol>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                3. Cookies and Analytics
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li>keep the Service working properly,</li>
              <li>remember preferences (like theme settings), and</li>
              <li>measure performance and engagement.</li>
            </ul>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              You can control cookies through your browser settings. Where required by law, we will request consent before placing non-essential cookies.
            </p>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <strong>Analytics:</strong> We may use third-party analytics tools to help us understand website traffic and improve Startup Dose. These providers may set their own cookies or identifiers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                4. How We Share Information
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">We do not sell your personal information. We may share information only in these situations:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li><strong>Service providers:</strong> We share data with vendors who help us run the Service (e.g., hosting, analytics, email delivery, database, file storage). They may access data only to perform services for us.</li>
              <li><strong>Legal compliance:</strong> If required by law or legal process, or to protect the rights, safety, and security of Startup Dose or others.</li>
              <li><strong>Business transfers:</strong> If we&apos;re involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that deal.</li>
              <li><strong>With your consent:</strong> If you ask us to share information.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                5. Data Retention
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              We keep personal information only as long as needed for the purposes described in this Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">Typical retention periods:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li><strong>Newsletter / waitlist info:</strong> retained until you unsubscribe or request deletion.</li>
              <li><strong>Startup submissions:</strong> retained as long as needed to review, feature, or maintain a record of submissions.</li>
              <li><strong>Analytics data:</strong> retained for up to 14/26 months unless we configure a shorter period.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                6. Your Privacy Rights and Choices
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">Depending on where you live, you may have rights to access, correct, delete, or limit the use of your personal data.</p>

            <h3 className="text-xl font-bold text-[#111] dark:text-white mt-6">A. General choices</h3>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">You can:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li>Unsubscribe from emails anytime using the link in our emails.</li>
              <li>Control cookies via browser settings.</li>
              <li>Request access, correction, or deletion by contacting us (see Section 11).</li>
            </ul>

            <h3 className="text-xl font-bold text-[#111] dark:text-white mt-6">B. EEA/UK (GDPR) rights</h3>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">If you are in the EEA/UK, you have rights to:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li>access, correct, delete, or restrict processing of your data,</li>
              <li>object to processing,</li>
              <li>data portability, and</li>
              <li>withdraw consent at any time.</li>
            </ul>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              We process personal data under lawful bases such as consent (newsletter), legitimate interests (site analytics and improvement), and contract performance (processing startup submissions).
            </p>

            <h3 className="text-xl font-bold text-[#111] dark:text-white mt-6">C. California (CCPA/CPRA) rights</h3>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">California residents may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <li>know what personal information we collect, use, and share,</li>
              <li>request deletion,</li>
              <li>correct inaccurate information,</li>
              <li>opt out of &quot;sale&quot; or &quot;sharing&quot; of personal information (we do not sell/share for cross-context behavioral advertising),</li>
              <li>limit use of sensitive personal information (if applicable), and</li>
              <li>not be discriminated against for exercising rights.</li>
            </ul>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              We honor opt-out preference signals such as the Global Privacy Control (GPC) where required.
            </p>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              If we ever engage in activities considered a &quot;sale&quot; or &quot;sharing,&quot; we will provide a clear &quot;Do Not Sell or Share My Personal Information&quot; link on the Service.
            </p>

            <h3 className="text-xl font-bold text-[#111] dark:text-white mt-6">D. Other U.S. state privacy laws</h3>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              If you live in a state with privacy laws (e.g., Virginia, Colorado, Connecticut, Utah, and others), you may have similar rights to access, delete, correct, or opt out of certain processing.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                7. International Data Transfers
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              If you access Startup Dose outside the United States, your information may be transferred to and processed in the U.S. or other countries where our vendors operate. Where required, we use appropriate safeguards for cross-border transfers.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                8. Security
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              We take reasonable administrative, technical, and physical measures to protect personal information. However, no system is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                9. Children&apos;s Privacy
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              Startup Dose is not intended for children under 13, and we do not knowingly collect personal information from children. If you believe a child provided us personal data, contact us and we will delete it.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                10. Changes to This Policy
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">
              We may update this Privacy Policy from time to time. We&apos;ll post the updated version and revise the &quot;Last updated&quot; date. If changes are material, we may provide additional notice.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-[#111] dark:text-white mb-2">
                11. Contact Us
              </h2>
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 leading-relaxed">If you have questions or want to exercise your privacy rights, contact:</p>
            <div className="mt-4 text-neutral-900 dark:text-neutral-200 leading-relaxed">
              <p><strong>Startup Dose</strong></p>
              <p>
                Email:{' '}
                <Link href="mailto:privacy@startupdose.com" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                  privacy@startupdose.com
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
