import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy",
  "How F.A.L.L. Training Institute looks after contact, booking, and reminder details. An attorney should review this page.",
  "/privacy",
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
        <h2 className="section-title text-xl">What we collect</h2>
        <p>
          On this site we collect only what you type into a form: your name, email, phone, the
          service you want, a preferred time, a short note, the month a licence expires, a company
          name, a contact name, and a staff count. We do not ask for an ID number, a licence number,
          or a firearm serial.
        </p>
        <h2 className="section-title text-xl">Why</h2>
        <p>
          We use those details to confirm a booking, send a reminder you asked for, or reply to a
          business enquiry. The eligibility check is not saved.
        </p>
        <h2 className="section-title text-xl">Where it is kept</h2>
        <p>
          Where bookings and reminders are stored is still to be confirmed. We keep what you send
          only so we can reply. It is not a client portal.
        </p>
        <h2 className="section-title text-xl">Who can see it</h2>
        <p>Only staff who need the file can see client papers. We will name them once confirmed.</p>
        <h2 className="section-title text-xl">How long</h2>
        <p>How long we keep a file is still to be confirmed. We will tell you before you hand papers over.</p>
        <h2 className="section-title text-xl">Your choices</h2>
        <p>
          You can ask to see, fix, or delete what we hold. Email {site.email}. We never sell data.
        </p>
        <h2 className="section-title text-xl">Reminders</h2>
        <p>
          We send reminder emails only if you tick the consent box. To stop, email {site.email}.
        </p>
        <h2 className="section-title text-xl">Originals</h2>
        <p>
          Bring originals in person. Do not send ID photos or ID numbers over WhatsApp or Gmail.
          This site does not accept uploads.
        </p>
      </div>
    </>
  );
}
