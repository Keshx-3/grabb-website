import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';
import './VendorCard.css';

export default function VendorCard({ vendor, onClick }) {
  const { id, name, category, area, tagline, rating, reviewsCount, image, verified } = vendor;

  // Format category label
  const formatCategory = (cat) => {
    switch(cat) {
      case 'grocery': return 'Grocery';
      case 'bakery': return 'Bakery & Sweets';
      case 'pharmacy': return 'Pharmacy & Care';
      case 'boutique': return 'Boutique & Crafts';
      case 'stationery': return 'Books & Stationery';
      case 'produce': return 'Fresh Fruits & Veg';
      default: return cat;
    }
  };

  return (
    <div onClick={onClick} className="vendor-card reveal" style={{ cursor: 'pointer' }}>
      <div className="card-image-wrapper">
        <img src={image} alt={name} loading="lazy" className="card-image" />
        <span className="card-category-badge badge badge-primary">{formatCategory(category)}</span>
        {verified && (
          <span className="card-verified-badge" title="Verified Grabb Partner">
            <CheckCircle2 size={16} fill="var(--color-primary)" color="var(--color-white)" />
          </span>
        )}
      </div>
      <div className="card-content">
        <div className="card-header-row">
          <h3 className="card-title">{name}</h3>
          <div className="card-rating">
            <Star size={14} className="star-icon" fill="currentColor" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="card-location">
          <MapPin size={14} className="location-icon" />
          <span>{area}</span>
        </div>
        <p className="card-tagline">{tagline}</p>
        <div className="card-footer">
          <span className="card-reviews">{reviewsCount} reviews</span>
          <span className="card-cta-text">Browse Products &rarr;</span>
        </div>
      </div>
    </div>
  );
}
