import { site, whatsappHref } from "@/lib/site";

export function ContactButton() {
  const whatsapp = whatsappHref();
  if (whatsapp) {
    return (
      <a
        href={whatsapp}
        className="no-print fixed right-4 bottom-4 z-30 inline-flex min-h-12 items-center rounded-full bg-red px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-red-deep"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp us
      </a>
    );
  }

  return (
    <a
      href={site.phones[0].href}
      className="no-print fixed right-4 bottom-4 z-30 inline-flex min-h-12 items-center rounded-full bg-red px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-red-deep"
    >
      Call
    </a>
  );
}
