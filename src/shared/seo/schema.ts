import { siteConfig } from "@/shared/config/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/luc.png`,
  description: siteConfig.description,
  founder: {
    "@type": "Person",
    name: "Lucas Freitas",
    jobTitle: "Estrategista",
  },
  areaServed: ["Brasil", "Portugal"],
  sameAs: [
    "https://www.instagram.com/lucasfreitas.ag",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: siteConfig.email,
    availableLanguage: ["Portuguese"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "pt-BR",
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucas Freitas",
  jobTitle: "Estrategista institucional",
  worksFor: { "@type": "Organization", name: siteConfig.name },
  knowsAbout: [
    "Estratégia política",
    "Campanhas eleitorais",
    "Reputação pública",
    "Posicionamento institucional",
    "Influência",
  ],
  url: siteConfig.url,
};

export function breadcrumb(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteConfig.url}${it.href}`,
    })),
  };
}
