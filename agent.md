# AGENT.md — Guia do Claude para Projetos de Frontend

> Este arquivo define as **regras e convenções** que o Claude (e qualquer agente de IA) deve seguir ao gerar, revisar ou refatorar código nos projetos da equipe. Estagiários: leiam antes de pedir qualquer geração de código. Agentes: estas instruções têm prioridade sobre defaults genéricos.

---

## 1. Stack obrigatória

| Camada | Tecnologia | Observação |
|---|---|---|
| Framework | **Next.js 16 (App Router)** | Versão estável mais recente (16.2.x). Server Components por padrão; `"use client"` só quando necessário |
| Linguagem | **TypeScript** (`strict: true`) | Nada de `any` sem justificativa em comentário |
| Estilização | **Tailwind CSS** + `clsx` / `tailwind-merge` | Sem CSS-in-JS; sem arquivos `.css` soltos exceto `globals.css`. Use `clsx`/`cn()` para classes condicionais |
| Gerenciador | `pnpm` (preferido) ou `npm` | Manter um único lockfile por projeto |
| Lint/Format | **ESLint** (`eslint-config-next`) + Prettier | No Next 16 o `next lint` foi descontinuado — rode `eslint` diretamente. Use `pnpm next upgrade` para subir de versão |

**Regra de ouro:** componentes são Server Components até prova em contrário. Use `"use client"` apenas quando houver estado, efeitos, ou APIs de browser.

---

## 2. Arquitetura — divisão por seção (feature/section-based)

Não organizamos por *tipo* de arquivo (uma pasta gigante de `components`, outra de `hooks`). Organizamos por **seção/feature**, mantendo tudo que pertence a uma área do produto junto.

```
src/
├── app/                          # Rotas (App Router) — apenas roteamento e composição
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (institucional)/          # Route group: layout comum p/ páginas legais
│   │   ├── layout.tsx
│   │   ├── sobre-nos/page.tsx
│   │   ├── politica-de-privacidade/page.tsx
│   │   ├── politica-de-cookies/page.tsx
│   │   ├── termos-de-uso/page.tsx
│   │   └── termos-de-servico/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── sections/                     # ← O CORAÇÃO DA ARQUITETURA
│   ├── home/
│   │   ├── components/           # Componentes usados só nesta seção
│   │   ├── hooks/
│   │   ├── lib/                  # Lógica/helpers da seção
│   │   ├── types.ts
│   │   └── index.ts              # Ponto de entrada público da seção
│   ├── about/
│   ├── auth/
│   └── ...
│
├── shared/                       # Reutilizável entre seções
│   ├── ui/                       # Botões, inputs, cards (design system)
│   ├── hooks/
│   ├── lib/                      # utils, fetchers, formatadores
│   ├── config/                   # constantes do site, navegação, metadados base
│   └── seo/                      # helpers de SEO e schema (ver seção 5)
│
└── styles/
    └── globals.css
```

**Princípios:**
1. Uma seção **não importa** componentes internos de outra seção. Se precisa compartilhar, promova para `shared/`.
2. Cada seção expõe sua API pública via `index.ts` (barrel). Imports externos passam por ele.
3. `app/` é "burro": só importa de `sections/` e compõe a página. Sem lógica de negócio em `page.tsx`.
4. Nada de imports relativos profundos (`../../../`). Configure path alias `@/` no `tsconfig.json`.
5. Use **route groups** `(nome)` para compartilhar layout entre rotas relacionadas sem afetar a URL — ex.: `(institucional)` dá um layout comum às páginas legais. Os parênteses não aparecem na URL.

---

## 3. Páginas obrigatórias em TODO projeto

Todo projeto **deve** conter, no mínimo, estas rotas — sem exceção:

| Rota | Arquivo | Conteúdo |
|---|---|---|
| Sobre Nós | `app/sobre-nos/page.tsx` | Missão, equipe, história, contato |
| Política de Privacidade | `app/politica-de-privacidade/page.tsx` | LGPD: quais dados, finalidade, direitos do titular |
| Política de Cookies | `app/politica-de-cookies/page.tsx` | Tipos de cookies, consentimento, opt-out |
| Termos de Uso | `app/termos-de-uso/page.tsx` | Regras de uso da plataforma |
| Termos de Serviço | `app/termos-de-servico/page.tsx` | Contrato de prestação, responsabilidades |

Todas devem:
- Estar linkadas no rodapé (`<footer>`).
- Ter `metadata` própria (título + descrição).
- Conter data de "última atualização" visível.
- Seguir a LGPD (Lei 13.709/2018) nos textos legais. **Aviso:** os textos gerados são modelos-base; um responsável legal deve revisá-los antes de produção.

