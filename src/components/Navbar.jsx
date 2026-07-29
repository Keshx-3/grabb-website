import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-icon">
            <ShoppingBag size={22} className="logo-bag" />
          </div>
          <span className="logo-text">Grabb</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            How It Works
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </div>

        <div className="nav-cta">
          <Link to="/become-a-vendor" className="btn btn-primary nav-btn">
            Become a Vendor
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="mobile-drawer glass">
          <div className="mobile-drawer-links">
            <NavLink to="/" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/how-it-works" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
              How It Works
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
            <Link to="/become-a-vendor" className="btn btn-primary mobile-cta-btn">
              Become a Vendor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
