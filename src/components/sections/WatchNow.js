import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import './WatchNow.css';

const WatchNow = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  
  const videos = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      url: "https://www.youtube.com/embed/VyHV0BRtdxo",
      thumbnail: "https://img.youtube.com/vi/VyHV0BRtdxo/maxresdefault.jpg",
      releaseInfo: "AVAILABLE NOW"
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      url: "https://www.youtube.com/embed/1bq0qff4iF8",
      thumbnail: "https://img.youtube.com/vi/1bq0qff4iF8/maxresdefault.jpg",
      releaseInfo: "AVAILABLE NOW"
    },
    {
      id: 3,
      title: "Harry Potter and the Prisoner of Azkaban",
      url: "https://www.youtube.com/embed/lAxgztbYDbs",
      thumbnail: "https://img.youtube.com/vi/lAxgztbYDbs/maxresdefault.jpg",
      releaseInfo: "AVAILABLE NOW"
    },
    {
      id: 4,
      title: "Harry Potter 20th Anniversary: Return to Hogwarts",
      url: "https://www.youtube.com/embed/fFGS4zZWGoA",
      thumbnail: "https://img.youtube.com/vi/fFGS4zZWGoA/maxresdefault.jpg",
      releaseInfo: "STREAMING NOW"
    }
  ];

  const streamingServices = [
    {
      id: 1,
      name: 'HBO Max',
      logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      url: 'https://www.hbomax.com'
    },
    {
      id: 2,
      name: 'Amazon Prime',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      url: 'https://www.amazon.com/Prime-Video'
    },
    {
      id: 3,
      name: 'iTunes',
      logo: 'https://images.unsplash.com/photo-1580247817119-c2d4a42837b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80',
      url: 'https://www.apple.com/itunes'
    },
    {
      id: 4,
      name: 'Google Play',
      logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      url: 'https://play.google.com/store/movies'
    }
  ];

  return (
    <section className="watch-now">
      <div className="container">
     
        
        <div className="compact-video-container">
          <div className="main-video">
            
            <div className="trailer-wrapper">
              <iframe 
                title={videos[activeVideo].title}
                src={videos[activeVideo].url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="video-thumbnails-sidebar">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className={`sidebar-thumbnail ${index === activeVideo ? 'active' : ''}`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="thumbnail-image">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
                <div className="thumbnail-info">
                  <h3>{video.title}</h3>
                  <span className="release-tag">{video.releaseInfo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="watch-cta">
          <h3>Experience the Magic Today</h3>
          <p>Get all eight Harry Potter films in one complete collection.</p>
          <Button href="https://www.warnerbros.com/movies/harry-potter-complete-8-film-collection" type="primary">
            Get The Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WatchNow; 