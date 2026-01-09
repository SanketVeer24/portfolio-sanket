"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "Users Impacted",
    value: "100K+",
    icon: "👥",
    description: "Students and stakeholders across UGA"
  },
  {
    label: "Data Integrity",
    value: "99.9%",
    icon: "📈",
    description: "Mission‑critical student information systems"
  },
  {
    label: "Performance Boost",
    value: "40%",
    icon: "⚡",
    description: "Faster responses and smoother workflows"
  },
  {
    label: "Process Automation",
    value: "60%",
    icon: "🤖",
    description: "Reduction in manual processing effort"
  }
];

const roles = [
  {
    company: "EITS, University of Georgia",
    title: "Application Analyst Specialist",
    accent: "bg-sky-500",
    points: [
      "Led development of logic‑intensive CPOS module solving a critical prerequisite validation challenge.",
      "Maintained 99.9%+ data integrity across mission‑critical student systems.",
      "Improved system performance by ~40%, reducing response times by ~1.5s and code optimization."
    ]
  },
  {
    company: "UGA Graduate Assistant",
    title: "Android Developer",
    accent: "bg-emerald-400",
    points: [
      "Built production‑ready Android modules from scratch for 35,000+ users.",
      "Improved operational workflows by approximately 66%.",
      "Delivered scalable, well‑tested features using a modern Android stack."
    ]
  },
  {
    company: "OmvSab IT Solutions",
    title: "Software Developer",
    accent: "bg-amber-400",
    points: [
      "Designed cloud‑native systems using Kubernetes and OpenFaaS.",
      "Built full‑stack enterprise software with CI/CD pipelines.",
      "Improved operational efficiency by around 40%."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 px-4 py-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          Impact & Results
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-50 sm:text-6xl">
          Proven Track Record of<br/>
          <span className="text-sky-400">Excellence</span>
        </h2>
        <p className="mt-3 text-md text-slate-300">
          Real outcomes, measurable impact, and systems that transform how
          organizations operate.
        </p>

        {/* Top stat cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-slate-900/80 px-6 py-6 text-left shadow-xl shadow-black/50"
            >
              <div className="mb-4 flex  items-center justify-left text-7xl">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-slate-50">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-300">
                {stat.label}
              </p>
              <p className="mt-2 text-[11px] text-slate-400">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Role cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {roles.map((role) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-slate-900/80 px-6 py-6 text-left shadow-xl shadow-black/50"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-12 w-15 items-top justify-center rounded-xl ${role.accent}`}
                >
                  <span className="text-4xl text-slate-900">🏛️</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    {role.company}
                  </p>
                  <p className="text-[11px] text-slate-400">{role.title}</p>
                </div>
              </div>
              <ul className="space-y-2 text-[11px] text-slate-300">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    ✅
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#leadership"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
          >
            Explore Full Experience →
          </a>
        </div>
      </div>
    </section>
  );
}
