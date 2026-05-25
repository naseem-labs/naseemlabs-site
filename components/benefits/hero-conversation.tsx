const GREEN = "#16a34a";
const WA_GREEN = "#dcf8c6";
const BORDER = "rgba(0,0,0,0.06)";

function WaTicks() {
  return (
    <svg width="12" height="9" viewBox="0 0 16 11" className="text-[#53bdeb] shrink-0" aria-hidden>
      <path
        fill="currentColor"
        d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-5.19 6.76-2.226-2.226a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l2.75 2.75a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l5.483-7.15a.457.457 0 0 0-.094-.617zm3.23 0a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-7.34 9.57-1.12-1.12a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l1.644 1.644a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l7.633-9.97a.457.457 0 0 0-.094-.617z"
      />
    </svg>
  );
}

function PatientBubble({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-end gap-2 max-w-[92%] ${className}`}>
      <div className="w-8 h-8 rounded-full bg-[#dfe5e7] shrink-0 flex items-center justify-center text-[10px] text-[#54656f] font-medium">
        P
      </div>
      <div className="rounded-xl rounded-bl-sm bg-white px-3 py-2 text-[12px] leading-[1.4] text-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border" style={{ borderColor: BORDER }}>
        {children}
      </div>
    </div>
  );
}

function ClinicBubble({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-end gap-2 justify-end ml-auto max-w-[92%] ${className}`}>
      <div
        className="rounded-xl rounded-br-sm px-3 py-2 text-[12px] leading-[1.4] text-[#111] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
        style={{ backgroundColor: WA_GREEN }}
      >
        <div className="flex flex-wrap items-end gap-x-2 justify-end">
          <span>{children}</span>
          <span className="inline-flex items-center gap-0.5 text-[9px] text-[#667781] shrink-0">
            <WaTicks />
          </span>
        </div>
      </div>
      <div
        className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
        style={{ backgroundColor: GREEN }}
      >
        N
      </div>
    </div>
  );
}

export default function HeroConversation() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-auto min-h-[320px] sm:min-h-[360px] flex flex-col justify-center gap-4 py-4">
      {/* Decorative accents */}
      <div
        className="absolute top-8 right-4 w-10 h-10 rounded-full border opacity-40 pointer-events-none hidden sm:flex items-center justify-center"
        style={{ borderColor: `${GREEN}40` }}
        aria-hidden
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
      <div
        className="absolute bottom-16 left-0 w-8 h-8 rounded-full opacity-30 pointer-events-none hidden sm:block"
        style={{ background: `radial-gradient(circle, ${GREEN}30 0%, transparent 70%)` }}
        aria-hidden
      />

      <PatientBubble className="relative z-10 translate-x-0 sm:translate-x-2">
        Hi, I&apos;m looking for hair transplant. Can you tell me the cost?
      </PatientBubble>

      <ClinicBubble className="relative z-20 -translate-x-0 sm:-translate-x-4">
        Sure! The cost depends on the number of grafts and technique used. Share a scalp photo and
        I&apos;ll guide you better.
      </ClinicBubble>

      <PatientBubble className="relative z-10 translate-x-0 sm:translate-x-6">
        Thanks! Also, how long is the recovery after the procedure?
      </PatientBubble>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12] hidden md:block"
        aria-hidden
      >
        <path
          d="M 80 120 Q 200 80 280 140"
          fill="none"
          stroke={GREEN}
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <path
          d="M 100 200 Q 220 160 300 220"
          fill="none"
          stroke={GREEN}
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
