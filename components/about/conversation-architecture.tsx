import { ArrowRight, MessageSquare } from "lucide-react";

const GREEN = "#16a34a";
const WA_GREEN = "#dcf8c6";
const BORDER = "rgba(0,0,0,0.06)";

const STEPS = [
  "Understands Intent",
  "Provides Information",
  "Builds Confidence",
  "Moves Forward",
];

function WaTicks() {
  return (
    <svg width="11" height="8" viewBox="0 0 16 11" className="text-[#53bdeb] shrink-0" aria-hidden>
      <path
        fill="currentColor"
        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-5.19 6.76-2.226-2.226a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l2.75 2.75a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l5.483-7.15a.457.457 0 0 0-.094-.617zm3.23 0a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-7.34 9.57-1.12-1.12a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l1.644 1.644a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l7.633-9.97a.457.457 0 0 0-.094-.617z"
      />
    </svg>
  );
}

export default function ConversationArchitecture() {
  return (
    <div
      className="relative w-full max-w-[520px] mx-auto lg:ml-auto rounded-2xl border p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
      style={{ borderColor: BORDER, backgroundColor: "#fafaf9" }}
    >
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-3 items-stretch">
        {/* Inquiry + flow */}
        <div className="flex flex-col gap-3 lg:w-[42%] min-w-0">
          <div
            className="rounded-xl border bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            style={{ borderColor: BORDER }}
          >
            <p className="text-[9px] font-semibold uppercase tracking-wide text-[#888] mb-1.5">
              New Inquiry
            </p>
            <p className="text-[11px] leading-snug text-[#444]">
              &ldquo;I&apos;m looking for hair transplant. Can you share the cost?&rdquo;
            </p>
          </div>

          <div className="hidden sm:flex justify-center">
            <div className="w-px h-4 border-l border-dashed" style={{ borderColor: `${GREEN}50` }} />
          </div>

          <div className="space-y-2">
            {STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                  style={{ backgroundColor: GREEN }}
                >
                  {i + 1}
                </span>
                <span className="text-[11px] font-medium text-[#333]">{step}</span>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-end pt-1">
            <ArrowRight className="w-4 h-4 text-[#ccc]" strokeWidth={1.5} />
          </div>
        </div>

        {/* WhatsApp panel */}
        <div
          className="flex-1 rounded-xl border overflow-hidden min-w-0"
          style={{ borderColor: BORDER }}
        >
          <div className="flex items-center gap-2 px-2.5 py-2 bg-[#f0f2f5] border-b border-black/[0.06]">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
              style={{ backgroundColor: GREEN }}
            >
              N
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-[#111] truncate">NaseemLabs Assistant</p>
              <p className="text-[9px] text-[#667781]">online</p>
            </div>
            <MessageSquare className="w-3.5 h-3.5 text-[#54656f] ml-auto shrink-0" />
          </div>

          <div className="px-2 py-2 space-y-1.5 min-h-[140px]" style={{ backgroundColor: "#efeae2" }}>
            <div className="flex justify-start">
              <div className="max-w-[88%] rounded-lg rounded-bl-sm bg-white px-2 py-1 text-[10px] leading-snug text-[#333] shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
                How many grafts would I need for front hairline?
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="max-w-[88%] rounded-lg rounded-br-sm px-2 py-1 text-[10px] leading-snug text-[#333]"
                style={{ backgroundColor: WA_GREEN }}
              >
                <span className="block">
                  Usually 1800–2500 depending on density. Photos help us confirm.
                </span>
                <span className="flex justify-end items-center gap-0.5 mt-0.5">
                  <WaTicks />
                </span>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[88%] rounded-lg rounded-bl-sm bg-white px-2 py-1 text-[10px] leading-snug text-[#333]">
                Recovery time?
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="max-w-[88%] rounded-lg rounded-br-sm px-2 py-1 text-[10px] leading-snug text-[#333]"
                style={{ backgroundColor: WA_GREEN }}
              >
                Most patients return to desk work in 3–5 days. Full results take 9–12 months.
                <span className="flex justify-end mt-0.5">
                  <WaTicks />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
