import Link from "next/link";

const techStack = [
  "React & Next.js",
  "TypeScript",
  "OpenAI Codex",
  "Google Gemini",
  "Claude",
  "GitHub Copilot",
];

const stats = [
  { number: "30,000+", label: "Monthly Users Served" },
  { number: "6+ Years", label: "Senior Experience" },
  { number: "70%", label: "Time Reduction with AI" },
];

const services = [
  {
    title: "AI-Powered Dashboard Development",
    description:
      "Production-ready React/Next.js dashboards with real-time data visualizations, delivered in 1-2 weeks using AI-accelerated workflows.",
    perfectFor: "SaaS platforms, analytics tools, internal dashboards",
    price: "From NPR 90,000 | 3-5 week delivery",
  },
  {
    title: "Frontend AI Integration",
    description:
      "Integrate Claude/GPT-4 into your React applications for chat interfaces, AI-powered search, and intelligent features.",
    perfectFor: "B2B SaaS, enterprise apps, developer tools",
    price: "From NPR 175,000 | 5-8 week delivery",
  },
  {
    title: "Figma to React Conversion",
    description:
      "Convert your Figma designs to production-grade React/Next.js code using AI assistance. 10x faster than manual conversion.",
    perfectFor: "Design agencies, startups, rebrand projects",
    price: "From NPR 60,000 | 2-3 week delivery",
  },
  {
    title: "Performance Optimization",
    description:
      "Audit and optimize your React/Next.js apps for Core Web Vitals, SEO, and conversion improvements.",
    perfectFor: "Slow websites, pre-fundraise tech diligence",
    price: "From NPR 45,000 | 2-4 week delivery",
  },
];

const caseStudies = [
  {
    title: "AI-Driven Job Platform",
    subtitle: "Interactive map and Kanban board for hospitality sector",
    results: [
      "Served 30,000+ monthly active users",
      "Reduced bounce rates through Core Web Vitals optimization",
      "Built reusable component library cutting delivery time 40%",
      "Improved CI/CD pipeline reducing deployment time 50%",
    ],
    tech: ["React", "Next.js", "TypeScript", "MapboxGL", "React Query", "GitHub Copilot"],
  },
  {
    title: "Real-Time Analytics Dashboard",
    subtitle: "SaaS analytics platform for mobile app insights",
    results: [
      "Built custom SVG funnel visualization tool (eliminated costly plugins)",
      "Delivered real-time tables, charts, and heatmaps",
      "Integrated GraphQL + Elixir for streaming analytics",
      "Implemented comprehensive event tracking with Datadog",
    ],
    tech: ["React.js", "Next.js", "HighCharts", "SVG", "GraphQL", "MongoDB"],
  },
  {
    title: "Component Library and Design System",
    subtitle: "Reusable UI library for fast-scaling SaaS platform",
    results: [
      "Cut UI defects by 60% with standardized components",
      "Accelerated feature delivery by 40%",
      "Mentored 4 engineers to deliver consistent UIs",
      "Created Storybook docs for 50+ components",
    ],
    tech: ["React", "TypeScript", "Storybook", "Tailwind", "Monorepo (NX)"],
  },
];

