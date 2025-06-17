
import React from 'react';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">
                Somnath Bk
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Aspiring Frontend Developer | BCA Graduate | Passionate Coder
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              A dedicated frontend developer passionate about creating engaging web experiences 
              and solving real-world problems through code. Currently pursuing BCA at GNA University.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="inline-block w-5 h-5 mr-2" />
                Let's Connect
              </button>
              
              <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105">
                <Download className="inline-block w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
          
          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-indigo-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">SB</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Profile Picture
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
