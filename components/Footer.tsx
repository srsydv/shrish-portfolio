import { site } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm text-foam">© {new Date().getFullYear()} {site.name}</p>
          <p className="mt-1 font-mono text-[11px] text-mist">Backend & blockchain · Built for the chain, deployed on Vercel.</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <SocialLinks compact />
          <a href={site.resume} download className="kicker text-[11px] hover:text-cyan">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
