import type { Metadata } from "next";
import { Header } from "@/shared/ui/Header";
import { Footer } from "@/shared/ui/Footer";
import { JsonLd } from "@/shared/seo/JsonLd";
import { personSchema, breadcrumb } from "@/shared/seo/schema";
import { Hero, Stats, About, Quote, Contato } from "@/sections/home";
import { siteConfig } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "Influência, Estratégia e Resultados",
  description:
    "Operação institucional reservada — Lucas Freitas conduz influência, posicionamento e autoridade para lideranças, campanhas e marcas no Brasil e em Portugal.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.shortName} — Influência, Estratégia e Resultados`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd
        data={breadcrumb([{ name: "Início", href: "/" }])}
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Quote />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
