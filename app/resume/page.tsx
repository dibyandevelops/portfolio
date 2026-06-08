import Link from "next/link";
import { blogsData, experienceData } from "@/lib/data";

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
  { href: "https://locoxperts.com", label: "LocoXperts", meta: "Founder-built product" },
  { href: "mailto:dibyan.softwaredev@gmail.com", label: "Say hello", meta: "Consulting & collaborations" },
];

const highlightStats = [
  { value: "7+ years", label: "Production engineering" },
  { value: "5,000+", label: "Commits across production codebases" },
  { value: "30,000+", label: "Monthly users served at Restworld" },
];

export default function ResumePage() {
  const recentPosts = blogsData.slice(0, 3);
  const recentExperience = experienceData.slice(0, 2);

  return (
    <main className="bg-[var(--sand)] text-[var(--ink)]">
      <header className="section-shell space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="mono-label">Dibyan Maharjan — senior full-stack engineer</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/" className="inline-link text-sm font-semibold uppercase tracking-[0.2em]">
              Back to New Home
            </Link>
            <div className="nav-shell">
            {anchorLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            </div>
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
              Full-stack systems. Data-heavy interfaces. AI-augmented delivery.
            </p>
            <h1 className="text-4xl leading-tight tracking-[-0.05em] text-[var(--ink)] sm:text-5xl">
              I build production products across React, Next.js, TypeScript, Elixir/Phoenix, PostgreSQL, and modern AI tooling.
            </h1>
            <p className="max-w-2xl text-lg text-[var(--muted)]">
              Currently founder and solo engineer behind LocoXperts, a live MTB trail discovery and expert
              booking PWA for Nepal. Previously shipped core platform work at Restworld and complex analytics
              visualizations at UXCam.
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
              <p className="text-xl font-medium">LocoXperts, production AI workflows, maps, bookings, and full-stack product systems.</p>
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
              effortless. My toolkit spans Next.js, TypeScript, Elixir/Phoenix, PostgreSQL, GraphQL,
              maps, PWA infrastructure, observability, and AI-assisted development workflows.
            </p>
            <p>
              Beyond code, I design APIs and data models, own deployment details, mentor engineers,
              and use Codex, Claude, Gemini, Cursor, and Copilot to move faster without lowering the bar.
            </p>
          </div>
          <div className="surface-card space-y-4">
            <p className="mono-label">Principles</p>
            <ul className="list-reset space-y-3">
              <li>• Own the system end to end, from UX to database</li>
              <li>• Measure performance and product behavior before guessing</li>
              <li>• Use AI for leverage, not as a substitute for engineering judgment</li>
              <li>• Keep accessibility, security, and observability in the default path</li>
            </ul>
          </div>
        </div>
      </section>

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
            Available for full-stack product builds, React/Next.js systems, AI-assisted delivery workflows,
            technical audits, and performance-focused consulting.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="https://www.linkedin.com/in/dibyansoftwaredev" className="inline-link" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/dibyandevelops" className="inline-link" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://locoxperts.com" className="inline-link" target="_blank" rel="noreferrer">
              LocoXperts
            </a>
            <a href="mailto:dibyan.softwaredev@gmail.com" className="inline-link">
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
