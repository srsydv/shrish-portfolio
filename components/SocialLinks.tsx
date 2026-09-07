import { Github, Linkedin } from "lucide-react";
import { site } from "@/lib/data";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.726-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export const socialLinks = [
  { label: "GitHub", href: site.socials.github, icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "X", href: site.socials.x, icon: XIcon },
] as const;

export default function SocialLinks({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`grid place-items-center rounded-full border border-line text-foam transition hover:border-cyan/50 hover:text-cyan ${
            compact ? "h-9 w-9" : "h-11 w-11"
          }`}
        >
          <Icon size={compact ? 15 : 17} />
        </a>
      ))}
    </div>
  );
}
