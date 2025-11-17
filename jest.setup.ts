import '@testing-library/jest-dom';

// Mock next/navigation where needed; tests can override as needed
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

// Next.js Image can be treated as a simple img in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));
