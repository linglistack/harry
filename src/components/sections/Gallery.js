import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80',
      alt: 'Hogwarts Castle',
      caption: 'Hogwarts School of Witchcraft and Wizardry'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      alt: 'Wand',
      caption: 'The wand chooses the wizard'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1533153907586-d6a005eace2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Diagon Alley',
      caption: 'Shopping in Diagon Alley'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Hogwarts Great Hall',
      caption: 'The Great Hall during Christmas'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Quidditch',
      caption: 'Quidditch Match at Hogwarts'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2448&q=80',
      alt: 'Potions Class',
      caption: 'Professor Snape\'s Potions Class'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery">
      <div className="container">
        <SectionTitle 
          title="Gallery" 
          subtitle="Explore magical moments from the Wizarding World."
        />
        
        <div className="gallery-grid">
          {images.map(image => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-item-overlay">
                <div className="gallery-item-content">
                  <p>{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>&times;</span>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="modal-caption">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 