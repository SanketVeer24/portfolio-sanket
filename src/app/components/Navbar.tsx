"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-black/40 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-accent to-sky-400" />
          <span className="text-sm font-semibold tracking-wide text-slate-100">
            Sanket Veer
          </span>
        </div>
        <div className="hidden gap-6 text-xs font-medium text-slate-300 md:flex">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
