# Solint — Site institucional

Site institucional da Solint em **Next.js 15 (App Router)**, **TypeScript** e **Tailwind CSS v4**.

## Requisitos

- Node.js 20+
- npm 10+

## Começando

```bash
npm install
npm run dev     # http://localhost:3000
```

## Scripts

| Script | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/agentes-ia` | Agentes de IA |
| `/prospect` | Prospect |
| `/solucoes` | Desenvolvimento de softwares |

As quatro páginas são prerenderizadas estaticamente no build.

## Estrutura

```text
src/
├── app/                  # rotas (App Router)
│   ├── (site)/           # route group com header/footer compartilhados
│   ├── layout.tsx        # fontes, metadata, viewport
│   └── globals.css       # tokens de design, keyframes, base
├── components/
│   ├── ui/               # primitivos (Button, Card, Pill, Reveal…)
│   ├── layout/           # SiteHeader, SiteFooter, Section, PageGlow, HeroMesh
│   ├── sections/         # seções compostas, por página
│   └── features/         # componentes de negócio (carrossel, fluxos, hubs)
├── config/               # site, navegação e conteúdo tipado das páginas
├── hooks/                # comportamento reutilizável
├── lib/                  # utilitários puros
└── types/                # contratos compartilhados
```

## Onde editar o conteúdo

Todo o texto das páginas vive em `src/config/content/`, tipado pelos contratos de `src/types/`. Alterar textos, etapas, serviços ou projetos não exige tocar em nenhum componente.

Dados de contato, nome e metadados ficam em `src/config/site.ts`; os links de navegação em `src/config/navigation.ts`.

## Design system

Os tokens (cores, fontes, curvas de easing, animações) são declarados em `src/app/globals.css`, no bloco `@theme`, e consumidos como utilitários Tailwind (`bg-ink`, `text-muted`, `border-accent/16`, `animate-drift`). Detalhes da paleta e dos padrões por página estão em [CLAUDE.md](./CLAUDE.md).

## Acessibilidade e movimento

- `prefers-reduced-motion` desliga animações e transições globalmente; os hooks que animam via JS também verificam a preferência antes de iniciar.
- Elementos puramente decorativos (malhas, partículas, diagramas ilustrativos) são `aria-hidden`.
- O H1 com efeito de digitação é renderizado completo no servidor — permanece legível sem JavaScript.

## Legado

Os arquivos exportados do Claude Design (`.dc.html`, `support.js`, assets originais) estão em `legacy/`, mantidos apenas como referência visual. Não participam do build.
