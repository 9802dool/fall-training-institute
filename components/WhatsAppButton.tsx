import { whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      className="no-print fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp us
    </a>
  );
}
