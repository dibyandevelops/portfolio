import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate about creating scalable, performant, and user-centric web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <Image alt="profile-pic" width={305} height={305} className="rounded-2xl" src={"/DIBYAN_PP_PHOTO-removebg.jpg"} />
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Team Members</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">99%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Frontend Architecture Expert
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                With over 6 years of experience in frontend development, I specialize in building
                scalable, high-performance web applications. My expertise lies in React ecosystem,
                Next.js, TypeScript, and modern CSS frameworks.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I lead development teams, establish coding standards, and implement best practices
                that ensure code quality, maintainability, and exceptional user experiences.
              </p>
            </div>

            {/* Key Strengths */}
            <div>
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Key Strengths
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Performance Optimization',
                  'Architecture Design',
                  'Team Leadership',
                  'Code Quality',
                  'User Experience',
                  'Scalable Solutions',
                  'Modern Technologies',
                  'Best Practices'
                ].map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-400">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                My Philosophy
              </h4>
              <p className="text-slate-700 dark:text-slate-300 italic">
                "Great frontend architecture isn't just about writing clean code—it's about creating
                systems that scale, perform, and delight users while empowering development teams
                to build faster and better."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
