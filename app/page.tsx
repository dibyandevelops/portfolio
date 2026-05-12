import Link from "next/link";

const techStack = ["React & Next.js", "TypeScript", "Claude AI", "Cursor IDE", "GitHub Copilot"];

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
    price: "From $5,000 | 1-2 week delivery",
  },
  {
    title: "Frontend AI Integration",
    description:
      "Integrate Claude/GPT-4 into your React applications for chat interfaces, AI-powered search, and intelligent features.",
    perfectFor: "B2B SaaS, enterprise apps, developer tools",
    price: "From $10,000 | 3-4 week delivery",
  },
  {
    title: "Figma to React Conversion",
    description:
      "Convert your Figma designs to production-grade React/Next.js code using AI assistance. 10x faster than manual conversion.",
    perfectFor: "Design agencies, startups, rebrand projects",
    price: "From $3,000 | 3-5 day delivery",
  },
  {
    title: "Performance Optimization",
    description:
      "Audit and optimize your React/Next.js apps for Core Web Vitals, SEO, and conversion improvements.",
    perfectFor: "Slow websites, pre-fundraise tech diligence",
    price: "From $3,000 | 1 week delivery",
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
    <main className="ai-page">
      <header className="ai-header">
        <div className="ai-container ai-header-content">
          <div className="ai-logo">Dibyan Maharjan</div>
          <div className="ai-header-actions">
            <Link href="/resume" className="ai-outline-link">
              View Resume
            </Link>
            <a href="mailto:dibyan.softwaredev@gmail.com" className="ai-cta-button">
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <section className="ai-hero">
        <div className="ai-container">
          <h1>
            Build Dashboards 10x Faster
            <br />
            with AI-Accelerated Development
          </h1>
          <p className="ai-subtitle">
            Senior Frontend Engineer specializing in React/Next.js and AI automation. I help SaaS
            companies integrate Claude and GPT-4 and deliver production-ready code in days, not weeks.
          </p>
          <div className="ai-tech-stack">
            {techStack.map((tech) => (
              <span key={tech} className="ai-tech-badge">
                {tech}
              </span>
            ))}
          </div>
          <div className="ai-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="ai-stat">
                <div className="ai-stat-number">{stat.number}</div>
                <div className="ai-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section ai-section-alt">
        <div className="ai-container">
          <h2 className="ai-section-title">Services</h2>
          <div className="ai-services-grid">
            {services.map((service) => (
              <article key={service.title} className="ai-service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p>
                  <strong>Perfect for:</strong> {service.perfectFor}
                </p>
                <div className="ai-price">{service.price}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section">
        <div className="ai-container">
          <h2 className="ai-section-title">Case Studies</h2>
          <div className="ai-case-studies">
            {caseStudies.map((study) => (
              <article key={study.title} className="ai-case-study">
                <div className="ai-case-study-header">
                  <h3>{study.title}</h3>
                  <p>{study.subtitle}</p>
                </div>
                <div className="ai-case-study-body">
                  <div className="ai-case-study-results">
                    {study.results.map((result) => (
                      <div key={result} className="ai-result-item">
                        {result}
                      </div>
                    ))}
                  </div>
                  <div className="ai-tech-list">
                    {study.tech.map((tech) => (
                      <span key={tech} className="ai-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-section ai-section-alt">
        <div className="ai-container ai-narrow">
          <h2 className="ai-section-title">How AI Accelerates Development</h2>
          <p className="ai-section-intro">
            I use AI tools like Claude, Cursor, and GitHub Copilot to deliver production-ready code
            faster without compromising quality.
          </p>

          <div className="ai-acceleration-grid">
            {accelerationPoints.map((point) => (
              <article key={point.title} className="ai-acceleration-item">
                <div className="ai-icon" aria-hidden="true">
                  {point.icon}
                </div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>

          <div className="ai-comparison-card">
            <p className="ai-comparison-title">Traditional Development vs. AI-Accelerated</p>
            <div className="ai-comparison-grid">
              <div>
                <div className="ai-comparison-label">Dashboard Project</div>
                <div className="ai-comparison-number">2-3 weeks</div>
                <div className="ai-comparison-subtext">Manual coding</div>
              </div>
              <div>
                <div className="ai-comparison-label">With AI Acceleration</div>
                <div className="ai-comparison-number ai-primary">1-2 days</div>
                <div className="ai-comparison-subtext">Same quality, 70% less time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-contact-section">
        <div className="ai-container">
          <h2>Ready to Build Faster?</h2>
          <p>
            Let&apos;s discuss your project. I&apos;m currently available for consulting engagements.
          </p>
          <a
            href="mailto:dibyan.softwaredev@gmail.com?subject=Consulting Inquiry"
            className="ai-contact-button"
          >
            Email Me: dibyan.softwaredev@gmail.com
          </a>
          <div className="ai-contact-links">
            <a href="https://linkedin.com/in/dibyansoftwaredev" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/dibyansoftwaredev" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>Kathmandu, Nepal (NPT/UTC+5:45)</span>
          </div>
          <div className="ai-resume-link-wrap">
            <Link href="/resume" className="ai-resume-link">
              View the resume
            </Link>
          </div>
        </div>
      </section>

      <footer className="ai-footer">
        <div className="ai-container">
          <p>© 2026 Dibyan Maharjan. Senior Frontend Engineer and AI Automation Specialist.</p>
          <p className="ai-footer-sub">React + Next.js + TypeScript + AI | Available for consulting</p>
        </div>
      </footer>
    </main>
  );
}
