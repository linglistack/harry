import React from 'react';
import SectionTitle from '../common/SectionTitle';
import './StreamingPlatforms.css';

// Import images
import hboLogo from '../../assets/hbo.png';
import amazonVideoLogo from '../../assets/amazon-video.png';
import appleTVLogo from '../../assets/iTunes.png';
import vuduLogo from '../../assets/target.png';
import youtubeLogo from '../../assets/youtube.png';
import googlePlayLogo from '../../assets/google-play.png';
import amazonLogo from '../../assets/amazon.png';
import walmartLogo from '../../assets/walmart.png';
import bestBuyLogo from '../../assets/best-buy.png';
import xfinityLogo from '../../assets/comcastxfinity.png';

const StreamingPlatforms = () => {
  const digitalPlatforms = [
    { id: 1, name: 'HBO Max', logo: hboLogo, url: 'https://www.hbomax.com' },
    { id: 2, name: 'Amazon Prime Video', logo: amazonVideoLogo, url: 'https://www.amazon.com/Prime-Video' },
    { id: 3, name: 'Apple TV', logo: appleTVLogo, url: 'https://tv.apple.com' },
    { id: 4, name: 'VUDU', logo: vuduLogo, url: 'https://www.vudu.com' },
    { id: 5, name: 'YouTube', logo: youtubeLogo, url: 'https://www.youtube.com/movies' },
    { id: 6, name: 'Google Play', logo: googlePlayLogo, url: 'https://play.google.com/store/movies' },
    { id: 7, name: 'Xfinity', logo: xfinityLogo, url: 'https://www.xfinity.com' }
  ];

  const retailPlatforms = [
    { id: 1, name: 'Amazon', logo: amazonLogo, url: 'https://www.amazon.com' },
    { id: 2, name: 'Walmart', logo: walmartLogo, url: 'https://www.walmart.com' },
    { id: 3, name: 'Best Buy', logo: bestBuyLogo, url: 'https://www.bestbuy.com' },
    { id: 4, name: 'Target', logo: vuduLogo, url: 'https://www.target.com' }
  ];

  return (
    <section className="streaming-platforms">
      <div className="container">
        
        <div className="platforms-container">
          <div className="platforms-section">
            <h3 className="platforms-heading">ON DIGITAL AND 4K UHD™ BLU-RAY™</h3>
            <div className="platforms-grid">
              {digitalPlatforms.map(platform => (
                <a 
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-item"
                >
                  <img src={platform.logo} alt={platform.name} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="platforms-section">
            <h3 className="platforms-heading">ON DISC</h3>
            <div className="platforms-grid">
              {retailPlatforms.map(platform => (
                <a 
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-item"
                >
                  <img src={platform.logo} alt={platform.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamingPlatforms; 