export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "spotting-early-signs-of-laminitis",
    title: "Spotting the Early Signs of Laminitis",
    excerpt:
      "Laminitis is easier to manage the earlier it's caught. Here are the signs every owner should know before the classic 'sawhorse' stance appears.",
    date: "2026-02-14",
    readTime: "4 min read",
    body: [
      "Laminitis rarely appears out of nowhere. In most cases there are subtle warning signs in the days beforehand — a shortened stride, reluctance to turn tightly, or a slightly warm hoof wall that's easy to miss during a quick check.",
      "The classic 'sawhorse' stance, with the horse rocked back onto its heels to take weight off the front feet, is a late sign. By that stage, meaningful damage may already be underway inside the hoof.",
      "Owners of good-doers, ponies, and any horse or pony with a history of Equine Metabolic Syndrome or Cushing's (PPID) should be especially vigilant, particularly around spring grass growth. A bounding digital pulse, increased heat in the hoof, or a shift in weight-bearing are all reasons to call your vet the same day, not wait and see.",
      "If you're ever unsure, an early phone conversation costs nothing — a delayed one can cost a great deal in recovery time.",
    ],
  },
  {
    slug: "what-happens-during-a-pre-purchase-exam",
    title: "What Actually Happens During a Pre-Purchase Exam",
    excerpt:
      "A pre-purchase exam (PPE) is one of the best investments you can make before buying a horse. Here's what it covers, and why 'passing' isn't the point.",
    date: "2026-01-22",
    readTime: "5 min read",
    body: [
      "A pre-purchase examination isn't a pass/fail test — it's an independent, evidence-based assessment designed to give you the full picture before you commit to a horse, so you can make the decision that's right for you.",
      "A thorough PPE typically includes a detailed clinical examination at rest, assessment of the eyes, heart and lungs, a full orthopaedic and lameness assessment in-hand and under exercise, flexion tests, and often trot-up on a hard and soft surface.",
      "Depending on the horse's intended use and the buyer's wishes, this can extend to diagnostic imaging such as X-rays, blood tests for prior medication, or an endoscopic examination.",
      "The goal is always the same: an honest, unbiased opinion of the horse in front of us on the day, so you can weigh any findings against what you need the horse to do.",
    ],
  },
  {
    slug: "colic-when-to-call-your-vet",
    title: "Colic: When to Call Your Vet, Not Wait Until Morning",
    excerpt:
      "Not every colic is an emergency, but some are — and the difference isn't always obvious from across the yard. A practical guide to what to watch for.",
    date: "2025-12-03",
    readTime: "4 min read",
    body: [
      "Colic is a symptom, not a diagnosis — it simply means abdominal pain, and the underlying cause can range from mild gas build-up to a surgical emergency. That range is exactly why it's worth taking every episode seriously.",
      "Mild, intermittent signs — occasional pawing, turning to look at the flank, a slightly reduced appetite — are worth a phone call to describe what you're seeing, even if they resolve on their own.",
      "Repeated rolling, sweating without exertion, a distended abdomen, an elevated heart rate, or a horse that is unable to settle at all are signs that need an urgent visit, not a wait-and-see approach.",
      "Keep water available, remove access to feed until you've spoken to a vet, and avoid walking a horse to exhaustion — a short, calm walk can help, but it isn't a substitute for a veterinary assessment.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
