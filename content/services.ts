export type ServiceIconName =
  | "activity"
  | "scan-line"
  | "stethoscope"
  | "heart-pulse"
  | "syringe"
  | "siren"
  | "shield-check";

export type Service = {
  slug: string;
  icon: ServiceIconName;
  title: string;
  teaser: string;
  intro: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "lameness-orthopaedics",
    icon: "activity",
    title: "Lameness & Orthopaedics",
    teaser: "Thorough lameness workups from first lead-up to full diagnosis.",
    intro:
      "A methodical approach to lameness — from initial history and trot-up through to flexion tests, nerve blocks and imaging — so treatment is based on a clear diagnosis, not guesswork.",
    bullets: [
      "Full lameness investigations and orthopaedic examinations",
      "Foot abscess, keratoma and canker diagnosis & treatment",
      "Laminitis diagnosis, treatment and ongoing management",
      "Extracorporeal shock wave therapy",
      "Soft tissue injury assessment and rehabilitation planning",
    ],
  },
  {
    slug: "diagnostic-imaging",
    icon: "scan-line",
    title: "Diagnostic Imaging & Endoscopy",
    teaser: "On-site X-ray and ultrasound, plus gastroscopy and endoscopy.",
    intro:
      "Modern diagnostics done calmly and efficiently, wherever your horse is based — clear imaging means faster answers and a treatment plan you can trust.",
    bullets: [
      "Digital radiography (X-ray)",
      "Diagnostic ultrasound scanning (USG)",
      "Gastroscopy for gastric ulcer diagnosis and monitoring",
      "Endoscopy and guttural pouch wash",
      "Result interpretation explained in plain language",
    ],
  },
  {
    slug: "medicine-dentistry",
    icon: "stethoscope",
    title: "Internal Medicine & Dentistry",
    teaser: "Medical cases, dermatology, respiratory and endocrine care.",
    intro:
      "Careful, detailed medical work-ups for the cases that don't have an obvious answer on first look — from skin and respiratory complaints to endocrine disorders and routine dentistry.",
    bullets: [
      "Colic work-up and medical management",
      "Respiratory disease: equine asthma, COPD, allergies",
      "Dermatology and allergy investigation",
      "Endocrine disease: Equine Metabolic Syndrome & Cushing's (PPID)",
      "Routine and advanced dentistry",
      "Ophthalmology: corneal ulcers, uveitis, conjunctivitis",
    ],
  },
  {
    slug: "reproduction-foaling",
    icon: "heart-pulse",
    title: "Reproduction & Foaling",
    teaser: "Mare scanning, foaling support and postpartum care.",
    intro:
      "Support through every stage of the breeding season, from early pregnancy scanning to a safe foaling and attentive aftercare for mare and foal.",
    bullets: [
      "Mare reproductive scanning",
      "Foaling attendance and support",
      "Postpartum care for mare and foal",
      "Breeding soundness advice",
    ],
  },
  {
    slug: "surgery-sedation",
    icon: "syringe",
    title: "Surgery & Sedation",
    teaser: "Standing and general anaesthetic procedures, safely managed.",
    intro:
      "Surgical and sedation procedures carried out with careful attention to pre- and post-operative care, from routine castration to wound management.",
    bullets: [
      "Castration under general anaesthesia or standing sedation",
      "Wound management, suturing and bandaging",
      "Sedation for clipping, farriery or minor procedures",
      "Anaesthesia induction, monitoring and recovery",
    ],
  },
  {
    slug: "emergency-ambulatory",
    icon: "siren",
    title: "Emergency & Ambulatory Care",
    teaser: "Responsive field care for the moments that can't wait.",
    intro:
      "Emergencies are stressful enough without delay — ambulatory visits mean your horse is assessed and treated in a familiar environment, as quickly as possible.",
    bullets: [
      "Colic, choke and acute abdominal cases",
      "Laminitis and grass sickness",
      "Wounds, septic shock and toxic-plant intoxications",
      "Infectious disease management: strangles, EHV, influenza",
      "Biosecurity guidance and quarantine planning",
    ],
  },
  {
    slug: "routine-health",
    icon: "shield-check",
    title: "Pre-Purchase & Routine Health",
    teaser: "Vaccinations, health checks and pre-purchase examinations.",
    intro:
      "Preventative care and honest, thorough pre-purchase examinations — giving you the information you need to make confident decisions about your horse's health.",
    bullets: [
      "Pre-purchase examinations (PPE)",
      "Vaccination programmes",
      "Faecal worm egg counts and tailored deworming protocols",
      "Routine health checks",
      "Microchipping and ID verification",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
