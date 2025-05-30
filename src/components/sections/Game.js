import React, { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import './Game.css';
import gryffindorCrest from '../../assets/gryffindor.jpg';
import hufflepuffCrest from '../../assets/hufflepuff.jpg';
import ravenclawCrest from '../../assets/ravenclaw.jpg';
import slytherinCrest from '../../assets/slytherin.jpg';

const Game = () => {
  const [gameState, setGameState] = useState('start'); // start, playing, result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [houseResult, setHouseResult] = useState('');
  const [animations, setAnimations] = useState({
    wand: false,
    potion: false,
    snitch: false
  });

  const questions = [
    {
      question: "Which of these would you most hate people to call you?",
      answers: [
        { text: "Ordinary", house: "Slytherin" },
        { text: "Ignorant", house: "Ravenclaw" },
        { text: "Cowardly", house: "Gryffindor" },
        { text: "Selfish", house: "Hufflepuff" }
      ]
    },
    {
      question: "Given the choice, would you rather invent a potion that would guarantee you:",
      answers: [
        { text: "Glory", house: "Gryffindor" },
        { text: "Wisdom", house: "Ravenclaw" },
        { text: "Power", house: "Slytherin" },
        { text: "Love", house: "Hufflepuff" }
      ]
    },
    {
      question: "How would you like to be known to history?",
      answers: [
        { text: "The Wise", house: "Ravenclaw" },
        { text: "The Good", house: "Hufflepuff" },
        { text: "The Bold", house: "Gryffindor" },
        { text: "The Great", house: "Slytherin" }
      ]
    },
    {
      question: "Which kind of instrument most pleases your ear?",
      answers: [
        { text: "Violin", house: "Slytherin" },
        { text: "Trumpet", house: "Gryffindor" },
        { text: "Piano", house: "Ravenclaw" },
        { text: "Drum", house: "Hufflepuff" }
      ]
    },
    {
      question: "Four goblets are placed before you. Which would you choose to drink?",
      answers: [
        { text: "The golden liquid so bright that it hurts the eye", house: "Gryffindor" },
        { text: "The foaming, frothing, silvery liquid that sparkles", house: "Ravenclaw" },
        { text: "The smooth, thick, purple drink that gives off a delicious smell", house: "Hufflepuff" },
        { text: "The mysterious black liquid that gleams like ink", house: "Slytherin" }
      ]
    },
    {
      question: "What would you rather be:",
      answers: [
        { text: "Trusted", house: "Hufflepuff" },
        { text: "Praised", house: "Gryffindor" },
        { text: "Envied", house: "Slytherin" },
        { text: "Imitated", house: "Ravenclaw" }
      ]
    },
    {
      question: "What's the most difficult magical challenge you'd like to undertake?",
      answers: [
        { text: "Crossing a bridge guarded by a troll", house: "Gryffindor" },
        { text: "Deciphering an ancient and mysterious magical script", house: "Ravenclaw" },
        { text: "Dueling a talented wizard", house: "Slytherin" },
        { text: "Rescuing a magical creature from danger", house: "Hufflepuff" }
      ]
    }
  ];

  // Track house points during the quiz
  const [housePoints, setHousePoints] = useState({
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0
  });

  // Timer for each question
  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAnswerSelect(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentQuestion, gameState]);
  
  // Reset timer when moving to next question
  useEffect(() => {
    if (gameState === 'playing') {
      setTimeLeft(15);
    }
  }, [currentQuestion, gameState]);

  // Random animations
  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const animationInterval = setInterval(() => {
      const randomAnimation = Math.floor(Math.random() * 3);
      const animationNames = ['wand', 'potion', 'snitch'];
      
      setAnimations(prev => ({
        ...prev,
        [animationNames[randomAnimation]]: true
      }));
      
      setTimeout(() => {
        setAnimations(prev => ({
          ...prev,
          [animationNames[randomAnimation]]: false
        }));
      }, 2000);
    }, 5000);
    
    return () => clearInterval(animationInterval);
  }, [gameState]);

  const startGame = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setHousePoints({
      Gryffindor: 0,
      Hufflepuff: 0,
      Ravenclaw: 0,
      Slytherin: 0
    });
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    
    // If answer is not null (user selected an answer, not timed out)
    if (answerIndex !== null) {
      const selectedHouse = questions[currentQuestion].answers[answerIndex].house;
      
      // Update house points
      setHousePoints(prev => ({
        ...prev,
        [selectedHouse]: prev[selectedHouse] + 1
      }));
      
      setScore(prev => prev + 1);
    }
    
    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        // Calculate the winning house
        const houses = Object.keys(housePoints);
        let maxPoints = 0;
        let winningHouse = '';
        
        houses.forEach(house => {
          if (housePoints[house] > maxPoints) {
            maxPoints = housePoints[house];
            winningHouse = house;
          }
        });
        
        setHouseResult(winningHouse);
        setGameState('result');
      }
    }, 1500);
  };

  const getHouseImage = (house) => {
    switch(house) {
      case 'Gryffindor':
        return gryffindorCrest;
      case 'Hufflepuff':
        return hufflepuffCrest;
      case 'Ravenclaw':
        return ravenclawCrest;
      case 'Slytherin':
        return slytherinCrest;
      default:
        return '';
    }
  };

  const getHouseDescription = (house) => {
    switch(house) {
      case 'Gryffindor':
        return "You belong in Gryffindor, where dwell the brave at heart. Their daring, nerve, and chivalry set Gryffindors apart.";
      case 'Hufflepuff':
        return "You belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil.";
      case 'Ravenclaw':
        return "You belong in Ravenclaw, if you've a ready mind. Where those of wit and learning, will always find their kind.";
      case 'Slytherin':
        return "You belong in Slytherin, you'll make your real friends. Those cunning folks use any means to achieve their ends.";
      default:
        return '';
    }
  };

  const renderStartScreen = () => (
    <div className="game-start">
      <div className="game-title">
        <h1>Hogwarts House Sorting Quiz</h1>
        <p>Discover which of the four Hogwarts houses you truly belong in by answering these magical questions. The Sorting Hat will reveal your destiny!</p>
      </div>
      <div className="house-emblems">
        <div className="house-emblem gryffindor">
          <img src={gryffindorCrest} alt="Gryffindor" />
        </div>
        <div className="house-emblem hufflepuff">
          <img src={hufflepuffCrest} alt="Hufflepuff" />
        </div>
        <div className="house-emblem ravenclaw">
          <img src={ravenclawCrest} alt="Ravenclaw" />
        </div>
        <div className="house-emblem slytherin">
          <img src={slytherinCrest} alt="Slytherin" />
        </div>
      </div>
      <div className="start-button-container">
        <Button onClick={startGame}>Begin Sorting</Button>
      </div>
    </div>
  );

  const renderQuestion = () => (
    <div className="game-question">
      <div className="game-elements">
        {animations.wand && <div className="animation wand"></div>}
        {animations.potion && <div className="animation potion"></div>}
        {animations.snitch && <div className="animation snitch"></div>}
      </div>
      
      <div className="question-number">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      
      <div className="timer">
        <div className="timer-bar" style={{ width: `${(timeLeft / 15) * 100}%` }}></div>
        <div className="timer-text">{timeLeft}s</div>
      </div>
      
      <div className="question-text">
        <h2>{questions[currentQuestion].question}</h2>
      </div>
      
      <div className="answer-options">
        {questions[currentQuestion].answers.map((answer, index) => (
          <div 
            key={index}
            className={`answer-option ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => selectedAnswer === null && handleAnswerSelect(index)}
          >
            <span>{answer.text}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderResult = () => (
    <div className="game-result">
      <div className="result-header">
        <h2>The Sorting Hat has decided!</h2>
      </div>
      
      <div className="house-result">
        <div className="house-image">
          <img src={getHouseImage(houseResult)} alt={houseResult} />
        </div>
        <div className="house-name">{houseResult}</div>
        <div className="house-description">{getHouseDescription(houseResult)}</div>
      </div>
      
      <div className="result-stats">
        <div className="house-points">
          <h3>Your House Affinities:</h3>
          <div className="house-bars">
            {Object.keys(housePoints).map((house) => (
              <div key={house} className="house-bar-container">
                <div className="house-bar-label">{house}</div>
                <div className="house-bar-wrapper">
                  <div 
                    className={`house-bar ${house.toLowerCase()}`}
                    style={{ width: `${(housePoints[house] / questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="house-bar-value">{housePoints[house]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="result-actions">
        <Button onClick={startGame}>Take Quiz Again</Button>
      </div>
    </div>
  );

  return (
    <section className="game-section">
      <div className="container">
        {gameState === 'start' && renderStartScreen()}
        {gameState === 'playing' && renderQuestion()}
        {gameState === 'result' && renderResult()}
      </div>
    </section>
  );
};

export default Game; 