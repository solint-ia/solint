import {
  Activity,
  Clock,
  Database,
  Headset,
  Link2,
  Megaphone,
  Target,
  Users,
} from "lucide-react";
import { CONTACT_ANCHOR } from "@/config/navigation";
import type { AgentApplication, ProjectCard, TechnologyGroup } from "@/types";

export const agentesHero = {
  eyebrow: "/01 — agentes de ia",
  titleLead: "Agentes que trabalham enquanto sua equipe pensa ",
  titleTyped: "no próximo passo",
  titleTail: ".",
  description:
    "Automatize conversas, decisões e tarefas operacionais sem perder contexto, controle ou personalidade.",
  primaryCta: { label: "Explorar aplicações", href: "#ajuda" },
  secondaryCta: { label: "Ver como funciona", href: "#tecnologias" },
} as const;

/** Eventos do feed "ao vivo" do agente, exibido ao lado do H1. */
export const agentFeed = {
  title: "agente-solint",
  statusLabel: "ao vivo",
  metrics: {
    latency: "380ms",
    mode: "100% Autônomo",
    successRate: "99.4%",
  },
  events: [
    {
      title: "Lead identificado",
      quote: '"Preciso de atendimento para minha equipe comercial."',
      tag: "WhatsApp Webhook",
      timestamp: "10:42:01",
      type: "incoming",
    },
    {
      title: "Intenção reconhecida",
      detail: "Classificado como interesse comercial em automação de vendas",
      confidence: "Confiança: 99.4%",
      tag: "Análise Semântica",
      type: "ai",
    },
    {
      title: "Resposta enviada",
      detail: "Abordagem personalizada contextualizando o perfil da empresa",
      speed: "Disparado em 1.8s",
      tag: "Ação Autônoma",
      type: "action",
    },
  ],
  handoff: {
    title: "Equipe comercial acionada",
    detail: "Lead qualificado encaminhado ao vendedor responsável",
    status: "Lead Pronto p/ Fechar",
    tag: "Handoff CRM",
    destination: "CRM · Notificação Slack/WhatsApp",
  },
} as const;

export const applicationsSection = {
  eyebrow: "Como podemos ajudar",
  title: "Onde a automação entra na sua operação.",
  description: "Escolha uma aplicação para ver como ela funciona na prática.",
} as const;

export const agentApplications: readonly AgentApplication[] = [
  {
    icon: Headset,
    title: "Atendimento automatizado",
    description: "Primeiro contato imediato com inteligência contextual e encaminhamento correto.",
    flow: ["Mensagem recebida 💬", "Intenção identificada 🧠", "Resposta personalizada ⚡"],
    impact: "Resposta instantânea em segundos, 24 horas por dia, 365 dias ao ano.",
    badge: "✦ 24/7 Ativo",
    speed: "2.1s de resposta",
  },
  {
    icon: Target,
    title: "Qualificação de leads",
    description: "Perguntas estratégicas na hora certa para seu time focar só em quem tem real intenção de compra.",
    flow: ["Lead capturado", "Perfil avaliado", "Score calculado"],
    impact: "Seu time comercial falando apenas com oportunidades prontas para fechar.",
    badge: "🎯 Filtro de Fit",
    speed: "Score em tempo real",
  },
  {
    icon: Clock,
    title: "Follow-up automático",
    description: "Retomadas inteligentes e programadas, sem depender da memória ou agenda de ninguém.",
    flow: ["Sem resposta em 24h", "Lembrete contextual", "Conversa reativada"],
    impact: "Zero oportunidades esquecidas no funil comercial.",
    badge: "⚡ Cadência Ágil",
    speed: "Cadência 100% pontual",
  },
  {
    icon: Link2,
    title: "Integração entre sistemas",
    description: "CRM, ERPs, planilhas e plataformas falando a mesma língua em tempo real.",
    flow: ["Evento disparado", "Sistema identificado", "Registro sincronizado"],
    impact: "Dados unificados e sincronizados sem retrabalho manual.",
    badge: "🔗 Integração Contínua",
    speed: "Sincronização < 1s",
  },
  {
    icon: Database,
    title: "Processamento de dados",
    description: "Leitura, estruturação, validação e enriquecimento de bases em alta escala.",
    flow: ["Dado bruto recebido", "Estrutura validada", "Enriquecimento aplicado"],
    impact: "Bases prontas para tomada de decisão imediata.",
    badge: "📊 Alta Escala",
    speed: "+10k registros/min",
  },
  {
    icon: Megaphone,
    title: "Automação comercial",
    description: "Distribuição justa de oportunidades, cadências de abordagem e registro automático no CRM.",
    flow: ["Oportunidade criada", "SDR atribuído", "Cadência iniciada"],
    impact: "Velocidade máxima no primeiro contato com o prospect.",
    badge: "🚀 Handoff Instantâneo",
    speed: "Atribuição em 3s",
  },
  {
    icon: Users,
    title: "Agentes internos",
    description: "Assistentes para consulta de procedimentos, bases de conhecimento e histórico da empresa.",
    flow: ["Pergunta interna", "Base de dados consultada", "Resposta precisa"],
    impact: "Menos tempo procurando informações, mais tempo executando.",
    badge: "👥 Base Interna",
    speed: "Acesso imediato",
  },
  {
    icon: Activity,
    title: "Monitoramento de operações",
    description: "Auditoria contínua e alertas imediatos quando qualquer métrica ou fila sai do padrão.",
    flow: ["Métrica observada", "Desvio detectado", "Alerta disparado"],
    impact: "Problemas identificados e corrigidos antes de virarem crise.",
    badge: "🚨 Alertas 24/7",
    speed: "Detecção instantânea",
  },
] as const;

