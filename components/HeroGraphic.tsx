import Image from "next/image";

export function HeroGraphic() {
  return (
    <div className="relative isolate flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[2.5rem] bg-forest-800">
      <Image
        src="/images/hero-grey-horse.jpg"
        alt="Ziynet Sevsal with a horse in her care"
        fill
        priority
        className="object-cover"
        sizes="(min-width: 1024px) 28rem, 100vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-900/85 via-forest-900/20 to-transparent p-6 pt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">
          DVM · Ankara University
        </p>
        <p className="mt-1 text-sm text-forest-100/90">
          Honours graduate, English Veterinary Course
        </p>
      </div>
    </div>
  );
}
