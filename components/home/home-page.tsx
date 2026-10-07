import Image from "next/image";
import Link from "next/link";
import {
  ClipboardList,
  Eye,
  FileText,
  NotebookPen,
  RefreshCw,
  UserRound,
} from "lucide-react";
import HomeHeader from "@/components/home/home-header";
import { HOME_IMAGES } from "@/components/home/home-images";
import PreetChat, { PhoneFrame } from "@/components/home/preet-chat";
import SiteFooter from "@/components/site-footer";
import WhatsAppIcon from "@/components/whatsapp-icon";
import WhatsAppLink from "@/components/whatsapp-link";
import { DEMO_PATH } from "@/lib/site-config";

const FOREST = "#1a3c34";
const BORDER = "rgba(26,28,24,0.10)";
const SECTION = "px-4 sm:px-6 lg:px-8";
const MAX = "mx-auto max-w-[1180px]";

const STEPS = [
  { n: "1", title: "Understand", body: "Patient's situation, goals and questions" },
  { n: "2", title: "Identify", body: "Concerns, objections or missing information" },
  { n: "3", title: "Explain", body: "Give clear WHY + HOW based on your clinic information" },
  { n: "4", title: "Collect", body: "Gather required details and photos" },
  { n: "5", title: "Progress", body: "Offer consultation at the right time" },
  { n: "6", title: "Handover", body: "Your team takes over when the patient is ready" },
] as const;

const CONVO_STEPS = [
  "Initial inquiry",
  "Information collection",
  "Concern handling",
  "Image assessment",
  "Pricing discussion",
  "Consultation offer",
  "Consultation accepted",
] as const;

const PROBLEM_CARDS = [
  {
    src: HOME_IMAGES.doctor,
    title: "Doctor in procedure",
    body: "Limited availability for inquiries",
    alt: "Surgeon performing a hair-transplant procedure",
  },
  {
    src: HOME_IMAGES.reception,
    title: "Reception busy",
    body: "Handling in-clinic patients",
    alt: "Receptionist handling clinic calls and paperwork",
  },
  {
    src: HOME_IMAGES.inquiries,
    title: "Inquiries at all hours",
    body: "Patients message anytime",
    alt: "Patient sending WhatsApp inquiries late at night",
  },
  {
    src: HOME_IMAGES.concerns,
    title: "Patients have concerns",
    body: "Price, pain, results, trust, timing",
    alt: "Patient discussing hair-loss concerns in consultation",
  },
] as const;

const WORKFLOW = [
  {
    icon: FileText,
    title: "Uses your clinic information and guidelines",
  },
  {
    icon: RefreshCw,
    title: "You can update responses and workflow",
  },
  {
    icon: Eye,
    title: "You see all conversations and summaries",
  },
  {
    icon: NotebookPen,
    title: "Add internal notes for your team",
  },
  {
    icon: UserRound,
    title: "Hand over to human staff anytime",
  },
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#1a3c34]/80">
      {children}
    </p>
  );
}

