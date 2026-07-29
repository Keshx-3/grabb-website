import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Globe, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import DownloadModal from './DownloadModal';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Info Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <div className="logo-icon-sm">
              <ShoppingBag size={18} />
            </div>
            <span>Grabb</span>
          </Link>
          <p className="footer-desc">
            Reconnecting communities with their neighborhood shops. Your trusted local stores, delivered with speed and care.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <Globe size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <MessageCircle size={18} />
            </a>
            <a href="mailto:support@grabb.local" className="social-icon" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Customer Links */}
        <div className="footer-col">
          <h3>For Customers</h3>
          <ul className="footer-links">
            <li>
              <button 
                onClick={() => setIsDownloadOpen(true)} 
                className="footer-download-btn"
              >
                Download the App
              </button>
            </li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/contact">Support & Help</Link></li>
          </ul>
        </div>

        {/* Vendor Links */}
        <div className="footer-col">
          <h3>For Shopkeepers</h3>
          <ul className="footer-links">
            <li><Link to="/become-a-vendor">Become a Vendor</Link></li>
            <li><Link to="/become-a-vendor#benefits">Onboarding Benefits</Link></li>
            <li><Link to="/become-a-vendor#faq">Vendor FAQs</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col contact-col">
          <h3>Get In Touch</h3>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Indiranagar Double Rd, Eshwara Layout, Indiranagar, Bengaluru, KA 560038</span>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:support@grabb.local">support@grabb.local</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p className="copyright">&copy; {currentYear} Grabb Delivery Services. All rights reserved.</p>
          <div className="bottom-links">
            <Link to="/terms">Terms of Use</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </footer>
  );
}
