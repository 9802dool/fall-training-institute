import { EnquiryForm } from "@/components/EnquiryForm";
import { LegalNotes } from "@/components/LegalNotes";
import { PageHero } from "@/components/PageHero";
import { priceOnRequest } from "@/lib/fees";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Company FUL records",
  "Licence admin and training dates for security firms and cash businesses in Trinidad and Tobago. We do not provide guards.",
  "/services/business",
);

export default function BusinessPage() {
  return (
    <>
      <PageHero
        title="Licence admin and training for security firms and cash businesses."
        lede="We keep track of your staff certificates, renewals and training so nothing lapses."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <ul className="list-disc space-y-2 pl-5 leading-relaxed">
          <li>A Firearm User’s Employee Certificate is TT$320. A shotgun FUEC is TT$200. Those are official fees.</li>
          <li>We can book staff training with a licensed instructor.</li>
          <li>We can help prepare a company FUL file from the company’s own facts.</li>
          <li>We do not provide guards.</li>
          <li>
            A protective agency needs permission from the Ministry. We do not grant that permission.
          </li>
        </ul>
        <p className="mt-4">{priceOnRequest}</p>
        <h2 className="section-title mt-8 text-xl">Send an enquiry</h2>
        <EnquiryForm />
        <LegalNotes />
      </div>
    </>
  );
}
