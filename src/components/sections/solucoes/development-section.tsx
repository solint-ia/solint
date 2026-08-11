import { Section } from "@/components/layout";
import { DevelopmentSpiral } from "@/components/features";
import { SectionHeading } from "@/components/ui";
import {
  developmentClosing,
  developmentSection,
  developmentSteps,
  spiralOffsets,
} from "@/config/content/solucoes";

/** Seção "Como a Solint desenvolve": espiral vertical de 6 etapas. */
export function DevelopmentSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow={developmentSection.eyebrow}
        title={developmentSection.title}
        className="mb-[clamp(48px,6vw,72px)] max-w-[700px]"
      />
      <DevelopmentSpiral
        steps={developmentSteps}
        closing={developmentClosing}
        offsets={spiralOffsets}
      />
    </Section>
  );
}
