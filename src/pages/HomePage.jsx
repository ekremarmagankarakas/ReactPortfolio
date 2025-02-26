import React from "react";

const HomePage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center"
      style={{ animation: "fadeIn 1s ease-out forwards" }}
    >
      <h1 className="text-5xl font-bold mb-4 bg-clip-text">Ekrem Karakas</h1>
      <h2 className="text-2xl text-gray-100 mb-8">
        Software Developer | Artificial Intelligence Engineer
      </h2>
      <p className="max-w-xl text-gray-200 mb-8">
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
        >
          <span className="fa fa-github"></span>
        </a>
        <a
          href="https://linkedin.com/in/ekrem-armagan-karakas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="fa fa-linkedin"></span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
