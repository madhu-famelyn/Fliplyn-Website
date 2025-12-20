import './Card.css';

const Card = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;