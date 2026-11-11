import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { RenewalDateHelper } from "@/components/RenewalDateHelper";
import { pageMetadata } from "@/lib/seo";
import { officialLinks } from "@/lib/site";
import { btn } from "@/lib/styles";

export const metadata = pageMetadata(
  "FUL renewal Trinidad",
  "FUL renewal Trinidad without the last-minute rush. Competence test, medical, and forms for the 3-year renewal.",
);

export default function RenewalsPage() {
  return (
    <>
      <PageHero
        title="Renew your FUL every 3 years without the last-minute rush."
        lede="We line up your competence test, medical and forms so your licence doesn’t lapse."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="leading-relaxed">
          Licences issued after 31 May 2004 run for 3 years. For earlier licences, a March 2025 High
          Court ruling said they had not expired. Talk to an attorney about that ruling. The yearly
          fee still applies.
        </p>
        <h2 className="mt-8 font-heading text-2xl">What the renewal needs</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>
            Renewal form. We believe this is FUL Form 1 from the{" "}
            <a className="underline" href={officialLinks.governmentPrintery}>
              Government Printery
            </a>
            . Confirm the current form before you buy it.
          </li>
          <li>Certificate of competence from a licensed firearms instructor.</li>
          <li>Medical certificate.</li>
          <li>TT$1,000 renewal fee, plus the yearly fee.</li>
        </ul>
        <RenewalDateHelper />
        <h2 className="mt-8 font-heading text-2xl">Renewal package</h2>
        <p className="mt-3 leading-relaxed">
          We can book the competence test, book the medical, help with the form from your own facts,
          and file your receipts. The FALL fee is TT$ TBD. Official fees and the doctor’s fee are
          paid to them.
        </p>
        <p className="mt-4 border-l-4 border-brand py-1 pl-4 leading-relaxed">
          Keeping a firearm on an expired licence can be treated as having it without a licence. If
          your licence has lapsed, act now and get advice from an attorney.
        </p>
        <p className="mt-4">
          <Link className="font-semibold underline underline-offset-4" href="/reminders">
            Get a reminder before the date
          </Link>
        </p>
        <Link className={`${btn} mt-8`} href="/book?service=renewal">
          Start my renewal
        </Link>
      </div>
    </>
  );
}
