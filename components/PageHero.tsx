export function PageHero({ title, lede }: { title: string; lede: string }) {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <p className="font-heading text-sm tracking-wide text-brand uppercase">
          F.A.L.L. Training Institute
        </p>
        <h1 className="mt-2 font-heading text-3xl leading-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-neutral-800">{lede}</p>
      </div>
    </header>
  );
}
