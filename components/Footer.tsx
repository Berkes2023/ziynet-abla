import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { primaryNav, site } from "@/content/site";
import { services } from "@/content/services";

export function Footer() {
  return (
    <footer className="border-t border-forest-100 bg-forest-900 text-forest-100">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-lg font-semibold text-white">
            {site.name}
          </span>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {site.role}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-forest-100/70">
            {site.tagline}, serving {site.serviceArea}.
          </p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-200"
          >
            <ExternalLink className="h-4 w-4" />
            Connect on LinkedIn
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-forest-100/80">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-forest-100/80">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-300">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-forest-100/80">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-none text-gold-300" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-none text-gold-300" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-none text-gold-300" />
              {site.location}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-forest-800">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-forest-100/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Built with care for horses and their owners.</p>
        </Container>
      </div>
    </footer>
  );
}
