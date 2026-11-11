import Link from "next/link";
import { FeeTable } from "@/components/FeeTable";
import { PageHero } from "@/components/PageHero";
import { fallFees, officialFees, providerFees } from "@/lib/fees";
import { pageMetadata } from "@/lib/seo";
import { officialLinks } from "@/lib/site";

export const metadata = pageMetadata(
  "FUL fee 2026",
  "Official 2026 firearm licence fees in Trinidad and Tobago, from Legal Notice 489 of 2025, and what you pay F.A.L.L. for help.",
);

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees: what goes to the State and what you pay us"
        lede="Official fees are set by law. Our fees are for our help only."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="border-l-4 border-brand py-1 pl-4 text-lg font-semibold">
          We never ask for money to push a file.
        </p>
        <p className="mt-4 leading-relaxed">
          The figures in the first table are the official 2026 fees in Legal Notice 489 of 2025.
          They apply from 1 January 2026. We have not added any other official amounts.
        </p>
        <p className="mt-3 leading-relaxed">
          The TTPS licences page still says there is no fee for a provisional licence or a Firearm
          User’s Licence. That line is out of date.{" "}
          <a className="underline" href={officialLinks.ttpsLicences}>
            Read the TTPS page
          </a>{" "}
          and{" "}
          <a className="underline" href={officialLinks.gazette}>
            check the Gazette
          </a>
          .
        </p>
        <FeeTable caption="Official fees" rows={officialFees} />
        <FeeTable caption="What you pay F.A.L.L." rows={fallFees} />
        <p className="mt-3 text-sm text-neutral-700">
          FALL prices are TT$ TBD. We will publish a written price before you pay us.
        </p>
        <FeeTable caption="Paid to other people" rows={providerFees} />
        {/* TODO(phase-2): online card checkout */}
        <p className="mt-8 leading-relaxed">
          You can pay us by payment links and bank transfer (details TBD). Official fees, medical
          fees, and psych fees are paid to those providers, not to us.
        </p>
        <p className="mt-3">
          Refunds are covered in our <Link href="/terms">Terms</Link>.
        </p>
      </div>
    </>
  );
}
