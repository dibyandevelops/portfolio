import Link from "next/link";
import { blogsData } from "@/lib/data";

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { page: pageParam } = await searchParams;
  const page = Number.parseInt(pageParam || "1", 10);
  const pageSize = 6;
  const start = (page - 1) * pageSize;
  const paginated = blogsData.slice(start, start + pageSize);
  const totalPages = Math.ceil(blogsData.length / pageSize);

  return (
    <main className="bg-[var(--sand)] text-[var(--ink)] min-h-screen">
      <section className="section-shell space-y-12">
        <header className="space-y-3">
          <p className="section-heading">Writing</p>
          <h1 className="text-4xl font-semibold tracking-tight">Notes on process, systems, and craft.</h1>
          <p className="text-[var(--muted)]">
            Field guides for design systems, performance, state management, and helping teams keep momentum.
          </p>
        </header>

        <div className="space-y-6">
          {paginated.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="surface-card block space-y-2">
              <p className="mono-label">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                • {post.readTime} min read
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">{post.title}</h2>
              <p className="text-[var(--muted)]">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em]">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <Link
              key={pageNumber}
              href={`/blogs?page=${pageNumber}`}
              className={`inline-link ${pageNumber === page ? "text-[var(--ink)]" : "text-[var(--muted)]"}`}
              prefetch={false}
            >
              {pageNumber.toString().padStart(2, "0")}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

