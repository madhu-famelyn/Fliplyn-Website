import CTAButton from "../../../../components/CTAButton/CTAButton";
import Header from "./header";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Header />

      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-text-card">
                <h1 className="hero-title">
                  Reimagine Self-Service with{" "}
                  <span className="text-primary">Fliplyn.</span>
                </h1>

                <p className="hero-subtitle">
                  Intelligent Kiosk & Digital Signage Solutions.
                </p>
              </div>

              <div className="hero-buttons">
                <CTAButton variant="primary">
                  Request Demo
                </CTAButton>

                <CTAButton variant="secondary">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M10 8L15 12L10 16V8Z"
                      fill="currentColor"
                    />
                  </svg>
                  Watch Video
                </CTAButton>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/kiosk-device.png"
                alt="Fliplyn Self-Service Kiosk"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


