import Link from "next/link";
import { whatsappHref } from "@/lib/site";
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
  return (
    <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
      <Link className={btn} href={primaryHref}>
        {primaryLabel}
      </Link>
      {showWhatsApp ? (
        <a className={btnSecondary} href={whatsappHref()} target="_blank" rel="noopener noreferrer">
          WhatsApp us
        </a>
      ) : null}
    </div>
  );
}
