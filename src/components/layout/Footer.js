import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>HARRY POTTER</h2>
            <p>The Wizarding World</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/characters">Characters</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Explore</h3>
              <ul>
                <li><Link to="/watch">Watch Now</Link></li>
                <li><Link to="/game">Game</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Connect</h3>
              <ul>
                <li><a href="https://www.facebook.com/harrypottermovie" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com/harrypotterfilm" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com/harrypotterfilm" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.youtube.com/user/harrypotter" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Harry Potter. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="https://www.warnerbros.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Use</a>
            <a href="https://www.warnerbros.com/privacy-center" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://www.warnerbros.com/privacy-center#cookies" target="_blank" rel="noopener noreferrer">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 