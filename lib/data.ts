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
    description: 'A live platform that solves trail discovery, expert booking, event joining, and cycle hub discovery for mountain bikers in Nepal.',
    image: '/api/placeholder/400/300',
    category: 'full-stack-pwa',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Neon', 'MapLibre GL', 'Firebase OTP', 'Sentry'],
    liveUrl: 'https://locoxperts.com',
    githubUrl: '#',
    features: [
      'Clear trail pages that solve route discovery with maps, photos, safety labels, and GPX uploads',
      'Expert booking, event pages, QR check-in, cancellations, and receipts',
      'Secure login with Google and phone number verification',
      'AI-written trail descriptions, offline support, notifications, SEO, and error tracking',
    ],
    performance: { score: 100, metrics: 'Solo-built production PWA' }
  },
  {
    id: 2,
    title: 'Restworld Job Map Explorer',
    description: 'A map-based job search solution for a restaurant hiring platform used by 30,000+ people each month.',
    image: '/api/placeholder/400/300',
    category: 'product-platform',
    technologies: ['Next.js', 'React', 'TypeScript', 'Mapbox', 'supercluster', 'Web Workers', 'React Query'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Job markers, popups, location search, and nearby job filters',
      'Grouped map pins so large search results stayed easy to use',
      'Faster search and smoother map loading so people could find better job matches',
      'Added inside the worker job discovery flow',
    ],
    performance: { score: 30000, metrics: 'Monthly active users' }
  },
  {
    id: 3,
    title: 'Restworld Design System',
    description: 'A shared UI solution that helped teams build product screens faster, cleaner, and more consistently.',
    image: '/api/placeholder/400/300',
    category: 'design-system',
    technologies: ['React', 'TypeScript', 'Storybook', 'NX', 'Lerna', 'Tailwind', 'Design Tokens'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Reusable buttons, cards, forms, modals, menus, and loading screens',
      'Shared colors, spacing, and patterns across company apps',
      'Clear examples so new team members could use components faster',
      'Reduced repeated design and frontend work across teams',
    ],
    performance: { score: 4775, metrics: 'Frontend commits at Restworld' }
  },
  {
    id: 4,
    title: 'Restworld Backend Services',
    description: 'Behind-the-scenes systems that solved data, employer, job application, subscription, and reporting needs.',
    image: '/api/placeholder/400/300',
    category: 'backend',
    technologies: ['Elixir', 'Phoenix', 'PostgreSQL', 'DynamoDB', 'SQL', 'REST APIs'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Built and improved employer, job application, staff, and subscription flows',
      'Created a short-link tool with paginated results',
      'Added distance-based filters for workers and restaurants',
      'Cleaned up database queries so reports and lists showed correct data',
    ],
    performance: { score: 437, metrics: 'Backend commits' }
  },
  {
    id: 5,
    title: 'UXCam Analytics Visualizations',
    description: 'Dashboards and charts that helped mobile app teams find user problems and improve product flows.',
    image: '/api/placeholder/400/300',
    category: 'analytics',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Elixir Phoenix', 'SVG', 'Highcharts', 'Datadog'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Built screen flow and sunburst charts for user journey analysis',
      'Created a custom funnel chart without relying on a heavy outside library',
      'Improved heatmaps, tooltips, browser support, image maps, and overlays',
      'Made large filters and big data views faster to use',
    ],
    performance: { score: 250, metrics: 'Visualization file changes' }
  },
  {
    id: 6,
    title: 'AI-Assisted Engineering Workflow',
    description: 'A careful way to use AI tools to explore options, find better solutions, and build faster without skipping review.',
    image: '/api/placeholder/400/300',
    category: 'ai-tooling',
    technologies: ['OpenAI Codex', 'Claude', 'Cursor', 'GitHub Copilot', 'Gemini', 'Testing Library'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Used Codex to create first drafts and reduce repeated setup work',
      'Used AI tools for planning, test ideas, cleanup, and safer refactors',
      'Kept security, database, and performance decisions under human review',
      'Saved time on repeated work without skipping production checks',
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
      'Building a mountain bike trail platform for Nepal with trail maps, expert profiles, event booking, community rides, and cycle hub discovery.',
    achievements: [
      'Designed, built, and launched the product as the only developer across 200+ code changes.',
      'Built trail pages with route uploads, safety labels, sport types, photos, and maps.',
      'Built event and booking flows with participant lists, QR check-in, cancellations, and receipts.',
      'Added secure login with Google, phone number verification, user roles, and protected admin areas.',
      'Added AI support to help create trail descriptions faster for contributors.',
      'Managed database updates, booking emails, error tracking, and product analytics.',
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
      'Led frontend work and helped with backend services for a restaurant hiring platform used by 30,000+ people each month across Italy.',
    achievements: [
      'Shipped 4,775 frontend code changes across several apps and a shared design system.',
      'Built a job map with markers, popups, location search, grouped pins, and faster search results.',
      'Built and maintained reusable UI pieces like buttons, forms, cards, loading screens, and documentation.',
      'Built worker and employer tools for CV upload, profile editing, candidate tracking, onboarding, billing, and subscriptions.',
      'Helped improve backend services for employers, job applications, staff records, subscriptions, and short links.',
      'Mentored 4 junior engineers through code reviews, sprint planning, and day-to-day guidance.',
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
      'Built dashboards that helped mobile app teams see how users moved through their apps and where they got stuck.',
    achievements: [
      'Built screen flow and sunburst charts across 250+ file changes.',
      'Improved heatmaps, tooltips, browser support, image overlays, and interactive data views.',
      'Built a custom funnel chart from scratch and removed the need for an outside chart library.',
      'Made large filter dropdowns faster and easier to use.',
      'Built flexible filters connected to backend data, including timezone-aware reporting.',
      'Added monitoring and analytics tools while keeping the app stable.',
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
    title: 'Why Product Speed Matters When Solving Startup Problems',
    excerpt: 'A simple guide to making products faster, safer, and easier to trust when customers need answers quickly.',
    content: `# Why Product Speed Matters When Solving Startup Problems

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
    title: 'Keeping Web Apps Easy to Use',
    excerpt: 'Why smooth screens, saved filters, and simple movement through an app matter for real customers.',
    content: `# Keeping Web Apps Easy to Use

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
    title: 'How AI Coding Tools Help Build Faster',
    excerpt: 'Codex, Claude, Gemini, Cursor, and Copilot can save time, but important decisions still need human review.',
    content: `# How AI Coding Tools Help Build Faster

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
    title: 'Connecting AI Tools Safely to Business Data',
    excerpt: 'AI tools become more useful when they can read the right information, but access must be limited and reviewed.',
    content: `# Connecting AI Tools Safely to Business Data

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
    title: 'What I Learned Building a Map App for Nepal',
    excerpt: 'Lessons from building a trail app with maps, bookings, offline support, safety labels, and local needs.',
    content: `# What I Learned Building a Map App for Nepal

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
    title: 'Simple Product Monitoring for Startup Founders',
    excerpt: 'What to track so you know when your product has errors, slow pages, or broken customer flows.',
    content: `# Simple Product Monitoring for Startup Founders

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
  },
  {
    id: 7,
    slug: 'auth-rbac-lessons-from-locoxperts',
    title: 'Login, Roles, and Admin Access Explained Simply',
    excerpt: 'A simple explanation of secure login, admin access, and user roles for a real business product.',
    content: `# Login, Roles, and Admin Access Explained Simply

Authentication looks simple until the product has real roles. LocoXperts needs admins, experts, participants, review workflows, booking flows, and protected admin actions.

That means auth is not just login. It is product architecture.

## Separate Identity from Permission

Identity answers "who is this user?" Permission answers "what can this user do right now?"

I prefer keeping those ideas separate. Google OAuth and Firebase phone OTP can establish identity, but role-based access control should be enforced server-side where sensitive actions happen.

## Server Guards Matter

Client-side hiding is useful for UX, but it is not security. Admin routes, expert verification, booking changes, and review actions need server-side checks.

Every protected route should make the permission boundary obvious in code review.

## Roles Should Match Product Language

Admin, Expert, and Participant are not just database values. They reflect workflows: who can create events, who can verify trails, who can request bookings, and who can review submissions.

When roles match product language, the code becomes easier to reason about.

## My Checklist

- Keep auth checks close to protected server actions
- Avoid trusting client role state for sensitive decisions
- Log important permission failures
- Test the unhappy paths, not only successful login
- Make admin review workflows explicit

## My Take

Good auth design is boring in the best way. Users should not notice it, contributors should feel protected by it, and engineers should be able to audit it quickly.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-05',
    tags: ['Auth', 'RBAC', 'Security'],
    readTime: 5
  },
  {
    id: 8,
    slug: 'design-systems-without-theatre',
    title: 'Design Systems in Plain English',
    excerpt: 'How reusable buttons, forms, layouts, and rules help teams build cleaner products faster.',
    content: `# Design Systems in Plain English

Design systems fail when they become theatre: polished demos, huge naming debates, and components nobody uses in production.

At Restworld, the useful parts were practical: shared components, design tokens, skeleton loaders, form patterns, and Storybook documentation that helped engineers ship consistent UI faster.

## Start with Repetition

Do not build a design system from imagination. Build it from repeated product needs.

Buttons, cards, forms, modals, navbars, loaders, and empty states are boring. That is exactly why they belong in a shared system.

## Documentation Should Reduce Questions

Storybook is useful when it answers how to use the component, what variants exist, and what accessibility behavior is expected.

It is less useful when it becomes a gallery detached from real product usage.

## Tokens Need Ownership

Design tokens should keep visual decisions consistent, but they need clear ownership. Color, spacing, radius, typography, and motion should not drift through one-off utility choices.

## My Checklist

- Build from repeated production patterns
- Keep component APIs small
- Include loading, disabled, empty, and error states
- Document accessibility expectations
- Remove unused variants before they become debt

## My Take

A good design system is infrastructure. It should make the correct UI easier to ship than the inconsistent one.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-05',
    tags: ['Design Systems', 'React', 'Storybook'],
    readTime: 4
  },
  {
    id: 9,
    slug: 'elixir-phoenix-for-frontend-engineers',
    title: 'Why Backend Work Matters for Your Product',
    excerpt: 'The hidden parts of a product decide whether forms, logins, reports, payments, and dashboards work well.',
    content: `# Why Backend Work Matters for Your Product

Frontend engineers become more effective when they understand the backend shape behind the UI.

At Restworld, contributing to Elixir/Phoenix services changed how I thought about product delivery. API design, database queries, pagination, subscriptions, and performance metrics all shaped the frontend experience.

## API Shape Is UX

Slow or awkward APIs create complicated frontend code. Clear endpoints, predictable errors, and useful payloads make UI work simpler.

When frontend and backend are owned together, less time is lost translating intent across boundaries.

## SQL Details Leak Into Product Behavior

DISTINCT clauses, joins, COALESCE handling, NULL-safe pipelines, and pagination are not abstract database concerns. They decide whether users see correct data.

A small query bug can become a confusing product bug.

## Backend Work Improves Frontend Judgment

Owning API behavior makes you more careful with client state, loading states, caching, and optimistic updates.

You stop treating the backend as a black box and start designing the whole interaction.

## My Take

Frontend specialists do not need to become backend-only engineers. But learning enough backend to own product behavior end to end is a serious advantage.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-04',
    tags: ['Elixir', 'Phoenix', 'Full Stack'],
    readTime: 4
  },
  {
    id: 10,
    slug: 'performance-budgets-for-map-and-dashboard-apps',
    title: 'Keeping Maps and Dashboards Fast',
    excerpt: 'Maps, filters, charts, and image-heavy screens need clear speed limits so users do not get stuck waiting.',
    content: `# Keeping Maps and Dashboards Fast

Maps and dashboards fail differently than marketing pages. They often load more JavaScript, fetch more data, render more dynamic UI, and respond to more user input.

That means the performance budget needs to match the product.

## Budget the Expensive Parts

For map screens, I watch marker count, clustering strategy, popup rendering, image payloads, and search latency.

For dashboards, I watch chart rendering, table virtualization, filter recomputation, API waterfalls, and unnecessary re-renders.

## Separate Server State from UI State

Server state should be fetched, cached, invalidated, and retried deliberately. UI state should stay local when possible.

Mixing the two creates confusing bugs and unnecessary network traffic.

## Use Workers When It Matters

Moving clustering or heavy computation away from the main thread can protect interaction quality. This is especially useful for map search and large result sets.

## My Checklist

- Define acceptable map load and search latency
- Cap or cluster visible markers
- Debounce expensive interactions
- Memoize chart and table transforms
- Audit API waterfalls before adding more client state
- Test on mid-range devices, not only a development machine

## My Take

Performance budgets are most useful when they are specific. A map product, analytics dashboard, and landing page should not share the same definition of fast.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2026-06-04',
    tags: ['Performance', 'Maps', 'Dashboards'],
    readTime: 5
  }
];
