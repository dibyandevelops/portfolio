'use client';

import { useState } from 'react';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'full-stack-pwa', label: 'Full-Stack PWA' },
    { id: 'product-platform', label: 'Platforms' },
    { id: 'design-system', label: 'Design Systems' },
    { id: 'backend', label: 'Backend' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'ai-tooling', label: 'AI Tooling' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Production systems from LocoXperts, Restworld, UXCam, and AI-assisted engineering workflows.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium capitalize">
                    {project.category.replaceAll('-', ' ')}
                  </span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {project.performance.score}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {project.performance.metrics}
                  </p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature}>- {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
