import React from 'react';
import SectionTitle from '../common/SectionTitle';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
      
        
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Hogwarts Castle" />
          </div>
          
          <div className="about-text">
            <p>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.</p>
            
            <p>The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).</p>
            
            <p>The series has been adapted into eight blockbuster films, with the final novel split into two feature-length parts. The franchise has also expanded to include a stage play, video games, and theme park attractions.</p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">7</span>
                <span className="stat-label">Books</span>
              </div>
              <div className="stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Movies</span>
              </div>
              <div className="stat">
                <span className="stat-number">500M+</span>
                <span className="stat-label">Copies Sold</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 