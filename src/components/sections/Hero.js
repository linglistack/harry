import React from 'react';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1>Welcome to the Wizarding World</h1>
            <p>Discover the magic of Harry Potter and explore the enchanting universe created by J.K. Rowling.</p>
            <div className="hero-buttons">
              <Button to="/about" className="learn-more-btn">Learn More</Button>
              <Button to="/watch" type="secondary" className="watch-now-btn">Watch Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero; 