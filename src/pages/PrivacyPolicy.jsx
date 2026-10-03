import React, { useState } from 'react';
import './InfoPage.css';

const sections = [
  {
    id: 'applicability',
    title: '1. Applicability and Scope',
    content: `This Privacy Policy ("Policy") applies to Grabb Ltd. ("Grabb," "we," "our," or "us") and governs our data collection, processing, and usage practices. By accessing or using the Grabb platform, including our website, mobile applications, and any associated services, you agree to the terms of this Policy.

This Policy applies to all users of the Grabb platform, including customers, merchants, and delivery riders operating in the regions where Grabb provides its services. If you do not agree with this Policy, please do not use our services.`
  },
  {
    id: 'info-collect',
    title: '2. The Information We Collect and How We Use It',
    content: `We collect information to provide, improve, and personalise our services. The types of information we collect depend on how you interact with Grabb, as a customer, merchant, or rider.`
  },
  {
    id: 'info-provide',
    title: '3. Information You Provide to Us',
    content: `When you register for a Grabb account or use our services, you provide us with information directly, which may include:

• Name, email address, phone number, and date of birth
• Delivery addresses and location data
• Payment information (processed securely via our payment partners)
• Identity documents (for merchants and riders during onboarding)
• Profile photos and preferences
• Communications with our support team
• Reviews, ratings, and feedback you submit`
  },
  {
    id: 'minors',
    title: '4. Data of Minors',
    content: `Grabb's services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that we have collected personal data from a person under 18 without parental consent, we will take steps to delete that information promptly.

If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately at privacy@grabb.app.`
  },
  {
    id: 'auto-collect',
    title: '5. Information We Collect Through Automatic Data Collection Technologies',
    content: `When you use the Grabb platform, we automatically collect certain technical and usage information, including:

• Device information (device type, operating system, unique device identifiers)
• Log data (IP address, browser type, pages visited, time and date of access)
• Location data (GPS coordinates when the app is in use, with your permission)
• Usage analytics (features used, delivery patterns, session duration)
• Cookies and similar tracking technologies

You can control cookie preferences through your browser settings, though some features may be impacted if cookies are disabled.`
  },
  {
    id: 'third-parties',
    title: '6. Information from Third Parties',
    content: `We may receive information about you from third-party partners and services, including:

• Payment processors (for transaction verification and fraud prevention)
• Social media platforms (if you log in using a social account)
• Analytics providers (to help us understand usage patterns)
• Background check providers (for merchant and rider verification)
• Advertising partners (for promotional campaigns)

We use this information in accordance with the data sharing agreements we have with each partner.`
  },
  {
    id: 'how-use',
    title: '7. How We Use the Information We Collect',
    content: `We use the information we collect to:

• Provide and operate the Grabb platform and services
• Process orders, payments, and deliveries
• Communicate with you about your orders, account, and our services
• Personalise your experience and show relevant content
• Ensure platform security and prevent fraud
• Comply with legal obligations
• Improve our services through analytics and research
• Send promotional communications (where you have consented)
• Resolve disputes and enforce our Terms and Conditions`
  },
  {
    id: 'how-share',
    title: '8. How We Share the Information We Collect',
    content: `We do not sell your personal information. We may share your data with:

• Merchants: To process and fulfil your orders
• Riders: To enable delivery (name, delivery address, and contact number for active deliveries only)
• Service providers: Third-party vendors who assist us in operating the platform
• Legal authorities: Where required by law, regulation, or court order
• Business transfers: In the event of a merger, acquisition, or sale of assets

Any sharing is governed by data processing agreements and applicable data protection regulations.`
  },
  {
    id: 'merchant-sharing',
    title: '9. Information Shared with Merchants',
    content: `When you place an order, we share limited information with the merchant to fulfil your order. This includes your first name, order details, and any special instructions. Merchants are prohibited from using your data for any purpose other than fulfilling your order. They are bound by our Merchant Data Policy and applicable data protection laws.`
  },
  {
    id: 'data-storage',
    title: '10. Data Storage',
    content: `Your data is stored on secure cloud servers. We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting us at privacy@grabb.app.

We retain certain data for longer periods where required by law (e.g., financial records, fraud investigations).`
  },
  {
    id: 'your-info',
    title: '11. Your Information & Rights',
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

• Right to access: Request a copy of the data we hold about you
• Right to rectification: Correct inaccurate or incomplete data
• Right to erasure: Request deletion of your personal data
• Right to restriction: Limit how we process your data
• Right to portability: Receive your data in a structured format
• Right to object: Object to certain types of processing
• Right to withdraw consent: Where processing is based on consent

To exercise any of these rights, contact us at privacy@grabb.app.`
  },
  {
    id: 'service-partners',
    title: '12. Information Pertaining to Service Partners (Riders)',
    content: `For delivery riders, we collect and process additional information including:

• Government-issued identification and driving licence details
• Vehicle registration information
• Bank account or mobile wallet details for payouts
• GPS location data during active deliveries
• Delivery history and performance metrics

This data is used to facilitate payouts, ensure safety, and improve the rider experience. Rider data is retained for the duration of the partnership and as required by applicable law.`
  },
  {
    id: 'security',
    title: '13. Security: How We Protect Your Information',
    content: `We implement industry-standard security measures to protect your personal information, including:

• End-to-end encryption for payment data
• Secure HTTPS connections across all platform touchpoints
• Access controls and role-based permissions for internal data access
• Regular security audits and penetration testing
• Incident response protocols for data breaches

Despite our efforts, no system is entirely secure. In the event of a data breach that affects your rights, we will notify you and relevant authorities in accordance with applicable law.`
  },
  {
    id: 'misc',
    title: '14. Miscellaneous',
    content: `This Policy may be updated from time to time. We will notify you of significant changes via email or in-app notification. Your continued use of the Grabb platform after any changes constitutes your acceptance of the updated Policy.

This Policy is governed by the laws of the jurisdiction in which Grabb operates. Any disputes arising from this Policy shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.`
  },
  {
    id: 'contact',
    title: '15. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection team:

Email: privacy@grabb.app
Address: Grabb Ltd., [Registered Address], UAE

We aim to respond to all privacy enquiries within 14 business days.`
  },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>      <div className="info-page">

        <section className="info-hero info-hero-sm">
          <h1 className="info-hero-title">Privacy Policy</h1>
          <p className="info-hero-subtitle">Last updated: August 2026, Effective immediately upon publication.</p>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="legal-layout">

              {/* Sidebar TOC */}
              <nav className="legal-toc">
                <h3>Contents</h3>
                <ul>
                  {sections.map(s => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} onClick={() => setActiveSection(s.id)} className={activeSection === s.id ? 'toc-active' : ''}>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Content */}
              <div className="legal-content">
                <div className="legal-intro">
                  <p>
                    At Grabb, your privacy is a priority. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform. We encourage you to read this Policy carefully and contact us if you have any questions.
                  </p>
                </div>
                {sections.map(s => (
                  <div key={s.id} id={s.id} className="legal-section">
                    <h2>{s.title}</h2>
                    {s.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
