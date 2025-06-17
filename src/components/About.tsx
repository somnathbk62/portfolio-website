
import React from 'react';
import { GraduationCap, Target, User } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my journey, education, and aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Bio</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate frontend developer with a strong foundation in modern web technologies. 
                My journey in programming started with curiosity and has evolved into a deep love for 
                creating engaging, user-friendly web applications. I believe in writing clean, efficient 
                code and continuously learning new technologies to stay ahead in this rapidly evolving field.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-teal-600 dark:text-teal-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Career Goals</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Currently learning full-stack web development with a focus on JavaScript and React. 
                My immediate goal is to secure a frontend developer role where I can contribute 
                meaningful solutions while growing into a full-stack engineer.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
                  Frontend Focus
                </span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium">
                  Full-Stack Aspiration
                </span>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">
                  Continuous Learning
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Educational Background</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                    GNA University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    2022 - Present
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Pursuing comprehensive education in computer applications with focus on 
                    web development, programming fundamentals, and software engineering principles.
                  </p>
                </div>
                
                <div className="border-l-4 border-teal-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    12th Grade
                  </h4>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">
                    St. Soldier Divine Public School
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Completed 2021
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Built strong foundation in mathematics and science, developing analytical 
                    thinking skills essential for programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
