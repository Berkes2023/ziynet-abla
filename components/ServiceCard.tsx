import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-forest-100 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-forest-300 hover:shadow-md"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-forest-50 text-forest-700 group-hover:bg-forest-700 group-hover:text-forest-50 transition-colors">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="font-display mt-4 text-xl font-semibold text-forest-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-forest-900/70">
        {service.teaser}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-700">
        Find out more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
