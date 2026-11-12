import { Ctas } from "@/components/Ctas";
import { LegalNotes } from "@/components/LegalNotes";
import { PageHero } from "@/components/PageHero";
import { priceOnRequest } from "@/lib/fees";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "FUL variations and permits",
  "Help with FUL variations, duplicate licences, travel permits, and pepper spray permits in Trinidad and Tobago.",
  "/services/other",
);

export default function OtherServicesPage() {
  return (
    <>
      <PageHero title="Changes, lost licences, travel and pepper spray permits." lede="Small jobs, done right." />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <ul className="list-disc space-y-2 pl-5 leading-relaxed">
          <li>A variation is TT$40. That is the official fee.</li>
          <li>
            If a licence or firearm is lost or stolen, report it at a police station within 24 hours.
            A duplicate licence is TT$80.
          </li>
          <li>
            A travel permit is TT$20 per firearm. You can also ask to store the firearm at a police
            station.
          </li>
          <li>A pepper spray permit is TT$200. That is the official fee.</li>
        </ul>
        <p className="mt-4">{priceOnRequest}</p>
        <LegalNotes />
        <Ctas primaryHref="/book?service=other" primaryLabel="Book a consultation" />
      </div>
    </>
  );
}
