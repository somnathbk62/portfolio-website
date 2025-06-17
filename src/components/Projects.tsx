
import React from 'react';
import { Github, ExternalLink, Code, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "🎮 Tic Tac Toe Game",
      description: "Console-based interactive game built with C++ featuring win/draw detection logic and clean user interface. Demonstrates strong understanding of procedural programming and game logic implementation.",
      technologies: ["C++", "Console Application", "Game Logic", "Algorithm Design"],
      features: [
        "Interactive gameplay with user input validation",
        "Smart win/draw detection algorithm",
        "Clean console interface design",
        "Efficient memory management"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "indigo",
      github: "https://github.com/somnathbk62"
    },
    {
      title: "🔐 SecureDoc Web App",
      description: "Full-featured web application with authentication and secure file storage capabilities. Built using JavaScript and Firebase, showcasing full-stack thinking with modern web technologies.",
      technologies: ["JavaScript", "Firebase", "Authentication", "File Storage", "Web APIs"],
      features: [
        "User authentication with Firebase Auth",
        "Secure file upload and storage",
        "Real-time data synchronization",
        "Responsive web design"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "teal",
      github: "https://github.com/somnathbk62",
      demo: "#"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900",
        text: "text-indigo-800 dark:text-indigo-200",
        icon: "text-indigo-600 dark:text-indigo-400",
        button: "bg-indigo-600 hover:bg-indigo-700",
        border: "border-indigo-200 dark:border-indigo-800"
      },
      teal: {
        bg: "bg-teal-100 dark:bg-teal-900",
        text: "text-teal-800 dark:text-teal-200",
        icon: "text-teal-600 dark:text-teal-400",
        button: "bg-teal-600 hover:bg-teal-700",
        border: "border-teal-200 dark:border-teal-800"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div key={index} className={`bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${colors.border}`}>
                {/* Project Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mr-4`}>
                    <div className={colors.icon}>
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 ${colors.button} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 ${colors.button} text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              These projects represent my journey in web development and programming. 
              I'm always working on new projects and learning new technologies.
            </p>
            <a
              href="https://github.com/somnathbk62"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
