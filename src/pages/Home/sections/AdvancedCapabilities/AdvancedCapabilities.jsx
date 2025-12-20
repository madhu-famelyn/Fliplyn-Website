import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import './AdvancedCapabilities.css';

const AdvancedCapabilities = () => {
  const capabilities = [
    {
      icon: '/icons/analytics.png',
      title: 'Real-Time Analytics',
      description: 'Track user interactions and sales data.'
    },
    {
      icon: '/icons/multi-stall.png',
      title: 'Multi-Stall Management',
      description: 'Control multiple kiosks from one central hub.'
    },
    {
      icon: '/icons/reporting.png',
      title: 'Automated Reporting',
      description: 'Generate detailed performance reports.'
    },
    {
      icon: '/icons/wallet-payment.png',
      title: 'Wallet & Payment',
      description: 'Accept cashless payment methods.'
    }
  ];

  return (
    <section className="advanced-capabilities">
      <div className="container">
        <SectionHeading title="Advanced Capabilities" />
        
        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div key={index} className="capability-card">
              <div className="capability-icon">
                <img src={capability.icon} alt={capability.title} />
              </div>
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedCapabilities;