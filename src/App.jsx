import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import WorkWithUs from './pages/WorkWithUs';
import ReportFraud from './pages/ReportFraud';
import ContactUs from './pages/ContactUs';
import MerchantPartner from './pages/MerchantPartner';
import RiderPartner from './pages/RiderPartner';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Security from './pages/Security';
import TermsOfService from './pages/TermsOfService';

const PAGE_TITLES = {
  '/': 'Grabb, Shop Local. Delivered.',
  '/who-we-are': 'Who We Are, Grabb',
  '/work-with-us': 'Work With Us, Grabb Careers',
  '/report-fraud': 'Report Fraud, Grabb',
  '/contact-us': 'Contact Us, Grabb',
  '/merchant-partner': 'Partner With Us, Grabb Merchants',
  '/rider-partner': 'Partner With Us, Grabb Riders',
  '/privacy-policy': 'Privacy Policy, Grabb',
  '/security': 'Security, Grabb',
  '/terms-of-service': 'Terms of Service, Grabb',
};

function TitleUpdater() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] || 'Grabb, Shop Local. Delivered.';
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <TitleUpdater />
      <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div className="main-content" style={{ flexGrow: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* About Grabb */}
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/report-fraud" element={<ReportFraud />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* For Merchants */}
            <Route path="/merchant-partner" element={<MerchantPartner />} />
            {/* For Riders */}
            <Route path="/rider-partner" element={<RiderPartner />} />
            {/* Learn More */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
