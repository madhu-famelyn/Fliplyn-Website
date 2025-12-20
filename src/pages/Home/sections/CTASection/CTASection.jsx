import Button from '../../../../components/Button/Button';
import './CTASection.css';

const CTASection = () => {
  return (
    <>
      <section className="why-choose">
        <div className="container">
          <h2 className="why-choose-title text-primary">Why Choose Fliplyn?</h2>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Transform Your Business with Fliplyn?</h2>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h3 className="final-cta-title">Take the Next Step Toward Smarter Self-Service</h3>
          <Button variant="primary">Request Demo</Button>
        </div>
      </section>
    </>
  );
};

export default CTASection;