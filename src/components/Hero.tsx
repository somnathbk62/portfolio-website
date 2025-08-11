import React from "react";
import {
  Download,
  Mail,
  ArrowDown,
  Sparkles,
  Code2,
  Palette,
} from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden px-3 sm:px-4 lg:px-6 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-blue-50/30 before:to-transparent before:pointer-events-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-blue-200/50 after:to-transparent dark:after:via-slate-700/50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-32 h-32 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 w-32 h-32 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-br from-orange-400/15 to-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col pt-4 sm:pt-6 lg:pt-8">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center w-full">
          {/* Content */}
          <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-5 animate-fade-in order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-orange-100 dark:from-blue-900/40 dark:to-orange-900/40 rounded-full border border-blue-200 dark:border-blue-700/50">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse mr-1.5 sm:mr-2"></div>
              <span className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Hello, I'm{" "}
                <span className="relative block sm:inline">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 animate-gradient-x">
                    Somnath Bk
                  </span>
                  <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 rounded-full transform scale-x-0 animate-scale-x delay-1000"></div>
                </span>
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                <span className="text-center sm:text-left">
                  Aspiring Frontend Developer
                </span>
                <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">
                  |
                </span>
                <span className="text-center sm:text-left">BCA Graduate</span>
                <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">
                  |
                </span>
                <span className="text-center sm:text-left">
                  Passionate Coder
                </span>
                <Code2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-500 flex-shrink-0" />
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              A dedicated frontend developer passionate about creating engaging
              web experiences and solving real-world problems through code.
              Currently pursuing BCA at GNA University with hands-on experience
              in React.js and modern web technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-xs sm:text-sm"
              >
                <div className="flex items-center justify-center">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover:animate-bounce" />
                  Let's Connect
                </div>
              </button>
              <a
                href="/resuma.pdf"
                download
                className="group px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-xl sm:rounded-2xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-xs sm:text-sm"
              >
                <div className="flex items-center justify-center">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover:animate-bounce" />
                  Download Resume
                </div>
              </a>
            </div>
          </div>

          {/* Enhanced Profile Picture Area */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2">
            <div className="relative">
              {/* Main profile container - Improved mobile sizes */}
              <div className="relative w-52 h-52 xs:w-60 xs:h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 animate-spin-slow"></div>
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-orange-400 via-purple-500 to-blue-400 animate-spin-reverse"></div>

                {/* Profile picture container */}
                <div className="absolute inset-2 bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center space-y-2 sm:space-y-4 lg:block lg:space-y-0">
                    <div className="w-44 h-44 xs:w-52 xs:h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-84 xl:h-84 bg-gradient-to-br from-blue-600 to-orange-600 rounded-full mx-auto flex items-center justify-center shadow-lg overflow-hidden">
                      <img
                        src="https://i.postimg.cc/SKC2Lg1G/Whats-App-Image-2025-07-01-at-6-21-23-PM.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover object-center rounded-full scale-110"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2 hidden lg:block">
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">
                        Web Developer
                      </p>
                      <div className="flex justify-center space-x-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text below image - Mobile only */}
                <div className="absolute -bottom-8 xs:-bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 lg:hidden">
                  <div className="text-center space-y-0.5 sm:space-y-1">
                    <p className="text-slate-600 dark:text-slate-400 text-xs xs:text-sm sm:text-base font-medium px-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full py-1">
                      Frontend Developer
                    </p>
                    <div className="flex justify-center space-x-1">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating skill badges - Better mobile positioning */}
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <span className="text-lg sm:text-xl lg:text-2xl">⚡</span>
              </div>

              <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float delay-1000 shadow-lg">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>

              <div className="absolute top-4 sm:top-6 -left-3 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float delay-500 shadow-lg">
                <Code2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>

              <div className="absolute bottom-4 sm:bottom-6 -right-3 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center animate-float delay-700 shadow-lg">
                <span className="text-xs sm:text-sm lg:text-base font-bold text-white">
                  JS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Centered at bottom of screen */}
        <div className="flex justify-center pb-4 sm:pb-6">
          <button
            onClick={scrollToAbout}
            className="flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
