import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
  title: "Live Demo — NaseemLabs",
  description:
    "See a real patient journey and experience how FolliCore moves a hair restoration inquiry toward consultation.",
};

const IVORY = "#f7f6f2";
const TEXT = "#111111";

const DEMO_VIDEO_ID = "VwP7TXbx7Mo";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
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

function JourneyCard({
  number,
  title,
  description,
  side = "left",
}: {
  number: string;
  title: string;
  description: string;
  side?: "left" | "right";
}) {
  return (
    <div
      className={`relative flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3.5 backdrop-blur-sm sm:p-4 ${
        side === "right" ? "lg:translate-x-1" : "lg:-translate-x-1"
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087f6b] text-[11px] font-semibold text-white shadow-[0_0_0_4px_rgba(8,127,107,0.10)]">
        {number}
      </div>

      <div>
        <h3 className="text-[13px] font-semibold leading-tight text-white">
          {title}
        </h3>

        <p className="mt-1.5 text-[10px] leading-[1.55] text-white/65 sm:text-[11px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function PhoneVideo() {
  return (
    <div className="relative mx-auto w-[270px] sm:w-[290px]">
      <div className="relative rounded-[38px] border-[7px] border-[#151515] bg-[#080808] p-[3px] shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
        <div className="absolute left-1/2 top-[9px] z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

        <div className="relative overflow-hidden rounded-[29px] bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${DEMO_VIDEO_ID}`}
            title="NaseemLabs FolliCore patient journey"
            className="block aspect-[9/19.5] w-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <div className="pointer-events-none absolute inset-0 rounded-[29px] ring-1 ring-white/10" />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-3 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-black/70" />
    </div>
  );
}

