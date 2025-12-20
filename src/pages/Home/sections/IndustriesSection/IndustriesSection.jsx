import './IndustriesSection.css';

const IndustriesSection = () => {
  const industriesRow1 = [
    { name: 'Retail Stores', icon: '🏪' },
    { name: 'Cafeterias', icon: '☕' },
    { name: 'Corporate Offices', icon: '🏢' },
    { name: 'Hospitals', icon: '🏥' }
  ];

  const industriesRow2 = [
    { name: 'Food Courts', icon: '🍽️' },
    { name: 'Super Markets', icon: '🛒' },
    { name: 'QRS Restaurants', icon: '🍴' },
    { name: 'Wallet & Payment', icon: '💳' }
  ];

  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="industries-title text-primary">Trusted by Teams Across Industries</h2>
        <p className="industries-description">
          Businesses across retail, hospitality, corporate campuses, and healthcare rely on 
          Fliplyn to streamline operations and deliver better customer experiences.
        </p>

        <div className="industries-grid">
          <div className="industries-row">
            {industriesRow1.map((industry, index) => (
              <div key={index} className="industry-item">
                <div className="industry-icon">{industry.icon}</div>
                <p className="industry-name">{industry.name}</p>
              </div>
            ))}
          </div>
          <div className="industries-row">
            {industriesRow2.map((industry, index) => (
              <div key={index} className="industry-item">
                <div className="industry-icon">{industry.icon}</div>
                <p className="industry-name">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;