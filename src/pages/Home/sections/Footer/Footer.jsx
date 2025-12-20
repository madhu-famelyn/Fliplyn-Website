import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/logo-footer.png" alt="Fliplyn Logo" className="footer-logo" />
              <p className="footer-tagline">
                Smart Self-Service & Digital Signage Solutions.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M8 10h4v12H8V10zm2-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm6 6h4v1.5c.6-1 2-1.5 3.5-1.5 3.5 0 4.5 2 4.5 5.5V22h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5v6h-4V10z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <rect x="6" y="6" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="22" cy="10" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M26 10c0-1.5-1-2.5-2.5-2.5h-15C7 7.5 6 8.5 6 10v12c0 1.5 1 2.5 2.5 2.5h15c1.5 0 2.5-1 2.5-2.5V10zm-12 9V13l6 3-6 3z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-heading">Product</h4>
                <ul>
                  <li><a href="#kiosk">Kiosk System</a></li>
                  <li><a href="#signage">Digital Signage</a></li>
                  <li><a href="#dashboard">Multi-Stall Dashboard</a></li>
                  <li><a href="#analytics">Analytics Suite</a></li>
                  <li><a href="#payments">Wallet & Payments</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Solutions</h4>
                <ul>
                  <li><a href="#retail">Retail</a></li>
                  <li><a href="#cafeterias">Cafeterias</a></li>
                  <li><a href="#corporate">Corporate</a></li>
                  <li><a href="#hospitality">Hospitality</a></li>
                  <li><a href="#healthcare">Healthcare</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Resources</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#docs">Documentation</a></li>
                  <li><a href="#cases">Case Studies</a></li>
                  <li><a href="#partner">Partner Program</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">© 2025 Fliplyn. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;