import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { CTASection } from "@/components/CTASection";
import { ServiceIcon } from "@/components/ServiceIcon";
import { getServiceBySlug, services } from "@/content/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.teaser,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-forest-50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-900/60 hover:text-forest-900"
          >
            <ArrowLeft className="h-4 w-4" />
            All services
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800 text-gold-300">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>
            <h1 className="font-display text-3xl font-semibold text-forest-900 sm:text-4xl">
              {service.title}
            </h1>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-forest-900/70">
            {service.intro}
          </p>
          {service.image ? (
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 48rem, 100vw"
              />
            </div>
          ) : null}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-forest-900">
            What this covers
          </h2>
          <ul className="mt-6 space-y-3">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 rounded-xl border border-forest-100 bg-surface p-4 text-forest-900/80"
              >
                <Check className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                {bullet}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title={`Have a question about ${service.title.toLowerCase()}?`}
        description="Get in touch and I'll help you understand the options for your horse."
      />
    </>
  );
}
