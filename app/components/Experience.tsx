export const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Frontend Architect',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading frontend architecture for enterprise applications, mentoring development teams, and establishing coding standards.',
      achievements: [
        'Architected scalable micro-frontend solution serving 2M+ users',
        'Reduced bundle size by 40% through code splitting and optimization',
        'Led team of 12 developers across 4 different product lines',
        'Implemented design system used across 15+ applications'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Micro Frontends', 'Webpack 5', 'Docker'],
      logo: '🏢'
    },
    {
      id: 2,
      company: 'InnovateWeb Inc.',
      position: 'Lead Frontend Developer',
      duration: '2020 - 2022',
      location: 'New York, NY',
      description: 'Spearheaded frontend development for e-commerce platforms and SaaS applications.',
      achievements: [
        'Built responsive e-commerce platform with 99.9% uptime',
        'Improved Core Web Vitals scores from 65 to 95+',
        'Mentored 6 junior developers and conducted code reviews',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ],
      technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
      logo: '💻'
    },
    {
      id: 3,
      company: 'Digital Dynamics',
      position: 'Frontend Developer',
      duration: '2018 - 2020',
      location: 'Austin, TX',
      description: 'Developed user interfaces for web applications and mobile-responsive websites.',
      achievements: [
        'Created 20+ responsive websites with modern design patterns',
        'Optimized performance achieving 90+ Lighthouse scores',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Contributed to open-source projects and internal component library'
      ],
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Git', 'Webpack'],
      logo: '🎨'
    },
    {
      id: 4,
      company: 'StartupHub',
      position: 'Junior Developer',
      duration: '2016 - 2018',
      location: 'Seattle, WA',
      description: 'Started career building web applications and learning modern development practices.',
      achievements: [
        'Developed 10+ web applications from concept to deployment',
        'Learned modern JavaScript frameworks and build tools',
        'Participated in hackathons and coding competitions',
        'Built strong foundation in frontend development fundamentals'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP'],
      logo: '🚀'
    }
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
