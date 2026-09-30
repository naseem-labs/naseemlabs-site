"use client";

import { useMemo, useState } from "react";
import type { RegionalConfig } from "@/lib/private-sales/regional-config";

type ImpactCalculatorProps = {
  config: RegionalConfig;
};

export default function ImpactCalculator({
  config,
}: ImpactCalculatorProps) {
  const [monthlyInquiries, setMonthlyInquiries] = useState(100);
  const [currentRate, setCurrentRate] = useState(10);
  const [scenarioRate, setScenarioRate] = useState(15);
  const [procedureValue, setProcedureValue] = useState(150000);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(config.locale, {
      style: "currency",
      currency: config.currencyCode,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const results = useMemo(() => {
    const currentConsultations =
      monthlyInquiries * (currentRate / 100);

    const scenarioConsultations =
      monthlyInquiries * (scenarioRate / 100);

    const consultationDifference =
      scenarioConsultations - currentConsultations;

    const currentPotentialValue =
      currentConsultations * procedureValue;

    const scenarioPotentialValue =
      scenarioConsultations * procedureValue;

    const potentialDifference =
      scenarioPotentialValue - currentPotentialValue;

    return {
      currentConsultations,
      scenarioConsultations,
      consultationDifference,
      currentPotentialValue,
      scenarioPotentialValue,
      potentialDifference,
    };
  }, [
    monthlyInquiries,
    currentRate,
    scenarioRate,
    procedureValue,
  ]);

  return (
    <div className="overflow-hidden rounded-3xl border border-[#173b32]/10 bg-white/70">
      {/* Inputs */}
      <div className="border-b border-[#173b32]/10 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <NumberField
            label="Monthly WhatsApp inquiries"
            value={monthlyInquiries}
            min={0}
            onChange={setMonthlyInquiries}
          />

          <NumberField
            label="Current consultation rate"
            value={currentRate}
            min={0}
            max={100}
            suffix="%"
            onChange={setCurrentRate}
          />

          <NumberField
            label="Scenario consultation rate"
            value={scenarioRate}
            min={0}
            max={100}
            suffix="%"
            onChange={setScenarioRate}
          />

          <NumberField
            label={`Average procedure value (${config.currencyCode})`}
            value={procedureValue}
            min={0}
            onChange={setProcedureValue}
          />
        </div>

        <p className="mt-6 text-xs leading-5 text-[#173b32]/45">
          Enter the clinic&apos;s own numbers. The model is designed to
          illustrate potential commercial impact, not predict revenue.
        </p>
      </div>

      {/* Results */}
      <div className="grid lg:grid-cols-2">
        {/* Current */}
        <div className="border-b border-[#173b32]/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6f9185]">
            Current scenario
          </p>

          <p className="mt-4 font-serif text-4xl tracking-tight">
            {formatNumber(results.currentConsultations)}
          </p>

          <p className="mt-1 text-sm text-[#173b32]/55">
            potential consultations / month
          </p>

          <div className="mt-8 border-t border-[#173b32]/10 pt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#173b32]/40">
              Potential procedure value
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {formatCurrency(results.currentPotentialValue)}
            </p>
          </div>
        </div>

        {/* Scenario */}
        <div className="bg-[#edf5ef] p-6 sm:p-8 lg:p-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#4d7d6c]">
            Improved inquiry-handling scenario
          </p>

          <p className="mt-4 font-serif text-4xl tracking-tight">
            {formatNumber(results.scenarioConsultations)}
          </p>

          <p className="mt-1 text-sm text-[#173b32]/55">
            potential consultations / month
          </p>

          <div className="mt-8 border-t border-[#173b32]/10 pt-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#173b32]/40">
              Potential procedure value
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {formatCurrency(results.scenarioPotentialValue)}
            </p>
          </div>
        </div>
      </div>

      {/* Difference */}
      <div className="border-t border-[#173b32]/10 bg-[#173b32] p-6 text-[#f4f1e8] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9fc8bb]">
              Scenario difference
            </p>

            <p className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
              {formatCurrency(results.potentialDifference)}
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#f4f1e8]/55">
              Illustrative additional potential procedure value if the
              scenario consultation rate were achieved at the entered
              procedure value.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f4f1e8]/40">
              Consultation difference
            </p>

            <p className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              {formatNumber(results.consultationDifference)}
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-[#173b32]/10 px-6 py-5 sm:px-8">
        <p className="text-[11px] leading-5 text-[#173b32]/45">
          Illustrative scenario — not a revenue guarantee. Actual results
          depend on inquiry quality, patient behaviour, consultation
          availability, clinic processes and other factors.
        </p>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  min,
  max,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max?: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#173b32]/45">
        {label}
      </span>

      <div className="relative mt-2">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(event) => {
            const nextValue = Number(event.target.value);

            if (Number.isNaN(nextValue)) {
              onChange(0);
              return;
            }

            onChange(nextValue);
          }}
          className="w-full rounded-xl border border-[#173b32]/15 bg-[#f8f6ef] px-4 py-3 text-sm font-medium text-[#173b32] outline-none transition focus:border-[#6f9185] focus:ring-2 focus:ring-[#8eb9aa]/20"
        />

        {suffix ? (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#173b32]/40">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 1,
  }).format(value);
}
