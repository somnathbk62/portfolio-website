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
      github: "https://github.com/somnathbk62/projects/tree/main/tic-tac-toe-game"
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
      github: "https://github.com/somnathbk62/projects/tree/main/securedocs",
      demo: "https://securefileshub.netlify.app/"
    },
    {
      title: "💱 Currency Converter",
      description: "Currency Converter is a modern, web-based application that enables users to convert between over 150 world currencies using real-time exchange rates. The project is designed with a focus on user experience, featuring a clean, responsive interface and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript", "open.er-api.com"],
      features: [
        "Convert between 150+ global currencies.",
        "Real-time exchange rates powered by open.er-api.com.",
        "Intuitive, user-friendly UI with responsive design for all devices.",
        "One-click currency swap functionality.",
        "Modern look and feel, inspired by current web design trends."
      ],
      icon: <ExternalLink className="w-8 h-8" />,
      color: "teal",
      github: "https://github.com/somnathbk62/projects/tree/main/currency-converter",
      demo: "https://global-exchange.netlify.app/"
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
              <div
                key={index}
                className={`bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${colors.border} fade-in-up flex flex-col justify-between`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mr-3 shadow-md transition-transform duration-300`}>
                      <div className={colors.icon}>
                        {project.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold shadow-sm`}> {tech} </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className={`w-2 h-2 mt-2 mr-2 rounded-full inline-block ${colors.button}`}></span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm font-normal">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-2xl font-semibold transition-all duration-200 flex items-center justify-center shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-4 py-2 rounded-2xl font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 flex items-center justify-center shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
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

      {/* Add custom scrollbar and fade-in animation styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar-horizontal::-webkit-scrollbar {
          height: 5px;
          background: transparent;
        }
        .custom-scrollbar-horizontal::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #6366f1 0%, #14b8a6 100%);
          border-radius: 8px;
          opacity: 0.7;
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.6s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .hover\:border-gradient:hover {
          border-image: linear-gradient(90deg, #6366f1 0%, #14b8a6 100%) 1;
        }
      `}} />
    </div>
  );
};

export default Projects;
