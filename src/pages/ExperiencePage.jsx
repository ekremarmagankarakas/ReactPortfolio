import React from 'react';
import '../App.css';

// Company logo icons/emojis
const companyIcons = {
  'Tech Solutions Inc.': '🚀',
  'Digital Agency': '🎨',
  'Startup Hub': '💡',
  'Google': '🔍',
  'Microsoft': '🪟',
  'Apple': '🍎'
};

const ExperiencePage = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead frontend development for enterprise applications using React and modern JavaScript frameworks. Implemented state-of-the-art CI/CD pipelines to improve deployment efficiency by 40%. Mentored junior developers and established coding standards used across the organization.',
      achievements: [
        'Reduced application load time by 35% through code optimization',
        'Led the migration from class components to functional components with hooks',
        'Implemented micro-frontend architecture for better scalability'
      ],
      skills: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Jest', 'Tailwind CSS'],
      color: '#3b82f6'
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      location: 'Boston, MA',
      period: '2019 - 2022',
      description: 'Developed responsive websites and e-commerce platforms for various clients using React and Node.js. Collaborated with designers to implement pixel-perfect UIs while ensuring accessibility standards were met.',
      achievements: [
        'Built a headless CMS solution that increased content creation efficiency by 50%',
        'Implemented complex animations and micro-interactions to enhance user engagement',
        'Created reusable component libraries that reduced development time by 30%'
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Styled Components', 'Webpack'],
      color: '#60a5fa'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Hub',
      location: 'Austin, TX',
      period: '2017 - 2019',
      description: 'Collaborated in a fast-paced environment to build MVPs and web applications using JavaScript and React. Worked with cross-functional teams to deliver projects on tight deadlines.',
      achievements: [
        'Implemented front-end features for a SaaS platform with 10k+ active users',
        'Learned and adapted to new technologies and frameworks as project needs evolved',
        'Contributed to open-source libraries used in the organization'
      ],
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git', 'Bootstrap'],
      color: '#a78bfa'
    }
  ];

  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-header">
          <h1 className="experience-heading">Professional Journey</h1>
          <div className="experience-divider"></div>
          <p className="experience-subheading">
            A timeline of my career path and the skills I've developed along the way.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;