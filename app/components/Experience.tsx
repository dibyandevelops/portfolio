import { experienceData } from "@/lib/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Full-stack product engineering across LocoXperts, Restworld, and UXCam.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 hidden md:block" />

          <div className="space-y-12">
            {experienceData.map((experience) => (
              <div key={experience.id} className="relative">
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg hidden md:block" />

                <div className="md:ml-20 bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {experience.position}
                      </h3>
                      <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </p>
                    </div>
                    <div className="mt-4 text-left md:mt-0 md:text-right">
                      <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
                        {experience.duration}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
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

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            ["5,000+", "Production commits across LocoXperts, Restworld, and UXCam"],
            ["30,000+", "Monthly active users served through Restworld platform work"],
            ["200+", "Solo commits behind the LocoXperts production PWA"],
          ].map(([value, label]) => (
            <div key={value} className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{value}</div>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
