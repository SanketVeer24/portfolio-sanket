"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

  const skills = [
    {type: "Programming Languages",
      list: [" Java","Kotlin", "Python", "C", "C++", "SQL", "NoSQL", "PL/SQL", "HTML", "JavaScript", "CSS", "JSON", "XML"]
    },
    {type: "Frameworks & Libraries",
      list: [" Spring Boot","ReactJS", "Pandas", "PyTorch", "TensorFlow", "Numpy", "Scikit-Learn", "XgBoost", "Matplotlib", "RESTfulAPI"]
    },
    {type: "Tools",
      list: [" Git","GitLab", "Jira", "Power BI", " Microsoft Fabric","Microsoft Project", "Excel", "Smartsheet", "MySQL", "LogRhythm", "AlienVault"]
    },
  ]

export default function Skills() {

  return (
    <section id="skills" className=" mx-auto max-w-6xl px-20 py-20">
      <SectionHeader
        eyebrow="Skills"
        title="Depth, but carefully curated"
        subtitle="Stacks chosen for impact: strongly typed backends, modern frontends, and battle-tested cloud patterns."
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid gap-5 md:grid-cols-3"
      >
        { skills.map((skill) => 
        (<article className="rounded-2xl border border-slate-800 bg-black/40 p-4 text-xs text-slate-300">
          <h3 className="mb-2 text-sm font-semibold text-slate-50">
            {skill.type}
          </h3>

         
          <ul className="space-y-1 grid md:grid-cols-2">
          {skill.list.map((item)=>( 
          
            <li>{item}</li>))}
          </ul>
        

          
        </article>))}
        <article className="rounded-2xl border border-slate-800 bg-black/40 p-4 text-xs text-slate-300">
          <h3 className="mb-2 text-sm font-semibold text-slate-50">
            Cloud & Systems
          </h3>
          <ul className="space-y-1 ">
            <li>Kubernetes</li>
            <li>CI/CD pipelines</li>
            <li>Databases & data integrity</li>
            <li>Security and SIEM exposure</li>
          </ul>
        </article>
        <article className="rounded-2xl border w-165 border-slate-800 bg-black/40 p-4 text-xs text-slate-300">
          <h3 className="mb-2 text-sm font-semibold text-slate-50">
            Key Expertise
          </h3>
          <ul className="space-y-1 grid md:grid-cols-2">
            <li>Mobile and Web app development</li>
            <li>Distributed Systems Architecture</li>
            <li>AI-driven Development</li>
            <li> Data Pipeline Design</li>
            <li> Prompt Engineering</li> 
            <li>Cloud Integration</li>
            <li>Security Operations</li>
            <li>Scalability Optimization</li>
            <li>Performance Metrics</li>
          </ul>
        </article>
      </motion.div>
    </section>
  );
}
