import { Ctas } from "@/components/Ctas";
import { LegalNotes } from "@/components/LegalNotes";
import { PageHero } from "@/components/PageHero";
import { priceOnRequest } from "@/lib/fees";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "FUL appeal file help",
  "If a Firearm User’s Licence is refused or delayed, F.A.L.L. puts the file in order for your attorney. We are not attorneys.",
  "/services/appeals",
);

export default function AppealsPage() {
  return (
    <>
      <PageHero
        title="Refused or waiting a long time? We’ll get your file in order for your attorney."
        lede="We are not attorneys. A partner attorney gives the legal advice. We will name them once confirmed."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <ul className="list-disc space-y-2 pl-5 leading-relaxed">
          <li>A refusal can go to the Firearms Appeal Board.</li>
          <li>A revocation is a separate decision. Ask an attorney what it means for you.</li>
          <li>A long wait is not something we can shorten. We can show what is in the file.</li>
          <li>We build a timeline and a document bundle from papers you already have.</li>
          <li>The attorney advises you and appears for you. We do not.</li>
          <li>If we receive a referral fee, we will tell you. That amount is still to be confirmed.</li>
        </ul>
        <p className="mt-4">{priceOnRequest}</p>
        <LegalNotes />
        <Ctas primaryHref="/book?service=consultation" primaryLabel="Book a consultation" />
      </div>
    </>
  );
}
