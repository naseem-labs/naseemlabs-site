import Link from "next/link";
import WhatsAppLink from "@/components/whatsapp-link";
import { DEMO_PATH } from "@/lib/site-config";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  HelpCircle,
  MessageCircle,
  Plane,
  User,
  X,
} from "lucide-react";

const GREEN = "#16a34a";
const RED = "#dc2626";
const BORDER = "rgba(0,0,0,0.06)";
const WA_GREEN = "#dcf8c6";
const CHAT_BG = "#efeae2";

const LABEL = "text-[10px] font-semibold tracking-[0.1em] uppercase";
const H2 = "text-[22px] sm:text-[26px] lg:text-[28px] font-medium tracking-[-0.02em] leading-[1.25] text-[#111]";
const BODY = "text-[13px] sm:text-[14px] leading-[1.6] text-[#555]";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className={LABEL} style={{ color: GREEN }}>
      {children}
    </span>
  );
}

function WaBubble({
  side,
  time,
  ticks,
  children,
}: {
  side: "left" | "right";
  time: string;
  ticks?: boolean;
  children: React.ReactNode;
}) {
  const right = side === "right";
  return (
    <div className={`flex ${right ? "justify-end" : "justify-start"} mb-[2px]`}>
      <div
        className={`relative max-w-[92%] px-2 py-1 text-[10px] leading-[14px] ${
          right
            ? "rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-sm"
            : "rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-sm bg-white"
        }`}
        style={{ backgroundColor: right ? WA_GREEN : "#fff", color: "#111b21" }}
      >
        <span className="block pr-9 whitespace-pre-wrap break-words">{children}</span>
        <span className="absolute bottom-[2px] right-[5px] flex items-center gap-0.5 text-[8px] text-[#667781]">
          {time}
          {ticks && <WaTicks />}
        </span>
      </div>
    </div>
  );
}

