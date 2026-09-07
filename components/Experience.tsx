"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <p className="kicker">04 / Timeline</p>
      <h2 className="display mt-4 max-w-3xl text-4xl text-foam sm:text-6xl">Four years in the engine room.</h2>

      <div className="mt-14 space-y-0">
        {experience.map((job, i) => (
          <motion.article
            key={job.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-6 border-t border-line py-10 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] lg:gap-16"
          >
            <div>
              <p className="font-mono text-xs text-mist">{job.period}</p>
              <p className="mt-2 text-sm text-mist">{job.location}</p>
              {job.current && (
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-signal">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" />
                  Current
                </span>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-medium text-foam">{job.role}</h3>
              <p className="mt-1 text-cyan">{job.company}</p>
              <ul className="mt-5 space-y-3">
                {job.points.map((point) => (
                  <li key={point} className="max-w-3xl text-[15px] leading-relaxed text-mist">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <span className="sr-only">{i + 1}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
