import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  Brain,
  Check,
  Globe,
  MessageCircle,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import DemoWorkspace from "@/components/demo/demo-workspace";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppLink from "@/components/whatsapp-link";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Live Demo — NaseemLabs",
  description:
    "Experience real hair transplant clinic conversations — premium conversational inquiry simulator.",
};

const GREEN = "#16a34a";
const BG = "#f7f7f5";
const TEXT = "#111111";
const BORDER = "rgba(0,0,0,0.06)";
const SECTION = "px-4 sm:px-6 lg:px-8";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const BENEFITS = [
  { icon: Brain, title: "Understands Context", desc: "Remembers what the patient already shared." },
  { icon: MessageCircle, title: "Human-like Replies", desc: "Natural pacing, not scripted blocks." },
  { icon: Target, title: "Clinic Specific", desc: "Built for hair transplant inquiry flow." },
  { icon: Globe, title: "Multilingual", desc: "Handles mixed-language patient messages." },
  { icon: Zap, title: "Smart Follow-ups", desc: "Keeps leads warm without pressure." },
  { icon: Sparkles, title: "Conversion Focused", desc: "Moves patients toward consultation." },
];

export default function DemoPage() {
  return (
    <div
      className={`${inter.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <SiteHeader activePage="demo" />

      <main>
        {/* Hero */}
        <section className={`${SECTION} pt-6 pb-6 sm:pt-8 sm:pb-8`}>
          <div className="mx-auto max-w-[1280px] grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div>
              <span
                className="text-[10px] font-semibold tracking-[0.1em] uppercase"
                style={{ color: GREEN }}
              >
                Live Demo
              </span>
              <h1 className="mt-2 text-[26px] sm:text-[30px] lg:text-[34px] font-medium leading-[1.25] tracking-[-0.02em]">
                See real conversations.{" "}
                <span style={{ color: GREEN }}>Feel the difference.</span>
              </h1>
              <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.65] text-[#555] max-w-lg">
                Explore how our conversational system handles real patient inquiries — naturally,
                intelligently, and effectively.
              </p>
              <div
                className="mt-5 rounded-xl border px-4 py-3 flex items-start gap-3 max-w-md"
                style={{ borderColor: BORDER, backgroundColor: "#fff" }}
              >
                <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GREEN }} strokeWidth={2.5} />
                <p className="text-[12px] leading-relaxed text-[#666]">
                  Type below or upload a scalp photo — responses use the same flow your clinic would
                  run on WhatsApp.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-2.5">
              {[
                { icon: MessageCircle, title: "Real Scenarios", desc: "Actual patient questions from clinics." },
                { icon: Brain, title: "Human-like Flow", desc: "Natural responses with context & memory." },
                { icon: Target, title: "Built for Results", desc: "Designed to move patients towards consultation." },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border bg-white px-3 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                  style={{ borderColor: BORDER }}
                >
                  <card.icon className="w-4 h-4 mb-2" style={{ color: GREEN }} strokeWidth={1.5} />
                  <p className="text-[12px] font-semibold text-[#111]">{card.title}</p>
                  <p className="text-[10px] text-[#888] mt-1 leading-snug">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DemoWorkspace />

        {/* Benefits */}
        <section className={`${SECTION} py-8 sm:py-10 border-t`} style={{ borderColor: BORDER }}>
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-[20px] sm:text-[24px] font-medium tracking-[-0.02em]">
              Not a bot. A conversational expert for your clinic.
            </h2>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border bg-white p-3 text-center shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                  style={{ borderColor: BORDER }}
                >
                  <b.icon className="w-4 h-4 mx-auto mb-2" style={{ color: GREEN }} strokeWidth={1.5} />
                  <p className="text-[11px] font-semibold text-[#111]">{b.title}</p>
                  <p className="text-[9px] text-[#888] mt-1 leading-snug">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`${SECTION} pb-8 sm:pb-10`}>
          <div
            className="mx-auto max-w-[1280px] rounded-2xl px-5 sm:px-8 py-6 sm:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1e241c 100%)",
            }}
          >
            <div className="text-center md:text-left">
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#4ade80]">
                Experience it yourself
              </span>
              <h2 className="mt-1.5 text-[20px] sm:text-[22px] font-medium text-white tracking-[-0.02em]">
                Try more conversations in real-time.
              </h2>
              <p className="mt-2 text-[13px] text-[#a3a3a3]">Switch scenarios and see how each inquiry type is handled.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center md:justify-end">
              <WhatsAppLink
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-[13px] font-medium text-white min-h-[44px]"
                style={{ backgroundColor: GREEN }}
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat on WhatsApp
              </WhatsAppLink>
              <a
                href="#demo-workspace"
                className="inline-flex items-center justify-center px-4 py-3 rounded-full text-[13px] font-medium bg-white text-[#111] min-h-[44px]"
              >
                Explore More Scenarios
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter maxWidthClass="max-w-[1280px]" />
    </div>
  );
}
