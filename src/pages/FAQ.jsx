import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('buyer');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const buyerFaqs = [
    {
      q: "How do I place an order on Grabb?",
      a: "Select your neighborhood on the Explore page and browse local shops. Browse their product catalog and click the '+' button to build your Order List. Once ready, click 'Order from this Shop'. Enter your delivery details and choose to send the order directly to the shop keeper via WhatsApp or submit it to our system for manual processing."
    },
    {
      q: "What are the delivery timings and charges?",
      a: "Delivery timings depend on the shop's operating hours, but orders are usually completed in 25-45 minutes. Delivery fees are dynamic based on distance from the shop counter, typically ranging from ₹20 to ₹45, which goes directly to support your delivery partner."
    },
    {
      q: "How do I pay for my delivery orders?",
      a: "In this static phase, payments are settled directly with the shopkeeper or the delivery rider at the door. You can pay via Cash on Delivery or use your favorite UPI app to scan the merchant's QR code when the rider arrives with your package."
    },
    {
      q: "Can I order items from multiple shops at the same time?",
      a: "To ensure maximum delivery speed, each order list is bound to a single merchant. If you require items from different shops (e.g. bakery fresh bread and pharmacy medicines), you can submit separate order inquiries, and separate riders will deliver them."
    },
    {
      q: "Are the prices on Grabb identical to in-store prices?",
      a: "Yes. Grabb guarantees that there is no hidden markup on products. The prices you see in our digital catalog are set directly by the shopkeepers and match their physical store prices."
    }
  ];

  const vendorFaqs = [
    {
      q: "What is the fee to onboard my business?",
      a: "Onboarding and listing your shop profile on Grabb is 100% free. We charge no setup fees, listing fees, or monthly subscription fees. We only charge a small logistics commission of 5% to 8% on completed orders."
    },
    {
      q: "Who manages the delivery riders?",
      a: "Grabb handles 100% of the logistics. Our automated dispatch system assigns a verified delivery rider in your neighborhood as soon as you confirm a counter inquiry. The rider picks up the packed bundle from your store counter."
    },
    {
      q: "How do I receive payments for completed orders?",
      a: "For orders sent via WhatsApp, the customer settles payments directly with you (via UPI or COD). For counter orders routed through our system, we credit funds to your registered bank account on a weekly basis, minus the small logistics commission."
    },
    {
      q: "What happens after I submit the registration form?",
      a: "Our onboarding specialist calls you within 24 hours to schedule a quick verification check of your shop address. Once verified, we upload your product catalog, and you'll go live on our discover list in less than 48 hours."
    }
  ];

  const currentFaqs = activeTab === 'buyer' ? buyerFaqs : vendorFaqs;

  return (
    <div className="faq-page container">
      {/* Hero */}
      <section className="faq-hero reveal">
        <span className="badge badge-primary">Customer & Merchant Support</span>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common queries about ordering, merchant registration, and delivery services.</p>
      </section>

      {/* Tabs */}
      <div className="faq-tabs reveal">
        <button 
          className={`faq-tab-btn ${activeTab === 'buyer' ? 'active' : ''}`}
          onClick={() => { setActiveTab('buyer'); setOpenIndex(null); }}
        >
          Customer FAQs
        </button>
        <button 
          className={`faq-tab-btn ${activeTab === 'vendor' ? 'active' : ''}`}
          onClick={() => { setActiveTab('vendor'); setOpenIndex(null); }}
        >
          Shopkeeper FAQs
        </button>
      </div>

      {/* Accordions */}
      <div className="faq-accordion-container reveal">
        {currentFaqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`faq-accordion-item ${openIndex === idx ? 'open' : ''}`}
          >
            <div className="faq-accordion-header" onClick={() => toggleAccordion(idx)}>
              <h3>{faq.q}</h3>
              <ChevronDown className="faq-accordion-arrow" size={18} />
            </div>
            <div className="faq-accordion-content">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
