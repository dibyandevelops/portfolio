export const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Restworld',
      position: 'Senior Frontend Engineer',
      duration: 'Jan/2023 - Aug/2025',
      location: 'Remote - EU',
      description:
        'Leading frontend architecture for enterprise applications, mentoring development teams, and establishing coding standards.',
      achievements: [
        'Owned end-to-end delivery of Restworld’s web platform, launching core modules (interactive map, Kanban, multistep wizard) that increased task completion rate by 85% and cut support tickets by 80%.',
        'Significantly contributed to backend, successfully managing API integration and development, and schema and DB migrations.',
        'Optimized performance (SSR/ISR, code-splitting, caching) to improve Core Web Vitals (LCP from 6s to 2.5s) and Lighthouse scores to 90/100, reducing bounce by 60%.',
        'Introduced a reusable component library and design tokens, decreasing UI defects by 60% and accelerating feature delivery by 70%.',
        'Strengthened CI/CD on Vercel/Bitbucket with preview environments and automated tests, reducing mean lead time from 20 minutes to 10 minutes.',
        'Partnered with Design/PM to convert user stories into shippable increments; facilitated sprint rituals and code reviews, mentoring 4 engineers.',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'Elixir',
        'PostgreSQL',
        'Tailwind',
        'flowbite',
        'React Query',
        'jotai/Zustand',
        'SSR/SSG/ISR',
        'Vercel',
        'Webpack',
        'Material UI',
        'react-hook-form',
        'monorepos',
        'mapbox',
        'map clustering',
        'AWS DynamoDB',
        'GraphQL',
        'internationalization',
        'SEO',
        'nx/lerna',
        'yup validation',
      ],
      logo: '',
    },
    {
      id: 2,
      company: 'UXCam Inc.',
      position: 'Frontend Engineer',
      duration: 'Jan/2019 - Dec/2022',
      location: 'Kathmandu, Nepal',
      description:
        'Developed responsive and dynamic, web-based analytical dashboard',
      achievements: [
        'Developed a responsive and dynamic web-based customer dashboard for a SaaS application.',
        'Architected a funnel visualization tool from scratch with raw SVGs — eliminating third-party plugin limitations.',
        'Collaborated with the backend team to ensure that the API endpoint matches the requirements of the frontend.',
        'Built real-time data visualizations (tables, charts, heatmaps) using HighCharts, SVG, and custom caching.',
        'Worked on a customizable dashboard written in TypeScript, GraphQL, and Elixir.',
        'Architected and constructed a data structure to detail a wide range of micro-level dynamic top-level filters.',
        'Implemented a data architecture for complex filters, powering advanced analytics features.',
        'Collaborated with backend teams (GraphQL, Elixir, Python, PHP , Express APIs) to align API and frontend requirements.',
        'Optimized app performance, ensuring scalability for large datasets & streaming analytics.',
        'Integrated event-tracking and analytics tools: Datadog, Rollbar, Planhat, Hotjar, Mixpanel, Intercom, etc.',
      ],
      technologies: [
        'next.js',
        'JavaScript',
        'react-query',
        'Redux',
        'redux-thunk',
        'Redux saga',
        'Highcharts',
        'git',
        'node.js',
        'microservices',
        'express',
        'mongodb',
      ],
      logo: '',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A journey of growth, leadership, and technical excellence in frontend development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg hidden md:block"></div>

                <div className="md:ml-20 bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <div className="text-4xl">{experience.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {experience.position}
                        </h3>
                        <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                        {experience.duration}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 dark:text-slate-400">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Experience Highlights */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Awards & Recognition
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Multiple performance awards, hackathon wins, and recognition for technical excellence
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Certifications
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                AWS Certified Developer, Google Cloud Professional, and various frontend technology certifications
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Global Impact
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Applications used by millions of users across 50+ countries worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
