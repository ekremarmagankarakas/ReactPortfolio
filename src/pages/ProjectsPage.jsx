import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { ThemeContext } from "../App";

const ProjectsPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState("all");

  // Define project categories with their colors
  const categories = {
    "web": {
      name: "Web Development",
      color: "#3B82F6" // Blue
    },
    "ml": {
      name: "Machine Learning",
      color: "#10B981" // Green
    },
    "game": {
      name: "Game Development",
      color: "#F59E0B" // Amber
    },
    "mobile": {
      name: "Mobile Apps",
      color: "#EC4899" // Pink
    },
    "hardware": {
      name: "Hardware",
      color: "#8B5CF6" // Purple
    }
  };

  const projects = [
    {
      id: 1,
      title: "Groth - Fitness Tracking App",
      description:
        "A fitness app inspired by Fitch that uses a character to symbolize the user's progress. Built with React Native and Node.js.",
      tags: ["React Native", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      size: "lg",
      accentColor: "#EC4899",
      category: "mobile"
    },
    {
      id: 2,
      title: "Oktet AI - AI Model Hub",
      description:
        "An AI-powered platform allowing users to interact with multiple AI models for content generation and problem-solving.",
      tags: ["Node.js", "Express.js", "EJS", "MongoDB", "Stripe", "AWS"],
      size: "lg",
      accentColor: "#3B82F6",
      category: "web"
    },
    {
      id: 3,
      title: "Personal Portfolio - eakarakas.com",
      description:
        "A portfolio website showcasing projects and skills, built with React and Tailwind for a modern and responsive UI.",
      tags: ["React", "Tailwind CSS"],
      size: "sm",
      accentColor: "#3B82F6",
      category: "web"
    },
    {
      id: 4,
      title: "UK Soccer Player Valuation Model",
      description:
        "Machine learning model predicting soccer player market values based on performance metrics and historical data.",
      tags: ["Python", "Machine Learning"],
      size: "md",
      accentColor: "#10B981",
      category: "ml"
    },
    {
      id: 5,
      title: "Diabetes Prediction Model",
      description:
        "Analyzed a medical dataset to predict diabetes presence using statistical methods and machine learning.",
      tags: ["Python", "Data Science", "ML"],
      size: "md",
      accentColor: "#10B981",
      category: "ml"
    },
    {
      id: 6,
      title: "Green Taxi Trip Analysis",
      description:
        "Developed a Random Forest model to predict NYC taxi trip tips based on ride characteristics.",
      tags: ["Python", "Machine Learning"],
      size: "sm",
      accentColor: "#10B981",
      category: "ml"
    },
    {
      id: 7,
      title: "Reversi Game AI",
      description:
        "Implemented an AI-powered Reversi game with strategic algorithms and an interactive Java-based interface.",
      tags: ["Java", "Unit Testing"],
      size: "sm",
      accentColor: "#F59E0B",
      category: "game"
    },
    {
      id: 8,
      title: "Klondike Solitaire Game",
      description:
        "Developed a console-based Klondike Solitaire game with multiple game variants and robust MVC architecture.",
      tags: ["Java", "Unit Testing", "Game Dev"],
      size: "sm",
      accentColor: "#F59E0B",
      category: "game"
    },
    {
      id: 9,
      title: "The Future is Yours - Published Book",
      description:
        "Published a book after interviewing 11 community and business leaders, funding educational initiatives.",
      tags: ["Writing", "Community Impact"],
      size: "sm",
      accentColor: "#3B82F6",
      category: "web"
    },
    {
      id: 10,
      title: "Safe Election Room (Robotics Competition Winner)",
      description:
        "Designed an innovative voting security system with Arduino and barcode authentication. Won First Place in the ROBOAVE competition.",
      tags: ["Arduino", "Security", "Robotics"],
      size: "lg",
      accentColor: "#8B5CF6",
      category: "hardware"
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

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Group projects by category for section headers when showing all
  const groupedProjects = activeCategory === "all"
    ? Object.keys(categories).map(category => ({
        category,
        name: categories[category].name,
        color: categories[category].color,
        projects: projects.filter(project => project.category === category)
      }))
    : [];

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
          
          {/* Category Filter Buttons */}
          <div className="category-filters">
            <button 
              className={`category-filter ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All Projects
            </button>
            
            {Object.entries(categories).map(([key, value]) => (
              <button 
                key={key}
                className={`category-filter ${activeCategory === key ? "active" : ""}`}
                style={{ 
                  borderColor: value.color,
                  backgroundColor: activeCategory === key ? value.color : `${value.color}20`,
                  color: activeCategory === key ? (darkMode ? '#000' : '#fff') : value.color
                }}
                onClick={() => setActiveCategory(key)}
              >
                {value.name}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Display projects */}
        {activeCategory === "all" ? (
          // Display projects grouped by category with section headers
          <>
            {groupedProjects.map(group => (
              group.projects.length > 0 && (
                <div key={group.category} className="project-category-section">
                  <div 
                    className="category-header"
                    style={{ borderColor: group.color }}
                  >
                    <h2 style={{ color: group.color }}>{group.name}</h2>
                  </div>
                  
                  <motion.div 
                    className="projects-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {group.projects.map(project => (
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
              )
            ))}
          </>
        ) : (
          // Display filtered projects for a specific category
          <motion.div 
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project) => (
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
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;