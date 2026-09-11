import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { blogPosts, getPostBySlug } from "@/content/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900/60 hover:text-forest-900"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold-600">
            {formatDate(post.date)} · {post.readTime}
          </p>
          <h1 className="font-display mt-2 text-3xl font-semibold text-forest-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-forest-900/80">
            {post.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </article>

      <CTASection
        title="Have a question after reading this?"
        description="Every horse is different — get in touch if you'd like to talk through your own situation."
      />
    </>
  );
}
