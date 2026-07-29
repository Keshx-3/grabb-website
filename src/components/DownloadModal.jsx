import React from 'react';
import { X, Smartphone, QrCode, ArrowRight } from 'lucide-react';
import './DownloadModal.css';

export default function DownloadModal({ isOpen, onClose, contextText }) {
  if (!isOpen) return null;

  return (
    <div className="download-modal-overlay" onClick={onClose}>
      <div className="download-modal-card reveal" onClick={(e) => e.stopPropagation()}>
        <div className="download-modal-header">
          <div className="app-logo-wrapper">
            <Smartphone size={24} color="var(--color-white)" />
          </div>
          <button className="download-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>
        
        <div className="download-modal-body text-center">
          <h2>Get the Grabb App</h2>
          {contextText ? (
            <p className="context-message badge badge-primary">{contextText}</p>
          ) : (
            <p className="download-subtitle">Shop local, delivered in 30 minutes straight from neighborhood counters.</p>
          )}

          {/* Badges Container */}
          <div className="store-badges-container">
            <a href="#playstore" className="store-badge-btn" onClick={(e) => e.preventDefault()}>
              <div className="badge-icon">🤖</div>
              <div className="badge-text-col">
                <span className="badge-top-text">GET IT ON</span>
                <span className="badge-main-text">Google Play</span>
              </div>
            </a>
            
            <a href="#appstore" className="store-badge-btn app-store-btn" onClick={(e) => e.preventDefault()}>
              <div className="badge-icon">🍏</div>
              <div className="badge-text-col">
                <span className="badge-top-text">Download on the</span>
                <span className="badge-main-text">App Store</span>
              </div>
            </a>
          </div>

          {/* QR Code and Instructions */}
          <div className="qr-container-box">
            <div className="qr-graphics-wrapper">
              <QrCode size={96} strokeWidth={1.5} color="var(--color-secondary)" />
            </div>
            <div className="qr-text-info">
              <h4>Scan to Download</h4>
              <p>Point your mobile camera at the code to install Grabb instantly on iOS or Android.</p>
            </div>
          </div>

          <p className="app-status-tag">
            <span>Development Status:</span> Stable Beta (v1.2) Available
          </p>
        </div>
      </div>
    </div>
  );
}
