import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar-simple">
      <NavLink to="/who-we-are" className={({ isActive }) => `simple-nav-link ${isActive ? 'active' : ''}`}>
        About Us
      </NavLink>
      <NavLink to="/rider-partner" className={({ isActive }) => `simple-nav-link ${isActive ? 'active' : ''}`}>
        Ride With Us
      </NavLink>
      <NavLink to="/merchant-partner" className={({ isActive }) => `simple-nav-link ${isActive ? 'active' : ''}`}>
        Merchant With Us
      </NavLink>
    </nav>
  );
}
