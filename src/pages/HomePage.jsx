import React from "react";

const HomePage = () => {
  return (
    <div
      className="home-container"
    >
      <div className="home-content">
        <h1 className="home-title">Ekrem Karakas</h1>
        <h2 className="home-subtitle">
          Software Developer | Artificial Intelligence Engineer
        </h2>
        <p className="home-bio">
          I am a Computer Science - Artificial Intelligence student at
          Northeastern University with experience in software development, machine
          learning, and AI integration. I have worked on projects involving
          AI-driven platforms, machine learning models, game development, and IT
          automation, along with professional experience in software engineering,
          IT support, and web application development.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/ekremarmagankarakas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <span className="fa fa-github"></span>
          </a>
          <a
            href="https://linkedin.com/in/ekrem-armagan-karakas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
          >
            <span className="fa fa-linkedin"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
