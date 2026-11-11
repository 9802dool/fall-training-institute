"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { btn } from "@/lib/styles";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-white/10 bg-ink text-white">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-3 rounded-sm">
          <Image src="/logo.png" alt="" width={48} height={48} priority />
          <span className="font-heading text-sm leading-tight sm:text-base">
            F.A.L.L. Training Institute
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/40 px-3 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-nav"
          className={`${open ? "absolute inset-x-0 top-full block border-b border-white/10 bg-ink px-4 py-4" : "hidden"} md:static md:block md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 md:mt-0 md:ml-2">
              <Link href="/book" className={btn} onClick={() => setOpen(false)}>
                Book
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
