"use client";

// Client component porque injeta dados que carregam componentes de ícone: eles
// não atravessam a fronteira servidor→cliente, então a injeção acontece aqui.
import { Section } from "@/components/layout";
import { Reveal, SectionHeading, SectionMarker } from "@/components/ui";
import { ProcessTimeline } from "@/components/features";
import { processSection, processSteps } from "@/config/content/home";

/** Seção "Processo": as seis etapas do método, ligadas por uma linha animada. */
export function ProcessSection() {
  return (
    <Section id="processo" backdrop={<SectionMarker label="/04 — processo" />}>
      <SectionHeading
        eyebrow={processSection.eyebrow}
        title={processSection.title}
        className="mb-[clamp(48px,6vw,72px)] max-w-[700px]"
      />
      <Reveal>
        <ProcessTimeline steps={processSteps} />
      </Reveal>
    </Section>
  );
}
