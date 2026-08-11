import type { Metadata } from "next";
import { PageGlow } from "@/components/layout";
import {
  AgentesHero,
  ApplicationsSection,
  ClosingCta,
  ProjectsSection,
  TechnologiesSection,
} from "@/components/sections";
import { agentesCta } from "@/config/content/agentes";

export const metadata: Metadata = {
  title: "Agentes de IA e automação",
  description:
    "Automações e agentes de inteligência artificial que conectam ferramentas, interpretam informações e executam tarefas para times comerciais e operacionais.",
};

/** Malha de pontos que reaparece atrás do fechamento da página. */
function DottedBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 [mask-image:radial-gradient(60%_70%_at_50%_45%,#000_0%,rgb(0_0_0/0)_82%)]"
    >
      <div className="absolute -inset-[10%] bg-[radial-gradient(circle_at_center,rgb(53_217_255/0.13)_1.1px,rgb(0_0_0/0)_1.7px)] bg-[length:34px_34px] opacity-90" />
    </div>
  );
}

export default function AgentesIaPage() {
  return (
    <>
      <PageGlow preset="agentes" />
      <AgentesHero />
      <ApplicationsSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ClosingCta
        title={agentesCta.title}
        description={agentesCta.description}
        ctaLabel={agentesCta.ctaLabel}
        ctaHref={agentesCta.ctaHref}
        extraBackdrop={<DottedBackdrop />}
      />
    </>
  );
}
