import React from 'react';
import CharacterCarousel from '../components/common/CharacterCarousel';
import './CharactersPage.css';
import HP from '../assets/HP.jpg';
import AD from '../assets/AD.jpg';

const CharactersPage = () => {
  const characterData = [
    {
      id: 1,
      name: 'Albus Dumbledore',
      image: AD,
      description: 'was once close with Gellert Grindelwald and knows better than anyone the Dark wizard\'s plot to plunge the wizarding world into war against the non-magical world. Despite his own formidable powers, Dumbledore is unable to strike at Grindelwald himself because of the blood oath sworn between them. So, while he has devised the moves, he must leave it to Newt Scamander and his team to engage in this magical match of wills where the stakes could not be higher. To lose could mean the destruction of both the wizarding and non-magical worlds, so the question remains: how long will it be possible for Dumbledore to stay out of the fray?'
    },
    {
      id: 2,
      name: 'Harry Potter',
      image: HP,
      description: 'Harry Potter is the central protagonist of the series, a young wizard who is famous for surviving an attack by Lord Voldemort, the most powerful dark wizard of all time, when he was just a baby. Throughout the series, Harry attends Hogwarts School of Witchcraft and Wizardry, where he learns about magic and discovers the truth about his parents\' deaths and his own connection to Voldemort. Harry is known for his courage, loyalty to his friends, and his remarkable ability to face danger and overcome incredible odds.'
    }
  ];

  return (
    <main className="with-padding">
      <div className="container">
        <div className="carousel-section">
          <CharacterCarousel characters={characterData} />
        </div>
      </div>
    </main>
  );
};

export default CharactersPage; 