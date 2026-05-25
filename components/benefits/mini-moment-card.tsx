import type { LucideIcon } from "lucide-react";

const GREEN = "#16a34a";
const WA_GREEN = "#dcf8c6";
const BORDER = "rgba(0,0,0,0.06)";

type Props = {
  icon: LucideIcon;
  title: string;
  patient: string;
  clinic: string;
  outcome: string;
};

export default function MiniMomentCard({ icon: Icon, title, patient, clinic, outcome }: Props) {
  return (
    <div
      className="flex flex-col rounded-xl border bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] min-w-[240px] sm:min-w-0 flex-1 transition-shadow hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
      style={{ borderColor: BORDER }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${GREEN}12`, color: GREEN }}
        >
          <Icon className="w-4 h-4" strokeWidth={1.5} />
        </span>
        <h3 className="text-[13px] font-semibold text-[#111]">{title}</h3>
      </div>

      <div className="rounded-lg p-2.5 space-y-2 flex-1" style={{ backgroundColor: "#f5f4f0" }}>
        <div className="flex justify-start">
          <div className="max-w-[90%] rounded-lg rounded-bl-sm bg-white px-2.5 py-1.5 text-[11px] leading-snug text-[#333] shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
            {patient}
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className="max-w-[90%] rounded-lg rounded-br-sm px-2.5 py-1.5 text-[11px] leading-snug text-[#333]"
            style={{ backgroundColor: WA_GREEN }}
          >
            {clinic}
          </div>
        </div>
      </div>

      <p className="mt-3 text-[11px] text-[#777] leading-relaxed">{outcome}</p>
    </div>
  );
}
