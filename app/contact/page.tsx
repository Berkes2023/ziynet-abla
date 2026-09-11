import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}, ${site.role.toLowerCase()}.`,
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Send a message with a few details about your horse, and I'll get back to you as soon as I can. For genuine emergencies, please call directly."
          />
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 rounded-xl border border-forest-100 bg-surface p-4">
              <Mail className="h-5 w-5 flex-none text-gold-600" />
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-medium text-forest-900 hover:text-gold-700"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-forest-100 bg-surface p-4">
              <Phone className="h-5 w-5 flex-none text-gold-600" />
              <a
                href={site.phoneHref}
                className="text-sm font-medium text-forest-900 hover:text-gold-700"
              >
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-xl border border-forest-100 bg-surface p-4">
              <MapPin className="h-5 w-5 flex-none text-gold-600" />
              <span className="text-sm font-medium text-forest-900">
                {site.serviceArea}
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-forest-100 bg-surface p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
