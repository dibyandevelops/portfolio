'use client';

import { useState } from 'react';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Core',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js App Router', level: 92, icon: '⚡' },
        { name: 'TypeScript', level: 92, icon: '📘' },
        { name: 'JavaScript (ES6+)', level: 95, icon: '🟨' },
        { name: 'HTML5 & CSS3', level: 90, icon: '🌐' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' },
        { name: 'React Query', level: 90, icon: '📦' },
        { name: 'Redux/Zustand/Jotai', level: 88, icon: '📦' }
      ]
    },
    architecture: {
      title: 'Architecture & Data',
      skills: [
        { name: 'Monorepos (NX/Lerna)', level: 88, icon: '🏗️' },
        { name: 'SSR/ISR/SSG', level: 88, icon: '⚙️' },
        { name: 'Design Systems', level: 90, icon: '🎯' },
        { name: 'Storybook', level: 85, icon: '📖' },
        { name: 'Core Web Vitals', level: 88, icon: '🚀' },
        { name: 'GraphQL/REST', level: 86, icon: '🔗' },
        { name: 'Mapbox/MapLibre', level: 88, icon: '🗺️' },
        { name: 'SVG Visualizations', level: 88, icon: '📈' }
      ]
    },
    backend: {
      title: 'Backend & Auth',
      skills: [
        { name: 'Elixir/Phoenix', level: 82, icon: '💧' },
        { name: 'Node.js/Express', level: 82, icon: '🟢' },
        { name: 'PostgreSQL', level: 86, icon: '🐘' },
        { name: 'MongoDB', level: 78, icon: '🍃' },
        { name: 'AWS DynamoDB', level: 76, icon: '☁️' },
        { name: 'JWT/RBAC', level: 86, icon: '🔐' },
        { name: 'Google OAuth', level: 82, icon: '🔑' },
        { name: 'Firebase Phone OTP', level: 82, icon: '📱' }
      ]
    },
    ai: {
      title: 'AI & Tooling',
      skills: [
        { name: 'OpenAI Codex', level: 90, icon: '🤖' },
        { name: 'Claude', level: 90, icon: '🤖' },
        { name: 'Google Gemini', level: 84, icon: '🤖' },
        { name: 'Cursor', level: 90, icon: '⌨️' },
        { name: 'GitHub Copilot', level: 88, icon: '🤖' },
        { name: 'Agentic Workflows', level: 86, icon: '⚙️' },
        { name: 'AI Scaffolding', level: 88, icon: '🏗️' },
        { name: 'AI Content Generation', level: 84, icon: '✍️' }
      ]
    },
    tools: {
      title: 'Testing & DevOps',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '📚' },
        { name: 'Webpack/Vite', level: 85, icon: '📦' },
        { name: 'Jest & Testing Library', level: 82, icon: '🧪' },
        { name: 'Vitest', level: 82, icon: '🧪' },
        { name: 'Cypress/Selenium', level: 76, icon: '🧪' },
        { name: 'Docker/Kubernetes', level: 72, icon: '☸️' },
        { name: 'Vercel', level: 86, icon: '☁️' },
        { name: 'Bitbucket Pipelines', level: 82, icon: '🔄' },
        { name: 'PWA Service Workers', level: 84, icon: '📲' }
      ]
    },
    soft: {
      title: 'Observability & Infra',
      skills: [
        { name: 'Sentry', level: 86, icon: '📡' },
        { name: 'Datadog', level: 82, icon: '📈' },
        { name: 'Mixpanel/Hotjar', level: 80, icon: '📊' },
        { name: 'Vercel Analytics', level: 84, icon: '📊' },
        { name: 'Resend/Nodemailer', level: 82, icon: '✉️' },
        { name: 'Neon PostgreSQL', level: 84, icon: '🐘' },
        { name: 'Strava API', level: 78, icon: '🔌' },
        { name: 'Google Places API', level: 80, icon: '🗺️' }
      ]
    }
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 80) return 'from-blue-400 to-cyan-500';
    if (level >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-slate-400 to-gray-500';
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            CV-backed skills across full-stack product engineering, data visualization, auth, DevOps, observability, and AI-assisted delivery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600'
              }`}
            >
              {skillCategories[category as keyof typeof skillCategories].title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="text-center">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              I'm constantly exploring new technologies and methodologies to stay at the forefront
              of frontend development. Currently focused on:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Web Components', 'WebAssembly', 'Edge Computing', 'AI Integration', 'Accessibility', 'Performance Metrics'].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
