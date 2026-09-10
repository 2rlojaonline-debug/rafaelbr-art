"use client";

import { FadeIn } from "@/components/FadeIn";
import { INSTAGRAM_URL } from "@/lib/constants";

export function FinalCta() {
  return (
    <section id="cta" className="relative z-20 px-5 py-28 md:px-8">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-primary/25 blur-[90px]" />
      <FadeIn className="mx-auto max-w-4xl rounded-3xl border border-primary/40 bg-card/80 px-6 py-16 text-center shadow-neon backdrop-blur-xl md:px-16">
        <h2 className="font-cinzel text-3xl leading-tight md:text-6xl">
          Seu personagem merece uma arte lendária.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
          Clique abaixo e fale comigo diretamente no Instagram.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon mt-10 inline-flex min-h-16 w-full max-w-xl items-center justify-center rounded-full bg-primary px-8 py-5 text-lg font-bold tracking-[0.28em] text-white shadow-[0_0_50px_rgba(255,45,143,0.55)] md:text-2xl"
        >
          ABRIR INSTAGRAM
        </a>
      </FadeIn>
    </section>
  );
}
