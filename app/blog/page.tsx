import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Articles",
  description: "Practical notes on equine health for horse owners.",
};

export default function BlogPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Articles"
          title="Notes on equine health"
          description="Practical, straightforward guidance for horse owners — written between clinic visits."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
