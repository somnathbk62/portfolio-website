import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Code, Shield } from "lucide-react";

const Projects = () => {
  const [showArrow, setShowArrow] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide arrow after 2.5s or on scroll
    const hideArrow = () => setShowArrow(false);
    const timer = setTimeout(hideArrow, 2500);
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", hideArrow, { once: true });
    return () => {
      clearTimeout(timer);
      if (el) el.removeEventListener("scroll", hideArrow);
    };
  }, []);

  const projects = [
    {
      title: "🔐 SecureDoc: College File Manager with Firebase Authentication ",
      description:
        "A web-based file management system for colleges and academic institutions. SecureDoc allows students and staff to upload, access, and manage files securely using Firebase services. The project focuses on access control, real-time availability, and user-friendly interface.",
      technologies: [
        "JavaScript",
        "Firebase Auth",
        "File Storage",
        "Bootstrap",
        "Web APIs",
        "Responsive Design",
      ],
      features: [
        "User authentication with Firebase Auth",
        "Secure file upload and storage",
        "Real-time sync and access",
        "Responsive web design",
        "Designed for student/college use cases",
        "Role-based access for students, and admins",
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "teal",
      github: "https://github.com/somnathbk62/projects/tree/main/securedocs",
      demo: "https://securefileshub.netlify.app/",
    },
    {
      title: "🤝 CodeTogether: Real-Time Collaborative Code Editor & Chat",
      description:
        "A full-stack, real-time collaborative code editor and chat platform. Enables multiple users to edit code together, chat live, share files, and switch between light/dark themes. Available on both web and Android, it’s designed for seamless teamwork, learning, and remote collaboration.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Socket.io",
        "WebSockets",
        "CodeMirror",
        "Tailwind CSS",
      ],
      features: [
        "Real-time code collaboration (multi-user, instant sync)",
        "Integrated live chat per room",
        "File and image uploads within sessions",
        "Light/dark theming",
        "Rate limiting for code execution API",
        "Simple room creation/joining",
        "Modern, responsive UI",
      ],
      icon: <ExternalLink className="w-8 h-8" />, // Using ExternalLink for demo/project
      color: "indigo", // Reusing indigo for visual variety
      github: "https://github.com/somnathbk62/code_together",
      demo: "https://codewith-us.netlify.app/",
    },
    {
      title: "🎮 Tic Tac Toe Game",
      description:
        "Console-based interactive game built with C++ featuring win/draw detection logic and clean user interface. Demonstrates strong understanding of procedural programming and game logic implementation.",
      technologies: [
        "C++",
        "Console Application",
        "Game Logic",
        "Algorithm Design",
      ],
      features: [
        "Interactive gameplay with user input validation",
        "Smart win/draw detection algorithm",
        "Clean console interface design",
        "Efficient memory management",
      ],
      icon: <Code className="w-8 h-8" />,
      color: "indigo",
      github:
        "https://github.com/somnathbk62/projects/tree/main/tic-tac-toe-game",
    },
    {
      title: "💱 Currency Converter",
      description:
        "Currency Converter is a modern, web-based application that enables users to convert between over 150 world currencies using real-time exchange rates. The project is designed with a focus on user experience, featuring a clean, responsive interface and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript", "open.er-api.com"],
      features: [
        "Convert between 150+ global currencies.",
        "Real-time exchange rates powered by open.er-api.com.",
        "Intuitive, user-friendly UI with responsive design for all devices.",
        "One-click currency swap functionality.",
        "Modern look and feel, inspired by current web design trends.",
      ],
      icon: <ExternalLink className="w-8 h-8" />,
      color: "teal",
      github: "https://github.com/somnathbk62/currency-converter",
      demo: "https://globexchange.netlify.app/",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900",
        text: "text-indigo-800 dark:text-indigo-200",
        icon: "text-indigo-600 dark:text-indigo-400",
        button: "bg-indigo-600 hover:bg-indigo-700",
        border: "border-indigo-200 dark:border-indigo-800",
      },
      teal: {
        bg: "bg-teal-100 dark:bg-teal-900",
        text: "text-teal-800 dark:text-teal-200",
        icon: "text-teal-600 dark:text-teal-400",
        button: "bg-teal-600 hover:bg-teal-700",
        border: "border-teal-200 dark:border-teal-800",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="py-20 bg-white dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my technical
            skills and problem-solving abilities
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-6 px-4 md:px-8 snap-x snap-mandatory scroll-smooth w-max">
              {projects.map((project, index) => {
                const colors = getColorClasses(project.color);
                return (
                  <div
                    key={index}
                    className={`w-[calc((100vw-2rem-2rem-2rem)/2)] max-w-[500px] min-w-[320px] flex-shrink-0 bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${colors.border} fade-in-up flex flex-col justify-between snap-start`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Project Header */}
                    <div>
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mr-3 shadow-md transition-transform duration-300`}
                        >
                          <div className={colors.icon}>{project.icon}</div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                      </div>

                      {/* Project Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-2 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold shadow-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                          Key Features
                        </h4>
                        <ul className="space-y-0.5">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <span
                                className={`w-1.5 h-1.5 mt-1.5 mr-2 rounded-full inline-block ${colors.button}`}
                              ></span>
                              <span className="text-gray-600 dark:text-gray-300 text-xs font-normal">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-2 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm`}
                      >
                        <Github className="w-3 h-3 mr-1.5" />
                        View Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 px-3 py-2 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-200 flex items-center justify-center shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
                        >
                          <ExternalLink className="w-3 h-3 mr-1.5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Gradient overlay right edge */}
            <div
              className="pointer-events-none absolute top-0 right-0 h-full w-16 z-10"
              style={{
                background:
                  "linear-gradient(to left, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0))",
              }}
            />
            {/* Animated right arrow cue */}
            {showArrow && (
              <div className="pointer-events-none absolute top-1/2 right-6 z-20 -translate-y-1/2 flex items-center">
                <svg
                  className="animate-bounce-x"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              These projects represent my journey in web development and
              programming. I'm always working on new projects and learning new
              technologies.
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

      {/* Add custom scrollbar, fade-in animation, and arrow bounce styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
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
          .hover\\:border-gradient:hover {
            border-image: linear-gradient(90deg, #6366f1 0%, #14b8a6 100%) 1;
          }
          @keyframes bounceX {
            0%, 100% { transform: translateX(0); opacity: 1; }
            30% { transform: translateX(12px); opacity: 1; }
            80% { opacity: 0.7; }
          }
          .animate-bounce-x {
            animation: bounceX 1.2s cubic-bezier(.4,0,.6,1) infinite;
          }
        `,
        }}
      />
    </div>
  );
};

export default Projects;
