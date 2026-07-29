import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, CheckCircle2, ShoppingCart, Plus, Minus, Trash2, ArrowLeft, Send, CheckCircle } from 'lucide-react';
import vendorsData from '../data/vendors.json';
import './VendorStorefront.css';

export default function VendorStorefront() {
  const { id } = useParams();
  const vendor = vendorsData.find(v => v.id === id);

  useEffect(() => {
    if (vendor) {
      document.title = `${vendor.name} | Grabb`;
    }
  }, [vendor]);

  // If vendor doesn't exist, show error layout
  if (!vendor) {
    return (
      <div className="storefront-page container" style={{ paddingTop: '120px', textAlign: 'center' }}>
        <h2>Vendor Not Found</h2>
        <p>The neighborhood shop you are looking for does not exist or has moved.</p>
        <Link to="/explore" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Explore
        </Link>
      </div>
    );
  }

  const { name, owner, category, area, tagline, rating, reviewsCount, image, ownerPhoto, story, address, phone, whatsapp, verified, products } = vendor;

  // State for Order Builder
  const [orderItems, setOrderItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', note: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Format Category
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

  // Add Item to Order Builder
  const addToOrder = (product) => {
    setOrderItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Update item quantity
  const updateQuantity = (productId, amount) => {
    setOrderItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  // Remove item completely
  const removeItem = (productId) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Calculate order total
  const orderTotal = orderItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  // Handle Form Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  // Validate Counter Inquiry Form
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    
    // Indian Phone format validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your phone number.';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.address.trim()) errors.address = 'Please enter delivery address.';
    return errors;
  };

  // Submit inquiry to WhatsApp or Counter
  const handleOrderSubmit = (type) => {
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Compile message for WhatsApp link
    const itemString = orderItems
      .map((item) => `- ${item.quantity} x ${item.name} (${item.unit}) [₹${item.price * item.quantity}]`)
      .join('\n');
    
    const message = `Hello ${name}, I would like to place an order via Grabb:\n\n*Items Requested:*\n${itemString}\n\n*Estimated Total:* ₹${orderTotal}\n\n*Delivery Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nNotes: ${formData.note || 'None'}`;
    
    if (type === 'whatsapp') {
      const waUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      setIsModalOpen(false);
      setOrderItems([]);
      setFormData({ name: '', phone: '', address: '', note: '' });
    } else {
      // Simulated Counter placement
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsModalOpen(false);
        setOrderItems([]);
        setFormData({ name: '', phone: '', address: '', note: '' });
      }, 3500);
    }
  };

  // Static Reviews data for pre-launch realism
  const reviews = [
    { name: "Suresh Kumar", rating: 5, text: "Always get my spices from Ramesh. The hand-ground sambar powder has no match. Extremely glad I can now get it delivered via Grabb." },
    { name: "Ananya Hegde", rating: 4, text: "The quality of rice and pulses is always top-notch. Quick delivery straight from the shopkeeper counter." }
  ];

  return (
    <div className="storefront-page">
      {/* Store Banner & Header */}
      <div className="store-banner">
        <img src={image} alt={name} className="store-banner-img" />
        <div className="store-header-overlay">
          <div className="container store-header-container">
            <div className="store-profile-meta">
              <div className="store-logo-wrapper">
                <img src={image} alt={name} className="store-logo-img" />
              </div>
              <div className="store-title-info">
                <Link to="/explore" className="btn btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem', color: 'var(--color-accent)', borderColor: 'var(--color-accent)', width: 'fit-content', marginBottom: '0.5rem', background: 'rgba(22, 50, 79, 0.4)' }}>
                  <ArrowLeft size={12} /> Back to Shops
                </Link>
                <div className="store-title-row">
                  <h1>{name}</h1>
                  {verified && <CheckCircle2 size={24} className="verified-icon-large" />}
                </div>
                <div className="store-subtitle-row">
                  <span className="store-area"><MapPin size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />{area}</span>
                  <span>&bull;</span>
                  <span>{formatCategory(category)}</span>
                </div>
                <div className="store-badge-row">
                  <span className="badge store-rating-badge">
                    <Star size={12} fill="currentColor" style={{ marginRight: '4px' }} />
                    {rating.toFixed(1)} ({reviewsCount} Ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container storefront-layout">
        {/* Catalog Showcase */}
        <main className="catalog-section">
          <h2>Product Catalog</h2>
          {products && products.length > 0 ? (
            <div className="product-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-price-row">
                      <div>
                        <span className="product-price">₹{product.price}</span>
                        <span className="product-unit"> / {product.unit}</span>
                      </div>
                      <button 
                        className="add-to-list-btn" 
                        onClick={() => addToOrder(product)}
                        title="Add to order list"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No products listed yet. Catalog coming soon!</p>
          )}

          {/* Reviews Display */}
          <section className="reviews-section">
            <h2>Reviews & Feedback</h2>
            <div className="reviews-grid">
              {reviews.map((rev, idx) => (
                <div key={idx} className="review-card">
                  <div className="review-card-header">
                    <span className="reviewer-name">{rev.name}</span>
                    <span className="review-stars">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" style={{ marginRight: '2px' }} />
                      ))}
                    </span>
                  </div>
                  <p className="review-text">"{rev.text}"</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Sidebar Info */}
        <aside className="storefront-sidebar">
          {/* Shopkeeper Story */}
          <div className="story-card">
            <div className="story-owner-header">
              <img src={ownerPhoto} alt={owner} className="story-owner-img" />
              <div className="story-owner-meta">
                <h3>{owner}</h3>
                <span>Shop Owner</span>
              </div>
            </div>
            <p className="story-text">
              {story}
            </p>
          </div>

          {/* Order Builder Widget */}
          <div className="enquiry-widget">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
              <ShoppingCart size={20} color="var(--color-primary)" />
              <h3>Order List</h3>
            </div>

            {orderItems.length > 0 ? (
              <>
                <div className="order-items-list">
                  {orderItems.map((item) => (
                    <div key={item.id} className="order-item-row">
                      <div>
                        <div style={{ fontWeight: '600' }}>{item.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>₹{item.price} / {item.unit}</div>
                      </div>
                      <div className="order-item-controls">
                        <button className="order-item-btn" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span className="order-item-qty">{item.quantity}</span>
                        <button className="order-item-btn" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={14} />
                        </button>
                        <button 
                          className="order-item-btn" 
                          onClick={() => removeItem(item.id)}
                          style={{ marginLeft: '4px', color: '#fda4af' }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-totals">
                  <div className="order-total-row">
                    <span>Subtotal:</span>
                    <span>₹{orderTotal}</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    *Delivery charges calculated at checkout.
                  </p>
                </div>

                <button 
                  className="btn btn-primary" 
                  onClick={() => setIsModalOpen(true)}
                  style={{ width: '100%' }}
                >
                  Order from this Shop
                </button>
              </>
            ) : (
              <div className="empty-order-placeholder">
                <ShoppingCart size={28} style={{ opacity: 0.3, marginBottom: '0.4rem' }} />
                <p>Your order list is empty.</p>
                <p style={{ fontSize: '0.75rem', marginTop: '4px' }}>Add items from the catalog to build an inquiry.</p>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Inquiry Checkout Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Delivery Counter Inquiry</h3>
              <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {isSubmitted ? (
                <div className="success-overlay">
                  <CheckCircle size={56} className="success-icon spinner" style={{ animationDuration: '3s' }} />
                  <h2>Order Inquiry Sent!</h2>
                  <p>
                    Your request has been routed to <strong>{name}</strong>'s front counter. A Grabb representative will call you shortly to confirm stock and assign a rider.
                  </p>
                </div>
              ) : (
                <>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
                    Confirm your details below. You can send this request directly via WhatsApp to the shopkeeper's counter or submit it to our system for manual processing.
                  </p>
                  
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Ramesh Kumar"
                      className="form-input" 
                    />
                    {formErrors.name && <span className="form-error">{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number (WhatsApp Active)</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="e.g. 9876543210"
                      className="form-input" 
                    />
                    {formErrors.phone && <span className="form-error">{formErrors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Delivery Address</label>
                    <textarea 
                      name="address" 
                      rows="3"
                      value={formData.address} 
                      onChange={handleInputChange} 
                      placeholder="Enter your complete apartment/street address"
                      className="form-input" 
                      style={{ resize: 'none' }}
                    />
                    {formErrors.address && <span className="form-error">{formErrors.address}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Instructions / Notes (Optional)</label>
                    <input 
                      type="text" 
                      name="note" 
                      value={formData.note} 
                      onChange={handleInputChange} 
                      placeholder="e.g. Leave package at security, call before arriving"
                      className="form-input" 
                    />
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-border)', margin: '1rem 0', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold' }}>
                      <span>Estimated Order:</span>
                      <span>₹{orderTotal}</span>
                    </div>

                    <div className="form-row">
                      <button 
                        className="btn btn-secondary" 
                        onClick={() => handleOrderSubmit('counter')}
                        style={{ padding: '0.6rem' }}
                      >
                        Submit to Counter
                      </button>
                      <button 
                        className="btn btn-primary" 
                        onClick={() => handleOrderSubmit('whatsapp')}
                        style={{ padding: '0.6rem', backgroundColor: '#25D366', borderColor: '#25D366' }}
                      >
                        Order via WhatsApp
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
