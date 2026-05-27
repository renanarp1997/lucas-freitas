import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/shared/config/site";
import { JsonLd } from "@/shared/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/shared/seo/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} — Estrategista Institucional`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Lucas Freitas" }],
  keywords: [
    "Lucas Freitas",
    "estrategista político",
    "campanhas eleitorais",
    "reputação pública",
    "influência institucional",
    "Brasil",
    "Portugal",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: `${siteConfig.shortName} — Estrategista Institucional`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} — Estrategista Institucional`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/luc.png" },
};

export const viewport: Viewport = {
  themeColor: "#07060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} ${pinyon.variable}`}
    >
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        {children}
      </body>
    </html>
  );
}