---

## 4. SEO — obrigatório em todas as páginas

Toda página exporta `metadata` (ou `generateMetadata` para conteúdo dinâmico).

### 4.1 Metadados base (`shared/config/site.ts`)

```typescript
export const siteConfig = {
  name: "Nome do Projeto",
  url: "https://www.exemplo.com.br",
  description: "Descrição clara e única em até 155 caracteres.",
  locale: "pt-BR",
  twitter: "@handle",
} as const;
```

### 4.2 Metadata da página (App Router)

```typescript
import type { Metadata } from "next";
import { siteConfig } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça nossa missão, equipe e história.",
  alternates: { canonical: `${siteConfig.url}/sobre-nos` },
  openGraph: {
    title: "Sobre Nós | " + siteConfig.name,
    description: "Conheça nossa missão, equipe e história.",
    url: `${siteConfig.url}/sobre-nos`,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: `${siteConfig.url}/og/sobre-nos.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nós | " + siteConfig.name,
    description: "Conheça nossa missão, equipe e história.",
    images: [`${siteConfig.url}/og/sobre-nos.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};
```

### 4.3 Checklist de SEO por página
- [ ] `title` único (≤ 60 caracteres) e `description` (≤ 155 caracteres)
- [ ] `canonical` definido
- [ ] Open Graph + Twitter Card
- [ ] **Um único** `<h1>` por página, hierarquia de headings correta
- [ ] `alt` descritivo em todas as imagens; uso de `next/image`
- [ ] Dados estruturados JSON-LD (seção 5)
- [ ] Texto em linguagem natural, semântico e amplamente indexável (seção 6)
- [ ] Incluída no `sitemap.ts`

---

## 5. Dados estruturados (Schema.org / JSON-LD)

Use **JSON-LD** (recomendado pelo Google) injetado via `<script type="application/ld+json">`. Centralize os geradores em `shared/seo/schema.ts`.

### 5.1 Componente reutilizável de JSON-LD

```tsx
// shared/seo/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify previne injeção; o conteúdo é controlado por nós
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

### 5.2 Exemplo: Organization (use no layout raiz)

```typescript
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nome da Empresa",
  url: "https://www.exemplo.com.br",
  logo: "https://www.exemplo.com.br/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/exemplo",
    "https://www.instagram.com/exemplo",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contato@exemplo.com.br",
    availableLanguage: ["Portuguese"],
  },
};
```

### 5.3 Exemplo: WebSite com SearchAction (sitelinks searchbox)

```typescript
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nome do Site",
  url: "https://www.exemplo.com.br",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.exemplo.com.br/busca?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
```

### 5.4 Exemplo: BreadcrumbList

```typescript
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.exemplo.com.br" },
    { "@type": "ListItem", position: 2, name: "Sobre Nós", item: "https://www.exemplo.com.br/sobre-nos" },
  ],
};
```

### 5.5 Exemplo: FAQPage (ótimo para rich results)

```typescript
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona o serviço?",
      acceptedAnswer: { "@type": "Answer", text: "Resposta clara e completa em texto puro." },
    },
  ],
};
```

### 5.6 Como usar numa página

```tsx
import { JsonLd } from "@/shared/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/shared/seo/schema";

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <main>{/* conteúdo */}</main>
    </>
  );
}
```

**Outros tipos úteis conforme o projeto:** `Article`, `Product`, `LocalBusiness`, `Person`, `Service`, `Event`.

### 5.7 Documentação de referência
- Schema.org — vocabulário completo: https://schema.org/docs/full.html
- Google Search Central — dados estruturados: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Teste de Rich Results do Google: https://search.google.com/test/rich-results
- Validador Schema.org: https://validator.schema.org/
- Metadata API do Next.js: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

---

## 6. Indexabilidade por IA e mecanismos de busca

O conteúdo deve ser **amplamente indexável** por buscadores e por sistemas de IA (LLMs, crawlers de IA). Para isso:

1. **Texto em HTML semântico real**, renderizado no servidor (SSR/SSG) — não escondido atrás de JS client-side.
2. Use tags semânticas: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`, `<main>`, `<aside>`.
3. Escreva em **linguagem natural e completa** — parágrafos autoexplicativos, sem depender de imagens para transmitir informação essencial.
4. Inclua um resumo/contexto no topo das páginas de conteúdo (bom para humanos e para extração por IA).
5. Considere disponibilizar um arquivo `llms.txt` na raiz (padrão emergente que descreve o site para LLMs): https://llmstxt.org/
6. Forneça texto alternativo rico e transcrições quando houver mídia.

---

## 7. robots.txt — máxima permissividade (incentivando IA)

