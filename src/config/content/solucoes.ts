import { CONTACT_ANCHOR } from "@/config/navigation";
import type {
  ClosingStep,
  DevelopmentServiceGroup,
  ProcessStep,
  ProjectCard,
} from "@/types";

export const solucoesHero = {
  eyebrow: "/01 — soluções",
  titleLead: "Produtos digitais feitos para ",
  titleTyped: "rodar e crescer",
  titleTail: ".",
  paragraphs: [
    "A Solint desenvolve experiências digitais modernas, rápidas, responsivas e alinhadas aos objetivos do negócio.",
    "Da landing page que precisa converter ao sistema que sustenta a operação inteira.",
  ],
  primaryCta: { label: "Falar sobre meu projeto", href: CONTACT_ANCHOR },
  secondaryCta: { label: "Ver portfólio", href: "#portfolio" },
  mockup: {
    url: "app.solint.com/analytics",
    status: "Produção Ativa",
    kpis: [
      { label: "Usuários Ativos", value: "+14.2k", change: "+28%" },
      { label: "Taxa Conversão", value: "4.85%", change: "+1.2%" },
      { label: "Latência Média", value: "38ms", change: "Otimizado" },
    ],
    activities: [
      { name: "Sincronização ERP", tag: "Automação", status: "Concluído", time: "Há 2s" },
      { name: "Pipeline CI/CD", tag: "Deploy", status: "Sucesso", time: "Há 1m" },
      { name: "Agente de IA", tag: "Qualificação", status: "Ativo", time: "Agora" },
    ],
    badges: {
      top: { title: "Arquitetura Escalável", tag: "✦ Alta Performance" },
      bottom: { title: "Alta Escala Cloud", tag: "⚡ 99.9% Uptime" },
    },
  },
} as const;

export const servicesSection = {
  eyebrow: "Serviços",
  title: "O que a Solint desenvolve.",
  description:
    "Do site institucional ao produto digital completo, com integrações e evolução contínua.",
} as const;

export const serviceGroups: readonly DevelopmentServiceGroup[] = [
  {
    label: "Experiências digitais",
    hint: "presença e conversão",
    services: [
      {
        title: "Landing pages",
        description: "Páginas de alta conversão, rápidas e focadas em uma única ação.",
        detail: "Ex.: campanha de lançamento com formulário integrado ao CRM.",
        tags: ["Alta Velocidade", "Design Exclusivo", "Métricas de Conversão"],
        span: 5,
      },
      {
        title: "Sites institucionais",
        description: "Presença digital consistente com a identidade da marca.",
        detail: "Ex.: site com blog, páginas por serviço e área de vagas.",
        tags: ["Design Exclusivo", "SEO Avançado", "Painel de Conteúdo"],
        span: 4,
      },
      {
        title: "E-commerces",
        description: "Lojas com catálogo, pagamento e integração com a operação.",
        detail: "Ex.: loja com estoque sincronizado ao ERP.",
        tags: ["Checkout Seguro", "Gateways", "Sincronia ERP"],
        span: 3,
      },
    ],
  },
  {
    label: "Sistemas e produtos",
    hint: "operação e escala",
    highlight: {
      title: "Produtos personalizados",
      description:
        "Soluções desenhadas para um processo que só existe na sua empresa, do modelo de dados à interface de uso diário.",
      examples: [
        "Ex.: gestão de contratos com aprovação em etapas",
        "Ex.: operação logística com rastreio interno",
        "Ex.: portal de parceiros com regras de comissão",
      ],
      tags: ["Escopo sob medida", "Integrado à operação", "Evolução contínua", "Alta Disponibilidade"],
    },
    services: [
      {
        title: "Sistemas web",
        description: "Aplicações sob medida para processos que planilha não resolve.",
        detail: "Ex.: controle de ordens de serviço com histórico e permissões.",
        tags: ["Multi-permissão", "Histórico Auditável", "Workflows"],
        span: 6,
      },
      {
        title: "Plataformas SaaS",
        description: "Produtos multiusuário com planos, permissões e escala.",
        detail: "Ex.: assinatura recorrente com painel por cliente.",
        tags: ["Gestão de Clientes", "Cobrança Recorrente", "Segurança Total"],
        span: 3,
      },
      {
        title: "Portais administrativos",
        description: "Back-offices para gestão de dados, times e permissões.",
        detail: "Ex.: painel interno com auditoria de alterações.",
        tags: ["Controle de Acesso", "Exportação", "Filtros"],
        span: 3,
      },
    ],
  },
  {
    label: "Dados e operação",
    hint: "decisão e validação",
    services: [
      {
        title: "Integrações com APIs",
        description: "Conexão com CRMs, ERPs, gateways e serviços externos.",
        detail: "Ex.: sincronização de pedidos entre loja e ERP.",
        tags: ["Conexão Segura", "Sincronização em Tempo Real", "Alta Confiabilidade"],
        span: 5,
      },
      {
        title: "Dashboards",
        description: "Indicadores em tempo real, prontos para decisão.",
        detail: "Ex.: painel de vendas por região atualizado a cada minuto.",
        tags: ["Tempo Real", "Painéis Executivos", "Dados Unificados"],
        span: 4,
      },
      {
        title: "MVPs",
        description: "Primeira versão enxuta para validar a ideia com usuários reais.",
        detail: "Ex.: piloto em 6 semanas com 50 usuários.",
        tags: ["Ciclos Curtos", "Validação Rápida", "Feedback Loop"],
        span: 3,
      },
    ],
  },
] as const;

