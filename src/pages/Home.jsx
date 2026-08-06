import React, { useState, useEffect, useRef } from 'react';
import { Store, Truck, ShieldCheck, ArrowRight, ShoppingBag, ChevronDown } from 'lucide-react';
import DownloadModal from '../components/DownloadModal';
import './Home.css';

export default function Home() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [downloadContext, setDownloadContext] = useState('');

  const triggerDownloadModal = (message) => {
    setDownloadContext(message);
    setIsDownloadOpen(true);
  };

  // Scroll-driven sequential animation for trust section images
  const trustSectionRef = useRef(null);
  const featuresSectionRef = useRef(null);
  const downloadPhoneRef = useRef(null);

  useEffect(() => {
    const section = trustSectionRef.current;
    if (!section) return;

    // Each entry: [selector, scroll-progress threshold to show]
    // Progress 0 = section bottom just hits viewport bottom
    // Progress 1 = section top aligned with viewport top
    const items = [
      ['.trust-float-burger', 0.18],
      ['.trust-float-dumplings', 0.42],
      ['.trust-float-pizza', 0.63],
      ['.trust-float-dot1', 0.50],
      ['.trust-float-dot2', 0.55],
    ];

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section top is at viewport bottom, 1 when section top is at viewport top
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));

      items.forEach(([sel, threshold]) => {
        const el = section.querySelector(sel);
        if (!el) return;
        if (progress >= threshold) {
          el.classList.add('trust-img-visible');
        } else {
          el.classList.remove('trust-img-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on mount in case already in view

    // --- Features Section Scroll Animation ---
    const handleFeaturesScroll = () => {
      const featureSection = featuresSectionRef.current;
      if (!featureSection) return;

      const featureItems = [
        ['.feat-tile-1', 0.20],
        ['.feat-tile-5', 0.25],
        ['.feat-tile-2', 0.30],
        ['.feat-tile-6', 0.35],
        ['.feat-tile-3', 0.40],
        ['.feat-tile-7', 0.45],
        ['.feat-tile-4', 0.50],
      ];

      const rect = featureSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / vh));

      featureItems.forEach(([sel, threshold]) => {
        const el = featureSection.querySelector(sel);
        if (!el) return;
        if (progress >= threshold) {
          el.classList.add('feat-visible');
        } else {
          el.classList.remove('feat-visible');
        }
      });
    };

    window.addEventListener('scroll', handleFeaturesScroll, { passive: true });
    handleFeaturesScroll();

    // --- Download Phone Slide Up Animation ---
    const phoneEl = downloadPhoneRef.current;
    let observer;
    if (phoneEl) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slid-up');
          } else {
            // Optional: remove if you want it to slide down when scrolled away
            entry.target.classList.remove('slid-up');
          }
        });
      }, { threshold: 0.1 });
      observer.observe(phoneEl);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleFeaturesScroll);
      if (observer && phoneEl) observer.unobserve(phoneEl);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.home-trust-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video
          className="hero-video-bg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-delivery-man-with-a-box-delivers-to-a-home-43034-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>

        <div className="container hero-overlay-container">
          <div className="hero-content reveal">
            <h1 className="hero-brand-name">Grabb</h1>
            <h1>
              India's #1 <br />
              <span className="gradient-text">local store delivery app</span>
            </h1>
            <p className="trust-section-desc">
              Experience fast &amp; easy online ordering on the Grabb app
            </p>

            {/* App Store Badges - centered, coming soon */}
            <div className="hero-badges-inline reveal">
              <div className="hero-badges-row">
                <img
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="hero-badge-img"
                  onClick={() => triggerDownloadModal('Google Play Store download is coming soon!')}
                />
                <img
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  className="hero-badge-img"
                  onClick={() => triggerDownloadModal('Apple App Store download is coming soon!')}
                />
              </div>
              <p className="hero-coming-soon">Coming soon</p>
            </div>
          </div>
        </div>

        {/* Grabb Logo in Bottom Right */}
        <img src="/logo.png" alt="Grabb Logo" className="hero-corner-logo" />

        {/* Floating Scroll Down Arrow */}
        <div className="hero-scroll-down reveal" onClick={scrollToNextSection}>
          <span>Scroll down</span>
          <ChevronDown className="bounce-arrow" size={20} />
        </div>
      </section>

      {/* Trust & Philosophy Section (Second Fold) */}
      <section className="home-trust-section" ref={trustSectionRef}>

        {/* Decorative SVG Curves */}
        <svg className="trust-curve trust-curve-left" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M280 20 C200 80, 50 120, 80 220 C110 320, 260 340, 200 400" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
          <path d="M260 0 C180 60, 30 100, 60 200 C90 300, 240 320, 180 400" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.12" fill="none" />
        </svg>
        <svg className="trust-curve trust-curve-right" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20 C100 80, 250 120, 220 220 C190 320, 40 340, 100 400" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
          <path d="M40 0 C120 60, 270 100, 240 200 C210 300, 60 320, 120 400" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.12" fill="none" />
        </svg>

        {/* Floating Product Cut-out Images */}
        <div className="trust-float trust-float-burger">
          <div className="trust-float-inner">
            <img src="/milk.png" alt="Milk" />
          </div>
        </div>
        <div className="trust-float trust-float-dumplings">
          <div className="trust-float-inner">
            <img src="/headphone.png" alt="Headphone" />
          </div>
        </div>
        <div className="trust-float trust-float-pizza">
          <div className="trust-float-inner">
            <img src="/broccoli.png" alt="Broccoli" />
          </div>
        </div>
        <div className="trust-float trust-float-dot1">
          <div className="trust-float-inner"><span>🫐</span></div>
        </div>
        <div className="trust-float trust-float-dot2">
          <div className="trust-float-inner"><span>🍋</span></div>
        </div>

        <div className="container trust-section-container text-center reveal">
          <h2 className="trust-section-title">
            Just grabb it !
          </h2>
          <p className="trust-section-desc">
            We connect you directly with the neighborhood merchants you know and trust, bringing authentic store-counter shopping right to your doorstep.
          </p>

          {/* Stats Capsule — Zomato style */}
          <div className="trust-capsule-card">
            <div className="trust-capsule-item">
              <div className="capsule-stat-row">
                <span className="capsule-stat">120+</span>
                <div className="capsule-icon-wrapper store-icon">
                  <Store size={28} />
                </div>
              </div>
              <div className="capsule-label">local shops</div>
            </div>

            <div className="capsule-divider"></div>

            <div className="trust-capsule-item">
              <div className="capsule-stat-row">
                <span className="capsule-stat">No</span>
                <div className="capsule-icon-wrapper truck-icon">
                  <ShoppingBag size={28} />
                </div>
              </div>
              <div className="capsule-label">dark stores</div>
            </div>

            <div className="capsule-divider"></div>

            <div className="trust-capsule-item">
              <div className="capsule-stat-row">
                <span className="capsule-stat">100%</span>
                <div className="capsule-icon-wrapper verify-icon">
                  <ShieldCheck size={28} />
                </div>
              </div>
              <div className="capsule-label">verified shops</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section — Third Page */}
      <section className="home-features-section" ref={featuresSectionRef}>
        <div className="features-section-container text-center reveal">
          <h2 className="features-section-title">
            What's waiting for you <br /> on the app?
          </h2>
          <p className="features-section-desc">
            Our app is packed with features that enable you to experience grocery delivery like never before
          </p>

          {/* Main showcase: Radial Swirl Out Layout */}
          <div className="features-showcase-radial">

            <div className="features-phone-wrapper">
              {/* Phone Mockup with bottom mask */}
              <img
                src="/phone_image.png"
                alt="Grabb App Phone"
                className="features-phone-img"
              />
            </div>

            {/* Logo centered perfectly on the radial center (over phone) */}
            <div className="phone-screen-logo-wrapper">
              <img src="/logo.png" alt="Grabb" className="phone-screen-logo" />
            </div>

            {/* Swirling Orbit Tiles */}
            <div className="feat-tile feat-tile-1">
              <div className="feat-tile-icon"><img src="/Reserve.png" alt="Reserve" /></div>
              <span>Reserve</span>
            </div>
            <div className="feat-tile feat-tile-2">
              <div className="feat-tile-icon"><img src="/Shop to door.png" alt="Shop to Door" /></div>
              <span>Shop to<br />Door</span>
            </div>
            <div className="feat-tile feat-tile-3">
              <div className="feat-tile-icon"><img src="/virtual shop.png" alt="Virtual Shop" /></div>
              <span>Virtual<br />Shop</span>
            </div>
            <div className="feat-tile feat-tile-4">
              <div className="feat-tile-icon"><img src="/rural reach.png" alt="Rural Reach" /></div>
              <span>Rural<br />Reach</span>
            </div>
            <div className="feat-tile feat-tile-5">
              <div className="feat-tile-icon"><img src="/hot offers.png" alt="Hot Offers" /></div>
              <span>Hot Offers</span>
            </div>
            <div className="feat-tile feat-tile-6">
              <div className="feat-tile-icon"><img src="/reward points.png" alt="Reward Points" /></div>
              <span>Reward<br />Points</span>
            </div>
            <div className="feat-tile feat-tile-7">
              <div className="feat-tile-icon"><img src="/schedule.png" alt="Schedule" /></div>
              <span>Schedule</span>
            </div>

          </div>
        </div>
      </section>

      {/* Download Section (4th Fold) */}
      <section className="home-download-section">
        <div className="container download-section-container reveal">
          <div className="download-app-card">

            {/* Decorative background curves (Concentric circles like Zomato) */}
            <svg className="dl-card-circles" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="250" cy="250" r="100" stroke="#a5b4fc" strokeOpacity="0.3" strokeWidth="1.5" />
              <circle cx="250" cy="250" r="180" stroke="#a5b4fc" strokeOpacity="0.25" strokeWidth="1.5" />
              <circle cx="250" cy="250" r="260" stroke="#a5b4fc" strokeOpacity="0.15" strokeWidth="1.5" />
              <circle cx="250" cy="250" r="340" stroke="#a5b4fc" strokeOpacity="0.1" strokeWidth="1.5" />
            </svg>

            {/* Left Column: Text & Badges */}
            <div className="download-card-content">
              <h2>Download the app now!</h2>
              <p>Experience seamless online ordering only on the Grabb app</p>

              <div className="download-card-badges">
                <img
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="store-badge-img"
                  onClick={() => triggerDownloadModal('Google Play Store download is coming soon!')}
                />
                <img
                  src="/app-store-badge.png"
                  alt="Download on the App Store"
                  className="store-badge-img"
                  onClick={() => triggerDownloadModal('Apple App Store download is coming soon!')}
                />
              </div>
            </div>

            {/* Right Column: Sliding Phone Frame with QR */}
            <div className="download-card-visual" ref={downloadPhoneRef}>
              <div className="dl-phone-frame">
                {/* Phone top notch */}
                <div className="dl-phone-topbar">
                  <div className="dl-phone-camera"></div>
                  <div className="dl-phone-speaker"></div>
                </div>
                {/* Phone screen content */}
                <div className="dl-phone-screen">
                  <p className="dl-phone-instruction">Scan the QR code to<br />download the app</p>
                  <div className="dl-qr-wrapper">
                    {/* Real scannable QR code via public API */}
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://grabb.app&color=000000&bgcolor=ffffff&margin=4"
                      alt="Scan to download Grabb app"
                      className="dl-qr-img"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} contextText={downloadContext} />
    </div>
  );
}
