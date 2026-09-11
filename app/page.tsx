import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { HeroGraphic } from "@/components/HeroGraphic";
import { services } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { site } from "@/content/site";

const stats = [
  { label: "Hands-on training across", value: "4 countries" },
  { label: "Veterinary degree", value: "Honours (3.92/4.00)" },
  { label: "Current focus", value: "Ambulatory equine practice" },
];

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-b from-forest-50 to-background py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              {site.role} · {site.location}
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-forest-900 sm:text-5xl">
              Compassionate, evidence-based care for your horse
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-900/70">
              I&apos;m Ziynet Sevsal, an equine veterinarian providing
              attentive, thorough care — from routine health checks to
              complex lameness and medical cases — across {site.serviceArea}.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-900 transition hover:bg-gold-400"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-forest-300 px-6 py-3.5 text-sm font-semibold text-forest-900 transition hover:border-forest-500 hover:bg-forest-50"
              >
                View Services
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-forest-100 pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-forest-900/50">
                    {stat.label}
                  </dt>
                  <dd className="font-display mt-1 text-lg font-semibold text-forest-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroGraphic />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="How I can help"
            title="Equine veterinary services"
            description="From routine wellness visits to complex diagnostic and emergency work, every case gets a thorough, honest approach."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest-50 py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="About" title="A vet who listens first" />
            <p className="mt-6 leading-relaxed text-forest-900/70">
              My passion for horses started young, and it shaped every step
              since — from competing in show jumping, to leading my
              university&apos;s Equine Society, to hands-on clinical
              experience across Turkey, Italy, Cyprus and the UK. I bring
              that full-circle perspective to every horse I treat: rigorous
              clinical thinking, paired with genuine care for the horse and
              the person standing next to them.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-800"
            >
              Read my full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-forest-100 bg-surface p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              Currently practising at
            </p>
            <p className="font-display mt-2 text-xl font-semibold text-forest-900">
              Simon Constable&apos;s Equine Vets
            </p>
            <p className="mt-1 text-sm text-forest-900/60">
              Manchester, UK — since October 2024
            </p>
            <ul className="mt-6 space-y-2 text-sm text-forest-900/70">
              <li>· Ambulatory and field practice, plus referred clinical work</li>
              <li>· Lameness, diagnostics, dentistry, reproduction & more</li>
              <li>· Regular on-call and weekend emergency cover</li>
            </ul>
            <Link
              href="/experience"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-800"
            >
              See full experience
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Articles"
            title="Notes on equine health"
            description="Practical, straightforward guidance for horse owners."
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a question about your horse's health?"
        description="Whether it's routine or urgent, I'm happy to talk it through — get in touch and I'll get back to you as soon as I can."
      />
    </>
  );
}
