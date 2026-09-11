import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { workHistory, continuingEducation } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Clinical experience and continuing professional development.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="bg-forest-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Experience"
            title="Clinical background"
            description="Hands-on equine experience across ambulatory practice, referral hospitals and international clinical placements."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <ol className="relative space-y-10 border-l border-forest-200 pl-8">
            {workHistory.map((entry) => (
              <li key={`${entry.title}-${entry.period}`} className="relative">
                <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-forest-500 bg-surface" />
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  {entry.period}
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold text-forest-900">
                  {entry.title}
                </h3>
                <p className="mt-0.5 text-sm text-forest-900/60">
                  {entry.place} · {entry.location}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-forest-900/75">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-forest-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-forest-50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Continuing education"
            title="Staying current"
            description="Regular congresses, masterclasses and referral evenings to keep clinical knowledge sharp."
          />
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {continuingEducation.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-forest-100 bg-surface p-4 text-sm text-forest-900/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection
        title="Want to know more about my experience?"
        description="I'm always happy to talk through my background in more detail — reach out any time."
      />
    </>
  );
}
