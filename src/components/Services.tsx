
import React from 'react';
import { Code, Smartphone, Palette, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive web applications using modern JavaScript frameworks like React.js, with focus on clean code and optimal performance.",
      icon: <Code className="w-12 h-12" />,
      technologies: ["HTML5/CSS3", "JavaScript ES6+", "React.js", "Responsive Design"],
      color: "indigo"
    },
    {
      title: "Responsive Web Design",
      description: "Creating beautiful, mobile-first designs that work seamlessly across all devices and screen sizes using modern CSS techniques.",
      icon: <Smartphone className="w-12 h-12" />,
      technologies: ["CSS Grid", "Flexbox", "Media Queries", "Mobile-First Design"],
      color: "teal"
    },
    {
      title: "UI/UX Implementation",
      description: "Translating design mockups into pixel-perfect, interactive web interfaces with attention to user experience and accessibility.",
      icon: <Palette className="w-12 h-12" />,
      technologies: ["Figma to Code", "Accessibility", "User Experience", "Design Systems"],
      color: "amber"
    },
    {
      title: "Web Performance",
      description: "Optimizing web applications for speed and performance, ensuring fast loading times and smooth user interactions.",
      icon: <Rocket className="w-12 h-12" />,
      technologies: ["Code Optimization", "Bundle Analysis", "Performance Metrics", "SEO Basics"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        icon: "text-indigo-600 dark:text-indigo-400",
        badge: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
      },
      teal: {
        bg: "bg-teal-50 dark:bg-teal-900/20",
        icon: "text-teal-600 dark:text-teal-400",
        badge: "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"
      },
      amber: {
        bg: "bg-amber-50 dark:bg-amber-900/20",
        icon: "text-amber-600 dark:text-amber-400",
        badge: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200"
      },
      pink: {
        bg: "bg-pink-50 dark:bg-pink-900/20",
        icon: "text-pink-600 dark:text-pink-400",
        badge: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services & Capabilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here's what I can help you with based on my current skills and expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <div className={colors.icon}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-3 py-1 ${colors.badge} rounded-full text-sm font-medium`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-indigo-600 to-teal-600 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Current Availability
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 opacity-90">
              I'm currently <strong>not offering freelance services</strong> as I'm focused on learning 
              and building my portfolio. However, I'm actively seeking <strong>internship opportunities</strong> 
              and entry-level positions where I can contribute and grow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">🎯 Currently Seeking</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Frontend Development Internships</li>
                  <li>• Junior React Developer Roles</li>
                  <li>• Entry-level JavaScript Positions</li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="font-semibold mb-2">🌱 Currently Learning</h4>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Advanced React Patterns</li>
                  <li>• Backend Development</li>
                  <li>• Full-Stack Architecture</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-lg font-medium">
                Career Objective: <span className="text-amber-300">Aspiring React/JavaScript Developer</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
