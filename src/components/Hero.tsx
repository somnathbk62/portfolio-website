
import React from 'react';
import { Download, Mail, ArrowDown, Sparkles, Code2, Palette } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-100 to-teal-100 dark:from-indigo-900/50 dark:to-teal-900/50 rounded-full border border-indigo-200 dark:border-indigo-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hello, I'm{' '}
                <span className="relative block sm:inline">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 animate-gradient-x">
                    Somnath Bk
                  </span>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 rounded-full transform scale-x-0 animate-scale-x delay-1000"></div>
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2 text-base sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" />
                <span className="text-center sm:text-left">Aspiring Frontend Developer</span>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <span className="text-center sm:text-left">BCA Graduate</span>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <span className="text-center sm:text-left">Passionate Coder</span>
                <Code2 className="w-4 h-4 sm:w-6 sm:h-6 text-indigo-500 flex-shrink-0" />
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              A dedicated frontend developer passionate about creating engaging web experiences 
              and solving real-world problems through code. Currently pursuing BCA at GNA University 
              with hands-on experience in React.js and modern web technologies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl text-sm sm:text-base"
              >
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                  Let's Connect
                </div>
              </button>
              
              <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-semibold rounded-2xl hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <div className="flex items-center justify-center">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </div>
              </button>
            </div>

            {/* Scroll indicator */}
            <button
              onClick={scrollToAbout}
              className="hidden lg:flex items-center justify-center mt-8 sm:mt-12 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer group"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium">Scroll to explore</span>
                <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-indigo-600" />
              </div>
            </button>
          </div>
          
          {/* Enhanced Profile Picture Area */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2">
            <div className="relative">
              {/* Main profile container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-teal-400 animate-spin-slow"></div>
                <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-br from-teal-400 via-blue-500 to-indigo-400 animate-spin-reverse"></div>
                
                {/* Profile picture container */}
                <div className="absolute inset-2 sm:inset-4 bg-white dark:bg-gray-800 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-2 sm:space-y-4">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-indigo-600 to-teal-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                      <span className="text-2xl sm:text-4xl font-bold text-white">SB</span>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium">
                        Frontend Developer
                      </p>
                      <div className="flex justify-center space-x-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating skill badges - Responsive positioning */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <span className="text-lg sm:text-2xl">⚡</span>
              </div>

              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center animate-float delay-1000 shadow-lg">
                <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>

              <div className="absolute top-4 sm:top-8 -left-4 sm:-left-8 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center animate-float delay-500 shadow-lg">
                <Code2 className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </div>

              <div className="absolute bottom-4 sm:bottom-8 -right-4 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center animate-float delay-700 shadow-lg">
                <span className="text-xs sm:text-sm font-bold text-white">JS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
