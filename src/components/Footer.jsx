import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadModal from './DownloadModal';
import './Footer.css';

export default function Footer() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [downloadContext, setDownloadContext] = useState('');

  const triggerDownloadModal = (message) => {
    setDownloadContext(message);
    setIsDownloadOpen(true);
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Top Header Row with Logo */}
        <div className="footer-header">
          <Link to="/" className="footer-brand-logo">
            <img src="/logo.png" alt="Grabb" />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          
          {/* Col 1: About Grabb */}
          <div className="footer-col">
            <h4>About Grabb</h4>
            <ul className="footer-links-list">
              <li><Link to="/who-we-are" className="footer-link">Who We Are</Link></li>
              {/* <li><Link to="/work-with-us" className="footer-link">Work With Us</Link></li> */}
              <li><Link to="/report-fraud" className="footer-link">Report Fraud</Link></li>
              <li><Link to="/contact-us" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 2: For Merchants */}
          <div className="footer-col">
            <h4>For Merchants</h4>
            <ul className="footer-links-list">
              <li><Link to="/merchant-partner" className="footer-link">Partner With Us</Link></li>
              <li><a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="footer-link">Apps For You</a></li>
            </ul>
          </div>

          {/* Col 3: For Riders */}
          <div className="footer-col">
            <h4>For Riders</h4>
            <ul className="footer-links-list">
              <li><Link to="/rider-partner" className="footer-link">Partner With Us</Link></li>
              <li><a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="footer-link">Apps For You</a></li>
            </ul>
          </div>

          {/* Col 4: Learn More */}
          <div className="footer-col">
            <h4>Learn More</h4>
            <ul className="footer-links-list">
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/security" className="footer-link">Security</Link></li>
              <li><Link to="/terms-of-service" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Col 5: Social & App Stores */}
          <div className="footer-col social-col">
            <h4>Social Links</h4>
            <div className="footer-social-circles">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="social-svg">
                  <path fill="#000000" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="social-svg" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="social-svg">
                  <path fill="#000000" d="M23.498 6.163c-.272-1-1.08-1.78-2.1-2.043C19.52 3.633 12 3.633 12 3.633s-7.52 0-9.398.487C1.584 4.383.776 5.163.502 6.163.02 8.007 0 12 0 12s.02 3.993.502 5.837c.274 1 .982 1.78 2.1 2.043C4.48 20.367 12 20.367 12 20.367s7.52 0 9.398-.487c1.018-.263 1.826-1.043 2.1-2.043.482-1.844.502-5.837.502-5.837s-.02-3.993-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="social-svg">
                  <path fill="#000000" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="social-svg">
                  <path fill="#000000" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            <div className="footer-app-badges">
              <img 
                src="/app-store-badge.png" 
                alt="Download on the App Store" 
                className="footer-badge-img"
                onClick={() => triggerDownloadModal('App Store download is coming soon!')}
              />
              <img 
                src="/google-play-badge.png" 
                alt="Get it on Google Play" 
                className="footer-badge-img"
                onClick={() => triggerDownloadModal('Play Store download is coming soon!')}
              />
            </div>

          </div>

        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom copyright warning */}
        <div className="footer-disclaimer">
          <p>
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2026 © Grabb Ltd. All rights reserved.
          </p>
        </div>

      </div>
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} contextText={downloadContext} />
    </footer>
  );
}
