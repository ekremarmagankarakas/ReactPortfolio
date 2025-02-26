import React, { useState } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import Dock from './components/Dock';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app-container">
      <AnimatedBackground />

      <div className="content-wrapper">
        <div className="page-container">
          {activeSection === 'home' && <HomePage />}
          {activeSection === 'projects' && <ProjectsPage />}
          {activeSection === 'skills' && <SkillsPage />}
          {activeSection === 'experience' && <ExperiencePage />}
        </div>

        <Dock activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
};

export default App;
