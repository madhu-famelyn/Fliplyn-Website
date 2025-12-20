import './SectionHeading.css';

const SectionHeading = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`section-heading ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;