const accelerationPoints = [
  {
    icon: "⚡",
    title: "Component Generation",
    description:
      "AI generates initial React components from requirements. I review, refactor, and optimize for production.",
  },
  {
    icon: "🎨",
    title: "Design to Code",
    description:
      "GPT-4 Vision converts Figma designs to React. I add interactions, accessibility, and polish.",
  },
  {
    icon: "🧪",
    title: "Test Generation",
    description:
      "AI suggests test cases and generates boilerplate. I ensure coverage and edge cases.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[var(--sand)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-[var(--stroke)] bg-[var(--sand)]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--stroke)] bg-[#fffdf8] text-xs font-bold tracking-[0.08em] text-[var(--ink)]">
              DM
            </span>
            <p className="text-sm font-semibold tracking-tight">Dibyan Maharjan</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/resume"
              className="rounded-full border border-[var(--stroke)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] transition hover:border-[var(--ink)] hover:text-[var(--ink)] sm:px-4"
            >
              Resume
            </Link>
            <a
              href="mailto:dibyan.softwaredev@gmail.com"
              className="rounded-full bg-[var(--ink)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] !text-white visited:!text-white hover:!text-white focus:!text-white active:!text-white transition hover:bg-[#111111] sm:px-4"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-12 pt-12 sm:px-6 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="space-y-6 text-center">
          <p className="mono-label">AI-accelerated frontend engineering</p>
          <h1 className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-6xl">
            Build Dashboards 10x Faster with AI-Accelerated Development
          </h1>
          <p className="mx-auto max-w-3xl text-pretty text-base text-[var(--muted)] sm:text-lg">
            Senior Frontend Engineer specializing in React/Next.js and AI automation. I help SaaS teams
            integrate Codex, Gemini, Claude, and GPT workflows and ship production-ready code in days,
            not weeks.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--stroke)] bg-[#fffdf8] px-3 py-1.5 text-xs font-medium text-[var(--muted)] sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="surface-card text-center sm:text-left">
              <p className="text-3xl font-semibold tracking-tight text-[var(--ink)]">{stat.number}</p>
              <p className="mono-label mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--stroke)] bg-[#efe7d7]/35">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <p className="section-heading">Services</p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="surface-card h-full space-y-3">
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="text-sm text-[var(--muted)] sm:text-base">{service.description}</p>
                <p className="text-sm text-[var(--muted)]">
                  <strong className="text-[var(--ink)]">Perfect for:</strong> {service.perfectFor}
                </p>
                <p className="pt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  {service.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <p className="section-heading">Case Studies</p>
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="overflow-hidden rounded-[24px] border border-[var(--stroke)] bg-[#fffdf8] shadow-[var(--shadow)]">
              <div className="bg-[var(--ink)] p-5 text-[var(--sand)]">
                <h3 className="text-xl font-semibold tracking-tight">{study.title}</h3>
                <p className="mt-1 text-sm text-[var(--sand)]/80">{study.subtitle}</p>
              </div>
              <div className="space-y-4 p-5">
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-start gap-2">
                      <span className="mt-0.5 text-[#2f855a]">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--stroke)] bg-[#efe7d7] px-2.5 py-1 text-xs text-[#4c4333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--stroke)] bg-[#fffdf8]">
        <div className="mx-auto w-full max-w-[1000px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <p className="section-heading text-center">How AI Accelerates Development</p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base">
            I use Claude, Cursor, and Copilot to move faster while keeping engineering quality high.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {accelerationPoints.map((point) => (
              <article key={point.title} className="surface-card text-center">
                <p className="text-4xl" aria-hidden="true">
                  {point.icon}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{point.description}</p>
              </article>
            ))}
          </div>

          <div className="surface-card mt-6 border-2 border-[var(--accent)] text-center">
            <p className="text-lg font-semibold tracking-tight">Traditional vs. AI-Accelerated Delivery</p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-[var(--muted)]">Dashboard Project</p>
                <p className="text-2xl font-semibold">2-3 weeks</p>
                <p className="text-sm text-[var(--muted)]">Manual coding</p>
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">With AI Acceleration</p>
                <p className="text-2xl font-semibold text-[var(--accent)]">1-2 days</p>
                <p className="text-sm text-[var(--muted)]">Same quality, 70% less time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to Build Faster?</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-[var(--muted)] sm:text-lg">
          Let&apos;s discuss your project and define a fast, reliable delivery plan.
        </p>

        <a
          href="mailto:dibyan.softwaredev@gmail.com?subject=Consulting Inquiry"
          className="mt-6 inline-flex rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] !text-white visited:!text-white hover:!text-white focus:!text-white active:!text-white transition hover:bg-[#111111]"
        >
          Email Me
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted)] sm:gap-6">
          <a href="https://linkedin.com/in/dibyansoftwaredev" target="_blank" rel="noreferrer" className="inline-link">
            LinkedIn
          </a>
          <a href="https://github.com/dibyansoftwaredev" target="_blank" rel="noreferrer" className="inline-link">
            GitHub
          </a>
          <span>Kathmandu, Nepal (NPT/UTC+5:45)</span>
        </div>
      </section>
    </main>
  );
}
