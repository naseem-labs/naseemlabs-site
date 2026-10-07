import Link from "next/link";
import WhatsAppLink from "@/components/whatsapp-link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  CircleHelp,
  Database,
  FileText,
  Globe2,
  HeartPulse,
  Image as ImageIcon,
  Info,
  LockKeyhole,
  Mail,
  MessageCircle,
  Scale,
  ShieldCheck,
  UserRound,
  UsersRound,
  Workflow,
  XCircle,
} from "lucide-react";

const sections = [
  ["01", "Introduction"],
  ["02", "Key Definitions"],
  ["03", "Information We Collect"],
  ["04", "How We Use Your Information"],
  ["05", "Legal Basis for Processing"],
  ["06", "Patient Communication via WhatsApp"],
  ["07", "Health & Clinical Information"],
  ["08", "Image Processing"],
  ["09", "Automated Processing & Limitations"],
  ["10", "Clinical Safety & Human Oversight"],
  ["11", "Data Sharing & Subprocessors"],
  ["12", "International Transfers"],
  ["13", "Data Security"],
  ["14", "Data Retention"],
  ["15", "Your Rights"],
  ["16", "Cookies & Website Data"],
  ["17", "Children's Information"],
  ["18", "Data Breach & Incident Response"],
  ["19", "Changes to This Policy"],
  ["20", "Contact Us"],
];

