import { cn } from "@/lib/utils";

interface FlowNodeProps {
  /** `amber` marca o nó de conclusão do fluxo. */
  tone?: "cyan" | "amber";
  /** Aplica o pulso contínuo de brilho. */
  pulse?: boolean;
  className?: string;
  /** Atributo de marcação lido pelos hooks de traçado (ex.: `data-flow-node`). */
  markerAttribute?: string;
}

/** Ponto luminoso que ancora as linhas dos fluxos e timelines. */
export function FlowNode({
  tone = "cyan",
  pulse = false,
  className,
  markerAttribute,
}: FlowNodeProps) {
  const marker = markerAttribute ? { [markerAttribute]: "" } : {};

  return (
    <span
      aria-hidden="true"
      {...marker}
      className={cn(
        "flex-none rounded-full border-2 border-[#080B11]",
        tone === "amber"
          ? "size-[15px] bg-amber shadow-[0_0_22px_7px_rgb(255_182_92/0.55),0_0_54px_18px_rgb(255_182_92/0.24)]"
          : "size-[13px] bg-accent shadow-[0_0_14px_4px_rgb(53_217_255/0.45)]",
        pulse && (tone === "amber" ? "animate-node-amber" : "animate-node"),
        className,
      )}
    />
  );
}
