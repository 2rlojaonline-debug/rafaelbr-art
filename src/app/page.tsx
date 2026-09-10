import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Packages } from "@/components/Packages";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <Header />
      <Hero />
      <Portfolio />
      <HowItWorks />
      <Packages />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
