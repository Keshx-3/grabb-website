import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VendorCard from './VendorCard';
import './FeaturedCarousel.css';

export default function FeaturedCarousel({ vendors }) {
  const scrollRef = useRef(null);

  // Filter only featured vendors
  const featuredVendors = vendors.filter(v => v.featured);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const cardWidth = 320; // approximate card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-section-container">
      <div className="carousel-header">
        <div className="carousel-title-area">
          <span className="badge badge-accent">Curated List</span>
          <h2>Featured Local Partners</h2>
        </div>
        <div className="carousel-controls">
          <button 
            className="carousel-btn prev" 
            onClick={() => scroll('left')} 
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="carousel-btn next" 
            onClick={() => scroll('right')} 
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="carousel-wrapper" ref={scrollRef}>
        <div className="carousel-track">
          {featuredVendors.map((vendor) => (
            <div key={vendor.id} className="carousel-slide">
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
