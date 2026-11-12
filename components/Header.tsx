"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { logoAlt, nav } from "@/lib/site";
import { btn } from "@/lib/styles";

const linkClass =
  "block min-h-12 rounded-sm px-3 py-3 text-base hover:bg-white/10 lg:min-h-0 lg:px-2 lg:py-2 lg:text-sm";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
    focusable?.[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      (previous ?? menuButtonRef.current)?.focus();
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <Link href="/" className="flex min-h-12 items-center gap-3 rounded-sm">
          <Image
            src="/logo-512.png"
            alt={logoAlt}
            width={56}
            height={56}
            priority
            className="h-14 w-14 shrink-0 object-contain"
          />
          <span className="font-heading text-sm leading-tight font-bold tracking-wide sm:text-base">
            F.A.L.L. Training Institute
          </span>
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-sm border border-white/40 px-3 lg:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Link href="/book" className={btn}>
                Book
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="site-nav"
        ref={panelRef}
        hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-50 flex flex-col bg-black-deep lg:hidden"
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/logo-512.png"
              alt={logoAlt}
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <span className="font-heading text-sm font-bold">F.A.L.L. Training Institute</span>
          </Link>
          <button
            type="button"
            className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-sm border border-white/40 px-3"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <Link href="/book" className={`${btn} w-full`} onClick={() => setOpen(false)}>
              Book
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
