import Link from "next/link";
import { DisclaimerLine } from "@/components/DisclaimerLine";
import { site } from "@/lib/site";

const linkClass = "underline decoration-white/40 underline-offset-4 hover:decoration-red";

export function Footer() {
  return (
    <footer className="no-print mt-auto bg-black text-white">
      <div className="stripe-edge" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="font-heading text-lg font-bold">F.A.L.L. Training Institute</p>
          <p className="mt-1 text-sm text-silver-light">{site.legalName}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a className={`inline-flex min-h-11 items-center gap-2 ${linkClass}`} href={phone.href}>
                  <Mark />
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className={`inline-flex min-h-11 items-center gap-2 ${linkClass}`}
                href={`mailto:${site.email}`}
              >
                <Mark />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            <li>
              <Link className={`inline-flex min-h-11 items-center ${linkClass}`} href="/disclaimer">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link className={`inline-flex min-h-11 items-center ${linkClass}`} href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className={`inline-flex min-h-11 items-center ${linkClass}`} href="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className={`inline-flex min-h-11 items-center ${linkClass}`} href="/resources">
                Guides
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-4 py-4 text-sm leading-relaxed text-silver-light">
          <DisclaimerLine />
        </div>
      </div>
      <div className="stripe-edge" aria-hidden="true" />
    </footer>
  );
}

function Mark() {
  return <span aria-hidden="true" className="inline-block h-2 w-2 shrink-0 bg-red-deep" />;
}
