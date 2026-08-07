import React, { useState } from 'react';
import './InfoPage.css';

export default function ReportFraud() {
  const [formData, setFormData] = useState({
    yourName: '',
    yourEmail: '',
    yourMobile: '',
    reportedName: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!formData.yourName.trim()) e.yourName = 'Name is required.';
    if (!formData.yourEmail.trim() || !/\S+@\S+\.\S+/.test(formData.yourEmail)) e.yourEmail = 'Valid email is required.';
    if (!formData.yourMobile.trim()) e.yourMobile = 'Mobile number is required.';
    if (!formData.reportedName.trim()) e.reportedName = 'This field is required.';
    if (!formData.city.trim()) e.city = 'City is required.';
    if (!formData.message.trim() || formData.message.length < 30) e.message = 'Please provide at least 30 characters describing the issue.';
    return e;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <>      <div className="info-page">

        <section className="info-hero info-hero-sm">
          <h1 className="info-hero-title">Report Fraud</h1>
          <p className="info-hero-subtitle">
            Help us keep Grabb safe and trustworthy for everyone in our community.
          </p>
        </section>

        <section className="info-section">
          <div className="container">
            <div className="fraud-layout">

              {/* Left Info */}
              <div className="fraud-info">
                <div className="fraud-notice-card">
                  <h3>⚠️ Important Notice</h3>
                  <p>
                    This reporting channel is used to provide an opportunity to report concerns related to <strong>suspected fraud</strong> or <strong>suspected violations of Grabb's Code of Conduct (COC)</strong>.
                  </p>
                  <p>
                    Please do <strong>not</strong> use this channel to report events or instances other than misconduct related to suspected fraud or COC violations.
                  </p>
                  <p>
                    For concerns or complaints relating to your order, please reach out to our customer care team using the chat option.
                  </p>
                </div>
                <div className="fraud-notice-card fraud-notice-info">
                  <h3>🔏 Confidentiality</h3>
                  <p>
                    Grabb expects that reports made through this channel are made in good faith and are legitimate concerns that you believe should be investigated. All reports submitted will be given careful attention and handled with strict confidentiality.
                  </p>
                </div>
                <div className="fraud-notice-card fraud-notice-info">
                  <h3>📋 What to Include</h3>
                  <ul className="fraud-checklist">
                    <li>A clear description of the suspected fraud or violation</li>
                    <li>Names or identifiers of individuals/organisations involved</li>
                    <li>Dates, times, or transaction references if available</li>
                    <li>Any supporting evidence (screenshots, receipts, etc.)</li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="fraud-form-wrapper">
                {submitted ? (
                  <div className="fraud-success">
                    <div className="fraud-success-icon">✅</div>
                    <h2>Report Submitted</h2>
                    <p>Thank you for reaching out. Our integrity team will review your report and may contact you if additional information is needed. We typically respond within 3–5 business days.</p>
                    <button className="btn btn-primary" onClick={() => { setSubmitted(false); setFormData({ yourName: '', yourEmail: '', yourMobile: '', reportedName: '', city: '', message: '' }); }}>
                      Submit Another Report
                    </button>
                  </div>
                ) : (
                  <form className="fraud-form" onSubmit={handleSubmit} noValidate>
                    <h2 className="fraud-form-title">Submit a Report</h2>

                    <div className="form-group">
                      <label htmlFor="fraud-yourName">Your Name</label>
                      <input id="fraud-yourName" type="text" name="yourName" placeholder="Enter your full name" value={formData.yourName} onChange={handleChange} className={errors.yourName ? 'input-error' : ''} />
                      {errors.yourName && <span className="field-error">{errors.yourName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="fraud-yourEmail">Your Email Address</label>
                      <input id="fraud-yourEmail" type="email" name="yourEmail" placeholder="Enter your email" value={formData.yourEmail} onChange={handleChange} className={errors.yourEmail ? 'input-error' : ''} />
                      {errors.yourEmail && <span className="field-error">{errors.yourEmail}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="fraud-yourMobile">Mobile Number</label>
                      <input id="fraud-yourMobile" type="tel" name="yourMobile" placeholder="Enter your mobile number" value={formData.yourMobile} onChange={handleChange} className={errors.yourMobile ? 'input-error' : ''} />
                      {errors.yourMobile && <span className="field-error">{errors.yourMobile}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="fraud-reportedName">Name of Person / Organisation Being Reported</label>
                      <input id="fraud-reportedName" type="text" name="reportedName" placeholder="Enter name of individual or organisation" value={formData.reportedName} onChange={handleChange} className={errors.reportedName ? 'input-error' : ''} />
                      {errors.reportedName && <span className="field-error">{errors.reportedName}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="fraud-city">City</label>
                      <input id="fraud-city" type="text" name="city" placeholder="City where the incident occurred" value={formData.city} onChange={handleChange} className={errors.city ? 'input-error' : ''} />
                      {errors.city && <span className="field-error">{errors.city}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="fraud-message">Message</label>
                      <textarea id="fraud-message" name="message" rows={6} placeholder="Describe the suspected fraud or misconduct in detail..." value={formData.message} onChange={handleChange} className={errors.message ? 'input-error' : ''} />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>

                    <button type="submit" id="fraud-submit-btn" className="btn btn-primary fraud-submit-btn">Submit Report</button>

                    <p className="fraud-disclaimer">
                      <strong>Disclaimer:</strong> Please use this form only for reporting potential frauds or COC violations. For order or other general queries, <a href="/contact-us">contact us here</a>.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
}
