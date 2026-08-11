import { Section } from "@/components/layout";
import { EcosystemHub } from "@/components/features";
import { Reveal, SectionHeading } from "@/components/ui";
import { technologiesSection, technologyGroups } from "@/config/content/agentes";

/** Seção "Tecnologias e integrações": diagrama hub-and-spoke do ecossistema. */
export function TechnologiesSection() {
  return (
    <Section id="tecnologias" spacing="compact">
      <SectionHeading
        eyebrow={technologiesSection.eyebrow}
        title={technologiesSection.title}
        size="sm"
        className="mb-[clamp(48px,6vw,72px)] max-w-[640px]"
      />
      <Reveal>
        <EcosystemHub groups={technologyGroups} hubLabel={technologiesSection.hubLabel} />
      </Reveal>
    </Section>
  );
}
