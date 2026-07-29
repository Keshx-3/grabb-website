import React from 'react';
import { Users, Eye, Zap, Heart } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="container about-hero reveal">
        <span className="badge badge-primary">Our Mission</span>
        <h1>Support Local Shops</h1>
        <p>
          We are building the infrastructure that keeps neighborhood commerce alive in a fast-paced digital world.
        </p>
      </section>

      {/* Founding Section */}
      <section className="container founding-section reveal">
        <div className="founding-content">
          <h2>The Grabb Story</h2>
          <p>
            Grabb was founded in Bengaluru in 2026. As quick-commerce applications gained popularity by promising 10-minute deliveries, we noticed a silent tragedy: the local shopkeepers, family bakers, and corner pharmacies who formed the backbone of our neighborhoods were being systematically cut out.
          </p>
          <p>
            Centralized platforms built windowless warehouses (dark stores) on quiet side streets, packing them with corporate goods and hiding their origins. We asked ourselves: Why should quick delivery mean destroying the very shops that give our neighborhoods character, memory, and personal connection?
          </p>
          
          <div className="mission-quote-card" style={{ marginTop: '1.5rem' }}>
            <p>
              "We realized we didn't need to replace the local shopkeeper with a warehouse. We just needed to build a fast, reliable bridge between their counter and the customer's door."
            </p>
            <span>— The Grabb Founding Team</span>
          </div>
        </div>

        <div className="founding-visual">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
            alt="Traditional local shop in Bengaluru" 
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="about-hero text-center reveal" style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-accent">Our Pillars</span>
            <h2>Core Values We Live By</h2>
            <p>We build product experiences that honor these commitments every day.</p>
          </div>

          <div className="grid-3">
            <div className="value-card reveal" style={{ animationDelay: '0.1s' }}>
              <div className="value-icon-circle">
                <Users size={28} />
              </div>
              <h3>Community First</h3>
              <p>Every transaction on Grabb supports a real physical shopkeeper nearby. We keep neighborhood tax bases healthy and family stores operational.</p>
            </div>

            <div className="value-card reveal" style={{ animationDelay: '0.2s' }}>
              <div className="value-icon-circle">
                <Eye size={28} />
              </div>
              <h3>Radical Transparency</h3>
              <p>You see the name, address, rating, and story of the shop before you buy. No hidden warehouses, anonymous brands, or dark origins.</p>
            </div>

            <div className="value-card reveal" style={{ animationDelay: '0.3s' }}>
              <div className="value-icon-circle">
                <Zap size={28} />
              </div>
              <h3>Operational Speed</h3>
              <p>We prove that supporting local doesn't mean sacrificing modern convenience. We deliver from counter to door in 30 minutes or less.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
