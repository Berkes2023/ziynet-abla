import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { education } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, ${site.role.toLowerCase()}.`,
};

const achievements = [
  "Honours graduate, Ankara University Veterinary Faculty (GPA 3.92/4.00)",
  "First Class Honours, BSc Veterinary Biosciences, University of Surrey",
  "TÜBİTAK 2209-A student research project on zoonotic helminth infections",
  "Congress Organiser, International & National Veterinary Equine Science Congresses (2020, 2022)",
  "Vice President, Ankara University Equestrian Sports & Students Association",
  "National-level show jumping competitor",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest-50 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="About" title={`Hi, I'm ${site.name}`} />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-forest-900/80">
            <p>
              I&apos;m an equine veterinarian based in Cyprus, currently
              working full-time in ambulatory and field practice. After
              starting my veterinary education at the University of Surrey, I
              transferred to Ankara University Faculty of Veterinary
              Medicine, graduating in 2024 with an Honours DVM.
            </p>
            <p>
              My passion for horses began early, through my father&apos;s
              horse, Natali — an introduction to riding that grew into
              competitive show jumping and, eventually, a career built
              entirely around equine welfare. As Vice President of my
              university&apos;s Equine Society, I helped organise national
              and international equine congresses and contributed to equine
              welfare initiatives alongside my studies.
            </p>
            <p>
              Alongside my current role, I&apos;ve completed clinical
              placements with racehorses in Istanbul, Veliefendi Racecourse,
              at the Equine Clinic of the University of Teramo in Italy, and
              across several equine and mixed practices in Cyprus —
              experience that shaped a broad, hands-on approach to equine
              medicine, from internal medicine and dentistry to diagnostic
              imaging, reproduction, endoscopy and surgery.
            </p>
            <p>
              My goal is simple: to keep developing my clinical expertise
              while providing calm, compassionate, high-quality care — for
              the horse in front of me, and the owner who loves them.
            </p>
          </div>

          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/about-brown-horse.jpg"
              alt={`${site.name} with a horse in her care`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 48rem, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Education" title="Academic background" />
            <ul className="mt-6 space-y-6">
              {education.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-forest-100 bg-surface p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                    {item.period}
                  </p>
                  <p className="font-display mt-1 text-lg font-semibold text-forest-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-forest-900/60">
                    {item.place}
                  </p>
                  <p className="mt-2 text-sm text-forest-900/70">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Highlights" title="Achievements" />
            <ul className="mt-6 space-y-3">
              {achievements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-forest-100 bg-surface p-4 text-sm text-forest-900/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's talk about your horse"
        description="Get in touch to discuss a health concern, a routine visit, or anything in between."
      />
    </>
  );
}
