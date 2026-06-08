import Image from "next/image";
import Link from "next/link";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Elixir/Phoenix",
  "PostgreSQL",
  "Mapbox",
  "OpenAI Codex",
  "Claude",
  "Gemini",
];

const stats = [
  { number: "7+", label: "Years building production software" },
  { number: "5,000+", label: "Commits across shipped codebases" },
  { number: "30,000+", label: "Monthly users served at Restworld" },
];

const services = [
  {
    title: "Full-stack product build",
    description:
      "Next.js products with auth, APIs, database design, deployment, analytics, and observability.",
    price: "From NPR 90,000",
    timeline: "3-5 weeks",
  },
  {
    title: "AI-assisted feature delivery",
    description:
      "Codex, Claude, Gemini, and Copilot workflows for faster scaffolding, tests, refactors, and product automation.",
    price: "From NPR 175,000",
    timeline: "5-8 weeks",
  },
  {
    title: "Frontend systems and dashboards",
    description:
      "Data-heavy React interfaces, maps, design systems, forms, and analytics dashboards.",
    price: "From NPR 60,000",
    timeline: "2-3 weeks",
  },
  {
    title: "Performance and technical audit",
    description:
      "Focused review of Core Web Vitals, rendering, API calls, accessibility, and delivery risks.",
    price: "From NPR 45,000",
    timeline: "2-4 weeks",
  },
];

