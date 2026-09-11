import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/content/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-forest-100 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-md"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
        {formatDate(post.date)} · {post.readTime}
      </p>
      <h3 className="font-display mt-3 text-xl font-semibold text-forest-900">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-forest-900/70">
        {post.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-700">
        Read article
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
