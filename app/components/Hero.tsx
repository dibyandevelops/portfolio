'use client';

import { useEffect, useState } from 'react';

export const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Frontend Architect',
    'React Specialist',
    'UI/UX Enthusiast',
    'Performance Optimizer',
    'Team Leader'
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(typingInterval);
  }, [isTyping, roles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <span className="text-blue-600 dark:text-blue-400 font-medium text-lg">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Dibyan Maharjan
          </h1>

          {/* Animated Role */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <span className="text-2xl md:text-4xl font-light text-slate-700 dark:text-slate-300">
              I'm a{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                {roles[currentTextIndex]}
              </span>
              <span className={`inline-block w-1 h-8 md:h-10 bg-blue-600 dark:bg-blue-400 ml-2 transition-opacity duration-300 ${
                isTyping ? 'opacity-100' : 'opacity-0'
              }`}></span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional user experiences through innovative frontend architecture,
            performance optimization, and scalable design systems. Leading teams to build
            the next generation of web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</div>
              <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
              <div className="text-slate-600 dark:text-slate-400">Team Members Led</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
