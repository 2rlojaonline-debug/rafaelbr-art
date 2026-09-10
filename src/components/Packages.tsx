"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { INSTAGRAM_URL } from "@/lib/constants";

const packs = [
  {
    name: "UNITÁRIA",
    price: "R$ 9,90",
    featured: false,
    items: ["1 arte", "HD", "Nome personalizado"],
  },
  {
    name: "PACK WARRIOR",
    price: "R$ 24,90",
    featured: true,
    items: ["3 artes", "Cenários diferentes", "Hero Aura"],
  },
  {
    name: "PACK HERO",
    price: "R$ 39,90",
    featured: false,
    items: ["5 artes", "Prioridade", "Wallpaper"],
  },
  {
    name: "PACK LEGEND",
    price: "R$ 69,90",
    featured: false,
    items: ["10 artes", "Clã completo", "Alta resolução"],
  },
];

export function Packages() {
  return (
    <section id="pacotes" className="relative z-20 px-5 py-24 md:px-8">
      <FadeIn className="mx-auto mb-10 max-w-7xl text-center">
        <h2 className="font-cinzel text-3xl md:text-5xl">Escolha seu pacote</h2>
      </FadeIn>
      <FadeIn className="mx-auto mb-10 max-w-7xl text-center" delay={0.06}>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          PREÇOS DE LANÇAMENTO
        </p>
        <p className="mt-3 text-sm text-white/70 md:text-base">
          Valores especiais por tempo limitado.
        </p>
      </FadeIn>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {packs.map((pack, index) => (
          <FadeIn key={pack.name} delay={index * 0.08}>
            <article
              className={`relative flex h-full flex-col rounded-2xl p-6 ${
                pack.featured
                  ? "bg-card neon-border scale-[1.02]"
                  : "glass neon-border-cyan"
              }`}
            >
              {pack.featured ? (
                <span className="absolute -top-3 right-5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-white shadow-neon">
                  MAIS VENDIDO
                </span>
              ) : null}
              <h3 className="font-cinzel text-lg tracking-wide">{pack.name}</h3>
              <p className="mt-4 font-cinzel text-4xl text-primary">
                {pack.price}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {pack.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-neon mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-bold tracking-[0.2em] ${
                  pack.featured
                    ? "bg-primary text-white shadow-neon"
                    : "border border-secondary/40 text-secondary"
                }`}
              >
                PEDIR AGORA
              </a>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
