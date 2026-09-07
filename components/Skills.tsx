"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="stack" className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-16">
      <p className="kicker">05 / Stack</p>
      <h2 className="display mt-4 text-4xl text-foam sm:text-6xl">The toolchain.</h2>
      <p className="mt-5 max-w-xl text-mist">
        Expert across Solidity, EVM tooling, and production Node backends — the full path from contract to API.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="panel rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl text-foam">{group.title}</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">{group.level}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-void/40 px-3 py-1.5 text-sm text-foam/90 transition hover:border-cyan/40 hover:text-cyan"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
