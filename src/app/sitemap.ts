import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    "",
    "/sobre-nos",
    "/politica-de-privacidade",
    "/politica-de-cookies",
    "/termos-de-uso",
    "/termos-de-servico",
  ];
  const now = new Date();
  return rotas.map((rota) => ({
    url: `${siteConfig.url}${rota}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: rota === "" ? 1 : 0.7,
  }));
}
