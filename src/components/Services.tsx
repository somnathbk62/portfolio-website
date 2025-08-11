import React from "react";
import {
  Code,
  Smartphone,
  Palette,
  Rocket,
  Sparkles,
  Globe,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Crafting dynamic, responsive web applications with cutting-edge JavaScript frameworks and modern development practices.",
      icon: <Code className="w-8 h-8" />,
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "Vite",
      ],
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Responsive Design",
      description:
        "Building mobile-first, cross-platform experiences that adapt beautifully to any screen size or device.",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: [
        "CSS Grid & Flexbox",
        "Mobile-First",
        "Progressive Web Apps",
        "Cross-Browser",
        "Touch Interfaces",
      ],
      color: "emerald",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Transforming designs into pixel-perfect, accessible interfaces with smooth animations and intuitive interactions.",
      icon: <Palette className="w-8 h-8" />,
      technologies: [
        "Figma to Code",
        "Design Systems",
        "Accessibility (a11y)",
        "Micro-interactions",
        "Component Libraries",
      ],
      color: "orange",
      gradient: "from-orange-500 to-pink-600",
    },
    {
      title: "Performance & SEO",
      description:
        "Optimizing applications for blazing-fast performance, superior user experience, and search engine visibility.",
      icon: <Rocket className="w-8 h-8" />,
      technologies: [
        "Core Web Vitals",
        "Bundle Optimization",
        "SEO Best Practices",
        "Performance Monitoring",
        "Lighthouse Audits",
      ],
      color: "violet",
      gradient: "from-violet-500 to-purple-600",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      indigo: {
        bg: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50",
        iconBg: "bg-gradient-to-r from-indigo-500 to-purple-600",
        badge:
          "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/50",
        glow: "group-hover:shadow-indigo-500/25",
      },
      emerald: {
        bg: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50",
        iconBg: "bg-gradient-to-r from-emerald-500 to-teal-600",
        badge:
          "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700/50",
        glow: "group-hover:shadow-emerald-500/25",
      },
      orange: {
        bg: "bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950/50 dark:to-pink-950/50",
        iconBg: "bg-gradient-to-r from-orange-500 to-pink-600",
        badge:
          "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-700/50",
        glow: "group-hover:shadow-orange-500/25",
      },
      violet: {
        bg: "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/50 dark:to-purple-950/50",
        iconBg: "bg-gradient-to-r from-violet-500 to-purple-600",
        badge:
          "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700/50",
        glow: "group-hover:shadow-violet-500/25",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.8) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 lg:mb-6">
            <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4 lg:mb-6 leading-tight">
            Services & Capabilities
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into exceptional digital experiences with modern
            web technologies
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div
                key={index}
                className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300/80 dark:hover:border-gray-600/80 transition-all duration-500 hover:shadow-2xl ${colors.glow} hover:-translate-y-1 lg:hover:-translate-y-2`}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 ${colors.bg} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6 lg:mb-8">
                    <div
                      className={`w-14 h-14 lg:w-16 lg:h-16 ${colors.iconBg} rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 w-14 h-14 lg:w-16 lg:h-16 ${colors.iconBg} rounded-xl lg:rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Title with hover effect */}
                  <div className="flex items-start justify-between mb-3 lg:mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-800 dark:group-hover:from-white dark:group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300 leading-tight pr-2">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                  </div>

                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-6 lg:mb-8 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Technologies with modern badges */}
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1.5 lg:px-4 lg:py-2 ${colors.badge} rounded-lg lg:rounded-xl text-xs lg:text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Career Focus Section - Compact & Attractive */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background with modern gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl lg:rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90 rounded-2xl lg:rounded-3xl backdrop-blur-sm"></div>

          {/* Content */}
          <div className="relative p-6 lg:p-8 text-white text-center">
            {/* Header */}
            <div className="inline-flex items-center justify-center p-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 lg:mb-6">
              <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>

            <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Career Focus
            </h3>

            <p className="text-base lg:text-lg mb-6 lg:mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Seeking opportunities to contribute to innovative projects while
              continuing to grow as a developer.
            </p>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-6 lg:mb-8">
              {/* Seeking Section */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 lg:p-5 rounded-xl hover:bg-white/15 transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base lg:text-lg font-bold mb-3 text-green-300">
                  Currently Seeking
                </h4>
                <ul className="space-y-1.5 text-left text-white/90 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Frontend Development Internships</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Junior React Developer Roles</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Entry-level JavaScript Positions</span>
                  </li>
                </ul>
              </div>

              {/* Learning Section */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 lg:p-5 rounded-xl hover:bg-white/15 transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base lg:text-lg font-bold mb-3 text-purple-300">
                  Currently Learning
                </h4>
                <ul className="space-y-1.5 text-left text-white/90 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Advanced React Patterns</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Node.js & Express</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Database Technologies</span>
                  </li>
                </ul>
              </div>

              {/* Goals Section */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 lg:p-5 rounded-xl hover:bg-white/15 transition-all duration-300 group">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base lg:text-lg font-bold mb-3 text-amber-300">
                  Career Goals
                </h4>
                <ul className="space-y-1.5 text-left text-white/90 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Full-Stack Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Open Source Contributions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 flex-shrink-0"></div>
                    <span>Tech Leadership</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Career Objective - Compact & Centered */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 lg:p-5 rounded-xl inline-block max-w-md">
              <h4 className="text-base lg:text-lg font-bold mb-2">
                Career Objective
              </h4>
              <p className="text-sm text-blue-200 font-medium">
                Aspiring Full-Stack Developer specializing in React & Modern Web
                Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