const GREEN = "#087f6b";
const DARK = "#062823";
const INK = "#17211f";
const MUTED = "#68736f";
const BORDER = "#e3e9e6";

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
        style={{ background: "#dff2eb", color: GREEN }}
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
          style={{ color: dark ? "#c9d8d4" : "#52635e" }}
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
        <li key={item} className="flex gap-3 text-[15px] leading-7" style={{ color: "#53605c" }}>
          <span
            className="mt-[7px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
            style={{ background: "#dff2eb", color: GREEN }}
          >
            <Check size={10} strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DataCard({
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
      className="p-6"
      style={{
        background: "#fbfcfb",
        border: `1px solid ${BORDER}`,
      }}
    >
      <div
        className="mb-5 flex h-10 w-10 items-center justify-center rounded-full"
        style={{ background: "#e4f3ee", color: GREEN }}
      >
        {icon}
      </div>

      <h3 className="mb-3 text-lg font-semibold" style={{ color: INK }}>
        {title}
      </h3>

      <div className="text-[14px] leading-6" style={{ color: MUTED }}>
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
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
            <Link href="/" className="text-sm text-[#59635f] transition hover:text-[#087f6b]">
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm text-[#59635f] transition hover:text-[#087f6b]"
            >
              How It Works
            </Link>
            <Link href="/demo" className="text-sm text-[#59635f] transition hover:text-[#087f6b]">
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
            style={{ background: GREEN }}
          >
            Test FolliCore
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
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            {/* HERO COPY */}
            <div className="flex flex-col justify-center">
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#82d8c1" }}
              >
                Privacy Policy
              </p>

              <h1
                className="max-w-[720px] text-5xl leading-[0.98] tracking-[-0.04em] text-white md:text-7xl"
                style={{
                  fontFamily: "var(--font-newsreader), Georgia, serif",
                }}
              >
                Your Patients&apos;
                <br />
                Information.
                <br />
                <span style={{ color: "#79d8bd" }}>Our Responsibility.</span>
              </h1>

              <p className="mt-7 max-w-[650px] text-[16px] leading-7 text-[#b8c9c4]">
                We are committed to protecting the privacy, security and
                confidentiality of information processed through NaseemLabs and
                FolliCore, including patient communications, health-related
                information and images shared with participating clinics.
              </p>

              <div className="mt-9 flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <CalendarDays size={17} color="#79d8bd" />
                  <div>
                    <p className="text-xs text-[#8ea49e]">Last updated</p>
                    <p className="text-sm text-white">29 September 2026</p>
                  </div>
                </div>

                <div className="h-9 w-px bg-white/10" />

                <div className="flex items-center gap-3">
                  <FileText size={17} color="#79d8bd" />
                  <div>
                    <p className="text-xs text-[#8ea49e]">Effective from</p>
                    <p className="text-sm text-white">29 September 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* INFRASTRUCTURE VISUAL */}
            <div className="relative min-h-[430px] overflow-hidden border border-white/10 bg-black/20 p-4 md:p-6">
              <div className="grid h-full grid-cols-2 gap-3">
                {/* UK */}
                <div
                  className="relative overflow-hidden p-5"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(18,42,51,.95), rgba(7,28,29,.95))",
                  }}
                >
                  <div className="relative z-10">
                    <div className="mb-8 flex items-center gap-3">
                      <div className="flex h-8 w-11 items-center justify-center overflow-hidden bg-white text-xs">
                        🇬🇧
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">UK Clinics</p>
                        <p className="text-xs text-[#94aaa5]">Secure UK infrastructure</p>
                      </div>
                    </div>

                    <div className="mt-20 space-y-2">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div
                          key={item}
                          className="h-2 rounded-sm bg-[#1d5b61]"
                          style={{ width: `${62 + item * 6}%` }}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-end gap-1">
                        {[3, 5, 8, 4, 7, 10, 6, 12, 8].map((height, i) => (
                          <div
                            key={i}
                            className="w-full bg-[#164b4b]"
                            style={{ height: `${height * 7}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* UAE */}
                <div
                  className="relative overflow-hidden p-5"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(51,39,25,.95), rgba(21,28,25,.95))",
                  }}
                >
                  <div className="relative z-10">
                    <div className="mb-8 flex items-center gap-3">
                      <div className="flex h-8 w-11 items-center justify-center overflow-hidden bg-white text-xs">
                        🇦🇪
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">UAE Clinics</p>
                        <p className="text-xs text-[#b3a89a]">Secure UAE infrastructure</p>
                      </div>
                    </div>

                    <div className="mt-20 space-y-2">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div
                          key={item}
                          className="h-2 rounded-sm bg-[#765d39]"
                          style={{ width: `${60 + item * 7}%` }}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-end gap-1">
                        {[5, 8, 4, 11, 7, 13, 8, 16, 10].map((height, i) => (
                          <div
                            key={i}
                            className="w-full bg-[#604c31]"
                            style={{ height: `${height * 6}px` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 border-t border-white/10 bg-black/25 backdrop-blur-md md:grid-cols-4">
                {[
                  ["Security by Design", "Industry-standard security practices"],
                  ["Patient Confidentiality", "Patient information handled carefully"],
                  ["Compliance Focused", "Designed around applicable requirements"],
                  ["Human-Centred", "Clear clinical boundaries"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="border-r border-white/10 px-4 py-4 last:border-r-0"
                  >
                    <p className="text-xs font-semibold text-white">{title}</p>
                    <p className="mt-1 text-[10px] leading-4 text-[#91a49f]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <div className="border-b border-[#e5ebe8] bg-[#f8faf9]">
        <div className="mx-auto flex max-w-[1380px] gap-2 overflow-x-auto px-5 py-3 md:px-8">
          {[
            ["Introduction", "#introduction"],
            ["Data We Collect", "#information-we-collect"],
            ["How We Use It", "#how-we-use"],
            ["WhatsApp", "#whatsapp"],
            ["Health Data", "#health-data"],
            ["Security", "#security"],
            ["Retention", "#retention"],
            ["International", "#international"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap px-4 py-2 text-xs font-medium text-[#63706b] transition hover:bg-white hover:text-[#087f6b]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-[1380px] px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#74807b]">
                On This Page
              </p>

              <div className="space-y-1">
                {sections.map(([number, title]) => {
                  const id = title
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[’']/g, "")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-|-$/g, "");

                  return (
                    <a
                      key={number}
                      href={`#${id}`}
                      className="group flex items-start gap-3 px-3 py-2.5 text-[12px] leading-5 text-[#66716d] transition hover:bg-[#f2f7f5] hover:text-[#087f6b]"
                    >
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
                        style={{ background: "#edf4f1", color: GREEN }}
                      >
                        {number}
                      </span>
                      <span>{title}</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 border border-[#dce9e4] bg-[#eef7f3] p-5">
                <ShieldCheck size={21} color={GREEN} />
                <p className="mt-3 text-sm font-semibold" style={{ color: INK }}>
                  Our Commitment
                </p>
                <p className="mt-2 text-xs leading-5 text-[#66736e]">
                  This policy explains how NaseemLabs collects, uses, stores and
                  protects information when patients and clinics interact with
                  FolliCore.
                </p>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="max-w-[900px]">
            {/* 01 */}
            <section id="introduction" className="scroll-mt-10 pb-20">
              <SectionHeading number="01" title="Introduction" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  NaseemLabs (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) provides FolliCore, a
                  patient-progression infrastructure designed for hair
                  restoration clinics. This Privacy Policy explains how
                  information is collected, used, stored, protected and deleted
                  when patients communicate with a clinic through FolliCore or when
                  clinic users access the service.
                </p>

                <p>
                  FolliCore is designed around the practical progression of a
                  patient inquiry: initial communication, information
                  collection, questions, preliminary assessment, consultation
                  progression and handover to the clinic team.
                </p>

                <p>
                  Because hair-restoration conversations can contain information
                  about a person&apos;s health, hair loss, scalp condition,
                  treatment history or photographs, some information processed
                  through FolliCore may constitute health or other sensitive
                  personal data under applicable law.
                </p>

                <p>
                  This policy is intended to explain our processing clearly. It
                  does not replace the clinic&apos;s own privacy notice, patient
                  consent process, data-processing agreement or other legal
                  obligations.
                </p>
              </div>

              <InfoBox
                icon={<ShieldCheck size={21} />}
                title="Clinical Safety & Human Oversight"
              >
                FolliCore supports communication and clinic workflow. It does not
                replace a doctor, surgeon or other qualified healthcare
                professional. Any scalp-image observations, Norwood
                classifications, graft ranges, price estimates or similar
                outputs are preliminary information and are not a diagnosis or
                treatment decision. Final assessment, treatment planning,
                consent and patient care remain with the qualified clinic
                professionals.
              </InfoBox>
            </section>

            {/* 02 */}
            <section id="key-definitions" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="02" title="Key Definitions" />

              <p className="mb-7 text-[15px] leading-7 text-[#68736f]">
                For the purpose of this policy:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <DataCard icon={<UserRound size={19} />} title="Patient">
                  A person who communicates with a participating clinic through
                  FolliCore, including through WhatsApp.
                </DataCard>

                <DataCard icon={<UsersRound size={19} />} title="Clinic / Customer">
                  A hair restoration clinic that uses FolliCore to manage and
                  progress patient inquiries.
                </DataCard>

                <DataCard icon={<FileText size={19} />} title="Personal Information">
                  Information that identifies or can reasonably be associated
                  with an individual, directly or indirectly.
                </DataCard>

                <DataCard icon={<HeartPulse size={19} />} title="Health Information">
                  Information relating to an individual&apos;s health or healthcare,
                  including information concerning hair loss, scalp condition,
                  treatment history or other health-related information.
                </DataCard>
              </div>

              <InfoBox icon={<Scale size={21} />} title="Roles can depend on the deployment">
                Depending on the applicable law and the contractual
                arrangement, a clinic may act as the controller of patient
                information while NaseemLabs processes information on the
                clinic&apos;s behalf. The precise legal roles must be determined from
                the actual processing activities, jurisdiction and agreements
                in place. Meta/WhatsApp is a separate third-party platform in
                the communication chain.
              </InfoBox>
            </section>

            {/* 03 */}
            <section
              id="information-we-collect"
              className="scroll-mt-10 border-t border-[#e5ebe8] py-20"
            >
              <SectionHeading number="03" title="Information We Collect" />

              <p className="mb-8 text-[15px] leading-7 text-[#68736f]">
                The information processed depends on what a patient or clinic
                chooses to provide and what is necessary to operate the
                service.
              </p>

              <div className="grid gap-4 lg:grid-cols-3">
                <DataCard icon={<UserRound size={19} />} title="Patient Information">
                  <BulletList
                    items={[
                      "Name, if provided",
                      "WhatsApp or phone number",
                      "Messages and conversation history",
                      "Questions and concerns",
                      "Consultation preferences",
                      "Follow-up information",
                      "Information voluntarily shared during the conversation",
                    ]}
                  />
                </DataCard>

                <DataCard icon={<ImageIcon size={19} />} title="Patient-Provided Information">
                  <BulletList
                    items={[
                      "Scalp photographs, such as front, top or back views",
                      "Hair-loss information",
                      "Relevant health or medical information voluntarily provided",
                      "Treatment expectations",
                      "Budget or price-related information, if shared",
                      "Information needed to progress a consultation",
                    ]}
                  />
                </DataCard>

                <DataCard icon={<Database size={19} />} title="System & Technical Information">
                  <BulletList
                    items={[
                      "Message and interaction timestamps",
                      "Conversation status and workflow logs",
                      "Device and browser information",
                      "IP address where applicable",
                      "Clinic account and authentication information",
                      "Usage, performance and security information",
                    ]}
                  />
                </DataCard>
              </div>

              <InfoBox icon={<Info size={21} />} title="Health information requires additional care">
                Some information described above may be health data or
                special-category/sensitive personal data under applicable law.
                The clinic is responsible for determining the appropriate
                lawful basis, notices, permissions and additional conditions
                required for its patient processing.
              </InfoBox>
            </section>

            {/* 04 */}
            <section id="how-we-use-your-information" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="04" title="How We Use Your Information" />

              <p className="mb-7 text-[15px] leading-8 text-[#56625e]">
                Information processed through FolliCore is used only for purposes
                connected with providing, securing and improving the configured
                clinic workflow.
              </p>

              <BulletList
                items={[
                  "Receive and respond to patient inquiries through the configured communication channel.",
                  "Understand the context of an inquiry and maintain conversation continuity.",
                  "Collect information voluntarily provided by the patient for consultation progression.",
                  "Support preliminary patient assessments and workflow steps configured by the clinic.",
                  "Provide conversation summaries and relevant information to the clinic team.",
                  "Support consultation scheduling, follow-up and handover workflows.",
                  "Maintain system security, reliability, monitoring and service performance.",
                  "Authenticate and administer clinic accounts.",
                  "Investigate technical problems, abuse, security incidents or service failures.",
                  "Comply with applicable legal obligations where required.",
                ]}
              />

              <InfoBox icon={<LockKeyhole size={21} />} title="No advertising use of patient conversations">
                NaseemLabs does not use patient conversations processed through
                FolliCore to build advertising profiles or to sell patient
                information to advertisers.
              </InfoBox>
            </section>

            {/* 05 */}
            <section id="legal-basis-for-processing" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="05" title="Legal Basis for Processing" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  The legal basis for processing depends on the specific
                  processing activity, the jurisdiction and the relationship
                  between the patient, clinic and service provider.
                </p>

                <p>
                  For UK deployments, information concerning health can fall
                  within the UK GDPR&apos;s special-category data rules. Processing
                  such information generally requires both an applicable
                  Article 6 lawful basis and an appropriate Article 9
                  condition, together with any other requirements that apply.
                  The clinic is responsible for establishing the appropriate
                  basis for its patient processing.
                </p>

                <p>
                  For UAE deployments, the clinic and relevant service
                  providers must assess the requirements of the UAE Personal
                  Data Protection Law and any sector-specific requirements that
                  apply to the particular clinic and processing activity.
                </p>

                <p>
                  Where a Data Processing Agreement or similar contractual
                  arrangement applies, the processing responsibilities of
                  NaseemLabs and the clinic are further defined by that
                  agreement.
                </p>
              </div>
            </section>

            {/* 06 */}
            <section id="patient-communication-via-whatsapp" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="06" title="Patient Communication via WhatsApp" />

              <div className="mb-8 flex items-start gap-5 border border-[#dbe8e3] bg-[#f4f9f7] p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dff2eb] text-[#087f6b]">
                  <MessageCircle size={21} />
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold">WhatsApp / Meta is part of the communication chain</h3>
                  <p className="text-[15px] leading-7 text-[#5c6964]">
                    When a clinic uses FolliCore with WhatsApp, the communication
                    flow can involve the patient, WhatsApp/Meta&apos;s platform,
                    FolliCore/NaseemLabs infrastructure and the clinic team.
                  </p>
                </div>
              </div>

              <div
                className="mb-8 overflow-hidden border"
                style={{ borderColor: BORDER }}
              >
                <div className="grid md:grid-cols-4">
                  {[
                    ["01", "Patient", "Sends a message or media through WhatsApp."],
                    ["02", "WhatsApp / Meta", "Provides the communication platform and API infrastructure."],
                    ["03", "FolliCore / NaseemLabs", "Processes the communication according to the configured clinic workflow."],
                    ["04", "Clinic", "Receives and acts on the patient inquiry and remains responsible for clinical care."],
                  ].map(([number, title, text], index) => (
                    <div
                      key={number}
                      className="relative p-6"
                      style={{
                        background: index % 2 === 0 ? "#fbfcfb" : "#f5f8f6",
                        borderRight:
                          index < 3 ? `1px solid ${BORDER}` : "none",
                      }}
                    >
                      <span className="text-xs font-semibold text-[#087f6b]">{number}</span>
                      <h3 className="mt-4 text-base font-semibold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#68736f]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  WhatsApp and Meta are independent third-party services. Their
                  own terms, policies, technical architecture and data handling
                  practices may apply to communications carried through their
                  platform.
                </p>

                <p>
                  Clinics using WhatsApp through FolliCore are responsible for
                  maintaining appropriate patient notices, permissions and
                  consents and for complying with applicable WhatsApp Business
                  and data-protection requirements.
                </p>

                <p>
                  Automated responses may be used as part of the configured
                  workflow. Where WhatsApp&apos;s policies require a human escalation
                  route, the clinic must maintain an appropriate and accessible
                  route to human support.
                </p>

                <p>
                  WhatsApp may impose rules concerning message templates,
                  customer-service windows, permitted uses and the handling of
                  sensitive information. Clinics remain responsible for their
                  use of the WhatsApp Business Platform.
                </p>
              </div>

              <InfoBox icon={<XCircle size={21} />} title="Information patients should not send">
                Patients should not use FolliCore or WhatsApp to send emergency
                medical information, full payment-card numbers, bank-account
                credentials, government identification numbers or other highly
                sensitive information that is unnecessary for a hair-restoration
                consultation. Urgent medical matters should be directed to the
                appropriate healthcare or emergency service.
              </InfoBox>
            </section>

            {/* 07 */}
            <section id="health-and-clinical-information" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="07" title="Health & Clinical Information" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Hair-restoration inquiries may contain health-related
                  information. Examples can include descriptions of hair loss,
                  scalp conditions, previous procedures, treatment history,
                  medications or other information a patient voluntarily
                  provides.
                </p>

                <p>
                  Scalp photographs can also reveal information relating to a
                  person&apos;s health or physical condition. Such photographs are
                  therefore handled as potentially sensitive information where
                  applicable.
                </p>

                <p>
                  FolliCore is designed to collect only information relevant to the
                  configured patient-progression workflow. Clinics should not
                  configure or request unnecessary medical information.
                </p>
              </div>

              <InfoBox icon={<HeartPulse size={21} />} title="Clinical boundary">
                FolliCore does not independently establish a medical diagnosis,
                determine treatment eligibility or make final clinical
                decisions. Any preliminary information presented through the
                system must be reviewed and interpreted by the appropriate
                qualified healthcare professional.
              </InfoBox>
            </section>

            {/* 08 */}
            <section id="image-processing" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="08" title="Image Processing" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Patients may voluntarily send scalp photographs through the
                  configured communication channel. These images may be
                  processed by FolliCore to support the clinic&apos;s patient-progression
                  workflow.
                </p>

                <p>
                  Depending on the configured workflow, image processing may
                  assist with observations such as apparent hair-loss pattern,
                  Norwood classification or preliminary graft-range
                  information.
                </p>

                <p>
                  These observations are not a substitute for an in-person
                  clinical examination, medical diagnosis or final treatment
                  plan. Image quality, angle, lighting, hair length and other
                  factors can affect the reliability of any image-based
                  observation.
                </p>
              </div>

              <InfoBox icon={<ImageIcon size={21} />} title="Patient images remain part of the patient conversation">
                Images are treated as information associated with the relevant
                patient interaction and are not made publicly available by
                NaseemLabs.
              </InfoBox>
            </section>

            {/* 09 */}
            <section id="automated-processing-and-limitations" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="09" title="Automated Processing & Limitations" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  FolliCore can use automated processing to interpret conversation
                  context, organize information, generate summaries, provide
                  configured responses and support workflow progression.
                </p>

                <p>
                  Automated outputs can be incomplete, incorrect or based on
                  incomplete information. Patients should not rely on an
                  automated response as a substitute for professional medical
                  advice.
                </p>

                <p>
                  Where a workflow involves a clinically meaningful decision,
                  the clinic&apos;s qualified professionals remain responsible for
                  reviewing the relevant information and making the final
                  decision.
                </p>

                <p>
                  NaseemLabs does not represent that automated processing will
                  always be accurate or available without interruption.
                </p>
              </div>
            </section>

            {/* 10 */}
            <section id="clinical-safety-and-human-oversight" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="10" title="Clinical Safety & Human Oversight" />

              <div className="grid gap-4 md:grid-cols-2">
                <DataCard icon={<UsersRound size={19} />} title="Clinic responsibility">
                  The clinic remains responsible for patient care, clinical
                  assessment, treatment recommendations, consent, pricing
                  decisions and communication of medical advice.
                </DataCard>

                <DataCard icon={<ShieldCheck size={19} />} title="Human escalation">
                  Clinics should maintain a practical route for patients to
                  reach appropriate human staff when automated communication is
                  insufficient or a clinical matter requires professional
                  review.
                </DataCard>

                <DataCard icon={<CircleHelp size={19} />} title="No emergency service">
                  FolliCore is not an emergency service and should not be used as a
                  substitute for urgent medical or emergency care.
                </DataCard>

                <DataCard icon={<Workflow size={19} />} title="Workflow support">
                  FolliCore supports the administrative and conversational stages
                  surrounding consultation progression; it does not take
                  ownership of clinical care.
                </DataCard>
              </div>
            </section>

            {/* 11 */}
            <section id="data-sharing-and-subprocessors" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="11" title="Data Sharing & Subprocessors" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Information may be accessed or processed by service providers
                  required to operate FolliCore, including infrastructure,
                  communications, database, security and other technical
                  providers.
                </p>

                <p>
                  Depending on the deployment, this can include cloud
                  infrastructure, database services, communication platforms
                  and model or processing providers used to deliver configured
                  FolliCore functionality.
                </p>

                <p>
                  Third-party providers process information according to their
                  applicable contractual terms, technical roles and privacy
                  documentation.
                </p>

                <p>
                  We do not sell patient information. We also do not disclose
                  one patient&apos;s conversation to another patient.
                </p>
              </div>

              <InfoBox icon={<Database size={21} />} title="Model and processing providers">
                Where a third-party model or processing service is used as part
                of FolliCore, information may be transmitted to that service as
                necessary to provide the configured functionality. NaseemLabs
                does not represent that every third-party provider operates
                exclusively within the clinic&apos;s hosting jurisdiction. Relevant
                providers and contractual arrangements should be assessed for
                the particular deployment.
              </InfoBox>
            </section>

            {/* 12 */}
            <section id="international-transfers" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="12" title="International Transfers" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  FolliCore deployments may use region-specific infrastructure. For
                  example, where configured and available, UK clinic data may be
                  hosted on UK infrastructure and UAE clinic data may be hosted
                  on UAE infrastructure.
                </p>

                <p>
                  This regional hosting statement applies to the infrastructure
                  operated or selected by NaseemLabs. It does not mean that
                  information never leaves that jurisdiction, because external
                  services such as WhatsApp/Meta or other required subprocessors
                  may process information in other locations.
                </p>

                <p>
                  Where personal information is transferred internationally,
                  the applicable legal requirements and appropriate safeguards
                  depend on the jurisdiction, provider and contractual
                  arrangement.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <DataCard icon={<Globe2 size={19} />} title="UK Clinics">
                  FolliCore infrastructure can be configured for UK-hosted
                  processing where the applicable deployment supports it.
                  Separate third-party services may have their own processing
                  locations.
                </DataCard>

                <DataCard icon={<Globe2 size={19} />} title="UAE Clinics">
                  FolliCore infrastructure can be configured for UAE-hosted
                  processing where the applicable deployment supports it.
                  Separate third-party services may have their own processing
                  locations.
                </DataCard>
              </div>
            </section>

            {/* 13 */}
            <section id="data-security" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="13" title="Data Security" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  We use technical and organisational measures designed to
                  protect information against unauthorised access, accidental
                  loss, misuse, alteration or disclosure.
                </p>

                <p>
                  Security measures may include access controls, authentication,
                  encrypted network communication, infrastructure controls,
                  database security, logging, monitoring and restricted
                  administrative access.
                </p>

                <p>
                  No internet-based system can guarantee absolute security.
                  Security controls are reviewed and improved as the service
                  develops.
                </p>
              </div>

              <InfoBox icon={<LockKeyhole size={21} />} title="Security by design">
                Access to patient information is intended to be limited to the
                people and systems that require it for the configured clinic
                workflow, technical operation, support or security purposes.
              </InfoBox>
            </section>

            {/* 14 */}
            <section id="data-retention" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="14" title="Data Retention" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  Patient and clinic information is retained only for as long as
                  reasonably necessary for the purposes described in this policy,
                  the clinic&apos;s configured requirements, contractual obligations,
                  security needs and applicable legal obligations.
                </p>

                <p>
                  Retention periods can differ between patient conversations,
                  images, clinic account information, technical logs, backups
                  and security records.
                </p>

                <p>
                  When a clinic terminates its use of FolliCore, patient data held
                  by NaseemLabs will be returned or deleted according to the
                  applicable service agreement, Data Processing Agreement and
                  legal requirements, subject to legitimate backup or legal
                  retention requirements.
                </p>
              </div>
            </section>

            {/* 15 */}
            <section id="your-rights" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="15" title="Your Rights" />

              <p className="mb-7 text-[15px] leading-8 text-[#56625e]">
                Depending on the applicable law and the circumstances of the
                processing, individuals may have rights relating to their
                personal information.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "Access to personal information",
                  "Correction of inaccurate information",
                  "Deletion or erasure in applicable circumstances",
                  "Restriction of processing in applicable circumstances",
                  "Objection to certain processing",
                  "Data portability where applicable",
                  "Withdrawal of consent where consent is the applicable basis",
                  "The right to raise a complaint with a relevant supervisory authority",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-[#e3e9e6] bg-[#fbfcfb] p-4 text-sm leading-6 text-[#596661]"
                  >
                    <Check size={17} className="mt-1 shrink-0" color={GREEN} />
                    {item}
                  </div>
                ))}
              </div>

              <InfoBox icon={<UsersRound size={21} />} title="Patient requests">
                Patients should normally direct privacy requests to the clinic
                with which they are communicating. Where NaseemLabs processes
                the information on behalf of that clinic, we may assist the
                clinic in responding to the request in accordance with the
                applicable agreement and law.
              </InfoBox>
            </section>

            {/* 16 */}
            <section id="cookies-and-website-data" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="16" title="Cookies & Website Data" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  The NaseemLabs website may use essential technologies needed
                  to operate the website, maintain security, remember
                  preferences or understand basic website performance.
                </p>

                <p>
                  Where non-essential cookies or similar technologies are used,
                  the applicable consent and disclosure requirements will be
                  followed.
                </p>

                <p>
                  Website analytics information is separate from the patient
                  conversation data processed through FolliCore unless explicitly
                  connected for a documented operational purpose.
                </p>
              </div>
            </section>

            {/* 17 */}
            <section id="childrens-information" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="17" title="Children's Information" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  FolliCore is intended for use by hair restoration clinics in
                  connection with their patient inquiries and is not designed
                  specifically for children.
                </p>

                <p>
                  Clinics must ensure that their use of FolliCore is appropriate
                  for the age of their patients and complies with applicable
                  requirements concerning children, consent, parental
                  responsibility and healthcare.
                </p>

                <p>
                  If information relating to a child is processed, the clinic
                  remains responsible for determining the appropriate legal and
                  clinical safeguards.
                </p>
              </div>
            </section>

            {/* 18 */}
            <section id="data-breach-and-incident-response" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="18" title="Data Breach & Incident Response" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  We maintain procedures intended to identify, investigate,
                  contain and respond to security incidents involving
                  information processed through our services.
                </p>

                <p>
                  Where an incident affects clinic or patient information, we
                  will assess the incident and take actions required by
                  applicable law and our contractual obligations, including
                  notifying affected customers where required.
                </p>

                <p>
                  Because WhatsApp/Meta and other third-party services can form
                  part of the communication chain, incidents occurring within a
                  third-party platform may also be subject to that provider&apos;s
                  incident-management and notification processes.
                </p>
              </div>
            </section>

            {/* 19 */}
            <section id="changes-to-this-policy" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="19" title="Changes to This Policy" />

              <div className="space-y-5 text-[15px] leading-8 text-[#56625e]">
                <p>
                  We may update this Privacy Policy when our services,
                  processing activities, legal obligations or security
                  practices change.
                </p>

                <p>
                  Material changes will be communicated through appropriate
                  channels where required. The &quot;Last updated&quot; date at the top
                  of this page identifies the current version.
                </p>

                <p>
                  Clinics should review this policy periodically and ensure that
                  their own patient-facing privacy notices remain consistent
                  with the way they actually use FolliCore.
                </p>
              </div>
            </section>

            {/* 20 */}
            <section id="contact-us" className="scroll-mt-10 border-t border-[#e5ebe8] py-20">
              <SectionHeading number="20" title="Contact Us" />

              <div className="border border-[#dce8e3] bg-[#f4f9f7] p-7 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#087f6b]">
                      Privacy & Data Protection
                    </p>

                    <h3
                      className="mt-3 text-3xl tracking-[-0.025em]"
                      style={{
                        fontFamily: "var(--font-newsreader), Georgia, serif",
                      }}
                    >
                      Questions about patient information?
                    </h3>

                    <p className="mt-3 max-w-[600px] text-sm leading-7 text-[#64716c]">
                      For privacy, security, data-processing or deletion
                      questions relating to NaseemLabs or FolliCore, contact us
                      directly.
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
                  This Privacy Policy should be read together with the
                  NaseemLabs Terms of Service and, where applicable, the
                  Data Processing Agreement between NaseemLabs and the clinic.
                </p>

                <p className="mt-3">
                  Third-party services such as WhatsApp/Meta are also subject
                  to their own terms, policies and privacy practices.
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
              Patient Data. Clinic Trust.
            </p>

            <h2
              className="mt-5 text-5xl leading-[1] tracking-[-0.035em] text-white md:text-6xl"
              style={{
                fontFamily: "var(--font-newsreader), Georgia, serif",
              }}
            >
              Infrastructure built
              <br />
              with responsibility.
            </h2>

            <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-[#b8c9c4]">
              FolliCore is designed to help clinics progress patient inquiries
              while maintaining clear boundaries between communication,
              infrastructure and clinical responsibility.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink
                className="inline-flex items-center gap-2 bg-[#79d8bd] px-5 py-3 text-sm font-semibold text-[#062823]"
              >
                Test FolliCore
                <ArrowRight size={16} />
              </WhatsAppLink>

              <Link
                href="/terms"
                className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-semibold text-white"
              >
                Terms of Service
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
