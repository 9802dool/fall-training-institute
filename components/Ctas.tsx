import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";
import { btn, btnSecondary } from "@/lib/styles";

export function Ctas({
  primaryHref,
  primaryLabel,
  showWhatsApp = true,
}: {
  primaryHref: string;
  primaryLabel: string;
  showWhatsApp?: boolean;
}) {
  const whatsapp = showWhatsApp ? whatsappHref() : null;

  return (
    <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
      <Link className={btn} href={primaryHref}>
        {primaryLabel}
      </Link>
      {whatsapp ? (
        <a className={btnSecondary} href={whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp us
        </a>
      ) : (
        <a className={btnSecondary} href={site.phones[0].href}>
          Call us
        </a>
      )}
    </div>
  );
}
