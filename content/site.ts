export const site = {
  name: "Ziynet Sevsal",
  credential: "DVM",
  role: "Equine Veterinarian",
  tagline: "Compassionate, evidence-based equine veterinary care",
  email: "ziynetsevsal@gmail.com",
  phone: "0090 533 848 5366",
  phoneHref: "tel:00905338485366",
  linkedin: "https://www.linkedin.com/in/ziynet-sevsal-54581b252",
  location: "Cyprus",
  serviceArea: "Cyprus",
  qualifications: [
    "DVM, Ankara University Veterinary Faculty (Honours, English Course)",
    "BSc Veterinary Biosciences, University of Surrey (First Class Honours)",
  ],
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Articles", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;