Gere o `robots.txt` via `app/robots.ts`, **permitindo tudo**, incluindo crawlers de IA explicitamente. (Lembre que `robots.txt` é uma diretriz respeitada por crawlers de boa-fé, não um mecanismo de segurança.)

```typescript
// app/robots.ts
import type { MetadataRoute } from "next";
import { siteConfig } from "@/shared/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Regra geral: tudo liberado
      { userAgent: "*", allow: "/" },
      // Crawlers de IA — explicitamente bem-vindos
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Amazonbot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
```

E o sitemap correspondente:

```typescript
// app/sitemap.ts
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
  return rotas.map((rota) => ({
    url: `${siteConfig.url}${rota}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: rota === "" ? 1 : 0.7,
  }));
}
```

Documentação: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

---

## 8. Acessibilidade (a11y)

- Contraste mínimo WCAG AA; navegação 100% por teclado.
- `aria-label` em controles sem texto visível; `<label>` associado a inputs.
- Foco visível (não remover `outline` sem substituto).
- Imagens decorativas com `alt=""`; informativas com `alt` descritivo.

## 9. Testes e CI/CD

**Testes**
- **Unit/componentes:** Vitest + React Testing Library. Cada componente em `shared/ui` e lógica em `lib/` deve ter teste.
- **E2E:** Playwright. No mínimo, um teste que garanta que as páginas obrigatórias (seção 3) retornam **200** e têm `<h1>` único.
- Colocar testes ao lado do código na própria seção: `sections/home/components/Hero.test.tsx`.
- Nomeie testes de forma descritiva (`deve renderizar o título`), sem testar detalhes de implementação.

```typescript
// Exemplo Playwright — páginas obrigatórias
import { test, expect } from "@playwright/test";

const rotasObrigatorias = [
  "/sobre-nos",
  "/politica-de-privacidade",
  "/politica-de-cookies",
  "/termos-de-uso",
  "/termos-de-servico",
];

for (const rota of rotasObrigatorias) {
  test(`${rota} carrega e tem H1 único`, async ({ page }) => {
    const res = await page.goto(rota);
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
  });
}
```

**CI/CD (GitHub Actions)**
- Pipeline em todo PR: `install → lint → typecheck → test → build`. Nenhum PR é mergeado com pipeline vermelho.
- Deploy automático na Vercel a partir da branch principal; preview deploy em cada PR.

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm exec eslint .
      - run: pnpm exec tsc --noEmit
      - run: pnpm test
      - run: pnpm build
```

## 10. Convenções de código e commits

- **Componentes:** `PascalCase.tsx`. **Hooks:** `useAlgo.ts`. **Utils:** `camelCase.ts`.
- **Commits:** Conventional Commits — `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`.
- Sem `console.log` em código entregue. Sem segredos/API keys no repositório (use `.env.local`).
- Antes de abrir PR: `pnpm exec eslint . && pnpm exec tsc --noEmit && pnpm test && pnpm build` devem passar.

---

## 11. Checklist ao criar uma nova página ou feature

Sempre que criar uma rota nova, percorra esta lista:
1. [ ] Definir em qual seção (`sections/`) a lógica/componentes vivem; criar a rota em `app/` (dentro do route group correto, se aplicável).
2. [ ] Adicionar `metadata` (ou `generateMetadata`) com title, description, canonical, Open Graph e Twitter Card.
3. [ ] Incluir o JSON-LD apropriado ao tipo de página (`WebPage`, `AboutPage`, `FAQPage`, `BreadcrumbList`, etc.).
4. [ ] Conteúdo semântico, com hierarquia de headings e um único `<h1>`.
5. [ ] Imagens via `next/image`; fontes via `next/font`.
6. [ ] Garantir link no `<footer>` quando for página institucional.
7. [ ] Incluir a rota no `sitemap.ts`.
8. [ ] Validar com **Lighthouse** (mira: Performance, SEO e Accessibility ≥ 90) e checar os dados estruturados no Rich Results Test.
9. [ ] Pipeline verde (lint, typecheck, testes, build).

---

## 12. Como pedir código ao Claude (para estagiários)

Ao solicitar geração de código, seja específico:
- Diga **em qual seção** o componente entra (`sections/home`, `shared/ui`, etc.).
- Diga se é **Server** ou **Client** Component.
- Peça a `metadata` e o JSON-LD junto quando for uma página.

**Bom exemplo de prompt:**
> "Crie a página `app/sobre-nos/page.tsx` como Server Component, com metadata completa, JSON-LD de Organization + BreadcrumbList, conteúdo semântico sobre missão/equipe, e link no footer. Siga o AGENT.md."
