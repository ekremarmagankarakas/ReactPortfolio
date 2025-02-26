import React from 'react';
import { motion } from 'framer-motion';
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
    <div className="skills-page">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="skills-heading">Technical Expertise</h1>
          <div className="skills-divider"></div>
          <p className="skills-subheading">
            A comprehensive overview of my technical abilities and proficiency levels.
          </p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.category} 
            className="skills-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
          >
            <motion.div 
              className="skills-card-header"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
            >
              <span className="category-icon">{category.icon}</span>
              <h3 className="skills-category">{category.category}</h3>
            </motion.div>
            <motion.div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skill.name} 
                  className="skill-item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) + 0.05 * skillIndex }}
                >
                  <div className="skill-info">
                    <div className="skill-name">
                      <span className="skill-icon">{skillIcons[skill.name] || '🔹'}</span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress" 
                      style={{
                        background: `linear-gradient(90deg, #3b82f6 0%, #60a5fa ${skill.level}%)`,
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) + 0.05 * skillIndex + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;