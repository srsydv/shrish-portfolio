"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { site } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Protocol inquiry")}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="panel overflow-hidden rounded-3xl">
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-line p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
            <p className="kicker">06 / Signal</p>
            <h2 className="display mt-4 text-4xl text-foam sm:text-6xl">Let’s build the next rail.</h2>
            <p className="mt-6 max-w-md text-mist">
              Protocol work, smart-contract architecture, or a backend that has to keep up with the chain. I read every message.
            </p>

            <div className="mt-10 space-y-4">
              <button
                type="button"
                onClick={copy}
                className="flex w-full items-center justify-between rounded-2xl border border-line bg-void/40 px-4 py-4 text-left transition hover:border-cyan/40"
              >
                <span>
                  <span className="kicker text-[10px] block">Email</span>
                  <span className="mt-1 block text-foam">{site.email}</span>
                </span>
                {copied ? <Check size={16} className="text-signal" /> : <Copy size={16} className="text-mist" />}
              </button>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center justify-between rounded-2xl border border-line bg-void/40 px-4 py-4 transition hover:border-cyan/40"
              >
                <span>
                  <span className="kicker text-[10px] block">Phone</span>
                  <span className="mt-1 block text-foam">{site.phone}</span>
                </span>
                <ArrowUpRight size={16} className="text-mist" />
              </a>
              <div className="pt-2">
                <p className="kicker mb-3 text-[10px]">Social</p>
                <SocialLinks />
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-4 p-6 sm:p-10 lg:p-14">
            <label className="block">
              <span className="kicker text-[10px]">Name</span>
              <input
                required
                name="name"
                className="mt-2 w-full rounded-xl border border-line bg-void/50 px-4 py-3 text-foam outline-none transition focus:border-cyan/50"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="kicker text-[10px]">Email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-xl border border-line bg-void/50 px-4 py-3 text-foam outline-none transition focus:border-cyan/50"
                placeholder="you@protocol.xyz"
              />
            </label>
            <label className="block flex-1">
              <span className="kicker text-[10px]">Message</span>
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full resize-none rounded-xl border border-line bg-void/50 px-4 py-3 text-foam outline-none transition focus:border-cyan/50"
                placeholder="What are we shipping?"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-void transition hover:bg-foam"
            >
              {sent ? "Opening mail client" : "Transmit"}
              <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