function MiniWaHeader() {
  return (
    <div className="flex items-center gap-1.5 bg-[#f0f2f5] border-b border-black/[0.06] px-2 py-1 shrink-0">
      <ChevronLeft className="w-3 h-3 text-[#54656f]" strokeWidth={2} />
      <div className="w-5 h-5 rounded-full bg-[#dfe5e7] flex items-center justify-center text-[7px] font-semibold text-[#54656f]">
        HT
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[9px] font-medium text-[#111b21] truncate">Hair Transplant Clinic</p>
        <p className="text-[7.5px] text-[#667781]">online</p>
      </div>
    </div>
  );
}

function StepChatCard({
  messages,
}: {
  messages: { side: "left" | "right"; text: string; time: string; ticks?: boolean }[];
}) {
  return (
    <div
      className="rounded-xl border bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] w-full min-w-0"
      style={{ borderColor: BORDER }}
    >
      <MiniWaHeader />
      <div className="px-1.5 py-1.5 min-h-[100px]" style={{ backgroundColor: CHAT_BG }}>
        {messages.map((m, i) => (
          <WaBubble key={i} side={m.side} time={m.time} ticks={m.ticks}>
            {m.text}
          </WaBubble>
        ))}
      </div>
    </div>
  );
}

function DashedArrow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`} aria-hidden>
      <div className="flex items-center gap-0.5 text-[#d4d4d4]">
        <span className="w-3 sm:w-5 border-t border-dashed border-[#d4d4d4]" />
        <ChevronRight className="w-3.5 h-3.5" strokeWidth={1.5} />
      </div>
    </div>
  );
}

const WORKFLOW_STEPS = [
  {
    title: "Ads / Social",
    desc: "Patient sees ad and shows interest",
    icon: (
      <div className="flex gap-0.5">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </div>
    ),
  },
  {
    title: "WhatsApp Inquiry",
    desc: "They message your clinic on WhatsApp",
    icon: <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />,
  },
  {
    title: "Patient Qualification",
    desc: "We understand needs, goals and situation",
    icon: <User className="w-5 h-5" style={{ color: GREEN }} strokeWidth={1.5} />,
  },
  {
    title: "Consultation Movement",
    desc: "Interested patients moved to consultation",
    icon: <Calendar className="w-5 h-5" style={{ color: GREEN }} strokeWidth={1.5} />,
  },
  {
    title: "Follow-up & Nurture",
    desc: "Smart follow-ups until they decide",
    icon: <MessageCircle className="w-5 h-5" style={{ color: GREEN }} strokeWidth={1.5} />,
  },
];

const FLOW_STEPS = [
  {
    num: 1,
    title: "Patient reaches out",
    desc: "First message on WhatsApp",
    messages: [
      { side: "left" as const, text: "Hi, I'm interested in a hair transplant", time: "9:12 PM" },
      { side: "right" as const, text: "Hi! Thanks for reaching out. Happy to help.", time: "9:12 PM", ticks: true },
    ],
  },
  {
    num: 2,
    title: "We understand their needs",
    desc: "Goals, area & expectations",
    messages: [
      { side: "right" as const, text: "Which area are you looking to treat?", time: "9:14 PM", ticks: true },
      { side: "left" as const, text: "Mainly the front hairline and crown", time: "9:15 PM" },
    ],
  },
  {
    num: 3,
    title: "Provide accurate info",
    desc: "Grafts, procedure & pricing",
    messages: [
      { side: "left" as const, text: "How many grafts would I need?", time: "9:18 PM" },
      { side: "right" as const, text: "Usually 2000–2800 for your case. Photos help us confirm.", time: "9:19 PM", ticks: true },
    ],
  },
  {
    num: 4,
    title: "Move to consultation",
    desc: "Booking the right slot",
    messages: [
      { side: "right" as const, text: "Saturday 11 AM is available. Should I book it?", time: "9:22 PM", ticks: true },
      { side: "left" as const, text: "Yes, that works for me", time: "9:23 PM" },
    ],
  },
  {
    num: 5,
    title: "Follow up & nurture",
    desc: "Until they're ready",
    messages: [
      { side: "right" as const, text: "Just checking in — any questions before your visit?", time: "2 days later", ticks: true },
      { side: "left" as const, text: "All clear, thank you!", time: "2 days later" },
    ],
  },
];

const SCENARIOS = [
  {
    icon: <DollarSign className="w-4 h-4" strokeWidth={1.5} />,
    title: "Cost & Pricing Inquiries",
    desc: "Transparent graft-based pricing conversations without pressure.",
  },
  {
    icon: <HelpCircle className="w-4 h-4" strokeWidth={1.5} />,
    title: "Graft & Results Questions",
    desc: "Density, hairline design, and realistic outcome expectations.",
  },
  {
    icon: <Clock className="w-4 h-4" strokeWidth={1.5} />,
    title: "Recovery & Aftercare Concerns",
    desc: "Healing timeline, shedding phase, and post-op care guidance.",
  },
  {
    icon: <Plane className="w-4 h-4" strokeWidth={1.5} />,
    title: "Travel & International Patients",
    desc: "Stay duration, airport pickup, and consultation scheduling abroad.",
  },
  {
    icon: <MessageCircle className="w-4 h-4" strokeWidth={1.5} />,
    title: "Hesitation & Objections Handling",
    desc: "Pain, scars, and trust concerns answered calmly and clearly.",
  },
];

const FAIL_POINTS = [
  "Rigid scripted replies",
  "No memory of previous messages",
  "Robotic and unnatural responses",
  "Misses context and patient intent",
  "Poor follow-ups and drop-offs",
  "Not built for hair transplant inquiries",
];

const WIN_POINTS = [
  "Natural, human-like conversations",
  "Remembers full conversation context",
  "Understands patient intent deeply",
  "Built specifically for hair transplant inquiries",
  "Smart follow-ups that convert",
  "Handles complex questions with ease",
];

export default function HowItWorksSection() {
  return (
    <div className="border-t" style={{ borderColor: BORDER }}>
      {/* Section 1 — Hero Workflow */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div className="text-center lg:text-left">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className={`mt-2 ${H2}`}>
              Built around real clinic{" "}
              <span style={{ color: GREEN }}>inquiry flow.</span>
            </h2>
            <p className={`mt-3 ${BODY} max-w-md mx-auto lg:mx-0`}>
              From the first message to booked consultation and beyond — we handle every step
              naturally.
            </p>
            <Link
              href={DEMO_PATH}
              className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-[13px] font-medium text-white transition-opacity hover:opacity-90 min-h-[44px]"
              style={{ backgroundColor: GREEN }}
            >
              View Demo Conversations
            </Link>
          </div>

          <div
            className="rounded-2xl border bg-white p-4 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            style={{ borderColor: BORDER }}
          >
            <div className="hidden lg:flex items-start justify-between gap-0">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.title} className="flex items-start flex-1 min-w-0">
                  <div className="flex flex-col items-center text-center flex-1 px-0.5">
                    <div
                      className="w-10 h-10 rounded-lg border flex items-center justify-center mb-2"
                      style={{ borderColor: BORDER }}
                    >
                      {step.icon}
                    </div>
                    <p className="text-[11px] font-semibold text-[#111] leading-tight">{step.title}</p>
                    <p className="mt-1 text-[9px] text-[#888] leading-snug max-w-[100px]">{step.desc}</p>
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && <DashedArrow className="mt-3" />}
                </div>
              ))}
            </div>

            <div className="flex lg:hidden flex-col gap-0">
              {WORKFLOW_STEPS.map((step, i) => (
                <div key={step.title}>
                  <div className="flex items-start gap-3 py-2">
                    <div
                      className="w-10 h-10 rounded-lg border flex items-center justify-center shrink-0"
                      style={{ borderColor: BORDER }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#111]">{step.title}</p>
                      <p className="text-[11px] text-[#888] mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowRight className="w-4 h-4 text-[#ccc] rotate-90" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Step by Step */}
      <section id="step-by-step" className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-t" style={{ borderColor: BORDER }}>
        <div className="mx-auto max-w-[1100px] text-center">
          <SectionLabel>Step by Step</SectionLabel>
          <h2 className={`mt-2 ${H2}`}>
            How conversations <span style={{ color: GREEN }}>flow.</span>
          </h2>
          <p className={`mt-3 ${BODY} max-w-lg mx-auto`}>
            Natural, human-like conversations that qualify, inform and move patients forward.
          </p>
        </div>

        <div className="mx-auto max-w-[1100px] mt-6 sm:mt-8">
          <div className="hidden xl:flex items-start gap-0.5">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.num} className="flex items-start flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-5 h-5 rounded-full text-[10px] font-semibold text-white flex items-center justify-center shrink-0"
                      style={{ backgroundColor: GREEN }}
                    >
                      {step.num}
                    </span>
                    <div className="text-left min-w-0">
                      <p className="text-[11px] font-semibold text-[#111] leading-tight">{step.title}</p>
                      <p className="text-[9px] text-[#888]">{step.desc}</p>
                    </div>
                  </div>
                  <StepChatCard messages={step.messages} />
                </div>
                {i < FLOW_STEPS.length - 1 && <DashedArrow className="mt-14 mx-0.5" />}
              </div>
            ))}
          </div>

          <div className="xl:hidden flex flex-col gap-6">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.num}>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-5 h-5 rounded-full text-[10px] font-semibold text-white flex items-center justify-center shrink-0"
                    style={{ backgroundColor: GREEN }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold text-[#111]">{step.title}</p>
                    <p className="text-[10px] text-[#888]">{step.desc}</p>
                  </div>
                </div>
                <StepChatCard messages={step.messages} />
                {i < FLOW_STEPS.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowRight className="w-4 h-4 text-[#ccc] rotate-90" strokeWidth={1.5} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Real Scenarios */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-t" style={{ borderColor: BORDER }}>
        <div className="mx-auto max-w-[1100px] text-center">
          <SectionLabel>In Action</SectionLabel>
          <h2 className={`mt-2 ${H2}`}>
            Real scenarios we handle <span style={{ color: GREEN }}>every day.</span>
          </h2>
          <p className={`mt-3 ${BODY} max-w-lg mx-auto`}>
            From simple questions to complex concerns — handled naturally.
          </p>
        </div>

        <div className="mx-auto max-w-[1100px] mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
          {SCENARIOS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-center text-center rounded-xl border bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
              style={{ borderColor: BORDER }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: `${GREEN}12`, color: GREEN }}
              >
                {card.icon}
              </div>
              <h3 className="text-[13px] font-semibold text-[#111] leading-snug">{card.title}</h3>
              <p className="mt-2 text-[11px] leading-relaxed text-[#777] flex-1">{card.desc}</p>
              <button
                type="button"
                className="mt-3 w-full px-3 py-1.5 rounded-full text-[11px] font-medium border bg-white transition-colors hover:bg-[#fafafa]"
                style={{ borderColor: BORDER, color: "#444" }}
              >
                See Example Chat
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Comparison */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-t" style={{ borderColor: BORDER }}>
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_1.1fr] gap-4 lg:gap-5 items-stretch">
            <div
              className="rounded-xl border bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              style={{ borderColor: BORDER }}
            >
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#111] mb-4">
                Why regular bots <span style={{ color: RED }}>fail.</span>
              </h3>
              <ul className="space-y-2.5">
                {FAIL_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#555]">
                    <X className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center py-0.5 lg:py-0">
              <span
                className="w-9 h-9 rounded-full border flex items-center justify-center text-[11px] font-bold text-[#999] bg-[#fafafa]"
                style={{ borderColor: BORDER }}
              >
                VS
              </span>
            </div>

            <div
              className="rounded-xl border bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              style={{ borderColor: BORDER }}
            >
              <h3 className="text-[17px] sm:text-[18px] font-medium text-[#111] mb-4">
                Why NaseemLabs is <span style={{ color: GREEN }}>different.</span>
              </h3>
              <ul className="space-y-2.5">
                {WIN_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#555]">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GREEN }} strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl border bg-white overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] lg:row-span-1"
              style={{ borderColor: BORDER }}
            >
              <MiniWaHeader />
              <div className="px-2 py-2" style={{ backgroundColor: CHAT_BG }}>
                <WaBubble side="left" time="8:30 PM">
                  Will there be visible scars after the procedure?
                </WaBubble>
                <WaBubble side="right" time="8:31 PM" ticks>
                  {`With FUE, scarring is minimal — tiny dots\nthat are hard to see once healed.`}
                </WaBubble>
                <WaBubble side="left" time="8:32 PM">
                  How long is the recovery?
                </WaBubble>
                <WaBubble side="right" time="8:32 PM" ticks>
                  Most patients return to desk work in 3–5 days. Full results take 9–12 months.
                </WaBubble>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — CTA Strip */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
        <div
          className="mx-auto max-w-[1100px] rounded-2xl px-5 sm:px-8 py-6 sm:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
          style={{
            background: "linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1e241c 100%)",
          }}
        >
          <div className="text-center md:text-left">
            <span className={`${LABEL} text-[#4ade80]`}>See It In Action</span>
            <h2 className="mt-1.5 text-[20px] sm:text-[22px] font-medium text-white tracking-[-0.02em]">
              See real conversations.
            </h2>
            <p className="mt-2 text-[13px] leading-relaxed text-[#a3a3a3] max-w-md mx-auto md:mx-0">
              Explore how we handle real patient inquiries just like your clinic does.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 justify-center md:justify-end shrink-0">
            <Link
              href={DEMO_PATH}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-[13px] font-medium text-white transition-opacity hover:opacity-90 min-h-[44px]"
              style={{ backgroundColor: GREEN }}
            >
              Explore Demo
            </Link>
            <WhatsAppLink className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-[13px] font-medium bg-white text-[#111] transition-opacity hover:opacity-95 min-h-[44px]">
              <WhatsAppIcon className="w-4 h-4" />
              Chat on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </div>
  );
}
