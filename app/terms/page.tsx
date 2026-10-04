import Link from "next/link";
import WhatsAppLink from "@/components/whatsapp-link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  CircleAlert,
  Database,
  FileText,
  Globe2,
  HeartPulse,
  LockKeyhole,
  Mail,
  MessageCircle,
  Scale,
  Server,
  ShieldCheck,
  UserRound,
  UsersRound,
  Workflow,
  XCircle,
} from "lucide-react";

const sections = [
  ["01", "Agreement & Acceptance"],
  ["02", "What NaseemLabs Provides"],
  ["03", "PREET & Clinic Workflow"],
  ["04", "Clinic Responsibilities"],
  ["05", "Clinical Responsibility & Human Oversight"],
  ["06", "Preliminary Assessments & Estimates"],
  ["07", "Patient Data & Data Processing"],
  ["08", "Security"],
  ["09", "WhatsApp & Meta Integration"],
  ["10", "Third-Party Services"],
  ["11", "Acceptable Use"],
  ["12", "Account Access & Security"],
  ["13", "Service Availability & Changes"],
  ["14", "Fees, Billing & Renewal"],
  ["15", "Suspension & Termination"],
  ["16", "Data Return & Deletion"],
  ["17", "Intellectual Property"],
  ["18", "Confidentiality"],
  ["19", "Disclaimers"],
  ["20", "Limitation of Liability"],
  ["21", "Indemnification"],
  ["22", "Governing Law & Disputes"],
  ["23", "Changes to These Terms"],
  ["24", "Contact"],
];

const GREEN = "#087f6b";
const DARK = "#062823";
const INK = "#17211f";
const MUTED = "#68736f";
const BORDER = "#e3e9e6";

