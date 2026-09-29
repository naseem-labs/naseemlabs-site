import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import WhatsAppLink from "@/components/whatsapp-link";
import { DEMO_PATH } from "@/lib/site-config";

const GREEN = "#1a3c34";
const DARK = "#1a3c34";
const PAGE = "#f7f6f2";
const WHITE = "#ffffff";
const BORDER = "rgba(16,23,23,0.09)";
const CHAT_BG = "#efeae2";
const CHAT_GREEN = "#d9fdd3";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.099-.497-.099-.198-.05-.371-.025-.52.075-.149.669-1.612.916-2.207.242-.579.487-.5.669-.51.173-.008.371-.01.57-.01.198 0 .52.074.792.372.272.297 1.04 1.016 1.04 2.479 0 1.462-1.065 2.875-1.213 3.074-.149.198-2.096 3.2-5.077 4.487-.709.306-1.262.489-1.694.625-.712.227-1.36.195-1.871.118-.571-.085-1.758-.719-2.006-1.413-.248-.694-.248-1.289-.173-1.413.074-.124.272-.198.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-[9px] font-bold uppercase tracking-[0.16em] ${
        dark ? "text-white/70" : "text-[#1a3c34]/80"
      }`}
    >
      {children}
    </p>
  );
}

function PhoneMockup({
  messages,
}: {
  messages: {
    side: "left" | "right";
    text: string;
    time?: string;
  }[];
}) {
  return (
    <div className="mx-auto w-full max-w-[275px] rounded-[27px] border-[5px] border-[#171b1b] bg-[#111] p-[3px] shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
      <div className="overflow-hidden rounded-[20px] bg-white">
        <div className="flex items-center gap-2 bg-white px-3 py-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a3c34] text-[9px] font-bold text-white">
            P
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold text-[#18201f]">PREET</p>
            <p className="text-[6px] text-[#7b8381]">
              Hair Transplant Clinic
            </p>
          </div>

          <Phone className="h-3 w-3 text-[#69716f]" />
        </div>

        <div className="flex items-center gap-2 bg-[#f0f2f3] px-3 py-1.5 text-[6px] text-[#7a8380]">
          <span>Today</span>
        </div>

        <div
          className="min-h-[235px] space-y-2 p-2.5"
          style={{ backgroundColor: CHAT_BG }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.side === "right"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[84%] rounded-[9px] px-2.5 py-2 text-[8px] leading-[1.4] text-[#27302e] ${
                  message.side === "right"
                    ? "rounded-br-[3px]"
                    : "rounded-bl-[3px] bg-white"
                }`}
                style={{
                  backgroundColor:
                    message.side === "right" ? CHAT_GREEN : WHITE,
                }}
              >
                {message.text}

                {message.time && (
                  <span className="ml-1.5 whitespace-nowrap text-[5px] text-[#7d8582]">
                    {message.time}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 border-t border-[#e3e5e5] bg-white px-2 py-2">
          <div className="flex-1 rounded-full bg-[#f2f4f4] px-2.5 py-1.5 text-[6px] text-[#9aa09e]">
            Type a message...
          </div>

          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a3c34] text-white">
            <WhatsAppIcon className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepBar() {
  const steps = [
    ["01", "Inquiry", "Patient reaches out"],
    ["02", "Understand", "Learn their situation"],
    ["03", "Identify", "Concerns or blockers"],
    ["04", "Explain", "Clear why + how"],
    ["05", "Collect", "Information + photos"],
    ["06", "Progress", "Offer consultation"],
    ["07", "Handover", "Your team takes over"],
  ];

  return (
    <section
      className="border-y bg-white"
      style={{ borderColor: BORDER }}
    >
      <div className="mx-auto flex max-w-[1180px] overflow-x-auto px-4 py-3.5 sm:px-6 lg:px-8">
        {steps.map(([number, title, description], index) => (
          <div
            key={number}
            className="flex min-w-[118px] flex-1 items-center"
          >
            <div className="min-w-0 flex-1 text-center">
              <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#1a3c34] text-[9px] font-bold text-white">
                {number}
              </div>

              <p className="mt-1.5 text-[9px] font-bold text-[#1a2422]">
                {title}
              </p>

              <p className="mt-0.5 whitespace-nowrap text-[6px] text-[#818886]">
                {description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <ChevronRight className="h-3 w-3 shrink-0 text-[#c4ccca]" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoCard({
  title,
  items,
  dark = false,
}: {
  title: string;
  items: string[];
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[4px] border p-4 sm:p-5 ${
        dark
          ? "border-white/10 bg-white/[0.025]"
          : "border-black/[0.07] bg-white/80"
      }`}
    >
      <p
        className={`text-[10px] font-bold ${
          dark ? "text-white" : "text-[#17201e]"
        }`}
      >
        {title}
      </p>

      <ul className="mt-3.5 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className={`flex gap-2 text-[8px] leading-[1.45] sm:text-[9px] ${
              dark ? "text-white/72" : "text-[#59615f]"
            }`}
          >
            <CheckCircle2
              className={`mt-[1px] h-3 w-3 shrink-0 ${
                dark ? "text-[#5de0c6]" : "text-[#1a3c34]"
              }`}
              strokeWidth={2.1}
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkflowRow({
  number,
  eyebrow,
  title,
  description,
  dark = false,
  center,
  rightTitle,
  rightItems,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
  center: React.ReactNode;
  rightTitle: string;
  rightItems: string[];
}) {
  return (
    <section
      className={dark
        ? "bg-[#1a3c34] text-white"
        : "bg-[#f7f6f2] text-[#121212]"}
    >
      <div
        className="mx-auto grid max-w-[1180px] items-center gap-7 border-b px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[0.92fr_1.12fr_0.9fr] lg:gap-8 lg:px-8 lg:py-11"
        style={{
          borderColor: dark
            ? "rgba(255,255,255,0.08)"
            : BORDER,
        }}
      >
        <div className="relative pl-9 sm:pl-10">
          <div
            className={`absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-semibold ${
              dark
                ? "bg-white/10 text-[#5de0c6]"
                : "bg-[#eef3ee] text-[#1a3c34]"
            }`}
          >
            {number}
          </div>

          <Eyebrow dark={dark}>{eyebrow}</Eyebrow>

          <h2 className="mt-2 max-w-[350px] font-serif text-[24px] leading-[1.04] tracking-[-0.025em] sm:text-[30px]">
            {title}
          </h2>

          <p
            className={`mt-3 max-w-[350px] text-[9px] leading-[1.65] sm:text-[10px] ${
              dark ? "text-white/68" : "text-[#68706e]"
            }`}
          >
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center">
          {center}
        </div>

        <InfoCard
          title={rightTitle}
          items={rightItems}
          dark={dark}
        />
      </div>
    </section>
  );
}

function AssessmentPanel() {
  return (
    <div className="w-full max-w-[450px] space-y-2.5">
      <div className="grid grid-cols-3 gap-2">
        <div className="overflow-hidden rounded-[5px] border border-black/[0.06] bg-white">
          <Image
            src="/homepage/scalp-front.jpg"
            alt="Front scalp assessment"
            width={220}
            height={160}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-[5px] border border-black/[0.06] bg-white">
          <Image
            src="/homepage/scalp-top.jpg"
            alt="Top scalp assessment"
            width={220}
            height={160}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-[5px] border border-black/[0.06] bg-white">
          <Image
            src="/homepage/scalp-side.jpg"
            alt="Side scalp assessment"
            width={220}
            height={160}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </div>

      <div className="rounded-[5px] border border-black/[0.07] bg-white p-3.5">
        <div className="flex items-center justify-between border-b border-black/[0.06] pb-2.5">
          <p className="text-[9px] font-bold text-[#1b2523]">
            Preliminary Assessment (Example)
          </p>

          <span className="rounded-full bg-[#eef3ee] px-2 py-1 text-[6px] font-bold text-[#1a3c34]">
            PRELIMINARY
          </span>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-x-5 gap-y-2 text-[7px] sm:text-[8px]">
          <div>
            <span className="text-[#8b9290]">Norwood Stage</span>
            <p className="mt-0.5 font-semibold">III</p>
          </div>

          <div>
            <span className="text-[#8b9290]">Estimated Grafts</span>
            <p className="mt-0.5 font-semibold">2,500 – 3,000</p>
          </div>

          <div>
            <span className="text-[#8b9290]">Estimated Price</span>
            <p className="mt-0.5 font-semibold">£4,000 – £6,000</p>
          </div>

          <div>
            <span className="text-[#8b9290]">Affected Area</span>
            <p className="mt-0.5 font-semibold">Front + Mid Scalp</p>
          </div>

          <div>
            <span className="text-[#8b9290]">Donor Area</span>
            <p className="mt-0.5 font-semibold">Good coverage</p>
          </div>

          <div>
            <span className="text-[#8b9290]">Assessment</span>
            <p className="mt-0.5 font-semibold">Preliminary only</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HandoverPanel() {
  return (
    <div className="w-full max-w-[450px] rounded-[5px] border border-black/[0.08] bg-white p-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between border-b border-black/[0.06] pb-2.5">
        <div>
          <p className="text-[9px] font-bold text-[#18211f]">
            NaseemLabs
          </p>
          <p className="text-[6px] text-[#8a918f]">
            Clinic workspace
          </p>
        </div>

        <span className="rounded-full bg-[#eef3ee] px-2 py-1 text-[6px] font-bold text-[#1a3c34]">
          Consultation Booked
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-[70px_1fr] gap-2.5">
        <div className="space-y-1.5 border-r border-black/[0.06] pr-2 text-[6px] text-[#7c8481]">
          <p className="rounded bg-[#eef3ee] px-1.5 py-1 font-semibold text-[#1a3c34]">
            Conversations
          </p>
          <p>Patients</p>
          <p>Consultations</p>
          <p>Follow-ups</p>
          <p>Staff Notes</p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-bold text-[#17201e]">
              john doe
            </p>

            <span className="text-[6px] text-[#1a3c34]">
              ● Consultation Booked
            </span>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="rounded bg-[#f5f7f6] p-1.5">
              <p className="text-[5px] text-[#8a918f]">Concern</p>
              <p className="mt-0.5 text-[6px] font-semibold">
                Grafts, cost, recovery
              </p>
            </div>

            <div className="rounded bg-[#f5f7f6] p-1.5">
              <p className="text-[5px] text-[#8a918f]">
                Estimated Price
              </p>
              <p className="mt-0.5 text-[6px] font-semibold">
                £4,000 – £6,000
              </p>
            </div>

            <div className="rounded bg-[#f5f7f6] p-1.5">
              <p className="text-[5px] text-[#8a918f]">
                Estimated Grafts
              </p>
              <p className="mt-0.5 text-[6px] font-semibold">
                2,500 – 3,000
              </p>
            </div>

            <div className="rounded bg-[#f5f7f6] p-1.5">
              <p className="text-[5px] text-[#8a918f]">Status</p>
              <p className="mt-0.5 text-[6px] font-semibold">
                Consultation accepted
              </p>
            </div>
          </div>

          <div className="mt-2 rounded bg-[#e8f5ef] px-2 py-1.5 text-[6px] text-[#36554d]">
            Next action: Clinic to contact patient
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <main
      className="overflow-hidden"
      style={{ backgroundColor: PAGE }}
    >
      {/* HERO */}

      <section className="relative overflow-hidden bg-[#f7f6f2]">
        <div className="mx-auto grid max-w-[1180px] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:px-8 lg:py-16">
            <Eyebrow>How It Works</Eyebrow>

            <h1 className="mt-3 max-w-[540px] font-serif text-[40px] leading-[0.96] tracking-[-0.04em] text-[#111b1a] sm:text-[53px] lg:text-[57px]">
              From first message
              <br />
              to consultation.
            </h1>

            <p className="mt-4 max-w-[470px] text-[11px] leading-[1.65] text-[#586461] sm:text-[12px]">
              See exactly how PREET keeps a patient inquiry moving,
              handles concerns, collects the right information and gets
              the patient to the point where your team can take over.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <Link
                href={DEMO_PATH}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#1a3c34] px-5 py-3 text-[14px] font-medium text-white"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                See a Real Conversation
                <ArrowRight className="h-3 w-3" />
              </Link>

              <WhatsAppLink
                className="inline-flex min-h-[38px] items-center rounded-[5px] border border-black/[0.08] bg-white px-4 py-2.5 text-[9px] font-bold text-[#26302e]"
              >
                Test PREET Yourself
              </WhatsAppLink>
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[455px]">
            <Image
              src="/homepage/final-hero-image.png"
              alt="Hair restoration consultation"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f2] via-transparent to-black/10" />

            <div className="absolute bottom-[-2px] left-[8%] w-[185px] sm:left-[16%] sm:w-[215px] lg:left-[12%] lg:w-[235px]">
              <PhoneMockup
                messages={[
                  {
                    side: "left",
                    text: "Hi, I'm interested in a hair transplant. How much does it cost?",
                    time: "10:21",
                  },
                  {
                    side: "right",
                    text: "I'd be happy to help. To give you an accurate estimate, could you tell me a bit about your current hair condition?",
                    time: "10:22",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <StepBar />

      {/* STEP 01 */}

      <WorkflowRow
        number="01"
        eyebrow="INQUIRY"
        title="A patient reaches out on WhatsApp."
        description="The conversation starts with a simple question. This could be about cost, procedure, recovery, or just general information."
        rightTitle="What PREET is doing here"
        rightItems={[
          "Recognizes a new inquiry",
          "Understands the initial intent",
          "Starts a natural conversation",
          "Avoids a generic one-line response",
        ]}
        center={
          <PhoneMockup
            messages={[
              {
                side: "left",
                text: "Hi, I'm interested in a hair transplant. How much does it cost?",
                time: "10:21",
              },
              {
                side: "right",
                text: "I'd be happy to help. To give you an accurate estimate, could you tell me a bit about your current hair condition?",
                time: "10:22",
              },
            ]}
          />
        }
      />

      {/* STEP 02 */}

      <WorkflowRow
        number="02"
        eyebrow="UNDERSTAND"
        title="Understands the patient’s situation."
        description="PREET asks relevant questions to understand the patient’s goals, hair loss pattern, timeline and expectations."
        dark
        rightTitle="What PREET is doing here"
        rightItems={[
          "Understands the patient's situation",
          "Identifies relevant information",
          "Asks structured questions",
          "Builds a clear picture before giving estimates",
        ]}
        center={
          <PhoneMockup
            messages={[
              {
                side: "left",
                text: "I've been losing hair for about 5 years. Mainly the front and crown.",
                time: "10:23",
              },
              {
                side: "right",
                text: "Thanks for sharing. Could you also tell me: • When did you first notice hair loss? • Is it still progressing? • Have you had any previous treatments?",
                time: "10:24",
              },
            ]}
          />
        }
      />

      {/* STEP 03 */}

      <WorkflowRow
        number="03"
        eyebrow="IDENTIFY CONCERN"
        title="Finds out what is holding the patient back."
        description="Every patient has specific concerns. PREET identifies what matters most for this patient so the conversation goes in the right direction."
        rightTitle="Common patient concerns"
        rightItems={[
          "Number of grafts",
          "Cost and budget",
          "Pain and recovery",
          "Results and natural look",
          "Trust and safety",
          "Travel and stay (international patients)",
        ]}
        center={
          <PhoneMockup
            messages={[
              {
                side: "left",
                text: "I'm mainly worried about how many grafts I'll need and the total cost.",
                time: "10:28",
              },
              {
                side: "right",
                text: "That's completely understandable. Let me explain how we estimate grafts and what affects the cost.",
                time: "10:29",
              },
            ]}
          />
        }
      />

      {/* STEP 04 */}

      <WorkflowRow
        number="04"
        eyebrow="EXPLAIN WHY + HOW"
        title="Gives clear explanations, not just quick answers."
        description="PREET explains reasoning in simple terms — the WHY and HOW behind the recommendations, based on the clinic’s configured information."
        dark
        rightTitle="Clear and educational responses"
        rightItems={[
          "Explains the reasoning (WHY)",
          "Explains the process (HOW)",
          "Uses clinic-specific information",
          "Helps the patient make an informed decision",
        ]}
        center={
          <PhoneMockup
            messages={[
              {
                side: "left",
                text: "I'm mainly worried about how many grafts?",
                time: "10:30",
              },
              {
                side: "right",
                text: "The number of grafts depends on: • The areas affected (front, crown, etc.) • The size of the area • The density you want to achieve. A closer look at your scalp photos gives a much more accurate estimate than a generic number.",
                time: "10:31",
              },
            ]}
          />
        }
      />

      {/* STEP 05 */}

      <WorkflowRow
        number="05"
        eyebrow="COLLECT INFORMATION"
        title="Requests and analyzes scalp photos."
        description="When needed, PREET asks for scalp images, analyzes them and provides a preliminary explanation to help the patient understand their situation."
        rightTitle="Preliminary Assessment (Example)"
        rightItems={[
          "Norwood Stage — III",
          "Estimated Grafts — 2,500 – 3,000",
          "Estimated Price — £4,000 – £6,000",
          "Affected Area — Front + Mid Scalp",
          "Donor Area — Good coverage",
        ]}
        center={<AssessmentPanel />}
      />

      {/* STEP 06 */}

      <WorkflowRow
        number="06"
        eyebrow="PROGRESS"
        title="Handles objections and moves the conversation."
        description="If the patient has concerns or hesitates, PREET identifies the blocker, provides relevant information and continues the conversation until the patient is ready."
        dark
        rightTitle="The progression loop"
        rightItems={[
          "Identify the concern",
          "Explain and clarify",
          "Offer consultation",
          "If not ready → handle the blocker",
          "Continue until accepted or handover",
        ]}
        center={
          <PhoneMockup
            messages={[
              {
                side: "left",
                text: "That's more expensive than I expected.",
                time: "10:34",
              },
              {
                side: "right",
                text: "I understand. The total cost depends on the number of grafts and the technique used. Many patients choose to start with a smaller area or discuss options with our doctor to find the right plan for their budget.",
                time: "10:35",
              },
            ]}
          />
        }
      />

      {/* STEP 07 */}

      <WorkflowRow
        number="07"
        eyebrow="CONSULTATION + HANDOVER"
        title="When the patient is ready, your team takes over."
        description="Once the patient accepts a consultation, your clinic receives a notification with a full conversation, summary and next steps."
        rightTitle="Clinic receives"
        rightItems={[
          "Full patient conversation",
          "Conversation summary",
          "Patient intent and concerns",
          "Relevant assessment information",
          "Consultation status",
          "Human handover notification",
        ]}
        center={<HandoverPanel />}
      />

      {/* CTA */}

      <section className="relative overflow-hidden">
        <div className="relative min-h-[330px] sm:min-h-[370px]">
          <Image
            src="/homepage/final-hero-image.png"
            alt="Hair restoration clinic"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[#002c28]/80" />

          <div className="relative mx-auto flex min-h-[330px] max-w-[850px] flex-col items-center justify-center px-5 text-center text-white sm:min-h-[370px]">
            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#5de0c6]">
              See It In Action
            </p>

            <h2 className="mt-3 font-serif text-[34px] leading-none tracking-[-0.03em] sm:text-[45px]">
              Try a real patient scenario.
            </h2>

            <p className="mt-3 max-w-[580px] text-[10px] leading-[1.6] text-white/72 sm:text-[11px]">
              Ask the questions your patients actually ask. Raise concerns.
              Share photos. See how the conversation moves.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            <WhatsAppLink
              className="inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#1a3c34] px-5 py-3 text-[14px] font-medium text-white"
            >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                Test PREET Yourself
                <ArrowRight className="h-3 w-3" />
            </WhatsAppLink>

              <Link
                href={DEMO_PATH}
                className="inline-flex min-h-[38px] items-center rounded-[5px] border border-white/25 bg-black/10 px-4 py-2.5 text-[9px] font-bold text-white"
              >
                See a Complete Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
