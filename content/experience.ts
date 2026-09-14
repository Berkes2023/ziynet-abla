export type TimelineEntry = {
  period: string;
  title: string;
  place: string;
  location: string;
  points: string[];
};

export const workHistory: TimelineEntry[] = [
  {
    period: "Oct 2024 — Present",
    title: "Equine Veterinary Surgeon",
    place: "Simon Constable's Equine Vets",
    location: "Manchester, UK",
    points: [
      "Full-time ambulatory and field practice, with clinical work for referred cases",
      "Emergencies, lameness, diagnostic imaging, dermatology, ophthalmology, dentistry, endoscopy, gastroscopy, routine, reproduction",
      "Weekly on-call night shifts and rotating 48-hour weekend cover",
    ],
  },
  {
    period: "Aug 2024",
    title: "Clinical Intern, Equine Medicine & Surgery",
    place: "University of Teramo",
    location: "Teramo, Italy",
    points: [
      "Daily inpatient monitoring, treatment protocols and post-operative care",
      "Shadowed colic and castration surgery, lameness and orthopaedic work-ups",
      "Diagnostic imaging with ultrasound and X-ray; necropsy and lab skills",
    ],
  },
  {
    period: "Jun — Aug 2023",
    title: "Veterinary Intern",
    place: "Garfield Veterinary Clinic",
    location: "Kyrenia, Cyprus",
    points: [
      "Assisted in surgery and examination rooms; night shifts and on-call cover",
      "Routine treatments, injections and wound care for inpatients",
      "Diagnostic interpretation of ultrasound, X-ray, haematology and biochemistry",
    ],
  },
  {
    period: "Jul — Aug 2022",
    title: "Veterinary Intern",
    place: "Istanbul Hippodrome Equine Hospital, Turkey Jockey Club",
    location: "Istanbul, Turkey",
    points: [
      "Routine examination of racehorses admitted to the clinic",
      "Wound management, bandaging and surgical assistance",
      "Diagnostic imaging including ultrasound, X-ray, CT and MRI",
    ],
  },
  {
    period: "2021 — 2022",
    title: "Voluntary Veterinary Intern",
    place: "Anka Veterinary Clinic",
    location: "Nicosia, Cyprus",
    points: [
      "Emergency and night-shift assistance across surgery and consultations",
      "Diagnostic imaging, injections, vaccinations and IV/drip treatments",
    ],
  },
];

export const education = [
  {
    period: "2019 — 2024",
    title: "Doctor of Veterinary Medicine (English Course)",
    place: "Ankara University, Veterinary Faculty",
    detail: "Honours graduate — GPA 3.92 / 4.00",
  },
  {
    period: "2018 — 2019",
    title: "BSc Veterinary Biosciences",
    place: "University of Surrey, UK",
    detail: "First Class Honours",
  },
];

export const continuingEducation: string[] = [
  "BEVA Congress (2025)",
  "BOVA & Nextmune Equine Roadshow (2025)",
  "University of Liverpool Equine Referral Evening (2025)",
  "Equine Medicine Masterclass — respiratory, cardiac & liver disease (2024)",
  "International Equine Science Congress, Ankara — Congress Organiser (2020 & 2022)",
  "BEVA Congress (2026)",
];
