import Link from "next/link";
import { Container } from "@/components/Container";

export function CTASection({
  title,
  description,
  buttonLabel = "Get in Touch",
  href = "/contact",
}: {
  title: string;
  description: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-forest-900 py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-forest-100/80">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-900 transition hover:bg-gold-400"
        >
          {buttonLabel}
        </Link>
      </Container>
    </section>
  );
}
