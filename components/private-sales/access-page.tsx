import type { RegionalConfig } from "@/lib/private-sales/regional-config";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  hasPatientPortalAccess,
  PATIENT_PORTAL_ACCESS_COOKIE,
} from "@/lib/patient-portal-access";
import Image from "next/image";
import ImpactCalculator from "./impact-calculator";
import DeploymentOptions from "./deployment-options";

type AccessPageProps = {
  config: RegionalConfig;
};

const ACCESS_COOKIE_NAME = "naseemlabs_private_access";
const ACCESS_ERROR_COOKIE_NAME = "naseemlabs_private_access_error";
const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

function getAccessCookieValue() {
  const password = process.env.ACCESS_PASSWORD;

  if (!password) {
    return null;
  }

  return createHmac("sha256", password)
    .update("naseemlabs-private-sales-access")
    .digest("hex");
}

function passwordsMatch(input: string, configured: string) {
  const inputHash = createHmac("sha256", "naseemlabs-password-check")
    .update(input)
    .digest();

  const configuredHash = createHmac(
    "sha256",
    "naseemlabs-password-check"
  )
    .update(configured)
    .digest();

  return timingSafeEqual(inputHash, configuredHash);
}

async function unlockPrivateAccess(formData: FormData) {
  "use server";

  const configuredPassword = process.env.ACCESS_PASSWORD;
  const submittedPassword = formData.get("password");
  const returnPath = formData.get("returnPath");

  const allowedPaths = ["/access-in", "/access-uk", "/access-ae"];

  const safeReturnPath =
    typeof returnPath === "string" && allowedPaths.includes(returnPath)
      ? returnPath
      : "/access-in";

  const cookieStore = await cookies();

  if (
    !configuredPassword ||
    typeof submittedPassword !== "string" ||
    !passwordsMatch(submittedPassword, configuredPassword)
  ) {
    cookieStore.set(ACCESS_ERROR_COOKIE_NAME, "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 5,
    });

    redirect(safeReturnPath);
  }

  const accessCookieValue = getAccessCookieValue();

  if (!accessCookieValue) {
    redirect(safeReturnPath);
  }

  cookieStore.set(ACCESS_COOKIE_NAME, accessCookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ACCESS_COOKIE_MAX_AGE,
  });

  cookieStore.delete(ACCESS_ERROR_COOKIE_NAME);

  redirect(safeReturnPath);
}

function Icon({
  type,
  className = "",
}: {
  type: string;
  className?: string;
}) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (type) {
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
          <path d="M8.5 8.5c.3-.5.6-.5.9-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c.8 1.5 1.9 2.5 3.4 3.2l.6-.7c.2-.2.4-.3.7-.2l1.6.7c.3.1.4.3.3.6-.2.7-.7 1.2-1.3 1.4-1 .3-2.9-.4-4.6-1.7-1.5-1.2-2.8-2.8-3.3-4.1-.3-.8-.2-1.5.6-1.9Z" />
        </svg>
      );

    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7v5l3 2" />
        </svg>
      );

    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19c.5-3.1 2.3-5 5.5-5s5 1.9 5.5 5" />
          <path d="M16 7.5a2.5 2.5 0 1 1 0 5" />
          <path d="M17 14.5c2 .4 3.2 1.8 3.5 3.8" />
        </svg>
      );

    case "x":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m9 9 6 6M15 9l-6 6" />
        </svg>
      );

    case "chat":
      return (
        <svg {...common}>
          <path d="M5 5.5h14v10H9l-4 3v-13Z" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );

    case "info":
      return (
        <svg {...common}>
          <rect x="5" y="3.5" width="14" height="17" rx="2" />
          <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" />
        </svg>
      );

    case "photo":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="m6.5 17 4-4 2.5 2 2-2 2.5 4" />
        </svg>
      );

    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 9h16" />
          <path d="M8 13h.01M12 13h.01M16 13h.01M8 16h.01M12 16h.01" />
        </svg>
      );

    case "document":
      return (
        <svg {...common}>
          <rect x="5" y="3.5" width="14" height="17" rx="2" />
          <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" />
        </svg>
      );

    case "question":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-.9.8-1.7 1.2-1.7 2.7" />
          <path d="M12 16h.01" />
        </svg>
      );

    case "doctor":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c.5-3.5 2.8-5.5 7-5.5s6.5 2 7 5.5" />
          <path d="M12 5v6M9 8h6" />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 20 6v5c0 5-3.3 8.4-8 10-4.7-1.6-8-5-8-10V6l8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );

    case "dashboard":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      );

    case "leads":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 20c.5-3.5 2.3-5.5 5.5-5.5s5 2 5.5 5.5" />
          <path d="M16 9h5M18.5 6.5v5" />
        </svg>
      );

    case "add":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );

    case "settings":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19 12a7 7 0 0 0-.1-1.1l2-1.5-2-3.4-2.3 1a8 8 0 0 0-1.9-1.1L14.4 3h-4.8l-.3 2.9a8 8 0 0 0-1.9 1.1l-2.3-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .4 0 .7.1 1.1l-2 1.5 2 3.4 2.3-1a8 8 0 0 0 1.9 1.1l.3 2.9h4.8l.3-2.9a8 8 0 0 0 1.9-1.1l2.3 1 2-3.4-2-1.5c.1-.4.1-.7.1-1.1Z" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

