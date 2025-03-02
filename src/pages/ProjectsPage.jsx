import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import "../App.css";
import { ThemeContext } from "../App";

const ProjectsPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const [activeCategory, setActiveCategory] = useState("all");

  // Define project categories with their colors
  const categories = {
    web: {
      name: "Web Development",
      color: "#3B82F6", // Blue
    },
    ml: {
      name: "Machine Learning",
      color: "#10B981", // Green
    },
    robotics: {
      name: "Robotics",
      color: "#8B5CF6", // Purple
    },
    other: {
      name: "Other",
      color: "#EC4899", // Pink
    },
  };

  const projects = [
    {
      id: 10,
      title: "i3ctl - i3 Linux CLI tool",
      description:
        "Developed a Python-based CLI tool to automate 13+ i3-Linux desktop workflows (network, workspace, power etc) Engineered a modular architecture with dynamic dependency detection (PulseAudio, Blueman) and GUI using PyQt6.",
      tags: ["Python", "CLI", "Linux", "PyQt6"],
      size: "lg",
      accentColor: "#EC4899",
      category: "other",
    },
    {
      id: 1,
      title: "OktetAI - AI Model Hub",
      description:
        "A platform enabling seamless interaction with multiple advanced AI models simultaneously while allowing users to take notes and paraphrase their work. Published LLMRest as an NPM package to manage integrations with multiple AI services.",
      tags: ["JavaScript", "Node.js", "MongoDB", "EJS", "AWS", "Stripe"],
      size: "lg",
      accentColor: "#3B82F6",
      category: "web",
    },
    {
      id: 2,
      title: "Movie Success Prediction Analysis",
      description:
        "Designed machine learning pipeline for movie success prediction using Random Forest & Gradient Boosting (94.86% accuracy, F1-score: 0.89). Applied SMOTE for class balancing & conducted EDA with matplotlib/seaborn.",
      tags: ["Python", "Machine Learning", "Data Science"],
      size: "md",
      accentColor: "#10B981",
      category: "ml",
    },
    {
      id: 3,
      title: "UK Soccer Player Valuation Analysis",
      description:
        "Developed a machine learning pipeline to assess the market valuation of UK soccer players. Utilized Random Forest Regression (140 estimators), achieving an R² score of 0.746, outperforming other models.",
      tags: ["Python", "Machine Learning", "Data Analysis"],
      size: "md",
      accentColor: "#10B981",
      category: "ml",
    },
    {
      id: 4,
      title: "Reversi Game Development",
      description:
        "Engineered a hexagonal-grid based Reversi game model in Java, adhering to standard two-player rules with variable grid size capabilities. Implemented model-view-controller architecture.",
      tags: ["Java", "Unit Testing", "MVC Architecture"],
      size: "md",
      accentColor: "#EC4899",
      category: "other",
    },
    {
      id: 5,
      title: "The Future is Yours - Book Project",
      description:
        "Interviewed 11 leaders, wrote and published a book, used sales revenue to donate medical devices and tablets, and received media coverage, including Hurriyet.",
      tags: ["Writing", "Community Impact", "Leadership"],
      size: "md",
      accentColor: "#EC4899",
      category: "other",
    },
    {
      id: 6,
      title: "Safe Election Room Project",
      description:
        "Designed a secure voting system using barcodes, sensors, and Arduino, featured in Bloomberg and Fortune 40 as a potential election solution. Won First Place at the 2019 International ROBORAVE Robotics Competition.",
      tags: ["Arduino", "Security", "Robotics", "Electronics"],
      size: "lg",
      accentColor: "#8B5CF6",
      category: "robotics",
    },
    {
      id: 7,
      title: "IT Quick Links Application",
      description:
        "Developed a Windows-based utility streamlining access to IT resources, tools, and scripts using PowerShell and WPF. Implemented location-based features including dynamic server mapping and automated printer discovery.",
      tags: ["PowerShell", "WPF", "Windows", "Automation"],
      size: "md",
      accentColor: "#EC4899",
      category: "other",
    },
    {
      id: 8,
      title: "Construction Management System",
      description:
        "Developed a custom web-based management system to streamline operations across construction projects, enabling efficient approvals, expense tracking, and data entry handling with role-based access control.",
      tags: ["PHP", "JavaScript", "MySQL", "Web Development"],
      size: "md",
      accentColor: "#3B82F6",
      category: "web",
    },
    {
      id: 9,
      title: "Personal Portfolio - eakarakas.com",
      description:
        "A portfolio website showcasing projects and skills, built with React and Tailwind CSS for a modern and responsive UI.",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      size: "sm",
      accentColor: "#3B82F6",
      category: "web",
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
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Group projects by category for section headers when showing all
  const groupedProjects =
    activeCategory === "all"
      ? Object.keys(categories).map((category) => ({
          category,
          name: categories[category].name,
          color: categories[category].color,
          projects: projects.filter((project) => project.category === category),
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
                  backgroundColor:
                    activeCategory === key ? value.color : `${value.color}20`,
                  color:
                    activeCategory === key
                      ? darkMode
                        ? "#000"
                        : "#fff"
                      : value.color,
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
            {groupedProjects.map(
              (group) =>
                group.projects.length > 0 && (
                  <div
                    key={group.category}
                    className="project-category-section"
                  >
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
                      {group.projects.map((project) => (
                        <div
                          key={project.id}
                          className={`project-card ${getSizeClass(project.size)}`}
                          style={{
                            borderLeft: `4px solid ${project.accentColor}`,
                            boxShadow: `0 6px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(0, 0, 0, 0.05)`,
                          }}
                        >
                          <h3
                            className="project-title"
                            style={{ color: project.accentColor }}
                          >
                            {project.title}
                          </h3>
                          <p className="project-description">
                            {project.description}
                          </p>
                          <div className="project-tags">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="tag"
                                style={{
                                  backgroundColor: `${project.accentColor}15`,
                                  color: project.accentColor,
                                  border: `1px solid ${project.accentColor}30`,
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
                ),
            )}
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
                  boxShadow: `0 6px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(0, 0, 0, 0.05)`,
                }}
              >
                <h3
                  className="project-title"
                  style={{ color: project.accentColor }}
                >
                  {project.title}
                </h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                      style={{
                        backgroundColor: `${project.accentColor}15`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}30`,
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

