import { PageHero } from "@/components/PageHero";
import { ReminderForm } from "@/components/ReminderForm";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "FUL deadline reminders",
  "Email reminders for the 31 March yearly FUL fee, the 3-year renewal, and documents that expire in Trinidad and Tobago.",
  "/reminders",
);

const reminders = [
  "Yearly fee, due by 31 March",
  "3-year renewal",
  "Medical and competence bookings",
  "Certificate of Character, when it is getting close to 3 months old",
  "Consent letters, when they are getting close to 6 months old",
];

export default function RemindersPage() {
  return (
    <>
      <PageHero
        title="Get a reminder before every deadline."
        lede="Your yearly fee (due by 31 March), your 3-year renewal, and documents that expire."
      />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="section-title text-xl">What we remind you about</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {reminders.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4 leading-relaxed">
          Confirm 31 March with the TTPS Firearms Section before you rely on it. Email reminders are
          available now. SMS and WhatsApp reminders are coming later.
        </p>
        <p className="mt-3 leading-relaxed">
          Reminders are free for now. A paid option may be added later. That price is still to be
          confirmed.
        </p>
        <h2 className="section-title mt-8 text-xl">How to stop</h2>
        <p className="mt-3 leading-relaxed">
          Email {site.email} and ask us to stop. We will remove you. We do not ask for a licence
          number or an ID number.
        </p>
        <div className="mt-8">
          <ReminderForm />
        </div>
      </div>
    </>
  );
}
