import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppIcon from "@/components/whatsapp-icon";
import WhatsAppLink from "@/components/whatsapp-link";
import { Inter } from "next/font/google";
import { DEMO_PATH } from "@/lib/site-config";
import {
  BarChart3,
  Check,
  ChevronLeft,
  Clock,
  HelpCircle,
  Mic,
  Moon,
  Paperclip,
  PhoneOff,
  Smile,
  TrendingDown,
  User,
  Users,
  Zap,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const GREEN = "#16a34a";
const BG = "#f7f7f5";
const TEXT = "#111111";
const WA_GREEN = "#dcf8c6";
const CHAT_BG = "#efeae2";
const BORDER = "rgba(0,0,0,0.06)";

const SECTION = "px-4 sm:px-6 lg:px-8";
const SECTION_Y = "py-9 sm:py-11 lg:py-14";

const H2 = "text-[21px] sm:text-[25px] lg:text-[27px] font-medium tracking-[-0.02em] leading-[1.3]";
const BODY = "text-[14px] sm:text-[15px] leading-[1.65] text-[#555]";
const BTN_SECONDARY =
  "inline-flex w-full sm:w-auto max-w-full items-center justify-center px-4 py-2.5 rounded-full text-[13px] font-medium border bg-white transition-colors hover:bg-[#fafafa]";

function WaTicks() {
  return (
    <span className="inline-flex ml-0.5 shrink-0" aria-hidden>
      <svg width="14" height="10" viewBox="0 0 16 11" className="text-[#53bdeb]">
        <path
          fill="currentColor"
          d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-5.19 6.76-2.226-2.226a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l2.75 2.75a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l5.483-7.15a.457.457 0 0 0-.094-.617zm3.23 0a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-7.34 9.57-1.12-1.12a.463.463 0 0 0-.336-.14.47.47 0 0 0-.347.147.457.457 0 0 0 .102.659l1.644 1.644a.46.46 0 0 0 .347.14.47.47 0 0 0 .336-.178l7.633-9.97a.457.457 0 0 0-.094-.617z"
        />
      </svg>
    </span>
  );
}

function VerifiedBadge() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" className="shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="10" fill={GREEN} />
      <path fill="#fff" d="M10.5 14.2 7.8 11.5l-1.1 1.1 3.8 3.8 7.5-7.5-1.1-1.1-6.4 6.4z" />
    </svg>
  );
}

type BubbleProps = {
  side: "left" | "right";
  time: string;
  ticks?: boolean;
  children: React.ReactNode;
};

function Bubble({ side, time, ticks, children }: BubbleProps) {
  const isRight = side === "right";
  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"} mb-[3px] w-full`}>
      <div
        className={`relative max-w-[min(88%,240px)] px-[9px] py-[5px] text-[11.5px] sm:text-[12px] leading-[16px] shadow-[0_1px_0.5px_rgba(0,0,0,0.06)] break-words ${
          isRight
            ? "rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-sm"
            : "rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-sm bg-white"
        }`}
        style={{ backgroundColor: isRight ? WA_GREEN : "#fff", color: "#111b21" }}
      >
        <div className="whitespace-pre-wrap pr-11">{children}</div>
        <span className="absolute bottom-[3px] right-[6px] flex items-center gap-[2px] text-[9.5px] text-[#667781] leading-none">
          {time}
          {ticks && <WaTicks />}
        </span>
      </div>
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="flex items-center gap-2 bg-[#f0f2f5] border-b border-black/[0.06] px-2.5 py-1.5 shrink-0">
      <ChevronLeft className="w-4 h-4 text-[#54656f] shrink-0" strokeWidth={2} />
      <div className="w-8 h-8 rounded-full bg-[#dfe5e7] flex items-center justify-center text-[9px] font-semibold text-[#54656f] shrink-0">
        HT
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <span className="font-medium text-[12px] text-[#111b21] truncate">Hair Transplant Clinic</span>
          <VerifiedBadge />
        </div>
        <span className="text-[10px] text-[#667781]">online</span>
      </div>
    </div>
  );
}

function ChatInputBar() {
  return (
    <div className="flex items-center gap-1 px-1.5 sm:px-2 py-1.5 bg-[#f0f2f5] border-t border-black/[0.06] shrink-0 min-w-0">
      <button type="button" className="p-0.5 text-[#54656f] shrink-0" aria-label="Attach">
        <Paperclip className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
      </button>
      <div className="flex-1 flex items-center gap-1.5 min-w-0 bg-white rounded-full px-2.5 sm:px-3 py-[6px] sm:py-[7px] shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <Smile className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-[#54656f] shrink-0" strokeWidth={1.75} />
        <span className="text-[11px] sm:text-[12px] text-[#667781] truncate">Type a message</span>
      </div>
      <button type="button" className="p-0.5 text-[#54656f] shrink-0" aria-label="Voice message">
        <Mic className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
      </button>
      <button
        type="button"
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: GREEN }}
        aria-label="Send"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden>
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </button>
    </div>
  );
}

