import './CTAButton.css';

const CTAButton = ({ children, variant = 'primary', onClick, className = '' }) => {
  return (
    <button 
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CTAButton;