import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import IndustryCard from '../../../../components/IndustryCard/IndustryCard';
import './AdvancedCapabilities.css';

const AdvancedCapabilities = () => {
  const capabilities = [
    {
      icon: '/icons/advanced-capabilities/analytics.png',
      title: 'Real-Time Analytics',
      description: 'Track user interactions and sales data.'
    },
    {
      icon: '/icons/advanced-capabilities/multi-stall.png',
      title: 'Multi-Stall Management',
      description: 'Control multiple kiosks from one central hub.'
    },
    {
      icon: '/icons/advanced-capabilities/reporting.png',
      title: 'Automated Reporting',
      description: 'Generate detailed performance reports.'
    },
    {
      icon: '/icons/advanced-capabilities/wallet-payment.png',
      title: 'Wallet & Payment',
      description: 'Accept cashless payment methods.'
    }
  ];

  return (
    <section className="advanced-capabilities">
      <div className="container">
        <SectionHeader title="Advanced Capabilities" />
        
        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <IndustryCard
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedCapabilities;