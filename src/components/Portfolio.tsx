"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";

const works = [
  { src: "/portfolio/01.jpg", title: "RafaeLBR Castelo de Gelo" },
  { src: "/portfolio/02.jpg", title: "RafaeLBR Castelo Imperial" },
  { src: "/portfolio/03.jpg", title: "Hero Aura" },
  { src: "/portfolio/04.jpg", title: "PvP Edition" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative z-20 px-5 py-24 md:px-8">
      <FadeIn className="mx-auto mb-12 max-w-7xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-secondary">
          Galeria
        </p>
        <h2 className="mt-3 font-cinzel text-3xl md:text-5xl">Portfólio</h2>
      </FadeIn>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2">
        {works.map((work, index) => (
          <FadeIn key={work.title} delay={index * 0.08}>
            <article className="group neon-border overflow-hidden rounded-2xl bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <h3 className="absolute bottom-5 left-5 right-5 font-cinzel text-lg text-white md:text-2xl">
                  {work.title}
                </h3>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
