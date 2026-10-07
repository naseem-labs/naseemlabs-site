"use client";

import type { RegionalConfig } from "@/lib/private-sales/regional-config";
import Image from "next/image";

type PilotPageProps = {
  config: RegionalConfig;
};

export default function PilotPage({ config }: PilotPageProps) {
  const pilotPrice = {
    in: 1999,
    uk: 49,
    ae: 250,
  }[config.region];

  const price = new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currencyCode,
    maximumFractionDigits: 0,
  }).format(pilotPrice);

  return (
    <main className="min-h-screen bg-[#f7f9fb] text-[#10233f]">
      {/* ---------------------------------------------------------
          HERO
      --------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-[#10233f]/8 bg-white">
        {/* Very soft overall white background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-[#f1f7fb]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="grid items-center gap-6 lg:grid-cols-[1.03fr_0.97fr]">
            {/* ---------------------------------------------------
                LEFT — HERO COPY
            --------------------------------------------------- */}
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex rounded-full bg-[#dcecff] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1677e8]">
                14-Day Live Pilot
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-[#10233f] sm:text-5xl lg:text-[4.35rem]">
                14 Days to See What Changes in Your Clinic
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#10233f]/65 sm:text-lg">
                You&apos;ve already seen FolliCore work. Now put it into your real
                clinic workflow for 14 days and see the impact with your own
                inquiries.
              </p>

              <div className="mt-9 grid max-w-2xl gap-5 sm:grid-cols-3">
                <HeroPoint
                  icon="whatsapp"
                  title="Real inquiries"
                  text="from your patients"
                />

                <HeroPoint
                  icon="team"
                  title="Your team"
                  text="keeps working"
                />

                <HeroPoint
                  icon="chart"
                  title="Your own clinic"
                  text="data and results"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("pilot-payment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 rounded-full bg-[#10233f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173b5f]"
              >
                Review Pilot Details →
              </button>
            </div>

            {/* ---------------------------------------------------
                RIGHT — DOCTOR IMAGE + HANDWRITTEN QUOTE
            --------------------------------------------------- */}
            <div className="relative min-h-[430px] overflow-hidden sm:min-h-[500px] lg:min-h-[560px]">
              <Image
                src="/homepage/pilot_page_image.png"
                alt="Hair restoration doctor performing a procedure"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />

              {/* -------------------------------------------------
                  WHITE FADE
                  Keeps the image visually connected to the page
                  and makes the left side lighter.
              ------------------------------------------------- */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/35 to-transparent" />

              <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-white/5" />

              {/* -------------------------------------------------
                  HANDWRITTEN QUOTE
                  INSIDE IMAGE
                  Small + far left + away from face/eyes.
              ------------------------------------------------- */}
              <div className="absolute bottom-[25%] left-[2%] z-10 w-[200px] text-[#10233f] sm:w-[215px] lg:w-[235px]">
                <p
                  className="text-[1.15rem] italic leading-[1.22] sm:text-[1.3rem] lg:text-[1.42rem]"
                  style={{
                    fontFamily:
                      "'Segoe Print', 'Bradley Hand', 'Comic Sans MS', cursive",
                  }}
                >
                  You focus
                  <br />
                  on what you do best.
                  <br />
                  We make sure serious
                  <br />
                  inquiries don&apos;t get lost.
                </p>

                <div className="mt-3 ml-1 h-[3px] w-14 rotate-[-5deg] rounded-full bg-[#e5b52f]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          SECTION 01
      --------------------------------------------------------- */}
      <section className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <SectionHeading
          number="01"
          title="What Happens During These 14 Days?"
          subtitle="FolliCore handles your incoming patient inquiries while your team continues running the clinic."
        />

        <div className="mt-7 overflow-hidden rounded-[1.75rem] border border-[#10233f]/8 bg-white shadow-[0_15px_50px_rgba(16,35,63,0.05)]">
          <div className="grid divide-y divide-[#10233f]/8 md:grid-cols-6 md:divide-x md:divide-y-0">
            <FlowCard
              icon="whatsapp"
              number="01"
              title="Inquiries arrive"
              text="Patients reach your clinic through your existing WhatsApp inquiry channels."
            />

            <FlowCard
              icon="chat"
              number="02"
              title="FolliCore responds"
              text="The conversation is handled immediately, even when your receptionist is busy or your doctor is in surgery."
            />

            <FlowCard
              icon="document"
              number="03"
              title="Conversation continues"
              text="Questions, concerns, procedure information and pricing are handled according to your clinic's rules."
            />

            <FlowCard
              icon="photo"
              number="04"
              title="Information is collected"
              text="Patient details and scalp photographs are collected where applicable."
            />

            <FlowCard
              icon="follow"
              number="05"
              title="Follow-up happens"
              text="If the patient needs more time or doesn't respond, follow-up continues based on the conversation context."
            />

            <FlowCard
              icon="person"
              number="06"
              title="Your team takes over"
              text="Your team receives the relevant context and can call, follow up and move the patient toward consultation."
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          SECTION 02
      --------------------------------------------------------- */}
      <section className="border-y border-[#10233f]/6 bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <SectionHeading
            number="02"
            title="What You Achieve in These 14 Days"
            subtitle="See the real operational difference when every inquiry receives attention."
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <BenefitCard
              number="1"
              icon="chart"
              title="Fewer inquiries lost due to busy hours"
              text="Every patient inquiry receives a response and continues, instead of going unanswered or dying after a simple price message."
              tone="green"
            />

            <BenefitCard
              number="2"
              icon="team"
              title="Your staff gets their time back"
              text="Less time spent on repetitive initial questions, collecting basic information and manual follow-ups. Your receptionist can focus on in-clinic work."
              tone="blue"
            />

            <BenefitCard
              number="3"
              icon="person"
              title="Serious patients come with a clearer mind"
              text="Concerns are addressed, information is shared and expectations are set before they reach your team, so you speak with better-informed patients."
              tone="amber"
            />

            <BenefitCard
              number="4"
              icon="document"
              title="You receive complete patient context"
              text="See their questions, concerns, photos, estimated range where applicable and conversation summary in one place. No need to read long chats."
              tone="rose"
            />

            <BenefitCard
              number="5"
              icon="target"
              title="You discover your real opportunity"
              text="See how many of your inquiries continue when they receive consistent attention, instead of being limited by human availability."
              tone="purple"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          SECTION 03
      --------------------------------------------------------- */}
      <section className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <SectionHeading
          number="03"
          title="What You'll Have at the End of 14 Days"
          subtitle="Real data from your own clinic. You'll be able to review:"
        />

        <div className="mt-7 grid overflow-hidden rounded-[1.75rem] border border-[#10233f]/8 bg-white shadow-[0_15px_50px_rgba(16,35,63,0.05)] lg:grid-cols-[1fr_0.72fr]">
          <div className="p-7 sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <ChecklistItem text="Total inquiries handled during the pilot" />
              <ChecklistItem text="How many received an immediate response" />
              <ChecklistItem text="How many conversations continued beyond the initial question" />
              <ChecklistItem text="How many patients shared information and photos" />
              <ChecklistItem text="How many required follow-up" />
              <ChecklistItem text="How many reached a consultation stage" />
              <ChecklistItem text="What your team knew about each patient before taking over" />
              <ChecklistItem text="How much staff involvement was actually required" />
            </div>
          </div>

          <div className="flex items-center border-t border-[#10233f]/8 bg-[#eef8f1] p-7 sm:p-9 lg:border-l lg:border-t-0">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#48b66b] text-white">
                <Icon name="chart" />
              </div>

              <h3 className="mt-5 text-xl font-bold italic tracking-tight text-[#10233f]">
                The 14-day pilot gives you real evidence from your own inquiry
                workflow — something a demo cannot.
              </h3>

              <div className="my-5 h-px bg-[#10233f]/10" />

              <p className="text-sm leading-6 text-[#10233f]/65">
                You&apos;ll see what changes when your patient inquiries are
                handled consistently, with your own patients, your own
                workflow and your actual operational environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          SECTION 04
      --------------------------------------------------------- */}
      <section className="border-y border-[#10233f]/6 bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <SectionHeading
            number="04"
            title="What's Included and Important Information"
            subtitle=""
          />

          <div className="mt-7 grid gap-5 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-[#48b66b]/20 bg-[#eef8f1] p-7 sm:p-9">
              <h3 className="text-xl font-bold tracking-tight text-[#10233f]">
                Your {price} Pilot Includes
              </h3>

              <div className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                <IncludedItem text="FolliCore deployment on your clinic's WhatsApp" />
                <IncludedItem text="Preliminary assessment workflow where applicable" />
                <IncludedItem text="Initial clinic configuration" />
                <IncludedItem text="Dashboard access for your team" />
                <IncludedItem text="Complete inquiry handling workflow" />
                <IncludedItem text="Conversation summaries" />
                <IncludedItem text="Follow-up workflow" />
                <IncludedItem text="Consultation handover workflow" />
                <IncludedItem text="Patient information and photo collection" />
                <IncludedItem text="Support and adjustments during the pilot" />
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#f0b429]/25 bg-[#fff8e8] p-7 sm:p-9">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff0c4] text-[#c98a00]">
                  <Icon name="warning" />
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#10233f]">
                    Important to Note
                  </h3>

                  <ul className="mt-5 space-y-3 text-sm leading-5 text-[#10233f]/70">
                    <li className="flex gap-2">
                      <span className="mt-1">•</span>
                      <span>
                        {price} is a one-time, non-refundable setup fee.
                      </span>
                    </li>

                    <li className="flex gap-2">
                      <span className="mt-1">•</span>
                      <span>
                        This is a 14-Day Live Pilot, not a free trial.
                      </span>
                    </li>

                    <li className="flex gap-2">
                      <span className="mt-1">•</span>
                      <span>
                        The 14 days begin when FolliCore is live and ready to
                        handle inquiries.
                      </span>
                    </li>

                    <li className="flex gap-2">
                      <span className="mt-1">•</span>
                      <span>
                        WhatsApp/Meta approval is required for applicable
                        templates.
                      </span>
                    </li>

                    <li className="flex gap-2">
                      <span className="mt-1">•</span>
                      <span>
                        No specific number of consultations or revenue is
                        guaranteed.
                      </span>
                    </li>

                    <li className="flex gap-2">
                      <span className="mt-1">•</span>
                      <span>
                        FolliCore provides preliminary information only. Final
                        clinical assessment remains with the doctor.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          FINAL CTA
      --------------------------------------------------------- */}
      <section id="pilot-payment" className="px-4 pb-4 pt-8 sm:px-6">
        <div className="mx-auto max-w-[1500px] overflow-hidden rounded-[1.75rem] bg-[#09243e] px-6 py-7 text-white shadow-[0_20px_70px_rgba(9,36,62,0.2)] sm:px-9 lg:px-12">
          <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto_auto]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to Run the 14-Day Live Pilot?
              </h2>

              <p className="mt-2 text-sm text-white/65 sm:text-base">
                Deploy FolliCore in your clinic and see the real operational
                difference.
              </p>
            </div>

            <div className="lg:border-l lg:border-white/15 lg:pl-8">
              <div className="text-3xl font-bold tracking-tight sm:text-4xl">
                {price}
              </div>

              <p className="mt-1 text-xs text-white/50">
                One-time setup fee
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {config.region === "in" ? (
                <PaymentButton
                  type="razorpay"
                  label="Start Now — Go Live"
                  showProvider={false}
                  paymentLink="https://rzp.io/rzp/jjfeVHYf"
                />
              ) : (
                <>
                  <PaymentButton
                    type="paypal"
                    label="Pay with PayPal"
                    paymentLink={
                      config.region === "uk"
                        ? "https://www.paypal.com/ncp/payment/SX6LFQDL723HJ"
                        : "https://www.paypal.com/ncp/payment/HUL92MF6ZEG38"
                    }
                  />

                  <PaymentButton
                    type="razorpay"
                    label="Pay with Razorpay"
                    paymentLink={
                      config.region === "uk"
                        ? "https://rzp.io/rzp/jzURIjC"
                        : "https://rzp.io/rzp/8Nqbe8hk"
                    }
                  />
                </>
              )}
            </div>
          </div>
        </div>

        <p className="mx-auto max-w-[1500px] px-4 py-3 text-center text-[10px] leading-4 text-[#10233f]/45">
          By proceeding, you confirm that you have reviewed the pilot terms
          above. After payment, we will collect the required clinic
          information and begin deployment preparation.
        </p>
      </section>
    </main>
  );
}

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4388dc] text-sm font-bold text-white shadow-[0_8px_20px_rgba(67,136,220,0.22)]">
        {number}
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-[-0.025em] text-[#10233f] sm:text-3xl lg:text-4xl">
          {title}
        </h2>

        {subtitle ? (
          <p className="mt-1.5 text-sm leading-6 text-[#10233f]/55 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* ============================================================
   HERO POINT
============================================================ */

function HeroPoint({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf6ff] text-[#1681ed]">
        <Icon name={icon} />
      </div>

      <div>
        <p className="text-sm font-semibold text-[#10233f]">{title}</p>
        <p className="mt-0.5 text-xs text-[#10233f]/50">{text}</p>
      </div>
    </div>
  );
}

/* ============================================================
   FLOW CARD
============================================================ */

function FlowCard({
  icon,
  number,
  title,
  text,
}: {
  icon: IconName;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf6ff] text-[#167eea]">
          <Icon name={icon} />
        </div>

        <span className="text-[10px] font-bold tracking-[0.16em] text-[#10233f]/20">
          {number}
        </span>
      </div>

      <h3 className="mt-5 text-sm font-bold leading-5 text-[#10233f]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-[#10233f]/55">
        {text}
      </p>
    </div>
  );
}

/* ============================================================
   BENEFIT CARD
============================================================ */

function BenefitCard({
  number,
  icon,
  title,
  text,
  tone,
}: {
  number: string;
  icon: IconName;
  title: string;
  text: string;
  tone: "green" | "blue" | "amber" | "rose" | "purple";
}) {
  const tones = {
    green: {
      bg: "bg-[#eff9f2]",
      icon: "bg-[#d9f1df] text-[#31a457]",
      number: "bg-[#46b966]",
    },
    blue: {
      bg: "bg-[#eef6ff]",
      icon: "bg-[#dcecff] text-[#247dd8]",
      number: "bg-[#4388dc]",
    },
    amber: {
      bg: "bg-[#fff8ea]",
      icon: "bg-[#ffefc7] text-[#d49400]",
      number: "bg-[#efa928]",
    },
    rose: {
      bg: "bg-[#fff0f0]",
      icon: "bg-[#ffe0e0] text-[#db5252]",
      number: "bg-[#e45b5b]",
    },
    purple: {
      bg: "bg-[#f4f1ff]",
      icon: "bg-[#e6defd] text-[#7659c8]",
      number: "bg-[#7659c8]",
    },
  };

  const current = tones[tone];

  return (
    <div className={`rounded-[1.25rem] p-5 sm:p-6 ${current.bg}`}>
      <div className="flex items-center justify-between">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${current.number}`}
        >
          {number}
        </span>

        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${current.icon}`}
        >
          <Icon name={icon} />
        </span>
      </div>

      <h3 className="mt-5 text-base font-bold leading-5 text-[#10233f]">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-5 text-[#10233f]/60">{text}</p>
    </div>
  );
}

/* ============================================================
   CHECKLIST
============================================================ */

function ChecklistItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1681ed] text-white">
        <Icon name="check" size="sm" />
      </span>

      <span className="text-sm leading-5 text-[#10233f]/70">{text}</span>
    </div>
  );
}

function IncludedItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 text-[#43ad61]">✓</span>
      <span className="text-sm leading-5 text-[#10233f]/70">{text}</span>
    </div>
  );
}

/* ============================================================
   PAYMENT
============================================================ */

function PaymentButton({
  type,
  label,
  showProvider = true,
  paymentLink,
}: {
  type: "paypal" | "razorpay";
  label: string;
  showProvider?: boolean;
  paymentLink?: string;
}) {
  const isPayPal = type === "paypal";
  const className = `flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${
    isPayPal
      ? "bg-[#ffc439] text-[#10233f] shadow-[0_8px_20px_rgba(255,196,57,0.2)] hover:bg-[#ffcf58]"
      : "bg-[#2563eb] text-white shadow-[0_8px_20px_rgba(37,99,235,0.2)] hover:bg-[#3472ed]"
  }`;

  const content = (
    <>
      {showProvider ? (
        isPayPal ? (
          <span className="text-base font-black tracking-tight">PayPal</span>
        ) : (
          <span className="text-base font-black tracking-tight">
            Razorpay
          </span>
        )
      ) : null}

      <span>{label}</span>
    </>
  );

  return paymentLink ? (
    <a
      href={paymentLink}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  ) : (
    <button
      type="button"
      className={className}
    >
      {content}
    </button>
  );
}

