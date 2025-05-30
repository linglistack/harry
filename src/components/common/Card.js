import React from 'react';
import './Card.css';

const Card = ({ title, image, content, link, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {content && <p className="card-text">{content}</p>}
        {link && (
          <a href={link.url} className="card-link">
            {link.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card; 