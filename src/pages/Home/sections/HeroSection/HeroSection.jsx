import Button from '../../../../components/Button/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-logo">
              <img src="/logo.svg" alt="Fliplyn Logo" />
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#product">Product</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
            <Button variant="primary" className="nav-cta">Request Demo</Button>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">
                Reimagine Self-Service with <span className="text-primary">Fliplyn.</span>
              </h1>
              <p className="hero-subtitle">
                Intelligent Kiosk & Digital Signage Solutions.
              </p>
              <div className="hero-buttons">
                <Button variant="primary">Request Demo</Button>
                <Button variant="secondary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 8L15 12L10 16V8Z" fill="currentColor"/>
                  </svg>
                  Watch Video
                </Button>
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