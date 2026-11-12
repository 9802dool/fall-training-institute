import Link from "next/link";
import { priceOnRequest } from "@/lib/fees";

export function ServiceCard({
  title,
  summary,
  href,
  price = priceOnRequest,
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
    <Link href={href} className="card flex h-full flex-col p-6 no-underline">
      <h2 className="font-heading text-2xl text-white">{title}</h2>
      {meta ? <p className="mt-2 text-sm text-silver">{meta}</p> : null}
      <p className="mt-3 flex-1 leading-relaxed text-silver-light">{summary}</p>
      <p className="mt-4 font-semibold text-red">{price}</p>
      <span className="mt-4 font-semibold text-white underline decoration-red underline-offset-4">
        {linkLabel}
      </span>
    </Link>
  );
}
