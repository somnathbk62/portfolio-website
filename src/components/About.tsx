import React, { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Target,
  User,
  Code2,
  Briefcase,
  Heart,
  MapPin,
  Calendar,
  Award,
  Lightbulb,
  Rocket,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Individual box visibility states for mobile
  const [boxVisibility, setBoxVisibility] = useState({
    whoIAm: false,
    coreSkills: false,
    passion: false,
    goals: false,
    beyondCode: false,
    education: false,
    experience: false,
  });

  // Individual refs for mobile animation
  const whoIAmRef = useRef<HTMLDivElement>(null);
  const coreSkillsRef = useRef<HTMLDivElement>(null);
  const passionRef = useRef<HTMLDivElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);
  const beyondCodeRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) {
      // Mobile: Individual observers for each box
      const createObserver = (
        ref: React.RefObject<HTMLDivElement>,
        key: keyof typeof boxVisibility
      ) => {
        return new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setBoxVisibility((prev) => ({ ...prev, [key]: true }));
            }
          },
          {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px",
          }
        );
      };

      const observers = [
        { ref: whoIAmRef, key: "whoIAm" as keyof typeof boxVisibility },
        { ref: coreSkillsRef, key: "coreSkills" as keyof typeof boxVisibility },
        { ref: passionRef, key: "passion" as keyof typeof boxVisibility },
        { ref: goalsRef, key: "goals" as keyof typeof boxVisibility },
        { ref: beyondCodeRef, key: "beyondCode" as keyof typeof boxVisibility },
        { ref: educationRef, key: "education" as keyof typeof boxVisibility },
        { ref: experienceRef, key: "experience" as keyof typeof boxVisibility },
      ];

      const observerInstances = observers.map(({ ref, key }) => {
        const observer = createObserver(ref, key);
        if (ref.current) {
          observer.observe(ref.current);
        }
        return observer;
      });

      return () => {
        observerInstances.forEach((observer) => observer.disconnect());
        window.removeEventListener("resize", checkMobile);
      };
    } else {
      // Desktop: Original behavior
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "50px 0px -50px 0px",
        }
      );

      if (aboutRef.current) {
        observer.observe(aboutRef.current);
      }

      return () => {
        if (aboutRef.current) {
          observer.unobserve(aboutRef.current);
        }
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, [isMobile]);

  return (
    <div
      ref={aboutRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-bl from-slate-50 via-purple-50/30 to-slate-100 dark:from-slate-800 dark:via-purple-900/20 dark:to-slate-900 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-200/50 before:to-transparent dark:before:via-purple-700/50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-purple-200/50 after:to-transparent dark:after:via-purple-700/50"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/8 to-teal-500/8 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-purple-400/8 to-pink-500/8 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Additional pattern overlay for About section */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.06] z-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 69, 199, 0.4) 1px, transparent 0)`,
          backgroundSize: "16px 16px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div
            className={`inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-full border border-blue-200 dark:border-blue-700/50 mb-4 transition-all duration-700 ${
              isMobile
                ? "opacity-100 translate-y-0"
                : isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <User className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Get to know me
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 transition-all duration-700 ${
              isMobile ? "delay-0" : "delay-100"
            } ${
              isMobile
                ? "opacity-100 translate-y-0"
                : isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600">
              Me
            </span>
          </h2>
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 ${
              isMobile ? "delay-0" : "delay-200"
            } ${
              isMobile
                ? "opacity-100 translate-y-0"
                : isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed relative">
              <span className="inline-block">
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Passionate frontend developer
                </span>
                <span className="mx-2 text-orange-500">✨</span>
                <span className="font-medium">
                  crafting modern web experiences
                </span>
              </span>
              <br />
              <span className="inline-block mt-1">
                with{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  clean code
                </span>{" "}
                and
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 ml-1">
                  creative solutions
                </span>
                <span className="ml-2 text-blue-500">🚀</span>
              </span>
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Personal Bio & Current Status */}
          <div className="space-y-6">
            {/* Who I Am */}
            <div
              ref={whoIAmRef}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
                isMobile ? "delay-0" : "delay-300"
              } ${
                isMobile
                  ? boxVisibility.whoIAm
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                  : isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Who I Am
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    I am a{" "}
                    <strong className="text-blue-600 dark:text-blue-400">
                      BCA graduate from GNA University
                    </strong>{" "}
                    and an aspiring full-stack developer, specializing in
                    building responsive and modern web applications. I working
                    as a{" "}
                    <strong className="text-purple-600 dark:text-purple-400">
                      React.js trainee at O7 Services
                    </strong>
                    , where I'm gaining hands-on experience in real-world
                    projects.
                  </p>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Jalandhar, Punjab</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Skills */}
            <div
              ref={coreSkillsRef}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
                isMobile ? "delay-0" : "delay-400"
              } ${
                isMobile
                  ? boxVisibility.coreSkills
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                  : isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Core Skills
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    My expertise lies in{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      HTML, CSS, JavaScript(ES6+), and React.js
                    </strong>
                    , with experience using Git, GitHub, and Firebase for
                    version control and backend services. I am a quick learner
                    who adapts easily to modern development practices and new
                    technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "JavaScript",
                      "HTML5",
                      "CSS3",
                      "Git",
                      "Firebase",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Goals & Approach */}
          <div className="space-y-6">
            {/* My Approach */}
            <div
              ref={passionRef}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
                isMobile ? "delay-0" : "delay-500"
              } ${
                isMobile
                  ? boxVisibility.passion
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                  : isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    My Passion
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    I'm passionate about creating{" "}
                    <strong className="text-emerald-600 dark:text-emerald-400">
                      clean, user-friendly interfaces
                    </strong>{" "}
                    and optimizing web performance. I love transforming ideas
                    into interactive experiences and solving complex problems
                    through elegant code solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Goals */}
            <div
              ref={goalsRef}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
                isMobile ? "delay-0" : "delay-600"
              } ${
                isMobile
                  ? boxVisibility.goals
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                  : isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Current Goals
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Currently, I'm focusing on{" "}
                    <strong className="text-purple-600 dark:text-purple-400">
                      frontend development roles
                    </strong>
                    , aiming to expand my backend knowledge to become a complete
                    full-stack developer. My goal is to contribute to meaningful
                    projects while continuously learning and growing in the tech
                    industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Touch */}
            <div
              ref={beyondCodeRef}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
                isMobile ? "delay-0" : "delay-700"
              } ${
                isMobile
                  ? boxVisibility.beyondCode
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                  : isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    Beyond Code
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Outside of coding, I enjoy exploring{" "}
                    <strong className="text-amber-600 dark:text-amber-400">
                      UI/UX trends
                    </strong>{" "}
                    and building small side projects to experiment with new
                    technologies. I believe in continuous learning and staying
                    updated with the latest developments in web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div
            ref={educationRef}
            className={`bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
              isMobile ? "delay-0" : "delay-800"
            } ${
              isMobile
                ? boxVisibility.education
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                : isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {/* BCA */}
              <div className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    2022 - Present
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  GNA University, Punjab
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Comprehensive education in computer applications with focus on
                  web development, programming fundamentals, and software
                  engineering principles.
                </p>
              </div>

              {/* 12th Grade */}
              <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-400 rounded-full"></div>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Completed 2021
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  12th Grade
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-2">
                  St. Soldier Divine Public School
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Strong foundation in mathematics and science, developing
                  analytical thinking skills essential for programming.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            ref={experienceRef}
            className={`bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 transition-all duration-700 ${
              isMobile ? "delay-0" : "delay-900"
            } ${
              isMobile
                ? boxVisibility.experience
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                : isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-6">
              {/* Current Internship */}
              <div className="relative pl-6 border-l-2 border-emerald-200 dark:border-emerald-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Current
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                    Active
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  React.js Trainee
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  O7 Services
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  Gaining hands-on experience in real-world React.js projects,
                  working with modern development practices and contributing to
                  client solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "JavaScript",
                    "Team Collaboration",
                    "Project Development",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Future Goals */}
              <div className="relative pl-6 border-l-2 border-dashed border-slate-300 dark:border-slate-600">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                <div className="flex items-center space-x-2 mb-2">
                  <Rocket className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    Next Step
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Frontend Developer Role
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Seeking opportunities to contribute to innovative projects
                  while expanding into full-stack development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
