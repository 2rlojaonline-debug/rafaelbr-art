"use client";

import { Castle, Download, Image as ImageIcon, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const steps = [
  {
    icon: ImageIcon,
    title: "Envie o print",
    text: "Mande um print do seu personagem pelo Instagram.",
  },
  {
    icon: Castle,
    title: "Escolha o cenário",
    text: "Castelo, gelo, fogo, hero, siege, cidade ou personalizado.",
  },
  {
    icon: Sparkles,
    title: "Eu crio sua arte",
    text: "Transformação ultra realista em qualidade premium.",
  },
  {
    icon: Download,
    title: "Receba em HD",
    text: "Imagem pronta para Instagram, WhatsApp e wallpaper.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative z-20 px-5 py-24 md:px-8">
      <FadeIn className="mx-auto mb-14 max-w-7xl text-center">
        <h2 className="font-cinzel text-3xl md:text-5xl">Como funciona?</h2>
      </FadeIn>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.1}>
            <article className="glass neon-border h-full rounded-2xl p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10 shadow-neon">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xs tracking-[0.3em] text-secondary">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-cinzel text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                {step.text}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
