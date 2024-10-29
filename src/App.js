import React from 'react';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import './App.css';
import MarqueeComp from './components/Marquee';
function App() {
  return (
    <div className="App flex overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Content Sections */}
      <div className="flex-1 ml-5 md:ml-20 lg:ml-20"> {/* This pushes content to the right of the Navbar */}
        
        {/* Home Section */}
        <div id="home" className="section w-full min-h-[85vh] flex items-center justify-center">
          <HomePage />
        </div>
        {/* Marquee */}
        <div id="marquee" className="section w-full flex items-center justify-center">
          <MarqueeComp />
        </div>
        {/* Skills Section */}
        <div id="skills" className="section w-full min-h-screen flex items-center justify-center">
          <SkillsPage />
        </div>

        {/* Add additional sections here */}
      </div>
    </div>
  );
}

export default App;
