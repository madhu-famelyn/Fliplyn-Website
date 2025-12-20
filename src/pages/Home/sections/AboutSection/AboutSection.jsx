import Card from '../../../../components/Card/Card';
import './AboutSection.css';

const AboutSection = () => {
  const industries = [
    {
      icon: '/icons/retail.png',
      title: 'Retail',
      description: 'Streamline customer checkout and improve service speed.'
    },
    {
      icon: '/icons/hospitality.png',
      title: 'Hospitality',
      description: 'Enhance guest experiences with smooth self-service.'
    },
    {
      icon: '/icons/corporate.png',
      title: 'Corporate',
      description: 'Optimize workplace dining and internal service flows.'
    },
    {
      icon: '/icons/healthcare.png',
      title: 'Healthcare',
      description: 'Enable fast, contactless service for patients and visitors.'
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="about-title text-primary">About</h2>
            <p className="about-description">
              Fliplyn delivers intelligent self-service and display solutions that help businesses 
              streamline operations, reduce wait times, and enhance customer experiences across 
              multiple environments. Our platform brings speed, clarity, and convenience to everyday 
              interactions.
            </p>
          </div>

          <div className="about-illustration">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <path d="M80 60C80 60 90 50 100 50C110 50 120 60 120 60" stroke="#FE800A" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="95" cy="75" r="3" fill="#FE800A"/>
              <circle cx="105" cy="75" r="3" fill="#FE800A"/>
              <path d="M90 85C90 85 95 90 100 90C105 90 110 85 110 85" stroke="#FE800A" strokeWidth="2" strokeLinecap="round"/>
              <rect x="60" y="100" width="80" height="60" rx="5" stroke="#FE800A" strokeWidth="3" fill="none"/>
              <rect x="70" y="110" width="30" height="40" rx="3" fill="#FFE2BD"/>
              <circle cx="120" cy="130" r="8" stroke="#FE800A" strokeWidth="2" fill="none"/>
              <path d="M117 130L119 132L123 128" stroke="#FE800A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
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