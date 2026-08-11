"use client";

// Client component porque injeta dados que carregam componentes de ícone: eles
// não atravessam a fronteira servidor→cliente, então a injeção acontece aqui.
import { Section } from "@/components/layout";
import { SectionHeading, SectionMarker } from "@/components/ui";
import { ServiceCarousel } from "@/components/features";
import { serviceAreas, serviceAreasSection } from "@/config/content/home";

/** Seção "Áreas de atuação": carrossel 3D com as três frentes da Solint. */
export function ServiceAreasSection() {
  return (
    <Section id="atuacao" backdrop={<SectionMarker label="/03 — atuação" />}>
      <SectionHeading
        eyebrow={serviceAreasSection.eyebrow}
        title={serviceAreasSection.title}
        description={serviceAreasSection.description}
        className="mb-[clamp(44px,6vw,72px)] max-w-[760px]"
      />
      <ServiceCarousel areas={serviceAreas} hint={serviceAreasSection.hint} />
    </Section>
  );
}
