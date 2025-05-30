import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import WatchNowPage from './pages/WatchNowPage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/watch" element={<WatchNowPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
