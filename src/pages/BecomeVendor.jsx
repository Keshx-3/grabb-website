import React, { useState } from 'react';
import { Store, ShieldCheck, DollarSign, Clock, ChevronDown, Check, Upload, RefreshCw } from 'lucide-react';
import './BecomeVendor.css';

export default function BecomeVendor() {
  // Form State
  const [formData, setFormData] = useState({
    shopName: '',
    ownerName: '',
    category: '',
    area: '',
    address: '',
    phone: '',
    email: '',
    photo: null
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  // Mock File Upload handling
  const [uploadedFileName, setUploadedFileName] = useState('');
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      setFormData({ ...formData, photo: file });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.shopName.trim()) newErrors.shopName = 'Shop name is required.';
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Owner name is required.';
    if (!formData.category) newErrors.category = 'Please select a shop category.';
    if (!formData.area) newErrors.area = 'Please select your operating neighborhood.';
    if (!formData.address.trim()) newErrors.address = 'Shop address is required.';
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // Scroll to the first error
      const firstErrorKey = Object.keys(formErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsRegistered(true);
    }, 2000);
  };

  const resetForm = () => {
    setIsRegistered(false);
    setFormData({
      shopName: '',
      ownerName: '',
      category: '',
      area: '',
      address: '',
      phone: '',
      email: '',
      photo: null
    });
    setUploadedFileName('');
  };

  // Vendor FAQ Data
  const faqs = [
    {
      q: "How much does it cost to list my shop on Grabb?",
      a: "It is 100% free to onboard your shop and list your products. We do not charge any setup, listing, or subscription fees. Grabb only charges a small commission (5% to 8%) on completed delivery orders to cover payment processing and rider logistics."
    },
    {
      q: "Who handles the delivery riders and logistics?",
      a: "Grabb manages the entire delivery flow. Our network of background-verified delivery riders are assigned automatically when you accept an order. The rider collects the package from your counter and transports it to the customer. You focus on packing, we handle the wheel."
    },
    {
      q: "How do I update my products, prices, and stock levels?",
      a: "For this pre-launch phase, our merchant onboarding team handles the catalog setup and updates for you manually. Post-launch, you will get access to a simple, visual Merchant Portal app where you can adjust items, prices, and toggles in real-time."
    },
    {
      q: "How long does the onboarding process take?",
      a: "After you submit your registration request online, a Grabb agent will call you within 24 hours to schedule a short physical verification of your shop address. Once verified, we upload your menu/catalog, and you can go live and begin receiving local orders within 48 hours."
    }
  ];

  return (
    <div className="become-vendor-page">
      {/* Hero Section */}
      <section className="container vendor-hero reveal">
        <span className="badge badge-primary">Merchant Partners</span>
        <h1>Your Shop, Online. We handle the delivery.</h1>
        <p>
          Onboard your retail business to the Grabb local discovery network. Connect directly with buyers in your neighborhood without losing your brand identity or paying exorbitant commission fees.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="container grid-3 benefits-grid">
        <div className="benefit-card reveal" style={{ animationDelay: '0.1s' }}>
          <div className="benefit-icon-wrapper">
            <Store size={24} />
          </div>
          <div>
            <h3>Retain Your Brand</h3>
            <p>We do not bundle your goods in dark warehouses. Customers order from YOUR named shopfront, building long-term digital relationships.</p>
          </div>
        </div>

        <div className="benefit-card reveal" style={{ animationDelay: '0.2s' }}>
          <div className="benefit-icon-wrapper">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3>Zero Delivery Hassles</h3>
            <p>Our fleet of active local riders are automatically assigned when orders come in. No need to manage your own delivery staff.</p>
          </div>
        </div>

        <div className="benefit-card reveal" style={{ animationDelay: '0.3s' }}>
          <div className="benefit-icon-wrapper">
            <DollarSign size={24} />
          </div>
          <div>
            <h3>Fair Commissions</h3>
            <p>Keep your hard-earned profits. We operate on a thin, fair-margin model with no hidden fees, subscriptions, or dark pricing loops.</p>
          </div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="container vendor-registration-layout">
        {/* Form Container */}
        <div className="form-card reveal">
          {isRegistered ? (
            <div className="success-overlay" style={{ padding: '2rem 0' }}>
              <div className="benefit-icon-wrapper" style={{ backgroundColor: 'var(--color-success-bg)', color: 'var(--color-success)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1rem' }}>
                <Check size={48} />
              </div>
              <h2>Application Received!</h2>
              <p style={{ maxWidth: '500px', margin: '0 auto var(--spacing-md) auto' }}>
                Thank you for applying to join Grabb. We have registered <strong>{formData.shopName}</strong> in our verification queue. An onboarding specialist will reach out to you at <strong>{formData.phone}</strong> within 24 hours.
              </p>
              
              <div style={{ background: 'var(--color-bg-ice)', padding: '1.2rem', borderRadius: 'var(--radius-md)', textAlign: 'left', width: '100%', maxWidth: '500px', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Summary Details:</h4>
                <p style={{ fontSize: '0.85rem' }}><strong>Merchant Owner:</strong> {formData.ownerName}</p>
                <p style={{ fontSize: '0.85rem' }}><strong>Shop Category:</strong> {formData.category}</p>
                <p style={{ fontSize: '0.85rem' }}><strong>Location Area:</strong> {formData.area}</p>
                <p style={{ fontSize: '0.85rem' }}><strong>Email Registered:</strong> {formData.email}</p>
              </div>

              <button className="btn btn-outline" onClick={resetForm}>
                <RefreshCw size={14} /> Submit Another Shop
              </button>
            </div>
          ) : (
            <>
              <h2>Register Your Business</h2>
              <p>Fill out the details below. Our verification team will review your submission and contact you shortly.</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Shop Name</label>
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      placeholder="e.g. Gupta Provisions"
                      className="form-input"
                    />
                    {errors.shopName && <span className="form-error">{errors.shopName}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Owner Name</label>
                    <input
                      type="text"
                      name="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Gupta"
                      className="form-input"
                    />
                    {errors.ownerName && <span className="form-error">{errors.ownerName}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Shop Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{ height: '43px', backgroundColor: 'var(--color-white)' }}
                    >
                      <option value="">Select Category...</option>
                      <option value="Grocery">Grocery & Staples</option>
                      <option value="Bakery">Bakery & Sweets</option>
                      <option value="Pharmacy">Pharmacy & Care</option>
                      <option value="Boutique">Boutique & Crafts</option>
                      <option value="Stationery">Books & Stationery</option>
                      <option value="Produce">Fresh Fruits & Veg</option>
                      <option value="Other">Other Retail Shop</option>
                    </select>
                    {errors.category && <span className="form-error">{errors.category}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Neighborhood / Area</label>
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="form-input"
                      style={{ height: '43px', backgroundColor: 'var(--color-white)' }}
                    >
                      <option value="">Select Area...</option>
                      <option value="Indiranagar">Indiranagar</option>
                      <option value="Koramangala">Koramangala</option>
                      <option value="HSR Layout">HSR Layout</option>
                      <option value="Jayanagar">Jayanagar</option>
                      <option value="Whitefield">Whitefield</option>
                      <option value="Malleshwaram">Malleshwaram</option>
                    </select>
                    {errors.area && <span className="form-error">{errors.area}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Complete Shop Address</label>
                  <textarea
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter complete store address, including building number, cross street, landmarks"
                    className="form-input"
                    style={{ resize: 'none' }}
                  />
                  {errors.address && <span className="form-error">{errors.address}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className="form-input"
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. owner@shop.com"
                      className="form-input"
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Shopfront Image (Optional)</label>
                  <div className="file-upload-dropzone" onClick={() => document.getElementById('file-upload-input').click()}>
                    <Upload className="file-upload-icon" size={24} />
                    <span className="file-upload-text">
                      {uploadedFileName ? (
                        <>Selected: <strong>{uploadedFileName}</strong></>
                      ) : (
                        <>Drag & drop file or <strong>browse computer</strong></>
                      )}
                    </span>
                    <input
                      id="file-upload-input"
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', marginTop: '1rem', height: '48px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="spinner" size={16} />
                      Registering Your Shop...
                    </>
                  ) : 'Submit Registration Application'}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Timeline Sidebar */}
        <aside className="timeline-card reveal" style={{ animationDelay: '0.2s' }}>
          <h2>Onboarding Process</h2>
          <div className="timeline-steps">
            <div className="timeline-step active">
              <div className="timeline-step-badge"></div>
              <div className="timeline-step-content">
                <h3>1. Online Application</h3>
                <p>Submit your shop details and contact coordinates via our simple online web form.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-step-badge"></div>
              <div className="timeline-step-content">
                <h3>2. Address Verification</h3>
                <p>A Grabb onboarding agent visits your shop location to verify license certificates and set up details.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-step-badge"></div>
              <div className="timeline-step-content">
                <h3>3. Product Upload</h3>
                <p>Our team lists your products, configures inventory pricing, and uploads high-resolution images.</p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="timeline-step-badge"></div>
              <div className="timeline-step-content">
                <h3>4. Go Live & Sell</h3>
                <p>Your shop goes live on the discovery map. Local customers order, and Grabb riders handle the logistics.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="vendor-hero text-center reveal" style={{ marginBottom: '2.5rem' }}>
            <span className="badge badge-primary">Merchant Support</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about partnering with Grabb.</p>
          </div>

          <div className="accordion-container">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`accordion-item ${openFaq === idx ? 'open' : ''}`}
              >
                <div className="accordion-header" onClick={() => toggleFaq(idx)}>
                  <h3>{faq.q}</h3>
                  <ChevronDown className="accordion-arrow" size={18} />
                </div>
                <div className="accordion-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
