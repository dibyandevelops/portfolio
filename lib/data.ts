// Shared data structures and sample data

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
  performance: { score: number; metrics: string };
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
}

export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTime: number;
}

// Projects data
export const projectsData: Project[] = [
  {
    id: 1,
    title: 'LocoXperts Full-Stack PWA',
    description: 'A live MTB trail discovery and expert booking platform for Nepal, built solo from product design through deployment.',
    image: '/api/placeholder/400/300',
    category: 'full-stack-pwa',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Neon', 'MapLibre GL', 'Firebase OTP', 'Sentry'],
    liveUrl: 'https://locoxperts.com',
    githubUrl: '#',
    features: [
      'Trail CRUD with GPX upload, safety labels, sport types, photos, and map visualization',
      'Expert booking, event management, QR check-in, cancellations, and receipts',
      'Google OAuth, Firebase phone OTP, JWT RBAC, and server-side auth guards',
      'AI-generated trail descriptions, PWA offline support, push notifications, SEO, and observability',
    ],
    performance: { score: 100, metrics: 'Solo-built production PWA' }
  },
  {
    id: 2,
    title: 'Restworld Job Map Explorer',
    description: 'Interactive Mapbox-based job search used by a hospitality hiring platform serving 30,000+ monthly active users.',
    image: '/api/placeholder/400/300',
    category: 'product-platform',
    technologies: ['Next.js', 'React', 'TypeScript', 'Mapbox', 'supercluster', 'Web Workers', 'React Query'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Mapbox markers, popups, location search, and proximity filtering',
      'Supercluster-based clustering moved into Web Workers',
      'Debounced search and render optimizations for large result sets',
      'Integrated across worker-facing job discovery flows',
    ],
    performance: { score: 30000, metrics: 'Monthly active users' }
  },
  {
    id: 3,
    title: 'Restworld Design System',
    description: 'Shared UI library and design system powering multiple worker and employer applications in a Next.js monorepo.',
    image: '/api/placeholder/400/300',
    category: 'design-system',
    technologies: ['React', 'TypeScript', 'Storybook', 'NX', 'Lerna', 'Tailwind', 'Design Tokens'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Reusable buttons, cards, forms, modals, navbars, and skeleton loaders',
      'Design tokens and shared patterns across company apps',
      'Storybook documentation for team onboarding',
      'Reduced duplicated UI work across product teams',
    ],
    performance: { score: 4775, metrics: 'Frontend commits at Restworld' }
  },
  {
    id: 4,
    title: 'Restworld Backend Services',
    description: 'Backend API and data work in Elixir/Phoenix supporting employer management, applications, subscriptions, and analytics.',
    image: '/api/placeholder/400/300',
    category: 'backend',
    technologies: ['Elixir', 'Phoenix', 'PostgreSQL', 'DynamoDB', 'SQL', 'REST APIs'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      '437 backend commits across employer, job application, restaurant employee, and subscription flows',
      'DynamoDB-backed URL shortener with pagination support',
      'Geo-distance filtering for workers and restaurants',
      'NULL-safe SQL refactors with joins, DISTINCT, and COALESCE handling',
    ],
    performance: { score: 437, metrics: 'Backend commits' }
  },
  {
    id: 5,
    title: 'UXCam Analytics Visualizations',
    description: 'Data-dense analytics dashboard work for mobile app product insights, including custom graph and heatmap systems.',
    image: '/api/placeholder/400/300',
    category: 'analytics',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Elixir Phoenix', 'SVG', 'Highcharts', 'Datadog'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Primary engineer on Screen Flow and Sunburst visualization components',
      'Custom SVG funnel visualization without third-party dependency',
      'Heatmap tooltip, browser compatibility, image map, and overlay work',
      'Mega-filter caching and dynamic filter structures for large datasets',
    ],
    performance: { score: 250, metrics: 'Visualization file changes' }
  },
  {
    id: 6,
    title: 'AI-Assisted Engineering Workflow',
    description: 'Practical use of AI tools to scaffold, refactor, test, and ship production systems while retaining human ownership of architecture.',
    image: '/api/placeholder/400/300',
    category: 'ai-tooling',
    technologies: ['OpenAI Codex', 'Claude', 'Cursor', 'GitHub Copilot', 'Gemini', 'Testing Library'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Used Codex as a systems orchestrator for scaffolding and boilerplate',
      'Applied AI tooling to architecture exploration, test generation, and refactoring',
      'Kept security architecture, database design, and performance decisions human-owned',
      'Reduced repetitive implementation time while preserving production review standards',
    ],
    performance: { score: 70, metrics: 'Estimated time reduction' }
  }
];

