import React, { useState } from 'react';
import './InfoPage.css';

const faqs = [
  { q: 'How do I track my order?', a: 'Open the Grabb app, go to "My Orders", and tap on your active order to see real-time tracking.' },
  { q: 'Can I change my delivery address after placing an order?', a: 'Address changes can be made within 2 minutes of placing your order. Contact our support team immediately via the in-app chat.' },
  { q: 'How do I become a merchant on Grabb?', a: 'Visit the "Partner With Us" page under "For Merchants" in the footer, or email us at merchants@grabb.app.' },
  { q: 'How do I sign up as a rider?', a: 'Go to the "Partner With Us" page under "For Riders" in the footer and complete your rider application.' },
  { q: 'Is there a subscription fee for merchants?', a: 'Grabb operates on a commission model, no monthly fees. We only earn when you earn.' },
  { q: 'How are refunds processed?', a: 'Refunds are processed within 3–5 business days back to your original payment method. Contact support to initiate a refund.' },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [openFaq, setOpenFaq] = useState(null);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email is required.';
    if (!formData.subject.trim()) e.subject = 'Subject is required.';
    if (!formData.message.trim() || formData.message.length < 20) e.message = 'Please write at least 20 characters.';
    return e;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <>      <div className="info-page">

        <section className="info-hero info-hero-sm">
          <h1 className="info-hero-title">We'd love to<br /><span className="gradient-text">hear from you.</span></h1>
          <p className="info-hero-subtitle">Have a question, feedback, or just want to say hi? Our team is ready to help.</p>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="contact-layout">

              {/* Contact Cards */}
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-card-icon">📧</div>
                  <h3>Email Us</h3>
                  <p>For general enquiries</p>
                  <a href="mailto:hello@grabb.app" className="contact-link">hello@grabb.app</a>
                </div>
                <div className="contact-card">
                  <div className="contact-card-icon">🛵</div>
                  <h3>Rider Support</h3>
                  <p>Issues with your rider account</p>
                  <a href="mailto:riders@grabb.app" className="contact-link">riders@grabb.app</a>
                </div>
                <div className="contact-card">
                  <div className="contact-card-icon">🏪</div>
                  <h3>Merchant Support</h3>
                  <p>Issues with your merchant account</p>
                  <a href="mailto:merchants@grabb.app" className="contact-link">merchants@grabb.app</a>
                </div>
                <div className="contact-card">
                  <div className="contact-card-icon">🔒</div>
                  <h3>Security</h3>
                  <p>Report a vulnerability</p>
                  <a href="mailto:security@grabb.app" className="contact-link">security@grabb.app</a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-wrapper">
                {submitted ? (
                  <div className="fraud-success">
                    <div className="fraud-success-icon">🎉</div>
                    <h2>Message Sent!</h2>
                    <p>Thanks for reaching out. Our team will get back to you within 1–2 business days.</p>
                    <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}>
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form className="fraud-form" onSubmit={handleSubmit} noValidate>
                    <h2 className="fraud-form-title">Send Us a Message</h2>
                    <div className="form-group">
                      <label htmlFor="contact-name">Your Name</label>
                      <input id="contact-name" type="text" name="name" placeholder="Your full name" value={formData.name} onChange={handleChange} className={errors.name ? 'input-error' : ''} />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email Address</label>
                      <input id="contact-email" type="email" name="email" placeholder="Your email address" value={formData.email} onChange={handleChange} className={errors.email ? 'input-error' : ''} />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-subject">Subject</label>
                      <input id="contact-subject" type="text" name="subject" placeholder="How can we help?" value={formData.subject} onChange={handleChange} className={errors.subject ? 'input-error' : ''} />
                      {errors.subject && <span className="field-error">{errors.subject}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-message">Message</label>
                      <textarea id="contact-message" name="message" rows={5} placeholder="Describe your query in detail..." value={formData.message} onChange={handleChange} className={errors.message ? 'input-error' : ''} />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>
                    <button type="submit" id="contact-submit-btn" className="btn btn-primary fraud-submit-btn">Send Message</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="info-section info-section-alt">
          <div className="container">
            <div className="info-section-header">
              <span className="section-subtitle">FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="roles-accordion">
              {faqs.map((faq, i) => (
                <div key={i} className={`role-dept ${openFaq === i ? 'open' : ''}`}>
                  <button className="role-dept-header" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{faq.q}</span>
                    <span className="role-dept-chevron">{openFaq === i ? '▲' : '▼'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="role-list">
                      <p style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
