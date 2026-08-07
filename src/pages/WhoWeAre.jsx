import React from 'react';
import './InfoPage.css';

const values = [
  {
    image: '/community_first.png',
    title: 'Community First',
    desc: 'We exist to uplift local merchants, riders, and customers. Every feature we build starts with the question: does this serve our community?',
  },
  {
    image: '/speed_reliability.png',
    title: 'Speed & Reliability',
    desc: 'We promise swift deliveries and a platform that never sleeps. Reliability is not a feature, it\'s our foundation.',
  },
  {
    image: '/local_impact.png',
    title: 'Local Impact',
    desc: 'By choosing Grabb, you\'re choosing to keep money within your neighbourhood. We champion local businesses over large chains.',
  },
  {
    image: '/trust_transparency.png',
    title: 'Trust & Transparency',
    desc: 'From pricing to data, we operate with full transparency. No hidden fees, no surprises, just honest service.',
  },
];

const milestones = [
  { year: '2023', event: 'Grabb was founded with a vision to connect local merchants and riders in one seamless platform.' },
  { year: '2024', event: 'Launched our pilot in three cities, onboarding 500+ merchants and 1,000+ riders within six months.' },
  { year: '2025', event: 'Expanded to 10+ cities and processed over 1 million deliveries, saving local merchants thousands in logistics costs.' },
  { year: '2026', event: 'Grabb 2.0 launched, a complete platform overhaul with real-time tracking, merchant analytics, and rider rewards.' },
];

export default function WhoWeAre() {
  return (
    <>      <div className="info-page">

        {/* Hero */}
        <section className="info-hero">
          <h1 className="info-hero-title">We're on a mission to<br /><span className="gradient-text">shop local, delivered fast.</span></h1>
          <p className="info-hero-subtitle">
            Grabb is the hyper-local delivery platform built for communities, connecting neighbourhood merchants with riders who care and customers who demand more.
          </p>
        </section>

        {/* Story Section */}
        <section className="info-section info-section-alt">
          <div className="container">
            <div className="info-two-col">
              <div className="info-text-block">
                <span className="section-subtitle">Our Story</span>
                <h2>Born from a simple frustration</h2>
                <p>
                  It started with a problem every neighbourhood faces, brilliant local shops sitting idle while large chains captured all the convenience of delivery. Our founders saw the gap and decided to bridge it.
                </p>
                <p>
                  Grabb was built from the ground up to serve three groups simultaneously: merchants who need reliable logistics, riders who need fair earnings, and customers who want everything their neighbourhood has to offer, delivered in minutes, not hours.
                </p>
                <p>
                  We believe local commerce is the heartbeat of every city. When a local bakery thrives, the whole street flourishes. Grabb is the engine that keeps that engine running.
                </p>
              </div>
              <div className="info-visual-block">
                <div className="info-stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Merchant Partners</div>
                </div>
                <div className="info-stat-card">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Active Riders</div>
                </div>
                <div className="info-stat-card">
                  <div className="stat-number">1M+</div>
                  <div className="stat-label">Deliveries Completed</div>
                </div>
                <div className="info-stat-card">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Cities Covered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values, full background image cards */}
        <section className="info-section">
          <div className="container">
            <div className="info-section-header">
              <span className="section-subtitle">What We Stand For</span>
              <h2>Our Core Values</h2>
              <p>These aren't just words on a wall. They're the principles that guide every decision we make.</p>
            </div>
            <div className="values-image-grid">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="value-image-card"
                  style={{ backgroundImage: `url('${v.image}')` }}
                >
                  <div className="value-image-overlay">
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="info-section info-section-alt">
          <div className="container">
            <div className="info-section-header">
              <span className="section-subtitle">Our Journey</span>
              <h2>How Far We've Come</h2>
            </div>
            <div className="info-timeline">
              {milestones.map((m, i) => (
                <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-year">{m.year}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <p>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="info-cta-section">
          <div className="container">
            <h2>Be part of the Grabb story</h2>
            <p>Whether you're a merchant, a rider, or a customer, there's a place for you in our growing community.</p>
            <div className="info-cta-btns">
              <a href="/work-with-us" className="btn btn-primary">Work With Us</a>
              <a href="/merchant-partner" className="btn btn-outline">Partner as a Merchant</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
