"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/75 backdrop-blur-xl border-b border-line" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan/30 bg-panel text-[11px] font-semibold tracking-[0.14em] text-cyan">
            SK
          </span>
          <span className="hidden text-sm font-medium tracking-wide text-foam/90 sm:block">
            Shrish Kumar
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="kicker text-[11px] transition hover:text-cyan"
            >
              {item.label}
            </a>
          ))}
          <SocialLinks compact />
          <a
            href={site.resume}
            download
            className="rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase text-cyan transition hover:bg-cyan/15"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-foam md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-void/95 px-6 py-10 md:hidden">
          <div className="flex flex-col gap-6">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="display text-4xl text-foam"
              >
                {item.label}
              </a>
            ))}
            <SocialLinks className="mt-4" />
            <a
              href={site.resume}
              download
              onClick={() => setOpen(false)}
              className="mt-2 kicker text-cyan"
            >
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
