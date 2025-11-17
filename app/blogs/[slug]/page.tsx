import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogsData.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[var(--sand)] text-[var(--ink)] min-h-screen">
      <article className="section-shell space-y-8 max-w-3xl">
        <Link href="/blogs" className="inline-link text-sm font-semibold uppercase tracking-[0.3em]">
          Back to writing
        </Link>

        <header className="space-y-4">
          <p className="mono-label">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            • {post.readTime} min read
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="space-y-4 text-lg text-[var(--muted)] leading-relaxed">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h2 key={`${paragraph}-${index}`} className="text-3xl font-semibold tracking-tight text-[var(--ink)]">
                  {paragraph.replace("# ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h3 key={`${paragraph}-${index}`} className="text-2xl font-semibold tracking-tight text-[var(--ink)]">
                  {paragraph.replace("## ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h4 key={`${paragraph}-${index}`} className="text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {paragraph.replace("### ", "")}
                </h4>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <li key={`${paragraph}-${index}`} className="ml-6 list-disc">
                  {paragraph.replace("- ", "")}
                </li>
              );
            }
            if (paragraph.trim() === "") {
              return <br key={`break-${index}`} />;
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        <footer className="surface-card space-y-2">
          <p className="mono-label">Author</p>
          <p>
            Written by <span className="font-semibold text-[var(--ink)]">{post.author}</span>. Questions?
            <a href="mailto:dibyan.maharjan@gmail.com" className="inline-link ml-2">
              Reach out.
            </a>
          </p>
        </footer>
      </article>
    </main>
  );
}
