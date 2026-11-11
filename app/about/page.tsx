import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { localBusinessJsonLd, site } from "@/lib/site";

export const metadata = pageMetadata(
  "About F.A.L.L. Training Institute",
  "A Trinidad and Tobago training institute focused on safe, legal firearm ownership. Private help. The Commissioner of Police decides.",
);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <PageHero
        title="Who we are"
        lede="A Trinidad and Tobago training institute focused on safe, legal firearm ownership."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="font-heading text-2xl">Our story</h2>
        <p className="mt-3 leading-relaxed">
          <strong>Simeon to write.</strong> This section will say, in a few sentences, why the
          institute exists. It will describe how training is taught, with safety first. It will say
          that clients sign and submit their own applications. It will name the people and the range
          once those details are confirmed.
        </p>
        <h2 className="mt-8 font-heading text-2xl">Still to confirm</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Registered business name and number: TBD</li>
          <li>Instructors: TBD</li>
          <li>Range: TBD</li>
          <li>Partners: TBD</li>
          <li>Address and map: {site.address}</li>
        </ul>
        <h2 className="mt-8 font-heading text-2xl">How we work</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          <li>No bribes. We never ask for money to push a file.</li>
          <li>No promises of approval. Only the Commissioner of Police decides.</li>
          <li>A receipt for every payment.</li>
          <li>You sign and you submit.</li>
        </ul>
        <p className="mt-6 leading-relaxed">
          Phone {site.phones.map((phone) => phone.label).join(" or ")}. Email {site.email}. Hours:{" "}
          {site.hours}.
        </p>
      </div>
    </>
  );
}
