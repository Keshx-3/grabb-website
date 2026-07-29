import React from 'react';
import { Check, X } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <div className="how-it-works-page">
      {/* Hero Section */}
      <section className="container how-hero reveal">
        <span className="badge badge-primary">How Grabb Operates</span>
        <h1>Behind the Counter</h1>
        <p>
          We build the digital logistics link that empowers traditional neighborhood merchants to serve modern digital buyers, quickly and transparently.
        </p>
      </section>

      {/* Journey Walkthrough Section */}
      <section className="container">
        <div className="journey-grid reveal">
          <div className="journey-content">
            <h2>The Buyer Journey</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', marginBottom: '1rem' }}>
              Getting items from your favorite street corner shop has never been this simple.
            </p>

            <div className="journey-step">
              <span className="journey-num">1</span>
              <div className="journey-step-text">
                <h3>Browse Local Shops</h3>
                <p>Open the Grabb app to see verified merchants operating in your immediate neighborhood.</p>
              </div>
            </div>

            <div className="journey-step">
              <span className="journey-num">2</span>
              <div className="journey-step-text">
                <h3>Build Your Catalog List</h3>
                <p>Add specific items from the merchant's real catalog to your order list, estimating your pricing totals immediately.</p>
              </div>
            </div>

            <div className="journey-step">
              <span className="journey-num">3</span>
              <div className="journey-step-text">
                <h3>Route to Shop Counter</h3>
                <p>Send your list directly to the shopkeeper's counter. The shopkeeper confirms stock levels and picks items instantly.</p>
              </div>
            </div>

            <div className="journey-step">
              <span className="journey-num">4</span>
              <div className="journey-step-text">
                <h3>Rider Doorstep Delivery</h3>
                <p>A Grabb delivery rider retrieves your packages straight from the shopkeeper's desk and brings it to your door in 30 minutes.</p>
              </div>
            </div>
          </div>

          <div className="journey-visual-wrapper">
            <div className="journey-img-container">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                alt="Customer receiving local goods" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Comparison Section */}
      <section className="delivery-comparison-section">
        <div className="container">
          <div className="how-hero text-center reveal" style={{ marginBottom: '2rem' }}>
            <span className="badge badge-accent">Why Grabb?</span>
            <h2>Grabb Logistics vs. Quick-Commerce Dark Stores</h2>
            <p>We believe in supporting neighborhood economies instead of isolating them behind high warehouse walls.</p>
          </div>

          <div className="comparison-table-wrapper reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Grabb Model</th>
                  <th>Blinkit / Zepto / Dark Stores</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Source of Goods</strong></td>
                  <td>
                    <Check size={16} className="check-icon-good" />
                    Real local shops you know by name
                  </td>
                  <td>
                    <X size={16} className="cross-icon-bad" />
                    Anonymous, closed private warehouses
                  </td>
                </tr>
                <tr>
                  <td><strong>Economic Impact</strong></td>
                  <td>
                    <Check size={16} className="check-icon-good" />
                    Keeps wealth and profits inside your neighborhood
                  </td>
                  <td>
                    <X size={16} className="cross-icon-bad" />
                    Funnels money to central corporate tech systems
                  </td>
                </tr>
                <tr>
                  <td><strong>Product Authenticity</strong></td>
                  <td>
                    <Check size={16} className="check-icon-good" />
                    Hand-selected daily by veteran local store owners
                  </td>
                  <td>
                    <X size={16} className="cross-icon-bad" />
                    Mass-sourced warehouse inventories
                  </td>
                </tr>
                <tr>
                  <td><strong>Transparency</strong></td>
                  <td>
                    <Check size={16} className="check-icon-good" />
                    Full merchant name, owner photo, and address visible
                  </td>
                  <td>
                    <X size={16} className="cross-icon-bad" />
                    Source and merchant identity completely hidden
                  </td>
                </tr>
                <tr>
                  <td><strong>Community Trust</strong></td>
                  <td>
                    <Check size={16} className="check-icon-good" />
                    Build digital ties with local shopkeepers
                  </td>
                  <td>
                    <X size={16} className="cross-icon-bad" />
                    Strictly mechanical, transaction-only delivery
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
