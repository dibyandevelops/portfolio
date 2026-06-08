import Link from "next/link";

const techStack = [
  "React & Next.js",
  "TypeScript",
  "Elixir/Phoenix",
  "PostgreSQL",
  "OpenAI Codex",
  "Claude",
  "Google Gemini",
  "GitHub Copilot",
];

const stats = [
  { number: "30,000+", label: "Monthly Users Served" },
  { number: "7+ Years", label: "Production Engineering" },
  { number: "5,000+", label: "Production Commits" },
];

const services = [
  {
    title: "Full-Stack Product Development",
    description:
      "Production-ready Next.js products with APIs, authentication, database design, observability, and deployment handled end to end.",
    perfectFor: "Founders, local platforms, SaaS MVPs, internal tools",
    price: "From NPR 90,000 | 3-5 week delivery",
  },
  {
    title: "AI-Assisted Feature Delivery",
    description:
      "Integrate Codex, Claude, Gemini, and GPT workflows into real product development for faster scaffolding, refactors, tests, and content generation.",
    perfectFor: "Teams adopting AI tooling, product automation, content workflows",
    price: "From NPR 175,000 | 5-8 week delivery",
  },
  {
    title: "Frontend Systems & Dashboards",
    description:
      "React/Next.js dashboards, design systems, maps, forms, data visualizations, and performance-sensitive product interfaces.",
    perfectFor: "Analytics tools, hiring platforms, operations dashboards",
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
    title: "LocoXperts",
    subtitle: "Solo-built MTB trail discovery, expert booking, and event PWA for Nepal",
    results: [
      "Built 200+ commits independently across frontend, backend, auth, database, PWA, and deployment",
      "Implemented GPX trail uploads, MapLibre/Mapbox maps, event booking, QR check-ins, and expert workflows",
      "Designed Google OAuth, Firebase phone OTP, JWT RBAC, admin review flows, and transactional emails",
      "Integrated AI-generated trail descriptions with production retry logic",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Neon", "MapLibre GL", "Firebase", "Codex"],
  },
  {
    title: "Restworld",
    subtitle: "Hiring platform serving 30,000+ monthly active users across Italy",
    results: [
      "Contributed 4,775 frontend commits and 437 backend commits across React/Next.js and Elixir/Phoenix",
      "Built Mapbox job explorer with Web Worker clustering, proximity filters, and debounced performance work",
      "Maintained design system library with reusable components, tokens, skeleton loaders, and Storybook",
      "Built worker, employer, billing, subscription, and DynamoDB URL shortener features",
    ],
    tech: ["Next.js", "React", "TypeScript", "Elixir", "Phoenix", "Mapbox", "DynamoDB"],
  },
  {
    title: "UXCam",
    subtitle: "Complex analytics visualizations for mobile product insight dashboards",
    results: [
      "Primary engineer on Screen Flow and Sunburst graph systems spanning 250+ file changes",
      "Built custom SVG funnel visualization without a third-party dependency",
      "Improved heatmap tooltips, browser fixes, image overlays, and interactive data layers",
      "Designed mega-filter caching and dynamic GraphQL/Elixir filter data structures",
    ],
    tech: ["React", "TypeScript", "GraphQL", "Elixir Phoenix", "SVG", "Highcharts", "Datadog"],
  },
];

const accelerationPoints = [
  {
    icon: "⚡",
    title: "Component Generation",
    description:
      "Codex, Claude, Gemini, and Copilot accelerate scaffolding while I keep architecture, review, and production quality human-owned.",
  },
  {
    icon: "🎨",
    title: "Product Automation",
    description:
      "AI model APIs power useful product workflows, including LocoXperts trail description generation with retry handling.",
  },
  {
    icon: "🧪",
    title: "Test Generation",
    description:
      "AI speeds up boilerplate and test exploration; I verify edge cases with Vitest, Jest, Testing Library, and production checks.",
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
          <p className="mono-label">Senior full-stack engineer · frontend specialist</p>
          <h1 className="mx-auto max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-6xl">
            Dibyan Maharjan builds full-stack products, data-heavy interfaces, and AI-augmented workflows.
          </h1>
          <p className="mx-auto max-w-3xl text-pretty text-base text-[var(--muted)] sm:text-lg">
            7+ years across React, Next.js, TypeScript, Elixir/Phoenix, PostgreSQL, and production AI tooling.
            Founder and solo engineer of LocoXperts, with shipped platform work at Restworld and UXCam.
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
            I use Codex, Claude, Gemini, Cursor, and Copilot to move faster while keeping engineering quality high.
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
            <p className="text-lg font-semibold tracking-tight">Manual vs. AI-Assisted Delivery</p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-[var(--muted)]">Feature Scaffold</p>
                <p className="text-2xl font-semibold">Days</p>
                <p className="text-sm text-[var(--muted)]">Manual setup and boilerplate</p>
              </div>
              <div>
                <p className="text-sm text-[var(--muted)]">With AI-Assisted Workflow</p>
                <p className="text-2xl font-semibold text-[var(--accent)]">Faster cycles</p>
                <p className="text-sm text-[var(--muted)]">More time for architecture, security, and polish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to Build a Serious Product?</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-[var(--muted)] sm:text-lg">
          Let&apos;s define the product, stack, delivery plan, and AI-assisted workflow that fits your constraints.
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
          <a href="https://locoxperts.com" target="_blank" rel="noreferrer" className="inline-link">
            LocoXperts
          </a>
          <span>Kathmandu, Nepal (NPT/UTC+5:45)</span>
        </div>
      </section>
    </main>
  );
}
