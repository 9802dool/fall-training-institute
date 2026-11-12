import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { priceOnRequest } from "@/lib/fees";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms of service",
  "The rules for using F.A.L.L. Training Institute services and classes in Trinidad and Tobago.",
  "/terms",
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of service"
        lede="The rules for using our services and classes."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-10 leading-relaxed">
        <p>An attorney should review this page, and should draft the liability limits, before it is treated as final.</p>
        <h2 className="section-title text-xl">Services</h2>
        <p>
          We provide firearms training and help preparing documents. We do not approve licences. You
          sign and you submit.
        </p>
        <h2 className="section-title text-xl">Your duties</h2>
        <p>
          You give us true facts. You do not ask us to invent a reason, a date, or a document. You
          sign your own forms and you submit them to the TTPS.
        </p>
        <h2 className="section-title text-xl">No set outcome</h2>
        <p>
          We cannot speed up, influence, or guarantee a decision. Only the Commissioner of Police
          can grant, renew, vary, or revoke a licence.
        </p>
        <h2 className="section-title text-xl">Fees</h2>
        <p>
          Official fees are set by law and are paid to the State or to the provider named on our{" "}
          <Link className="underline" href="/fees">Fees page</Link>. FALL fees are for our help
          only. {priceOnRequest} We never ask for money to push a file.
        </p>
        <h2 className="section-title text-xl">Cancellations and refunds</h2>
        <p>
          The cancellation and refund rules are still to be confirmed. We will tell you the rule
          before you pay.
        </p>
        <h2 className="section-title text-xl">Class safety</h2>
        <p>
          You follow range rules: suitable clothes, no alcohol, and your licence or provisional
          licence plus ID. We can stop a class if it is unsafe.
        </p>
        <h2 className="section-title text-xl">Our mistakes</h2>
        <p>
          If we make a mistake in our own work, we will offer to redo that part. We do not redo work
          that failed because the facts were wrong, or because the Commissioner refused the file.
        </p>
        <h2 className="section-title text-xl">Referrals</h2>
        <p>
          If we refer you to an attorney and we receive a fee for that referral, we will tell you.
          The amount is still to be confirmed.
        </p>
        <h2 className="section-title text-xl">Liability</h2>
        <p>Liability limits are for an attorney to draft. They are not set on this page.</p>
        <h2 className="section-title text-xl">Law</h2>
        <p>These terms are under the law of Trinidad and Tobago.</p>
      </div>
    </>
  );
}
