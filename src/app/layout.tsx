import type { Metadata, Viewport } from "next";
import { Cinzel, Rajdhani } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { Particles } from "@/components/Particles";
import { SITE_NAME, SITE_URL, INSTAGRAM_HANDLE } from "@/lib/constants";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Artes personalizadas de Lineage 2`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Artes ultra realistas inspiradas em Lineage 2. Transforme seu personagem em uma obra de arte para Instagram, clãs e streamers. Peça no Instagram " +
    INSTAGRAM_HANDLE +
    ".",
  keywords: [
    "RafaeLBR ART",
    "Lineage 2",
    "arte Lineage 2",
    "personagem L2",
    "castelo Stuttgart",
    "arte personalizada",
    "RafaeLBR",
  ],
  authors: [{ name: "RafaeLBR" }],
  creator: "RafaeLBR",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Transforme seu personagem em uma obra de arte`,
    description:
      "Artes ultra realistas inspiradas em Lineage 2. Ideal para Instagram, clãs, streamers e jogadores.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Artes de Lineage 2`,
    description:
      "Artes ultra realistas inspiradas em Lineage 2. Fale no Instagram " +
      INSTAGRAM_HANDLE +
      ".",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${rajdhani.variable}`}>
      <body>
        <JsonLd />
        <Particles />
        {children}
      </body>
    </html>
  );
}