// Experience data
export const experienceData: Experience[] = [
  {
    id: 1,
    company: 'LocoXperts',
    position: 'Founder & Solo Full-Stack Engineer',
    duration: 'Oct/2025 - Present',
    location: 'Kathmandu, Nepal',
    description:
      'Building a community-driven MTB trail discovery platform for Nepal, covering trail maps, expert profiles, event booking, community rides, and cycle hub discovery.',
    achievements: [
      'Sole developer across 200+ commits, designing, building, and deploying a production full-stack PWA from scratch.',
      'Built trail management with GPX upload, safety labels, sport types, photo uploads, and map visualization using MapLibre GL, react-map-gl, and Mapbox.',
      'Engineered event and booking workflows with creation/editing, participant management, QR code check-in, cancellation policies, and receipt generation.',
      'Designed multi-role authentication with Google OAuth, Firebase phone OTP, JWT RBAC, and server-side auth guards.',
      'Integrated AI model APIs for automated trail description generation with retry logic, reducing content creation time for contributors.',
      'Managed 21+ PostgreSQL migrations via Neon, transactional emails via Resend/Nodemailer, and production observability through Sentry and Vercel Analytics.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Neon',
      'MapLibre GL',
      'react-map-gl',
      'Mapbox',
      'Firebase Phone OTP',
      'Google OAuth',
      'JWT RBAC',
      'PWA',
      'Service Workers',
      'Sentry',
      'Resend',
      'Nodemailer',
      'Vitest',
      'Jest',
      'Testing Library',
      'Codex',
    ],
    logo: '',
  },
  {
    id: 2,
    company: 'Restworld',
    position: 'Senior Full-Stack Engineer (Frontend Lead)',
    duration: 'Jan/2023 - Aug/2025',
    location: 'Remote - EU',
    description:
      'Led frontend delivery and contributed backend services for an AI-driven hospitality hiring platform serving 30,000+ monthly active users across Italy.',
    achievements: [
      'Contributed 4,775 frontend commits over 2.5 years across multiple applications and a shared component library in a Next.js/React monorepo.',
      'Built the interactive job map explorer with Mapbox markers, popups, location search, Web Worker clustering, and debounced performance optimizations.',
      'Architected and maintained the UI design system library with reusable components, design tokens, skeleton loaders, and Storybook documentation.',
      'Delivered worker and employer workflows including CV upload/parsing, profile editing, Kanban candidate management, onboarding, billing, and subscriptions.',
      'Contributed 437 backend commits in Elixir/Phoenix across employer management, job applications, restaurant employees, subscriptions, and a DynamoDB URL shortener.',
      'Mentored 4 junior engineers through code reviews, sprint facilitation, and technical guidance.',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Elixir',
      'PostgreSQL',
      'Tailwind',
      'flowbite',
      'React Query',
      'jotai/Zustand',
      'SSR/SSG/ISR',
      'Vercel',
      'Webpack',
      'Material UI',
      'react-hook-form',
      'monorepos',
      'mapbox',
      'map clustering',
      'AWS DynamoDB',
      'GraphQL',
      'internationalization',
      'SEO',
      'nx/lerna',
      'yup validation',
    ],
    logo: '',
  },
  {
    id: 3,
    company: 'UXCam',
    position: 'Frontend Engineer',
    duration: 'Jan/2019 - Dec/2022',
    location: 'Kathmandu, Nepal',
    description:
      'Built and maintained responsive, data-dense SaaS analytics dashboards for mobile app product insights.',
    achievements: [
      'Primary engineer on Screen Flow and Sunburst visualization components, spanning 250+ file changes across graph-based SVG analytics systems.',
      'Enhanced heatmap functionality with tooltip positioning, Chrome/Safari fixes, image map overlays, and interactive data overlays.',
      'Engineered a custom SVG-based funnel visualization tool from scratch, eliminating third-party library dependency.',
      'Designed a custom caching algorithm for the mega-filter dropdown to improve render performance under large, multi-dimensional datasets.',
      'Built dynamic filter data structures with GraphQL and Elixir Phoenix integration, including timezone-aware analytics filtering.',
      'Integrated observability and analytics tools including Datadog and Hotjar while maintaining build stability across the codebase.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'GraphQL',
      'Elixir Phoenix',
      'Highcharts',
      'SVG',
      'Redux',
      'Datadog',
      'Hotjar',
      'Mixpanel',
      'Intercom',
      'MongoDB',
    ],
    logo: '',
  },
];

