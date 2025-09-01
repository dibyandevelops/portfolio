'use client';

import { useState } from 'react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern, scalable e-commerce solution built with Next.js 14, featuring server-side rendering, dynamic routing, and integrated payment processing.',
      image: '/api/placeholder/400/300',
      category: 'ecommerce',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Server-side rendering', 'Dynamic routing', 'Payment integration', 'Admin dashboard', 'Responsive design'],
      performance: { score: 95, metrics: 'Lighthouse Score' }
    },
    {
      id: 2,
      title: 'Design System Library',
      description: 'Comprehensive component library and design system for consistent UI development across multiple applications.',
      image: '/api/placeholder/400/300',
      category: 'design-system',
      technologies: ['React', 'Storybook', 'TypeScript', 'Styled Components', 'Figma'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Component library', 'Design tokens', 'Documentation', 'Accessibility', 'Theme support'],
      performance: { score: 98, metrics: 'Bundle Size' }
    },
    {
      id: 3,
      title: 'Real-time Dashboard',
      description: 'Interactive dashboard with real-time data visualization, built for financial analytics and monitoring.',
      image: '/api/placeholder/400/300',
      category: 'dashboard',
      technologies: ['React', 'D3.js', 'WebSocket', 'Redux', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Real-time updates', 'Data visualization', 'Interactive charts', 'Responsive layout', 'Performance optimized'],
      performance: { score: 92, metrics: 'Performance Score' }
    },
    {
      id: 4,
      title: 'Micro Frontend Architecture',
      description: 'Scalable micro frontend solution enabling multiple teams to work independently on different application modules.',
      image: '/api/placeholder/400/300',
      category: 'architecture',
      technologies: ['Module Federation', 'React', 'Webpack 5', 'TypeScript', 'Docker'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Module federation', 'Independent deployment', 'Shared dependencies', 'Performance monitoring', 'Team autonomy'],
      performance: { score: 89, metrics: 'Load Time' }
    },
    {
      id: 5,
      title: 'Progressive Web App',
      description: 'Offline-first PWA with advanced caching strategies and native app-like experience.',
      image: '/api/placeholder/400/300',
      category: 'pwa',
      technologies: ['React', 'Service Workers', 'IndexedDB', 'Workbox', 'PWA Manifest'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Offline support', 'Push notifications', 'App-like experience', 'Background sync', 'Installable'],
      performance: { score: 96, metrics: 'PWA Score' }
    },
    {
      id: 6,
      title: 'Performance Monitoring Tool',
      description: 'Comprehensive web performance monitoring and analytics platform for development teams.',
      image: '/api/placeholder/400/300',
      category: 'tools',
      technologies: ['Next.js', 'Web Vitals API', 'Chart.js', 'PostgreSQL', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Performance metrics', 'Real-time monitoring', 'Alert system', 'Historical data', 'Team collaboration'],
      performance: { score: 94, metrics: 'Core Web Vitals' }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'design-system', label: 'Design Systems' },
    { id: 'dashboard', label: 'Dashboards' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'pwa', label: 'PWA' },
    { id: 'tools', label: 'Tools' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Showcasing innovative solutions and architectural excellence across various domains
          </p>
        </div>

        {/* Filter Buttons */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center">
                <div className="text-center text-slate-500 dark:text-slate-400">
                  <svg className="w-24 h-24 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  </svg>
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Performance Score */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {project.performance.metrics}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    {project.performance.score}%
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 text-center py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Let's collaborate on your next project and create something extraordinary together.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
