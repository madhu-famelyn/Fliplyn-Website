import { useState } from 'react';
import CTAButton from '../../../../components/CTAButton/CTAButton';
import './HeroSection.css';

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="hero-section">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <img src="/logo.svg" alt="Fliplyn Logo" />
              <span className="nav-logo-text">Fliplyn</span>
            </div>
            
            <button 
              className="hamburger-menu" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={isMobileMenuOpen ? 'active' : ''}></span>
              <span className={isMobileMenuOpen ? 'active' : ''}></span>
              <span className={isMobileMenuOpen ? 'active' : ''}></span>
            </button>

            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <ul className="nav-links">
                <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                <li><a href="#product" onClick={() => setIsMobileMenuOpen(false)}>Product</a></li>
                <li><a href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>Solutions</a></li>
                <li><a href="#resources" onClick={() => setIsMobileMenuOpen(false)}>Resources</a></li>
              </ul>
              <CTAButton variant="primary" className="nav-cta">Request Demo</CTAButton>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-text-card">
                <h1 className="hero-title">
                  Reimagine<br />Self-Service<br />with <span className="text-primary">Fliplyn.</span>
                </h1>
                <p className="hero-subtitle">
                  Intelligent Kiosk & Digital Signage Solutions.
                </p>
              </div>
              <div className="hero-buttons">
                <CTAButton variant="primary">Request Demo</CTAButton>
                <CTAButton variant="secondary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 8L15 12L10 16V8Z" fill="currentColor"/>
                  </svg>
                  Watch Video
                </CTAButton>
              </div>
            </div>
            <div className="hero-image">
              <img src="/kiosk-device.png" alt="Fliplyn Self-Service Kiosk" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;