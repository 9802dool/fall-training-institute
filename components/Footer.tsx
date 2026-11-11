import Link from "next/link";
import { DisclaimerLine } from "@/components/DisclaimerLine";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="no-print mt-auto bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="font-heading text-lg">F.A.L.L. Training Institute</p>
          <p className="mt-1 text-sm text-white/80">{site.legalName}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a className="underline decoration-white/40 underline-offset-4" href={phone.href}>
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="underline decoration-white/40 underline-offset-4"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            <li>Address: {site.address}</li>
            <li>Hours: {site.hours}</li>
          </ul>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            <li>
              <Link className="underline decoration-white/40 underline-offset-4" href="/disclaimer">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link className="underline decoration-white/40 underline-offset-4" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="underline decoration-white/40 underline-offset-4" href="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="underline decoration-white/40 underline-offset-4" href="/resources">
                Guides
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm leading-relaxed text-white/90">
          <DisclaimerLine />
        </div>
      </div>
    </footer>
  );
}
