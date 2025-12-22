import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import IndustryCard from '../../../../components/IndustryCard/IndustryCard';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const features = [
    {
      icon: '/icons/product-showcase/select-friendly.png',
      title: 'Select-Friendly',
      description: 'Fast, intuitive ordering designed for high-traffic environments.'
    },
    {
      icon: '/icons/product-showcase/customizable.png',
      title: 'Customizable Features',
      description: 'Configure menus, workflows, branding, and access controls with ease.'
    },
    {
      icon: '/icons/product-showcase/applied-features.png',
      title: 'Applied Features',
      description: 'Collect insights, track usage, and generate reports for smarter decision-making.'
    },
    {
      icon: '/icons/product-showcase/seamless-payments.png',
      title: 'Seamless Payments',
      description: 'Accept UPI, cards, wallets, and cash with secure, real-time processing.'
    }
  ];

  return (
    <section className="product-showcase">
      <div className="container">
        <SectionHeader 
          title="Product Showcase" 
          subtitle="See Fliplyn in action"
        />
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <IndustryCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;