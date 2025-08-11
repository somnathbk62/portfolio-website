import React from "react";
import {
  Code2,
  Palette,
  Database,
  GitBranch,
  Wrench,
  Zap,
  Star,
  CheckCircle,
} from "lucide-react";

const Skills = () => {
  // Main technical skills with proficiency levels
  const mainSkills = [
    { name: "HTML5", level: 90, category: "Frontend" },
    { name: "CSS3", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "React.js", level: 75, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Styling" },
    { name: "Git & GitHub", level: 80, category: "Version Control" },
    { name: "Firebase", level: 75, category: "Backend" },
    { name: "Node.js", level: 65, category: "Backend" },
  ];

  // Technology categories
  const techStacks = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript ES6+",
        "React.js",
        "Responsive Design",
      ],
    },
    {
      title: "Styling & Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      skills: [
        "Tailwind CSS",
        "Flexbox & Grid",
        "Animations",
        "UI/UX Implementation",
      ],
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      skills: [
        "Firebase",
        "Node.js & Express",
        "REST APIs",
        "Real-time Database",
      ],
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
      skills: ["Git & GitHub", "VS Code", "Browser DevTools", "Deployment"],
    },
  ];

  // Key strengths
  const strengths = [
    "Clean, maintainable code",
    "Responsive web design",
    "Problem-solving mindset",
    "Quick learner",
    "Team collaboration",
    "Attention to detail",
  ];

  return (
    <div className="py-5 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate Frontend Developer specializing in modern web
            technologies and user experience
          </p>
        </div>

        {/* Main Skills with Progress Bars */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </span>
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden group-hover:from-blue-600 group-hover:to-purple-600"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stacks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{stack.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {stack.title}
                </h4>
                <div className="space-y-2">
                  {stack.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
          <div className="text-center mb-8">
            <Star className="w-8 h-8 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Key Strengths</h3>
            <p className="text-blue-100">
              What makes me effective as a developer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <span className="text-white font-medium">{strength}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                Ready to collaborate?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Let's build something amazing together
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
