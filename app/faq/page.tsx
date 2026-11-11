import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";
import { whatsappHref } from "@/lib/site";
import { btn } from "@/lib/styles";

export const metadata = pageMetadata(
  "FUL questions and answers",
  "Straight answers about FUL applications, training, fees, and renewals in Trinidad and Tobago.",
);

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHero title="Questions people ask us" lede="Straight answers." />
      <div className="mx-auto max-w-3xl px-4 py-10">
        {faqs.map((item) => (
          <article key={item.id} id={item.id} className="border-b border-neutral-200 py-5">
            <h2 className="font-heading text-2xl">{item.question}</h2>
            <p className="mt-2 leading-relaxed">{item.answer}</p>
          </article>
        ))}
        <a className={`${btn} mt-8`} href={whatsappHref()} target="_blank" rel="noopener noreferrer">
          Still unsure? WhatsApp us.
        </a>
      </div>
    </>
  );
}
