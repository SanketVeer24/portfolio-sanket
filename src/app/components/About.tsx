"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className=" bg-gradient-to-r from-slate-50 via-white to-slate-50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Eyebrow */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-500">
          About
        </p>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)] md:items-center">
          {/* Left: image card + GPA badge */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-slate-300/60">
              <div className="relative h-64 w-full">
                <Image
                  src="/top.jpg" // replace with real image
                  alt="Person standing on a peak at sunrise"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* GPA badge card */}
            <div className="absolute -bottom-7 left-10 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm shadow-xl shadow-slate-300/70">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                🏆
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  3.78 GPA
                </p>
                <p className="text-[11px] text-slate-500">
                  MS Computer Science · UGA
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Engineering Impact{" "}
              <span className="text-sky-500">at Scale</span>
            </h2>

            <p className="mt-4 text-sm text-slate-600">
              I&apos;m not just a software engineer — I&apos;m a strategic
              problem solver who thrives on complexity. With a Master&apos;s in
              Computer Science from the University of Georgia, I&apos;ve built
              my career around solving the challenges others walk away from.
            </p>

            <p className="mt-4 text-sm text-slate-600">
              At <span className="font-semibold">Enterprise Information Technology Services</span>, I
              developed mission-critical systems impacting 100% of UGA&apos;s
              student body — tackling a prerequisite validation problem that
              remained unsolved for over two years. The result: 99.9%+ data
              integrity, 40% performance improvements, and systems that just
              work.
            </p>

            <p className="mt-4 text-sm text-slate-600">
              My approach combines deep technical expertise across enterprise
              systems, cloud architectures, and data engineering with the
              strategic thinking and communication skills needed to turn vision
              into reality.
            </p>

            {/* Feature cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-sky-50 px-4 py-3 text-xs text-slate-700">
                <p className="font-semibold text-slate-900">Fast Learner</p>
                <p className="mt-1">
                  Master complex systems rapidly and ship with confidence.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 px-4 py-3 text-xs text-slate-700">
                <p className="font-semibold text-slate-900">
                  Strategic Thinker
                </p>
                <p className="mt-1">
                  Execute with clarity, precision, and long-term impact.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 px-4 py-3 text-xs text-slate-700">
                <p className="font-semibold text-slate-900">Team Leader</p>
                <p className="mt-1">
                  Build trust and alignment across technical and non-technical
                  stakeholders.
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 px-4 py-3 text-xs text-slate-700">
                <p className="font-semibold text-slate-900">Impact Driven</p>
                <p className="mt-1">
                  Focused on outcomes that matter, not just shipping features.
                </p>
              </div>
            </div>

            <a
              href="#experience"
              className="mt-6 inline-flex text-xs font-semibold text-sky-600 hover:text-sky-500"
            >
              Learn More About My Journey →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
