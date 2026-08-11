import type { NavLink, SocialLink } from "@/types";
import { siteConfig } from "./site";

/** Âncora canônica para o CTA de contato (seção da home). */
export const CONTACT_ANCHOR = "/#contato";

export const navLinks: readonly NavLink[] = [
  { key: "prospect", label: "Prospect", href: "/prospect" },
  { key: "home", label: "Home", href: "/" },
  { key: "agentes", label: "Agentes de IA", href: "/agentes-ia" },
  { key: "solucoes", label: "Soluções", href: "/solucoes" },
] as const;

/** Rótulos completos usados no rodapé, onde há espaço para o nome por extenso. */
export const footerNavLinks: readonly NavLink[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "agentes", label: "Agentes de IA", href: "/agentes-ia" },
  { key: "prospect", label: "Prospect", href: "/prospect" },
  { key: "solucoes", label: "Desenvolvimento de softwares", href: "/solucoes" },
] as const;

export const socialLinks: readonly SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
] as const;

export const contactLinks: readonly SocialLink[] = [
  { label: "Fale com a Solint", href: CONTACT_ANCHOR },
  { label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref },
] as const;

export const legalLinks: readonly SocialLink[] = [
  { label: "Política de privacidade", href: "#" },
  { label: "Termos de uso", href: "#" },
] as const;
