"use client";

import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 px-4 pb-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          Leadership & Recognition
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-50 sm:text-4xl">
          Built to Lead{" "}
          <span className="text-sky-400">High‑Trust Teams</span>
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          Leadership that shows up in student organizations, research, and the
          way teams trust Sanket with complexity.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-slate-900/80 px-6 py-6 text-left shadow-xl shadow-black/50"
          >
            <p className="text-sm font-semibold text-slate-50">
              President, ISA Student Section
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              Two‑year term · Best Student Section Award
            </p>
            <ul className="mt-4 space-y-2 text-[11px] text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>
                  Led the student section through events, initiatives, and
                  cross‑team coordination.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <span>
                  Built a culture of ownership, preparation, and follow‑through.
                </span>
              </li>
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-3xl bg-slate-900/80 px-6 py-6 text-left shadow-xl shadow-black/50"
          >
            <p className="text-sm font-semibold text-slate-50">
              Academic & Professional Recognition
            </p>
            <p className="mt-1 text-[11px] text-slate-400">
              National conferences · Trusted by senior leadership
            </p>
            <ul className="mt-4 space-y-2 text-[11px] text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>Multiple Best Paper Awards at national conferences.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Trusted to present complex technical work to non‑technical
                  audiences.
                </span>
              </li>
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
