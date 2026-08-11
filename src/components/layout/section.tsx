import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "dark" | "light";
export type SectionSpacing = "default" | "compact" | "wide";

const spacing: Record<SectionSpacing, string> = {
  default: "py-[clamp(44px,7vw,110px)]",
  compact: "py-[clamp(36px,5.5vw,85px)]",
  wide: "py-[clamp(52px,8vw,125px)]",
};

interface SectionProps {
  id?: string;
  /** `light` aplica a faixa clara — use no máximo uma vez por página. */
  tone?: SectionTone;
  spacing?: SectionSpacing;
  /** Necessário quando a seção tem halos ou malhas que extrapolam os limites. */
  clip?: boolean;
  className?: string;
  containerClassName?: string;
  /** Camadas de fundo posicionadas fora do contêiner de conteúdo. */
  backdrop?: ReactNode;
  children: ReactNode;
}

/**
 * Casca padrão de seção: espaçamento vertical, faixa de cor e contêiner de
 * 1240px. As camadas decorativas entram por `backdrop`, fora do fluxo.
 */
export function Section({
  id,
  tone = "dark",
  spacing: spacingKey = "default",
  clip = false,
  className,
  containerClassName,
  backdrop,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-6",
        spacing[spacingKey],
        tone === "light" && "bg-paper",
        clip && "overflow-hidden",
        className,
      )}
    >
      {backdrop}
      <div className={cn("relative mx-auto max-w-[1240px]", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
