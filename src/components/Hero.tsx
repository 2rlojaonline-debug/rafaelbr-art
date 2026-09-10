"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/stuttgart.jpg')" }}
    >
      <Image
        src="/hero/stuttgart.jpg"
        alt="Castelo de gelo estilo Stuttgart, Lineage 2"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-[center_45%]"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/20 via-background/45 to-background" />
      <div className="aurora absolute left-[-6rem] top-10 z-[1] h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
      <div className="aurora absolute -right-10 bottom-24 z-[1] h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 pb-16 pt-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-secondary md:text-sm"
        >
          RafaeLBR ART · Lineage 2
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="max-w-5xl font-cinzel text-4xl font-semibold leading-[1.08] text-white drop-shadow-[0_0_28px_rgba(255,45,143,0.35)] sm:text-5xl md:text-7xl lg:text-8xl"
        >
          Transforme seu personagem em uma obra de arte.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-xl"
        >
          Artes ultra realistas inspiradas em Lineage 2. Ideal para Instagram,
          clãs, streamers e jogadores.
        </motion.p>
        <motion.a
          href="#cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="btn-neon mt-10 inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm font-bold tracking-[0.28em] text-white shadow-neon md:px-14 md:py-5 md:text-base"
        >
          QUERO MINHA ARTE
        </motion.a>
      </div>
    </section>
  );
}
