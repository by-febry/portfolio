"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-base">Char</span>
          <span className="ml-1 text-zinc-500">Portfolio</span>
        </Link>
        <button
          className="sm:hidden rounded-md border px-3 py-1 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-controls="mobile-menu"
          data-expanded={open ? "true" : "false"}
        >
          Menu
        </button>
        <ul className="hidden gap-4 text-sm sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:underline underline-offset-4">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div id="mobile-menu" className="sm:hidden border-t border-black/5 dark:border-white/10">
          <ul className="mx-auto max-w-5xl px-5 py-3 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}


