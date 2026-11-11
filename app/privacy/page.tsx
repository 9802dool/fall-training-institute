import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy",
  "How F.A.L.L. Training Institute looks after contact, booking, and reminder details. An attorney should review this page.",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="How we look after your information"
        lede="Your documents are private. Here is exactly what we do with them."
      />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-10 leading-relaxed">
        <p>An attorney should review this page before it is treated as final.</p>
        <h2 className="font-heading text-2xl">What we collect</h2>
        <p>
          On this site we collect only what you type into a form: your name, email, phone, the
          service you want, a preferred time, a short note, the month a licence expires, a company
          name, a contact name, and a staff count. We do not ask for an ID number, a licence number,
          or a firearm serial.
        </p>
        <h2 className="font-heading text-2xl">Why</h2>
        <p>
          We use those details to confirm a booking, send a reminder you asked for, or reply to a
          business enquiry. The eligibility check is not saved.
        </p>
        <h2 className="font-heading text-2xl">Where it is kept</h2>
        <p>
          Storage is TBD. For now, a booking or reminder is written to a local placeholder on the
          server and logged so we can reply. It is not a client portal.
        </p>
        <h2 className="font-heading text-2xl">Who can see it</h2>
        <p>Only named staff can see client papers. Staff names are TBD.</p>
        <h2 className="font-heading text-2xl">How long</h2>
        <p>
          The retention period is TBD. The working rule we intend to use is: until the file closes,
          plus a set number of days. That number is not fixed yet.
        </p>
        <h2 className="font-heading text-2xl">Your choices</h2>
        <p>
          You can ask to see, fix, or delete what we hold. Email {site.email}. We never sell data.
        </p>
        <h2 className="font-heading text-2xl">Reminders</h2>
        <p>
          We send reminder emails only if you tick the consent box. To stop, email {site.email}.
        </p>
        <h2 className="font-heading text-2xl">Originals</h2>
        <p>
          Bring originals in person. Do not send ID photos or ID numbers over WhatsApp or Gmail.
          This site does not accept uploads.
        </p>
      </div>
    </>
  );
}
