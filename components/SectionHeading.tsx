export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-2 text-3xl font-semibold text-forest-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-forest-900/70">
          {description}
        </p>
      ) : null}
    </div>
  );
}
