"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 pt-28 pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-stretch">
        {/* Left column: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-left"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
            Enterprise Systems · Leadership
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-50 sm:text-5xl">
            I Build Systems
            <br />
            That{" "}
            <span className="text-sky-400">Scale</span>
            <br />
            And Solve Problems
            <br />
            Others Avoid
          </h1>

          <p className="mt-5 max-w-xl text-sm text-slate-300">
            Enterprise systems architect with proven impact across 100,000+
            users. Combining deep technical expertise with strategic leadership
            to deliver solutions that actually move the needle.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              View My Work
              <span className="ml-2 text-[10px]">▾</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-slate-800 px-5 py-3 text-xs font-semibold text-slate-100 shadow-md shadow-black/40 transition hover:bg-slate-700"
            >
              Let&apos;s Build Something
              <span className="ml-2 text-[10px]">★</span>
            </a>
          </div>

          {/* Bottom badges */}
          <div className="mt-7 flex flex-wrap gap-4 text-[11px] text-slate-300">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>MS in CS · UGA</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <span>Enterprise Systems @ EITS</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span>Award‑Winning Leader</span>
            </div>
          </div>
        </motion.div>

        {/* Right column: device mock + metrics */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1"
        >
          <div className="relative mx-auto max-w-md">
            {/* Outer blue / teal frames */}
            <div className="absolute -left-6 -top-6 h-10 w-24 rounded-3xl border border-sky-500/50" />
            <div className="absolute -right-6 bottom-10 h-10 w-28 rounded-3xl border border-emerald-400/60" />

            {/* Main tablet */}
            <div className="overflow-hidden rounded-3xl bg-slate-950 shadow-2xl shadow-black/70">
              <div className="relative h-64 w-full bg-slate-900">
                <Image
                  src="/dataI.jpg" // replace with real image
                  alt="Abstract data systems visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Top-right badge */}
            <div className="absolute -right-4 -top-4 min-w-[120px] rounded-xl bg-sky-500 px-3 py-2 text-right text-xs font-semibold text-white shadow-lg shadow-sky-500/40">
              <div>99.9%</div>
              <div className="text-[11px] font-medium opacity-90">
                Data Integrity
              </div>
            </div>

            {/* Bottom-left badge */}
            <div className="absolute left-4 bottom-6 min-w-[130px] rounded-xl bg-emerald-400 px-3 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-emerald-400/40">
              <div>40% Performance Boost</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
