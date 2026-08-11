import { CONTACT_ANCHOR } from "@/config/navigation";
import type { ProcessStep, StatusPill } from "@/types";

export const prospectHero = {
  eyebrow: "/01 — prospect",
  titleLead: "Transforme prospecção em ",
  titleTyped: "oportunidades reais",
  titleTail: ".",
  description:
    "Encontre as empresas certas, automatize seus contatos e deixe a inteligência artificial preparar seus leads para o momento da venda.",
  primaryCta: { label: "Começar agora", href: CONTACT_ANCHOR },
  secondaryCta: { label: "Ver como funciona", href: "#como-funciona" },
} as const;

/** Diagrama vertical do hero: pipeline vivo de dados e inteligência artificial. */
export const heroPipeline = {
  header: {
    badge: "Pipeline Ativo",
    status: "Operação Contínua",
  },
  nodes: [
    {
      title: "Pesquisa de empresas",
      description: "Varredura automática por critérios B2B",
      tags: ["CNAE: Tecnologia", "UF: SP · RJ · PR"],
      metric: "+4.280 empresas",
      type: "search",
    },
    {
      title: "Lista de leads qualificados",
      description: "Extração e enriquecimento de decisores",
      tags: ["Sócios & C-Level", "WhatsApp & E-mail"],
      metric: "Contatos verificados",
      type: "leads",
    },
  ],
  highlight: {
    title: "IA qualifica e encaminha",
    description: "Abordagem contextual e análise de fit em tempo real",
    badge: "✦ Motor de IA Ativo",
    score: "Score 98% · Alta Intenção",
    sampleInteraction: "Interesse confirmado após 3 perguntas",
  },
  destination: {
    title: "Time comercial acionado",
    description: "Oportunidade entregue ao SDR no CRM",
    status: "Lead Quente Pronto",
    speed: "Handoff em 3s",
  },
} as const;

export const flowSection = {
  eyebrow: "Como Funciona",
  title: "Um fluxo completo e automatizado para transformar sua prospecção",
} as const;

/** As 6 etapas do fluxo em S. A etapa 5 concentra o destaque com as perguntas da IA. */
export const prospectSteps: readonly ProcessStep[] = [
  {
    title: "Cria uma pesquisa",
    description:
      "Seleciona CNAEs, estados e capital social para encontrar empresas específicas.",
  },
  {
    title: "Extrai os leads",
    description: "Cria uma lista automática com os sócios das empresas encontradas.",
  },
  {
    title: "Exporta para o CRM",
    description: "Leva esses contatos dos sócios diretamente para o CRM completo.",
  },
  {
    title: "Cria campanhas",
    description: "Define campanhas de envio de mensagens com data e horário programados.",
  },
  {
    title: "IA faz a pré-qualificação",
    description:
      "Inteligência artificial faz o primeiro contato e qualifica os leads automaticamente.",
  },
  {
    title: "IA transfere para seu time",
    description:
      "Leads qualificados são automaticamente encaminhados para sua equipe de vendas.",
  },
] as const;

/** Índice (base 0) da etapa destacada do fluxo. */
export const HIGHLIGHTED_STEP_INDEX = 4;

/** Perguntas que a IA usa na pré-qualificação (etapa 5). */
export const qualificationQuestions: readonly string[] = [
  "Qual seu interesse?",
  "Quando pretende comprar?",
  "Qual seu orçamento?",
  "Você é o decisor?",
  "Tem interesse real?",
  "Prazo de decisão?",
] as const;

export const destinationPanel = {
  eyebrow: "Destino do fluxo",
  title: "O lead chega pronto. Hora de vender.",
} as const;

export const leadStatuses: readonly StatusPill[] = [
  { label: "Identificado", accent: "cyan" },
  { label: "Qualificado", accent: "cyan" },
  { label: "Interesse confirmado", accent: "cyan" },
  { label: "Pronto para fechar", accent: "amber" },
] as const;

export const platformSection = {
  eyebrow: "Plataforma",
  title: "Automatize todo esse processo em uma única plataforma",
  description:
    "Do primeiro filtro de busca até a passagem do lead para o vendedor, tudo acontece em um só lugar, com histórico e controle.",
  ctaLabel: "Começar agora",
  ctaHref: CONTACT_ANCHOR,
  highlights: [
    "Redução de até 80% do trabalho operacional",
    "Sincronização instantânea com seu CRM",
  ],
  capabilities: [
    {
      title: "Pesquisa de empresas",
      description: "Filtros inteligentes por CNAE, UF, porte e capital social em segundos.",
      badge: "Base Atualizada",
      iconKey: "search",
    },
    {
      title: "Extração de contatos",
      description: "Identificação direta de sócios, diretores e telefones/e-mails corporativos.",
      badge: "Contatos Válidos",
      iconKey: "database",
    },
    {
      title: "Organização de leads",
      description: "Estruturação automática em listas e pipelines prontos para abordagem.",
      badge: "Kanban & Listas",
      iconKey: "users",
    },
    {
      title: "Campanhas de mensagens",
      description: "Disparos multicanais personalizados com cadência e horários otimizados.",
      badge: "Multicanal",
      iconKey: "send",
    },
    {
      title: "Pré-qualificação com IA",
      description: "Agente inteligente que faz o primeiro contato e filtra o interesse real.",
      badge: "✦ IA Nativa",
      iconKey: "bot",
      isHighlight: true,
    },
    {
      title: "Encaminhamento ao time",
      description: "Passagem de bastão instantânea para o vendedor quando o lead está pronto.",
      badge: "Handoff Ágil",
      iconKey: "userCheck",
    },
  ],
} as const;

export const prospectCta = {
  title: "Seu time falando só com quem está pronto para comprar.",
  description: "Mostramos o Prospect rodando com o seu perfil de cliente ideal.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
