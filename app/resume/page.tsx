import Link from "next/link";
import { blogsData, experienceData, projectsData } from "@/lib/data";

const contactLinks = [
  { label: "Email", href: "mailto:dibyan.softwaredev@gmail.com", value: "dibyan.softwaredev@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dibyansoftwaredev", value: "linkedin.com/in/dibyansoftwaredev" },
  { label: "Product", href: "https://locoxperts.com", value: "locoxperts.com" },
  { label: "Location", href: "#", value: "Kathmandu, Nepal" },
];

const skillGroups = [
  {
    label: "Frontend",
    value: "React, Next.js App Router, TypeScript, JavaScript, Tailwind CSS, TanStack Query, Redux, Zustand, Jotai",
  },
  {
    label: "Architecture",
    value: "NX/Lerna monorepos, SSR/ISR/SSG, design systems, Storybook, Core Web Vitals, PWA infrastructure",
  },
  {
    label: "Backend",
    value: "Elixir/Phoenix, Node.js/Express, PostgreSQL, MongoDB, DynamoDB, GraphQL, REST APIs",
  },
  {
    label: "Auth and Infra",
    value: "JWT, RBAC, Google OAuth, Firebase Phone OTP, Neon, Resend, Nodemailer, Vercel, Bitbucket Pipelines",
  },
  {
    label: "AI and Tooling",
    value: "OpenAI Codex, Claude, Gemini, Cursor, GitHub Copilot, agentic workflows, AI-assisted scaffolding",
  },
  {
    label: "Observability",
    value: "Sentry, Datadog, Mixpanel, Hotjar, Vercel Analytics, OpenReplay, Rollbar, Intercom",
  },
];

const education = [
  "B.Sc. in Computer Science and Information Technology (CSIT), Tribhuvan University, Institute of Engineering",
  "Microservices with Node.js and React, Udemy",
  "MERN Stack Front To Back: React, Redux and Node.js, Udemy",
];

export default function ResumePage() {
  const featuredProjects = projectsData.slice(0, 5);
  const recentPosts = blogsData.slice(0, 3);

  return (
    <main className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <header className="border-b border-[var(--stroke)] bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-[1120px] px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Link href="/" className="inline-link text-sm font-semibold uppercase text-[var(--muted)]">
                Back to home
              </Link>
              <h1 className="mt-4 font-mono text-4xl font-bold uppercase leading-none sm:text-5xl">Dibyan Maharjan</h1>
              <p className="mt-3 text-sm font-semibold uppercase text-[var(--muted)]">
                Senior Full-Stack Engineer / Frontend Specialist / AI-Augmented Development
              </p>
            </div>
            <a
              href="mailto:dibyan.softwaredev@gmail.com?subject=Resume Inquiry"
              className="inline-flex w-fit rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold uppercase !text-black visited:!text-black hover:!text-black focus:!text-black active:!text-black"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 grid gap-2 text-sm text-[var(--muted)] sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} className="border-t border-[var(--stroke)] pt-2 hover:text-[var(--ink)]">
                <span className="block text-xs font-semibold uppercase text-[var(--accent)]">{item.label}</span>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1120px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
        <div className="space-y-10">
          <section className="space-y-3">
            <p className="section-heading">Professional Summary</p>
            <p className="rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--surface)] p-5 text-lg leading-relaxed text-[var(--muted)] shadow-[var(--shadow)]">
              Senior full-stack engineer with 7+ years of experience and 5,000+ commits across
              production codebases spanning React, Next.js, TypeScript, Elixir/Phoenix, PostgreSQL,
              maps, analytics dashboards, and AI tooling. Founder and solo engineer behind LocoXperts,
              after shipping core platform work for Restworld and complex visualization systems at UXCam.
            </p>
          </section>

          <section id="experience" className="space-y-5">
            <p className="section-heading">Experience</p>
            <div className="space-y-6">
              {experienceData.map((experience) => (
                <article key={experience.id} className="border-t border-[var(--stroke)] pt-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">{experience.position}</h2>
                      <p className="text-[var(--muted)]">{experience.company} / {experience.location}</p>
                    </div>
                    <p className="text-sm font-semibold uppercase text-[var(--muted)]">{experience.duration}</p>
                  </div>
                  <p className="mt-3 text-[var(--muted)]">{experience.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                    {experience.achievements.slice(0, 5).map((achievement) => (
                      <li key={achievement}>- {achievement}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.technologies.slice(0, 12).map((tech) => (
                      <span key={tech} className="tag-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5">
            <p className="section-heading">Selected Projects</p>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <article key={project.id} className="rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--surface)] p-4 shadow-[var(--shadow)]">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="mt-2 text-sm text-[var(--muted)]">{project.description}</p>
                  <p className="mt-3 text-xs font-semibold uppercase text-[var(--accent)]">
                    {project.performance.score} / {project.performance.metrics}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8 lg:border-l lg:border-[var(--stroke)] lg:pl-8">
          <section className="space-y-3">
            <p className="section-heading">Snapshot</p>
            <div className="grid gap-3">
              {[
                ["7+ years", "Production engineering"],
                ["5,000+", "Production commits"],
                ["30,000+", "Monthly users served"],
                ["200+", "Solo LocoXperts commits"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--surface)] p-4">
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="text-sm text-[var(--muted)]">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3 rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--surface)] p-4">
            <p className="section-heading">Technical Skills</p>
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-sm font-semibold uppercase">{group.label}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{group.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3 rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--surface)] p-4">
            <p className="section-heading">Education & Certs</p>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              {education.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--surface)] p-4">
            <p className="section-heading">Recent Writing</p>
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blogs/${post.slug}`} className="block border-t border-[var(--stroke)] pt-3">
                  <p className="text-sm font-semibold">{post.title}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{post.readTime} min read</p>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
