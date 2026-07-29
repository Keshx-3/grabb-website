import React, { useState } from 'react';
import { Store, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import DownloadModal from '../components/DownloadModal';
import './Home.css';

export default function Home() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [downloadContext, setDownloadContext] = useState('');

  const triggerDownloadModal = (message) => {
    setDownloadContext(message);
    setIsDownloadOpen(true);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <span className="badge badge-primary">Hyperlocal Discovery</span>
            <h1>
              Shop Local. <br />
              <span className="gradient-text">Delivered to Your Door.</span>
            </h1>
            <p>
              Unlike generic quick-commerce platforms that route your food and goods through anonymous dark warehouses, Grabb puts your neighborhood store owners front and center. Order directly from the shopkeepers you know and trust, and we'll handle the delivery.
            </p>
            <div className="hero-ctas">
              <button 
                onClick={() => triggerDownloadModal('To browse local stores, download the Grabb app on your mobile device.')} 
                className="btn btn-primary"
              >
                Download the App
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-image-card">
              <div className="hero-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                  alt="Traditional Local Shopkeeper" 
                />
              </div>
              <div className="hero-card-info">
                <div className="hero-card-text">
                  <h3>Gupta Provisions</h3>
                  <p>Koramangala, Bengaluru</p>
                </div>
                <span className="badge badge-success">Verified Shop</span>
              </div>
            </div>

            <div className="hero-badge-float">
              <div className="float-icon">
                <Truck size={18} />
              </div>
              <div>
                <p>Delivering in 30 mins</p>
                <span>Fresh from the counter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container trust-container">
          <div className="trust-item">
            <Store className="trust-icon" size={24} />
            <div className="trust-text">
              <h4>120+ Shops</h4>
              <p>Onboarded in Bengaluru</p>
            </div>
          </div>
          <div className="trust-item">
            <Truck className="trust-icon" size={24} />
            <div className="trust-text">
              <h4>No Dark Stores</h4>
              <p>Straight from shopkeeper counters</p>
            </div>
          </div>
          <div className="trust-item">
            <ShieldCheck className="trust-icon" size={24} />
            <div className="trust-text">
              <h4>100% Verified</h4>
              <p>Authentic local businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Strip */}
      <section className="how-it-works-strip">
        <div className="container">
          <div className="section-intro text-center reveal">
            <span className="badge badge-primary">How Grabb Works</span>
            <h2>Simple, Local, Fast</h2>
            <p>We connect the dots between your favorite local shops and quick-logistics delivery riders.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card reveal" style={{ animationDelay: '0.1s' }}>
              <span className="step-num">1</span>
              <div className="step-icon-wrapper">
                <Store size={28} />
              </div>
              <h3>Choose a Shop</h3>
              <p>Browse local shops in your neighborhood. See their real names, read their stories, and explore their custom catalogs.</p>
            </div>

            <div className="step-card reveal" style={{ animationDelay: '0.2s' }}>
              <span className="step-num">2</span>
              <div className="step-icon-wrapper">
                {renderIcon('ShoppingBag', 28)}
              </div>
              <h3>Select & Inquire</h3>
              <p>Build your grocery, bakery, or medicine list. Send your order via our instant WhatsApp / phone link directly to the shop counter.</p>
            </div>

            <div className="step-card reveal" style={{ animationDelay: '0.3s' }}>
              <span className="step-num">3</span>
              <div className="step-icon-wrapper">
                <Truck size={28} />
              </div>
              <h3>Quick Delivery</h3>
              <p>A Grabb delivery rider picks up your package straight from the merchant's counter and brings it to your door in minutes.</p>
            </div>
          </div>
        </div>
      </section>
      
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} contextText={downloadContext} />
    </div>
  );
}
