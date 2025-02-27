import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

// Company logo icons/emojis
const companyIcons = {
  'Unifirst': '👔',
  'KarakaslarGroup': '🏗️',
  'MobileX': '📱',
  'Northeastern University': '🎓'
};

const ExperiencePage = () => {
  const experiences = [
    {
      title: 'IT Co-op',
      company: 'Unifirst',
      location: 'Wilmington, MA',
      period: 'July - Dec. 2024',
      description: 'Developed IT Quick Links application, a Windows-based utility streamlining access to IT resources, tools, and scripts, leveraging PowerShell and WPF. Implemented location-based features and automated helpdesk tasks.',
      achievements: [
        'Developed Windows-based utility streamlining access to IT resources and tools',
        'Implemented location-based features, including dynamic server mapping and automated printer discovery',
        'Improved operational efficiency by automating logon scripts and printer setups',
        'Resolved more than 2000 tickets about hardware and software issues'
      ],
      skills: ['PowerShell', 'WPF', 'Windows', 'Automation', 'IT Support', 'Scripting'],
      color: '#3b82f6'
    },
    {
      title: 'Full Stack Engineer',
      company: 'KarakaslarGroup',
      location: 'Izmir, Turkey',
      period: 'June - Aug. 2023',
      description: 'Developed a custom web-based management system to streamline operations across construction projects, enabling efficient approvals, expense tracking, and data entry handling with role-based access control.',
      achievements: [
        'Developed a custom web-based management system for construction project operations',
        'Implemented role-based access control for distinct account types',
        'Designed dynamic search filters, paginated entry listings, and modals for entry management',
        'Engineered backend functionality with object-oriented PHP and MySQL'
      ],
      skills: ['PHP', 'JavaScript', 'MySQL', 'Object-Oriented Programming', 'PHPMailer', 'Web Development'],
      color: '#60a5fa'
    },
    {
      title: 'Software Engineer Intern',
      company: 'MobileX',
      location: 'Istanbul, Turkey',
      period: 'July 2020',
      description: 'Trained in mobile applications for iOS and Android, gained back-end system experience. Participated in the "Aura Dashboard" project, observing database queries and analytics presentation.',
      achievements: [
        'Received training in mobile applications development for iOS and Android',
        'Gained back-end system experience and worked with databases',
        'Participated in the "Aura Dashboard" project for analytics',
        'Learned about database queries and visualization techniques'
      ],
      skills: ['Mobile Development', 'Database', 'Analytics', 'iOS', 'Android'],
      color: '#a78bfa'
    },
    {
      title: 'Computer Science - AI Major',
      company: 'Northeastern University',
      location: 'Boston, MA',
      period: 'Expected May 2026',
      description: 'BS in Computer Science with a focus on Artificial Intelligence. Member of the Honors Program with a 3.3/4.0 GPA. Spring 2023 DKE Athletic Chair.',
      achievements: [
        'Honors Scholarship recipient and Dean\'s List',
        'Coursework in Machine Learning, Data Mining, Algorithms & Data Structures',
        'Studied Theory of Computation, Object Oriented Programming, Computer Systems',
        'Foundations of Data Science, Cybersecurity, Digital Design and Computer Architecture'
      ],
      skills: ['Machine Learning', 'Data Mining', 'Algorithms', 'Data Structures', 'Object Oriented Programming'],
      color: '#10B981'
    }
  ];

  return (
    <div className="experience-page">
      <div className="experience-container">
        <motion.div 
          className="experience-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="experience-heading">Professional Journey</h1>
          <div className="experience-divider"></div>
          <p className="experience-subheading">
            A timeline of my career path and the skills I've developed along the way.
          </p>
        </motion.div>

        <motion.div 
          className="experience-timeline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="experience-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 * (index + 1) }}
            >
              <div 
                className="experience-logo-container"
                style={{ 
                  backgroundColor: `${exp.color}22`,
                  borderColor: exp.color
                }}
              >
                <span className="experience-company-icon">
                  {companyIcons[exp.company] || '💼'}
                </span>
              </div>
              
              <div className="experience-content">
                <div className="experience-content-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                
                <div className="experience-company-info">
                  <p className="experience-company">{exp.company}</p>
                  <span className="experience-location">{exp.location}</span>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-achievements">
                  <h4 className="achievements-title">Key Achievements</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="experience-skill"
                      style={{
                        backgroundColor: `${exp.color}22`,
                        color: exp.color,
                        borderColor: `${exp.color}44`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExperiencePage;