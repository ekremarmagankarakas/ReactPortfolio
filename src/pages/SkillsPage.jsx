import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

// Icons mapping for skills
const skillIcons = {
  // Languages
  'Python': '🐍',
  'Java': '☕',
  'JavaScript': '𝗝𝗦',
  'TypeScript': '📘',
  'HTML/CSS': '🌐',
  'C': '⚙️',
  'R': '📊',
  
  // Frontend
  'React': '⚛️',
  'Next.js': '▲',
  'React Native': '📱',
  'Tailwind CSS': '🌊',
  
  // Backend
  'Node.js': '📦',
  'Express.js': '🚂',
  'MongoDB': '🍃',
  'MySQL': '🗄️',
  'MariaDB': '🗂️',
  
  // Tools & DevOps
  'Git': '📝',
  'Docker': '🐳',
  'AWS': '☁️',
  'GitHub Actions': '🔄',
  'Stripe API': '💳',
  'LLM APIs': '🤖',
  
  // Development Environments
  'VS Code': '💻',
  'Neovim': '🔮',
  'Jupyter Notebook': '📓',
  'IntelliJ/PyCharm': '🧠',
  
  // Operating Systems
  'Linux': '🐧',
  'Windows': '🪟',
  'macOS': '🍎',
  
  // Hardware
  'Arduino': '🔌',
  'Raspberry Pi': '🍓',
};

const SkillsPage = () => {
  const skillCategories = [
    {
      category: 'Languages',
      icon: '📝',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'R', level: 75 },
        { name: 'C', level: 70 },
      ]
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'React Native', level: 75 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'MariaDB', level: 75 },
      ]
    },
    {
      category: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'GitHub Actions', level: 70 },
        { name: 'Stripe API', level: 75 },
        { name: 'LLM APIs', level: 85 },
      ]
    },
    {
      category: 'Development Environments',
      icon: '💻',
      skills: [
        { name: 'VS Code', level: 90 },
        { name: 'Neovim', level: 85 },
        { name: 'Jupyter Notebook', level: 80 },
        { name: 'IntelliJ/PyCharm', level: 75 },
      ]
    },
    {
      category: 'Operating Systems',
      icon: '🖥️',
      skills: [
        { name: 'Linux', level: 85 },
        { name: 'Windows', level: 90 },
        { name: 'macOS', level: 75 },
      ]
    },
    {
      category: 'Hardware',
      icon: '🔌',
      skills: [
        { name: 'Arduino', level: 75 },
        { name: 'Raspberry Pi', level: 70 },
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