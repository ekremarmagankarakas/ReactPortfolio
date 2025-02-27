import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/EkremKarakasResume.pdf";
import { NavigationContext } from "../App";

const HomePage = () => {
  const { setActiveSection } = useContext(NavigationContext);
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Developer | Artificial Intelligence Engineer";
  const typingSpeed = 80; // milliseconds per character
  
  // Typewriter effect for the subtitle
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="home-container">
      <motion.div 
        className="home-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="profile-picture-container" variants={itemVariants}>
          <div className="profile-picture">
            {/* Replace with your actual profile image path */}
            <span className="profile-emoji">👨‍💻</span>
          </div>
          <div className="profile-backdrop"></div>
        </motion.div>
        
        <motion.h1 className="home-title" variants={itemVariants}>
          Ekrem Karakas
        </motion.h1>
        
        <motion.h2 className="home-subtitle typing-effect" variants={itemVariants}>
          {typedText}
          <span className="cursor">|</span>
        </motion.h2>
        
        <motion.div className="home-badges" variants={itemVariants}>
          <span className="badge">React</span>
          <span className="badge">Python</span>
          <span className="badge">Machine Learning</span>
          <span className="badge">Node.js</span>
          <span className="badge">Java</span>
        </motion.div>
        
        <motion.p className="home-bio" variants={itemVariants}>
          I am a Computer Science - Artificial Intelligence student at
          Northeastern University with experience in software development, machine
          learning, and AI integration. I have worked on projects involving
          AI-driven platforms, machine learning models, game development, and IT
          automation, along with professional experience in software engineering,
          IT support, and web application development.
        </motion.p>
        
        <motion.div className="cta-buttons" variants={itemVariants}>
          <a onClick={() => setActiveSection('experience')} className="cta-button primary" style={{cursor: 'pointer'}}>View Experiences</a>
          <a onClick={() => setActiveSection('projects')} className="cta-button secondary" style={{cursor: 'pointer'}}>View Projects</a>
        </motion.div>
        
        <motion.div className="social-icons" variants={itemVariants}>
          <a
            href="https://github.com/ekremarmagankarakas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="GitHub"
          >
            <span className="fa fa-github"></span>
          </a>
          <a
            href="https://linkedin.com/in/ekrem-armagan-karakas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn"
          >
            <span className="fa fa-linkedin"></span>
          </a>
          <a
            href="mailto:example@email.com"
            className="social-icon-link"
            aria-label="Email"
          >
            <span className="fa fa-envelope"></span>
          </a>
          <a
            href={resumePDF}
            download="EkremKarakasResume.pdf"
            className="social-icon-link"
            aria-label="Resume"
          >
            <span className="fa fa-file-text"></span>
          </a>
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default HomePage;
