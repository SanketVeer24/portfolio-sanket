"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

  const quotes = [
    {
      line : "“Sanket is exceptionally intelligent, adaptable, and professional. He consistently goes beyond expectations, builds trust across teams, and approaches challenges with maturity and strategic clarity.”",
      person : "— Shanon L Marable,",
      post: "Interim ACIO, Student Information Systems, University of Georgia"
    },
    {
      line : "“Sanket is exceptionally intelligent, adaptable, and professional. He consistently goes beyond expectations, builds trust across teams, and approaches challenges with maturity and strategic clarity.”",
      person : "— Kristianna McDaniel,",
      post: "IT Manager, Student Information Systems, University of Georgia"
    },
  ]
export default function Testimonials() {


  return (
    <section id="testimonials">
      <SectionHeader
        eyebrow="Testimonial"
        title="Trusted by senior leadership"
        subtitle="Endorsements that highlight judgment, maturity, and follow-through — not just raw skill."
      />
      {quotes.map((quote)=> (
        <div> 
        <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative rounded-2xl border border-slate-800 bg-black/50 p-6"
      >
        <div className="absolute -top-4 left-6 h-8 w-8 rounded-full border border-slate-700 bg-gradient-to-tr from-accent/80 to-sky-400/80 text-center text-2xl leading-[32px] text-black">
          “
        </div>
        <blockquote className="mt-4 space-y-2 text-sm text-slate-200">
          <p>
            {quote.line}
          </p>
        </blockquote>
        <p className="mt-4 text-xs font-medium text-slate-400">
         {quote.person}{" "}{quote.post}
        </p>
      </motion.div>
      <br />
      </div>
      ))
        
      }
      
    </section>
  );
}
