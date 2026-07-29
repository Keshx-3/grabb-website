import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Legal.css';

export default function Legal() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('terms');

  useEffect(() => {
    if (location.pathname === '/privacy') {
      setActiveTab('privacy');
    } else {
      setActiveTab('terms');
    }
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    if (tab === 'terms') {
      navigate('/terms');
    } else {
      navigate('/privacy');
    }
  };

  return (
    <div className="legal-page container">
      <div className="legal-layout">
        {/* Navigation Sidebar */}
        <nav className="legal-nav reveal">
          <button 
            className={`legal-nav-btn ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => handleTabChange('terms')}
          >
            Terms of Use
          </button>
          <button 
            className={`legal-nav-btn ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => handleTabChange('privacy')}
          >
            Privacy Policy
          </button>
        </nav>

        {/* Content Area */}
        <main className="legal-content-card reveal" style={{ animationDelay: '0.1s' }}>
          {activeTab === 'terms' ? (
            <article>
              <h1>Terms of Use</h1>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Last Updated: July 2026
              </p>

              <div className="legal-section">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to Grabb. These Terms of Use govern your access to and use of our public discovery website. By browsing this website, building order lists, or submitting vendor applications, you agree to comply with and be bound by these terms.
                </p>
              </div>

              <div className="legal-section">
                <h2>2. Nature of Services</h2>
                <p>
                  Grabb is a hyperlocal search and discovery platform. We facilitate connections between local neighborhood shopkeepers and buyers. In this initial static phase, Grabb provides order compilation tools and counter routing mechanisms. Actual transactions, collections, and delivery tracking are governed separately at storefront counters.
                </p>
              </div>

              <div className="legal-section">
                <h2>3. User Account & Conduct</h2>
                <p>
                  You agree to use this website only for lawful purposes. You must not submit false information, fake store applications, or fake order inquiries. All text, numbers, and coordinates provided must be accurate.
                </p>
              </div>

              <div className="legal-section">
                <h2>4. Intellectual Property</h2>
                <p>
                  All content, graphics, layouts, brand identifiers, and coding elements displayed on this website are the property of Grabb Delivery Services or our partner shopkeepers. You may not copy, extract, or republish elements without explicit written authorization.
                </p>
              </div>

              <div className="legal-section">
                <h2>5. Limitation of Liability</h2>
                <p>
                  Grabb works to verify partner shops, but does not guarantee the availability, quality, or freshness of products listed. All disputes regarding catalog prices or order fulfillment are issues between the buyer and the respective shopkeeper.
                </p>
              </div>
            </article>
          ) : (
            <article>
              <h1>Privacy Policy</h1>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Last Updated: July 2026
              </p>

              <div className="legal-section">
                <h2>1. Information We Collect</h2>
                <p>
                  We collect personal details that you voluntarily submit when building orders or registering shops:
                </p>
                <ul>
                  <li>Your Name and Contact numbers (including WhatsApp active numbers).</li>
                  <li>Delivery addresses and landmark notes.</li>
                  <li>Email coordinates and store registry files.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>2. How We Use Information</h2>
                <p>
                  We utilize collect details solely to facilitate order fulfillment and merchant onboardings:
                </p>
                <ul>
                  <li>Compiling order details and routing them to shop counter numbers.</li>
                  <li>Assigning delivery partners to pick up and drop items.</li>
                  <li>Following up on merchant application audits.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>3. Information Sharing</h2>
                <p>
                  We do not sell or trade your details with third-party advertising companies. Your order details, name, and address are shared only with:
                </p>
                <ul>
                  <li>The specific shopkeeper counter fulfilling your order.</li>
                  <li>The assigned delivery partner completing the transit.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>4. Data Protection</h2>
                <p>
                  Grabb implements secure transport protocols (HTTPS) to safeguard data transfer. Since we do not retain payments or credit details on this static site, no financial credentials are vulnerability points on our servers.
                </p>
              </div>
            </article>
          )}
        </main>
      </div>
    </div>
  );
}
