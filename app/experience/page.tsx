import { experienceData } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <main className="bg-[var(--sand)] text-[var(--ink)]">
      <section className="section-shell space-y-10">
        <div className="space-y-3">
          <p className="section-heading">Experience</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Building and leading frontend teams across SaaS, analytics, and developer tooling.
          </h1>
          <p className="text-[var(--muted)]">
            Highlights from the last several years—pairing delivery leadership with hands-on shipping,
            hiring, and coaching.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((experience) => (
            <article key={experience.id} className="surface-card space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold tracking-tight">{experience.position}</p>
                  <p className="text-base text-[var(--muted)]">{experience.company}</p>
                </div>
                <div className="text-right">
                  <p className="mono-label">{experience.duration}</p>
                  <p className="text-sm text-[var(--muted)]">{experience.location}</p>
                </div>
              </div>

              <p className="text-[var(--muted)]">{experience.description}</p>

              <div className="space-y-2">
                <p className="mono-label">Impact</p>
                <ul className="list-reset space-y-2 text-sm">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>— {achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <p className="mono-label">Toolkit</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="tag-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

