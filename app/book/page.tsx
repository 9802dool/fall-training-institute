import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata(
  "Book a consultation",
  "Book a consultation or a class with F.A.L.L. Training Institute. We confirm by WhatsApp or email.",
);

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book a consultation or a class"
        lede="Pick a time that suits you. We’ll confirm by WhatsApp or email."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <BookingForm />
        <aside className="space-y-4 text-sm leading-relaxed">
          <h2 className="font-heading text-2xl">Talk to us</h2>
          <ul className="space-y-2">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a className="underline" href={phone.href}>
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="underline" href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </li>
          </ul>
          <p>The WhatsApp number is still being confirmed.</p>
          <p>Address: {site.address}. Hours: {site.hours}. A map will be added when the address is set.</p>
          <h2 className="font-heading text-2xl">Payment</h2>
          <p>Pay a deposit or pay later. The amount and the method are TBD.</p>
          <p>You can pay by payment links and bank transfer (details TBD).</p>
          <h2 className="font-heading text-2xl">What to bring</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>A photo ID if you come in person. Bring the original.</li>
            <li>Any papers you already have, as originals.</li>
            <li>The questions you want answered.</li>
          </ul>
          <p>Do not upload an ID. This form does not accept files.</p>
        </aside>
      </div>
    </>
  );
}
