import Card from '../../../../components/IndustryCard/IndustryCard';
import './AboutSection.css';

const AboutSection = () => {
  const industries = [
    {
      icon: '/icons/about/retail.png',
      title: 'Retail',
      description: 'Streamline customer checkout and improve service speed.'
    },
    {
      icon: '/icons/about/hospitality.png',
      title: 'Hospitality',
      description: 'Enhance guest experiences with smooth self-service.'
    },
    {
      icon: '/icons/about/corporate.png',
      title: 'Corporate',
      description: 'Optimize workplace dining and internal service flows.'
    },
    {
      icon: '/icons/about/healthcare.png',
      title: 'Healthcare',
      description: 'Enable fast, contactless service for patients and visitors.'
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-illustration">
            <img src="/icons/about/about-fliplyn.png" alt="About Fliplyn Illustration" className='about-image' />
          </div>

          <div className="about-header">
            <h2 className="about-title text-primary">About</h2>
            <p className="about-description">
              Fliplyn delivers intelligent self-service and display solutions that help businesses 
              streamline operations, reduce wait times, and enhance customer experiences across 
              multiple environments. Our platform brings speed, clarity, and convenience to everyday 
              interactions.
            </p>
          </div>
        </div>

        <div className="industry-cards">
          {industries.map((industry, index) => (
            <Card
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;