"use client";

import type { RegionalConfig } from "@/lib/private-sales/regional-config";

type DeploymentOptionsProps = {
  config: RegionalConfig;
};

export default function DeploymentOptions({
  config,
}: DeploymentOptionsProps) {
  return (
    <section className="rounded-[2rem] border border-[#173b32]/10 bg-[#f8f6ef] p-6 sm:p-8 lg:p-12">
      <div className="max-w-2xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6f9185]">
          Deployment
        </p>

        <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#173b32] sm:text-4xl">
          Choose how you want to move forward.
        </h2>

        <p className="mt-4 text-sm leading-6 text-[#173b32]/60">
          After seeing the system in your clinic workflow, there are two
          straightforward ways to continue.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {/* 14-Day Pilot */}
        <div className="flex flex-col rounded-3xl border border-[#173b32]/15 bg-white p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6f9185]">
                Option 01
              </p>

              <h3 className="mt-2 font-serif text-2xl tracking-tight text-[#173b32]">
                14-Day Pilot
              </h3>

              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6f9185]">
                Best if you want to evaluate first
              </p>
            </div>

            <span className="rounded-full bg-[#edf5ef] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#4d7d6c]">
              Pilot
            </span>
          </div>

          <p className="mt-5 text-sm leading-6 text-[#173b32]/60">
            Deploy PREET into the clinic&apos;s real inquiry flow and evaluate
            how it handles patient conversations, qualification and follow-up.
          </p>

          <div className="mt-7 space-y-3">
            <Feature text="Live WhatsApp deployment" />
            <Feature text="Real patient inquiry handling" />
            <Feature text="Conversation progression and follow-up" />
            <Feature text="Clinic dashboard access" />
            <Feature text="Review the workflow before committing" />
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-full border border-[#173b32]/20 bg-white px-5 py-3.5 text-sm font-semibold text-[#173b32] transition hover:bg-[#edf5ef]"
          >
            Deploy 14-Day Pilot
          </button>
        </div>

        {/* Monthly */}
        <div className="relative flex flex-col overflow-hidden rounded-3xl border border-[#173b32] bg-[#173b32] p-6 text-[#f4f1e8] sm:p-8">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#9fc8bb]/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9fc8bb]">
                  Option 02
                </p>

                <h3 className="mt-2 font-serif text-2xl tracking-tight">
                  Monthly Deployment
                </h3>

                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9fc8bb]">
                  Best if you&apos;re ready to deploy
                </p>
              </div>

              <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#d9ebe5]">
                Direct
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#f4f1e8]/60">
              Move directly into the full infrastructure deployment without
              running a separate pilot period.
            </p>

            <div className="mt-7 space-y-3">
              <Feature dark text="Full PREET deployment" />
              <Feature dark text="Live WhatsApp inquiry handling" />
              <Feature dark text="Follow-up infrastructure" />
              <Feature dark text="Clinic dashboard access" />
              <Feature dark text="Ongoing infrastructure support" />
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#f4f1e8] px-5 py-3.5 text-sm font-semibold text-[#173b32] transition hover:bg-white"
            >
              Start Monthly Deployment
            </button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-[11px] leading-5 text-[#173b32]/40">
        Deployment scope and terms are confirmed before activation.
      </p>
    </section>
  );
}

function Feature({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] ${
          dark
            ? "bg-white/10 text-[#b8d8ce]"
            : "bg-[#edf5ef] text-[#4d7d6c]"
        }`}
      >
        ✓
      </span>

      <span
        className={`text-sm ${
          dark ? "text-[#f4f1e8]/65" : "text-[#173b32]/65"
        }`}
      >
        {text}
      </span>
    </div>
  );
}