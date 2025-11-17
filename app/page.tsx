import Link from "next/link";
import { blogsData, experienceData, projectsData } from "@/lib/data";

const anchorLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#writing", label: "Writing" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const resourceLinks = [
  { href: "/projects", label: "Project case studies", meta: "Architecture & delivery" },
  { href: "/experience", label: "Resume snapshot", meta: "Teams, roles, impact" },
  { href: "/blogs", label: "Notes & writing", meta: "Playbooks for teams" },
  { href: "mailto:dibyan.maharjan@gmail.com", label: "Say hello", meta: "Consulting & collaborations" },
];

const highlightStats = [
  { value: "7 years", label: "Leading product builds" },
  { value: "80% fewer", label: "Support tickets after UI revamps" },
  { value: "90+ CLS", label: "Core Web Vital score on flagship apps" },
];

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  const recentPosts = blogsData.slice(0, 3);
  const recentExperience = experienceData.slice(0, 2);

  return (
    <main className="bg-[var(--sand)] text-[var(--ink)]">
      <header className="section-shell space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="mono-label">Dibyan Maharjan — frontend engineering lead</p>
          <div className="nav-shell">
            {anchorLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
              Calm interfaces. Reliable delivery. Friendly tooling.
            </p>
            <h1 className="text-4xl leading-tight tracking-[-0.05em] text-[var(--ink)] sm:text-5xl">
              I help product teams design, build, and ship performant web experiences with less drama.
            </h1>
            <p className="max-w-2xl text-lg text-[var(--muted)]">
              Currently leading frontend architecture for distributed teams. I translate research into
              usable product flows, mentor engineers, and document the process through writing and
              workshops.
            </p>
            <div className="flex flex-wrap gap-8 pt-4">
              {highlightStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="mono-label mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card space-y-6">
            <div className="space-y-2">
              <p className="mono-label">Working on</p>
              <p className="text-xl font-medium">Design systems & hiring partner for EU SaaS teams.</p>
            </div>
            <div>
              {resourceLinks.map((item) => (
                <a key={item.label} href={item.href} className="pill-link">
                  <span>{item.label}</span>
                  <span>{item.meta}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section-shell space-y-8">
        <p className="section-heading">About</p>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="surface-card is-quiet space-y-5">
            <p>
              I care about predictable releases, accessible UI systems, and shipping features that feel
              effortless. My toolkit spans Next.js, TypeScript, GraphQL, and the tooling that keeps
              teams healthy: design tokens, automated tests, observability, and crisp documentation.
            </p>
            <p>
              Beyond code, I coach engineers through architecture spikes, help product managers
              sharpen specs, and partner with design to keep UI quality bar high.
            </p>
          </div>
          <div className="surface-card space-y-4">
            <p className="mono-label">Principles</p>
            <ul className="list-reset space-y-3">
              <li>• Small batch shipping over hero launches</li>
              <li>• Instrument decisions—measure before guessing</li>
              <li>• Teach the system, not the feature branch</li>
              <li>• Accessibility is table stakes, not a stretch goal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section id="projects" className="section-shell space-y-8">
        <p className="section-heading">Selected work</p>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div key={project.id} className="surface-card space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag-chip capitalize">{project.category}</span>
                <p className="mono-label">Score {project.performance.score}%</p>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
              <p className="text-[var(--muted)]">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tag-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2 text-sm font-medium">
                <Link href={project.liveUrl} className="inline-link" prefetch={false}>
                  Live view
                </Link>
                <Link href={project.githubUrl} className="inline-link" prefetch={false}>
                  Case study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section id="writing" className="section-shell space-y-8">
        <p className="section-heading">Writing</p>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link href={`/blogs/${post.slug}`} key={post.slug} className="surface-card block space-y-2">
              <p className="mono-label">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                • {post.readTime} min read
              </p>
              <h3 className="text-2xl font-semibold tracking-tight">{post.title}</h3>
              <p className="text-[var(--muted)]">{post.excerpt}</p>
            </Link>
          ))}
          <Link href="/blogs" className="inline-link text-sm font-semibold uppercase tracking-[0.3em]">
            View all articles
          </Link>
        </div>
      </section>

      <section id="experience" className="section-shell space-y-8">
        <p className="section-heading">Experience</p>
        <div className="space-y-6">
          {recentExperience.map((experience) => (
            <div key={experience.id} className="surface-card space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-2xl font-semibold">{experience.position}</p>
                  <p className="text-base text-[var(--muted)]">{experience.company}</p>
                </div>
                <p className="mono-label text-right">
                  {experience.duration}
                  <br />
                  {experience.location}
                </p>
              </div>
              <p className="text-[var(--muted)]">{experience.description}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Highlights</p>
              <ul className="list-reset space-y-2 text-sm">
                {experience.achievements.slice(0, 2).map((achievement) => (
                  <li key={achievement}>— {achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link href="/experience" className="inline-link text-sm font-semibold uppercase tracking-[0.3em]">
          Full timeline
        </Link>
      </section>

      <section id="contact" className="section-shell space-y-8">
        <p className="section-heading">Contact</p>
        <div className="surface-card space-y-4">
          <p>
            Available for fractional leadership, design system engagements, and audits focused on
            performance or developer experience.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://calendly.com/dibyan/30min" className="inline-link" target="_blank" rel="noreferrer">
              Calendly
            </a>
            <a href="https://www.linkedin.com/in/dibyansoftwaredev" className="inline-link" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/dibyandevelops" className="inline-link" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
