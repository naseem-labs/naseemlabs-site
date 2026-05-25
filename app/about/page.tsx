import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  Check,
  Clock,
  Globe,
  MessageSquare,
  Quote,
  Scissors,
  Shield,
  Sparkles,
  Stethoscope,
  TrendingDown,
  User,
  Users,
  X,
} from "lucide-react";
import ConversationArchitecture from "@/components/about/conversation-architecture";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppLink from "@/components/whatsapp-link";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "About — NaseemLabs",
  description:
    "NaseemLabs designs conversational systems for aesthetic clinics — built around real patient inquiry behavior.",
};

const GREEN = "#16a34a";
const RED = "#dc2626";
const BG = "#f7f7f5";
const TEXT = "#111111";
const BORDER = "rgba(0,0,0,0.06)";
const SECTION = "px-4 sm:px-6 lg:px-8";
const SECTION_Y = "py-9 sm:py-11 lg:py-12";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const PROBLEM_CARDS = [
  {
    icon: Clock,
    title: "Slow or missed replies",
    desc: "Patients message after hours. Without a system, replies wait until morning — interest cools.",
  },
  {
    icon: MessageSquare,
    title: "Repeated questions",
    desc: "Staff answer the same graft, cost, and recovery questions dozens of times each week.",
  },
  {
    icon: User,
    title: "Inconsistent follow-up",
    desc: "Some inquiries get chased. Others go quiet with no structured follow-through.",
  },
  {
    icon: TrendingDown,
    title: "Lost consultation opportunities",
    desc: "Patients disappear mid-conversation before booking — often without the clinic noticing.",
  },
];

const BOT_FAILS = [
  "Rigid, scripted responses",
  "No memory of prior messages",
  "Generic answers for every patient",
  "Can't handle complex or emotional questions",
  "Low engagement and high drop-off",
  "Not built for treatment-specific inquiries",
];

const NASEEM_WINS = [
  "Context-aware, natural flow",
  "Remembers full conversation thread",
  "Treatment-specific answers",
  "Handles objections and nuance calmly",
  "Guides patients toward consultation",
  "Human-like pacing and tone",
];

const CLINIC_FOCUS = [
  { icon: Scissors, title: "Hair Transplant Inquiries" },
  { icon: Stethoscope, title: "Rhinoplasty & Cosmetic Surgery" },
  { icon: Shield, title: "Recovery & Aftercare Questions" },
  { icon: Globe, title: "International Patients" },
  { icon: Sparkles, title: "Pricing, Grafts & Procedure Info" },
];

