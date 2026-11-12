import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappHref } from "@/lib/site";

export const metadata = pageMetadata(
  "Book a consultation",
  "Book a consultation or a class with F.A.L.L. Training Institute. We confirm by phone or email.",
  "/book",
);

export default function BookPage() {
  const whatsapp = whatsappHref();

  return (
    <>
      <PageHero
        title="Book a consultation or a class"
        lede="Pick a time that suits you. We’ll confirm by phone or email."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <BookingForm />
        <aside className="space-y-4 text-sm leading-relaxed">
          <h2 className="section-title text-xl">Talk to us</h2>
          <ul className="mt-6 space-y-2">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a className="underline decoration-red underline-offset-4" href={phone.href}>
                  {phone.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="underline decoration-red underline-offset-4"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </li>
            {whatsapp ? (
              <li>
                <a
                  className="underline decoration-red underline-offset-4"
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp us
                </a>
              </li>
            ) : null}
          </ul>
          <p>Address and hours to be confirmed.</p>
          <h2 className="section-title mt-8 text-xl">Payment</h2>
          <p className="mt-6">
            Whether you pay a deposit or pay later is still to be confirmed. We will tell you before
            you pay.
          </p>
          <p>You can pay by payment links and bank transfer. Those details are still to be confirmed.</p>
          <h2 className="section-title mt-8 text-xl">What to bring</h2>
          <ul className="mt-6 list-disc space-y-2 pl-5">
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