export const technologiesSection = {
  eyebrow: "Ecossistema de Integrações",
  title: "Uma estrutura conectada e orquestrada pela Solint.",
  hubLabel: "Orquestração central de IA, automações e integrações",
} as const;

export const technologyGroups: readonly TechnologyGroup[] = [
  {
    label: "Automação Operacional",
    category: "automation",
    items: ["Fluxos Inteligentes", "Regras de Negócio", "Disparos Automáticos", "Auditoria de Processos"],
  },
  {
    label: "Atendimento & Vendas",
    category: "conversations",
    items: ["WhatsApp Oficial", "Qualificação de Leads", "Suporte 24/7", "Agendamento Automático"],
  },
  {
    label: "Dados & Inteligência",
    category: "data",
    items: ["Painéis Executivos", "Métricas em Tempo Real", "Histórico Unificado", "Alertas Estratégicos"],
  },
  {
    label: "Conectividade Total",
    category: "connectivity",
    items: ["Integração de CRMs", "Conexão com ERPs", "Portais & Sistemas Legados", "Sincronização Segura"],
  },
] as const;

export const projectsSection = {
  eyebrow: "Projetos em Produção",
  title: "Automação e IA aplicada a resultados reais.",
  note: "Cases de agentes autônomos gerando impacto mensurável em vendas, atendimento e operações.",
  imageLabel: "imagem do projeto",
} as const;

/** Cases reais de agentes de IA desenvolvidos pela Solint. */
export const agentProjects: readonly ProjectCard[] = [
  {
    title: "Agente SDR & Qualificação Omnichannel",
    category: "Vendas B2B · IA Conversacional",
    description: "Agente inteligente integrado ao WhatsApp e CRM que qualifica leads inbound em menos de 15 segundos e agenda reuniões diretamente na agenda comercial.",
    tags: ["WhatsApp Oficial", "Qualificação 24/7", "Agendamento Automático", "Integração CRM"],
    metric: "⚡ 3.4x mais reuniões agendadas",
    badge: "Agente Comercial",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer agente",
  },
  {
    title: "Agente de Suporte & Resolução N1",
    category: "Atendimento 24/7 · Helpdesk",
    description: "Triagem, consulta a bases de conhecimento internas e resolução de chamados técnicos sem intervenção humana, com handoff suave para especialistas.",
    tags: ["Base de Conhecimento", "Atendimento Omnichannel", "Triagem Inteligente", "Resolução Autônoma"],
    metric: "🔥 78% resolução no 1º contato",
    badge: "Agente de Suporte",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer agente",
  },
  {
    title: "Agente de Conciliação & Auditoria Fiscal",
    category: "Operações · Finanças & Backoffice",
    description: "Processamento de notas fiscais, cruzamento de comprovantes bancários e disparo de alertas preventivos de inadimplência para o time financeiro.",
    tags: ["Auditoria Fiscal", "Leitura de Comprovantes", "Prevenção de Inadimplência", "Conexão ERP"],
    metric: "⚡ -92% tempo de conciliação",
    badge: "Agente de Backoffice",
    href: CONTACT_ANCHOR,
    ctaLabel: "Conhecer agente",
  },
] as const;

export const agentesCta = {
  title: "Qual processo você repetiria menos amanhã?",
  description:
    "Conte como funciona hoje. A gente mapeia o fluxo e mostra onde a automação compensa.",
  ctaLabel: "Falar com a Solint",
  ctaHref: CONTACT_ANCHOR,
} as const;
