import {
  Activity,
  ScanLine,
  Stethoscope,
  HeartPulse,
  Syringe,
  Siren,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/content/services";

const icons: Record<ServiceIconName, LucideIcon> = {
  activity: Activity,
  "scan-line": ScanLine,
  stethoscope: Stethoscope,
  "heart-pulse": HeartPulse,
  syringe: Syringe,
  siren: Siren,
  "shield-check": ShieldCheck,
};

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.75} aria-hidden="true" />;
}
