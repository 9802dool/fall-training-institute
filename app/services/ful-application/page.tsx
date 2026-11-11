import { Ctas } from "@/components/Ctas";
import { LegalNotes } from "@/components/LegalNotes";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "First FUL application Trinidad",
  "Help getting every document right for a first Firearm User’s Licence in Trinidad and Tobago. You sign and you submit.",
);

const included = [
  "A document check",
  "Form help, using your own facts",
  "Booking a Certificate of Character",
  "Booking a medical and a psychiatric evaluation with registered professionals",
  "Passport photos",
  "Consent letters from adults at home",
  "A “good reason” evidence folder",
  "Interview and site-visit preparation",
];

export default function FulApplicationPage() {
  return (
    <>
      <PageHero
        title="Applying for your first FUL? We’ll help you get every document right."
        lede="You stay in control. You sign and you submit. We make sure nothing is missing or out of date."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="leading-relaxed">This help is for first-time applicants who are 25 or older.</p>
        <h2 className="mt-8 font-heading text-2xl">Stage 1: provisional licence</h2>
        <p className="mt-3 leading-relaxed">
          A provisional licence lasts 2 months. It is for training only, at the range named on it,
          supervised by an FUL holder.
        </p>
        <h2 className="mt-8 font-heading text-2xl">Stage 2: full FUL</h2>
        <p className="mt-3 leading-relaxed">
          The full licence needs a certificate of competence from a licensed firearms instructor.
        </p>
        <h2 className="mt-8 font-heading text-2xl">What is included</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {included.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed">
          The FALL fee is TT$ TBD. Official fees, the doctor’s fee, and the psych fee are paid to
          those providers.
        </p>
        <p className="mt-4 leading-relaxed">
          The Commissioner has said some files take about 7 months, and others take longer. That is
          not a promise. The TTPS decides the time.
        </p>
        <LegalNotes />
        <Ctas
          primaryHref="/book?service=first-application"
          primaryLabel="Book a first-application consultation"
        />
      </div>
    </>
  );
}
