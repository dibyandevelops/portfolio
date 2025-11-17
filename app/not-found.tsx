import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--sand)] text-[var(--ink)] px-4">
      <div className="surface-card text-center space-y-4 max-w-md">
        <p className="mono-label">404</p>
        <h1 className="text-3xl font-semibold tracking-tight">This page stepped out for coffee.</h1>
        <p className="text-[var(--muted)]">Let’s head back to work.</p>
        <Link href="/" className="inline-link text-sm font-semibold uppercase tracking-[0.3em]">
          Return home
        </Link>
      </div>
    </main>
  );
}

