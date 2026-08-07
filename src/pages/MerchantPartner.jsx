import React from 'react';
import './InfoPage.css';

const benefits = [
  { icon: '📈', title: 'Grow Your Revenue', desc: 'Tap into a growing customer base actively looking for local products. Grabb drives additional orders directly to your storefront.' },
  { icon: '🛵', title: 'Hassle-Free Logistics', desc: 'Forget managing deliveries. Our network of vetted riders handles pick-up and drop-off so you can focus on your craft.' },
  { icon: '📊', title: 'Merchant Dashboard', desc: 'Real-time order tracking, revenue analytics, customer insights, and inventory management, all in one place.' },
  { icon: '💳', title: 'Fast Payouts', desc: 'Earnings are transferred to your account every week with full transparency, no surprise deductions.' },
  { icon: '🎯', title: 'Marketing Support', desc: 'Featured placements, in-app promotions, and dedicated campaign support to put your business in the spotlight.' },
  { icon: '🤝', title: 'Dedicated Account Manager', desc: 'Every merchant gets a personal account manager who\'s just a call away to help you succeed on Grabb.' },
];

const steps = [
  { step: '01', title: 'Apply Online', desc: 'Fill out the merchant application form with your business details. It takes under 5 minutes.' },
  { step: '02', title: 'Verification', desc: 'Our onboarding team will verify your documents and set up your merchant profile within 48 hours.' },
  { step: '03', title: 'Go Live', desc: 'Your store goes live on the Grabb app. Start receiving orders immediately.' },
  { step: '04', title: 'Grow', desc: 'Use your merchant dashboard, analytics, and account manager to scale your business.' },
];

export default function MerchantPartner() {
  return (
    <>      <div className="info-page">

        <section className="info-hero">
          <h1 className="info-hero-title">Partner with Grabb.<br /><span className="gradient-text">Watch your business grow.</span></h1>
          <p className="info-hero-subtitle">
            Join hundreds of local merchants who have unlocked a new revenue stream with Grabb's delivery platform, without the logistics headache.
          </p>
          <a href="mailto:merchants@grabb.app" className="btn btn-primary">Apply to Partner</a>
        </section>

        <section className="info-section info-section-alt">
          <div className="container">
            <div className="info-section-header">
              <span className="section-subtitle">Why Partner With Us</span>
              <h2>Everything you need to succeed</h2>
              <p>We handle the delivery. You handle what you do best.</p>
            </div>
            <div className="info-values-grid">
              {benefits.map(b => (
                <div key={b.title} className="info-value-card">
                  <div className="value-icon">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="info-section-header">
              <span className="section-subtitle">Getting Started</span>
              <h2>How to become a Grabb Merchant</h2>
              <p>From application to first order, it's simple and fast.</p>
            </div>
            <div className="steps-row">
              {steps.map(s => (
                <div key={s.step} className="step-card">
                  <div className="step-number">{s.step}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="info-cta-section">
          <div className="container">
            <h2>Ready to join the Grabb merchant network?</h2>
            <p>Get your store live within 48 hours. No upfront fees. No monthly subscriptions.</p>
            <div className="info-cta-btns">
              <a href="mailto:merchants@grabb.app" className="btn btn-primary">Apply Now</a>
              <a href="/contact-us" className="btn btn-outline">Talk to Our Team</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
