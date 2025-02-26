import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Groth - Fitness Tracking App",
      description:
        "A fitness app inspired by Fitch that uses a character to symbolize the user’s progress. Built with React Native and Node.js.",
      tags: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      size: "lg",
      accentColor: "#FF6B6B",
    },
    {
      id: 2,
      title: "Oktet AI - AI Model Hub",
      description:
        "An AI-powered platform allowing users to interact with multiple AI models for content generation and problem-solving.",
      tags: ["Node.js", "Express.js", "EJS", "MongoDB", "Stripe", "AWS"],
      size: "lg",
      accentColor: "#6EE7B7",
    },
    {
      id: 3,
      title: "Personal Portfolio - eakarakas.com",
      description:
        "A portfolio website showcasing projects and skills, built with React and Tailwind for a modern and responsive UI.",
      tags: ["React", "Tailwind CSS"],
      size: "sm",
      accentColor: "#FFD166",
    },
    {
      id: 4,
      title: "UK Soccer Player Valuation Model",
      description:
        "Machine learning model predicting soccer player market values based on performance metrics and historical data.",
      tags: ["Python", "Machine Learning"],
      size: "md",
      accentColor: "#45A29E",
    },
    {
      id: 5,
      title: "Diabetes Prediction Model",
      description:
        "Analyzed a medical dataset to predict diabetes presence using statistical methods and machine learning.",
      tags: ["Python", "Data Science", "ML"],
      size: "md",
      accentColor: "#F9C22E",
    },
    {
      id: 6,
      title: "Green Taxi Trip Analysis",
      description:
        "Developed a Random Forest model to predict NYC taxi trip tips based on ride characteristics.",
      tags: ["Python", "Machine Learning"],
      size: "sm",
      accentColor: "#4B7F52",
    },
    {
      id: 7,
      title: "Reversi Game AI",
      description:
        "Implemented an AI-powered Reversi game with strategic algorithms and an interactive Java-based interface.",
      tags: ["Java", "Unit Testing"],
      size: "sm",
      accentColor: "#F76C6C",
    },
    {
      id: 8,
      title: "Klondike Solitaire Game",
      description:
        "Developed a console-based Klondike Solitaire game with multiple game variants and robust MVC architecture.",
      tags: ["Java", "Unit Testing", "Game Dev"],
      size: "sm",
      accentColor: "#6D214F",
    },
    {
      id: 9,
      title: "The Future is Yours - Published Book",
      description:
        "Published a book after interviewing 11 community and business leaders, funding educational initiatives.",
      tags: ["Writing", "Community Impact"],
      size: "sm",
      accentColor: "#FF9F1C",
    },
    {
      id: 10,
      title: "Safe Election Room (Robotics Competition Winner)",
      description:
        "Designed an innovative voting security system with Arduino and barcode authentication. Won First Place in the ROBORAVE competition.",
      tags: ["Arduino", "Security", "Robotics"],
      size: "lg",
      accentColor: "#F15BB5",
    },
  ];

  const getSizeClass = (size) => {
    switch (size) {
      case "sm":
        return "small";
      case "md":
        return "medium";
      case "lg":
        return "large";
      default:
        return "medium";
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="projects-heading">My Projects</h1>
          <div className="projects-divider"></div>
          <p className="projects-subheading">
            A collection of my work, side projects, and coding experiments.
          </p>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card ${getSizeClass(project.size)}`}
            style={{ 
              borderLeft: `4px solid ${project.accentColor}`,
              boxShadow: `0 6px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(0, 0, 0, 0.05)`
            }}
          >
            <h3 className="project-title" style={{ color: project.accentColor }}>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="tag"
                  style={{ 
                    backgroundColor: `${project.accentColor}15`, 
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}30`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;