"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Menu, Phone } from "lucide-react";
import { primaryNav, site } from "@/content/site";
import { Container } from "@/components/Container";
import { MegaMenu } from "@/components/MegaMenu";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest-100 bg-surface/95 backdrop-blur">
      <div className="hidden bg-forest-900 text-forest-50 lg:block">
        <Container className="flex items-center justify-end gap-6 py-1.5 text-xs">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 hover:text-gold-300"
          >
            <Mail className="h-3.5 w-3.5" />
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 hover:text-gold-300"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.phone}
          </a>
        </Container>
      </div>

      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-semibold text-forest-900">
            {site.name}
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-600">
            {site.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) =>
            item.label === "Services" ? (
              <MegaMenu key={item.href} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-forest-900/80 transition hover:text-forest-900"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-forest-900 transition hover:bg-gold-400 lg:inline-flex"
          >
            Get in Touch
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="rounded-full p-2 text-forest-900 hover:bg-forest-50 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {mobileOpen ? <MobileNav onClose={() => setMobileOpen(false)} /> : null}
    </header>
  );
}
