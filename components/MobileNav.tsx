"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { primaryNav } from "@/content/site";
import { services } from "@/content/services";

export function MobileNav({ onClose }: { onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-forest-900/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="animate-fade-in absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-surface p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-forest-900">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-forest-900 hover:bg-forest-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-1">
          {primaryNav.map((item) =>
            item.label === "Services" ? (
              <div key={item.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-forest-900"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen ? (
                  <div className="ml-3 flex flex-col gap-1 border-l border-forest-100 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={onClose}
                        className="rounded-lg px-3 py-2 text-sm text-forest-900/80 hover:bg-forest-50"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={onClose}
                      className="rounded-lg px-3 py-2 text-sm font-semibold text-gold-700"
                    >
                      View all services
                    </Link>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-lg px-3 py-3 text-base font-medium text-forest-900 hover:bg-forest-50"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-forest-900 hover:bg-gold-400"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
