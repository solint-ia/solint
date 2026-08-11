"use client";

import { Fragment, useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AgentApplication } from "@/types";

/** Posições no grid bento das aplicações. */
const tilePlacement = [
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-4 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-4 lg:row-start-2",
  "lg:col-span-2 lg:col-start-1 lg:row-start-3",
  "lg:col-start-3 lg:row-start-3",
  "lg:col-start-4 lg:row-start-3",
];

/**
 * Constelação de aplicações de agentes de IA.
 * Um card principal detalha a aplicação selecionada e os 7 tiles secundários
 * oferecem seleção interativa com micro-tags e timeline enriquecida.
 */
export function ApplicationsConstellation({
  applications,
}: {
  applications: readonly AgentApplication[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = applications[activeIndex];
  if (!active) return null;

  const ActiveIcon = active.icon;
  const secondary = applications
    .map((application, index) => ({ application, index }))
    .filter((entry) => entry.index !== activeIndex);

  return (
    <div className="relative">
      <div className="relative z-1 grid grid-cols-1 gap-3.5 lg:grid-cols-4 lg:[grid-auto-rows:minmax(104px,auto)]">
        {/* CARD PRINCIPAL ATIVO (Destaque Herói com timeline) */}
        <div
          className="flex flex-col justify-between rounded-3xl border-2 border-accent/40 bg-[linear-gradient(150deg,rgb(14_26_44/0.95),rgb(8_14_22/0.9))] p-7 shadow-[0_0_50px_rgb(22_140_255/0.18)] backdrop-blur-xl lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1"
        >
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <span className="flex size-12 flex-none items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent shadow-[0_0_16px_rgb(53_217_255/0.4)]">
                  <ActiveIcon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="m-0 font-display text-[1.32rem]/[1.22] font-bold tracking-[-0.02em] text-white">
                    {active.title}
                  </h3>
                  {active.speed ? (
                    <span className="font-mono text-[0.72rem] text-accent-soft">
                      {active.speed}
                    </span>
                  ) : null}
                </div>
              </div>

              {active.badge ? (
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/12 px-3 py-1 font-mono text-[0.7rem] font-semibold text-accent shadow-[0_0_10px_rgb(53_217_255/0.2)]">
                  <Sparkles className="size-3" />
                  {active.badge}
                </span>
              ) : null}
            </div>

            <p className="m-0 mb-6 max-w-[520px] text-pretty text-[0.94rem]/[1.65] font-light text-muted">
              {active.description}
            </p>

            {/* Timeline do fluxo de execução */}
            <div className="mb-6">
              <span className="mb-2.5 block font-mono text-[0.7rem] font-semibold tracking-[0.14em] text-accent uppercase">
                Sequência de Automação
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {active.flow.map((step, index) => (
                  <Fragment key={step}>
                    <div className="flex items-center gap-2 rounded-xl border border-accent/20 bg-ink/75 px-3.5 py-2 text-[0.82rem] font-medium text-fg-strong shadow-sm">
                      <span className="flex size-4.5 items-center justify-center rounded-full bg-accent/20 font-mono text-[0.65rem] font-bold text-accent">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                    {index < active.flow.length - 1 ? (
                      <ChevronRight className="size-4 text-accent/60 flex-none" />
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2.5 border-t border-accent/15 pt-4">
            <span className="size-2 flex-none rounded-full bg-accent shadow-[0_0_10px_2px_rgb(53_217_255/0.8)] animate-node" />
            <span className="text-[0.88rem]/[1.4] font-medium text-white">
              {active.impact}
            </span>
          </div>
        </div>

        {/* 7 MINI-CARDS SECUNDÁRIOS COM MICRO-TAGS */}
        {secondary.map(({ application, index }, position) => {
          const Icon = application.icon;
          return (
            <button
              key={application.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group flex cursor-pointer flex-col justify-between rounded-2xl border border-accent/16 bg-panel/70 p-4 text-left shadow-[0_4px_16px_rgb(2_8_18/0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-[#0E223D]/80 hover:shadow-[0_8px_28px_rgb(22_140_255/0.15)]",
                tilePlacement[position],
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="flex size-8 flex-none items-center justify-center rounded-xl border border-accent/20 bg-panel-2/80 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </span>
                {application.badge ? (
                  <span className="font-mono text-[0.64rem] font-medium text-steel group-hover:text-accent">
                    {application.badge}
                  </span>
                ) : null}
              </div>

              <div className="mt-2.5">
                <span className="block font-display text-[0.88rem]/[1.3] font-semibold text-fg-strong transition-colors group-hover:text-white">
                  {application.title}
                </span>
                {application.speed ? (
                  <span className="mt-0.5 block font-mono text-[0.66rem] text-faint-2 group-hover:text-accent-soft">
                    {application.speed}
                  </span>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
