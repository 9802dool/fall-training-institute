import Link from "next/link";
import { FeeTable } from "@/components/FeeTable";
import { PageHero } from "@/components/PageHero";
import { officialFees, priceOnRequest } from "@/lib/fees";
import { pageMetadata } from "@/lib/seo";
import { officialLinks, site } from "@/lib/site";

export const metadata = pageMetadata(
  "FUL fee 2026 explained",
  "The 2026 official FUL fees from Legal Notice 489 of 2025, in plain English, for Trinidad and Tobago.",
  "/resources/2026-ful-fees",
);

export default function FeesGuidePage() {
  return (
    <>
      <PageHero
        title="2026 FUL fees explained"
        lede="Official fees are set by law. This page repeats those amounts and nothing else."
      />
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm font-semibold text-silver">Last checked: {site.lastChecked}</p>
        <p className="mt-4 leading-relaxed">
          <a className="underline decoration-red underline-offset-4" href={officialLinks.legalNotice489}>
            Legal Notice 489 of 2025
          </a>{" "}
          set new fees from 1 January 2026. The table below is that list. We have not added other
          official amounts.
        </p>
        <FeeTable caption="Official fees" rows={officialFees} />
        <p className="mt-6 leading-relaxed">
          The{" "}
          <a className="underline" href={officialLinks.ttpsLicences}>
            TTPS licences page
          </a>{" "}
          still says there is no fee for a provisional licence or a Firearm User’s Licence. That
          sentence is out of date. Check the notice in the{" "}
          <a className="underline decoration-red underline-offset-4" href={officialLinks.gazette}>
            2026 Gazette
          </a>
          .
        </p>
        <p className="mt-4 leading-relaxed">
          Medical certificates, psychiatric evaluations, and most photos are paid to those
          providers. Their prices are not in the legal notice. {priceOnRequest} FALL prices are listed
          on the <Link className="underline decoration-red underline-offset-4" href="/fees">Fees page</Link>.
        </p>
        <p className="mt-4 font-semibold">We never ask for money to push a file.</p>
        <p className="mt-6 text-sm leading-relaxed">
          Sources:{" "}
          <a className="underline decoration-red underline-offset-4" href={officialLinks.legalNotice489}>
            Legal Notice 489 of 2025
          </a>
          ;{" "}
          <a className="underline decoration-red underline-offset-4" href={officialLinks.gazette}>
            2026 Gazette
          </a>
          ;{" "}
          <a
            className="underline decoration-red underline-offset-4"
            href={officialLinks.governmentPrintery}
          >
            Government Printery
          </a>
          ;{" "}
          <a className="underline" href={officialLinks.ttpsLicences}>
            TTPS licences
          </a>
          .
        </p>
      </article>
    </>
  );
}
