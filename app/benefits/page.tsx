import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  ArrowUpRight,
  Check,
  Globe,
  Moon,
  RefreshCw,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
  Brain,
  Clock,
  Lock,
  MessageCircle,
} from "lucide-react";
import HeroConversation from "@/components/benefits/hero-conversation";
import MiniMomentCard from "@/components/benefits/mini-moment-card";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppLink from "@/components/whatsapp-link";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Benefits — NaseemLabs",
  description:
    "Operational improvements hair transplant clinics experience with NaseemLabs conversational inquiry handling.",
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

const BENEFIT_CARDS = [
  {
    icon: Zap,
    title: "Faster Patient Replies",
    desc: "Patients get instant, natural responses 24/7 — even when your team is busy or the clinic is closed.",
  },
  {
    icon: Shield,
    title: "Reduced Inquiry Leakage",
    desc: "Every inquiry is captured, engaged and followed up — fewer conversations are lost.",
  },
  {
    icon: ArrowUpRight,
    title: "More Consultation Movement",
    desc: "Conversations are designed to build trust and naturally move patients towards consultation.",
  },
  {
    icon: Users,
    title: "Lower Staff Repetition",
    desc: "Repetitive graft, cost, recovery and procedure questions are handled automatically.",
  },
  {
    icon: Globe,
    title: "Better International Handling",
    desc: "Answers in multiple languages for travel, stay, recovery and consultation questions.",
  },
  {
    icon: RefreshCw,
    title: "Consistent Follow-up",
    desc: "Patients stay engaged with smart follow-ups instead of disappearing after the first message.",
  },
];

const WITHOUT_ITEMS = [
  "Delayed replies and missed opportunities",
  "Cold or generic scripted responses",
  "High workload on staff",
  "Patients drop off without follow-up",
  "Inconsistent handling across inquiries",
];

const WITH_ITEMS = [
  "Instant, natural and human-like replies",
  "Context-aware conversations",
  "Reduced workload & better efficiency",
  "Smart follow-ups that keep patients engaged",
  "Consistent handling across every inquiry",
];

const TRUST_ITEMS = [
  { icon: Brain, title: "Understands Context", desc: "Remembers prior messages in the thread." },
  { icon: Clock, title: "Human-like Pacing", desc: "Replies feel timed, not dumped at once." },
  { icon: Globe, title: "Multilingual Support", desc: "Mixed-language patients handled calmly." },
  { icon: Sparkles, title: "Clinic Specific", desc: "Built for hair transplant workflows." },
  { icon: Lock, title: "Privacy First", desc: "Designed around clinic data boundaries." },
];

const MOMENTS = [
  {
    icon: Moon,
    title: "Late Night Inquiry",
    patient: "Are you open now? I want to ask about hair transplant cost.",
    clinic: "Yes — I'm here. Share your area of concern and I can give a rough graft range.",
    outcome: "Never miss a patient, even at midnight.",
  },
  {
    icon: MessageCircle,
    title: "Nervous Patient",
    patient: "I'm scared about pain and visible scars.",
    clinic: "That's completely normal to ask. With FUE, scarring is minimal — most patients return to desk work in a few days.",
    outcome: "Trust builds before they book.",
  },
  {
    icon: Shield,
    title: "Pricing Question",
    patient: "What's the total cost for 2500 grafts?",
    clinic: "Cost depends on technique and density. Photos help us confirm — want to send front and top views?",
    outcome: "Clear pricing path without pressure.",
  },
  {
    icon: RefreshCw,
    title: "Recovery Concern",
    patient: "When can I go back to gym after surgery?",
    clinic: "Light activity usually after 2–3 weeks; heavy lifting after 4–6. Your surgeon will confirm on consult.",
    outcome: "Practical answers that reduce drop-off.",
  },
];

