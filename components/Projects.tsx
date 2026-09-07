"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const accents = {
  cyan: {
    chip: "border-cyan/30 text-cyan bg-cyan/8",
    glow: "hover:border-cyan/40 hover:shadow-[0_0_60px_rgba(60,239,255,0.08)]",
    bar: "from-cyan to-transparent",
  },
  violet: {
    chip: "border-violet/30 text-violet bg-violet/8",
    glow: "hover:border-violet/40 hover:shadow-[0_0_60px_rgba(155,125,255,0.1)]",
    bar: "from-violet to-transparent",
  },
  gold: {
    chip: "border-gold/30 text-gold bg-gold/8",
    glow: "hover:border-gold/40 hover:shadow-[0_0_60px_rgba(240,195,106,0.1)]",
    bar: "from-gold to-transparent",
  },
  signal: {
    chip: "border-signal/30 text-signal bg-signal/8",
    glow: "hover:border-signal/40 hover:shadow-[0_0_60px_rgba(93,255,177,0.1)]",
    bar: "from-signal to-transparent",
  },
} as const;

export default function Projects() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-16">
      <div className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="kicker">03 / Selected work</p>
          <h2 className="display mt-4 text-4xl text-foam sm:text-6xl">Work that ships.</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-mist">
          DeFi vaults, tokenized assets, and a live UK workwear platform — systems I led from architecture to production.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => {
          const accent = accents[project.accent];
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
              className={`panel group overflow-hidden rounded-3xl p-6 transition duration-500 sm:p-8 lg:p-10 ${accent.glow}`}
            >
              <div className={`mb-8 h-px bg-linear-to-r ${accent.bar}`} />
              <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-mist">{project.index}</span>
                    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase ${accent.chip}`}>
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-mist">{project.year}</span>
                  </div>
                  <h3 className="display mt-4 text-3xl text-foam sm:text-5xl">{project.name}</h3>
                  <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mist sm:text-base">{project.blurb}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-foam transition hover:border-foam/40"
                      >
                        {link.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="kicker mb-4 text-[10px] text-cyan">What I built</p>
                  <ul className="space-y-3">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm leading-relaxed text-foam/85 sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-void/50 px-2.5 py-1 font-mono text-[11px] text-mist"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
