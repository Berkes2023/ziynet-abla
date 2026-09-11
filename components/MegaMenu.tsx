"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { services } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { site } from "@/content/site";

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  function openNow() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  }

  function closeSoon() {
    closeTimeout.current = setTimeout(() => setOpen(false), 120);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-forest-900/80 transition hover:text-forest-900"
        aria-expanded={open}
        aria-controls="services-mega-menu"
        onClick={() => setOpen((value) => !value)}
      >
        Services
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div
          id="services-mega-menu"
          className="animate-fade-in absolute left-1/2 top-full z-40 w-[min(56rem,calc(100vw-3rem))] -translate-x-1/2 pt-4"
        >
          <div className="grid grid-cols-1 gap-6 rounded-2xl border border-forest-100 bg-surface p-6 shadow-xl lg:grid-cols-[1.6fr_1fr]">
            <div className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-forest-50"
                  onClick={() => setOpen(false)}
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-forest-50 text-forest-700 group-hover:bg-forest-700 group-hover:text-forest-50 transition-colors">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-forest-900">
                      {service.title}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-forest-900/60">
                      {service.teaser}
                    </span>
                  </span>
                </Link>
              ))}
              <Link
                href="/services"
                className="flex items-center gap-2 rounded-xl p-3 text-sm font-semibold text-gold-700 hover:bg-gold-50"
                onClick={() => setOpen(false)}
              >
                View all services →
              </Link>
            </div>

            <div className="flex flex-col justify-between rounded-xl bg-forest-800 p-6 text-forest-50">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
                  New enquiries welcome
                </p>
                <p className="font-display mt-2 text-lg font-semibold">
                  Talk through your horse&apos;s care
                </p>
                <p className="mt-2 text-sm leading-relaxed text-forest-100/80">
                  Based in {site.location}, covering {site.serviceArea}.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gold-400 px-4 py-2.5 text-sm font-semibold text-forest-900 transition hover:bg-gold-300"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