export default function HomePage({ serifClassName }: { serifClassName: string }) {
  return (
    <div className="min-h-screen antialiased overflow-x-hidden bg-[#f7f6f2] text-[#121212]">
      <HomeHeader />

      <main className="min-w-0">
        {/* Hero */}
        <section className={`${SECTION} pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10`}>
          <div className={`${MAX} grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-center min-w-0`}>
            <div className="min-w-0 max-w-[560px]">
              <h1
                className={`${serifClassName} text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.08] tracking-[-0.03em] text-[#111]`}
              >
                Every serious
                <br />
                patient inquiry
                <br />
                deserves a fair chance
                <br />
                to reach consultation.
              </h1>
              <p className="mt-5 sm:mt-6 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#555] max-w-[480px]">
                FolliCore handles your hair-transplant patient inquiries on WhatsApp — understands their
                situation, answers questions, handles concerns, collects information and moves them
                towards consultation, while keeping your team in control.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center max-w-full">
                <WhatsAppLink className="inline-flex w-full sm:w-auto items-center justify-center gap-2 min-h-[46px] px-5 py-3 rounded-full bg-[#1a3c34] text-white text-[14px] font-medium hover:bg-[#14302a] transition-colors">
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  Test FolliCore Yourself →
                </WhatsAppLink>
                <Link
                  href="/how-it-works"
                  className="inline-flex w-full sm:w-auto items-center justify-center min-h-[46px] px-4 py-3 text-[14px] font-medium text-[#1a3c34] underline underline-offset-[6px] decoration-[#1a3c34]/30 hover:decoration-[#1a3c34]"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-x-6 sm:gap-y-2 text-[12.5px] text-[#6a6a64]">
                {[
                  "Works on your existing WhatsApp",
                  "Built for hair-transplant clinics",
                  "You stay in control",
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a3c34] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-w-0 w-full">
              <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-square w-full overflow-hidden rounded-none">
                <Image
                  src={HOME_IMAGES.hero}
                  alt="Clinic reception with a patient speaking to a receptionist"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Real Problem */}
        <section className={`${SECTION} pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-10`}>
          <div className={`${MAX} grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start min-w-0`}>
            <div className="min-w-0 max-w-[520px]">
              <Eyebrow>The Real Problem</Eyebrow>
              <h2
                className={`${serifClassName} mt-3 text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.12] tracking-[-0.03em]`}
              >
                Your clinic already
                <br />
                receives inquiries.
                <br />
                The challenge is what
                <br />
                happens after they arrive.
              </h2>
              <p className="mt-5 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#555] max-w-[460px]">
                Doctors are in procedures. Receptionists are handling patients. Inquiries come at all
                hours. Patients ask repetitive questions. Some have concerns, objections or need more
                time. Many inquiries lose momentum before reaching consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0">
              {PROBLEM_CARDS.map((card) => (
                <article
                  key={card.title}
                  className="relative overflow-hidden rounded-[6px] min-h-[190px] sm:min-h-[210px] aspect-[5/4] sm:aspect-auto"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 28vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-white">
                    <h3 className="text-[14.5px] font-medium tracking-[-0.01em]">{card.title}</h3>
                    <p className="mt-0.5 text-[12px] text-white/80">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className={`${SECTION} pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20`}>
          <div className={`${MAX} text-center min-w-0`}>
            <Eyebrow>The Solution</Eyebrow>
            <h2
              className={`${serifClassName} mt-3 text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.03em] max-w-[720px] mx-auto`}
            >
              A structured path from first message to consultation.
            </h2>
            <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#555] max-w-[640px] mx-auto">
              FolliCore follows a clear process to keep the conversation moving, handle concerns and
              progress the patient towards consultation.
            </p>

            <ol className="mt-10 lg:mt-12 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-3 text-left">
              <div
                className="hidden lg:block absolute top-[22px] left-[7%] right-[7%] h-px bg-[#1a3c34]/20"
                aria-hidden
              />
              {STEPS.map((step) => (
                <li
                  key={step.n}
                  className="relative rounded-[8px] border bg-white/70 px-4 py-4 min-w-0"
                  style={{ borderColor: BORDER }}
                >
                  <span
                    className="relative z-[1] flex w-8 h-8 items-center justify-center rounded-full text-[12px] font-semibold text-white"
                    style={{ backgroundColor: FOREST }}
                  >
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-[15px] font-semibold tracking-[-0.02em]">{step.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-[1.55] text-[#666]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Real Conversation */}
        <section className={`${SECTION} py-12 sm:py-16 lg:py-20`}>
          <div className={MAX}>
            <div className="max-w-[640px]">
              <Eyebrow>Real Conversation Example</Eyebrow>
              <h2
                className={`${serifClassName} mt-3 text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.12] tracking-[-0.03em]`}
              >
                From a simple question
                <br />
                to a booked consultation.
              </h2>
              <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#555]">
                See how a typical patient inquiry progresses step by step.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.05fr_0.95fr] gap-6 lg:gap-8 items-start min-w-0">
              <div
                className="rounded-[10px] border bg-white p-4 sm:p-5 min-w-0"
                style={{ borderColor: BORDER }}
              >
                <ol className="relative space-y-0">
                  <div
                    className="absolute left-[11px] top-3 bottom-3 w-px bg-[#1a3c34]/15"
                    aria-hidden
                  />
                  {CONVO_STEPS.map((label, i) => (
                    <li key={label} className="relative flex items-center gap-3 py-2.5">
                      <span
                        className="relative z-[1] flex w-[22px] h-[22px] items-center justify-center rounded-full text-[10px] font-semibold text-white shrink-0"
                        style={{ backgroundColor: FOREST }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-[13.5px] text-[#2a2a28]">{label}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex justify-center min-w-0">
                <div className="w-[min(100%,300px)]">
                  <PhoneFrame>
                    <PreetChat />
                  </PhoneFrame>
                </div>
              </div>

              <div
                className="rounded-[10px] border bg-white p-5 sm:p-6 min-w-0"
                style={{ borderColor: BORDER }}
              >
                <h3 className="text-[15.5px] font-semibold tracking-[-0.02em]">What&apos;s happening here?</h3>
                <ol className="mt-4 space-y-3.5">
                  {[
                    "FolliCore understands the patient's goal",
                    "Requests relevant information (photos)",
                    "Keeps the conversation natural",
                    "Prepares for assessment and accurate information",
                  ].map((item, i) => (
                    <li key={item} className="flex gap-3 text-[13.5px] leading-[1.5] text-[#444]">
                      <span
                        className="mt-0.5 flex w-5 h-5 items-center justify-center rounded-full text-[10px] font-semibold text-white shrink-0"
                        style={{ backgroundColor: FOREST }}
                      >
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Image Assessment */}
        <section className={`${SECTION} py-12 sm:py-16 lg:py-20`}>
          <div className={MAX}>
            <div className="max-w-[640px]">
              <Eyebrow>Image Assessment</Eyebrow>
              <h2
                className={`${serifClassName} mt-3 text-[26px] sm:text-[34px] lg:text-[38px] leading-[1.15] tracking-[-0.03em]`}
              >
                Turn patient photos into useful information.
              </h2>
              <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#555] max-w-[560px]">
                When a patient shares scalp photos, FolliCore can analyze them and provide preliminary
                information to help the patient understand their situation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-4 lg:gap-5 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 min-w-0">
                {[
                  { src: HOME_IMAGES.scalpTop, alt: "Top view of patient scalp" },
                  { src: HOME_IMAGES.scalpFront, alt: "Front view of patient hairline" },
                  { src: HOME_IMAGES.scalpSide, alt: "Side view of patient scalp" },
                ].map((img) => (
                  <div key={img.src} className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-[#e8e6e1]">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 22vw" />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 min-w-0">
                <div
                  className="rounded-[8px] border bg-white p-5 sm:p-6"
                  style={{ borderColor: BORDER }}
                >
                  <h3 className="text-[14.5px] font-semibold tracking-[-0.02em]">
                    Preliminary Assessment (Example)
                  </h3>
                  <dl className="mt-4 space-y-3 text-[13.5px]">
                    {[
                      ["Norwood Stage", "III"],
                      ["Estimated Grafts", "2,500 – 3,000"],
                      ["Estimated Price", "£4,000 – £6,000"],
                      ["Affected Areas", "Front + Mid Scalp"],
                      ["Donor Area", "Good coverage"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-4 border-b border-black/[0.05] pb-2.5">
                        <dt className="text-[#777]">{k}</dt>
                        <dd className="font-medium text-[#1a1a18] text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <aside
                  className="rounded-[8px] border p-4 sm:p-5 text-[12.5px] leading-[1.65] text-[#4a4a42]"
                  style={{ borderColor: "rgba(26,60,52,0.18)", backgroundColor: "#eef3ee" }}
                >
                  This is a preliminary assessment based on the provided photos.
                  <br />
                  <br />
                  The final assessment, exact graft count and pricing are provided by your qualified
                  doctor during a clinical consultation.
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Dashboard */}
        <section className={`${SECTION} py-12 sm:py-16 lg:py-20`}>
          <div className={`${MAX} grid lg:grid-cols-[0.78fr_1.22fr] gap-8 lg:gap-12 items-start min-w-0`}>
            <div className="min-w-0 max-w-[460px]">
              <Eyebrow>Clinic Dashboard</Eyebrow>
              <h2
                className={`${serifClassName} mt-3 text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.1] tracking-[-0.03em]`}
              >
                Less chat-scrolling.
                <br />
                More context. Faster handover.
              </h2>
              <p className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.7] text-[#555]">
                Your team gets the full conversation, an automatic summary, consultation status and
                internal notes — all in one place.
              </p>
              <Link
                href="/benefits"
                className="mt-7 inline-flex items-center justify-center min-h-[46px] px-5 py-3 rounded-full text-[14px] font-medium text-white"
                style={{ backgroundColor: FOREST }}
              >
                See the Clinic Dashboard →
              </Link>
            </div>

            <DashboardVisual />
          </div>
        </section>

        {/* Workflow */}
        <section className={`${SECTION} py-12 sm:py-16 lg:py-20`}>
          <div className={`${MAX} text-center min-w-0`}>
            <Eyebrow>You Stay In Control</Eyebrow>
            <h2
              className={`${serifClassName} mt-3 text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.03em]`}
            >
              Built for your clinic&apos;s workflow.
            </h2>
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {WORKFLOW.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[8px] border bg-white/80 px-5 py-6 text-left min-w-0"
                  style={{ borderColor: BORDER }}
                >
                  <card.icon className="w-5 h-5 text-[#1a3c34]" strokeWidth={1.5} />
                  <p className="mt-4 text-[14px] font-medium leading-[1.45] tracking-[-0.01em] text-[#1c1c1a]">
                    {card.title}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden min-h-[420px] sm:min-h-[460px] flex items-center">
          <Image
            src={HOME_IMAGES.hero}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0b1a16]/78" />
          <div className={`relative ${SECTION} w-full py-16 sm:py-20`}>
            <div className={`${MAX} text-center text-white max-w-[720px] mx-auto`}>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/70">
                Ready to see it in action?
              </p>
              <h2
                className={`${serifClassName} mt-4 text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.12] tracking-[-0.03em]`}
              >
                Test FolliCore with a real patient scenario.
              </h2>
              <p className="mt-4 text-[14.5px] sm:text-[16px] leading-[1.7] text-white/80 max-w-[540px] mx-auto">
                Ask the questions you actually ask. Be skeptical. Raise concerns. Share photos. See
                how the conversation progresses.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
                <WhatsAppLink className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 rounded-full bg-white text-[#1a3c34] text-[14px] font-medium hover:bg-[#f4f4f0] transition-colors">
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  Test FolliCore Yourself →
                </WhatsAppLink>
                <Link
                  href={DEMO_PATH}
                  className="inline-flex items-center justify-center min-h-[46px] px-5 py-3 rounded-full border border-white/35 text-white text-[14px] font-medium hover:bg-white/10 transition-colors"
                >
                  See a Complete Journey
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter maxWidthClass="max-w-[1180px]" />
    </div>
  );
}

function DashboardVisual() {
  return (
    <div
      className="rounded-[10px] border bg-white overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] min-w-0"
      style={{ borderColor: BORDER }}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-black/[0.06] bg-[#fafaf8]">
        <span className="text-[13px] font-semibold tracking-[-0.02em]">NaseemLabs</span>
        <span className="text-[11px] text-[#888]">Clinic workspace</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 min-w-0 divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
        <div className="p-3.5 min-w-0 bg-[#f7f4ee]">
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#888] mb-2">Conversation</p>
          <div className="space-y-2">
            <div className="rounded-md bg-white px-2.5 py-2 text-[11px] leading-[1.4] text-[#333] shadow-sm">
              I&apos;m thinking about a hair transplant. Can you tell me more?
            </div>
            <div className="rounded-md bg-[#dcf8c6] px-2.5 py-2 text-[11px] leading-[1.4] text-[#333] ml-4">
              Could you share photos from the front, top and sides?
            </div>
            <div className="grid grid-cols-3 gap-1 pt-1">
              {[HOME_IMAGES.scalpFront, HOME_IMAGES.scalpTop, HOME_IMAGES.scalpSide].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-[3px]">
                  <Image src={src} alt="" fill className="object-cover" sizes="70px" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-3.5 min-w-0">
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#888] mb-2">
            Conversation Summary
          </p>
          <p className="text-[13px] font-semibold">Ahmed Al-Rashid</p>
          <p className="mt-0.5 text-[11px] text-[#777]">Norwood III · Front + mid scalp</p>
          <ul className="mt-3 space-y-1.5 text-[11.5px] leading-[1.45] text-[#444]">
            <li>Interested in hair transplant</li>
            <li>Shared front, top and side photos</li>
            <li>Asked about grafts, cost and timing</li>
            <li>Consultation offered after photo review</li>
          </ul>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-[#eef3ee] text-[#1a3c34] px-2 py-0.5 text-[10px] font-medium">
              Photos received
            </span>
            <span className="rounded-full bg-[#eef3ee] text-[#1a3c34] px-2 py-0.5 text-[10px] font-medium">
              Ready for handover
            </span>
          </div>
        </div>

        <div className="p-3.5 min-w-0">
          <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#888] mb-2">
            Consultation
          </p>
          <p className="text-[12.5px] font-semibold text-[#1a3c34]">Offered · Pending confirmation</p>
          <p className="mt-1 text-[11.5px] text-[#666]">Saturday slot discussed with the patient.</p>
          <p className="mt-4 text-[10px] font-medium tracking-[0.12em] uppercase text-[#888]">
            Internal notes
          </p>
          <p className="mt-1.5 text-[11.5px] leading-[1.5] text-[#555]">
            Donor coverage looks good. Confirm graft estimate and pricing in clinic. Staff to take
            over once the patient confirms.
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#1a3c34]">
            <ClipboardList className="w-3.5 h-3.5" strokeWidth={1.75} />
            Staff handover ready
          </div>
        </div>
      </div>
    </div>
  );
}
