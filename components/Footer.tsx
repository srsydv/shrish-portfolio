import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm text-foam">© {new Date().getFullYear()} {site.name}</p>
          <p className="mt-1 font-mono text-[11px] text-mist">Backend & blockchain · Built for the chain, deployed on Vercel.</p>
        </div>
        <div className="flex gap-5">
          <a href={site.socials.github} className="kicker text-[11px] hover:text-cyan" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.socials.linkedin} className="kicker text-[11px] hover:text-cyan" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.resume} download className="kicker text-[11px] hover:text-cyan">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
