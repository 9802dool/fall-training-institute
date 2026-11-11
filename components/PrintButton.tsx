"use client";

import { btnSecondary } from "@/lib/styles";

export function PrintButton() {
  return (
    <button type="button" className={`${btnSecondary} no-print`} onClick={() => window.print()}>
      Print checklist
    </button>
  );
}
