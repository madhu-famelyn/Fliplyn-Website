import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import './IndustriesSection.css';

const IndustriesSection = () => {
  const industriesRow1 = [
    { name: 'Retail Stores', icon: '/icons/industries/Retail-stores.png' },
    { name: 'Cafeterias', icon: '/icons/industries/Cafeterias.png' },
    { name: 'Corporate Offices', icon: '/icons/industries/Corporate-offices.png' },
    { name: 'Hospitals', icon: '/icons/industries/Hospitals.png' }
  ];

  const industriesRow2 = [
    { name: 'Food Courts', icon: '/icons/industries/Food-courts.png' },
    { name: 'Super Markets', icon: '/icons/industries/Super-markets.png' },
    { name: 'QRS Restaurants', icon: '/icons/industries/QRS-restaurants.png' },
    { name: 'Wallet & Payment', icon: '/icons/industries/Wallet.png' }
  ];

  return (
    <section className="industries-section">
      <div className="container">
        <SectionHeader 
          title="Trusted by Teams Across Industries"
          subtitle="Businesses across retail, hospitality, corporate campuses, and healthcare rely on Fliplyn to streamline operations and deliver better customer experiences."
        />

        <div className="industries-grid">
          <div className="industries-row">
            {industriesRow1.map((industry, index) => (
              <div key={index} className="industry-item">
                <div className="industry-icon">
                  <img src={industry.icon} alt={industry.name} />
                </div>
                <p className="industry-name">{industry.name}</p>
              </div>
            ))}
          </div>
          <div className="industries-row">
            {industriesRow2.map((industry, index) => (
              <div key={index} className="industry-item">
                <div className="industry-icon">
                  <img src={industry.icon} alt={industry.name} />
                </div>
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