import { PageHero } from "@/components/PageHero";
import { Quiz } from "@/components/Quiz";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "FUL eligibility check",
  "A one-minute guide to whether you can apply for an FUL in Trinidad and Tobago. Only the Commissioner of Police decides.",
  "/check",
);

export default function CheckPage() {
  return (
    <>
      <PageHero
        title="Can I apply for an FUL? Check in 1 minute."
        lede="This is a guide, not a decision. Only the Commissioner of Police decides."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <Quiz />
      </div>
    </>
  );
}
