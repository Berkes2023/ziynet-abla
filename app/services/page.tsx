import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Equine veterinary services, from routine care to emergency work.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-forest-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Equine veterinary care, done thoroughly"
            description="Every visit starts with a proper history and examination — so any treatment plan is built on a clear diagnosis, not assumptions."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="That's alright — describe what's going on and I'll point you in the right direction."
      />
    </>
  );
}
