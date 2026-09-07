"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { roles, site, stats } from "@/lib/data";
import NetworkCanvas from "./NetworkCanvas";
import { useEffect, useState } from "react";

export default function Hero() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-16">
      <NetworkCanvas />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] perspective-floor opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-void/20 via-void/55 to-void" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-5 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-16">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1.5">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal" />
            <span className="kicker text-[10px] text-signal">{site.availability}</span>
          </div>
          <p className="hidden kicker text-[10px] sm:block">Big Ladder · 2026</p>
        </div>

        <div className="mt-10 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="kicker mb-6"
          >
            01 / Introduction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="display text-[18vw] leading-[0.82] text-foam sm:text-[11vw] lg:text-[8.4rem]"
          >
            SHRISH
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan via-foam to-violet">
              KUMAR
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-xl font-light text-foam/90 sm:text-2xl">
              {site.title}
            </p>
            <p className="mt-3 min-h-[1.75rem] font-mono text-sm tracking-wide text-cyan">
              <span className="text-mist">focus → </span>
              {roles[role]}
              <span className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-cyan align-middle" />
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              {site.headline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-void transition hover:bg-foam"
            >
              Inspect work
              <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm text-foam transition hover:border-cyan/50 hover:text-cyan"
            >
              Start a protocol
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ink/90 px-4 py-5 sm:px-6">
              <div className="display text-3xl text-cyan sm:text-4xl">{stat.value}</div>
              <div className="mt-2 kicker text-[10px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
