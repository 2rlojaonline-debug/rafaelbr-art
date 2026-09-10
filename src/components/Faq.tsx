"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const items = [
  {
    q: "Quanto tempo demora?",
    a: "Normalmente entre 30 minutos e 24 horas.",
  },
  {
    q: "Preciso enviar login?",
    a: "Não. Apenas um print do personagem.",
  },
  {
    q: "Posso escolher qualquer castelo?",
    a: "Sim. Stuttgart, Aden, Goddard e cenários personalizados.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-20 px-5 py-24 md:px-8">
      <FadeIn className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="font-cinzel text-3xl md:text-5xl">FAQ</h2>
      </FadeIn>
      <div className="mx-auto max-w-3xl space-y-4">
        {items.map((item, index) => {
          const isOpen = open === index;
          return (
            <FadeIn key={item.q} delay={index * 0.06}>
              <div className="glass neon-border overflow-hidden rounded-2xl">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="btn-neon flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-cinzel text-base md:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden px-5 pb-5 text-white/70">
                    {item.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
