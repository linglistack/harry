import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle; 