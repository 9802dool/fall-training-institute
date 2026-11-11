import { PageHero } from "@/components/PageHero";
import { disclaimer } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Disclaimer",
  "F.A.L.L. Training Institute is a private training and document-preparation business. It is not part of the TTPS.",
);

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        lede="Please read this before you use the site or book our help. An attorney should review this page."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-lg leading-relaxed">{disclaimer}</p>
      </div>
    </>
  );
}
