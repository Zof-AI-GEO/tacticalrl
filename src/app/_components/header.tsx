"use client";

import Link from "next/link";
import { useState } from "react";

const primaryLinks = [
  { href: "#latest", label: "Signals" },
  { href: "#trending", label: "Trending" },
  { href: "#deep-dives", label: "Deep Research" },
  { href: "#resources", label: "Resources" },
  { href: "#newsletter", label: "Newsletter" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-6 z-40">
      <div className="gradient-border">
        <div className="glass-panel flex items-center gap-4 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-display text-2xl font-semibold tracking-tight text-white"
            >
              tacti<span className="text-indigo-300">calrl</span>
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-white/80 xl:flex">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 transition-colors hover:border-white/15 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300/70" />
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="#newsletter"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.45)] transition-transform hover:scale-[1.03]"
            >
              Launch Lab
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 p-2 text-slate-100 transition-colors hover:border-indigo-300 md:hidden"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-100 shadow-[0_25px_55px_rgba(15,23,42,0.35)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-2 text-sm font-medium">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:border-indigo-300/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white"
          >
            Launch Lab
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
