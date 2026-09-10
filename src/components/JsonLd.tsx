import { SITE_NAME, SITE_URL, INSTAGRAM_URL } from "@/lib/constants";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/hero/stuttgart.jpg`,
    description:
      "Artes ultra realistas inspiradas em Lineage 2 para Instagram, clãs e streamers.",
    sameAs: [INSTAGRAM_URL],
    areaServed: "BR",
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: "19.90",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
