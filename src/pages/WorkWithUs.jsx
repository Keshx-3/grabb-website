import React, { useState } from 'react';
import './InfoPage.css';

const openRoles = [
  {
    dept: 'Engineering',
    roles: [
      { title: 'Senior Full-Stack Engineer', type: 'Full-time', location: 'Remote / Hybrid' },
      { title: 'Mobile Developer (React Native)', type: 'Full-time', location: 'Remote' },
      { title: 'DevOps & Infrastructure Engineer', type: 'Full-time', location: 'Hybrid' },
    ],
  },
  {
    dept: 'Operations',
    roles: [
      { title: 'City Operations Manager', type: 'Full-time', location: 'On-site' },
      { title: 'Rider Onboarding Coordinator', type: 'Full-time', location: 'On-site' },
    ],
  },
  {
    dept: 'Marketing & Growth',
    roles: [
      { title: 'Growth Marketing Manager', type: 'Full-time', location: 'Remote / Hybrid' },
      { title: 'Content Creator & Social Media', type: 'Part-time', location: 'Remote' },
    ],
  },
  {
    dept: 'Customer Experience',
    roles: [
      { title: 'Customer Success Associate', type: 'Full-time', location: 'Remote' },
      { title: 'Merchant Relations Specialist', type: 'Full-time', location: 'Hybrid' },
    ],
  },
];

const perks = [
  { icon: '💰', label: 'Competitive Pay', desc: 'Market-leading salaries with performance bonuses and equity options.' },
  { icon: '🏡', label: 'Flexible Work', desc: 'Remote-first culture. Work from anywhere that makes you productive.' },
  { icon: '📚', label: 'Learning Budget', desc: 'AED 5,000 annual learning budget for courses, books, and conferences.' },
  { icon: '🏋️', label: 'Wellness Allowance', desc: 'Monthly wellness stipend covering gym, mental health, and more.' },
  { icon: '✈️', label: 'Team Retreats', desc: 'Annual company-wide retreats where the whole team connects in person.' },
  { icon: '🍕', label: 'Free Grabb Credits', desc: 'Monthly Grabb credits so you can enjoy what we build every day.' },
];

export default function WorkWithUs() {
  const [openDept, setOpenDept] = useState(null);

  return (
    <>      <div className="info-page">

        {/* Hero */}
        <section className="info-hero">
          <h1 className="info-hero-title">Build the future of<br /><span className="gradient-text">local commerce.</span></h1>
          <p className="info-hero-subtitle">
            We're a team of builders, dreamers, and doers who believe local businesses deserve world-class technology. Come build it with us.
          </p>
          <a href="#open-roles" className="btn btn-primary">See Open Roles</a>
        </section>

        {/* Culture */}
        <section className="info-section info-section-alt">
          <div className="container">
            <div className="info-two-col">
              <div className="info-text-block">
                <span className="section-subtitle">Life at Grabb</span>
                <h2>Fast-moving, mission-driven, deeply human</h2>
                <p>
                  We're a startup, which means your work ships fast, your ideas matter, and your impact is visible from day one. We don't have layers of bureaucracy. We have small, autonomous teams that move with purpose.
                </p>
                <p>
                  We invest in our people as much as we invest in our product. We're building a company where everyone, from engineers to ops teams, feels ownership over what they're creating.
                </p>
              </div>
              <div className="info-visual-block">
                <div className="work-culture-tags">
                  {['Ownership', 'Transparency', 'Speed', 'Empathy', 'Impact', 'Inclusion', 'Growth', 'Fun'].map(tag => (
                    <span key={tag} className="culture-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="info-section">
          <div className="container">
            <div className="info-section-header">
              <span className="section-subtitle">Why Grabb</span>
              <h2>Perks & Benefits</h2>
              <p>We take care of our team so our team can take care of the world.</p>
            </div>
            <div className="info-values-grid">
              {perks.map(p => (
                <div key={p.label} className="info-value-card">
                  <div className="value-icon">{p.icon}</div>
                  <h3>{p.label}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="info-section info-section-alt" id="open-roles">
          <div className="container">
            <div className="info-section-header">
              <span className="section-subtitle">Join Our Team</span>
              <h2>Open Roles</h2>
              <p>We're hiring across multiple functions. Find your fit below.</p>
            </div>
            <div className="roles-accordion">
              {openRoles.map((dept) => (
                <div key={dept.dept} className={`role-dept ${openDept === dept.dept ? 'open' : ''}`}>
                  <button
                    className="role-dept-header"
                    onClick={() => setOpenDept(openDept === dept.dept ? null : dept.dept)}
                  >
                    <span>{dept.dept}</span>
                    <span className="role-dept-count">{dept.roles.length} roles</span>
                    <span className="role-dept-chevron">{openDept === dept.dept ? '▲' : '▼'}</span>
                  </button>
                  {openDept === dept.dept && (
                    <div className="role-list">
                      {dept.roles.map(role => (
                        <div key={role.title} className="role-item">
                          <div className="role-info">
                            <div className="role-title">{role.title}</div>
                            <div className="role-meta">
                              <span className="role-tag">{role.type}</span>
                              <span className="role-tag">{role.location}</span>
                            </div>
                          </div>
                          <a href="mailto:careers@grabb.app" className="btn btn-outline role-apply-btn">Apply</a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="roles-general-apply">
              <p>Don't see your role? We love hearing from talented people.</p>
              <a href="mailto:careers@grabb.app" className="btn btn-primary">Send a General Application</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
