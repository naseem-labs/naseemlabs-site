import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, MessageSquare, Settings, Users } from "lucide-react";
import { Inter, Newsreader } from "next/font/google";
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
  title: "About — NaseemLabs",
  description:
    "NaseemLabs builds patient-progression infrastructure for hair restoration clinics.",
};

const IVORY = "#f7f6f2";
const TEXT = "#111111";
const BORDER = "rgba(26,28,24,0.10)";

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

const storyCards = [
  {
    label: "THE PROBLEM",
    title: "Valuable inquiries lose momentum.",
    description:
      "Many clinics generate strong inquiry volume, but potential patients don't reach consultation due to delayed responses, repetitive questions, unanswered concerns, or lack of follow-up.",
    icon: MessageSquare,
  },
  {
    label: "THE REALITY",
    title: "Patients expect instant, accurate answers.",
    description:
      "Patient attention spans are short. When someone inquires at 11 PM or during a busy Monday morning, they expect instant, accurate, and medically-sound answers. A generic 'We will call you back' doesn't work anymore.",
    icon: Settings,
  },
  {
    label: "THE NASEEMLABS SOLUTION",
    title: "PREET keeps the conversation moving.",
    description:
      "That's why we built PREET — a dedicated patient-progression infrastructure. Not just a chatbot, but a system that understands Norwood scales, graft counts, and patient psychology.",
    icon: CheckCircle2,
  },
];

const featureCards = [
  {
    icon: CheckCircle2,
    title: "Deep Industry Focus",
    description:
      "We only build for hair restoration clinics. We understand Norwood scales, graft counts, common patient concerns and your clinic's workflow.",
  },
  {
    icon: Settings,
    title: "Infrastructure, Not Chatbots",
    description:
      "We provide a reliable system that handles the heavy lifting of patient education, objection handling, information collection and follow-up.",
  },
  {
    icon: Users,
    title: "Zero Staff Friction",
    description:
      "Built to work alongside your existing team without adding new software to learn. Your team stays in control, with full visibility and easy handover.",
  },
];

export default function AboutPage() {
  return (
    <div
      className={`${inter.className} min-h-screen overflow-x-hidden antialiased`}
      style={{
        backgroundColor: IVORY,
        color: TEXT,
      }}
    >
      <SiteHeader activePage="about" />

      <main>
        {/* ====================================================== */}
        {/* HERO                                                   */}
        {/* ====================================================== */}

        <section className="relative min-h-[470px] overflow-hidden bg-[#061b19] text-white sm:min-h-[500px]">
          <Image
            src="/homepage/final-hero-image.png"
            alt="Hair restoration clinic environment"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#031815]/95 via-[#031815]/75 to-[#031815]/25" />

          <div className="absolute inset-0 bg-[#002c28]/20" />

          <div className="relative mx-auto flex min-h-[470px] max-w-[1180px] items-center px-5 py-14 sm:min-h-[500px] sm:px-8 lg:px-10">
            <div className="max-w-[590px]">
              <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#71d8c4] sm:text-[10px]">
                About NaseemLabs
              </p>

              <h1
                className={`${newsreader.className} mt-4 text-[42px] font-medium leading-[0.98] tracking-[-0.035em] sm:text-[54px] lg:text-[60px]`}
              >
                Built by Operators.
                <br />
                Designed for
                <br />
                <span className="text-[#5ee0c7]">Hair Restoration.</span>
              </h1>

              <p className="mt-5 max-w-[540px] text-[13px] leading-[1.7] text-white/80 sm:text-[15px]">
                NaseemLabs builds patient-progression infrastructure for
                hair-transplant clinics. We understand the industry, the
                patients, and the operational challenges — because we&apos;ve
                worked closely with clinics and seen what actually happens
                behind the scenes.
              </p>

              <WhatsAppLink
                className="mt-7 inline-flex min-h-[46px] items-center gap-2 rounded-md bg-[#08a98e] px-5 py-3 text-[12px] font-semibold text-white transition hover:bg-[#09977f]"
              >
                Test PREET Yourself
                <span className="text-[16px]">→</span>
              </WhatsAppLink>
            </div>

            <div className="absolute bottom-7 right-6 hidden max-w-[190px] border-l border-[#64d7c1]/50 pl-4 text-[11px] leading-[1.55] text-white/65 lg:block">
              Real industry challenges.
              <br />
              Practical solutions.
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* STORY                                                   */}
        {/* ====================================================== */}

        <section
          className="border-b px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
          style={{ borderColor: BORDER }}
        >
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#087f6b]">
                  The Story
                </p>

                <h2
                  className={`${newsreader.className} mt-3 max-w-[620px] text-[34px] font-medium leading-[1.03] tracking-[-0.035em] sm:text-[43px]`}
                >
                  We saw a serious problem in the hair transplant industry.
                </h2>
              </div>

              <div className="flex items-end">
                <p className="max-w-[390px] text-[13px] leading-[1.7] text-[#555] sm:text-[14px]">
                  World-class surgeons were spending significant amounts on
                  marketing to generate inquiries, but losing high-value
                  patients because their front-desk was overwhelmed, off-duty,
                  or busy handling in-clinic patients.
                </p>
              </div>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {storyCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="rounded-xl border bg-white p-5 sm:p-6"
                    style={{ borderColor: BORDER }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dff2ed] text-[#087f6b]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>

                    <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#087f6b]">
                      {card.label}
                    </p>

                    <h3
                      className={`${newsreader.className} mt-2 text-[21px] font-medium leading-[1.05] tracking-[-0.02em] text-[#111]`}
                    >
                      {card.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.65] text-[#666] sm:text-[12px]">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* WHY NASEEMLABS                                          */}
        {/* ====================================================== */}

        <section className="bg-[#062823] px-5 py-12 text-white sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#70d8c2]">
                  Why NaseemLabs
                </p>

                <h2
                  className={`${newsreader.className} mt-3 text-[34px] font-medium leading-[1] tracking-[-0.035em] sm:text-[43px]`}
                >
                  Built for the realities of your clinic.
                </h2>
              </div>

              <p className="max-w-[380px] text-[12px] leading-[1.7] text-white/65 sm:text-[13px]">
                We focus on what actually matters for hair restoration
                clinics — real patient conversations, real concerns, and real
                operational workflows.
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {featureCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#087f6b] text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-5 text-[16px] font-semibold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-[11px] leading-[1.7] text-white/60 sm:text-[12px]">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================== */}
        {/* FINAL CTA                                               */}
        {/* ====================================================== */}

        <section className="relative min-h-[330px] overflow-hidden">
          <Image
            src="/homepage/final-hero-image.png"
            alt="Hair restoration clinic"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[#062823]/80" />

          <div className="relative flex min-h-[330px] items-center justify-center px-5 py-14 text-center">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#70d8c2]">
                See It In Action
              </p>

              <h2
                className={`${newsreader.className} mt-3 text-[34px] font-medium leading-[1] tracking-[-0.03em] text-white sm:text-[43px]`}
              >
                Experience the Difference
              </h2>

              <p className="mx-auto mt-4 max-w-[570px] text-[12px] leading-[1.7] text-white/70 sm:text-[13px]">
                See how PREET handles real patient inquiries and moves them
                towards consultation.
              </p>

              <WhatsAppLink className="mt-7 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-[#08a98e] px-6 py-3 text-[12px] font-semibold text-white transition hover:bg-[#09977f]">
                <WhatsAppIcon className="h-4 w-4" />
                Test PREET Yourself
                <span className="text-[16px]">→</span>
              </WhatsAppLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
