import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { officialLinks, site } from "@/lib/site";

export const metadata = pageMetadata(
  "FUL renewal checklist",
  "A plain checklist for renewing a Firearm User’s Licence in Trinidad and Tobago, including licences issued before 31 May 2004.",
);

const items = [
  "Renewal form. Confirm it is the current FUL Form 1 at the Government Printery.",
  "Certificate of competence from a licensed firearms instructor.",
  "Medical certificate.",
  "TT$1,000 renewal fee, plus the yearly fee (TT$600 per firearm, or TT$480 for a shotgun).",
];

export default function RenewalGuidePage() {
  return (
    <>
      <PageHero
        title="FUL renewal checklist"
        lede="Use this before the date, not the week the licence runs out."
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold text-neutral-700">Last checked: {site.lastChecked}</p>
        <p className="mt-4 leading-relaxed">
          Licences issued after 31 May 2004 run for 3 years. For earlier licences, a March 2025 High
          Court ruling said they had not expired. Talk to an attorney before you treat an older
          licence as expired or as still valid. The yearly fee still applies either way.
        </p>
        <ul className="print-checks mt-6">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed">
          Keeping a firearm on an expired licence can be treated as having it without a licence. If
          the licence has lapsed, act now and get advice.
        </p>
        <p className="mt-4">
          <Link className="underline" href="/renewals">
            Use the date helper
          </Link>{" "}
          or{" "}
          <Link className="underline" href="/reminders">
            get a reminder
          </Link>
          .
        </p>
        <p className="mt-6 text-sm leading-relaxed">
          Sources: Firearms Act; March 2025 High Court ruling (ask an attorney for the case name);{" "}
          <a className="underline" href={officialLinks.governmentPrintery}>
            Government Printery
          </a>
          ;{" "}
          <a className="underline" href={officialLinks.ttpsLicences}>
            TTPS licences
          </a>
          ; Legal Notice 489 of 2025.
        </p>
      </article>
    </>
  );
}
