import Link from "next/link";
import { projectsData } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="bg-[var(--sand)] text-[var(--ink)]">
      <section className="section-shell space-y-10">
        <div className="space-y-3">
          <p className="section-heading">Projects & initiatives</p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Systems work, design system rollouts, and product launches I led or co-led.
          </h1>
          <p className="text-[var(--muted)]">
            Every project pairs measurable product impact with an engineering playbook—architecture
            notes, team onboarding, and instrumentation so the next release is calmer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project) => (
            <article key={project.id} className="surface-card space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="tag-chip capitalize">{project.category}</span>
                <span className="mono-label">{project.performance.metrics}</span>
                <span className="text-[var(--muted)]">{project.performance.score}%</span>
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{project.title}</h2>
                <p className="mt-2 text-[var(--muted)]">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 text-sm">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag-chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-2 text-sm text-[var(--muted)]">
                <p className="mono-label">Key capabilities</p>
                <ul className="list-reset space-y-1">
                  {project.features.slice(0, 4).map((feature) => (
                    <li key={feature}>— {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-6 text-sm font-semibold uppercase tracking-[0.25em]">
                <Link href={project.liveUrl} className="inline-link" prefetch={false}>
                  Live
                </Link>
                <Link href={project.githubUrl} className="inline-link" prefetch={false}>
                  Notes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

