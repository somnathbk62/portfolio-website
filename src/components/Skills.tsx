import React from "react";
import { Code, Palette, Settings, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Skills",
      icon: <Code className="w-8 h-8" />,
      color: "indigo",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "React.js", level: 75 },
      ],
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-8 h-8" />,
      color: "teal",
      skills: [
        { name: "Responsive Design", level: 85 },
        { name: "Flexbox & Grid", level: 90 },
        { name: "Media Queries", level: 88 },
        { name: "UI/UX Principles", level: 70 },
      ],
    },
    {
      title: "Tools & Tech",
      icon: <Settings className="w-8 h-8" />,
      color: "amber",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 60 },
      ],
    },
    {
      title: "Programming",
      icon: <Brain className="w-8 h-8" />,
      color: "pink",
      skills: [
        { name: "C Programming", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "Problem Solving", level: 85 },
      ],
    },
  ];

  const softSkills = [
    "Collaboration",
    "Communication",
    "Eagerness to learn",
    "Problem-solving",
    "Time Management",
    "Adaptability",
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900",
        text: "text-indigo-800 dark:text-indigo-200",
        icon: "text-indigo-600 dark:text-indigo-400",
        progress: "bg-indigo-600",
      },
      teal: {
        bg: "bg-teal-100 dark:bg-teal-900",
        text: "text-teal-800 dark:text-teal-200",
        icon: "text-teal-600 dark:text-teal-400",
        progress: "bg-teal-600",
      },
      amber: {
        bg: "bg-amber-100 dark:bg-amber-900",
        text: "text-amber-800 dark:text-amber-200",
        icon: "text-amber-600 dark:text-amber-400",
        progress: "bg-amber-600",
      },
      pink: {
        bg: "bg-pink-100 dark:bg-pink-900",
        text: "text-pink-800 dark:text-pink-200",
        icon: "text-pink-600 dark:text-pink-400",
        progress: "bg-pink-600",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="py-20 bg-gradient-to-tr from-white via-emerald-50/20 to-teal-50/30 dark:from-slate-900 dark:via-emerald-900/10 dark:to-teal-900/15 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-teal-50/30 before:to-transparent before:pointer-events-none dark:before:via-teal-900/15 after:absolute after:top-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-teal-200/50 after:to-transparent dark:after:via-teal-700/50">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(20, 184, 166, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(20, 184, 166, 0.1) 25%, transparent 25%)`,
          backgroundSize: "12px 12px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and
            competencies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  <div className={colors.icon}>{category.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`${colors.progress} h-2 rounded-full transition-all duration-500 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-teal-200/50 before:to-transparent dark:before:via-teal-700/50">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-indigo-100 to-teal-100 dark:from-indigo-900 dark:to-teal-900 p-4 rounded-xl hover:scale-105 transition-transform duration-200">
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
