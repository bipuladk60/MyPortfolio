import React from 'react';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import AwardsPage from './pages/AwardsPage';
import './App.css';
import MarqueeComp from './components/Marquee';

function App() {
  return (
    <div className="relative App flex overflow-x-hidden bg-bg">
      {/* Navigation */}
      <Navbar />

      {/* Content Sections */}
      <div className="flex-1 ml-5 md:ml-20 lg:ml-20 flex flex-col">
        
        {/* Home Section */}
        <section id="home" className="w-full min-h-[85vh] flex items-center justify-center">
          <HomePage />
        </section>

        {/* Marquee is absolutely positioned, should not affect flow directly unless its container does */}
        <div id="marquee-container" className="relative w-full h-0"> {/* Container for marquee that takes no space */}
          <div id="marquee" className="absolute inset-x-0 top-0 section w-full flex items-center justify-center z-0">
             {/* Adjusted Marquee to be less likely to cause layout shifts if it had any implicit height before absolute positioning took full effect */}
            <MarqueeComp />
          </div>
        </div>

        {/* Experience Section */}
        <section id="experience" className="w-full flex items-center justify-center">
          <ExperiencePage />
        </section>

        {/* Projects Page */}
        <section id="projects" className="w-full flex items-center justify-center overflow-hidden">
          <ProjectPage />
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full flex items-center justify-center">
          <SkillsPage />
        </section>

        {/* Awards Section */}
        <section id="awards" className="w-full flex items-center justify-center">
          <AwardsPage />
        </section>

        {/* Contact Section */}
        <section id="contacts" className="w-full flex items-center justify-center">
          <ContactPage />
        </section>

        {/* Add additional sections here */}
      </div>
    </div>
  );
}

export default App;