export const developmentSection = {
  eyebrow: "Como a Solint desenvolve",
  title: "Do problema ao produto no ar, em etapas claras.",
} as const;

/** Etapas 01–05 da espiral vertical. A 06 é o painel de encerramento. */
export const developmentSteps: readonly ProcessStep[] = [
  {
    title: "Descoberta e estratégia",
    description: "Mapeamento profundo do objetivo do produto, público-alvo e critérios de sucesso mensuráveis.",
    tags: ["Mapeamento de KPIs", "Matriz de Escopo", "Entrevistas de Usuário"],
    badge: "Etapa 01",
  },
  {
    title: "Arquitetura da solução",
    description: "Estruturação técnica de dados, infraestrutura em nuvem, segurança e APIs necessárias.",
    tags: ["Modelagem de Dados", "Infraestrutura Cloud", "Segurança & Governança"],
    badge: "Etapa 02",
  },
  {
    title: "UX/UI e prototipação",
    description: "Design system completo e protótipos de alta fidelidade validados antes de escrever código.",
    tags: ["Design System Exclusivo", "Protótipo Navegável", "Testes de Usabilidade"],
    badge: "Etapa 03",
  },
  {
    title: "Desenvolvimento ágil",
    description: "Ciclos curtos de entrega com código limpo, arquitetura modular e acompanhamento contínuo.",
    tags: ["Sprints Semanais", "Entrega Contínua", "Código Limpo & Testável"],
    badge: "Etapa 04",
  },
  {
    title: "Testes e otimização",
    description: "Auditoria rigorosa de desempenho, segurança, acessibilidade e testes de carga antes de publicar.",
    tags: ["Desempenho Máximo", "Testes de Carga", "Acessibilidade & Segurança"],
    badge: "Etapa 05",
  },
] as const;

export const developmentClosing: ClosingStep = {
  eyebrow: "Etapa 06 · encerramento do fluxo",
  title: "Publicação e evolução contínua",
  description:
    "No ar, monitorado e melhorado com base em uso real. O produto entra em ciclo de melhorias, com telemetria e evolução contínua.",
  indicators: [
    "Produto publicado em produção",
    "Monitoramento ativo 24/7",
    "Melhorias contínuas e sprints",
    "Novas versões sem downtime",
    "Telemetria e dados reais",
  ],
};

/**
 * Recuo lateral (em unidades de passo) de cada etapa da espiral, incluindo o
 * painel de encerramento. Define o zigue-zague: 0 → 1 → 2 → 2 → 1 → 0.
 */
export const spiralOffsets: readonly number[] = [0, 1, 2, 2, 1, 0] as const;

export const portfolioSection = {
  eyebrow: "Portfólio",
  title: "Produtos digitais em produção.",
  note: "Projetos de alta performance construídos para resolver problemas operacionais e comerciais reais.",
  imageLabel: "mockup do projeto",
} as const;

/** Cases e produtos desenvolvidos pela Solint. */
export const portfolioProjects: readonly ProjectCard[] = [
  {
    title: "Nexus Plataforma SaaS",
    category: "SaaS B2B · Finanças",
    description: "Plataforma multi-tenant de cobrança, conciliação e gestão financeira em tempo real para médias e grandes empresas.",
    tags: ["Plataforma SaaS", "Gestão de Assinaturas", "Pagamentos Integrados", "Alta Disponibilidade"],
    metric: "🔥 +180k transações/mês",
    badge: "Plataforma SaaS",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer solução",
  },
  {
    title: "Logix Portal Operacional",
    category: "Logística · Supply Chain",
    description: "Sistema web sob medida para roteirização e rastreio de entregas com notificações automatizadas aos clientes.",
    tags: ["Rastreamento em Tempo Real", "Telemetria de Frotas", "Portal de Clientes", "Automação Logística"],
    metric: "⚡ -45% tempo de despacho",
    badge: "Sistema Web",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer solução",
  },
  {
    title: "Vanguard CRM Inteligente",
    category: "Vendas · IA Nativa",
    description: "CRM integrado com distribuição inteligente de leads e agentes autônomos para qualificação em múltiplos canais.",
    tags: ["CRM Comercial", "Inteligência Artificial", "Pipeline de Vendas", "Gestão de Equipes"],
    metric: "🎯 3.8x mais conversões",
    badge: "IA & CRM",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer solução",
  },
] as const;

export const solucoesCta = {
  title: "Tem um produto para tirar do papel?",
  description:
    "Conte a ideia e o prazo. Devolvemos escopo, arquitetura e caminho de entrega.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
