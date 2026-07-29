import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Store, Truck, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import FeaturedCarousel from '../components/FeaturedCarousel';
import categoriesData from '../data/categories.json';
import vendorsData from '../data/vendors.json';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName, size = 24) => {
    const IconComponent = Icons[iconName] || Icons.HelpCircle;
    return <IconComponent size={size} />;
  };

  const handleCategoryClick = (catId) => {
    navigate(`/explore?category=${catId}`);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <span className="badge badge-primary">Hyperlocal Discovery</span>
            <h1>
              Shop Local. <br />
              <span className="gradient-text">Delivered to Your Door.</span>
            </h1>
            <p>
              Unlike generic quick-commerce platforms that route your food and goods through anonymous dark warehouses, Grabb puts your neighborhood store owners front and center. Order directly from the shopkeepers you know and trust, and we'll handle the delivery.
            </p>
            <div className="hero-ctas">
              <Link to="/explore" className="btn btn-primary">
                Explore Local Shops
                <ArrowRight size={18} />
              </Link>
              <Link to="/become-a-vendor" className="btn btn-outline">
                Become a Partner Shop
              </Link>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-image-card">
              <div className="hero-img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" 
                  alt="Traditional Local Shopkeeper" 
                />
              </div>
              <div className="hero-card-info">
                <div className="hero-card-text">
                  <h3>Gupta Provisions</h3>
                  <p>Koramangala, Bengaluru</p>
                </div>
                <span className="badge badge-success">Verified Shop</span>
              </div>
            </div>

            <div className="hero-badge-float">
              <div className="float-icon">
                <Truck size={18} />
              </div>
              <div>
                <p>Delivering in 30 mins</p>
                <span>Fresh from the counter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="trust-strip">
        <div className="container trust-container">
          <div className="trust-item">
            <Store className="trust-icon" size={24} />
            <div className="trust-text">
              <h4>120+ Shops</h4>
              <p>Onboarded in Bengaluru</p>
            </div>
          </div>
          <div className="trust-item">
            <Truck className="trust-icon" size={24} />
            <div className="trust-text">
              <h4>No Dark Stores</h4>
              <p>Straight from shopkeeper counters</p>
            </div>
          </div>
          <div className="trust-item">
            <ShieldCheck className="trust-icon" size={24} />
            <div className="trust-text">
              <h4>100% Verified</h4>
              <p>Authentic local businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Strip */}
      <section className="how-it-works-strip">
        <div className="container">
          <div className="section-intro text-center reveal">
            <span className="badge badge-primary">How Grabb Works</span>
            <h2>Simple, Local, Fast</h2>
            <p>We connect the dots between your favorite local shops and quick-logistics delivery riders.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card reveal" style={{ animationDelay: '0.1s' }}>
              <span className="step-num">1</span>
              <div className="step-icon-wrapper">
                <Store size={28} />
              </div>
              <h3>Choose a Shop</h3>
              <p>Browse local shops in your neighborhood. See their real names, read their stories, and explore their custom catalogs.</p>
            </div>

            <div className="step-card reveal" style={{ animationDelay: '0.2s' }}>
              <span className="step-num">2</span>
              <div className="step-icon-wrapper">
                {renderIcon('ShoppingBag', 28)}
              </div>
              <h3>Select & Inquire</h3>
              <p>Build your grocery, bakery, or medicine list. Send your order via our instant WhatsApp / phone link directly to the shop counter.</p>
            </div>

            <div className="step-card reveal" style={{ animationDelay: '0.3s' }}>
              <span className="step-num">3</span>
              <div className="step-icon-wrapper">
                <Truck size={28} />
              </div>
              <h3>Quick Delivery</h3>
              <p>A Grabb delivery rider picks up your package straight from the merchant's counter and brings it to your door in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-intro text-center reveal">
            <span className="badge badge-primary">Browse Categories</span>
            <h2>What are you looking for?</h2>
            <p>Select a category to discover neighborhood stores ready to fulfill your daily requirements.</p>
          </div>

          <div className="category-tile-grid">
            {categoriesData.map((category) => (
              <div 
                key={category.id} 
                className="category-tile reveal"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="category-tile-icon">
                  {renderIcon(category.icon, 24)}
                </div>
                <div className="category-tile-text">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="featured-vendors-section">
        <div className="container">
          <FeaturedCarousel vendors={vendorsData} />
        </div>
      </section>

      {/* CTA Promo Section */}
      <section className="promo-section">
        <div className="container">
          <div className="promo-container reveal">
            <div className="promo-content">
              <span className="badge badge-primary">Are you a Shop Owner?</span>
              <h2>Onboard your store on Grabb</h2>
              <p>
                Reach thousands of digital customers in your neighborhood. We showcase your shop profile, catalog, and brand name, and handle 100% of the logistics. Keep doing what you do best — serving customers — and we'll handle the delivery wheel.
              </p>
              <div>
                <Link to="/become-a-vendor" className="btn btn-secondary">
                  Register Your Shop
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="promo-visual-grid">
              <div className="promo-img-card">
                <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=300" alt="Bakery shop" />
              </div>
              <div className="promo-img-card">
                <img src="https://images.unsplash.com/photo-1607619056574-7b8d304d3b24?auto=format&fit=crop&q=80&w=300" alt="Pharmacy" />
              </div>
              <div className="promo-img-card">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=300" alt="Boutique" />
              </div>
              <div className="promo-img-card">
                <img src="https://images.unsplash.com/photo-1573244514396-9017b88fd44e?auto=format&fit=crop&q=80&w=300" alt="Fruit Stall" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
