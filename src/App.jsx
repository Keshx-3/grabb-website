import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import VendorStorefront from './pages/VendorStorefront';
import BecomeVendor from './pages/BecomeVendor';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Legal from './pages/Legal';

function TitleUpdater() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = 'Grabb — Shop Local. Delivered.';
    
    if (pathname === '/') {
      title = 'Grabb — Shop Local. Delivered.';
    } else if (pathname === '/explore') {
      title = 'Explore Local Shops | Grabb';
    } else if (pathname.startsWith('/vendor/')) {
      // The VendorStorefront component sets its own title dynamically
      return;
    } else if (pathname === '/become-a-vendor') {
      title = 'Become a Partner Shop | Grabb';
    } else if (pathname === '/how-it-works') {
      title = 'How Grabb Works | Grabb';
    } else if (pathname === '/about') {
      title = 'About Our Mission | Grabb';
    } else if (pathname === '/contact') {
      title = 'Contact Support | Grabb';
    } else if (pathname === '/faq') {
      title = 'Help & FAQs | Grabb';
    } else if (pathname === '/terms') {
      title = 'Terms of Use | Grabb';
    } else if (pathname === '/privacy') {
      title = 'Privacy Policy | Grabb';
    }

    document.title = title;
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TitleUpdater />
      <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div className="main-content" style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/vendor/:id" element={<VendorStorefront />} />
            <Route path="/become-a-vendor" element={<BecomeVendor />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Legal />} />
            <Route path="/privacy" element={<Legal />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