/* ============================================================
   ICON SYSTEM
============================================================ */

type IconName =
  | "whatsapp"
  | "team"
  | "chart"
  | "chat"
  | "document"
  | "photo"
  | "follow"
  | "person"
  | "target"
  | "check"
  | "warning"
  | "lock";

function Icon({
  name,
  size = "md",
}: {
  name: IconName;
  size?: "sm" | "md";
}) {
  const className = size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5";

  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.1A8.5 8.5 0 1 1 20 11.5Z" />
          <path d="M8.7 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.7 1.2 1.6 2.1 2.8 2.8l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.5.3-1.1.4-1.6.2-2.7-.8-5-3.1-5.8-5.8-.2-.5-.1-1.1.2-1.6Z" />
        </svg>
      );

    case "team":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3.5 19c.5-3 2.3-4.5 5.5-4.5S14 16 14.5 19" />
          <path d="M14.5 14.8c2.8-.3 5 .9 5.8 3.4" />
        </svg>
      );

    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V9" />
          <path d="M10 19V5" />
          <path d="M16 19v-7" />
          <path d="M22 19H2" />
        </svg>
      );

    case "chat":
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4 4v-4.2a2.5 2.5 0 0 1-3-2.3Z" />
          <path d="M8 8h8M8 11h5" />
        </svg>
      );

    case "document":
      return (
        <svg {...common}>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5M9 12h6M9 16h6" />
        </svg>
      );

    case "photo":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9" r="1.5" />
          <path d="m5 17 4.5-4.5 3 3 2-2 4.5 3.5" />
        </svg>
      );

    case "follow":
      return (
        <svg {...common}>
          <path d="M20 11a8 8 0 1 1-2.3-5.7" />
          <path d="M20 5v6h-6" />
          <path d="M8 12h8M8 9h5" />
        </svg>
      );

    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3.2" />
          <path d="M5 20c.7-4 3-6 7-6s6.3 2 7 6" />
        </svg>
      );

    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
          <path d="m16.5 7.5 4-4M17 4h3.5v3.5" />
        </svg>
      );

    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );

    case "warning":
      return (
        <svg {...common}>
          <path d="m12 3 9 17H3L12 3Z" />
          <path d="M12 9v4M12 16h.01" />
        </svg>
      );

    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
      );

    default:
      return null;
  }
}
