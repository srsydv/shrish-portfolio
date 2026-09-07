"use client";

import { motion } from "framer-motion";
import { about, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="kicker">02 / About</p>
          <h2 className="display mt-4 text-4xl text-foam sm:text-6xl">{about.kicker}</h2>
          <div className="mt-8 panel rounded-2xl p-6">
            <p className="kicker text-[10px] text-cyan">Education</p>
            <p className="mt-3 text-lg font-medium text-foam">{education.degree}</p>
            <p className="text-mist">{education.field}</p>
            <p className="mt-3 text-sm text-foam/80">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-mist">{education.period}</p>
          </div>
        </div>
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08 }}
              className="text-lg leading-relaxed text-mist sm:text-xl"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
