import React from 'react';
import '../App.css';

// Skills Page Component
const SkillsPage = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'SQL', level: 60 },
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'Docker', level: 60 },
      ]
    },
    {
      category: 'Languages',
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
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'VS Code', level: 90 },
        { name: 'Docker', level: 60 },
      ]
    }
  ];
  
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.category} className="skills-card">
            <h3 className="skills-category">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
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