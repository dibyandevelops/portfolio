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

// Sample blogs data
export const blogsData: Blog[] = [
  {
    id: 1,
    slug: 'building-scalable-nextjs-applications',
    title: 'Building Scalable Next.js Applications',
    excerpt: 'Learn how to architect and build scalable Next.js applications that can handle growth and maintain performance.',
    content: `# Building Scalable Next.js Applications

Building scalable Next.js applications requires careful consideration of architecture, performance, and developer experience. In this blog post, we'll explore key strategies for creating applications that can grow with your needs.

## Architecture Patterns

### Server Components First
Next.js 13+ introduced Server Components, which allow you to reduce client-side JavaScript and improve performance. Always start with Server Components and only use Client Components when necessary.

### Code Splitting
Leverage Next.js automatic code splitting. Organize your code so that components are loaded only when needed, reducing initial bundle size.

### Database Optimization
Use connection pooling, implement proper indexing, and consider using read replicas for scaling read operations.

## Performance Best Practices

- Use Static Generation (SSG) where possible
- Implement Incremental Static Regeneration (ISR) for dynamic content
- Optimize images with next/image
- Implement proper caching strategies

## Conclusion

Building scalable applications is an ongoing process. Start with these patterns and iterate based on your specific needs.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-01-15',
    tags: ['Next.js', 'Architecture', 'Performance'],
    readTime: 5
  },
  {
    id: 2,
    slug: 'modern-react-patterns-2024',
    title: 'Modern React Patterns for 2024',
    excerpt: 'Exploring the latest React patterns and best practices that will help you write more maintainable and performant code.',
    content: `# Modern React Patterns for 2024

React has evolved significantly over the years. Here are the modern patterns you should be using in 2024.

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions. They're essential for keeping components clean and logic reusable.

## Context and State Management

While Redux still has its place, modern React applications often use Context API for simpler state management needs. Consider Zustand or Jotai for more complex scenarios.

## Server Components

If you're using Next.js 13+, Server Components are game-changing. They allow you to fetch data directly in components without useEffect.

## Conclusion

Stay updated with React's latest features and patterns. The ecosystem moves fast, and adopting modern patterns will make your code more maintainable.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-02-10',
    tags: ['React', 'Patterns', 'Best Practices'],
    readTime: 4
  },
  {
    id: 3,
    slug: 'optimizing-web-performance',
    title: 'Optimizing Web Performance: A Complete Guide',
    excerpt: 'A comprehensive guide to optimizing web performance, covering everything from Core Web Vitals to advanced caching strategies.',
    content: `# Optimizing Web Performance: A Complete Guide

Web performance directly impacts user experience and business metrics. Here's how to optimize your web applications.

## Core Web Vitals

### Largest Contentful Paint (LCP)
LCP measures loading performance. Aim for LCP under 2.5 seconds.

### First Input Delay (FID)
FID measures interactivity. Target FID under 100 milliseconds.

### Cumulative Layout Shift (CLS)
CLS measures visual stability. Keep CLS under 0.1.

## Optimization Techniques

### Image Optimization
- Use modern formats (WebP, AVIF)
- Implement lazy loading
- Serve responsive images

### Code Optimization
- Minify JavaScript and CSS
- Remove unused code
- Use code splitting

### Caching Strategies
- Browser caching
- CDN caching
- API response caching

## Conclusion

Performance optimization is an ongoing process. Monitor your metrics regularly and iterate on improvements.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-03-05',
    tags: ['Performance', 'Web Vitals', 'Optimization'],
    readTime: 7
  },
  {
    id: 4,
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Frontend Development',
    excerpt: 'Master TypeScript in frontend development with these essential best practices and patterns.',
    content: `# TypeScript Best Practices for Frontend Development

TypeScript has become the standard for modern frontend development. Here are the best practices you should follow.

## Type Safety

### Strict Mode
Always enable strict mode in tsconfig.json. It catches many errors at compile time.

### Avoid 'any'
Minimize the use of 'any' type. Use 'unknown' or proper types instead.

## Type Definitions

### Interface vs Type
Use interfaces for object shapes that might be extended. Use types for unions, intersections, and computed types.

### Utility Types
Leverage TypeScript utility types like Partial, Pick, Omit, and Record to create new types from existing ones.

## Code Organization

### Type Organization
Keep types close to where they're used, or create a types directory for shared types.

## Conclusion

TypeScript is a powerful tool when used correctly. These practices will help you write more maintainable and error-free code.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-03-20',
    tags: ['TypeScript', 'Best Practices', 'Frontend'],
    readTime: 6
  },
  {
    id: 5,
    slug: 'micro-frontends-architecture',
    title: 'Micro Frontends: Architecture and Implementation',
    excerpt: 'Understanding micro frontends architecture and how to implement it in your projects.',
    content: `# Micro Frontends: Architecture and Implementation

Micro frontends enable teams to work independently on different parts of an application. Here's how to implement this architecture.

## What are Micro Frontends?

Micro frontends extend the microservices concept to the frontend. Each micro frontend is independently developed, tested, and deployed.

## Implementation Strategies

### Module Federation
Webpack 5's Module Federation allows sharing code between applications at runtime. This is one of the most popular approaches.

### Build-time Integration
Combine micro frontends at build time. Simpler but less flexible than runtime integration.

### Runtime Integration
Load micro frontends at runtime using JavaScript. More flexible but requires careful orchestration.

## Benefits

- Team autonomy
- Independent deployments
- Technology diversity
- Scalability

## Challenges

- Shared state management
- Styling conflicts
- Performance overhead
- Testing complexity

## Conclusion

Micro frontends are powerful but require careful planning. Start simple and evolve your architecture as needed.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-04-12',
    tags: ['Architecture', 'Micro Frontends', 'Webpack'],
    readTime: 8
  },
  {
    id: 6,
    slug: 'tailwind-css-advanced-techniques',
    title: 'Tailwind CSS: Advanced Techniques and Patterns',
    excerpt: 'Master Tailwind CSS with advanced techniques, patterns, and customization strategies.',
    content: `# Tailwind CSS: Advanced Techniques and Patterns

Tailwind CSS has revolutionized how we write CSS. Let's explore advanced techniques to get the most out of it.

## Customization

### Theme Configuration
Extend the default theme in tailwind.config.js to match your design system.

### Custom Plugins
Create custom plugins for reusable component patterns.

## Advanced Patterns

### Component Abstraction
Create component abstractions using @apply for commonly used patterns.

### Responsive Design
Leverage Tailwind's responsive utilities for mobile-first design.

## Performance

### Purge Configuration
Configure content paths correctly to ensure unused styles are purged.

### JIT Mode
Use JIT mode for faster builds and better performance in development.

## Best Practices

- Use semantic class names
- Leverage composition over repetition
- Keep utilities close to elements
- Use design tokens

## Conclusion

Tailwind CSS is powerful when used correctly. These advanced techniques will help you build better designs faster.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-05-01',
    tags: ['Tailwind CSS', 'CSS', 'Design'],
    readTime: 5
  },
  {
    id: 7,
    slug: 'state-management-comparison',
    title: 'State Management in React: A Complete Comparison',
    excerpt: 'Comparing different state management solutions for React applications.',
    content: `# State Management in React: A Complete Comparison

Choosing the right state management solution is crucial for React applications. Let's compare the options.

## Built-in Solutions

### useState and useReducer
Perfect for local component state. Use for simple state that doesn't need to be shared.

### Context API
Good for sharing state across components without prop drilling. Best for infrequently changing data.

## Third-party Libraries

### Redux
Most popular and battle-tested. Great for complex applications but requires boilerplate.

### Zustand
Lightweight and simple. Great alternative to Redux with less boilerplate.

### Jotai
Atomic state management. Very flexible and performant.

### Recoil
Facebook's solution for complex state management. Good for large teams.

## When to Use What

- Local state: useState
- Shared UI state: Context API
- Server state: React Query or SWR
- Complex global state: Redux, Zustand, or Jotai

## Conclusion

Choose based on your needs. Start simple and upgrade when necessary.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-05-18',
    tags: ['React', 'State Management', 'Redux'],
    readTime: 6
  },
  {
    id: 8,
    slug: 'testing-react-applications',
    title: 'Testing React Applications: Best Practices',
    excerpt: 'Learn how to effectively test React applications with modern tools and practices.',
    content: `# Testing React Applications: Best Practices

Testing is crucial for maintaining quality in React applications. Here's how to do it effectively.

## Testing Tools

### Jest
JavaScript testing framework. Great for unit and integration tests.

### React Testing Library
Simple and complete testing utilities for React. Encourages best practices.

### Playwright
End-to-end testing framework. Great for testing user flows.

## Testing Strategies

### Unit Tests
Test individual functions and utilities in isolation.

### Component Tests
Test React components in isolation with React Testing Library.

### Integration Tests
Test how components work together.

### E2E Tests
Test complete user flows from start to finish.

## Best Practices

- Test user behavior, not implementation
- Keep tests simple and focused
- Use test-driven development when appropriate
- Maintain good test coverage

## Conclusion

Good testing practices lead to more maintainable and reliable applications. Invest time in setting up proper testing infrastructure.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-06-05',
    tags: ['Testing', 'React', 'Jest'],
    readTime: 7
  },
  {
    id: 9,
    slug: 'ci-cd-nextjs-projects',
    title: 'CI/CD for Next.js Projects: Setup and Best Practices',
    excerpt: 'Setting up continuous integration and deployment for Next.js applications.',
    content: `# CI/CD for Next.js Projects: Setup and Best Practices

Automating your deployment pipeline saves time and reduces errors. Here's how to set up CI/CD for Next.js.

## Why CI/CD?

- Automatic testing
- Consistent deployments
- Faster release cycles
- Reduced manual errors

## Setup Options

### Vercel
Vercel provides excellent Next.js support with automatic deployments from Git.

### GitHub Actions
Flexible and powerful CI/CD solution. Great for custom workflows.

### GitLab CI
Integrated CI/CD in GitLab. Good alternative to GitHub Actions.

## Best Practices

### Automated Testing
Run tests on every commit to catch issues early.

### Preview Deployments
Deploy preview environments for pull requests.

### Staging Environment
Maintain a staging environment that mirrors production.

### Production Deployments
Use manual approval gates for production deployments.

## Conclusion

CI/CD is essential for modern development workflows. Set it up early and iterate on your process.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-06-22',
    tags: ['CI/CD', 'Next.js', 'DevOps'],
    readTime: 5
  },
  {
    id: 10,
    slug: 'accessibility-web-applications',
    title: 'Accessibility in Web Applications: A Developer\'s Guide',
    excerpt: 'Making web applications accessible to all users is not just ethical, it\'s good business.',
    content: `# Accessibility in Web Applications: A Developer's Guide

Accessibility ensures your applications are usable by everyone, regardless of their abilities.

## Why Accessibility Matters

- Legal compliance (WCAG)
- Broader user base
- Better SEO
- Improved UX for all users

## Key Principles

### Perceivable
Information must be presentable to users in ways they can perceive.

### Operable
Interface components must be operable by all users.

### Understandable
Information and UI operation must be understandable.

### Robust
Content must be robust enough for various assistive technologies.

## Implementation

### Semantic HTML
Use proper HTML elements for their intended purpose.

### ARIA Labels
Use ARIA attributes when HTML isn't sufficient.

### Keyboard Navigation
Ensure all functionality is accessible via keyboard.

### Screen Reader Support
Test with screen readers and ensure proper announcements.

## Testing Tools

- axe DevTools
- WAVE
- Lighthouse
- Manual testing

## Conclusion

Accessibility should be built in from the start, not added as an afterthought. Make it part of your development process.`,
    author: 'Dibyan Maharjan',
    publishedAt: '2024-07-10',
    tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
    readTime: 6
  }
];
