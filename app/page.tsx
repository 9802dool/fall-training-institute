import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { faqTeasers } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";
import { localBusinessJsonLd, whatsappHref } from "@/lib/site";
import { btn, btnSecondary } from "@/lib/styles";

export const metadata = pageMetadata(
  "FUL application Trinidad",
  "Firearm training and FUL paperwork help, done the right way. F.A.L.L. trains you and helps you get documents ready. Only the TTPS and the Commissioner of Police approve licences.",
);

const tiles = [
  {
    title: "Get your first FUL",
    href: "/services/ful-application",
    text: "Document checks and training steps for a first licence.",
  },
  {
    title: "Renew your FUL",
    href: "/renewals",
    text: "Line up the test, medical, and forms before the date.",
  },
  {
    title: "Training and recertification",
    href: "/training",
    text: "Classes with licensed instructors, including the certificate of competence.",
  },
];

const steps = [
  { title: "Check if you qualify", href: "/check" },
  { title: "Gather your documents with us", href: "/services/ful-application" },
  { title: "Train with a licensed instructor", href: "/training" },
  { title: "You submit to the TTPS", href: "https://www.ttps.gov.tt/services/licences/" },
];

const reasons = [
  "Named licensed instructors. Names will be published here once they are confirmed.",
  "Clear written prices. FALL prices are TT$ TBD until we publish them.",
  "Receipts for every payment.",
  "Honest timelines. We will not promise a decision date.",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:py-16 md:grid-cols-[auto_1fr]">
          <Image
            src="/logo.png"
            alt="F.A.L.L. Training Institute"
            width={160}
            height={160}
            priority
          />
          <div>
            <h1 className="font-heading text-4xl leading-tight text-ink sm:text-5xl">
              Firearm training and FUL paperwork help, done the right way.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-800">
              F.A.L.L. trains you, helps you get your documents right, and keeps your licence up to
              date. Only the TTPS and the Commissioner of Police approve licences. We help you get
              ready.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className={btn} href="/book">
                Book a consultation
              </Link>
              <a
                className={btnSecondary}
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3">
        {tiles.map((tile) => (
          <Link key={tile.href} href={tile.href} className="border border-neutral-200 p-5 no-underline">
            <h2 className="font-heading text-2xl text-ink">{tile.title}</h2>
            <p className="mt-2 text-neutral-800">{tile.text}</p>
          </Link>
        ))}
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="font-heading text-3xl">How it works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="border border-neutral-200 bg-white p-4">
                <p className="font-heading text-brand">{index + 1}</p>
                <a className="mt-2 block font-semibold underline underline-offset-4" href={step.href}>
                  {step.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 md:grid-cols-2">
        <article className="border border-neutral-200 p-5">
          <h2 className="font-heading text-2xl">Not sure you qualify? Answer 6 quick questions.</h2>
          <p className="mt-3 text-neutral-800">
            It takes about a minute. It is a guide, not a decision. We do not save your answers.
          </p>
          <Link className={`${btn} mt-5`} href="/check">
            Check if you qualify
          </Link>
        </article>
        <article className="border border-neutral-200 p-5">
          <h2 className="font-heading text-2xl">
            Never miss the 31 March yearly fee or your 3-year renewal. Get free reminders.
          </h2>
          <p className="mt-3 text-neutral-800">
            Email reminders for the yearly fee, the renewal, and papers that expire. Confirm 31 March
            with the TTPS.
          </p>
          <Link className={`${btn} mt-5`} href="/reminders">
            Get free reminders
          </Link>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h2 className="font-heading text-3xl">Why FALL</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {reasons.map((reason) => (
            <li key={reason} className="border-l-4 border-brand py-2 pl-4">
              {reason}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-heading text-3xl">Questions people ask</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {faqTeasers.map((item) => (
            <article key={item.id} className="border border-neutral-200 p-4">
              <h3 className="font-heading text-xl">{item.question}</h3>
              <p className="mt-2 text-neutral-800">{item.answer}</p>
            </article>
          ))}
        </div>
        <Link className="mt-5 inline-block font-semibold underline underline-offset-4" href="/faq">
          Read all questions
        </Link>
        <p className="mt-6">
          <Link className="font-semibold underline underline-offset-4" href="/resources">
            Guides and updates
          </Link>
        </p>
      </section>
    </>
  );
}
