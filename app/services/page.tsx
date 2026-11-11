import { Ctas } from "@/components/Ctas";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "FUL paperwork help",
  "What F.A.L.L. Training Institute can help with in Trinidad and Tobago: first licences, renewals, businesses, and estates.",
);

const cards = [
  {
    title: "First time",
    summary: "Document checks and training steps for a first Firearm User’s Licence.",
    href: "/services/ful-application",
  },
  {
    title: "I already have an FUL",
    summary: "Renewal timing, a competence test, and the yearly fee.",
    href: "/renewals",
  },
  {
    title: "I run a business",
    summary: "Staff certificates, company files, and training dates in one place.",
    href: "/services/business",
  },
  {
    title: "Family or estate",
    summary: "A calm way to deal with a firearm after someone has died.",
    href: "/services/estate",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="What we can help you with"
        lede="Pick the help you need. Every price is on our Fees page."
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <ServiceCard key={card.href} {...card} />
          ))}
        </div>
        <h2 className="mt-10 font-heading text-2xl">What we don’t do</h2>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed">
          <li>We don’t sell guns or ammunition.</li>
          <li>We don’t process or approve licences.</li>
          <li>We don’t give legal advice. Our partner attorney does. The attorney’s name is TBD.</li>
        </ul>
        <p className="mt-6 max-w-3xl leading-relaxed">
          Smaller jobs, such as a variation, a duplicate, travel, or a pepper spray permit, are on
          the <a className="underline" href="/services/other">other permits page</a>. If you were
          refused, see <a className="underline" href="/services/appeals">appeals</a>.
        </p>
        <Ctas primaryHref="/book" primaryLabel="Book a consultation" />
      </div>
    </>
  );
}
