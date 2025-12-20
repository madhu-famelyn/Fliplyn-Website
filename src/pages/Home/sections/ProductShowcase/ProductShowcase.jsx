import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const features = [
    {
      icon: '/icons/select-friendly.png',
      title: 'Select-Friendly',
      description: 'Fast, intuitive ordering designed for high-traffic environments.'
    },
    {
      icon: '/icons/customizable.png',
      title: 'Customizable Features',
      description: 'Configure menus, workflows, branding, and access controls with ease.'
    },
    {
      icon: '/icons/applied-features.png',
      title: 'Applied Features',
      description: 'Collect insights, track usage, and generate reports for smarter decision-making.'
    },
    {
      icon: '/icons/seamless-payments.png',
      title: 'Seamless Payments',
      description: 'Accept UPI, cards, wallets, and cash with secure, real-time processing.'
    }
  ];

  return (
    <section className="product-showcase">
      <div className="container">
        <SectionHeading 
          title="Product Showcase" 
          subtitle="See Fliplyn in action"
        />
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;