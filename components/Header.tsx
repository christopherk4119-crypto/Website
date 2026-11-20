"use client";

import { useEffect, useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-navy/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" aria-label={`${site.name}, back to top`} className="shrink-0">
          {/* REPLACE WITH LOGO PNG — transparent background (200x80 slot, /public/logo.png) */}
          <Logo />
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-white/85">
            <MapPin className="h-4 w-4 text-gold-light" aria-hidden="true" />
            Serving {site.location.label}
          </span>
          <a href={site.phone.tel} className="flex items-center gap-1.5 text-lg font-bold text-white hover:text-gold-light">
            <Phone className="h-5 w-5 text-gold-light" aria-hidden="true" />
            {site.phone.display}
          </a>
        </div>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-5 text-sm font-medium text-white/85">
            {nav.slice(1).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold-light">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phone.tel} className="btn-gold hidden !min-h-[44px] !px-4 text-sm sm:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.owner}
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-navy md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-lg font-medium text-white hover:bg-white/5 hover:text-gold-light"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="mt-2 px-3 pb-2 text-sm text-white/70">
              <MapPin className="mr-1 inline h-4 w-4 text-gold-light" aria-hidden="true" />
              Serving {site.location.label}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
