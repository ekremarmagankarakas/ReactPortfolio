import React, { useState, useContext } from 'react';
import '../App.css';
import { ThemeContext } from '../App';

const Dock = ({ activeSection, setActiveSection }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
  const sections = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'projects', icon: '🔧', label: 'Projects' },
    { id: 'skills', icon: '💡', label: 'Skills' },
    { id: 'experience', icon: '📝', label: 'Experience' }
  ];
  
  const [hoveredItem, setHoveredItem] = useState(null);
  
  return (
    <div className="dock-container">
      <div className="dock">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredItem === section.id;
          
          return (
            <button
              key={section.id}
              className={`dock-item ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
              onClick={() => setActiveSection(section.id)}
              onMouseEnter={() => setHoveredItem(section.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="icon">{section.icon}</div>
              <div className="label">{section.label}</div>
            </button>
          );
        })}
        
        {/* Theme toggle button */}
        <button
          className="dock-item"
          onClick={toggleDarkMode}
          onMouseEnter={() => setHoveredItem('theme')}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="icon">{darkMode ? '☀️' : '🌙'}</div>
          <div className="label">{darkMode ? 'Light' : 'Dark'}</div>
        </button>
      </div>
    </div>
  );
};

export default Dock;
