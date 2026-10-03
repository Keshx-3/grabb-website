import React, { useState, useEffect } from 'react';
import './InfoPage.css';

const termsSections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms & Eligibility',
    intro: 'By downloading, installing, accessing, or placing an order through the Grabb Customer Mobile Application, you (“User”, “You”) agree to be bound by these Terms and Conditions (“Terms”).',
    items: [
      {
        text: 'If you do not agree to these Terms, you must immediately cease using and uninstall the User App.'
      },
      {
        text: 'By using this platform, you represent that you are at least 18 years of age and capable of entering into legally binding contracts under applicable law.'
      }
    ]
  },
  {
    id: 'platform-role',
    title: '2. Nature of Platform & Role of Grabb',
    intro: 'Grabb operates as a technology intermediary enabling consumers to browse, order, and arrange delivery or pickup of grocery items, packaged goods, and fresh produce from local neighborhood shopkeepers:',
    items: [
      {
        title: 'Intermediary Status:',
        text: 'Grabb provides the digital interface, catalog presentation, order routing, and delivery management tools. Grabb does not manufacture, package, store, inspect, or set the retail prices of the merchant products listed on the platform.'
      },
      {
        title: 'Contract of Sale:',
        text: 'The legal contract for the purchase and sale of any product is concluded solely between you and the respective fulfilling merchant/vendor.'
      },
      {
        title: 'Delivery Coordination:',
        text: 'Order pickup and transit are carried out by designated delivery personnel coordinated via the Grabb logistics network.'
      }
    ]
  },
  {
    id: 'account-security',
    title: '3. Account Creation & Security',
    items: [
      {
        title: 'Account Credentials:',
        text: 'To place an order, you must register using an active mobile number and complete verification via One-Time Password (OTP).'
      },
      {
        title: 'Account Responsibility:',
        text: 'You are solely responsible for all activities and orders placed under your account credentials. You agree not to share your account or OTP with third parties.'
      },
      {
        title: 'Accuracy:',
        text: 'You must provide accurate, up-to-date personal details, including delivery location landmarks and working contact numbers.'
      }
    ]
  },
  {
    id: 'listings-pricing',
    title: '4. Product Listings, Weights & Pricing',
    items: [
      {
        title: 'Catalog Information:',
        text: 'Packaged item descriptions, images, brand names, and weights are indexed through barcode databases and vendor-submitted product information. Imagery is for illustrative purposes; actual packaging may vary.'
      },
      {
        title: 'Produce & Weighted Goods:',
        text: 'For fresh vegetables, fruits, and loose items, prices are calculated on standard units (e.g., per kg or per piece) set by the shopkeeper. Minor variances in weight or appearance may occur due to cutting, sorting, or natural moisture loss in fresh produce.'
      },
      {
        title: 'Price Adjustments:',
        text: 'Prices displayed on the app reflect the retail price configured by the store. In the event of a significant, evident pricing error caused by technical failure or merchant misentry, Grabb and the fulfilling merchant reserve the right to cancel the affected order item prior to dispatch.'
      }
    ]
  },
  {
    id: 'orders-delivery',
    title: '5. Orders, Delivery & Acceptance',
    items: [
      {
        title: 'Order Placement:',
        text: 'Placing an order constitutes an offer to purchase goods from the selected store. Acceptance occurs when the store accepts and confirms the order for preparation.'
      },
      {
        title: 'Delivery Windows & Access:',
        text: 'Delivery times provided within the app are estimates based on distance, vendor preparation speed, and weather or traffic conditions. You agree to be present at the provided delivery address to receive the order.'
      },
      {
        title: 'Unattended Deliveries:',
        text: 'If a delivery cannot be completed due to incorrect address details, an unreachable phone number, or your unavailability after reasonable attempts by the delivery partner, the order may be cancelled, and you may remain liable for the full order amount (particularly for perishable produce).'
      }
    ]
  },
  {
    id: 'payments-billing',
    title: '6. Payments & Billing',
    items: [
      {
        title: 'Payment Gateways:',
        text: 'Online transactions are processed through authorized payment aggregators (e.g., Razorpay). By making a payment, you authorize the gateway to charge your selected card, UPI handle, net banking account, or digital wallet.'
      },
      {
        title: 'Payment Security:',
        text: 'Grabb does not store your full payment card credentials, CVVs, or net banking passwords on its mobile application.'
      },
      {
        title: 'Taxes & Delivery Fees:',
        text: 'All orders are subject to item costs, applicable statutory taxes, delivery fees, and platform service charges, as displayed in the checkout summary prior to payment confirmation.'
      }
    ]
  },
  {
    id: 'cancellations-refunds',
    title: '7. Cancellations, Returns & Refunds',
    items: [
      {
        title: 'Customer Cancellations:',
        text: 'You may cancel an order free of charge only before the store has accepted and begun preparing or packing the order. Once item packing or delivery partner dispatch has begun, cancellations cannot be accepted.'
      },
      {
        title: 'Merchant/Platform Cancellations:',
        text: 'If a store runs out of stock or cannot fulfill specific items, those items (or the entire order) will be cancelled, and any prepaid amounts will be refunded to your original payment method within standard banking timelines (typically 5–7 business days).'
      },
      {
        title: 'Damaged or Missing Produce/Goods:',
        subItems: [
          'Complaints regarding missing items, incorrect items, or damaged/spoiled fresh goods must be raised via the in-app support interface within 2 hours of delivery (with clear photograph evidence of the affected item and bill label).',
          'Returns cannot be accepted for fresh vegetables, fruits, or opened food items due to post-delivery handling or change of mind. Approved refunds are processed back to the original payment source.'
        ],
        highlight: 'Notice: In-app complaints for damaged, missing, or spoiled items must be filed within 2 hours of delivery with photographic evidence.'
      }
    ]
  },
  {
    id: 'user-conduct',
    title: '8. User Conduct & Acceptable Use',
    intro: 'You agree not to:',
    items: [
      { text: 'Use the app for any fraudulent, unlawful, or unauthorized purpose.' },
      { text: 'Interfere with or disrupt the operation of the application, servers, or connected network infrastructure.' },
      { text: 'Misuse delivery personnel or counter staff through abusive behavior, harassment, or false dispute claims.' },
      { text: 'Reverse engineer, decompile, or extract the source code or catalog data of the User App.' }
    ]
  },
  {
    id: 'intellectual-property',
    title: '9. Intellectual Property',
    text: 'All rights, title, and interest in the Grabb platform—including software code, logos, visual interfaces, graphics, catalog arrangements, and trademarks—remain the exclusive property of Grabb and its licensors.'
  },
  {
    id: 'limitation-liability',
    title: '10. Limitation of Liability',
    items: [
      {
        text: 'Grabb acts solely as a technological and logistical facilitator. Grabb is not responsible for product freshness, manufacturing defects, food safety, packaging seals, or consumer health reactions resulting from goods supplied by independent vendors.'
      },
      {
        text: 'To the maximum extent permitted by applicable law, Grabb’s total aggregate liability to you for any claim arising out of an order or app use shall be limited strictly to the total amount paid by you for that specific order.'
      }
    ]
  },
  {
    id: 'governing-law',
    title: '11. Governing Law & Dispute Resolution',
    items: [
      {
        title: 'Governing Law:',
        text: 'These Terms shall be governed by and construed in accordance with the laws of India.'
      },
      {
        title: 'Jurisdiction:',
        text: 'Any dispute, claim, or controversy arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts having jurisdiction over the registered corporate office of Grabb.'
      }
    ]
  },
  {
    id: 'customer-support',
    title: '12. Customer Support & Inquiries',
    intro: 'For questions regarding an ongoing order, delivery feedback, or these Terms, please contact customer support through:',
    contacts: [
      {
        title: 'In-App Support',
        detail: 'Grabb Customer App → Help & Support',
        icon: '📱'
      },
      {
        title: 'Email Support',
        detail: 'support@grabb.app',
        link: 'mailto:support@grabb.app',
        icon: '✉️'
      },
      {
        title: 'Partner / Business Portal',
        detail: 'grabb.app/partners',
        link: 'https://grabb.app/partners',
        icon: '🌐'
      }
    ]
  }
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(termsSections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = termsSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(termsSections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(termsSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="info-page">
      {/* Hero */}
      <section className="info-hero info-hero-sm">
        <span className="info-hero-badge">Customer Agreement</span>
        <h1 className="info-hero-title">Terms & Conditions</h1>
        <p className="info-hero-subtitle">
          Grabb Customer Mobile Application (“User App”)
        </p>
      </section>

      {/* Main Content */}
      <section className="info-section">
        <div className="container">
          <div className="legal-layout">

            {/* Sidebar Sticky TOC */}
            <nav className="legal-toc" aria-label="Table of contents">
              <h3>Contents</h3>
              <ul>
                {termsSections.map(s => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setActiveSection(s.id)}
                      className={activeSection === s.id ? 'toc-active' : ''}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Content Area */}
            <div className="legal-content">
              {/* Meta Details Box */}
              <div className="legal-meta-box">
                <div className="legal-meta-item">
                  <span className="legal-meta-label">Effective Date</span>
                  <span className="legal-meta-value">October 2, 2026</span>
                </div>
                <div className="legal-meta-item">
                  <span className="legal-meta-label">Platform</span>
                  <span className="legal-meta-value">Grabb Customer Mobile Application (“User App”)</span>
                </div>
                <div className="legal-meta-item">
                  <span className="legal-meta-label">Operator</span>
                  <span className="legal-meta-value">Grabb (“Grabb”, “Platform”, “We”, “Us”, or “Our”)</span>
                </div>
              </div>

              {/* Legal Introduction Banner */}
              <div className="legal-intro">
                <p>
                  Please review these Terms and Conditions carefully. They define your legal rights, responsibilities, and operational procedures when ordering grocery items, packaged goods, and fresh produce through the Grabb Customer Mobile Application.
                </p>
              </div>

              {/* Sections */}
              {termsSections.map(s => (
                <div key={s.id} id={s.id} className="legal-section">
                  <h2>{s.title}</h2>
                  
                  {s.intro && <p>{s.intro}</p>}

                  {s.text && <p>{s.text}</p>}

                  {s.items && (
                    <ul className="legal-list">
                      {s.items.map((item, idx) => (
                        <li key={idx}>
                          {item.title && <strong>{item.title} </strong>}
                          {item.text}

                          {item.subItems && (
                            <ul className="legal-sublist">
                              {item.subItems.map((sub, sIdx) => (
                                <li key={sIdx}>{sub}</li>
                              ))}
                            </ul>
                          )}

                          {item.highlight && (
                            <div className="legal-callout">
                              <strong>⏱️ {item.highlight}</strong>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.contacts && (
                    <div className="legal-contact-grid">
                      {s.contacts.map((contact, cIdx) => (
                        <div key={cIdx} className="legal-contact-card">
                          <h4>
                            <span>{contact.icon}</span> {contact.title}
                          </h4>
                          {contact.link ? (
                            <a 
                              href={contact.link} 
                              target={contact.link.startsWith('http') ? '_blank' : '_self'} 
                              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.detail}
                            </a>
                          ) : (
                            <p>{contact.detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
