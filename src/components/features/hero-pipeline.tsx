import {
  Bot,
  Flame,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { heroPipeline } from "@/config/content/prospect";

/** Linha conectora vertical com pulso de luz animado. */
function PipelineLink({ delay }: { delay: number }) {
  return (
    <div className="relative mx-auto my-0.5 h-7 w-px bg-[linear-gradient(180deg,rgb(53_217_255/0.6),rgb(53_217_255/0.15))]">
      <span
        className="animate-travel-y absolute -left-[3px] size-1.5 rounded-full bg-accent shadow-[0_0_10px_3px_rgb(53_217_255/0.8)]"
        style={{ animationDuration: "2.8s", animationDelay: `${delay}s` }}
      />
    </div>
  );
}

/**
 * Diagrama do hero do Prospect: Live Data & AI Pipeline Mockup.
 * Pesquisa B2B → Enriquecimento de Leads → Qualificação por IA → Handoff Comercial.
 */
export function HeroPipeline() {
  const searchNode = heroPipeline.nodes[0];
  const leadsNode = heroPipeline.nodes[1];

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[460px]">
      {/* Halo de luz decorativo de fundo */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />

      {/* Header do Pipeline */}
      <div className="mb-3 flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="animate-node size-2 rounded-full bg-accent" />
          <span className="font-mono text-[0.72rem] font-semibold tracking-wider text-accent uppercase">
            {heroPipeline.header.badge}
          </span>
        </div>
        <span className="font-mono text-[0.68rem] text-faint-2">
          {heroPipeline.header.status}
        </span>
      </div>

      <div className="relative flex flex-col">
        {/* NÓ 1: Pesquisa de Empresas */}
        <div className="group rounded-2xl border border-accent/20 bg-panel/85 p-4.5 shadow-[0_8px_24px_rgb(2_8_18/0.4)] backdrop-blur-md transition-colors hover:border-accent/35">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Search className="size-4" />
              </div>
              <div>
                <h4 className="font-display text-[0.92rem]/[1.3] font-semibold text-fg-bright">
                  {searchNode.title}
                </h4>
                <p className="text-[0.76rem] font-light text-muted">
                  {searchNode.description}
                </p>
              </div>
            </div>
            <span className="font-mono text-[0.7rem] font-medium text-accent">
              {searchNode.metric}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-accent/10">
            {searchNode.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-ink/70 px-2 py-0.5 font-mono text-[0.68rem] text-steel"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <PipelineLink delay={0} />

        {/* NÓ 2: Lista de Leads */}
        <div className="group rounded-2xl border border-accent/20 bg-panel/85 p-4.5 shadow-[0_8px_24px_rgb(2_8_18/0.4)] backdrop-blur-md transition-colors hover:border-accent/35">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Users className="size-4" />
              </div>
              <div>
                <h4 className="font-display text-[0.92rem]/[1.3] font-semibold text-fg-bright">
                  {leadsNode.title}
                </h4>
                <p className="text-[0.76rem] font-light text-muted">
                  {leadsNode.description}
                </p>
              </div>
            </div>
            <span className="font-mono text-[0.7rem] font-medium text-accent">
              {leadsNode.metric}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-accent/10">
            {leadsNode.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-ink/70 px-2 py-0.5 font-mono text-[0.68rem] text-steel"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <PipelineLink delay={0.9} />

        {/* NÓ 3: IA QUALIFICA E ENCAMINHA (HERO HIGHLIGHT) */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-accent/45 bg-[linear-gradient(145deg,rgb(14_26_44/0.95),rgb(7_13_22/0.9))] p-5 shadow-[0_0_36px_rgb(53_217_255/0.22)] backdrop-blur-xl">
          {/* Efeito scan luminoso */}
          <div
            aria-hidden="true"
            className="animate-scan pointer-events-none absolute -inset-y-full -left-full w-1/3 bg-[linear-gradient(90deg,transparent,rgb(53_217_255/0.15),transparent)] blur-sm"
          />

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-accent text-ink shadow-[0_0_16px_rgb(53_217_255/0.55)]">
                <Bot className="size-5" />
              </div>
              <div>
                <h4 className="font-display text-[0.96rem]/[1.3] font-semibold text-white">
                  {heroPipeline.highlight.title}
                </h4>
                <p className="text-[0.78rem] font-light text-accent-soft">
                  {heroPipeline.highlight.description}
                </p>
              </div>
            </div>

            <span className="flex-none rounded-full border border-accent/30 bg-accent/15 px-2.5 py-1 font-mono text-[0.68rem] font-semibold text-accent shadow-[0_0_10px_rgb(53_217_255/0.25)]">
              {heroPipeline.highlight.badge}
            </span>
          </div>

          {/* Simulação de interação / status da IA */}
          <div className="mt-3.5 rounded-xl border border-accent/20 bg-ink/75 p-3">
            <div className="flex items-center justify-between font-mono text-[0.72rem]">
              <span className="inline-flex items-center gap-1.5 text-accent">
                <Sparkles className="size-3.5" />
                {heroPipeline.highlight.score}
              </span>
              <span className="text-muted text-[0.68rem]">
                {heroPipeline.highlight.sampleInteraction}
              </span>
            </div>
          </div>
        </div>

        <PipelineLink delay={1.8} />

        {/* NÓ 4: TIME COMERCIAL ACIONADO (DESTINATION) */}
        <div className="rounded-2xl border border-amber/35 bg-[linear-gradient(145deg,rgb(24_20_14/0.9),rgb(12_10_8/0.88))] p-4.5 shadow-[0_0_30px_rgb(255_182_92/0.14)] backdrop-blur-md">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-lg bg-amber/15 text-amber shadow-[0_0_12px_rgb(255_182_92/0.3)]">
                <Flame className="size-4.5" />
              </div>
              <div>
                <h4 className="font-display text-[0.92rem]/[1.3] font-semibold text-white">
                  {heroPipeline.destination.title}
                </h4>
                <p className="text-[0.76rem] font-light text-muted">
                  {heroPipeline.destination.description}
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="block font-mono text-[0.72rem] font-semibold text-amber">
                {heroPipeline.destination.status}
              </span>
              <span className="font-mono text-[0.65rem] text-faint">
                {heroPipeline.destination.speed}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