function SectionNumber({ number }: { number: string }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4b82c4] text-[17px] font-semibold text-white shadow-sm">
      {number}
    </div>
  );
}

function FlowStep({
  icon,
  title,
  children,
  tone = "neutral",
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  tone?: "neutral" | "red" | "green";
}) {
  const styles = {
    neutral: {
      wrapper: "border-[#e7e9ec] bg-white",
      icon: "bg-[#edf2f7] text-[#285d93]",
    },
    red: {
      wrapper: "border-[#f0d9d9] bg-white/75",
      icon: "bg-[#fff0f0] text-[#d72d43]",
    },
    green: {
      wrapper: "border-[#d8ebe3] bg-white/80",
      icon: "bg-[#e8f8f1] text-[#15956d]",
    },
  }[tone];

  return (
    <div
      className={`relative flex min-h-[154px] flex-1 flex-col rounded-lg border p-4 shadow-[0_1px_3px_rgba(15,23,42,0.03)] ${styles.wrapper}`}
    >
      <div
        className={`mb-3 flex h-9 w-9 items-center justify-center rounded-md ${styles.icon}`}
      >
        <Icon type={icon} className="h-[19px] w-[19px]" />
      </div>

      <h4 className="text-[13px] font-bold leading-[1.25] text-[#14233d]">
        {title}
      </h4>

      <p className="mt-2 text-[10.5px] leading-[1.45] text-[#657184]">
        {children}
      </p>
    </div>
  );
}

