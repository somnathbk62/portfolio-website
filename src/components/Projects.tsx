import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Shield,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Coins,
} from "lucide-react";

const Projects = () => {
  const [scrollIndicators, setScrollIndicators] = useState({
    showLeft: false,
    showRight: true,
  });
  const [showInitialHint, setShowInitialHint] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasShownHintRef = useRef(false);

  const updateScrollIndicators = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const canScrollLeft = scrollLeft > 10;
    const canScrollRight = scrollLeft < scrollWidth - clientWidth - 10;

    setScrollIndicators({
      showLeft: canScrollLeft,
      showRight: canScrollRight,
    });
  };

  const scrollToDirection = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 350; // Adjust scroll distance
    const currentScroll = el.scrollLeft;
    const targetScroll =
      direction === "right"
        ? currentScroll + scrollAmount
        : currentScroll - scrollAmount;

    el.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScrollIndicators);
      updateScrollIndicators();
    }

    // Observe when the section is in view to show the hint
    const section = sectionRef.current;
    let observer: IntersectionObserver | null = null;

    if (section && !hasShownHintRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting && !hasShownHintRef.current) {
            hasShownHintRef.current = true;
            setShowInitialHint(true);
            // Auto-hide after a short delay
            const t = setTimeout(() => setShowInitialHint(false), 3000);
            // Clear timer if component unmounts
            return () => clearTimeout(t);
          }
        },
        { threshold: 0.25 }
      );
      observer.observe(section);
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", updateScrollIndicators);
      }
      if (observer && section) observer.unobserve(section);
      if (observer) observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "🔐 SecureDoc: College File Manager with Firebase Authentication ",
      description:
        "SecureDoc is a web-based file management system for colleges, enabling secure file upload, access, and management via Firebase. It ensures access control, real-time availability, and a user-friendly interface.",
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
        "Designed for student/college use cases",
        "Role-based access for students, and admins",
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "teal",
      github: "https://github.com/somnathbk62/securedocs",
      demo: "https://securefileshub.netlify.app/",
    },
    {
      title: "🤝 CodeTogether: Real-Time Collaborative Code Editor & Chat",
      description:
        "A full-stack real-time collaborative code editor and chat platform, enabling multi-user coding, live chat, file sharing, and light/dark themes for seamless teamwork on web.",
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
        "Simple room creation/joining",
      ],
      icon: <ExternalLink className="w-8 h-8" />, // Using ExternalLink for demo/project
      color: "indigo", // Reusing indigo for visual variety
      github: "https://github.com/somnathbk62/code_together",
      demo: "https://codewith-us.netlify.app/",
    },
    {
      title: "💪 FitZone Gym Website",
      description:
        "A modern, responsive gym website built with React.js and Tailwind CSS. Features dark mode, smooth animations, SEO optimization, and easy customization for trainers and clients.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript ES6+",
        "HTML5 & CSS3",
        "React Context API",
      ],
      features: [
        "Fully responsive layout for mobile, tablet, and desktop",
        "Dark mode toggle for better accessibility and UI experience",
        "SEO optimized with semantic HTML, meta tags, and structured data",
        "Lazy loading images and optimized assets for faster page load.",
        "Hover effects, transitions, and subtle animations enhance the user experience.",
      ],
      icon: <Dumbbell className="w-8 h-8" />, // Gym-themed icon
      color: "green", // Choose a color that fits gym/fitness theme
      github: "https://github.com/somnathbk62/gym-website",
      demo: "https://fitzonejalandhar.netlify.app/",
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
      github: "https://github.com/somnathbk62/tic-tac-toe-game",
    },
    {
      title: "💱 Currency Converter",
      description:
        "Currency Converter is a web app that lets users convert between 150+ currencies using real-time rates, featuring a clean, responsive design with smooth animations..",
      technologies: ["HTML", "CSS", "JavaScript", "open.er-api.com"],
      features: [
        "Convert between 150+ global currencies.",
        "Real-time exchange rates powered by open.er-api.com.",
        "Intuitive, user-friendly UI with responsive design for all devices.",
        "One-click currency swap functionality.",
        "One-click currency swap functionality.",
      ],
      icon: <Coins className="w-8 h-8" />,
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
      green: {
        bg: "bg-green-100 dark:bg-green-900",
        text: "text-green-800 dark:text-green-200",
        icon: "text-green-600 dark:text-green-400",
        button: "bg-green-600 hover:bg-green-700",
        border: "border-green-200 dark:border-green-800",
      },
    } as const;
    type ColorClasses = (typeof colorMap)[keyof typeof colorMap];
    return (colorMap as Record<string, ColorClasses>)[color] ?? colorMap.indigo;
  };

  return (
    <div
      ref={sectionRef}
      className="py-5 sm:py-5 lg:py-5 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-gray-900 dark:to-indigo-950 relative overflow-hidden"
    >
      {/* Modern geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(99, 102, 241, 0.1) 2px, transparent 0),
              radial-gradient(circle at 75px 75px, rgba(168, 85, 247, 0.1) 1px, transparent 0)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
            <Code className="w-4 h-4 mr-2" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work showcasing modern web development, innovative
            solutions, and creative problem-solving
          </p>
        </div>

        {/* Responsive Projects Container */}
        <div className="relative group">
          {/* Scroll Indicators - All screen sizes */}
          {scrollIndicators.showLeft && (
            <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={() => scrollToDirection("left")}
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-2 border-indigo-100 dark:border-indigo-900 rounded-xl p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 group hover:-translate-x-1"
                aria-label="Scroll left to see previous projects"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200" />
              </button>
            </div>
          )}

          {scrollIndicators.showRight && (
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={() => scrollToDirection("right")}
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-2 border-indigo-100 dark:border-indigo-900 rounded-xl p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 group hover:translate-x-1"
                aria-label="Scroll right to see more projects"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200" />
              </button>
            </div>
          )}

          {/* Initial Hint Animation */}
          {showInitialHint &&
            scrollIndicators.showRight &&
            !scrollIndicators.showLeft && (
              <div className="absolute right-14 sm:right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-lg animate-pulse">
                  <span className="hidden sm:inline">
                    Swipe to see more projects →
                  </span>
                  <span className="sm:hidden">Swipe →</span>
                </div>
              </div>
            )}

          {/* Horizontal Scroll Container - All Screen Sizes */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 snap-x snap-mandatory scroll-smooth w-max">
              {projects.map((project, index) => {
                const colors = getColorClasses(project.color);
                return (
                  <div
                    key={index}
                    className={`w-[85vw] sm:w-[75vw] md:w-[55vw] lg:w-[42vw] xl:w-[40vw] 2xl:w-[38vw] min-h-[480px] sm:min-h-[500px] lg:min-h-[520px] flex-shrink-0 bg-white dark:bg-gray-900 p-4 sm:p-5 lg:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${colors.border} fade-in-up flex flex-col snap-start relative overflow-hidden group/card`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-15`}
                      ></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center mb-3">
                        <div
                          className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center mr-3 shadow-md transition-all duration-300 group-hover/card:scale-105`}
                        >
                          <div
                            className={`${colors.icon} transition-transform duration-300`}
                          >
                            {project.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed text-sm line-clamp-4 ">
                        {project.description}
                      </p>

                      <div className="space-y-4 mb-4">
                        <div>
                          <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-2.5 flex items-center">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${colors.button} mr-2`}
                            ></span>
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-2 py-0.5 ${colors.bg} ${colors.text} rounded-md text-sm font-medium`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1.5 flex items-center">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${colors.button} mr-2`}
                            ></span>
                            Key Features
                          </h4>
                          <div className="space-y-2.5">
                            {project.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-start"
                              >
                                <div
                                  className={`w-1 h-1 rounded-full mt-1.5 mr-2 ${colors.button} flex-shrink-0`}
                                ></div>
                                <span className="text-gray-600 dark:text-gray-400 text-sm leading-snug">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-md hover:scale-105 text-sm"
                        >
                          <Github className="w-3 h-3 mr-1.5" />
                          <span>Code</span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 border border-indigo-600 text-indigo-600 dark:text-indigo-400 px-3 py-2 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:scale-105 text-sm"
                          >
                            <ExternalLink className="w-3 h-3 mr-1.5" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modern Call to Action */}
        <div className="text-center mt-8 sm:mt-8 lg:mt-8">
          <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/50 dark:via-gray-900 dark:to-purple-950/50 p-8 sm:p-10 lg:p-12 rounded-3xl border border-indigo-100/50 dark:border-indigo-900/30 shadow-2xl backdrop-blur-sm overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/3 to-purple-600/3 rounded-3xl"></div>
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4 backdrop-blur-sm">
                <Github className="w-4 h-4 mr-2" />
                Open Source Portfolio
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Want to see{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  more
                </span>
                ?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2  max-w-2xl mx-auto text-lg leading-relaxed ">
                Discover more projects, contributions, and experiments on my
                GitHub profile. From web applications to open-source
                contributions.
              </p>
              <a
                href="https://github.com/somnathbk62"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group"
              >
                <Github className="w-5 h-5 mr-3 transition-transform group-hover:rotate-12" />
                <span>Explore All Projects</span>
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
