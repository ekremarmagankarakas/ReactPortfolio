import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import Dock from './components/Dock';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';

export const ThemeContext = createContext();
export const NavigationContext = createContext();

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or default to false
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Update body class and localStorage when theme changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <NavigationContext.Provider value={{ setActiveSection }}>
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
      </NavigationContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