function FlowArrow({ color = "red" }: { color?: "red" | "green" }) {
  return (
    <div
      className={`hidden shrink-0 items-center justify-center px-1 md:flex ${
        color === "green" ? "text-[#68bca4]" : "text-[#e48d96]"
      }`}
    >
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 9H18M13 3.5L18.5 9L13 14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function SectionHeader({
  number,
  title,
  subtitle,
  description,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <SectionNumber number={number} />

      <div className="min-w-0 flex-1">
        <h2 className="text-[23px] font-bold tracking-[-0.035em] text-[#14233d] md:text-[25px]">
          {title}
        </h2>

        <p className="mt-0.5 text-[13px] font-medium text-[#607087]">
          {subtitle}
        </p>
      </div>

      <p className="hidden max-w-[365px] pt-1 text-right text-[10.5px] leading-[1.45] text-[#5e6c7d] lg:block">
        {description}
      </p>
    </div>
  );
}

function MechanismRow({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#edf2f7] text-[#285d93]">
        <Icon type={icon} className="h-[17px] w-[17px]" />
      </div>

      <div>
        <h4 className="text-[11px] font-bold text-[#14233d]">{title}</h4>

        <p className="mt-0.5 text-[10px] leading-[1.45] text-[#728093]">
          {description}
        </p>
      </div>
    </div>
  );
}

function BoundaryRow({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white text-[#2464a2] shadow-sm">
        <Icon type={icon} className="h-[17px] w-[17px]" />
      </div>

      <div>
        <h4 className="text-[11px] font-bold text-[#173b66]">{title}</h4>

        <p className="mt-0.5 text-[10px] leading-[1.45] text-[#607087]">
          {description}
        </p>
      </div>
    </div>
  );
}

function DashboardNavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-[9px] ${
        active
          ? "bg-[#26394d] font-semibold text-white"
          : "text-[#aeb9c5]"
      }`}
    >
      <Icon type={icon} className="h-[14px] w-[14px]" />
      {label}
    </div>
  );
}

function SummaryField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <>
      <span className="text-[#7b8795]">{label}</span>
      <span className="font-medium text-[#344255]">{value}</span>
    </>
  );
}

function ScalpPhoto({
  variant,
}: {
  variant: "front" | "top" | "side";
}) {
  const imageSrc = {
    front: "/homepage/scalp-front.jpg",
    top: "/homepage/scalp-top.jpg",
    side: "/homepage/scalp-side.jpg",
  }[variant];

  return (
    <div className="relative h-[72px] overflow-hidden rounded-md border border-[#dce1e5] bg-[#b9a99a]">
      <Image
        src={imageSrc}
        alt={`${variant} scalp view`}
        fill
        sizes="(min-width: 1024px) 168px, 33vw"
        className="object-cover"
      />

      <span className="absolute bottom-1 right-1 rounded bg-black/35 px-1 text-[6px] text-white">
        {variant}
      </span>
    </div>
  );
}

function TimelineItem({
  icon,
  title,
  description,
  time,
}: {
  icon: string;
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex gap-2.5">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e9f7f2] text-[#15956d]">
        <Icon type={icon} className="h-[13px] w-[13px]" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-[8.5px] font-bold text-[#26384e]">
            {title}
          </h4>

          <span className="shrink-0 text-[7px] text-[#929daa]">
            {time}
          </span>
        </div>

        <p className="mt-0.5 text-[7.5px] leading-[1.4] text-[#7b8795]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default async function AccessPage({ config }: AccessPageProps) {
  const cookieStore = await cookies();
  const accessCookie = cookieStore.get(ACCESS_COOKIE_NAME)?.value;
  const accessCookieValue = getAccessCookieValue();
  const portalAccess = cookieStore.get(PATIENT_PORTAL_ACCESS_COOKIE)?.value;

  const hasAccess =
    (Boolean(accessCookieValue) && accessCookie === accessCookieValue) ||
    hasPatientPortalAccess(portalAccess, config.region);

  const accessError = cookieStore.has(ACCESS_ERROR_COOKIE_NAME);

  if (!hasAccess) {
    const returnPath =
      config.region === "uk"
        ? "/access-uk"
        : config.region === "ae"
          ? "/access-ae"
          : "/access-in";

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8fafb] px-5 py-10 text-[#14233d]">
        <div className="w-full max-w-[430px] rounded-2xl border border-[#dce3e9] bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:p-9">
          <div className="mb-7 flex items-center justify-between">
            <span className="text-[16px] font-extrabold tracking-[-0.03em] text-[#14233d]">
              NaseemLabs
            </span>

            <span className="rounded-full border border-[#dce3e9] bg-[#f8fafb] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#687587]">
              Private Access
            </span>
          </div>

          <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf4ff] text-[#3478b5]">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
          </div>

          <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#7f8b99]">
            Confidential — Clinic Deployment Brief
          </p>

          <h1 className="mt-3 text-[27px] font-bold tracking-[-0.04em] text-[#14233d]">
            Private access
          </h1>

          <p className="mt-2 text-[12px] leading-[1.6] text-[#687587]">
            Enter the master password to access this private deployment brief.
          </p>

          <form action={unlockPrivateAccess} className="mt-7">
            <input
              type="hidden"
              name="returnPath"
              value={returnPath}
            />

            <label
              htmlFor="private-access-password"
              className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#536477]"
            >
              Master password
            </label>

            <div className="relative">
              <input
                id="show-private-access-password"
                type="checkbox"
                className="peer sr-only"
                aria-label="Show password"
              />

              <input
                id="private-access-password"
                name="password"
                type="text"
                autoComplete="current-password"
                required
                autoFocus
                className="h-12 w-full rounded-lg border border-[#d6dde4] bg-white px-4 pr-12 text-sm text-[#14233d] outline-none transition [-webkit-text-security:disc] focus:border-[#6f9dcc] focus:ring-2 focus:ring-[#dceaf8] peer-checked:[-webkit-text-security:none]"
                placeholder="Enter password"
              />

              <label
                htmlFor="show-private-access-password"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#687587]"
                aria-label="Show or hide password"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </label>
            </div>

            {accessError && (
              <p className="mt-2 text-[11px] font-medium text-[#b42336]">
                Incorrect password. Please try again.
              </p>
            )}

            {!process.env.ACCESS_PASSWORD && (
              <p className="mt-2 text-[11px] font-medium text-[#b42336]">
                Access protection is not configured on this deployment.
              </p>
            )}

            <button
              type="submit"
              className="mt-4 flex h-12 w-full items-center justify-center rounded-lg bg-[#14233d] text-[12px] font-bold text-white transition hover:bg-[#1c304a]"
            >
              Enter Private Brief
              <span className="ml-2 text-[16px]">→</span>
            </button>
          </form>

          <p className="mt-6 text-center text-[9px] leading-[1.5] text-[#98a2ae]">
            Authorized clinic deployment access only.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafb] text-[#14233d]">
      {/* Top bar */}
      <header className="border-b border-[#e4e8ec] bg-white">
        <div className="mx-auto flex h-[48px] max-w-[1400px] items-center justify-between px-5 md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <span className="text-[16px] font-extrabold tracking-[-0.03em] text-[#14233d]">
              NaseemLabs
            </span>

            <span className="h-4 w-px bg-[#d9dee4]" />

            <span className="text-[10px] font-bold text-[#14233d]">
              PREET
            </span>

            <span className="text-[10px] text-[#9aa4b1]">|</span>

            <span className="truncate text-[10px] text-[#657184]">
              Patient Inquiry Infrastructure for Hair Restoration Clinics
            </span>
          </div>

          <div className="ml-4 flex shrink-0 items-center gap-1.5 text-[9px] font-medium text-[#5e6978]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>

            Confidential — Clinic Deployment Brief
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1400px] px-5 py-7 md:px-8 md:py-8">
        {/* Intro */}
        <div className="mb-7">
          <h1 className="max-w-[850px] text-[28px] font-bold tracking-[-0.045em] text-[#14233d] md:text-[34px]">
            Every serious patient inquiry deserves a fair chance to reach
            consultation.
          </h1>

          <p className="mt-2 max-w-[720px] text-[12px] leading-[1.6] text-[#687587]">
            A private operational briefing showing how PREET fits into your
            clinic&apos;s existing patient inquiry workflow.
          </p>

          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#8a95a3]">
            {config.marketName} deployment
          </p>
        </div>

        {/* =========================================================
            SECTION 01
        ========================================================= */}
        <section>
          <SectionHeader
            number="01"
            title="Your Current Inquiry Flow"
            subtitle="High intent patients often drop before consultation."
            description="You already receive inquiries. The question is how many of these inquiries move forward to consultation with the current process."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {/* Current Reality */}
            <div className="rounded-xl border border-[#f0d6d7] bg-[#fff4f4] p-4 md:p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#d82d45]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                <h3 className="text-[14px] font-bold text-[#a41f2e]">
                  Current Reality
                </h3>

                <span className="text-[12px] font-semibold text-[#d05d68]">
                  (Human Bandwidth Limit)
                </span>
              </div>

              <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
                <FlowStep
                  icon="whatsapp"
                  title="Patient sends inquiry"
                  tone="red"
                >
                  e.g. cost, results, am I a candidate?
                </FlowStep>

                <FlowArrow />

                <FlowStep
                  icon="clock"
                  title="Delayed or incomplete response"
                  tone="red"
                >
                  Response after hours or next day. Inquiries often answer like
                  “Please visit clinic.”
                </FlowStep>

                <FlowArrow />

                <FlowStep
                  icon="people"
                  title="No structured follow-up"
                  tone="red"
                >
                  Conversation drops, patient moves on, or chooses competitor.
                </FlowStep>

                <FlowArrow />

                <FlowStep
                  icon="x"
                  title="Lost opportunity"
                  tone="red"
                >
                  High intent patient doesn&apos;t reach consultation.
                </FlowStep>
              </div>
            </div>

            {/* With PREET */}
            <div className="rounded-xl border border-[#cfe9df] bg-[#f0fbf7] p-4 md:p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#15956d]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>

                <h3 className="text-[14px] font-bold text-[#087755]">
                  With PREET
                </h3>

                <span className="text-[12px] font-semibold text-[#279879]">
                  (Consistent Patient Progression)
                </span>
              </div>

              <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
                <FlowStep
                  icon="whatsapp"
                  title="Instant response (< 10 seconds)"
                  tone="green"
                >
                  Friendly, professional and accurate answers.
                </FlowStep>

                <FlowArrow color="green" />

                <FlowStep
                  icon="chat"
                  title="Structured conversation"
                  tone="green"
                >
                  Understands concern, answers questions, collects required
                  information.
                </FlowStep>

                <FlowArrow color="green" />

                <FlowStep
                  icon="info"
                  title="Information & photos"
                  tone="green"
                >
                  Requests 3-angle scalp photos and relevant details (e.g.
                  medical history, previous treatment).
                </FlowStep>

                <FlowArrow color="green" />

                <FlowStep
                  icon="calendar"
                  title="Qualified inquiries to consultation"
                  tone="green"
                >
                  Only serious, well-informed patients reach your team.
                </FlowStep>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 02 — HOW PREET HANDLES THE CONVERSATION
        ========================================================= */}
        <section className="mt-10">
          <SectionHeader
            number="02"
            title="How PREET Handles the Conversation"
            subtitle="A consistent, clinic-specific conversation flow that saves your team's time."
            description="PREET operates within clear clinical boundaries. It supports your team, and does not replace the doctor."
          />

          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.15fr_0.9fr]">
            {/* LEFT — WHATSAPP MOCKUP */}
            <div className="relative flex min-h-[540px] items-end justify-center overflow-hidden rounded-xl border border-[#dce3e9] bg-[#eef4f6] pt-7">
              <div className="absolute left-5 top-5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#83909e]">
                Patient Conversation
              </div>

              <div className="relative z-10 w-[285px] overflow-hidden rounded-[31px] border-[7px] border-[#16252a] bg-white shadow-[0_18px_45px_rgba(17,38,48,0.20)]">
                <div className="flex h-[53px] items-center bg-[#087c70] px-3 text-white">
                  <div className="mr-3 text-[20px] leading-none">‹</div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#087c70]">
                    <span className="text-[13px] font-bold">P</span>
                  </div>

                  <div className="ml-2 min-w-0">
                    <p className="text-[11px] font-bold leading-tight">
                      PREET
                    </p>

                    <p className="mt-0.5 truncate text-[7px] text-white/80">
                      Bajwa Hair Restoration Center
                    </p>
                  </div>

                  <div className="ml-auto text-[17px]">⌕</div>
                </div>

                <div className="min-h-[475px] bg-[#efeae2] px-3 py-4">
                  <div className="mb-3 flex items-start gap-2">
                    <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[#263238] text-center text-[9px] leading-6 text-white">
                      P
                    </div>

                    <div className="max-w-[195px] rounded-[9px] rounded-tl-[2px] bg-white px-3 py-2 shadow-sm">
                      <p className="text-[9px] leading-[1.45] text-[#263238]">
                        Hello sir, hair transplant di cost kinni aa?
                      </p>

                      <p className="mt-1 text-right text-[7px] text-[#9a9a9a]">
                        10:21 AM
                      </p>
                    </div>
                  </div>

                  <div className="ml-auto max-w-[225px] rounded-[9px] rounded-tr-[2px] bg-[#d9fdd3] px-3 py-2 shadow-sm">
                    <p className="text-[9px] leading-[1.5] text-[#263238]">
                      Hi! Thanks for reaching out.
                      <br />
                      I&apos;ll be happy to help.
                    </p>

                    <p className="mt-2 text-[9px] leading-[1.5] text-[#263238]">
                      To give you the most accurate information, could you
                      please share a few details?
                    </p>

                    <p className="mt-2 text-[9px] leading-[1.55] text-[#263238]">
                      1. Your age?
                      <br />
                      2. Which area are you concerned about?
                      <br />
                      3. If possible, share 3 clear scalp photos
                      <br />
                      (front, top, and donor area).
                    </p>

                    <p className="mt-1 text-right text-[7px] text-[#7a9276]">
                      10:21 AM ✓✓
                    </p>
                  </div>

                  <div className="mt-5 flex justify-center">
                    <span className="rounded-md bg-[#e2ddd5] px-2 py-1 text-[7px] font-medium text-[#77736d]">
                      Today
                    </span>
                  </div>

                  <div className="mt-5 flex items-start gap-2">
                    <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[#263238] text-center text-[9px] leading-6 text-white">
                      P
                    </div>

                    <div className="max-w-[180px] rounded-[9px] rounded-tl-[2px] bg-white px-3 py-2 shadow-sm">
                      <p className="text-[9px] leading-[1.45] text-[#263238]">
                        Okay sir, I&apos;ll send the photos.
                      </p>

                      <p className="mt-1 text-right text-[7px] text-[#9a9a9a]">
                        10:23 AM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex h-[40px] items-center gap-2 border-t border-[#dedad5] bg-[#f7f5f1] px-3">
                  <div className="flex-1 rounded-full bg-white px-3 py-1.5 text-[8px] text-[#a3a3a3]">
                    Message
                  </div>

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#087c70] text-[9px] text-white">
                    ➤
                  </div>
                </div>
              </div>
            </div>

            {/* MIDDLE — PREET MECHANISM */}
            <div className="rounded-xl border border-[#dce3e9] bg-white p-5">
              <div className="mb-5">
                <h3 className="text-[14px] font-bold text-[#14233d]">
                  What PREET does inside the conversation
                </h3>

                <p className="mt-1 text-[10px] leading-[1.5] text-[#728093]">
                  A structured conversation designed around the way your
                  clinic handles patient inquiries.
                </p>
              </div>

              <div className="space-y-4">
                <MechanismRow
                  icon="chat"
                  title="Responds to incoming inquiries"
                  description="Instant, consistent, and professional responses."
                />

                <MechanismRow
                  icon="info"
                  title="Understands the patient's concern"
                  description="Asks relevant questions based on clinic protocol."
                />

                <MechanismRow
                  icon="document"
                  title="Collects required information"
                  description="Age, affected areas, medical history, previous treatment, etc."
                />

                <MechanismRow
                  icon="photo"
                  title="Requests scalp photos"
                  description="Guides the patient to share clear 3-angle photos."
                />

                <MechanismRow
                  icon="question"
                  title="Answers common questions"
                  description="Cost, procedure details, recovery, eligibility, etc."
                />

                <MechanismRow
                  icon="calendar"
                  title="Handles follow-up"
                  description="Keeps the conversation active and moves serious inquiries forward."
                />

                <MechanismRow
                  icon="people"
                  title="Escalates when needed"
                  description="Transfers to your human team for specific cases or objections."
                />
              </div>
            </div>

            {/* RIGHT — CLINICAL BOUNDARIES */}
            <div className="rounded-xl border border-[#d8e5f0] bg-[#eaf4ff] p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#2464a2] shadow-sm">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3 20 6v5c0 5-3.3 8.4-8 10-4.7-1.6-8-5-8-10V6l8-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>

                <h3 className="text-[15px] font-bold text-[#173b66]">
                  Clinical Boundaries
                </h3>
              </div>

              <div className="space-y-5">
                <BoundaryRow
                  icon="shield"
                  title="No false promises"
                  description="Provides factual, clinic-approved information only."
                />

                <BoundaryRow
                  icon="target"
                  title="Sets realistic expectations"
                  description="Explains procedure scope and limitations."
                />

                <BoundaryRow
                  icon="document"
                  title="Collects relevant patient information"
                  description="Only the information your team needs for consultation."
                />

                <BoundaryRow
                  icon="doctor"
                  title="Does not provide medical advice"
                  description="Clinical decisions remain with your doctors."
                />

                <BoundaryRow
                  icon="people"
                  title="Escalates when required"
                  description="Handoff to your team for complex, sensitive, or doctor-specific questions."
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 03 — WHAT THE DOCTOR ACTUALLY SEES
        ========================================================= */}
        <section className="mt-10">
          <SectionHeader
            number="03"
            title="What the Doctor Actually Sees"
            subtitle="No need to read full WhatsApp conversations. Get a clear summary."
            description="Your team receives a concise patient summary with all key information in one place, along with the full conversation if needed."
          />

          <div className="overflow-hidden rounded-xl border border-[#dce3e9] bg-white shadow-[0_1px_4px_rgba(15,23,42,0.04)]">
            <div className="grid min-h-[330px] lg:grid-cols-[168px_1fr]">
              {/* DASHBOARD SIDEBAR */}
              <aside className="bg-[#172432] p-4 text-white">
                <div className="mb-7 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
                    <span className="text-[10px] font-bold">N</span>
                  </div>

                  <span className="text-[10px] font-bold tracking-[-0.01em]">
                    NaseemLabs
                  </span>
                </div>

                <nav className="space-y-1.5">
                  <DashboardNavItem
                    icon="dashboard"
                    label="Dashboard"
                  />

                  <DashboardNavItem
                    icon="leads"
                    label="All Leads"
                    active
                  />

                  <DashboardNavItem
                    icon="add"
                    label="Add Lead"
                  />

                  <DashboardNavItem
                    icon="settings"
                    label="Settings"
                  />
                </nav>
              </aside>

              {/* MAIN DASHBOARD */}
              <div className="min-w-0 bg-[#f8fafc] p-3 md:p-4">
                <div className="grid gap-3 lg:grid-cols-[1.35fr_0.82fr]">
                  {/* PATIENT SUMMARY */}
                  <div className="rounded-lg border border-[#e1e6eb] bg-white">
                    <div className="flex items-center justify-between border-b border-[#edf0f3] px-4 py-3">
                      <h3 className="text-[12px] font-bold text-[#14233d]">
                        Patient Summary
                      </h3>

                      <button
                        type="button"
                        className="rounded-md border border-[#8db8e0] bg-white px-2.5 py-1 text-[8px] font-semibold text-[#2464a2]"
                      >
                        Open Conversation →
                      </button>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f2ff] text-[#3979b7]">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="8" r="3" />
                            <path d="M5.5 20c.7-4 2.8-6 6.5-6s5.8 2 6.5 6" />
                          </svg>
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-[#14233d]">
                              #HT-8421
                            </span>

                            <span className="rounded-full bg-[#dcf7e8] px-2 py-0.5 text-[7px] font-bold text-[#188052]">
                              Consultation Confirmed
                            </span>
                          </div>

                          <p className="mt-0.5 text-[8px] text-[#8792a0]">
                            Today, 10:24 AM
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-[118px_1fr] gap-y-1.5 text-[8.5px] leading-[1.35]">
                        <SummaryField label="Name" value="Not provided" />
                        <SummaryField label="Age / Gender" value="Male, 34" />
                        <SummaryField label="Location" value="Delhi, India" />

                        <SummaryField
                          label="Primary concern"
                          value="Receding hairline, mid-scalp thinning"
                        />

                        <SummaryField
                          label="Norwood (Indicative)"
                          value="Likely Grade 4 (based on photos)"
                        />

                        <SummaryField
                          label="Donor assessment"
                          value="Looks moderate to dense (photos received)"
                        />

                        <SummaryField
                          label="Previous treatment"
                          value="Used finasteride for 1 year"
                        />

                        <SummaryField
                          label="Budget"
                          value="Aware of procedure value"
                        />

                        <SummaryField
                          label="Expectations"
                          value="Realistic — wants hairline and mid-scalp improvement"
                        />

                        <SummaryField
                          label="Next action"
                          value="Consultation requested"
                        />

                        <SummaryField
                          label="Notes"
                          value="Serious candidate. Follow up for scheduling."
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="grid gap-3">
                    {/* SCALP PHOTOS */}
                    <div className="rounded-lg border border-[#e1e6eb] bg-white p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-[10px] font-bold text-[#14233d]">
                          Scalp Photos (3)
                        </h3>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        <ScalpPhoto variant="front" />
                        <ScalpPhoto variant="top" />
                        <ScalpPhoto variant="side" />
                      </div>
                    </div>

                    {/* CONVERSATION TIMELINE */}
                    <div className="rounded-lg border border-[#e1e6eb] bg-white p-3">
                      <h3 className="mb-3 text-[10px] font-bold text-[#14233d]">
                        Conversation Timeline
                      </h3>

                      <div className="space-y-3">
                        <TimelineItem
                          icon="whatsapp"
                          title="Initial inquiry"
                          description="Hello sir, hair transplant di cost kinni aa?"
                          time="10:21 AM"
                        />

                        <TimelineItem
                          icon="info"
                          title="Information collected"
                          description="Age, concern, medical history, photos"
                          time="10:23 AM"
                        />

                        <TimelineItem
                          icon="calendar"
                          title="Patient interested"
                          description="Asked about next available consultation dates"
                          time="10:24 AM"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 04 — THE POTENTIAL IMPACT
        ========================================================= */}
        <section className="mt-10">
          <SectionHeader
            number="04"
            title="The Potential Impact"
            subtitle="Every inquiry already has value. Better handling can help more of those inquiries reach consultation."
            description="Use the calculator below with your own clinic numbers to see an illustrative scenario."
          />

          <div className="rounded-xl border border-[#dce3e9] bg-[#eef7fc] p-4 md:p-5">
            <div className="mb-4 flex items-center justify-end">
              <div className="flex max-w-[310px] items-start gap-2 rounded-lg border border-[#d5e6f2] bg-white/80 px-3 py-2">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f2fb] text-[#3478b5]">
                  <span className="text-[9px] font-bold">i</span>
                </div>

                <p className="text-[8.5px] leading-[1.4] text-[#60758a]">
                  Use the calculator below with your own numbers to see the
                  potential impact for your clinic.
                </p>
              </div>
            </div>

            <ImpactCalculator config={config} />
          </div>
        </section>

        {/* =========================================================
            SECTION 05 — CHOOSE YOUR DEPLOYMENT
        ========================================================= */}
        <section className="mt-10">
          <SectionHeader
            number="05"
            title="Choose Your Deployment"
            subtitle="Choose the path that fits how you want to introduce PREET into your clinic."
            description="Start with a real-world pilot if you want to evaluate the workflow first, or move directly into ongoing deployment if you're ready to put it into operation."
          />

          <DeploymentOptions config={config} />
        </section>
      </div>
    </main>
  );
}
