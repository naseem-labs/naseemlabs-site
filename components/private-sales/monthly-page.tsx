import Link from "next/link";
import type { ReactNode } from "react";

type MonthlyRegion = "in" | "uk" | "ae";

type MonthlyPageProps = {
  config: {
    region: MonthlyRegion;
  };
};

const PRICING = {
  in: {
    standard: 14999,
    growth: 24999,
    currency: "INR",
    locale: "en-IN",
  },
  uk: {
    standard: 399,
    growth: 899,
    currency: "GBP",
    locale: "en-GB",
  },
  ae: {
    standard: 1800,
    growth: 3600,
    currency: "AED",
    locale: "en-AE",
  },
} as const;

/* INDIA RAZORPAY PAYMENT LINKS */
const INDIA_STANDARD_RAZORPAY_LINK =
  "https://rzp.io/rzp/OGCkKU9g";

const INDIA_GROWTH_RAZORPAY_LINK =
  "https://rzp.io/rzp/ZhuVXm6Y";

function formatPrice(value: number, region: MonthlyRegion) {
  const pricing = PRICING[region];

  return new Intl.NumberFormat(pricing.locale, {
    style: "currency",
    currency: pricing.currency,
    maximumFractionDigits: 0,
  }).format(value);
}

/* -------------------------------------------------------
   ICONS
------------------------------------------------------- */

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9"
      fill="none"
    >
      <path
        d="M12.031 0C5.39 0 0 5.39 0 12.031c0 2.128.552 4.198 1.6 6.015L.15 24l6.115-1.603a11.95 11.95 0 005.766 1.488h.005c6.64 0 12.03-5.39 12.03-12.031S18.672 0 12.031 0z"
        fill="#25D366"
      />
      <path
        d="M17.49 14.393c-.3-.15-1.77-.874-2.043-.974-.274-.1-.474-.15-.674.15-.2.3-.772.974-.946 1.173-.174.2-.349.225-.648.075-.3-.15-1.263-.465-2.406-1.485-.887-.79-1.487-1.765-1.662-2.065-.175-.3-.019-.462.13-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.625-.923-2.225-.243-.585-.49-.505-.674-.515a12.9 12.9 0 00-.573-.01c-.2 0-.525.075-.798.375-.274.3-1.047 1.025-1.047 2.5 0 1.475 1.072 2.898 1.222 3.098.15.2 2.11 3.224 5.11 4.516.715.308 1.272.492 1.706.63.717.228 1.37.195 1.884.118.577-.086 1.77-.723 2.02-1.423.25-.7.25-1.3.175-1.424-.075-.125-.275-.2-.575-.35z"
        fill="white"
      />
    </svg>
  );
}

function InquiryIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 text-[#18815f]"
      fill="none"
    >
      <circle
        cx="24"
        cy="24"
        r="12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="24"
        cy="24"
        r="6"
        fill="currentColor"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 text-[#18815f]"
      fill="none"
    >
      <rect
        x="15"
        y="9"
        width="18"
        height="30"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20 17h8M20 22h8M20 27h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FollowUpIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 text-[#18815f]"
      fill="none"
    >
      <circle
        cx="22"
        cy="19"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M11 35c1.5-5.3 5.1-8 11-8 3.1 0 5.5.7 7.3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="33"
        cy="30"
        r="6"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M33 27.5v3l2 1.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HandoverIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 text-[#18815f]"
      fill="none"
    >
      <circle
        cx="22"
        cy="15"
        r="5"
        fill="currentColor"
      />
      <path
        d="M12 34c1.4-5.5 4.8-8 10-8s8.6 2.5 10 8"
        fill="currentColor"
      />
      <path
        d="M29 24h9M34 20l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PatientsIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 text-[#18815f]"
      fill="none"
    >
      <circle
        cx="24"
        cy="15"
        r="5"
        fill="currentColor"
      />
      <circle
        cx="15"
        cy="18"
        r="4"
        fill="currentColor"
      />
      <circle
        cx="33"
        cy="18"
        r="4"
        fill="currentColor"
      />
      <path
        d="M15 34c1-5 4-8 9-8s8 3 9 8"
        fill="currentColor"
      />
      <path
        d="M7 34c1-4 3.5-6 7-6M41 34c-1-4-3.5-6-7-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 text-[#18815f]"
      fill="none"
    >
      <rect
        x="10"
        y="12"
        width="28"
        height="25"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 9v6M32 9v6M10 20h28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 26h4M27 26h4M17 31h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StaffIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 text-[#18815f]"
      fill="none"
    >
      <rect
        x="14"
        y="9"
        width="20"
        height="30"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19 16h10M19 21h10M19 26h7M19 31h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------
   PIPELINE FLOWS
------------------------------------------------------- */

function FlowBox({
  icon,
  children,
  badge,
}: {
  icon: ReactNode;
  children: ReactNode;
  badge?: boolean;
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center">
      <div className="relative flex h-[54px] w-[54px] items-center justify-center rounded-[13px] bg-white shadow-[0_3px_9px_rgba(0,0,0,0.08)]">
        {icon}

        {badge && (
          <span className="absolute -right-[4px] -top-[6px] flex h-[19px] w-[19px] items-center justify-center rounded-full bg-[#e51f2d] text-[10px] font-bold text-white">
            1
          </span>
        )}
      </div>

      <span className="mt-2 text-center text-[10px] font-bold leading-[1.15] text-[#29433c]">
        {children}
      </span>
    </div>
  );
}

function StandardFlow() {
  return (
    <div className="rounded-[13px] bg-[#eef3f6] px-5 py-6">
      <div className="flex items-start justify-between gap-1">
        <FlowBox icon={<WhatsAppIcon />} badge>
          New
          <br />
          Inquiry
        </FlowBox>

        <span className="mt-[22px] shrink-0 text-[20px] font-light text-[#657770]">
          →
        </span>

        <FlowBox icon={<DocumentIcon />}>
          Understand
          <br />
          &amp; Qualify
        </FlowBox>

        <span className="mt-[22px] shrink-0 text-[20px] font-light text-[#657770]">
          →
        </span>

        <FlowBox icon={<FollowUpIcon />}>
          Follow Up
        </FlowBox>

        <span className="mt-[22px] shrink-0 text-[20px] font-light text-[#657770]">
          →
        </span>

        <FlowBox icon={<HandoverIcon />}>
          Handover
          <br />
          to Staff
        </FlowBox>
      </div>
    </div>
  );
}

function GrowthFlow() {
  return (
    <div className="rounded-[13px] bg-[#edf7f1] px-5 pb-4 pt-5">
      <div className="flex items-start justify-between gap-1">
        <FlowBox icon={<WhatsAppIcon />} badge>
          New
          <br />
          Inquiries
        </FlowBox>

        <span className="mt-[19px] shrink-0 text-[20px] font-light text-[#657770]">
          +
        </span>

        <FlowBox icon={<PatientsIcon />}>
          Past Patients
          <br />
          <span className="font-medium">
            (last 6 months)
          </span>
        </FlowBox>

        <span className="mt-[19px] shrink-0 text-[20px] font-light text-[#657770]">
          +
        </span>

        <FlowBox icon={<CalendarIcon />}>
          Consultation
          <br />
          Booking
        </FlowBox>

        <span className="mt-[19px] shrink-0 text-[20px] font-light text-[#657770]">
          +
        </span>

        <FlowBox icon={<StaffIcon />}>
          Staff Context
          <br />
          &amp; Follow-Up
        </FlowBox>
      </div>

      <div className="relative mx-auto mt-2 h-[30px] max-w-[390px]">
        <div className="absolute left-[8%] right-[8%] bottom-[12px] h-[2px] bg-[#2a7a5f]" />

        <div className="absolute left-[8%] bottom-[12px] h-[14px] w-[2px] bg-[#2a7a5f]" />

        <div className="absolute right-[8%] bottom-[12px] h-[14px] w-[2px] bg-[#2a7a5f]" />

        <div className="absolute left-1/2 bottom-[13px] translate-y-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#67ad94] bg-white px-6 py-[6px] text-[10px] font-bold tracking-[0.04em] text-[#27805f]">
          A COMPLETE PATIENT PIPELINE
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   FEATURES
------------------------------------------------------- */

function CheckItem({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#21865f] text-white">
        <svg
          viewBox="0 0 16 16"
          className="h-[11px] w-[11px]"
          fill="none"
        >
          <path
            d="m4 8 2.2 2.3L12 4.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <div className="min-w-0">
        <p className="text-[12px] font-medium leading-[1.25] text-[#263c36]">
          {title}
        </p>

        {description && (
          <p className="mt-[2px] text-[10px] leading-[1.35] text-[#687671]">
            {description}
          </p>
        )}
      </div>
    </li>
  );
}

function SupportIcon({
  type,
}: {
  type: "review" | "updates" | "support" | "secure";
}) {
  if (type === "review") {
    return (
      <svg
        viewBox="0 0 48 48"
        className="h-7 w-7 text-[#173d35]"
        fill="none"
      >
        <circle
          cx="24"
          cy="24"
          r="7"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M24 10v5M24 33v5M10 24h5M33 24h5M14 14l3.5 3.5M30.5 30.5 34 34M34 14l-3.5 3.5M17.5 30.5 14 34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "updates") {
    return (
      <svg
        viewBox="0 0 48 48"
        className="h-7 w-7 text-[#173d35]"
        fill="none"
      >
        <path
          d="M10 15h28M10 24h28M10 33h28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="15" r="3" fill="currentColor" />
        <circle cx="30" cy="24" r="3" fill="currentColor" />
        <circle cx="21" cy="33" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg
        viewBox="0 0 48 48"
        className="h-7 w-7 text-[#173d35]"
        fill="none"
      >
        <path
          d="M11 27v-4a13 13 0 0 1 26 0v4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="8"
          y="25"
          width="8"
          height="11"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="32"
          y="25"
          width="8"
          height="11"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M32 36c-1 3-4 4-8 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7 text-[#173d35]"
      fill="none"
    >
      <path
        d="M24 8 37 13v9c0 8.5-5.4 14.5-13 18-7.6-3.5-13-9.5-13-18v-9l13-5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m18 24 4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */

export default function MonthlyPage({
  config,
}: MonthlyPageProps) {
  const standardPrice = formatPrice(
    PRICING[config.region].standard,
    config.region,
  );

  const growthPrice = formatPrice(
    PRICING[config.region].growth,
    config.region,
  );

  const isIndia = config.region === "in";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfbf8] text-[#17312b]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f7fbf8] px-6 pb-8 pt-7">
        <div className="pointer-events-none absolute -left-[150px] top-[25px] h-[330px] w-[330px] rounded-full bg-[#e9f5ef] opacity-80 blur-[1px]" />

        <div className="pointer-events-none absolute -right-[170px] top-[80px] h-[380px] w-[380px] rounded-full bg-[#edf6f1] opacity-70" />

        <div className="relative mx-auto max-w-[950px] text-center">
          <p className="text-[10px] font-bold tracking-[0.22em] text-[#177459]">
            MONTHLY INFRASTRUCTURE
          </p>

          <h1 className="mx-auto mt-7 max-w-[850px] font-serif text-[38px] font-semibold leading-[1.03] tracking-[-0.045em] text-[#172e28] sm:text-[46px]">
            How much control do you want over <br />your patient inquiry pipeline?
          </h1>

          <p className="mx-auto mt-3 max-w-[730px] text-[14px] font-medium leading-[1.35] text-[#4d5753]">
            Both plans handle the core inquiry workflow. The Growth plan gives
            you more control —
            <br className="hidden sm:block" />
            with booking, reactivation of past patients, staff context and
            deeper clinic support.
          </p>
        </div>
      </section>

      {/* PLAN CARDS */}
      <section className="bg-[#f7fbf8] px-6 pb-7">
        <div className="mx-auto grid max-w-[1000px] gap-5 lg:grid-cols-2">
          {/* STANDARD */}
          <article className="rounded-[12px] border border-[#d8dfdb] bg-white p-6 shadow-[0_2px_8px_rgba(24,49,43,0.025)]">
            <p className="text-[10px] font-bold tracking-[0.17em] text-[#344841]">
              STANDARD PLAN
            </p>

            <h2 className="mt-2 max-w-[420px] font-serif text-[27px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#172e28]">
              Keep every new inquiry
              <br />
              from going unattended.
            </h2>

            <p className="mt-2 max-w-[450px] text-[12px] leading-[1.45] text-[#59635f]">
              A reliable patient inquiry infrastructure for clinics that
              primarily need consistent handling of incoming WhatsApp
              inquiries.
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-sans text-[30px] font-bold tracking-[-0.035em] text-[#172e28]">
                {standardPrice}
              </span>

              <span className="text-[17px] font-semibold text-[#172e28]">
                / month
              </span>
            </div>

            <p className="mt-0 text-[11px] text-[#69736f]">
              (Billed Monthly via Bank/Skydo)
            </p>

            <div className="mt-4">
              <StandardFlow />
            </div>

            <div className="mt-4 rounded-[9px] bg-[#f8faf9] px-4 py-3.5">
              <p className="mb-2 text-[11px] font-bold tracking-[0.14em] text-[#263c35]">
                PREET HANDLES:
              </p>

              <ul className="space-y-[7px]">
                <CheckItem title="24/7 WhatsApp inquiry response" />
                <CheckItem title="Patient qualification & information collection" />
                <CheckItem title="Hair-loss concern & basic photo collection" />
                <CheckItem title="Conversation summary for your team" />
                <CheckItem title="Standard follow-up sequence" />
                <CheckItem title="Staff handover when human attention is needed" />
                <CheckItem title="WhatsApp infrastructure & secure hosting" />
                <CheckItem title="Ongoing system support and basic adjustments" />
              </ul>
            </div>

            <div className="mt-3 rounded-[9px] bg-[#edf2f5] px-5 py-3.5">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <svg
                    viewBox="0 0 48 48"
                    className="h-9 w-9 text-[#173d35]"
                    fill="none"
                  >
                    <path
                      d="M8 38h6V27H8v11ZM21 38h6V18h-6v20ZM34 38h6V10h-6v28Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[13px] font-medium text-[#354640]">
                    You get:
                  </p>

                  <p className="text-[15px] font-bold leading-[1.2] text-[#172e28]">
                    A reliable front-line system for new
                    <br />
                    patient inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              {isIndia ? (
                <a
                  href={INDIA_STANDARD_RAZORPAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[43px] w-full items-center justify-center rounded-full border border-[#263d36] bg-white text-[13px] font-bold text-[#263d36] transition hover:bg-[#f5f8f6]"
                >
                  Deploy Standard Plan
                  <span className="ml-2 text-[17px]">→</span>
                </a>
              ) : (
                <Link
                  href="#billing"
                  className="flex h-[43px] w-full items-center justify-center rounded-full border border-[#263d36] bg-white text-[13px] font-bold text-[#263d36] transition hover:bg-[#f5f8f6]"
                >
                  Deploy Standard Plan
                  <span className="ml-2 text-[17px]">→</span>
                </Link>
              )}
            </div>
          </article>

          {/* GROWTH */}
          <article className="relative rounded-[12px] border-[2px] border-[#167454] bg-[#f9fcfa] p-[22px] shadow-[0_3px_12px_rgba(22,116,84,0.035)]">
            <div className="absolute right-4 top-3 rounded-full bg-[#087050] px-4 py-[7px] text-[9px] font-bold tracking-[0.03em] text-white">
              RECOMMENDED
            </div>

            <p className="text-[10px] font-bold tracking-[0.17em] text-[#344841]">
              GROWTH PLAN
            </p>

            <h2 className="mt-2 max-w-[450px] font-serif text-[27px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#172e28]">
              Go beyond new inquiries and
              <br />
              actively manage the pipeline.
            </h2>

            <p className="mt-2 max-w-[455px] text-[12px] leading-[1.45] text-[#59635f]">
              For clinics that want PREET to help the team recover
              opportunities, move patients toward consultation, and maintain
              context across the clinic.
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-sans text-[30px] font-bold tracking-[-0.035em] text-[#172e28]">
                {growthPrice}
              </span>

              <span className="text-[17px] font-semibold text-[#172e28]">
                / month
              </span>
            </div>

            <p className="mt-0 text-[11px] text-[#69736f]">
              (Billed Monthly via Bank/Skydo)
            </p>

            <div className="mt-4">
              <GrowthFlow />
            </div>

            <div className="mt-4 rounded-[9px] bg-[#eef8f2] px-4 py-3.5">
              <p className="mb-2 text-[11px] font-bold tracking-[0.14em] text-[#263c35]">
                EVERYTHING IN STANDARD, PLUS:
              </p>

              <ul className="space-y-[7px]">
                <CheckItem
                  title="Consultation Booking"
                  description="Move suitable patients directly toward available consultation slots."
                />

                <CheckItem
                  title="6-Month Patient Reactivation"
                  description="Structured re-engagement for older inquiries that never reached consultation."
                />

                <CheckItem
                  title="Lead Recovery Workflows"
                  description="Follow up with patients who stopped responding or left incomplete."
                />

                <CheckItem
                  title="Clinic Context & Staff Notes"
                  description="Important patient context remains available for your team."
                />

                <CheckItem
                  title="Walk-in / OPD Quick Add"
                  description="Staff can add patients from walk-ins or other channels."
                />

                <CheckItem
                  title="Calendar / CRM Integration"
                  description="Connect with your consultation scheduling and clinic systems."
                />

                <CheckItem
                  title="Monthly Workflow Review & Optimization"
                  description="We review performance and adjust workflows based on real conversations."
                />

                <CheckItem
                  title="Priority Support"
                  description="Faster support for workflow changes, integrations and operational issues."
                />
              </ul>
            </div>

            <div className="mt-3 rounded-[9px] bg-[#eaf6ef] px-5 py-3.5">
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <svg
                    viewBox="0 0 48 48"
                    className="h-9 w-9 text-[#087050]"
                    fill="none"
                  >
                    <path
                      d="M8 34 18 24l7 6 15-18"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M31 12h9v9"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-[13px] font-medium text-[#354640]">
                    You get:
                  </p>

                  <p className="text-[15px] font-bold leading-[1.2] text-[#172e28]">
                    A system that doesn’t just handle today’s inquiries —
                    <br />
                    it helps your clinic keep working the entire pipeline.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              {isIndia ? (
                <a
                  href={INDIA_GROWTH_RAZORPAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[43px] w-full items-center justify-center rounded-full bg-[#075c48] text-[13px] font-bold text-white transition hover:bg-[#064d3d]"
                >
                  Deploy Growth Plan
                  <span className="ml-2 text-[17px]">→</span>
                </a>
              ) : (
                <Link
                  href="#billing"
                  className="flex h-[43px] w-full items-center justify-center rounded-full bg-[#075c48] text-[13px] font-bold text-white transition hover:bg-[#064d3d]"
                >
                  Deploy Growth Plan
                  <span className="ml-2 text-[17px]">→</span>
                </Link>
              )}
            </div>
          </article>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="bg-[#fbfbf8] px-6 pb-5 pt-2">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex items-center gap-5">
            <div className="h-px flex-1 bg-[#dce3df]" />

            <p className="shrink-0 text-[11px] font-bold tracking-[0.18em] text-[#315047]">
              CLINIC SUPPORT &amp; ONGOING OPTIMIZATION
            </p>

            <div className="h-px flex-1 bg-[#dce3df]" />
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex min-h-[91px] items-start gap-4 rounded-[8px] bg-[#f1f6f3] px-4 py-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4f1eb]">
                <SupportIcon type="review" />
              </div>

              <div>
                <h3 className="text-[13px] font-bold text-[#203b33]">
                  Monthly Workflow Review
                </h3>

                <p className="mt-1 text-[10px] leading-[1.35] text-[#64716c]">
                  We review how patient conversations are progressing and
                  identify areas for improvement.
                </p>
              </div>
            </div>

            <div className="flex min-h-[91px] items-start gap-4 rounded-[8px] bg-[#f1f6f3] px-4 py-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4f1eb]">
                <SupportIcon type="updates" />
              </div>

              <div>
                <h3 className="text-[13px] font-bold text-[#203b33]">
                  Clinic Updates
                </h3>

                <p className="mt-1 text-[10px] leading-[1.35] text-[#64716c]">
                  When your pricing, procedures or consultation process
                  changes, we update the system.
                </p>
              </div>
            </div>

            <div className="flex min-h-[91px] items-start gap-4 rounded-[8px] bg-[#f1f6f3] px-4 py-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4f1eb]">
                <SupportIcon type="support" />
              </div>

              <div>
                <h3 className="text-[13px] font-bold text-[#203b33]">
                  Priority Support
                </h3>

                <p className="mt-1 text-[10px] leading-[1.35] text-[#64716c]">
                  Growth clinics receive higher-priority support for workflow
                  issues, integrations and adjustments.
                </p>
              </div>
            </div>

            <div className="flex min-h-[91px] items-start gap-4 rounded-[8px] bg-[#f1f6f3] px-4 py-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e4f1eb]">
                <SupportIcon type="secure" />
              </div>

              <div>
                <h3 className="text-[13px] font-bold text-[#203b33]">
                  Secure &amp; Reliable
                </h3>

                <p className="mt-1 text-[10px] leading-[1.35] text-[#64716c]">
                  Meta-verified WhatsApp route, secure infrastructure and
                  commercial invoicing.
                </p>
              </div>
            </div>
          </div>

          {/* PAYMENT NOTE */}
          <div
            id="billing"
            className="flex items-center justify-center gap-2 pb-1 pt-3"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-[#172e28]"
              fill="currentColor"
            >
              <path d="M17 8h-1V6a4 4 0 0 0-8 0v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2Zm-7-2a2 2 0 0 1 4 0v2h-4V6Zm5 9h-6v-2h6v2Z" />
            </svg>

            <p className="text-[10px] font-medium text-[#596660]">
              All payments processed via local corporate bank transfer &amp;
              verified commercial invoicing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}