const selectedWork = [
  {
    title: "LocoXperts",
    meta: "Founder-built PWA for Nepal",
    detail:
      "Trail discovery, expert booking, events, QR check-ins, Firebase OTP, JWT RBAC, GPX uploads, MapLibre maps, and AI trail descriptions.",
    tags: ["Next.js", "PostgreSQL", "MapLibre", "Firebase", "Codex"],
  },
  {
    title: "Restworld",
    meta: "30,000+ monthly active users",
    detail:
      "Interactive job map explorer, design system, worker and employer workflows, Elixir/Phoenix APIs, and DynamoDB URL shortener.",
    tags: ["React", "Next.js", "Elixir", "Phoenix", "Mapbox"],
  },
  {
    title: "UXCam",
    meta: "Analytics dashboards and custom SVG systems",
    detail:
      "Screen Flow, Sunburst, heatmaps, custom funnel visualization, GraphQL filter architecture, and large dataset performance work.",
    tags: ["React", "GraphQL", "SVG", "Highcharts", "Datadog"],
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#ai", label: "AI" },
  { href: "/blogs", label: "Writing" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-[var(--stroke)] bg-[var(--sand)]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--stroke)] bg-[var(--surface)] text-xs font-bold text-[var(--ink)]">
              DM
            </span>
            <span className="text-sm font-semibold">Dibyan Maharjan</span>
          </Link>

          <nav className="hidden items-center gap-5 text-xs font-semibold uppercase text-[var(--muted)] lg:flex">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/resume"
              className="rounded-full border border-[var(--stroke)] px-3 py-2 text-xs font-semibold uppercase text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] sm:px-4"
            >
              Resume
            </Link>
            <a
              href="mailto:dibyan.softwaredev@gmail.com?subject=Product Engineering Inquiry"
              className="rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold uppercase !text-black visited:!text-black hover:!text-black focus:!text-black active:!text-black transition hover:opacity-80 sm:px-4"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[var(--stroke)] bg-[var(--sand)]">
        <div className="orbit-slow pointer-events-none absolute right-[-12rem] top-[-8rem] h-[34rem] w-[34rem] rounded-full border border-white/10" />
        <div className="orbit-reverse pointer-events-none absolute bottom-[-14rem] left-[14%] h-[28rem] w-[28rem] rounded-full border border-white/10" />
        <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:px-8 lg:py-20">
          <div className="space-y-7">
            <div className="hero-reveal inline-flex rounded-full border border-[var(--stroke)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase text-[var(--muted)]">
              ... / Full-stack engineer / Kathmandu / ...
            </div>

            <div className="hero-reveal-delay space-y-5">
              <h1 className="max-w-5xl font-mono text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl">
                Full-stack Developer
              </h1>
              <p className="max-w-2xl text-base text-[var(--muted)] sm:text-lg">
                Founder and solo engineer of LocoXperts. Previously shipped platform work at
                Restworld and analytics visualization systems at UXCam across React, Next.js,
                TypeScript, Elixir/Phoenix, PostgreSQL, maps, and production AI workflows.
              </p>
            </div>

            <div className="hero-reveal-late flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:dibyan.softwaredev@gmail.com?subject=Product Engineering Inquiry"
                className="inline-flex justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase !text-black visited:!text-black hover:!text-black focus:!text-black active:!text-black transition hover:opacity-80"
              >
                Start a Build
              </a>
              <Link
                href="/projects"
                className="inline-flex justify-center rounded-full border border-[var(--stroke)] bg-transparent px-6 py-3 text-sm font-semibold uppercase text-[var(--ink)] transition hover:border-[var(--accent)]"
              >
                See Work
              </Link>
            </div>

            <div className="hero-reveal-late flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="tech-marquee rounded-full border border-[var(--stroke)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <aside className="group rounded-[2rem] border border-[var(--stroke)] bg-[var(--surface)] p-4 shadow-[var(--shadow)] transition duration-500 hover:-translate-y-1 hover:border-white/40">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--sand)]">
              <Image
                src="/DIBYAN_PP_PHOTO-removebg.jpg"
                alt="Dibyan Maharjan"
                width={520}
                height={620}
                priority
                className="aspect-[4/5] w-full object-cover object-top grayscale transition duration-700 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-mono text-sm font-semibold uppercase text-white">
                Founder / Full-stack / AI workflows
              </p>
            </div>
            <p className="mono-label mt-5">Current focus</p>
            <p className="mt-3 text-2xl font-semibold leading-tight">
              LocoXperts, production AI workflows, maps, bookings, and full-stack product delivery.
            </p>
            <div className="mt-6 grid gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-[var(--stroke)] pt-3">
                  <p className="text-3xl font-semibold">{stat.number}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="services" className="border-b border-[var(--stroke)] bg-[var(--sand)]">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-heading">Services</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Practical delivery offers with clear scope and Nepal-market pricing.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
              <article key={service.title} className="rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
                <h3 className="text-xl font-semibold leading-tight">{service.title}</h3>
                  <p className="mt-3 text-sm text-[var(--muted)]">{service.description}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--stroke)] pt-4 text-sm">
                    <span className="font-semibold text-[var(--accent)]">{service.price}</span>
                    <span className="text-[var(--muted)]">{service.timeline}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-4 border-b border-[var(--stroke)] pb-6 md:flex-row md:items-end">
            <div>
              <p className="section-heading">Selected Work</p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Real shipped systems, not portfolio placeholders.
              </h2>
            </div>
            <Link href="/projects" className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold uppercase !text-black">
              All projects
            </Link>
          </div>

          <div className="divide-y divide-[var(--stroke)]">
            {selectedWork.map((work) => (
              <article key={work.title} className="grid gap-4 py-6 lg:grid-cols-[0.35fr_0.65fr]">
                <div className="border-l border-[var(--accent)] pl-4">
                  <h3 className="text-2xl font-semibold">{work.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{work.meta}</p>
                </div>
                <div>
                  <p className="text-[var(--muted)]">{work.detail}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="border-y border-[var(--stroke)] bg-[var(--sand)]">
        <div className="mx-auto grid w-full max-w-[1180px] gap-6 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="section-heading">AI Workflow</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              AI speeds up execution. Engineering judgment still owns the system.
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              "Use Codex, Claude, Gemini, Cursor, and Copilot for scaffolding, refactors, tests, and repetitive implementation.",
              "Keep security, database design, auth boundaries, architecture, and production review human-owned.",
              "Apply AI inside products where it creates real value, such as LocoXperts trail description generation.",
            ].map((item) => (
              <p key={item} className="rounded-[1.5rem] border border-[var(--stroke)] bg-[var(--surface)] p-4 text-[var(--muted)]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1180px] px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Need a product engineer who can own the whole path?</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-[var(--muted)] sm:text-lg">
          Bring the product constraint, target users, and timeline. I will help shape the stack,
          delivery plan, and first production release.
        </p>
        <a
          href="mailto:dibyan.softwaredev@gmail.com?subject=Product Engineering Inquiry"
          className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold uppercase !text-black visited:!text-black hover:!text-black focus:!text-black active:!text-black transition hover:opacity-80"
        >
          Email Me
        </a>
      </section>
    </main>
  );
}
