import Link from "next/link";

export function ServiceCard({
  title,
  summary,
  href,
  price = "From TT$ TBD",
  meta,
  linkLabel = "Learn more",
}: {
  title: string;
  summary: string;
  href: string;
  price?: string;
  meta?: string;
  linkLabel?: string;
}) {
  return (
    <article className="flex h-full flex-col border border-neutral-200 p-5">
      <h2 className="font-heading text-2xl text-ink">{title}</h2>
      {meta ? <p className="mt-2 text-sm text-neutral-700">{meta}</p> : null}
      <p className="mt-3 flex-1 leading-relaxed text-neutral-800">{summary}</p>
      <p className="mt-4 font-semibold text-brand">{price}</p>
      <Link href={href} className="mt-4 font-semibold text-ink underline underline-offset-4">
        {linkLabel}
      </Link>
    </article>
  );
}
