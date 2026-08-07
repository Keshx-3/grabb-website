import React from 'react';
import './InfoPage.css';

export default function Security() {
  return (
    <>      <div className="info-page">

        <section className="info-hero info-hero-sm">
          <h1 className="info-hero-title">Help keep Grabb safe<br /><span className="gradient-text">for everyone.</span></h1>
          <p className="info-hero-subtitle">
            We take security seriously at Grabb. If you've found a vulnerability, we'd like to hear from you, responsibly.
          </p>
        </section>

        <section className="info-section">
          <div className="container security-layout">

            {/* Main Content */}
            <div className="security-main">

              <div className="security-card">
                <div className="security-card-icon">🛡️</div>
                <h2>Responsible Disclosure</h2>
                <p>
                  If you are a security researcher or expert and believe you've identified a security-related issue with Grabb's website or apps, we appreciate you disclosing it to us responsibly.
                </p>
                <p>
                  Our team is committed to addressing all security issues in a responsible and timely manner. We ask the security community to give us the opportunity to resolve issues before disclosing them publicly. We aim to acknowledge reports within <strong>48 hours</strong> and resolve critical issues within <strong>30 days</strong>.
                </p>
              </div>

              <div className="security-card">
                <div className="security-card-icon">🔍</div>
                <h2>What We're Looking For</h2>
                <p>We welcome reports on, but not limited to, the following vulnerability types:</p>
                <ul className="security-list">
                  <li>Authentication and session management flaws</li>
                  <li>Cross-Site Scripting (XSS) vulnerabilities</li>
                  <li>SQL injection and other injection attacks</li>
                  <li>Insecure direct object references</li>
                  <li>Sensitive data exposure (PII, payment data)</li>
                  <li>Server-side request forgery (SSRF)</li>
                  <li>Privilege escalation vulnerabilities</li>
                  <li>API security flaws and broken access control</li>
                  <li>Cryptographic weaknesses</li>
                </ul>
              </div>

              <div className="security-card">
                <div className="security-card-icon">🚫</div>
                <h2>Out of Scope</h2>
                <p>The following are considered out of scope for our security programme:</p>
                <ul className="security-list">
                  <li>Physical security of our infrastructure</li>
                  <li>Social engineering attacks against our employees</li>
                  <li>Denial of Service (DoS/DDoS) attacks</li>
                  <li>Spam or phishing campaigns</li>
                  <li>Issues affecting outdated browser versions</li>
                  <li>Vulnerabilities in third-party services we use</li>
                  <li>Low-severity issues with no realistic attack vector</li>
                </ul>
              </div>

              <div className="security-card">
                <div className="security-card-icon">📋</div>
                <h2>How to Submit a Report</h2>
                <p>
                  Please submit a bug report along with a <strong>detailed description of the issue</strong> and <strong>clear steps to reproduce it</strong>. Include any proof-of-concept code, screenshots, or video recordings that help illustrate the vulnerability.
                </p>
                <p>
                  We trust the security community to make every effort to protect our users' data and privacy. Please do not exploit any vulnerability beyond what is necessary to demonstrate it.
                </p>
                <div className="security-report-box">
                  <p><strong>📧 Security Contact:</strong></p>
                  <a href="mailto:security@grabb.app" className="security-email-link">security@grabb.app</a>
                  <p className="security-pgp-note">For sensitive reports, please indicate if you require our PGP key for encrypted communication.</p>
                </div>
                <a href="mailto:security@grabb.app?subject=Security%20Vulnerability%20Report&body=Description%20of%20the%20issue%3A%0A%0ASteps%20to%20reproduce%3A%0A%0ASeverity%20assessment%3A%0A%0AProof%20of%20concept%20(if%20any)%3A" className="btn btn-primary security-report-btn" id="submit-bug-report-btn">
                  🐛 Submit a Bug Report
                </a>
              </div>

              <div className="security-card">
                <div className="security-card-icon">🏆</div>
                <h2>Researcher Recognition</h2>
                <p>
                  We're grateful to the security researchers who help keep Grabb safe. Depending on the severity and impact of the issue, we may offer:
                </p>
                <div className="security-rewards">
                  <div className="security-reward-item">
                    <div className="reward-badge critical">Critical</div>
                    <div className="reward-detail">Significant impact to user data or platform integrity. Priority resolution + Hall of Fame recognition.</div>
                  </div>
                  <div className="security-reward-item">
                    <div className="reward-badge high">High</div>
                    <div className="reward-detail">Meaningful vulnerability with clear exploit path. Hall of Fame recognition.</div>
                  </div>
                  <div className="security-reward-item">
                    <div className="reward-badge medium">Medium</div>
                    <div className="reward-detail">Limited impact. Public acknowledgement where appropriate.</div>
                  </div>
                  <div className="security-reward-item">
                    <div className="reward-badge low">Low / Info</div>
                    <div className="reward-detail">Best efforts resolution. Thank you noted internally.</div>
                  </div>
                </div>
                <p className="security-note">
                  <strong>Note:</strong> We do not currently offer monetary rewards. We are working towards a formal bug bounty programme.
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="security-sidebar">
              <div className="security-sidebar-card">
                <h3>🔐 Our Security Commitments</h3>
                <ul>
                  <li>Acknowledge your report within 48 hours</li>
                  <li>Confirm the vulnerability within 7 days</li>
                  <li>Provide regular updates on resolution progress</li>
                  <li>Notify you when the issue is resolved</li>
                  <li>Credit you publicly (with your permission)</li>
                </ul>
              </div>
              <div className="security-sidebar-card">
                <h3>📌 Quick Links</h3>
                <ul>
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/terms-of-service">Terms of Service</a></li>
                  <li><a href="/contact-us">Contact Support</a></li>
                </ul>
              </div>
              <div className="security-sidebar-card security-quick-report">
                <h3>Found a bug?</h3>
                <p>Report it directly to our security team.</p>
                <a href="mailto:security@grabb.app?subject=Security%20Vulnerability%20Report" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Email Security Team
                </a>
              </div>
            </aside>

          </div>
        </section>

      </div>
    </>
  );
}
