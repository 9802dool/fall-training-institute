export function PageHero({ title, lede }: { title: string; lede: string }) {
  return (
    <header className="border-b border-white/10 bg-black">
      <div className="stripe-edge" aria-hidden="true" />
      <div className="hero-wash">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
          <p className="font-heading text-sm tracking-[0.16em] text-red uppercase">
            F.A.L.L. Training Institute
          </p>
          <h1 className="mt-3 font-heading text-3xl leading-tight font-bold text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-silver-light">{lede}</p>
        </div>
      </div>
    </header>
  );
}
