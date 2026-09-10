"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const quotes = [
  {
    name: "MKZDONJUAN",
    avatar: "/avatars/mkz.jpg",
    text: "Ficou idêntico ao meu personagem. Muito acima do esperado.",
  },
  {
    name: "THUGGOOD",
    avatar: "/avatars/thug.jpg",
    text: "Agora meu perfil parece oficial.",
  },
  {
    name: "GREED",
    avatar: "/avatars/greed.jpg",
    text: "Todo meu clã quis fazer depois da minha arte.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative z-20 px-5 py-24 md:px-8">
      <FadeIn className="mx-auto mb-14 max-w-7xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">
          Clã aprovou
        </p>
        <h2 className="mt-3 font-cinzel text-3xl md:text-5xl">Depoimentos</h2>
      </FadeIn>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
        {quotes.map((quote, index) => (
          <FadeIn key={quote.name} delay={index * 0.1}>
            <figure className="glass neon-border h-full rounded-2xl p-7">
              <Image
                src={quote.avatar}
                alt={`Avatar de ${quote.name}`}
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-full object-cover ring-2 ring-primary/60 shadow-neon"
              />
              <blockquote className="mt-5 text-lg leading-relaxed text-white/85">
                “{quote.text}”
              </blockquote>
              <figcaption className="mt-5 font-cinzel text-sm tracking-[0.18em] text-secondary">
                {quote.name}
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
