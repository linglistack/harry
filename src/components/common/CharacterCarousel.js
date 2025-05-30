import React, { useState } from 'react';
import './CharacterCarousel.css';

const CharacterCarousel = ({ characters }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no characters are provided, return empty component
  if (!characters || characters.length === 0) {
    return <div className="carousel-container empty">No characters available</div>;
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? characters.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === characters.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const currentCharacter = characters[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <div className="carousel-slide">
          <div className="character-image-container">
            <img 
              src={currentCharacter.image} 
              alt={currentCharacter.name} 
              className="character-image" 
            />
          </div>
          <div className="character-info">
            <h2 className="character-name">{currentCharacter.name}</h2>
            <p className="character-description">{currentCharacter.description}</p>
          </div>
        </div>
      </div>
      
      <div className="carousel-arrow left-arrow" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="carousel-arrow right-arrow" onClick={goToNext}>
        &#10095;
      </div>
      
      <div className="carousel-indicators">
        {characters.map((_, index) => (
          <div 
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCarousel; 