export default function BenefitsPage() {
  return (
    <div
      className={`${inter.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <SiteHeader activePage="benefits" />

      <main>
        {/* Hero */}
        <section className={`${SECTION} pt-6 pb-8 sm:pt-8 sm:pb-10`}>
          <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <span
                className="text-[10px] font-semibold tracking-[0.1em] uppercase"
                style={{ color: GREEN }}
              >
                Benefits
              </span>
              <h1 className="mt-2 text-[26px] sm:text-[30px] lg:text-[34px] font-medium leading-[1.28] tracking-[-0.02em]">
                What clinics actually <span style={{ color: GREEN }}>need.</span>
              </h1>
              <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.65] text-[#555] max-w-lg mx-auto lg:mx-0">
                Our conversational system is built to solve real operational challenges and move more
                patients from inquiry to consultation.
              </p>
              <div
                className="mt-5 rounded-xl border px-4 py-3 flex items-start gap-3 max-w-md mx-auto lg:mx-0 text-left"
                style={{ borderColor: BORDER, backgroundColor: "#fff" }}
              >
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GREEN }} strokeWidth={1.5} />
                <p className="text-[12px] leading-relaxed text-[#666]">
                  Built for hair transplant clinics. Focused on real conversations and real results.
                </p>
              </div>
            </div>
            <HeroConversation />
          </div>
        </section>

        {/* Benefits grid */}
        <section className={`${SECTION} ${SECTION_Y} border-t`} style={{ borderColor: BORDER }}>
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {BENEFIT_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
                style={{ borderColor: BORDER }}
              >
                <card.icon className="w-5 h-5 mb-4" style={{ color: GREEN }} strokeWidth={1.5} />
                <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#111] tracking-[-0.01em]">
                  {card.title}
                </h2>
                <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.6] text-[#555]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before vs After */}
        <section className={`${SECTION} ${SECTION_Y}`}>
          <div className="mx-auto max-w-[1100px] text-center mb-8 sm:mb-10">
            <h2 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em]">
              Before vs After NaseemLabs
            </h2>
            <p className="mt-2 text-[14px] text-[#555]">See the difference in how inquiries are handled.</p>
          </div>

          <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-stretch">
            <div
              className="rounded-2xl border bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              style={{ borderColor: BORDER }}
            >
              <h3 className="text-[16px] font-semibold mb-4">
                Without Conversational System{" "}
                <span className="font-medium text-[#888] block text-[13px] mt-0.5">(typical setup)</span>
              </h3>
              <ul className="space-y-3">
                {WITHOUT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#555]">
                    <X className="w-4 h-4 shrink-0 mt-0.5" style={{ color: RED }} strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex md:flex-col items-center justify-center py-2 md:py-0">
              <span
                className="w-10 h-10 rounded-full border flex items-center justify-center text-[12px] font-bold text-[#999] bg-[#fafafa]"
                style={{ borderColor: BORDER }}
              >
                VS
              </span>
            </div>

            <div
              className="rounded-2xl border bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              style={{ borderColor: BORDER }}
            >
              <h3 className="text-[16px] font-semibold mb-4">
                With <span style={{ color: GREEN }}>NaseemLabs</span>
              </h3>
              <ul className="space-y-3">
                {WITH_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[13px] text-[#555]">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GREEN }} strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Real Moments */}
        <section className={`${SECTION} ${SECTION_Y} border-t`} style={{ borderColor: BORDER }}>
          <div className="mx-auto max-w-[1100px] text-center mb-6 sm:mb-8">
            <h2 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em]">
              Real Moments. Real Impact.
            </h2>
            <p className="mt-2 text-[14px] text-[#555] max-w-lg mx-auto">
              How our system handles everyday patient conversations.
            </p>
          </div>

          <div className="mx-auto max-w-[1100px] flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 lg:gap-4">
            {MOMENTS.map((m) => (
              <div key={m.title} className="snap-center sm:snap-align-none min-w-[85%] sm:min-w-0">
                <MiniMomentCard {...m} />
              </div>
            ))}
          </div>
        </section>

        {/* Trust strip */}
        <section className={`${SECTION} ${SECTION_Y}`}>
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="text-[15px] sm:text-[16px] font-medium text-[#333] max-w-xl mx-auto">
              Built for real conversations. Designed for real clinics.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border bg-white px-3 py-4 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                  style={{ borderColor: BORDER }}
                >
                  <item.icon className="w-4 h-4 mx-auto mb-2" style={{ color: GREEN }} strokeWidth={1.5} />
                  <p className="text-[12px] font-semibold text-[#111]">{item.title}</p>
                  <p className="mt-1 text-[10px] text-[#888] leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${SECTION} pb-8 sm:pb-10`}>
          <div
            className="mx-auto max-w-[1100px] rounded-2xl px-5 sm:px-8 py-6 sm:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1e241c 100%)",
            }}
          >
            <div className="text-center md:text-left">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-white tracking-[-0.02em]">
                See the difference yourself.
              </h2>
              <p className="mt-2 text-[13px] sm:text-[14px] leading-relaxed text-[#a3a3a3] max-w-md mx-auto md:mx-0">
                Experience real conversations and see how we help clinics move more patients forward.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center md:justify-end shrink-0">
              <WhatsAppLink
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium text-white transition-opacity hover:opacity-90 min-h-[44px]"
                style={{ backgroundColor: GREEN }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat on WhatsApp
              </WhatsAppLink>
              <Link
                href="/demo"
                className="inline-flex w-full sm:w-auto items-center justify-center px-5 py-2.5 rounded-full text-[13px] font-medium bg-white text-[#111] transition-opacity hover:opacity-95"
              >
                Explore Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
