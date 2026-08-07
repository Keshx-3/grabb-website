import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import './PageHeader.css';

export default function PageHeader() {
  return (
    <header className="page-header">
      <div className="container page-header-inner">
        <Link to="/" className="page-header-logo">
          <div className="page-header-logo-icon">
            <ShoppingBag size={20} />
          </div>
          <span className="page-header-logo-text">Grabb</span>
        </Link>
        <Link to="/" className="page-header-back">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </header>
  );
}
