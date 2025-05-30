import React from 'react';
import Hero from '../components/sections/Hero';
import StreamingPlatforms from '../components/sections/StreamingPlatforms';

const HomePage = () => {
  return (
    <main className="home-page no-spacing">
      <Hero />
      <StreamingPlatforms />
    </main>
  );
};

export default HomePage; 