import { useState } from "react";
import CTAButton from "../../../../components/CTAButton/CTAButton";
import "./HeroSection.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src="/logo.svg" alt="Fliplyn Logo" />
          </div>

          <button
            className="hamburger-menu"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={isMobileMenuOpen ? "active" : ""}></span>
            <span className={isMobileMenuOpen ? "active" : ""}></span>
            <span className={isMobileMenuOpen ? "active" : ""}></span>
          </button>

          <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#product" onClick={() => setIsMobileMenuOpen(false)}>
                  Product
                </a>
              </li>
              <li>
                <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)}>
                  Solutions
                </a>
              </li>
              <li>
                <a href="#resources" onClick={() => setIsMobileMenuOpen(false)}>
                  Resources
                </a>
              </li>
            </ul>

            <CTAButton variant="primary" className="nav-cta">
              Request Demo
            </CTAButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
