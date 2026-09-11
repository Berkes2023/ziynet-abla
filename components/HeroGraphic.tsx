export function HeroGraphic() {
  return (
    <div className="relative isolate flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[2.5rem] bg-forest-800">
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full opacity-40"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.6" fill="var(--gold-300)" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#dots)" />
      </svg>

      <svg
        viewBox="0 0 200 200"
        className="relative h-56 w-56 text-gold-300"
        aria-hidden="true"
      >
        <path
          d="M60 170 C 30 170, 25 130, 30 100 C 35 55, 60 25, 100 25 C 140 25, 165 55, 170 100 C 175 130, 170 170, 140 170"
          fill="none"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <circle cx="48" cy="168" r="7" fill="currentColor" />
        <circle cx="152" cy="168" r="7" fill="currentColor" />
      </svg>

      <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-forest-900/70 p-4 text-forest-50 backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
          DVM · Ankara University
        </p>
        <p className="mt-1 text-sm text-forest-100/80">
          Honours graduate, English Veterinary Course
        </p>
      </div>
    </div>
  );
}
