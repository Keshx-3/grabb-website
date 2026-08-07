import React, { useState } from 'react';
import './InfoPage.css';

const termsSections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    content: `By accessing or using the Grabb platform, including our website, mobile applications, and any related services, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, you may not use our services.

These Terms constitute a legally binding agreement between you and Grabb Ltd. ("Grabb," "we," "our," or "us"). We reserve the right to modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the updated Terms.`
  },
  {
    id: 'platform',
    title: '2. The Grabb Platform',
    content: `Grabb is a technology platform that connects customers with local merchants and delivery riders. We facilitate transactions but do not directly sell, prepare, or deliver goods unless expressly stated. The actual contract for sale and delivery of goods is between the customer and the merchant, facilitated by Grabb's logistics network.

Grabb reserves the right to modify, suspend, or discontinue any part of the platform at any time without notice or liability.`
  },
  {
    id: 'accounts',
    title: '3. User Accounts',
    content: `To use certain features of the Grabb platform, you must create an account. You are responsible for:

• Providing accurate and complete registration information
• Maintaining the security of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorised use

You must be at least 18 years of age to create a Grabb account. We reserve the right to suspend or terminate accounts that violate these Terms.`
  },
  {
    id: 'orders',
    title: '4. Orders and Payments',
    content: `When you place an order through Grabb:

• You agree to pay the stated price plus applicable delivery fees and taxes
• Payment is processed at the time of order confirmation
• All prices are displayed in the local currency applicable to your region
• Grabb uses secure third-party payment processors for all transactions
• We may refuse or cancel orders at our discretion, in which case you will be refunded in full

Order acceptance is subject to merchant availability and operational hours. Grabb is not responsible for delays caused by factors outside our control (e.g., severe weather, traffic).`
  },
  {
    id: 'refunds',
    title: '5. Refunds and Cancellations',
    content: `Refund eligibility depends on the circumstances:

• Orders cancelled before preparation has begun may receive a full refund
• Orders cancelled after preparation has started may be subject to partial charges
• Incorrect or missing items: Contact support within 1 hour of delivery for resolution
• Refunds are processed within 3–7 business days to your original payment method

Grabb reserves the right to refuse refunds for orders that have been delivered in accordance with the stated specifications.`
  },
  {
    id: 'merchant-terms',
    title: '6. For Merchants',
    content: `Merchants using the Grabb platform agree to:

• Maintain accurate and up-to-date menu listings, including prices and availability
• Prepare orders to the quality and specifications listed on the platform
• Comply with all applicable health, safety, and food hygiene regulations
• Not engage in any fraudulent, deceptive, or misleading practices
• Respond to customer queries and disputes in a timely manner

Grabb reserves the right to delist merchants who violate these obligations or whose quality metrics fall below acceptable thresholds.`
  },
  {
    id: 'rider-terms',
    title: '7. For Riders',
    content: `Riders operating on the Grabb platform agree to:

• Maintain a valid driving licence and vehicle registration (where applicable)
• Comply with all applicable traffic laws and regulations
• Treat customers and merchants with respect and professionalism
• Not misrepresent order status or engage in fraudulent behaviour
• Maintain the quality and condition of deliveries

Riders are independent contractors, not employees of Grabb. Grabb does not control the manner in which riders perform their services.`
  },
  {
    id: 'prohibited',
    title: '8. Prohibited Conduct',
    content: `Users of the Grabb platform must not:

• Engage in any activity that is illegal under applicable law
• Attempt to hack, disrupt, or gain unauthorised access to the platform
• Use automated tools (bots, scrapers) without express written permission
• Harass, threaten, or harm other users, merchants, or riders
• Provide false information or impersonate another person or entity
• Use the platform to distribute spam or unsolicited communications

Violations may result in immediate account termination and potential legal action.`
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    content: `To the maximum extent permitted by applicable law, Grabb shall not be liable for:

• Indirect, incidental, special, consequential, or punitive damages
• Loss of profits, revenue, data, or business opportunities
• Damages resulting from force majeure events or third-party actions
• The quality, safety, or legality of goods provided by merchants

Our total liability to you for any claim arising from these Terms shall not exceed the amount paid by you in the three months preceding the claim.`
  },
  {
    id: 'ip',
    title: '10. Intellectual Property',
    content: `All content on the Grabb platform, including but not limited to logos, designs, text, graphics, software, and trademarks, is owned by or licensed to Grabb Ltd. and is protected by applicable intellectual property laws.

You may not copy, reproduce, distribute, or create derivative works from our content without express written permission. Users retain ownership of content they submit to the platform (reviews, photos) but grant Grabb a non-exclusive, royalty-free licence to use such content.`
  },
  {
    id: 'governing',
    title: '11. Governing Law',
    content: `These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates (UAE). Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of the UAE.

If you are accessing Grabb from outside the UAE, you are responsible for compliance with local laws.`
  },
  {
    id: 'contact-terms',
    title: '12. Contact',
    content: `If you have any questions about these Terms of Service, please contact us:

Email: legal@grabb.app
Address: Grabb Ltd., [Registered Address], UAE`
  },
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <>      <div className="info-page">

        <section className="info-hero info-hero-sm">
          <h1 className="info-hero-title">Terms of Service</h1>
          <p className="info-hero-subtitle">Last updated: August 2026. These Terms govern your use of the Grabb platform.</p>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="legal-layout">

              <nav className="legal-toc">
                <h3>Contents</h3>
                <ul>
                  {termsSections.map(s => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} onClick={() => setActiveSection(s.id)} className={activeSection === s.id ? 'toc-active' : ''}>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="legal-content">
                <div className="legal-intro">
                  <p>
                    Please read these Terms of Service carefully before using the Grabb platform. These Terms form a legal agreement between you and Grabb Ltd. By using our platform, you confirm that you accept these Terms in full.
                  </p>
                </div>
                {termsSections.map(s => (
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
