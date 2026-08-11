import { PageGlow } from "@/components/layout";
import {
  AboutSection,
  ContactSection,
  HomeHero,
  PartnersSection,
  ProcessSection,
  ServiceAreasSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <PageGlow preset="home" />
      <HomeHero />
      <AboutSection />
      <ServiceAreasSection />
      <ProcessSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
