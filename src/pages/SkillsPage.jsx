import React from 'react';
import '../App.css';

// Icons mapping for skills
const skillIcons = {
  // Frontend
  'React': '⚛️',
  'JavaScript': '𝗝𝗦',
  'HTML/CSS': '🌐',
  'Tailwind CSS': '🌊',
  
  // Backend
  'Node.js': '📦',
  'Express': '🚂',
  'MongoDB': '🍃',
  'SQL': '🗄️',
  
  // Tools
  'Git': '📝',
  'Figma': '🎨',
  'VS Code': '💻',
  'Docker': '🐳',
  
  // Languages
  'Python': '🐍',
  'Java': '☕',
  'TypeScript': '📘',
  'C': '⚙️',
  'R': '📊',

  // Operating Systems
  'Linux': '🐧',
  'Windows': '🪟',
  'macOS': '🍎',
};

const SkillsPage = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'SQL', level: 60 },
      ]
    },
    {
      category: 'Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'Docker', level: 60 },
      ]
    },
    {
      category: 'Languages',
      icon: '📝',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'Java', level: 70 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 60 },
        { name: 'C', level: 60 },
        { name: 'R', level: 60 },
      ]
    },
    {
      category: 'Operating Systems',
      icon: '💻',
      skills: [
        { name: 'Linux', level: 85 },
        { name: 'Windows', level: 90 },
        { name: 'macOS', level: 75 },
      ]
    }
  ];
  
  return (
    <div className="skills-container">
      <h2 className="skills-title">
        My Skills
      </h2>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div 
            key={category.category} 
            className="skills-card"
          >
            <div className="skills-card-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="skills-category">{category.category}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-name">
                      <span className="skill-icon">{skillIcons[skill.name] || '🔹'}</span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, #3b82f6 0%, #60a5fa ${skill.level}%)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;