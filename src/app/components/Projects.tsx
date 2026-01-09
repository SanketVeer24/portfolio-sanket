"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    name: "Spot-On · AWS EC2 Spot Price Intelligence",
    summary:
      "ML-driven intelligence layer for EC2 Spot pricing, turning raw data into actionable capacity decisions.",
    details: [
      "Used XGBoost, Random Forest, and LSTM models to predict Spot price behavior with roughly 93% accuracy on 20,000+ data points.",
      "Deployed on Kubernetes for scalable, resilient inference workloads.",
      "Focused on cost optimization without compromising reliability."
    ],
    tag: "ML · Cloud · Kubernetes"
  },
  {
    name: "Art Gallery Event Management Platform",
    summary:
      "Full-stack platform for real-world gallery bookings, admin control, and transactional workflows.",
    details: [
      "Built with Spring Boot on the backend and React on the frontend.",
      "Implemented booking flows, admin dashboards, and transactional email workflows.",
      "Designed persistence and access layers to remain robust under concurrent usage."
    ],
    tag: "Spring Boot · React"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects with an enterprise spine"
        subtitle="Systems and platforms that feel polished on the surface and disciplined underneath."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="flex flex-col rounded-2xl border border-slate-800 bg-black/40 p-5"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {project.name}
              </h3>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] text-slate-300">
                {project.tag}
              </span>
            </div>
            <p className="mb-3 text-xs text-slate-300">{project.summary}</p>
            <ul className="mb-4 space-y-2 text-xs text-slate-300">
              {project.details.map(item => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[10px] rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto text-[11px] text-slate-500">
              Code links and demos available on request.
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
