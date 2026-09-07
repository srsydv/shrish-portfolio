"use client";

export default function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-fade opacity-80" />
      <div className="orb absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan/20" />
      <div
        className="orb absolute right-[-80px] top-40 h-[28rem] w-[28rem] rounded-full bg-violet/18"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="orb absolute bottom-[-80px] left-1/3 h-72 w-72 rounded-full bg-gold/10"
        style={{ animationDelay: "-5s" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-40 opacity-40" />
    </div>
  );
}
