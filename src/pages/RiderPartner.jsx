import React from 'react';
import './InfoPage.css';

const riderBenefits = [
  { icon: '💵', title: 'Competitive Earnings', desc: 'Earn per delivery plus tips. Top riders on Grabb earn significantly above market rates, with weekly bonuses for high performers.' },
  { icon: '🕐', title: 'Flexible Hours', desc: 'You decide when you work. Log in and log out whenever you want, no fixed schedules, no minimum hours.' },
  { icon: '⚡', title: 'Instant Payouts', desc: 'Cash out your earnings daily, straight to your bank or mobile wallet. No waiting, no queues.' },
  { icon: '🏆', title: 'Rider Rewards', desc: 'Rack up points with every delivery. Redeem them for fuel vouchers, equipment discounts, and exclusive Grabb merchandise.' },
  { icon: '🛡️', title: 'Insurance Coverage', desc: 'Every active Grabb rider is covered by our on-delivery accident insurance policy at no cost to you.' },
  { icon: '📱', title: 'Rider App', desc: 'Our intuitive rider app gives you route optimisation, earnings tracking, and 24/7 support, right in your pocket.' },
];

const requirements = [
  { icon: '🛵', label: 'Valid Vehicle', desc: 'Motorcycle, bicycle, or e-bike in good working condition.' },
  { icon: '🪪', label: 'Valid ID', desc: 'Government-issued ID and valid driving licence (for motorised vehicles).' },
  { icon: '📱', label: 'Smartphone', desc: 'Android or iOS device capable of running the Grabb Rider app.' },
  { icon: '✅', label: 'Background Check', desc: 'Pass a basic background verification, takes 24–48 hours.' },
];

const howItWorks = [
  { step: '01', title: 'Sign Up', desc: 'Register on the Grabb Rider app or via the web form. Submit your documents in minutes.' },
  { step: '02', title: 'Get Verified', desc: 'Our team reviews your application and verifies your identity within 48 hours.' },
  { step: '03', title: 'Start Delivering', desc: 'Go online, accept orders near you, and start earning. It\'s that simple.' },
  { step: '04', title: 'Earn & Grow', desc: 'Complete more deliveries, unlock rewards, and increase your earning tier over time.' },
];

export default function RiderPartner() {
  return (
    <>      <div className="info-page">

        <section className="info-hero">
          <h1 className="info-hero-title">Ride with Grabb.<br /><span className="gradient-text">Earn on your terms.</span></h1>
          <p className="info-hero-subtitle">
            Join thousands of riders across the region who earn a great income delivering for local merchants, with flexibility, fair pay, and full support.
          </p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download Rider App</a>
        </section>

        <section className="info-section info-section-alt">
          <div className="container">
            <div className="info-section-header">
              <span className="section-subtitle">Rider Benefits</span>
              <h2>Why riders choose Grabb</h2>
              <p>We built Grabb with riders in mind, because great riders make great deliveries.</p>
            </div>
            <div className="info-values-grid">
              {riderBenefits.map(b => (
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
            <div className="info-two-col">
              <div className="info-text-block">
                <span className="section-subtitle">Requirements</span>
                <h2>What you need to get started</h2>
                <p>We keep our requirements simple so you can get on the road quickly.</p>
                <div className="requirements-list">
                  {requirements.map(r => (
                    <div key={r.label} className="requirement-item">
                      <span className="req-icon">{r.icon}</span>
                      <div>
                        <strong>{r.label}</strong>
                        <p>{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="info-text-block">
                <span className="section-subtitle">Getting Started</span>
                <h2>How it works</h2>
                <div className="steps-mini">
                  {howItWorks.map(s => (
                    <div key={s.step} className="step-mini-item">
                      <div className="step-mini-num">{s.step}</div>
                      <div>
                        <strong>{s.title}</strong>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-cta-section">
          <div className="container">
            <h2>Ready to start earning?</h2>
            <p>Download the Grabb Rider app and be delivering within 48 hours of signing up.</p>
            <div className="info-cta-btns">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get on Google Play</a>
              <a href="/contact-us" className="btn btn-outline">Have Questions?</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
