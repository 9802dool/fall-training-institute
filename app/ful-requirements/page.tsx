import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PrintButton } from "@/components/PrintButton";
import { fallAlsoAsks, stage1Items, stage2Items, ttpsAlsoAsks } from "@/lib/checklist";
import { pageMetadata } from "@/lib/seo";
import { officialLinks, site } from "@/lib/site";
import { btn } from "@/lib/styles";

export const metadata = pageMetadata(
  "FUL requirements 2026",
  "FUL requirements 2026 for Trinidad and Tobago. A plain checklist from the Firearms Act and TTPS notices. Last checked November 2026.",
  "/ful-requirements",
);

export default function RequirementsPage() {
  return (
    <>
      <PageHero
        title="FUL requirements 2026: your full checklist"
        lede="Based on the Firearms Act and TTPS notices. Rules can change, so check with the TTPS Firearms Section before you submit."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold text-silver">Last checked: {site.lastChecked}</p>
        <h2 className="section-title mt-8 text-xl">Who can apply</h2>
        <p className="mt-3 leading-relaxed">
          You must be 25 or older. You need a good reason. The Commissioner of Police must believe
          you are fit to hold a licence.
        </p>
        <p className="mt-3 leading-relaxed">
          A mental-health history does not automatically bar you. A conviction does not automatically
          bar you. A domestic-violence history does not automatically bar you. A psychiatric
          evaluation is required, and the Commissioner decides.
        </p>
        <p className="mt-3 leading-relaxed">
          A Domestic Violence Act conviction can lead to refusal for 5 years. Talk to an attorney. A
          restricted person — someone jailed for over 3 months for a violent offence, or declared
          restricted by a court, in the last 5 years — needs the President’s permission. Other
          records are weighed by the Commissioner.
        </p>

        <h2 className="section-title mt-8 text-xl">Stage 1: provisional licence</h2>
        <p className="mt-3 leading-relaxed">
          Get the application form from the{" "}
          <a className="underline" href={officialLinks.governmentPrintery}>
            Government Printery
          </a>
          . Do not rely on an old form name. Ask for the current provisional licence application.
        </p>
        <CheckList items={stage1Items} />

        <h2 className="section-title mt-8 text-xl">Stage 2: Firearm User’s Licence</h2>
        <p className="mt-3 leading-relaxed">
          The FUL form comes from the TTPS Firearms Section. A licensed firearms instructor signs the
          certificate of competence.
        </p>
        <CheckList items={stage2Items} />

        <h2 className="section-title mt-8 text-xl">Also asked for by the TTPS (June 2025)</h2>
        <CheckList items={ttpsAlsoAsks} />
        <p className="mt-3 text-sm leading-relaxed">
          Apply for a Certificate of Character on the{" "}
          <a className="underline" href={officialLinks.certificateOfCharacter}>
            TTPS certificates page
          </a>
          . The online request is at{" "}
          <a className="underline" href={officialLinks.certificateOfCharacterApply}>
            the TTPS services portal
          </a>
          .
        </p>

        <h2 className="section-title mt-8 text-xl">FALL also asks for</h2>
        <p className="mt-3 leading-relaxed">
          These items are not official unless the TTPS confirms them. We ask for them so your file is
          easier to follow.
        </p>
        <CheckList items={fallAlsoAsks} />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrintButton />
          <Link className={btn} href="/check">
            Take the eligibility check
          </Link>
        </div>
      </div>
    </>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="print-checks mt-4">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
