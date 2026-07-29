import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, RefreshCw, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: 'General Enquiry',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="container contact-hero reveal">
        <h1>We'd love to hear from you</h1>
        <p>
          Have questions about ordering, onboarding your store, or delivery options? Reach out and we'll get back to you shortly.
        </p>
      </section>

      {/* Grid Layout */}
      <section className="container contact-grid">
        {/* Info Sidebar */}
        <div className="contact-details-col reveal">
          <div className="contact-detail-card">
            <div className="benefit-icon-wrapper">
              <MapPin size={22} />
            </div>
            <div>
              <h3>Grabb HQ</h3>
              <p>Indiranagar Double Rd, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560038</p>
            </div>
          </div>

          <div className="contact-detail-card">
            <div className="benefit-icon-wrapper">
              <Phone size={22} />
            </div>
            <div>
              <h3>Phone Counter</h3>
              <p>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Mon - Sat: 9:00 AM to 8:00 PM</p>
            </div>
          </div>

          <div className="contact-detail-card">
            <div className="benefit-icon-wrapper">
              <Mail size={22} />
            </div>
            <div>
              <h3>Support Mail</h3>
              <p>
                <a href="mailto:support@grabb.local">support@grabb.local</a>
              </p>
              <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>Responses within 12 hours</p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="contact-form-card reveal" style={{ animationDelay: '0.2s' }}>
          {isSubmitted ? (
            <div className="success-overlay" style={{ padding: '2rem 0' }}>
              <div className="benefit-icon-wrapper" style={{ backgroundColor: 'var(--color-success-bg)', color: 'var(--color-success)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem', display: 'inline-flex' }}>
                <CheckCircle size={48} />
              </div>
              <h2>Message Dispatched!</h2>
              <p style={{ maxWidth: '400px', margin: '0 auto var(--spacing-md) auto' }}>
                Thank you for contacting Grabb. We have registered your inquiry and a support representative will reach out to you at <strong>{formData.email}</strong> shortly.
              </p>
              <button className="btn btn-outline" onClick={resetForm}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2>Send Us a Message</h2>
              <p>Please use the form below to outline your requirements, and we'll route it to the appropriate coordinator.</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Suresh Kumar"
                    className="form-input"
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. suresh@example.com"
                    className="form-input"
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Subject Category</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    style={{ height: '43px', backgroundColor: 'var(--color-white)' }}
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Vendor Support">Onboard / Vendor Support</option>
                    <option value="Delivery Partner">Become a Delivery Partner</option>
                    <option value="Press & Investment">Press & Investment Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Detail your request or query..."
                    className="form-input"
                    style={{ resize: 'none' }}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
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
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