export default function AboutPage() {
  return (
    <div
      className={`${inter.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <SiteHeader activePage="about" />

      <main>
        {/* Hero */}
        <section className={`${SECTION} pt-6 pb-8 sm:pt-8 sm:pb-10`}>
          <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span
                className="text-[10px] font-semibold tracking-[0.08em] uppercase"
                style={{ color: GREEN }}
              >
                Built Around Real Clinic Conversations
              </span>
              <h1 className="mt-2 text-[26px] sm:text-[30px] lg:text-[34px] font-medium leading-[1.28] tracking-[-0.02em]">
                We design conversational systems for{" "}
                <span style={{ color: GREEN }}>aesthetic clinics.</span>
              </h1>
              <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.65] text-[#555] max-w-lg mx-auto lg:mx-0">
                From the first WhatsApp message to consultation booking — we build systems that
                handle inquiries naturally, remember context, and keep patient movement consistent.
              </p>
              <div
                className="mt-5 rounded-xl border px-4 py-3 flex items-start gap-3 max-w-md mx-auto lg:mx-0 text-left"
                style={{ borderColor: BORDER, backgroundColor: "#fff" }}
              >
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GREEN }} strokeWidth={2.5} />
                <p className="text-[12px] leading-relaxed text-[#666]">
                  Built around real conversations. Designed for real results.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ConversationArchitecture />
            </div>
          </div>
        </section>

        {/* Problem we saw */}
        <section className={`${SECTION} ${SECTION_Y} border-t`} style={{ borderColor: BORDER }}>
          <div className="mx-auto max-w-[1100px] text-center mb-8">
            <h2 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em]">
              The problem we saw
            </h2>
            <p className="mt-2 text-[14px] text-[#555] max-w-xl mx-auto">
              Clinics lose potential patients every day because of gaps in conversation handling.
            </p>
          </div>
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROBLEM_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
                style={{ borderColor: BORDER }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${GREEN}12`, color: GREEN }}
                >
                  <card.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-semibold text-[#111]">{card.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-[#555]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why we exist */}
        <section className={`${SECTION} ${SECTION_Y}`}>
          <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em]">
                Why NaseemLabs exists
              </h2>
              <p className="mt-4 text-[14px] sm:text-[15px] leading-[1.65] text-[#555]">
                Most clinic automation still feels like a bot — rigid scripts, forgotten context,
                and replies that don&apos;t match how patients actually think before a procedure.
              </p>
              <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.65] text-[#555]">
                Patients need trust before they book. A consultation rarely happens from one
                message — it happens through a conversation that builds clarity and confidence.
              </p>
              <p className="mt-4 text-[14px] font-medium" style={{ color: GREEN }}>
                We built a conversational system that feels human, understands context, and moves
                patients forward.
              </p>
            </div>
            <div
              className="rounded-2xl border p-6 sm:p-8"
              style={{ borderColor: `${GREEN}25`, backgroundColor: `${GREEN}08` }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-40" style={{ color: GREEN }} strokeWidth={1} />
              <p className="text-[16px] sm:text-[18px] font-medium leading-[1.5] text-[#222] italic">
                A conversation isn&apos;t just about replying. It&apos;s about understanding,
                building trust, and guiding the patient towards the right next step.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className={`${SECTION} ${SECTION_Y} border-t`} style={{ borderColor: BORDER }}>
          <div className="mx-auto max-w-[1100px] text-center mb-8">
            <h2 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em]">
              What makes our system different
            </h2>
          </div>
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch">
            <div
              className="rounded-2xl border p-5 sm:p-6"
              style={{ borderColor: BORDER, backgroundColor: "rgba(254,242,242,0.5)" }}
            >
              <h3 className="text-[15px] font-semibold text-[#111] mb-4">
                Regular Bots & Scripted Systems
              </h3>
              <ul className="space-y-2.5">
                {BOT_FAILS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-[#555]">
                    <X className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center py-2 md:py-0">
              <span
                className="w-10 h-10 rounded-full border flex items-center justify-center text-[12px] font-bold text-[#999] bg-white"
                style={{ borderColor: BORDER }}
              >
                VS
              </span>
            </div>
            <div
              className="rounded-2xl border p-5 sm:p-6"
              style={{ borderColor: `${GREEN}30`, backgroundColor: `${GREEN}06` }}
            >
              <h3 className="text-[15px] font-semibold mb-4">
                <span style={{ color: GREEN }}>NaseemLabs</span> Conversational System
              </h3>
              <ul className="space-y-2.5">
                {NASEEM_WINS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-[#555]">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GREEN }} strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Built for aesthetic clinics */}
        <section className={`${SECTION} ${SECTION_Y}`}>
          <div className="mx-auto max-w-[1100px] text-center mb-8">
            <h2 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em]">
              Built for aesthetic clinics
            </h2>
            <p className="mt-2 text-[14px] text-[#555]">
              Operational specialization — not generic chatbot logic.
            </p>
          </div>
          <div className="mx-auto max-w-[1100px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {CLINIC_FOCUS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border bg-white p-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                style={{ borderColor: BORDER }}
              >
                <item.icon className="w-5 h-5 mx-auto mb-2" style={{ color: GREEN }} strokeWidth={1.5} />
                <p className="text-[11px] sm:text-[12px] font-medium text-[#333] leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Operator — minimal */}
        <section className={`${SECTION} pb-8 sm:pb-10`}>
          <div
            className="mx-auto max-w-[1100px] rounded-2xl border p-5 sm:p-6 lg:p-8"
            style={{ borderColor: BORDER, backgroundColor: "rgba(0,0,0,0.02)" }}
          >
            <div className="grid lg:grid-cols-[1.2fr_2fr] gap-6 lg:gap-8 items-start">
              <div className="flex gap-3">
                <Users className="w-5 h-5 shrink-0 mt-0.5" style={{ color: GREEN }} strokeWidth={1.5} />
                <div>
                  <h3 className="text-[15px] font-semibold text-[#111]">
                    Built by operators, not just engineers
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[#555]">
                    NaseemLabs is a systems-focused company building conversational infrastructure
                    for modern aesthetic clinics. We work closely with how inquiries actually
                    arrive — not how a slide deck assumes they do.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x" style={{ borderColor: BORDER }}>
                {[
                  { stat: "100%", label: "Focused on aesthetic clinics" },
                  { stat: "Built for", label: "Real conversations, not scripts" },
                  { stat: "Operational", label: "Systems that improve clinic performance" },
                ].map((col) => (
                  <div key={col.label} className="sm:px-4 text-center sm:text-left">
                    <p className="text-[18px] font-semibold" style={{ color: GREEN }}>
                      {col.stat}
                    </p>
                    <p className="mt-1 text-[12px] text-[#555] leading-snug">{col.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${SECTION} pb-8 sm:pb-10`}>
          <div
            className="mx-auto max-w-[1100px] rounded-2xl px-5 sm:px-8 py-8 sm:py-10 text-center"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1e241c 100%)",
            }}
          >
            <h2 className="text-[20px] sm:text-[24px] font-medium text-white tracking-[-0.02em]">
              See how conversations move patients forward.
            </h2>
            <p className="mt-2 text-[13px] sm:text-[14px] text-[#a3a3a3] max-w-md mx-auto">
              Explore the demo and experience the difference in real patient inquiries.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-center">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[13px] font-medium bg-white text-[#111] transition-opacity hover:opacity-95"
              >
                Explore Demo
              </Link>
              <WhatsAppLink
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium text-white transition-opacity hover:opacity-90 min-h-[44px]"
                style={{ backgroundColor: GREEN }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat on WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
