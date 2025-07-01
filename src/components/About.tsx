import React from 'react';
import { GraduationCap, Target, User } from 'lucide-react';

const About = () => {
  return (
    <div>
      <style>{`
        .card {
          background: linear-gradient(135deg, #f0f4ff, #e0f7fa);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
        .icon {
          color: #4f46e5;
        }
        .heading {
          background: linear-gradient(135deg, #4f46e5, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .body-text {
          color: #374151;
        }
      `}</style>
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading mb-8">
              About Me
            </h2>
            <p className="text-xl body-text max-w-3xl mx-auto">
              Discover my journey, skills, and aspirations as a modern web developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Personal Bio */}
            <div className="card p-10 rounded-2xl">
              <div className="flex flex-col items-center text-center">
                <User className="icon w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold heading mb-4">Personal Bio</h3>
                <p className="text-lg body-text leading-relaxed">
                  I'm a passionate frontend developer with a strong foundation in modern web technologies. My journey in programming started with curiosity and has evolved into a deep love for creating engaging, user-friendly web applications.
                </p>
              </div>
            </div>

            {/* Career Goals */}
            <div className="card p-10 rounded-2xl">
              <div className="flex flex-col items-center text-center">
                <Target className="icon w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold heading mb-4">Career Goals</h3>
                <p className="text-lg body-text leading-relaxed">
                  Currently learning full-stack web development with a focus on JavaScript and React. My immediate goal is to secure a frontend developer role where I can contribute meaningful solutions while growing into a full-stack engineer.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="card p-10 rounded-2xl">
              <div className="flex flex-col items-center text-center">
                <GraduationCap className="icon w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold heading mb-4">Education</h3>
                <div className="text-lg body-text leading-relaxed">
                  <p className="mb-3"><strong>Bachelor of Computer Applications (BCA)</strong> - GNA University (2022 - Present)</p>
                  <p className="mb-3">Pursuing comprehensive education in computer applications with a focus on web development, programming fundamentals, and software engineering principles.</p>
                  <p><strong>12th Grade</strong> - St. Soldier Divine Public School (Completed 2021)</p>
                  <p>Built a strong foundation in mathematics and science, developing analytical thinking skills essential for programming.</p>
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