// Current portfolio writing
export const blogsData: Blog[] = [
  {
    id: 1,
    slug: 'nextjs-16-cache-components-production-notes',
    title: 'Next.js 16 Cache Components: What I Would Use in Production',
    excerpt: 'A practical read on Cache Components, Turbopack, and adapter maturity from the perspective of shipping real product systems.',
    content: `# Next.js 16 Cache Components: What I Would Use in Production

Next.js 16 is not just another framework bump. The important shift is that caching becomes more explicit, Turbopack is now the default path, and deployment adapters are maturing beyond a single hosting story.

For product teams, the question is not "what is new?" It is "what should we trust in production?"

## Cache Components

Cache Components are useful when a route mixes stable and dynamic work. A product page, listing page, dashboard shell, or public profile often has pieces that can be cached differently.

My rule is simple: cache the parts that are naturally stable, keep user-specific data close to runtime, and make invalidation visible in code review.

## Turbopack

Turbopack becoming the default matters because local feedback loops are part of delivery speed. Faster builds are useful, but only when the team also watches for compatibility issues in CSS, PostCSS, test tooling, and deployment pipelines.

## Adapter Maturity

The stable adapter direction matters for teams that do not want every Next.js deployment decision tied to one platform. I still prefer starting with the boring path, then moving to adapters when platform constraints justify it.

## Production Checklist

- Treat caching as application logic, not framework magic
- Keep route boundaries simple before adding clever caching
- Test dynamic data and auth flows after every cache change
- Watch build and dev-server behavior after Turbopack upgrades
- Document revalidation strategy next to the feature

## My Take

Next.js 16 rewards teams that already have discipline around data ownership. The feature set is strong, but the win comes from explicit boundaries: what is cached, what is dynamic, and what must never leak between users.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-08',
    tags: ['Next.js 16', 'Caching', 'Performance'],
    readTime: 5
  },
  {
    id: 2,
    slug: 'react-19-2-activity-view-transitions',
    title: 'React 19.2: Activity, View Transitions, and the Return of UI State',
    excerpt: 'React 19.2 makes hidden UI, resumed screens, and smoother transitions more practical for real apps.',
    content: `# React 19.2: Activity, View Transitions, and the Return of UI State

React 19.2 is interesting because it focuses on how users actually move through interfaces. A lot of product work is not about rendering the first screen; it is about preserving context while users move between tabs, filters, panels, and routes.

## Activity

The Activity API gives React a way to keep parts of the UI mounted while hidden. That matters for dashboards, booking flows, admin panels, and map-heavy interfaces where throwing away state creates friction.

I would reach for it when a user expects to return to the same local state: selected filters, expanded rows, map position, partially completed forms, or panel state.

## View Transitions

View transitions are not about decoration. They help users understand continuity. A detail page opening from a list, a route changing inside a dashboard, or a panel expanding into focus can all benefit when motion explains what changed.

The danger is overuse. Motion should reduce cognitive load, not become a personality trait.

## cacheSignal

React's cacheSignal improves cancellation around cached async work. In production, that means fewer wasted requests and better control when screens change quickly.

## Where I Would Use It

- Analytics dashboards with persistent filters
- Multi-step booking flows
- Map search interfaces with expensive state
- Admin views with drawers, tabs, and detail panels
- Product UIs where route changes should feel spatial

## My Take

React 19.2 is a reminder that performance is not only milliseconds. Preserving user context is performance too.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-08',
    tags: ['React 19.2', 'UX', 'Frontend'],
    readTime: 4
  },
  {
    id: 3,
    slug: 'coding-agents-are-team-mates-not-autopilot',
    title: 'Coding Agents Are Teammates, Not Autopilot',
    excerpt: 'Codex, Claude, Gemini, Cursor, and Copilot are useful when the engineer owns architecture, review, tests, and blast radius.',
    content: `# Coding Agents Are Teammates, Not Autopilot

The coding-agent trend is real. Codex, Claude, Gemini, Cursor, and Copilot have moved from autocomplete into planning, refactoring, test generation, and multi-file edits.

That does not remove engineering responsibility. It changes where the engineer spends attention.

## What Agents Are Good At

Agents are strong at repetitive implementation work: scaffolding routes, writing boilerplate tests, converting a known pattern across files, explaining unknown code, and proposing migration steps.

They are also useful as a second set of eyes before a code review, especially for edge cases and missing tests.

## What They Should Not Own

I do not let an agent own security boundaries, auth design, database migrations, production observability, or product tradeoffs without human review.

The highest-risk failures are confident and quiet: leaking data between tenants, over-broad permissions, broken cache assumptions, and migrations that work locally but fail against production data.

## My Workflow

- Give the agent a narrow task and the files it needs
- Ask for the plan before the edit when risk is high
- Review diffs like a teammate submitted them
- Run tests and build locally
- Add manual checks for auth, billing, data, and side effects
- Keep architecture decisions explicit in the codebase

## The Real Productivity Gain

The gain is not that AI writes everything. The gain is that an experienced engineer can spend less time on blank-page work and more time on architecture, integration, security, and product fit.

That is the difference between vibe coding and AI-assisted engineering.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-07',
    tags: ['AI Agents', 'Codex', 'Engineering'],
    readTime: 5
  },
  {
    id: 4,
    slug: 'mcp-for-product-engineers',
    title: 'MCP for Product Engineers: Useful, Powerful, and Easy to Misuse',
    excerpt: 'Model Context Protocol is becoming a common bridge between AI tools and real systems, but it deserves serious security discipline.',
    content: `# MCP for Product Engineers: Useful, Powerful, and Easy to Misuse

Model Context Protocol is becoming a common way for AI tools to talk to files, APIs, databases, browsers, and internal systems.

The idea is simple: instead of every tool inventing its own integration format, MCP gives agents a structured way to discover tools and resources.

## Why Engineers Care

For product teams, MCP can make AI assistants more useful. A coding agent can inspect project docs, query local data, call test utilities, or work with design references through a shared protocol.

That is powerful because it moves the agent closer to the actual system.

## Why Security Matters

Any bridge between an AI agent and real tools is also a bridge to mistakes. A server that can read files, execute commands, or call internal APIs needs boundaries.

I would treat MCP servers like production integrations: explicit permissions, minimal scope, logging, review, and a clear owner.

## A Practical Checklist

- Prefer read-only tools by default
- Scope file and API access tightly
- Avoid exposing secrets or production credentials
- Log tool calls during development
- Make destructive actions require confirmation
- Keep server dependencies updated
- Treat prompts and tool outputs as untrusted input

## My Take

MCP is one of the more important ideas in AI-assisted development because it standardizes context. But useful context needs guardrails. The best integrations are boring, explicit, and auditable.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-07',
    tags: ['MCP', 'AI Tooling', 'Security'],
    readTime: 5
  },
  {
    id: 5,
    slug: 'building-map-first-pwas-in-nepal',
    title: 'Building Map-First PWAs: Notes from LocoXperts',
    excerpt: 'Lessons from building a trail discovery PWA with GPX uploads, maps, bookings, offline support, and local constraints.',
    content: `# Building Map-First PWAs: Notes from LocoXperts

A map-first PWA is different from a normal CRUD app. The map is not decoration; it is the interface. For LocoXperts, that means trail discovery, GPX data, expert profiles, event locations, and cycle hubs all need to feel connected.

## Start with Data Shape

GPX uploads, trail metadata, safety labels, sport types, photos, and coordinates need a stable model before the UI gets fancy.

If the data model is weak, every map feature becomes a special case.

## Maps Need Performance Discipline

Map screens can degrade quickly: too many markers, heavy popups, unbounded image payloads, and expensive client-side filtering.

I prefer debounced interactions, bounded result sets, clustering where needed, and careful separation between map state and server state.

## Offline Is a Product Feature

For outdoor and trail products, weak connectivity is normal. PWA support, service workers, and resilient loading states are part of the product, not extras.

## Trust and Safety

Trail platforms need moderation, admin review, expert verification, and clear safety labeling. The technical work is tied directly to community trust.

## My Take

The hard part of a map-first PWA is not placing pins. It is making location, identity, safety, performance, and offline behavior work together under real-world constraints.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-06',
    tags: ['PWA', 'Maps', 'LocoXperts'],
    readTime: 5
  },
  {
    id: 6,
    slug: 'observability-for-solo-founders',
    title: 'Observability for Solo Founders: What I Actually Wire Up',
    excerpt: 'A practical stack for production confidence when one engineer owns frontend, backend, database, and deployment.',
    content: `# Observability for Solo Founders: What I Actually Wire Up

When one engineer owns the whole product, observability is not optional. It is how you sleep after deploying.

For LocoXperts-style products, I care about four things: errors, user flows, performance, and operational signals.

## Error Tracking

Sentry or a similar tool should be wired early. Frontend errors, API route failures, and unexpected auth issues need to be visible without waiting for a user to complain.

## Product Analytics

Analytics should answer product questions, not just produce charts. Are users finding trails? Are bookings being started and completed? Where do contributors drop off while adding content?

## Email and Background Flows

Transactional email is part of the system. Booking receipts, admin review messages, verification updates, and failure paths should be logged and testable.

## Performance

Core Web Vitals still matter, but so do product-specific metrics: map load time, search latency, image weight, and slow API routes.

## My Baseline Stack

- Sentry for application errors
- Vercel Analytics or similar for page and performance visibility
- Structured logs around auth, bookings, uploads, and emails
- Database migration discipline
- Manual smoke tests for critical flows after deploys

## My Take

Observability is a product feature for a solo founder. It shortens the distance between something breaking and knowing exactly where to look.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-06',
    tags: ['Observability', 'Founder', 'DevOps'],
    readTime: 4
  }
];
