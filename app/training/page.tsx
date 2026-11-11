import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMetadata } from "@/lib/seo";
import { btn } from "@/lib/styles";

export const metadata = pageMetadata(
  "Firearms training Trinidad",
  "Firearms training Trinidad for provisional licences and FUL renewals. Licensed instructors sign the certificate of competence.",
);

const courses = [
  {
    title: "Provisional licence training",
    meta: "For people who hold a provisional licence. Length, location, and price: TBD.",
    summary: "Supervised practice so you can learn safe handling at the range named on your licence.",
  },
  {
    title: "Certificate of competence assessment",
    meta: "For people moving from a provisional licence to a full FUL. Length, location, and price: TBD.",
    summary: "The assessment a licensed firearms instructor signs. Only that instructor can sign it.",
  },
  {
    title: "3-year renewal recertification",
    meta: "For FUL holders who need a fresh certificate of competence. Length, location, and price: TBD.",
    summary: "A planned session so your renewal is not left to the last week.",
  },
  {
    title: "Safe handling and storage",
    meta: "For anyone who wants safer habits at home and at the range. Length, location, and price: TBD.",
    summary: "How to handle, transport, and store a firearm without rushing.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        title="Train with licensed instructors. Get certified with confidence."
        lede="Courses for people on a provisional licence and for FUL holders who need a certificate of competence to renew."
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <ServiceCard
              key={course.title}
              title={course.title}
              summary={course.summary}
              meta={course.meta}
              price="TT$ TBD"
              href="/book?service=training"
              linkLabel="Book a class"
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-neutral-700">There is no live class calendar yet.</p>

        <h2 className="mt-10 font-heading text-2xl">Coming later</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Law class</li>
          <li>Women-only class</li>
        </ul>

        <h2 className="mt-10 font-heading text-2xl">On a provisional licence</h2>
        <p className="mt-3 max-w-3xl leading-relaxed">
          You may only shoot at the range named on the provisional licence, and only under an FUL
          holder’s supervision. The licence lasts 2 months.
        </p>
        <p className="mt-3 max-w-3xl leading-relaxed">
          Only a licensed firearms instructor can sign a certificate of competence.
        </p>

        <h2 className="mt-10 font-heading text-2xl">Instructors</h2>
        <p className="mt-3">Instructor names: TBD. We will name each licensed instructor here.</p>

        <h2 className="mt-10 font-heading text-2xl">Range rules</h2>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed">
          <li>Wear closed shoes and clothes you can move in. Follow the range’s clothing rules.</li>
          <li>No alcohol before or during a class.</li>
          <li>Bring your FUL or provisional licence, and a photo ID.</li>
        </ul>
        <Link className={`${btn} mt-8`} href="/book?service=training">
          Book a class
        </Link>
      </div>
    </>
  );
}
