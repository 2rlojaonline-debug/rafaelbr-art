"use client";

import { INSTAGRAM_URL, SITE_NAME } from "@/lib/constants";
import { Sword } from "lucide-react";

export function Header() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        <a
          href="#hero"
          className="pointer-events-auto inline-flex items-center gap-2 font-cinzel text-sm tracking-[0.22em] text-white md:text-base"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-card/70 shadow-neon">
            <Sword className="h-4 w-4 text-primary" />
          </span>
          {SITE_NAME}
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon pointer-events-auto hidden rounded-full border border-secondary/40 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-secondary shadow-neon-cyan md:inline-flex"
        >
          INSTAGRAM
        </a>
      </div>
    </header>
  );
}
