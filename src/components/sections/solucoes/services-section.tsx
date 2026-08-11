import { Section } from "@/components/layout";
import { ServicesBento } from "@/components/features";
import { SectionHeading } from "@/components/ui";
import { serviceGroups, servicesSection } from "@/config/content/solucoes";

/** Seção "Serviços": bento grid assimétrico dos três grupos de entrega. */
export function ServicesSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.title}
        description={servicesSection.description}
        className="mb-[clamp(44px,6vw,68px)]"
      />
      <ServicesBento groups={serviceGroups} />
    </Section>
  );
}
