import React from 'react';
import '../App.css'; // We'll define this CSS file separately

const ExperiencePage = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead frontend development for enterprise applications using React and modern JavaScript frameworks.',
      skills: ['React', 'TypeScript', 'Redux', 'GraphQL', 'CSS'],
      logo: '/api/placeholder/60/60'
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2019 - 2022',
      description: 'Developed responsive websites and e-commerce platforms for various clients using React and Node.js.',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Styled Components'],
      logo: '/api/placeholder/60/60'
    },
    {
      title: 'Junior Developer',
      company: 'Startup Hub',
      period: '2017 - 2019',
      description: 'Collaborated in a fast-paced environment to build MVPs and web applications using JavaScript and React.',
      skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Git'],
      logo: '/api/placeholder/60/60'
    }
  ];

  return (
    <div className="experience-page">
      <div className="experience-container">
        <div className="experience-header">
          <h1 className="experience-heading">Professional Experience</h1>
          <div className="experience-divider"></div>
          <p className="experience-subheading">
            A timeline of my professional journey and the skills I've developed along the way.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-logo-container">
                <img src={exp.logo} alt={exp.company} className="experience-logo" />
              </div>
              
              <div className="experience-content">
                <div className="experience-content-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                
                <p className="experience-company">{exp.company}</p>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="experience-skill">
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