export default function DemoPage() {
  return (
    <div
      className={`${inter.className} min-h-screen overflow-x-hidden antialiased`}
      style={{
        backgroundColor: IVORY,
        color: TEXT,
      }}
    >
      <SiteHeader activePage="demo" />

      <main>
        {/* ========================================================= */}
        {/* HERO / LIVE DEMO                                         */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#071d1b] text-white">
          <div className="absolute inset-0">
            <Image
              src="/homepage/final-hero-image.png"
              alt=""
              fill
              priority
              className="object-cover object-center opacity-45"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-[#061b19]/85" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,130,111,0.16),transparent_50%)]" />
          </div>

          <div className="relative mx-auto max-w-[1180px] px-4 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8 lg:pt-14">
            {/* Heading */}

            <div className="text-center">
              <span className="inline-flex rounded-full border border-[#1c8c7a] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#6fe1ca]">
                Live Demo
              </span>

              <h1
                className={`${newsreader.className} mt-4 text-[42px] leading-[0.98] tracking-[-0.035em] sm:text-[54px] lg:text-[62px]`}
              >
                See the Infrastructure in Action.
              </h1>

              <p className="mx-auto mt-3 max-w-[620px] text-[13px] leading-[1.6] text-white/70 sm:text-[15px]">
                Watch a real patient journey and then test it yourself on
                WhatsApp.
              </p>
            </div>

            {/* Main journey */}

            <div className="mx-auto mt-9 grid max-w-[1080px] items-center gap-6 lg:grid-cols-[1fr_320px_1fr] lg:gap-8">
              {/* LEFT */}

              <div className="order-2 space-y-3 lg:order-1">
                <JourneyCard
                  number="1"
                  title="Inquiry at 11:17 PM"
                  description="A new patient reaches out with a simple question."
                />

                <JourneyCard
                  number="2"
                  title="Understands & Asks"
                  description="FolliCore asks relevant questions to understand the patient's situation."
                />

                <JourneyCard
                  number="3"
                  title="Requests Photos"
                  description="Patient shares scalp photos from the front, top and back."
                />

                <JourneyCard
                  number="4"
                  title="Provides Assessment"
                  description="Preliminary Norwood stage, graft range and estimated pricing based on clinic information."
                />
              </div>

              {/* PHONE */}

              <div className="order-1 flex justify-center lg:order-2">
                <PhoneVideo />
              </div>

              {/* RIGHT */}

              <div className="order-3 space-y-3">
                <JourneyCard
                  number="5"
                  title="Handles Concerns"
                  description="Patient raises a price objection. FolliCore explains the why and how."
                  side="right"
                />

                <JourneyCard
                  number="6"
                  title="Moves Towards Consultation"
                  description="Once the patient is ready, a consultation is offered."
                  side="right"
                />

                <JourneyCard
                  number="7"
                  title="Consultation Booked"
                  description="Patient accepts and your team is notified with the relevant context."
                  side="right"
                />

                <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3.5 backdrop-blur-sm sm:p-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg">
                      ◐
                    </div>

                    <div>
                      <h3 className="text-[13px] font-semibold">
                        Works 24/7
                      </h3>

                      <p className="mt-1.5 text-[10px] leading-[1.55] text-white/65 sm:text-[11px]">
                        Handles inquiries even when your team is unavailable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}

            <div className="mt-7 text-center">
              <WhatsAppLink className="mx-auto inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-white/30 bg-[#0ab394] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition hover:bg-[#0d9e86]">
                <WhatsAppIcon className="h-5 w-5" />
                Test FolliCore Yourself – WhatsApp Us
                <ArrowRight className="h-4 w-4" />
              </WhatsAppLink>

              <p className="mt-2 text-[9px] text-white/45">
                Click to open WhatsApp with &quot;TEST&quot; message pre-filled.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FolliCore MECHANISM                                          */}
        {/* ========================================================= */}

        <section className="bg-[#f7f6f2] px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="mx-auto max-w-[1180px]">
            <div className="text-center">
              <span className="inline-flex rounded-full bg-[#e4efec] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#087f6b]">
                The FolliCore Mechanism
              </span>

              <h2
                className={`${newsreader.className} mx-auto mt-4 max-w-[820px] text-[34px] leading-[1.02] tracking-[-0.03em] text-[#111] sm:text-[46px]`}
              >
                A patient doesn’t just get an answer.
                <br className="hidden sm:block" />
                The conversation moves somewhere.
              </h2>

              <p className="mx-auto mt-4 max-w-[680px] text-[12px] leading-[1.7] text-[#666b68] sm:text-[13px]">
                FolliCore understands what the patient is trying to figure out,
                identifies what may be holding them back, addresses the
                relevant concern, and keeps the conversation moving toward
                consultation.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* CARD 01 */}

              <div className="rounded-xl border border-black/[0.08] bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.035)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087f6b] text-[9px] font-bold text-white shadow-[0_0_0_5px_rgba(8,127,107,0.08)]">
                  01
                </div>

                <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e7f1ee] text-[#087f6b]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="3.2" />
                    <path d="M5.5 20c.7-3.3 2.9-5.2 6.5-5.2s5.8 1.9 6.5 5.2" />
                  </svg>
                </div>

                <h3
                  className={`${newsreader.className} mt-4 text-[22px] leading-[1.05] text-[#111]`}
                >
                  Understand
                  <br />
                  the Patient
                </h3>

                <p className="mt-3 text-[11px] leading-[1.65] text-[#666b68]">
                  Not just the question. The situation behind it.
                </p>

                <p className="mt-2.5 text-[11px] leading-[1.65] text-[#666b68]">
                  FolliCore keeps track of what the patient has asked, what they
                  have shared, what they want, and what still needs to be
                  understood.
                </p>
              </div>

              {/* CARD 02 */}

              <div className="rounded-xl border border-black/[0.08] bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.035)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087f6b] text-[9px] font-bold text-white shadow-[0_0_0_5px_rgba(8,127,107,0.08)]">
                  02
                </div>

                <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e7f1ee] text-[#087f6b]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M5 6.5h14v9H9l-4 3v-12z" />
                    <path d="M8 10h8M8 13h5" />
                  </svg>
                </div>

                <h3
                  className={`${newsreader.className} mt-4 text-[22px] leading-[1.05] text-[#111]`}
                >
                  Find What Is
                  <br />
                  Holding Them Back
                </h3>

                <p className="mt-3 text-[11px] leading-[1.65] text-[#666b68]">
                  Concerns become part of the conversation.
                </p>

                <p className="mt-2.5 text-[11px] leading-[1.65] text-[#666b68]">
                  Price, pain, results, timing, trust, missing photos or
                  uncertainty are identified instead of being treated as
                  unrelated questions.
                </p>
              </div>

              {/* CARD 03 */}

              <div className="rounded-xl border border-black/[0.08] bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.035)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087f6b] text-[9px] font-bold text-white shadow-[0_0_0_5px_rgba(8,127,107,0.08)]">
                  03
                </div>

                <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e7f1ee] text-[#087f6b]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M6 4.5h12v15H6z" />
                    <path d="M9 8h6M9 11.5h6M9 15h4" />
                  </svg>
                </div>

                <h3
                  className={`${newsreader.className} mt-4 text-[22px] leading-[1.05] text-[#111]`}
                >
                  Explain.
                  <br />
                  Don’t Just Reply.
                </h3>

                <p className="mt-3 text-[11px] leading-[1.65] text-[#666b68]">
                  Give the patient the WHY + HOW they need.
                </p>

                <p className="mt-2.5 text-[11px] leading-[1.65] text-[#666b68]">
                  The response is based on the patient’s situation and the
                  clinic’s information — so the conversation can actually
                  resolve uncertainty rather than endlessly answering isolated
                  questions.
                </p>
              </div>

              {/* CARD 04 */}

              <div className="rounded-xl border border-black/[0.08] bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.035)]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087f6b] text-[9px] font-bold text-white shadow-[0_0_0_5px_rgba(8,127,107,0.08)]">
                  04
                </div>

                <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#e7f1ee] text-[#087f6b]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <rect x="4.5" y="5" width="15" height="14" rx="1.5" />
                    <path d="M8 3.5v3M16 3.5v3M4.5 9h15" />
                    <path d="M8 13h2M12 13h2M8 16h2" />
                  </svg>
                </div>

                <h3
                  className={`${newsreader.className} mt-4 text-[22px] leading-[1.05] text-[#111]`}
                >
                  Progress to
                  <br />
                  Consultation
                </h3>

                <p className="mt-3 text-[11px] leading-[1.65] text-[#666b68]">
                  When the patient is ready, move forward.
                </p>

                <p className="mt-2.5 text-[11px] leading-[1.65] text-[#666b68]">
                  Once the relevant information and concerns have been
                  handled, a consultation is offered at the appropriate point
                  — and the clinic team can take over with the conversation
                  context intact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* HOW THE JOURNEY WORKS                                     */}
        {/* ========================================================= */}

        <section className="border-y bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-[1050px]">
            <div className="text-center">
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#087f6b]">
                The Patient Journey
              </p>

              <h2
                className={`${newsreader.className} mt-3 text-[31px] leading-[1] tracking-[-0.03em] sm:text-[40px]`}
              >
                From first message to consultation.
              </h2>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-4">
              {[
                ["01", "Understand", "Learn what the patient needs."],
                ["02", "Identify", "Find concerns and missing information."],
                ["03", "Explain", "Give relevant context and answers."],
                ["04", "Progress", "Move toward consultation."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="relative rounded-lg border border-black/[0.07] bg-[#f7f6f2] p-4"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087f6b] text-[8px] font-bold text-white">
                    {number}
                  </div>

                  <h3 className="mt-3 text-[12px] font-semibold">
                    {title}
                  </h3>

                  <p className="mt-1 text-[9px] leading-[1.5] text-[#707673]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FINAL CTA                                                 */}
        {/* ========================================================= */}

        <section className="relative overflow-hidden bg-[#062823] text-white">
          <div className="absolute inset-0">
            <Image
              src="/homepage/final-hero-image.png"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-[#062823]/90" />

            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_30%,#0b8d78_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>

          <div className="relative mx-auto flex min-h-[350px] max-w-[800px] flex-col items-center justify-center px-5 py-14 text-center">
            <span className="rounded-full border border-[#287f71] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.13em] text-[#62d5c0]">
              Experience It Yourself
            </span>

            <h2
              className={`${newsreader.className} mt-4 text-[38px] leading-[1] tracking-[-0.03em] sm:text-[48px]`}
            >
              Ready to Try It?
            </h2>

            <p className="mt-4 max-w-[570px] text-[12px] leading-[1.7] text-white/65 sm:text-[13px]">
              Send a message on WhatsApp and test FolliCore with your own
              questions. Ask about cost, procedure, recovery, or share photos.
            </p>

            <WhatsAppLink className="mt-7 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-md bg-[#0ab394] px-7 py-3.5 text-[13px] font-semibold text-white shadow-[0_12px_35px_rgba(0,0,0,0.2)]">
              <WhatsAppIcon className="h-5 w-5" />
              Test FolliCore Yourself – WhatsApp Us
              <ArrowRight className="h-4 w-4" />
            </WhatsAppLink>

            <p className="mt-2 text-[9px] text-white/40">
              Click to open WhatsApp with &quot;TEST&quot; message pre-filled.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
