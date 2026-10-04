import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter, Newsreader } from "next/font/google";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppLink from "@/components/whatsapp-link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Clinic Workflow — NaseemLabs",
  description:
    "See how PREET moves hair restoration inquiries from conversation to consultation and clinic handover.",
};

const PAGE = "#f7f6f2";
const TEXT = "#111111";
const BORDER = "rgba(26,28,24,0.10)";

const steps = [
  ["01", "Patient Conversation", "Handled by PREET"],
  ["02", "Conversation Summary", "Key patient details"],
  ["03", "Consultation Opportunity", "Ready patients"],
  ["04", "Your Team Takes Over", "Full context"],
  ["05", "Follow-up", "Until closed"],
];

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.099-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckList({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2 text-[10px] leading-[1.45] ${
            dark ? "text-white/75" : "text-[#59615e]"
          }`}
        >
          <CheckCircle2
            className={`mt-[1px] h-3.5 w-3.5 shrink-0 ${
              dark ? "text-[#5de0c6]" : "text-[#087f6b]"
            }`}
            strokeWidth={2}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------ */
/* WhatsApp conversation visual */
/* ------------------------------------------------ */

function WhatsAppWindow() {
  return (
    <div className="w-full max-w-[430px] rounded-[9px] border border-black/10 bg-white p-2 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
      <div className="overflow-hidden rounded-[6px] border border-black/[0.06]">
        <div className="flex items-center gap-2 border-b bg-white px-3 py-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0c7865] text-[8px] font-bold text-white">
            P
          </div>

          <div className="flex-1">
            <p className="text-[9px] font-semibold">PREET</p>
            <p className="text-[6px] text-[#858b89]">
              Hair Transplant Clinic
            </p>
          </div>

          <Phone className="h-3 w-3 text-[#727876]" />
        </div>

        <div className="min-h-[225px] space-y-2 bg-[#efeae2] p-3">
          <div className="flex justify-start">
            <div className="max-w-[75%] rounded-[9px] rounded-bl-[2px] bg-white px-2.5 py-2 text-[8px] leading-[1.4]">
              Hi, I&apos;m interested in a hair transplant. How much does it
              cost?
              <span className="ml-1 text-[5px] text-[#929795]">
                10:21 PM
              </span>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-[78%] rounded-[9px] rounded-br-[2px] bg-[#d9fdd3] px-2.5 py-2 text-[8px] leading-[1.4]">
              I&apos;d be happy to help. To give you an accurate estimate,
              could you share a few photos of your current hair condition?
              <span className="ml-1 text-[5px] text-[#6f7d75]">
                10:22 PM
              </span>
            </div>
          </div>

          <div className="flex gap-1.5">
            <Image
              src="/homepage/scalp-front.jpg"
              alt="Front scalp"
              width={100}
              height={80}
              className="h-[58px] w-[76px] rounded object-cover"
            />
            <Image
              src="/homepage/scalp-top.jpg"
              alt="Top scalp"
              width={100}
              height={80}
              className="h-[58px] w-[76px] rounded object-cover"
            />
            <Image
              src="/homepage/scalp-side.jpg"
              alt="Side scalp"
              width={100}
              height={80}
              className="h-[58px] w-[76px] rounded object-cover"
            />
          </div>

          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-[9px] rounded-bl-[2px] bg-white px-2.5 py-2 text-[8px] leading-[1.4]">
              Thanks. I&apos;ve received the photos. I can give you a
              preliminary assessment before your consultation.
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t bg-white p-2">
          <div className="flex-1 rounded-full bg-[#f2f4f3] px-3 py-2 text-[6px] text-[#999f9c]">
            Type a message...
          </div>

          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#087f6b] text-white">
            <WhatsAppIcon className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------ */
/* Dashboard shell */
/* ------------------------------------------------ */

function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[540px] overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      <div className="flex h-7 items-center gap-1 border-b bg-[#f7f8f7] px-3">
        <span className="h-2 w-2 rounded-full bg-[#d4d8d6]" />
        <span className="h-2 w-2 rounded-full bg-[#d4d8d6]" />
        <span className="h-2 w-2 rounded-full bg-[#d4d8d6]" />

        <span className="ml-3 text-[6px] text-[#919795]">
          app.naseemlabs.com
        </span>
      </div>

      <div className="grid min-h-[230px] grid-cols-[72px_1fr]">
        <aside className="border-r bg-[#f7f8f7] p-2">
          <p className="px-1.5 py-2 text-[7px] font-bold text-[#17302a]">
            NaseemLabs
          </p>

          <div className="space-y-1 text-[6px] text-[#6f7774]">
            <p className="rounded bg-[#dfeee9] px-1.5 py-1.5 font-semibold text-[#087f6b]">
              Conversations
            </p>

            <p className="px-1.5 py-1.5">Patients</p>
            <p className="px-1.5 py-1.5">Consultations</p>
            <p className="px-1.5 py-1.5">Follow-ups</p>
            <p className="px-1.5 py-1.5">Staff Notes</p>
          </div>
        </aside>

        <div className="min-w-0 p-3">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------ */
/* Summary dashboard */
/* ------------------------------------------------ */

function SummaryDashboard() {
  const details = [
    ["Main concern", "Cost + grafts"],
    ["Norwood", "III (preliminary)"],
    ["Estimated grafts", "2,500 – 3,000"],
    ["Estimated price", "£4,000 – £6,000"],
    ["Affected area", "Front + Mid Scalp"],
    ["Timeline", "Next 2–3 months"],
  ];

  return (
    <DashboardShell>
      <div className="flex items-center justify-between border-b pb-2">
        <div>
          <p className="text-[9px] font-semibold">Patient Summary</p>
          <p className="text-[6px] text-[#8b9290]">
            Ahmed Khan · Hair transplant
          </p>
        </div>

        <span className="rounded-full bg-[#e7f4ef] px-2 py-1 text-[6px] font-semibold text-[#087f6b]">
          Consultation Booked
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {details.map(([label, value]) => (
          <div key={label} className="rounded bg-[#f7f8f7] p-2">
            <p className="text-[5px] uppercase tracking-[0.08em] text-[#8b9290]">
              {label}
            </p>

            <p className="mt-1 text-[7px] font-semibold text-[#25302d]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

/* ------------------------------------------------ */
/* Consultation dashboard */
/* ------------------------------------------------ */

function ConsultationDashboard() {
  const patients = [
    ["Ahmed Khan", "Consultation Booked", "11:32 PM"],
    ["Rohit Sharma", "High Intent", "09:21 PM"],
    ["Priya S.", "Ready to Book", "06:48 PM"],
    ["Vikram Singh", "Needs Info", "04:28 PM"],
  ];

  return (
    <DashboardShell>
      <div className="flex items-center justify-between border-b pb-2">
        <p className="text-[9px] font-semibold">
          Consultation Opportunities
        </p>

        <span className="text-[6px] text-[#7d8582]">View All →</span>
      </div>

      <div className="mt-2 space-y-1.5">
        {patients.map(([name, status, time]) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded border border-black/[0.05] px-2 py-2"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dfeee9] text-[6px] font-bold text-[#087f6b]">
              {name.charAt(0)}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[7px] font-semibold">{name}</p>
              <p className="text-[5px] text-[#909694]">
                Hair transplant · {time}
              </p>
            </div>

            <span className="rounded-full bg-[#e7f4ef] px-1.5 py-1 text-[5px] font-semibold text-[#087f6b]">
              {status}
            </span>

            <button
              type="button"
              aria-disabled="true"
              tabIndex={-1}
              className="pointer-events-none rounded border border-black/[0.08] px-1.5 py-1 text-[5px] font-semibold"
            >
              Contact
            </button>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

/* ------------------------------------------------ */
/* Handover dashboard */
/* ------------------------------------------------ */

function HandoverDashboard() {
  return (
    <DashboardShell>
      <div className="flex items-center gap-3 border-b pb-2 text-[6px] text-[#7c8581]">
        <span className="border-b-2 border-[#087f6b] pb-2 font-semibold text-[#087f6b]">
          Conversation
        </span>

        <span>Summary</span>
        <span>Patient Details</span>
        <span>Staff Notes</span>
      </div>

      <div className="mt-3 grid grid-cols-[1fr_115px] gap-3">
        <div className="rounded border border-black/[0.06] bg-[#fafafa] p-3">
          <div className="flex justify-start">
            <p className="max-w-[82%] rounded-lg bg-white p-2 text-[7px] shadow-sm">
              Hi, I&apos;m interested in a hair transplant. How much does it
              cost?
            </p>
          </div>

          <div className="mt-2 flex justify-end">
            <p className="max-w-[82%] rounded-lg bg-[#d9fdd3] p-2 text-[7px]">
              I&apos;d be happy to help. Could you share a few photos of your
              current hair condition?
            </p>
          </div>

          <div className="mt-2 flex gap-1">
            <Image
              src="/homepage/scalp-front.jpg"
              alt="Front"
              width={80}
              height={60}
              className="h-10 w-12 rounded object-cover"
            />

            <Image
              src="/homepage/scalp-top.jpg"
              alt="Top"
              width={80}
              height={60}
              className="h-10 w-12 rounded object-cover"
            />

            <Image
              src="/homepage/scalp-side.jpg"
              alt="Side"
              width={80}
              height={60}
              className="h-10 w-12 rounded object-cover"
            />
          </div>
        </div>

        <div className="rounded border border-black/[0.06] bg-[#f7f8f7] p-2">
          <p className="text-[7px] font-semibold">Patient Details</p>

          <div className="mt-2 space-y-2 text-[6px] text-[#656d69]">
            <p>
              <b>Intent:</b> Consultation
            </p>
            <p>
              <b>Concern:</b> Grafts, cost
            </p>
            <p>
              <b>Assessment:</b> Preliminary
            </p>
            <p>
              <b>Status:</b> Accepted
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

/* ------------------------------------------------ */
/* Follow-up dashboard */
/* ------------------------------------------------ */

function FollowUpDashboard() {
  const rows = [
    ["Neha Kapoor", "Price concern", "Follow-up in 3 days"],
    ["Amit Verma", "Needs more info", "Follow-up in 1 week"],
    ["Rahul M.", "Planning later", "Long-term follow-up"],
    ["Karan Mehta", "Photo received", "Send follow-up"],
  ];

  return (
    <DashboardShell>
      <div className="flex items-center justify-between border-b pb-2">
        <p className="text-[9px] font-semibold">Follow-up Management</p>

        <span className="text-[6px] text-[#7d8582]">View All →</span>
      </div>

      <div className="mt-2 space-y-1.5">
        {rows.map(([name, reason, action]) => (
          <div
            key={name}
            className="grid grid-cols-[1fr_1fr_auto] items-center gap-2 rounded border border-black/[0.05] px-2 py-2"
          >
            <div>
              <p className="text-[7px] font-semibold">{name}</p>
              <p className="text-[5px] text-[#909694]">{reason}</p>
            </div>

            <p className="text-[6px] text-[#5f6764]">{action}</p>

            <button className="rounded border border-black/[0.08] px-2 py-1 text-[5px] font-semibold">
              Send
            </button>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

/* ------------------------------------------------ */
/* Workflow section */
/* ------------------------------------------------ */

function WorkflowStep({
  number,
  dark = false,
  visual,
  eyebrow,
  title,
  body,
  checklist,
  sideTitle,
  sideItems,
}: {
  number: string;
  dark?: boolean;
  visual: React.ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  checklist: string[];
  sideTitle: string;
  sideItems: string[];
}) {
  return (
    <section
      className={
        dark
          ? "bg-[#1a3c34] text-white"
          : "bg-[#f7f6f2] text-[#111]"
      }
    >
      <div
        className="mx-auto grid max-w-[1180px] items-center gap-8 border-b px-4 py-9 sm:px-6 sm:py-12 lg:grid-cols-[0.85fr_1.2fr_0.8fr] lg:px-8 lg:py-14"
        style={{
          borderColor: dark
            ? "rgba(255,255,255,0.08)"
            : BORDER,
        }}
      >
        <div className="relative pl-9">
          <div
            className={`absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
              dark
                ? "bg-white/10 text-[#5de0c6]"
                : "bg-[#e4efec] text-[#087f6b]"
            }`}
          >
            {number}
          </div>

          <p
            className={`text-[8px] font-bold uppercase tracking-[0.15em] ${
              dark ? "text-[#5de0c6]" : "text-[#087f6b]"
            }`}
          >
            {eyebrow}
          </p>

          <h2
            className={`${newsreader.className} mt-2 max-w-[350px] text-[27px] leading-[1.02] tracking-[-0.025em] sm:text-[32px]`}
          >
            {title}
          </h2>

          <p
            className={`mt-3 max-w-[360px] text-[10px] leading-[1.65] ${
              dark ? "text-white/70" : "text-[#68706d]"
            }`}
          >
            {body}
          </p>

          <CheckList items={checklist} dark={dark} />
        </div>

        <div className="flex justify-center">{visual}</div>

        <div
          className={`rounded-[5px] border p-4 sm:p-5 ${
            dark
              ? "border-white/10 bg-white/[0.03]"
              : "border-black/[0.07] bg-white"
          }`}
        >
          <p className="text-[10px] font-semibold">{sideTitle}</p>

          <ul className="mt-3 space-y-2.5">
            {sideItems.map((item) => (
              <li
                key={item}
                className={`flex gap-2 text-[8px] leading-[1.45] ${
                  dark ? "text-white/72" : "text-[#5d6562]"
                }`}
              >
                <CheckCircle2
                  className={`mt-[1px] h-3 w-3 shrink-0 ${
                    dark ? "text-[#5de0c6]" : "text-[#087f6b]"
                  }`}
                  strokeWidth={2}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------ */
/* PAGE */
/* ------------------------------------------------ */

export default function BenefitsPage() {
  return (
    <div
      className={`${inter.className} min-h-screen overflow-x-hidden antialiased`}
      style={{
        backgroundColor: PAGE,
        color: TEXT,
      }}
    >
      <SiteHeader activePage="benefits" />

      <main>
        {/* HERO */}

        <section className="relative overflow-hidden bg-[#0b2925] text-white">
          <div className="absolute inset-0">
            <Image
              src="/homepage/final-hero-image.png"
              alt="Hair restoration clinic"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-[#061d1a]/85" />
          </div>

          <div className="relative mx-auto grid min-h-[430px] max-w-[1180px] items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-12">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#5de0c6]">
                Clinic Workflow
              </p>

              <h1
                className={`${newsreader.className} mt-3 max-w-[500px] text-[46px] leading-[0.94] tracking-[-0.035em] sm:text-[57px] lg:text-[63px]`}
              >
                From Inquiry
                <br />
                to Action.
              </h1>

              <p className="mt-4 max-w-[460px] text-[13px] leading-[1.65] text-white/75 sm:text-[14px]">
                Everything your team needs, in one place. PREET handles the
                conversation with the patient, gives your team clear context,
                and moves the inquiry to the next step — without scrolling
                through endless chat history.
              </p>

              <Link
                href="/how-it-works"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#087f6b] px-5 py-3 text-[12px] font-semibold text-white"
              >
                See How It Works
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Dashboard hero */}

            <div className="relative mx-auto w-full max-w-[650px] self-end">
              <div className="overflow-hidden rounded-[12px] border border-white/15 bg-[#0a1f1d]/90 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                <div className="flex h-8 items-center gap-1 border-b border-white/10 bg-white/[0.04] px-3">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />

                  <span className="ml-3 text-[6px] text-white/40">
                    NaseemLabs · Clinic Workspace
                  </span>
                </div>

                <div className="grid min-h-[260px] grid-cols-[82px_1fr]">
                  <div className="border-r border-white/10 bg-black/10 p-2.5">
                    <p className="text-[8px] font-semibold text-white">
                      NaseemLabs
                    </p>

                    <div className="mt-3 space-y-1 text-[6px] text-white/50">
                      <p className="rounded bg-[#087f6b] px-2 py-1.5 text-white">
                        Conversations
                      </p>

                      <p className="px-2 py-1.5">Patients</p>
                      <p className="px-2 py-1.5">Consultations</p>
                      <p className="px-2 py-1.5">Follow-ups</p>
                      <p className="px-2 py-1.5">Staff Notes</p>
                    </div>
                  </div>

                  <div className="bg-white p-3 text-[#17201e]">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div>
                        <p className="text-[10px] font-semibold">
                          Conversations
                        </p>

                        <p className="text-[6px] text-[#8a918f]">
                          All active patient inquiries
                        </p>
                      </div>

                      <span className="rounded-full bg-[#e7f4ef] px-2 py-1 text-[6px] font-semibold text-[#087f6b]">
                        Consultation Booked
                      </span>
                    </div>

                    <div className="mt-2 grid grid-cols-[1fr_1.2fr] gap-2">
                      <div className="space-y-1.5">
                        {[
                          "Ahmed Khan",
                          "Rohit Sharma",
                          "Karan Mehta",
                          "Vikram Singh",
                          "Priya S.",
                        ].map((name, index) => (
                          <div
                            key={name}
                            className={`flex items-center gap-2 rounded border p-2 ${
                              index === 0
                                ? "border-[#b7dcd2] bg-[#f1f8f5]"
                                : "border-black/[0.05]"
                            }`}
                          >
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dcece8] text-[6px] font-bold text-[#087f6b]">
                              {name.charAt(0)}
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="text-[7px] font-semibold">
                                {name}
                              </p>

                              <p className="text-[5px] text-[#8b9290]">
                                Hair transplant
                              </p>
                            </div>

                            <span className="text-[5px] text-[#087f6b]">
                              ●
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="rounded border border-black/[0.06] bg-[#fafafa] p-2.5">
                        <div className="flex items-center justify-between">
                          <p className="text-[8px] font-semibold">
                            Ahmed Khan
                          </p>

                          <span className="text-[5px] text-[#087f6b]">
                            Consultation Booked
                          </span>
                        </div>

                        <div className="mt-2 rounded-lg bg-white p-2 text-[6px] shadow-sm">
                          Hi, I&apos;m interested in a hair transplant. How
                          much does it cost?
                        </div>

                        <div className="mt-1.5 flex justify-end">
                          <div className="max-w-[80%] rounded-lg bg-[#d9fdd3] p-2 text-[6px]">
                            I&apos;d be happy to help. Could you share a few
                            photos of your current hair condition?
                          </div>
                        </div>

                        <div className="mt-2 flex gap-1">
                          <Image
                            src="/homepage/scalp-front.jpg"
                            alt="Front"
                            width={80}
                            height={60}
                            className="h-10 w-12 rounded object-cover"
                          />

                          <Image
                            src="/homepage/scalp-top.jpg"
                            alt="Top"
                            width={80}
                            height={60}
                            className="h-10 w-12 rounded object-cover"
                          />

                          <Image
                            src="/homepage/scalp-side.jpg"
                            alt="Side"
                            width={80}
                            height={60}
                            className="h-10 w-12 rounded object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS BAR */}

        <section
          className="border-b bg-white"
          style={{ borderColor: BORDER }}
        >
          <div className="mx-auto flex max-w-[1180px] overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
            {steps.map(([number, label, description], index) => (
              <div
                key={number}
                className="flex min-w-[150px] flex-1 items-center"
              >
                <div className="min-w-0 flex-1 text-center">
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#087f6b] text-[9px] font-bold text-white">
                    {number}
                  </div>

                  <p className="mt-1.5 text-[8px] font-bold text-[#1b2422]">
                    {label}
                  </p>

                  <p className="mt-0.5 whitespace-nowrap text-[6px] text-[#858c89]">
                    {description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <ChevronRight className="h-3 w-3 shrink-0 text-[#bcc5c1]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 01 */}

        <WorkflowStep
          number="01"
          eyebrow="CONVERSATION"
          title="PREET handles the patient conversation."
          body="Patients ask questions, share concerns, send photos and get accurate information — day or night. PREET keeps the conversation moving and gathers all the details needed for your team."
          checklist={[
            "Answers common and complex questions",
            "Requests relevant information and photos",
            "Handles concerns and objections",
            "Qualifies serious patients",
          ]}
          sideTitle="Patient shares"
          sideItems={[
            "Questions and concerns",
            "Scalp photos (front, top, back)",
            "Medical history (if relevant)",
            "Expectations and budget range",
            "Preferred timeline",
            "Any specific requirements",
          ]}
          visual={<WhatsAppWindow />}
        />

        {/* 02 */}

        <WorkflowStep
          number="02"
          eyebrow="CONVERSATION SUMMARY"
          title="Get a clear summary after every conversation."
          body="PREET automatically creates a concise summary with key information, so your team doesn't have to read the entire chat history before taking action."
          checklist={[
            "Key patient details",
            "Main concerns",
            "Photos analyzed",
            "Preliminary assessment",
            "Recommended next step",
          ]}
          sideTitle="Patient context"
          sideItems={[
            "Patient name and contact",
            "Inquiry type",
            "Main concern",
            "Norwood / assessment",
            "Estimated graft range",
            "Consultation status",
          ]}
          dark
          visual={<SummaryDashboard />}
        />

        {/* 03 */}

        <WorkflowStep
          number="03"
          eyebrow="CONSULTATION"
          title="See consultation opportunities at a glance."
          body="When a patient is ready, PREET identifies the opportunity and notifies your team immediately."
          checklist={[
            "Real-time notifications",
            "Consultation status tracking",
            "Priority leads highlighted",
            "Easy assignment to team members",
          ]}
          sideTitle="You can"
          sideItems={[
            "View all active conversations",
            "See consultation-ready patients",
            "Check patient details and photos",
            "Add internal notes",
            "Assign to team members",
            "Track follow-ups",
            "Mark status",
          ]}
          visual={<ConsultationDashboard />}
        />

        {/* 04 */}

        <WorkflowStep
          number="04"
          eyebrow="TEAM HANDOVER"
          title="Your team takes over with full context."
          body="When the patient accepts a consultation, your team gets the complete conversation, summary and patient details — ready to take action."
          checklist={[
            "Full conversation history",
            "Conversation summary and key details",
            "Patient photos and assessment",
            "Internal notes and next steps",
          ]}
          sideTitle="Staff can"
          sideItems={[
            "View complete chat history",
            "See the conversation summary",
            "Access all patient information",
            "Add internal notes",
            "Contact patient directly",
            "Update consultation status",
            "Coordinate with other team members",
          ]}
          visual={<HandoverDashboard />}
        />

        {/* 05 */}

        <WorkflowStep
          number="05"
          eyebrow="FOLLOW-UP"
          title="Keep the conversation moving."
          body="If the patient isn't ready to book, PREET can send relevant follow-ups based on the previous conversation and identified concerns."
          checklist={[
            "Automatic, context-aware follow-ups",
            "Re-engage interested patients",
            "Reduce lost opportunities",
            "Track follow-up status",
          ]}
          sideTitle="Follow-up reasons"
          sideItems={[
            "Price concern",
            "Needs more information",
            "Planning for later",
            "Comparing options",
            "Incomplete information",
            "No response / re-engagement",
          ]}
          visual={<FollowUpDashboard />}
        />

        {/* CTA */}

        <section className="relative overflow-hidden bg-[#062823] text-white">
          <div className="absolute inset-0 opacity-25">
            <Image
              src="/homepage/final-hero-image.png"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 bg-[#062823]/80" />

          <div className="relative mx-auto flex min-h-[310px] max-w-[820px] flex-col items-center justify-center px-5 text-center">
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#5de0c6]">
              Ready to see the workflow?
            </p>

            <h2
              className={`${newsreader.className} mt-3 text-[34px] leading-[1.05] tracking-[-0.03em] sm:text-[44px]`}
            >
              See how PREET moves a real patient forward.
            </h2>

            <p className="mt-3 max-w-[580px] text-[11px] leading-[1.65] text-white/70">
              Experience the conversation, assessment, objection handling and
              handover for yourself.
            </p>

            <WhatsAppLink
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#087f6b] px-5 py-3 text-[12px] font-semibold text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Test PREET Yourself
              <ArrowRight className="h-3.5 w-3.5" />
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