function HeroPhone() {
  return (
    <div className="relative mx-auto w-[min(100%,268px)] sm:w-[min(100%,288px)] lg:w-[min(100%,304px)] px-1">
      <div
        className="relative rounded-[42px] p-[6px] shadow-[0_18px_36px_-12px_rgba(0,0,0,0.14)]"
        style={{ background: "linear-gradient(160deg, #1c1c1c 0%, #0c0c0c 100%)" }}
      >
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[84px] h-[22px] bg-black rounded-full z-10" />
        <div className="relative overflow-hidden rounded-[36px] bg-black flex flex-col w-full">
          <div className="bg-[#f0f2f5] pt-5 flex flex-col w-full min-w-0">
            <ChatHeader />
            <div
              className="px-2 py-2 overflow-hidden w-full min-w-0"
              style={{
                backgroundColor: CHAT_BG,
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d9d0c3' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            >
              <Bubble side="left" time="9:41 PM">
                Hi, I want to know hair transplant cost.
              </Bubble>
              <Bubble side="right" time="9:41 PM" ticks>
                {`Hi 👋\nThanks for reaching out!\nCost depends on grafts required.\nCan you share the area photos?`}
              </Bubble>
              <Bubble side="left" time="9:42 PM">
                Okay, front side mainly.
              </Bubble>
              <Bubble side="right" time="9:42 PM" ticks>
                {`Usually for front hairline,\n1800 - 2500 grafts are needed.\nRough idea after photos.`}
              </Bubble>
              <Bubble side="left" time="9:43 PM">
                Thanks!
              </Bubble>
            </div>
            <ChatInputBar />
          </div>
        </div>
      </div>
    </div>
  );
}

type MiniChatProps = {
  messages: { side: "left" | "right"; text: string; time: string; ticks?: boolean }[];
  label: string;
};

function MiniChatCard({ messages, label }: MiniChatProps) {
  return (
    <div
      className="flex flex-col rounded-xl border bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] w-full min-w-0"
      style={{ borderColor: BORDER }}
    >
      <div className="flex items-center gap-2 px-2.5 py-1.5 border-b" style={{ borderColor: BORDER }}>
        <div className="w-6 h-6 rounded-full bg-[#e9edef] flex items-center justify-center text-[9px] font-medium text-[#54656f]">
          P
        </div>
        <span className="text-[11px] font-medium text-[#111b21]">Patient</span>
      </div>
      <div className="px-2 py-2 min-h-[120px]" style={{ backgroundColor: CHAT_BG }}>
        {messages.map((m, i) => (
          <div key={i} className={`flex mb-1 ${m.side === "right" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[min(92%,100%)] px-2 py-1 text-[10px] sm:text-[10.5px] leading-[13px] relative break-words ${
                m.side === "right"
                  ? "rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-sm"
                  : "rounded-tl-md rounded-tr-md rounded-br-md rounded-bl-sm bg-white"
              }`}
              style={{ backgroundColor: m.side === "right" ? WA_GREEN : "#fff", color: "#111b21" }}
            >
              <span className="pr-9 block whitespace-pre-wrap">{m.text}</span>
              <span className="absolute bottom-0.5 right-1 text-[7.5px] text-[#667781] flex items-center gap-0.5">
                {m.time}
                {m.ticks && <WaTicks />}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex items-center gap-1 px-2.5 py-1.5 border-t text-[10px] font-medium"
        style={{ borderColor: BORDER, color: GREEN }}
      >
        <Check className="w-3 h-3" strokeWidth={2.5} />
        {label}
      </div>
    </div>
  );
}

function CtaVisualPanel() {
  return (
    <div
      className="relative h-[180px] sm:h-[220px] md:h-full md:min-h-[240px] overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #1e1e1c 0%, #2a2a28 45%, #1a221c 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute top-[18%] left-[12%] w-[42%] rounded-lg rounded-bl-sm bg-white/10 px-2.5 py-2 backdrop-blur-[1px]" />
      <div
        className="absolute top-[38%] right-[10%] w-[48%] rounded-lg rounded-br-sm px-2.5 py-2"
        style={{ backgroundColor: "rgba(220,248,198,0.12)" }}
      />
      <div className="absolute bottom-[22%] left-[18%] w-[36%] rounded-lg rounded-bl-sm bg-white/8 px-2 py-1.5" />
      <div
        className="absolute bottom-[12%] right-[14%] w-[40%] rounded-lg rounded-br-sm px-2 py-1.5"
        style={{ backgroundColor: "rgba(220,248,198,0.1)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 40%, rgba(22,163,74,0.14) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

function BenefitRow({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-lg border flex items-center justify-center shrink-0"
        style={{ borderColor: BORDER, color: GREEN }}
      >
        {icon}
      </div>
      <span className="text-[14px] font-medium text-[#111]">{title}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: BG, color: TEXT }}>
      <SiteHeader activePage="home" />

      <main className="mx-auto max-w-[1100px]">
        {/* Hero */}
        <section id="home" className={`${SECTION} pt-7 pb-10 sm:pt-9 sm:pb-12 scroll-mt-24`}>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1 space-y-0">
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-[0.06em] border mb-5"
                style={{ borderColor: `${GREEN}50`, color: GREEN }}
              >
                BUILT FOR HAIR TRANSPLANT CLINICS
              </span>

              <h1 className="text-[24px] sm:text-[29px] lg:text-[33px] font-medium leading-[1.28] tracking-[-0.02em] max-w-xl mx-auto lg:mx-0">
                Hair transplant patient inquiries —{" "}
                <span style={{ color: GREEN }}>handled automatically</span> on WhatsApp.
              </h1>

              <p className={`mt-4 ${BODY} max-w-md mx-auto lg:mx-0`}>
                After-hours replies, cost questions, graft inquiries, consultation movement — handled
                naturally without robotic scripts.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start max-w-sm sm:max-w-none mx-auto lg:mx-0">
                <Link
                  href={DEMO_PATH}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-3 rounded-full text-[13px] font-medium text-white transition-opacity hover:opacity-90 min-h-[44px]"
                  style={{ backgroundColor: GREEN }}
                >
                  See Real Conversations
                </Link>
                <WhatsAppLink
                  className={`${BTN_SECONDARY} gap-2 min-h-[44px] py-3`}
                  style={{ borderColor: BORDER, color: TEXT }}
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  Chat on WhatsApp
                </WhatsAppLink>
              </div>

              <p className="mt-5 flex items-center justify-center lg:justify-start gap-1.5 text-[12px] leading-relaxed text-[#555]">
                <Check className="w-3.5 h-3.5 shrink-0" style={{ color: GREEN }} strokeWidth={2.5} />
                Built specifically for hair transplant clinics
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end py-2 sm:py-0">
              <HeroPhone />
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className={`${SECTION} ${SECTION_Y} border-t`} style={{ borderColor: BORDER }}>
          <h2 className={`text-center ${H2} px-2`}>
            Most clinic inquiries <span style={{ color: GREEN }}>never</span> become consultations.
          </h2>

          <div className="mt-7 sm:mt-8 grid grid-cols-1 gap-3 max-w-[280px] mx-auto sm:max-w-none sm:grid-cols-2 sm:gap-3 lg:grid-cols-5">
            {[
              { icon: <Clock className="w-5 h-5" strokeWidth={1.5} />, title: "Slow WhatsApp replies" },
              { icon: <PhoneOff className="w-5 h-5" strokeWidth={1.5} />, title: "Missed late-night inquiries" },
              { icon: <HelpCircle className="w-5 h-5" strokeWidth={1.5} />, title: "Repetitive patient questions" },
              { icon: <TrendingDown className="w-5 h-5" strokeWidth={1.5} />, title: "Consultation drop-offs" },
              { icon: <User className="w-5 h-5" strokeWidth={1.5} />, title: "Staff time wasted on basic queries" },
            ].map((card, idx) => (
              <div
                key={card.title}
                className={`flex flex-col items-center text-center p-3.5 sm:p-4 rounded-xl border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] ${
                  idx === 4 ? "sm:col-span-2 sm:max-w-[240px] sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0" : ""
                }`}
                style={{ borderColor: BORDER }}
              >
                <div className="mb-2" style={{ color: GREEN }}>
                  {card.icon}
                </div>
                <p className="text-[12px] sm:text-[13px] font-medium leading-snug text-[#333]">{card.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real Conversations */}
        <section id="demo" className={`${SECTION} ${SECTION_Y} scroll-mt-24`}>
          <div className="grid lg:grid-cols-[0.9fr_1.5fr] gap-8 lg:gap-10 items-start">
            <div className="text-center lg:text-left">
              <span className="text-[10px] font-medium tracking-[0.1em]" style={{ color: GREEN }}>
                REAL CONVERSATIONS
              </span>
              <h2 className={`mt-3 ${H2}`}>Natural conversations that build trust.</h2>
              <p className={`mt-3 ${BODY} max-w-sm mx-auto lg:mx-0`}>
                Real patient questions answered the way your front desk would — clear, calm, and
                specific to hair transplant inquiries.
              </p>
              <Link
                href={DEMO_PATH}
                className={`mt-5 ${BTN_SECONDARY} min-h-[44px]`}
                style={{ borderColor: BORDER, color: TEXT }}
              >
                View More Examples
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3 min-w-0">
              <MiniChatCard
                label="Qualification"
                messages={[
                  { side: "left", text: "How many grafts for crown area?", time: "8:12 PM" },
                  {
                    side: "right",
                    text: "Usually 2000-2800 depending on density. Photos help estimate.",
                    time: "8:13 PM",
                    ticks: true,
                  },
                ]}
              />
              <MiniChatCard
                label="Trust Building"
                messages={[
                  { side: "left", text: "Is the procedure painful?", time: "7:45 PM" },
                  {
                    side: "right",
                    text: "Local anesthesia is used. Most patients describe mild pressure only.",
                    time: "7:46 PM",
                    ticks: true,
                  },
                ]}
              />
              <MiniChatCard
                label="Consultation Booking"
                messages={[
                  { side: "left", text: "Are you available this weekend?", time: "6:20 PM" },
                  {
                    side: "right",
                    text: "Yes, Saturday 11 AM slot is open. Should I book it?",
                    time: "6:21 PM",
                    ticks: true,
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className={`${SECTION} ${SECTION_Y} border-t scroll-mt-24`} style={{ borderColor: BORDER }}>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <h2 className={`${H2} text-center md:text-left`}>What clinics actually need.</h2>
              <div className="mt-6 space-y-4">
                <BenefitRow icon={<Zap className="w-4 h-4" strokeWidth={1.5} />} title="Faster patient replies" />
                <BenefitRow icon={<Moon className="w-4 h-4" strokeWidth={1.5} />} title="After-hours inquiry handling" />
                <BenefitRow icon={<BarChart3 className="w-4 h-4" strokeWidth={1.5} />} title="Reduced lead leakage" />
                <BenefitRow icon={<Users className="w-4 h-4" strokeWidth={1.5} />} title="More consistent follow-up" />
                <BenefitRow icon={<Clock className="w-4 h-4" strokeWidth={1.5} />} title="Smoother staff workflow" />
              </div>
            </div>

            <div className="rounded-xl border p-5 sm:p-6" style={{ borderColor: BORDER, backgroundColor: "rgba(0,0,0,0.015)" }}>
              <span className="text-[10px] font-medium tracking-[0.1em]" style={{ color: GREEN }}>
                WHY IT&apos;S DIFFERENT
              </span>
              <h2 className={`mt-2 ${H2}`}>Not a rigid scripted bot.</h2>
              <ul className="mt-5 space-y-3.5">
                {[
                  "Remembers conversation context",
                  "Handles multilingual chats",
                  "Built specifically for hair transplant inquiries",
                  "Designed around real patient behavior",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#444]">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: GREEN }} strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`${SECTION} pb-8 sm:pb-10`}>
          <div
            className="rounded-2xl border overflow-hidden grid md:grid-cols-2 shadow-[0_2px_16px_rgba(0,0,0,0.05)]"
            style={{ borderColor: BORDER, backgroundColor: "#f0efeb" }}
          >
            <CtaVisualPanel />

            <div className="p-6 sm:p-8 lg:p-9 flex flex-col justify-center text-center md:text-left">
              <h2 className={H2}>See how it handles real patient inquiries.</h2>
              <p className={`mt-3 ${BODY}`}>Book a demo or chat with us on WhatsApp.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-2.5 justify-center md:justify-start max-w-sm sm:max-w-none mx-auto md:mx-0">
                <WhatsAppLink
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-3 rounded-full text-[13px] font-medium text-white transition-opacity hover:opacity-90 min-h-[44px]"
                  style={{ backgroundColor: GREEN }}
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  Chat on WhatsApp
                </WhatsAppLink>
                <Link
                  href={DEMO_PATH}
                  className={`${BTN_SECONDARY} min-h-[44px] py-3`}
                  style={{ borderColor: BORDER, color: TEXT }}
                >
                  Explore Live Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
