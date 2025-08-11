import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark" : ""
      }`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-blue-200/50 dark:border-slate-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex-shrink-0">
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Somnath Bk
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {[
                  "Home",
                  "About",
                  "Skills",
                  "Projects",
                  "Services",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 lg:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 dark:hover:bg-slate-800/50 relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 group-hover:w-full group-hover:left-0 rounded-full"></span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-all duration-200 group"
              >
                {isDark ? (
                  <Sun
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-300"
                  />
                ) : (
                  <Moon
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:-rotate-12 transition-transform duration-300"
                  />
                )}
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800/50 transition-all duration-200"
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-blue-200/50 dark:border-slate-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Services",
                "Contact",
              ].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800/50 block px-3 py-2 rounded-lg text-base font-medium w-full text-left transition-all duration-200 relative group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-10 bg-slate-50 dark:bg-slate-900">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="px-4 sm:px-6 lg:px-8">
          <About />
        </section>

        <section id="skills" className="px-4 sm:px-6 lg:px-8">
          <Skills />
        </section>

        <section id="projects" className="px-4 sm:px-6 lg:px-8">
          <Projects />
        </section>

        <section id="services" className="px-4 sm:px-6 lg:px-8">
          <Services />
        </section>

        <section id="contact" className="px-4 sm:px-6 lg:px-8">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-blue-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                © 2024 Somnath Bk. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="mailto:somnathbk62@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800/50 group"
              >
                <Mail
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="https://linkedin.com/in/somnathbk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800/50 group"
              >
                <Linkedin
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="https://github.com/somnathbk62"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800/50 group"
              >
                <Github
                  size={18}
                  className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
