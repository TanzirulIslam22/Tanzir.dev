export default function Marquee() {
  const words = ["MERN", "AI-Powered", "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion"];

  const line = (
    <>
      {words.map((word) => (
        <span key={word} className="mx-6 flex items-center gap-6 md:mx-10 md:gap-10">
          <span className="whitespace-nowrap text-2xl font-light tracking-tight text-white/70 md:text-3xl">
            {word}
          </span>
          <span className="text-accent">*</span>
        </span>
      ))}
    </>
  );

  return (
    <section className="overflow-hidden border-y border-white/10 py-6 md:py-8">
      <div className="flex w-max animate-marquee" aria-hidden="true">
        <div className="flex shrink-0 items-center">{line}</div>
        <div className="flex shrink-0 items-center">{line}</div>
      </div>
    </section>
  );
}