function makeId(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-7">
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
        style={{
          background: "#dff2eb",
          color: GREEN,
        }}
      >
        {number}
      </div>

      <h2
        className="text-4xl leading-tight tracking-[-0.025em] md:text-5xl"
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          color: INK,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function InfoBox({
  icon,
  title,
  children,
  dark = false,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className="my-8 flex gap-5 p-6 md:p-7"
      style={{
        background: dark ? DARK : "#e8f5f0",
        color: dark ? "#fff" : INK,
        border: dark ? "none" : "1px solid #d3ebe2",
      }}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
        style={{
          background: dark ? "rgba(255,255,255,0.1)" : "#d2eee5",
          color: dark ? "#8de0c8" : GREEN,
        }}
      >
        {icon}
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>

        <div
          className="text-[15px] leading-7"
          style={{
            color: dark ? "#c9d8d4" : "#52635e",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[15px] leading-7"
          style={{ color: "#53605c" }}
        >
          <span
            className="mt-[7px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
            style={{
              background: "#dff2eb",
              color: GREEN,
            }}
          >
            <Check size={10} strokeWidth={3} />
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ResponsibilityCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="border p-6"
      style={{
        borderColor: BORDER,
        background: "#fbfcfb",
      }}
    >
      <div
        className="mb-5 flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          background: "#e4f3ee",
          color: GREEN,
        }}
      >
        {icon}
      </div>

      <h3 className="mb-3 text-lg font-semibold" style={{ color: INK }}>
        {title}
      </h3>

      <div
        className="text-[14px] leading-6"
        style={{ color: MUTED }}
      >
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white" style={{ color: INK }}>
      {/* HEADER */}
      <header className="border-b border-[#e8ecea] bg-[#fbfcfb]">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 md:px-8">
          <Link
            href="/"
            className="text-[24px] tracking-[-0.04em]"
            style={{
              fontFamily: "var(--font-newsreader), Georgia, serif",
              color: DARK,
            }}
          >
            NaseemLabs
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/"
              className="text-sm text-[#59635f] transition hover:text-[#087f6b]"
            >
              Home
            </Link>

            <Link
              href="/how-it-works"
              className="text-sm text-[#59635f] transition hover:text-[#087f6b]"
            >
              How It Works
            </Link>

            <Link
              href="/demo"
              className="text-sm text-[#59635f] transition hover:text-[#087f6b]"
            >
              Demo
            </Link>

            <Link
              href="/benefits"
              className="text-sm text-[#59635f] transition hover:text-[#087f6b]"
            >
              Clinic Workflow
            </Link>

            <Link
              href="/about"
              className="text-sm text-[#59635f] transition hover:text-[#087f6b]"
            >
              About
            </Link>
          </nav>

          <WhatsAppLink
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white"
            style={{
              background: GREEN,
            }}
          >
            Test PREET
            <ArrowRight size={15} />
          </WhatsAppLink>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 78% 35%, rgba(31,124,105,0.28), transparent 28%), linear-gradient(120deg, #041b18 0%, #062823 55%, #0a3b32 100%)",
        }}
      >
        <div className="mx-auto max-w-[1380px] px-5 py-16 md:px-8 md:py-20">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_0.9fr]">
            {/* HERO COPY */}
            <div className="flex flex-col justify-center">
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#82d8c1" }}
              >
                Terms of Service
              </p>

              <h1
                className="max-w-[720px] text-5xl leading-[0.98] tracking-[-0.04em] text-white md:text-7xl"
                style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                }}
              >
                Clear Terms.
                <br />
                Clear
                <br />
                <span style={{ color: "#79d8bd" }}>
                  Responsibilities.
                </span>
              </h1>

              <p className="mt-7 max-w-[620px] text-[16px] leading-7 text-[#b8c9c4]">
                The terms governing your use of the NaseemLabs platform,
                PREET and the infrastructure connecting clinics with their
                patient inquiries.
              </p>

              <div className="mt-9 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <CalendarDays size={17} color="#79d8bd" />

                  <div>
                    <p className="text-xs text-[#8ea49e]">
                      Last updated
                    </p>

                    <p className="text-sm text-white">
                      29 September 2026
                    </p>
                  </div>
                </div>

                <div className="h-9 w-px bg-white/10" />

                <div className="flex items-center gap-3">
                  <FileText size={17} color="#79d8bd" />

                  <div>
                    <p className="text-xs text-[#8ea49e]">
                      Effective from
                    </p>

                    <p className="text-sm text-white">
                      29 September 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative min-h-[430px] overflow-hidden border border-white/10 bg-black/20 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(83,174,150,.22),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,.06),transparent_30%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#82d8c1]">
                    NaseemLabs
                  </p>

                  <p
                    className="mt-4 text-3xl text-white"
                    style={{
                      fontFamily:
                        "var(--font-newsreader), Georgia, serif",
                    }}
                  >
                    Clinic infrastructure
                  </p>

                  <p className="mt-1 text-3xl text-white">
                    for a higher standard
                  </p>

                  <p className="mt-1 text-3xl text-[#79d8bd]">
                    of patient care.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    [
                      <ShieldCheck key="secure" size={18} />,
                      "SECURE INFRASTRUCTURE",
                    ],
                    [
                      <Workflow key="workflow" size={18} />,
                      "CLINIC WORKFLOW",
                    ],
                    [
                      <LockKeyhole key="privacy" size={18} />,
                      "PATIENT PRIVACY",
                    ],
                    [
                      <UsersRound key="oversight" size={18} />,
                      "HUMAN OVERSIGHT",
                    ],
                  ].map(([icon, label]) => (
                    <div
                      key={label as string}
                      className="flex items-center gap-4 border-t border-white/10 py-3"
                    >
                      <span className="text-[#79d8bd]">{icon}</span>

                      <span className="text-xs font-semibold tracking-[0.12em] text-white">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="border-b border-[#e4ebe8] bg-[#f7faf8]">
        <div className="mx-auto grid max-w-[1380px] md:grid-cols-4">
          {[
            [
              <FileText key="scope" size={20} />,
              "Service Scope",
              "Defined platform and support for clinic workflows",
            ],
            [
              <UsersRound key="responsibility" size={20} />,
              "Clinical Responsibility",
              "Final clinical decisions remain with the clinic",
            ],
            [
              <ShieldCheck key="protection" size={20} />,
              "Data Protection",
              "Handled under applicable laws and agreements",
            ],
            [
              <LockKeyhole key="availability" size={20} />,
              "Security & Availability",
              "Built with appropriate security practices",
            ],
          ].map(([icon, title, text]) => (
            <div
              key={title as string}
              className="flex gap-4 border-r border-[#e4ebe8] p-6 last:border-r-0"
            >
              <div style={{ color: GREEN }}>{icon}</div>

              <div>
                <p className="text-sm font-semibold">{title}</p>

                <p className="mt-1 text-xs leading-5 text-[#71807a]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-[1380px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#74807b]">
                On This Page
              </p>

              <div className="space-y-1">
                {sections.map(([number, title]) => (
                  <a
                    key={number}
                    href={`#${makeId(title)}`}
                    className="group flex items-start gap-3 px-3 py-2.5 text-[12px] leading-5 text-[#66716d] transition hover:bg-[#f2f7f5] hover:text-[#087f6b]"
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
                      style={{
                        background: "#edf4f1",
                        color: GREEN,
                      }}
                    >
                      {number}
                    </span>

                    <span>{title}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 border border-[#dce9e4] bg-[#eef7f3] p-5">
                <ShieldCheck size={21} color={GREEN} />

                <p className="mt-3 text-sm font-semibold">
                  Our Commitment
                </p>

                <p className="mt-2 text-xs leading-5 text-[#66736e]">
                  These Terms are designed to define clear responsibilities
                  between NaseemLabs, clinics and the services used to operate
                  PREET.
                </p>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="max-w-[900px]">
            {/* 01 */}
            <section
              id="agreement-and-acceptance"
              className="scroll-mt-10 pb-20"
            >
              <SectionHeading
                number="01"
                title="Agreement & Acceptance"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your use of the
                  NaseemLabs platform, including PREET, our patient-progression
                  infrastructure for hair restoration clinics, and associated
                  features, tools, integrations, support and services
                  (collectively, the &quot;Services&quot;).
                </p>

                <p>
                  By accessing or using the Services, you (&quot;Clinic&quot;,
                  &quot;Customer&quot;, &quot;you&quot; or &quot;your&quot;) agree to these Terms and our
                  Privacy Policy.
                </p>

                <p>
                  If you are using PREET on behalf of a clinic or other
                  organisation, you confirm that you have authority to accept
                  these Terms on that organisation&apos;s behalf.
                </p>
              </div>

              <InfoBox
                icon={<Scale size={21} />}
                title="Separate patient relationship"
              >
                These Terms primarily govern the relationship between
                  NaseemLabs and the clinic using PREET. A patient&apos;s use of
                WhatsApp and communication with the clinic does not itself make
                the patient a customer of NaseemLabs. Patient privacy and
                processing are addressed in our Privacy Policy and the
                applicable clinic arrangements.
              </InfoBox>
            </section>

            {/* 02 */}
            <section
              id="what-naseemlabs-provides"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="02"
                title="What NaseemLabs Provides"
              />

              <p className="mb-8 text-[15px] leading-7 text-[#68736f]">
                NaseemLabs provides configurable infrastructure intended to
                support the progression of patient inquiries for hair
                restoration clinics.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <ResponsibilityCard
                  icon={<MessageCircle size={19} />}
                  title="PREET"
                >
                  Supports initial patient communication, common questions,
                  information collection and progression of inquiries.
                </ResponsibilityCard>

                <ResponsibilityCard
                  icon={<Workflow size={19} />}
                  title="Clinic Workflow Tools"
                >
                  May include conversation summaries, patient tracking,
                  consultation progression, scheduling support and handover.
                </ResponsibilityCard>

                <ResponsibilityCard
                  icon={<Server size={19} />}
                  title="Configuration & Integration"
                >
                  Includes service configuration, clinic-specific workflow
                  settings and integrations such as WhatsApp.
                </ResponsibilityCard>

                <ResponsibilityCard
                  icon={<UsersRound size={19} />}
                  title="Ongoing Support"
                >
                  Technical support, service monitoring, maintenance and
                  updates may be provided according to the applicable service
                  arrangement.
                </ResponsibilityCard>
              </div>

              <InfoBox
                icon={<CircleAlert size={21} />}
                title="PREET is infrastructure"
              >
                PREET is designed to support a clinic&apos;s patient-progression
                workflow. It is not a medical practice, healthcare provider,
                emergency service or substitute for qualified clinical staff.
              </InfoBox>
            </section>

            {/* 03 */}
            <section
              id="preet-and-clinic-workflow"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="03"
                title="PREET & Clinic Workflow"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  PREET may receive patient messages and information through
                  configured communication channels and use that information to
                  progress the inquiry according to the clinic&apos;s workflow.
                </p>

                <p>
                  Depending on configuration, the workflow can include
                  answering common questions, collecting patient information,
                  receiving scalp photographs, providing preliminary
                  information, identifying objections or concerns, and
                  progressing the patient toward a consultation.
                </p>

                <p>
                  The clinic determines the information, pricing,
                  availability, consultation rules and workflow requirements
                  that PREET is configured to communicate.
                </p>
              </div>

              <InfoBox
                icon={<Workflow size={21} />}
                title="Clinic-controlled workflow"
              >
                The clinic remains responsible for ensuring that its
                configured workflows, information, pricing, patient
                communications and escalation procedures are appropriate,
                accurate and lawful.
              </InfoBox>
            </section>

            {/* 04 */}
            <section
              id="clinic-responsibilities"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="04"
                title="Clinic Responsibilities"
              />

              <p className="mb-5 text-[15px] leading-7 text-[#68736f]">
                The clinic is responsible for the way it uses PREET with its
                patients.
              </p>

              <BulletList
                items={[
                  "Providing accurate clinic, service, pricing and consultation information.",
                  "Ensuring that patient communications are appropriate for the clinic's services.",
                  "Providing appropriate privacy notices and obtaining permissions or consent where required.",
                  "Determining the lawful basis and other legal conditions applicable to patient information.",
                  "Ensuring appropriate handling of health-related and other sensitive information.",
                  "Maintaining appropriate human escalation routes.",
                  "Reviewing clinically significant information before making clinical decisions.",
                  "Complying with applicable healthcare, privacy, advertising, consumer-protection and communication laws.",
                  "Complying with applicable WhatsApp Business policies when WhatsApp is used.",
                  "Maintaining appropriate access controls for clinic staff.",
                ]}
              />

              <InfoBox
                icon={<ShieldCheck size={21} />}
                title="The clinic owns the clinical relationship"
              >
                NaseemLabs provides infrastructure. The clinic remains
                responsible for its relationship with patients, including
                patient care, consent, clinical assessment, treatment decisions
                and the information it communicates.
              </InfoBox>
            </section>

            {/* 05 */}
            <section
              id="clinical-responsibility-and-human-oversight"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="05"
                title="Clinical Responsibility & Human Oversight"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  PREET does not replace a doctor, surgeon, nurse or other
                  qualified healthcare professional.
                </p>

                <p>
                  Any output produced through automated processing is intended
                  to support communication or workflow and must not be treated
                  as a final medical assessment.
                </p>

                <p>
                  The clinic and its qualified clinicians remain responsible
                  for reviewing relevant information and making final clinical
                  decisions.
                </p>
              </div>

              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <ResponsibilityCard
                  icon={<UserRound size={19} />}
                  title="Human review"
                >
                  Clinically meaningful decisions must remain under appropriate
                  human professional oversight.
                </ResponsibilityCard>

                <ResponsibilityCard
                  icon={<MessageCircle size={19} />}
                  title="Patient escalation"
                >
                  Clinics must maintain an appropriate route for patients to
                  reach human staff when required.
                </ResponsibilityCard>
              </div>
            </section>

            {/* 06 */}
            <section
              id="preliminary-assessments-and-estimates"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="06"
                title="Preliminary Assessments & Estimates"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Depending on configuration, PREET may provide preliminary
                  information based on patient messages or photographs,
                  including observations about apparent hair-loss pattern,
                  Norwood classification, indicative graft ranges or price
                  information.
                </p>

                <p>
                  Such information is preliminary and may be inaccurate,
                  incomplete or unsuitable for an individual patient.
                </p>

                <p>
                  It is not a diagnosis, treatment recommendation, medical
                  opinion or guarantee of treatment outcome.
                </p>

                <p>
                  Final assessment and treatment decisions remain with the
                  clinic&apos;s qualified professionals.
                </p>
              </div>

              <InfoBox
                icon={<HeartPulse size={21} />}
                title="No clinical guarantee"
              >
                NaseemLabs does not guarantee the accuracy of an automated
                assessment, graft estimate, classification, price estimate or
                predicted patient outcome.
              </InfoBox>
            </section>

            {/* 07 */}
            <section
              id="patient-data-and-data-processing"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="07"
                title="Patient Data & Data Processing"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Patient information processed through the Services is
                  governed by our Privacy Policy and, where applicable, a Data
                  Processing Agreement (&quot;DPA&quot;) with the clinic.
                </p>

                <p>
                  Depending on the actual deployment and applicable law, the
                  clinic may act as controller and NaseemLabs may process
                  information on behalf of the clinic. The precise legal roles
                  depend on the processing activities, jurisdiction and
                  contractual arrangement.
                </p>

                <p>
                  Patient information may include names, phone numbers,
                  messages, conversation history, scalp photographs,
                  consultation information and health-related information
                  voluntarily supplied by patients.
                </p>
              </div>

              <InfoBox
                icon={<Database size={21} />}
                title="Patient data is not a marketing asset"
              >
                NaseemLabs does not sell patient information or use patient
                conversations to build advertising profiles. Patient
                information is processed to provide and secure the Services
                and for other purposes described in the Privacy Policy and
                applicable agreements.
              </InfoBox>
            </section>

            {/* 08 */}
            <section
              id="security"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="08"
                title="Security"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  We use technical and organisational measures intended to
                  protect information against unauthorised access, loss,
                  misuse, alteration or disclosure.
                </p>

                <p>
                  Depending on the deployment, measures may include
                  authentication, access controls, encrypted communications,
                  database controls, infrastructure security, monitoring and
                  restricted administrative access.
                </p>

                <p>
                  No internet-connected system can guarantee absolute security
                  or uninterrupted availability.
                </p>
              </div>

              <InfoBox
                icon={<LockKeyhole size={21} />}
                title="Security does not remove shared responsibility"
              >
                NaseemLabs is responsible for the security measures applicable
                to its infrastructure and Services. Clinics remain responsible
                for account credentials, authorised staff access, devices and
                their own operational security practices.
              </InfoBox>
            </section>

            {/* 09 — MOST IMPORTANT */}
            <section
              id="whatsapp-and-meta-integration"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="09"
                title="WhatsApp & Meta Integration"
              />

              <div className="mb-8 border border-[#dbe8e3] bg-[#f4f9f7] p-7">
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: "#dff2eb",
                      color: GREEN,
                    }}
                  >
                    <MessageCircle size={21} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      WhatsApp / Meta is a third-party communication platform
                    </h3>

                    <p className="text-[15px] leading-7 text-[#5c6964]">
                      When PREET is connected to WhatsApp Business Platform,
                      communications can pass through WhatsApp and Meta&apos;s
                      systems before being processed by PREET and delivered to
                      the clinic workflow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8 overflow-hidden border border-[#e3e9e6]">
                <div className="grid md:grid-cols-4">
                  {[
                    [
                      "01",
                      "Patient",
                      "Initiates or receives communication through WhatsApp.",
                    ],
                    [
                      "02",
                      "Meta / WhatsApp",
                      "Provides the WhatsApp Business communication platform and API infrastructure.",
                    ],
                    [
                      "03",
                      "PREET",
                      "Processes the conversation according to the configured clinic workflow.",
                    ],
                    [
                      "04",
                      "Clinic",
                      "Receives the inquiry and remains responsible for patient care.",
                    ],
                  ].map(([number, title, text], index) => (
                    <div
                      key={number}
                      className="p-6"
                      style={{
                        background:
                          index % 2 === 0 ? "#fbfcfb" : "#f5f8f6",
                        borderRight:
                          index < 3
                            ? "1px solid #e3e9e6"
                            : "none",
                      }}
                    >
                      <span className="text-xs font-semibold text-[#087f6b]">
                        {number}
                      </span>

                      <h3 className="mt-4 text-base font-semibold">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#68736f]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Clinics using WhatsApp Business Platform through PREET must
                  comply with the applicable WhatsApp Business Terms, Business
                  Messaging Policy, Messaging Guidelines and other applicable
                  Meta policies.
                </p>

                <p>
                  The clinic is responsible for ensuring that it has the
                  appropriate permissions, notices and lawful basis for
                  communicating with patients through WhatsApp.
                </p>

                <p>
                  Business-initiated WhatsApp conversations may require
                  approved message templates. Within the applicable customer
                  service window, automated responses may be used subject to
                  WhatsApp&apos;s rules.
                </p>

                <p>
                  Where required by WhatsApp&apos;s policies, the clinic must
                  provide a clear and accessible route to human support.
                </p>

                <p>
                  Meta or WhatsApp may restrict, suspend or terminate access to
                  WhatsApp Business services where applicable policies or terms
                  are violated.
                </p>
              </div>

              <InfoBox
                icon={<XCircle size={21} />}
                title="WhatsApp policy remains separate from these Terms"
              >
                These Terms do not replace Meta or WhatsApp&apos;s own terms and
                policies. If a clinic uses WhatsApp through PREET, the clinic
                must comply with both its agreement with NaseemLabs and the
                applicable requirements of WhatsApp/Meta.
              </InfoBox>

              <div className="mt-6 flex items-center gap-3 text-xs text-[#71807a]">
                <Globe2 size={15} color={GREEN} />
                WhatsApp Business Platform is operated by Meta and includes
                WhatsApp Business APIs, including Cloud API hosted by Meta.
              </div>
            </section>

            {/* 10 */}
            <section
              id="third-party-services"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="10"
                title="Third-Party Services"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  PREET may depend on third-party services required for
                  communications, hosting, databases, security, analytics,
                  processing or other technical functions.
                </p>

                <p>
                  Examples may include WhatsApp/Meta, cloud infrastructure,
                  database providers and other technical or processing
                  providers selected for a particular deployment.
                </p>

                <p>
                  Third-party services are governed by their own terms and
                  policies. Their availability, functionality and processing
                  locations may change independently of NaseemLabs.
                </p>
              </div>

              <InfoBox
                icon={<Server size={21} />}
                title="Third-party dependency"
              >
                NaseemLabs is not responsible for failures, outages,
                restrictions or policy changes imposed by an independent
                third-party provider, although we will take reasonable steps
                to maintain and restore the affected integration where
                practical.
              </InfoBox>
            </section>

            {/* 11 */}
            <section
              id="acceptable-use"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="11"
                title="Acceptable Use"
              />

              <p className="mb-5 text-[15px] leading-7 text-[#68736f]">
                You must not use the Services to:
              </p>

              <BulletList
                items={[
                  "Violate applicable law or regulation.",
                  "Misrepresent the identity or affiliation of the clinic.",
                  "Send unlawful, fraudulent, deceptive or abusive communications.",
                  "Send spam or communications that violate WhatsApp or other communication-platform policies.",
                  "Request unnecessary sensitive information from patients.",
                  "Share one patient's information with another patient.",
                  "Use PREET to make final clinical decisions without appropriate professional oversight.",
                  "Attempt to access another clinic's account or patient information.",
                  "Interfere with, disrupt or compromise the security of the Services.",
                  "Use the Services to facilitate unlawful activity.",
                ]}
              />

              <InfoBox
                icon={<CircleAlert size={21} />}
                title="Sensitive information"
              >
                Clinics should collect only information reasonably necessary
                for their patient workflow and must follow applicable
                requirements for health information and other sensitive data.
              </InfoBox>
            </section>

            {/* 12 */}
            <section
              id="account-access-and-security"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="12"
                title="Account Access & Security"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Clinic accounts must be used only by authorised personnel.
                </p>

                <p>
                  The clinic is responsible for maintaining the
                  confidentiality of account credentials and for notifying
                  NaseemLabs if it becomes aware of unauthorised access.
                </p>

                <p>
                  The clinic must promptly remove or disable access for staff
                  members who no longer require access.
                </p>

                <p>
                  NaseemLabs may restrict access where reasonably necessary to
                  protect the Services, patient information, the clinic or
                  other users.
                </p>
              </div>
            </section>

            {/* 13 */}
            <section
              id="service-availability-and-changes"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="13"
                title="Service Availability & Changes"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  We aim to maintain reliable availability of the Services but
                  do not guarantee uninterrupted or error-free operation.
                </p>

                <p>
                  The Services may be temporarily unavailable because of
                  maintenance, security events, infrastructure failures,
                  third-party outages or circumstances outside our reasonable
                  control.
                </p>

                <p>
                  We may modify, improve, replace or discontinue features when
                  reasonably necessary to operate or develop the Services.
                </p>
              </div>
            </section>

            {/* 14 */}
            <section
              id="fees-billing-and-renewal"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="14"
                title="Fees, Billing & Renewal"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Fees, setup charges, subscription charges, usage charges and
                  renewal terms are determined by the applicable order,
                  proposal, invoice or commercial agreement between NaseemLabs
                  and the clinic.
                </p>

                <p>
                  Unless otherwise agreed in writing, invoices are payable
                  according to the payment terms stated on the relevant
                  invoice or agreement.
                </p>

                <p>
                  Third-party charges, including communication-platform fees,
                  may be charged separately or incorporated into the agreed
                  service pricing depending on the commercial arrangement.
                </p>

                <p>
                  Taxes, duties or other government charges applicable to the
                  clinic&apos;s purchase may be the responsibility of the clinic.
                </p>
              </div>
            </section>

            {/* 15 */}
            <section
              id="suspension-and-termination"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="15"
                title="Suspension & Termination"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Either party may terminate the Services according to the
                  applicable commercial agreement.
                </p>

                <p>
                  NaseemLabs may suspend or restrict access where reasonably
                  necessary because of security concerns, non-payment,
                  unlawful use, material breach of these Terms or requirements
                  imposed by a third-party platform.
                </p>

                <p>
                  A WhatsApp/Meta suspension can occur independently of
                  NaseemLabs if the clinic&apos;s WhatsApp Business account or
                  activity violates applicable Meta policies.
                </p>

                <p>
                  Where reasonably practicable, we will provide notice and an
                  opportunity to address a breach before suspension, except
                  where immediate action is necessary for security, legal or
                  platform-policy reasons.
                </p>
              </div>
            </section>

            {/* 16 */}
            <section
              id="data-return-and-deletion"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="16"
                title="Data Return & Deletion"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  When the clinic terminates its use of PREET, patient
                  information will be returned or deleted according to the
                  applicable service agreement, DPA and legal requirements.
                </p>

                <p>
                  Deletion may not immediately remove information from
                  encrypted backups or security records where retention is
                  technically necessary or legally required.
                </p>

                <p>
                  Information retained for legal, security or dispute-related
                  purposes will be retained only for as long as reasonably
                  necessary for that purpose.
                </p>
              </div>

              <InfoBox
                icon={<Database size={21} />}
                title="Third-party copies"
              >
                Termination of the NaseemLabs service does not automatically
                delete information held independently by WhatsApp/Meta or
                another third-party provider. Such information is subject to
                  the relevant provider&apos;s own policies and controls.
              </InfoBox>
            </section>

            {/* 17 */}
            <section
              id="intellectual-property"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="17"
                title="Intellectual Property"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  NaseemLabs and its licensors retain all rights in the
                  Services, software, infrastructure, interface, branding,
                  documentation and underlying technology except where
                  expressly stated otherwise.
                </p>

                <p>
                  The clinic retains its own content, branding, patient
                  information and materials supplied to the Services, subject
                  to the rights necessary for NaseemLabs to provide the
                  Services.
                </p>

                <p>
                  The clinic grants NaseemLabs the limited rights necessary to
                  host, process, transmit and otherwise handle clinic-provided
                  information for the purpose of providing the Services.
                </p>
              </div>
            </section>

            {/* 18 */}
            <section
              id="confidentiality"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="18"
                title="Confidentiality"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Each party must take reasonable measures to protect
                  confidential information received from the other party.
                </p>

                <p>
                  Confidential information includes non-public business
                  information, technical information, credentials, commercial
                  terms and patient-related information.
                </p>

                <p>
                  Confidentiality obligations do not apply to information that
                  is publicly available without breach, was lawfully known
                  before disclosure, is independently developed, or must be
                  disclosed by law.
                </p>
              </div>
            </section>

            {/* 19 */}
            <section
              id="disclaimers"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="19"
                title="Disclaimers"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  The Services are provided to support clinic workflows and are
                  not a substitute for professional medical care.
                </p>

                <p>
                  NaseemLabs does not guarantee that automated responses,
                  summaries, image observations, classifications, graft
                  estimates, price estimates or other outputs will always be
                  accurate, complete or suitable for a particular patient.
                </p>

                <p>
                  The clinic is responsible for reviewing information before
                  relying on it for clinical, financial or operational
                  decisions.
                </p>

                <p>
                  Except where expressly provided in a written agreement,
                  NaseemLabs does not guarantee a particular number of leads,
                  consultations, procedures, conversions, revenue or clinical
                  outcomes.
                </p>
              </div>

              <InfoBox
                icon={<HeartPulse size={21} />}
                title="No medical advice"
              >
                PREET and NaseemLabs do not provide medical diagnosis,
                treatment or emergency medical services. Clinical decisions
                remain with the clinic&apos;s qualified professionals.
              </InfoBox>
            </section>

            {/* 20 */}
            <section
              id="limitation-of-liability"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="20"
                title="Limitation of Liability"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  To the maximum extent permitted by applicable law, NaseemLabs
                  will not be responsible for indirect, incidental, special,
                  consequential or loss-of-profit damages arising from use of
                  the Services.
                </p>

                <p>
                  This includes losses arising from third-party communication
                  platforms, internet failures, service interruptions,
                  inaccurate patient information or decisions made by the
                  clinic based on automated or preliminary information.
                </p>

                <p>
                  Any specific liability cap will be determined by the
                  applicable commercial agreement between NaseemLabs and the
                  clinic.
                </p>

                <p>
                  Nothing in these Terms excludes or limits liability that
                  cannot lawfully be excluded or limited under applicable law.
                </p>
              </div>
            </section>

            {/* 21 */}
            <section
              id="indemnification"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="21"
                title="Indemnification"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  To the extent permitted by applicable law and any applicable
                  commercial agreement, the clinic is responsible for claims
                  arising from its unlawful use of the Services, violation of
                  these Terms, misuse of patient information, or breach of
                  applicable communication, privacy or healthcare requirements.
                </p>

                <p>
                  This provision does not apply to the extent a claim results
                  from NaseemLabs&apos; own breach of its contractual obligations or
                  applicable law.
                </p>
              </div>
            </section>

            {/* 22 */}
            <section
              id="governing-law-and-disputes"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="22"
                title="Governing Law & Disputes"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  The governing law and dispute-resolution procedure applicable
                  to a clinic&apos;s use of the Services should be specified in the
                  applicable commercial agreement or order form.
                </p>

                <p>
                  Where no separate commercial agreement specifies these
                  matters, the parties will seek to resolve disputes through
                  good-faith discussion before pursuing formal proceedings.
                </p>

                <p>
                  Mandatory rights or protections provided by the law applicable
                  to a party will not be excluded merely by this section.
                </p>
              </div>

              <InfoBox
                icon={<Scale size={21} />}
                title="Jurisdiction-specific agreements"
              >
                UK and UAE deployments may require different contractual,
                privacy and data-processing provisions. The applicable DPA,
                commercial agreement and local requirements should therefore be
                reviewed for the specific clinic deployment.
              </InfoBox>
            </section>

            {/* 23 */}
            <section
              id="changes-to-these-terms"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="23"
                title="Changes to These Terms"
              />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  We may update these Terms when our Services, integrations,
                  business arrangements or legal obligations change.
                </p>

                <p>
                  Material changes will be communicated through appropriate
                  channels where required.
                </p>

                <p>
                  Continued use of the Services after an effective update may
                  constitute acceptance of the updated Terms where permitted by
                  applicable law.
                </p>
              </div>
            </section>

            {/* 24 */}
            <section
              id="contact"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading
                number="24"
                title="Contact"
              />

              <div className="border border-[#dce8e3] bg-[#f4f9f7] p-7 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#087f6b]">
                      NaseemLabs
                    </p>

                    <h3
                      className="mt-3 text-3xl tracking-[-0.025em]"
                      style={{
                        fontFamily:
                          "var(--font-newsreader), Georgia, serif",
                      }}
                    >
                      Questions about these Terms?
                    </h3>

                    <p className="mt-3 max-w-[600px] text-sm leading-7 text-[#64716c]">
                      For questions about the Services, contracts,
                      integrations, privacy or data processing, contact
                      NaseemLabs directly.
                    </p>
                  </div>

                  <a
                    href="mailto:hello@naseemlabs.com"
                    className="inline-flex shrink-0 items-center gap-2 bg-[#087f6b] px-5 py-3 text-sm font-semibold text-white"
                  >
                    <Mail size={16} />
                    hello@naseemlabs.com
                  </a>
                </div>
              </div>

              <div className="mt-8 text-[13px] leading-6 text-[#7a8581]">
                <p>
                  These Terms should be read together with the NaseemLabs
                  Privacy Policy and, where applicable, the Data Processing
                  Agreement and commercial agreement between NaseemLabs and the
                  clinic.
                </p>

                <p className="mt-3">
                  WhatsApp/Meta services are additionally governed by their own
                  applicable terms, policies and requirements.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 75% 40%, rgba(47,145,120,.25), transparent 30%), #062823",
        }}
      >
        <div className="mx-auto max-w-[1380px] px-5 py-20 md:px-8 md:py-24">
          <div className="max-w-[700px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#79d8bd]">
              Clear Infrastructure. Clear Responsibility.
            </p>

            <h2
              className="mt-5 text-5xl leading-[1] tracking-[-0.035em] text-white md:text-6xl"
              style={{
                fontFamily:
                  "var(--font-newsreader), Georgia, serif",
              }}
            >
              Built for clinics.
              <br />
              Designed with boundaries.
            </h2>

            <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-[#b8c9c4]">
              PREET helps clinics progress patient inquiries while keeping
              responsibility clear between infrastructure, communication and
              clinical care.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink
                className="inline-flex items-center gap-2 bg-[#79d8bd] px-5 py-3 text-sm font-semibold text-[#062823]"
              >
                Test PREET
                <ArrowRight size={16} />
              </WhatsAppLink>

              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-semibold text-white"
              >
                Privacy Policy
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
