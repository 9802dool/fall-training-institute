import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { localBusinessJsonLd, site } from "@/lib/site";

export const metadata = pageMetadata(
  "About F.A.L.L. Training Institute",
  "A Trinidad and Tobago training institute focused on safe, legal firearm ownership. Private help. The Commissioner of Police decides.",
  "/about",
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
        <h2 className="section-title text-xl">Our story</h2>
        <p className="mt-6 leading-relaxed">
          Our story is still being written. It will say why the institute exists, how training is
          taught with safety first, and that you sign and submit your own application.
        </p>
        <p className="mt-4 leading-relaxed">
          Our business number, instructors, range, partners, address, and hours are still to be
          confirmed.
        </p>
        <h2 className="section-title mt-10 text-xl">How we work</h2>
        <ul className="mt-6 list-disc space-y-2 pl-5 leading-relaxed">
          <li>No bribes. We never ask for money to push a file.</li>
          <li>No promises of approval. Only the Commissioner of Police decides.</li>
          <li>A receipt for every payment.</li>
          <li>You sign and you submit.</li>
        </ul>
        <p className="mt-6 leading-relaxed">
          Phone{" "}
          {site.phones.map((phone, index) => (
            <span key={phone.href}>
              {index > 0 ? " or " : null}
              <a className="underline decoration-red underline-offset-4" href={phone.href}>
                {phone.label}
              </a>
            </span>
          ))}
          . Email{" "}
          <a className="underline decoration-red underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    </>
  );
}
