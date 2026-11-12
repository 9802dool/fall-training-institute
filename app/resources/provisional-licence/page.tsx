import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { stage1Items } from "@/lib/checklist";
import { pageMetadata } from "@/lib/seo";
import { officialLinks, site } from "@/lib/site";

export const metadata = pageMetadata(
  "Provisional firearm licence",
  "What a provisional Firearm User’s Licence lets you do in Trinidad and Tobago, and what it does not.",
  "/resources/provisional-licence",
);

export default function ProvisionalGuidePage() {
  return (
    <>
      <PageHero
        title="Provisional licence: what it lets you do"
        lede="It is the first step. It is for training, and only for a short time."
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold text-silver">Last checked: {site.lastChecked}</p>
        <p className="mt-4 leading-relaxed">
          A provisional licence lasts 2 months. You may train only at the range named on it. An FUL
          holder must supervise you. It is not a full Firearm User’s Licence.
        </p>
        <p className="mt-4 leading-relaxed">
          The application form comes from the{" "}
          <a className="underline" href={officialLinks.governmentPrintery}>
            Government Printery
          </a>
          . Ask for the current form. Do not rely on an old form number.
        </p>
        <h2 className="section-title mt-8 text-xl">Papers for this step</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {stage1Items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed">
          After the provisional licence, a full FUL needs a certificate of competence from a licensed
          firearms instructor. Only that instructor can sign it.
        </p>
        <p className="mt-4">
          <Link className="underline" href="/training">
            See the training page
          </Link>{" "}
          and the{" "}
          <Link className="underline" href="/ful-requirements">
            full checklist
          </Link>
          .
        </p>
        <p className="mt-6 text-sm leading-relaxed">
          Sources: Firearms Act;{" "}
          <a className="underline" href={officialLinks.ttpsLicences}>
            TTPS licences
          </a>
          ;{" "}
          <a className="underline" href={officialLinks.governmentPrintery}>
            Government Printery
          </a>
          .
        </p>
      </article>
    </>
  );
}
