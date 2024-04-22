import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import ImageGallery from './ImageGallery';
import './App.css';

function App() {
  return (
    <div className='mainbg'>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <ImageGallery />
    </div>
  );
}

export default App;
