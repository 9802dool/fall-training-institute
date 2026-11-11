import { Ctas } from "@/components/Ctas";
import { LegalNotes } from "@/components/LegalNotes";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Firearm after a death",
  "Help for a family in Trinidad and Tobago after the death of a firearm owner. The executor, the police, and an attorney each have a role.",
);

export default function EstatePage() {
  return (
    <>
      <PageHero
        title="Lost a loved one who owned a firearm? We’ll help you handle it properly."
        lede="The executor may hold the firearm for 30 days. After that it must go to the police unless someone gets a licence for it."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="leading-relaxed">
          We are sorry you are dealing with this. We will go slowly and explain each step in plain
          words.
        </p>
        <p className="mt-4 leading-relaxed">There are three lawful paths. We can help you prepare for one of them:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>Hand the firearm in to the police.</li>
          <li>An heir applies for their own FUL, if they choose to and if they qualify.</li>
          <li>A sale through a licensed dealer.</li>
        </ul>
        <p className="mt-4 leading-relaxed">
          We work with the executor and with an attorney. We do not take the firearm. We do not
          decide who inherits it. Our fee is TT$ TBD.
        </p>
        <LegalNotes />
        <Ctas primaryHref="/book?service=estate" primaryLabel="Book a consultation" />
      </div>
    </>
  );
}
