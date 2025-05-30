import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, type = 'primary', onClick, href, to, className = '' }) => {
  const classes = `btn btn-${type} ${className}`;
  
  if (to) {
    // Internal link using React Router
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  } else if (href) {
    // External link
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  // Regular button
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 