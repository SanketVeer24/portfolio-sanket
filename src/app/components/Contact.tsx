"use client";

import { motion } from "framer-motion";

const LINKEDIN_URL = "https://www.linkedin.com/in/YOUR-HANDLE";
const EMAIL = "your.email@example.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 px-4 pb-16 pt-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-50 sm:text-4xl">
          Building Something{" "}
          <span className="text-sky-400">Meaningful?</span>
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          If you&apos;re scaling critical systems or need someone who can own
          complexity end‑to‑end, let&apos;s talk.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
          >
            Connect on LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center rounded-full bg-slate-800 px-6 py-3 text-xs font-semibold text-slate-100 shadow-md shadow-black/40 transition hover:bg-slate-700"
          >
            Email Sanket
          </a>
        </motion.div>
      </div>
    </section>
  );
}
