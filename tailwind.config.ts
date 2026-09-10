import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        card: "#111113",
        primary: "#FF2D8F",
        secondary: "#5BE7FF",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(255, 45, 143, 0.45)",
        "neon-cyan": "0 0 24px rgba(91, 231, 255, 0.4)",
        "card-glow":
          "0 0 0 1px rgba(255, 45, 143, 0.28), 0 0 32px rgba(255, 45, 143, 0.18)",
      },
      backgroundImage: {
        "grid-fog":
          "radial-gradient(ellipse at center, rgba(255,45,143,0.08), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
