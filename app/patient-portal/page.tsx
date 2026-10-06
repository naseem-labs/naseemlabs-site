"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { WHATSAPP_PHONE } from "@/lib/site-config";

const DISCUSS_WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    "Hi NaseemLabs, I'd like to discuss my clinic and book a private call.\nPreferred date:\nPreferred time:"
  )}`;

/* =========================================================
   TYPES
========================================================= */

type Lead = {
  id: string;
  clinic_id: string;
  name: string | null;
  phone: string | null;
  city: string | null;
  stage: string | null;
  followup_active: boolean | null;
  source: string | null;
  created_at: string | null;
  updated_at: string | null;
};

type LeadProfile = {
  lead_id: string;
  age: number | null;
  hair_loss_duration: string | null;
  affected_area: string | null;
  hair_type: string | null;
  previous_treatment: string | null;
  previous_transplant: string | null;
  location: string | null;
  occupation: string | null;
  budget_range: string | null;
  goal: string | null;
  patient_concern: string | null;
  ai_summary: string | null;
  lead_context: string | null;
  next_action: string | null;
  consultation_booking_requested: boolean | null;
};

type LeadPhoto = {
  id: string;
  lead_id: string;
  photo_type: string | null;
  storage_path: string | null;
  uploaded_at: string | null;
  signedUrl: string | null;
};

type Followup = {
  followup_type: string | null;
  followup_reason: string | null;
  scheduled_for: string | null;
  created_at: string | null;
};

type LeadAction = {
  id: string;
  lead_id: string;
  action_type: string | null;
  created_at: string | null;
};

type PortalData = {
  lead: Lead;
  profile: LeadProfile | null;
  photos: LeadPhoto[];
  followup: Followup | null;
  actions: LeadAction[];
  region: "in" | "uk" | "ae";
};

type PortalApiResponse = {
  success: boolean;
  error?: string;
  data?: {
    lead: Lead;
    profile: LeadProfile | null;
    photos: LeadPhoto[];
    followup: Followup | null;
    actions: LeadAction[];
    region: "in" | "uk" | "ae";
    summaryPending: boolean;
  };
};

/* =========================================================
   HELPERS
========================================================= */

function displayValue(value: unknown) {
  if (value === null || value === undefined) {
    return "Not available";
  }

  const stringValue = String(value).trim();

  return stringValue || "Not available";
}

function splitPatientName(name: string | null) {
  const cleanName = name?.trim() || "Patient Inquiry";

  const parts = cleanName.split(/\s+/);

  if (parts.length === 1) {
    return {
      firstName: parts[0],
      lastName: "",
      initials: parts[0].slice(0, 1).toUpperCase(),
    };
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
    initials:
      `${parts[0][0] ?? ""}${
        parts[parts.length - 1]?.[0] ?? ""
      }`.toUpperCase(),
  };
}

function formatPhoneForDisplay(phone: string | null) {
  return phone || "Not available";
}

function formatDateTime(value: string | null) {
  if (!value) {
    return "Not available";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function formatDateOnly(value: string | null) {
  if (!value) {
    return "Not available";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function parseAffectedArea(value: string | null) {
  const result = {
    norwood: null as string | null,
    donor: null as string | null,
    thinning: null as string | null,
    grafts: null as string | null,
    zones: [] as string[],
  };

  if (!value) {
    return result;
  }

  const segments = value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

  for (const segment of segments) {
    const separatorIndex = segment.indexOf(":");

    if (separatorIndex === -1) {
      result.zones.push(segment);
      continue;
    }

    const label = segment
      .slice(0, separatorIndex)
      .trim()
      .toLowerCase();

    const content = segment
      .slice(separatorIndex + 1)
      .trim();

    if (!content) {
      continue;
    }

    if (label === "norwood") {
      result.norwood = content;
      continue;
    }

    if (label === "donor") {
      result.donor = content;
      continue;
    }

    if (label === "thinning") {
      result.thinning = content;
      continue;
    }

    if (label === "grafts") {
      result.grafts = content;
      continue;
    }

    if (
      label === "zones" ||
      label === "affected zones" ||
      label === "affected_area"
    ) {
      result.zones.push(
        ...content
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      );

      continue;
    }

    result.zones.push(segment);
  }

  return result;
}

function humanizeStage(stage: string | null) {
  if (!stage) {
    return "Inquiry";
  }

  return stage
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function getPhotoLabel(photo: LeadPhoto, index: number) {
  if (photo.photo_type?.trim()) {
    return photo.photo_type;
  }

  return `Photo ${index + 1}`;
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PatientPortalPage() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [portalRegion, setPortalRegion] = useState<
    "in" | "uk" | "ae" | null
  >(null);
  const [showDossier, setShowDossier] = useState(false);

  function openDossier() {
    const input = phone.trim();

    if (!input) {
      return;
    }

    setPhone(input);
    setPortalRegion(null);
    setShowDossier(true);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  function backToGate() {
    setPortalRegion(null);
    setShowDossier(false);

    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <TopNavigation />

      {!showDossier ? (
        <AccessScreen
          phone={phone}
          setPhone={setPhone}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          openDossier={openDossier}
        />
      ) : (
        <div>
          <PatientDossier
            phone={phone}
            countryCode={countryCode}
            onRegionChange={setPortalRegion}
            backToGate={backToGate}
          />

          <NextDecision region={portalRegion} />
        </div>
      )}

      <PortalFooter />
    </div>
  );
}

/* =========================================================
   TOP NAVIGATION
========================================================= */

function TopNavigation() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 sm:px-6 sm:py-3.5">
      <div className="flex min-w-0 items-center space-x-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white shadow-sm">
          B
        </div>

        <div className="min-w-0">
          <h1 className="flex items-center gap-1.5 text-sm font-bold text-slate-900">
            <span className="truncate">
              Good Afternoon, Doctor
            </span>

            <span className="hidden text-base sm:inline">
              👋
            </span>
          </h1>

          <p className="hidden text-[11px] font-medium text-slate-500 sm:block">
            Here&apos;s what&apos;s happening with your patient inquiries today.
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center space-x-2 text-xs sm:space-x-3">
        <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-600 md:flex">
          <CalendarIcon />

          <span className="font-medium">
            October 6, 2026
          </span>
        </div>

        <div className="flex items-center gap-2 sm:pl-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-xs font-bold text-slate-700">
            DR
          </div>

          <div className="hidden text-left sm:block">
            <div className="text-xs font-bold leading-none text-slate-800">
              Consultant Surgeon
            </div>

            <div className="mt-0.5 text-[10px] text-slate-400">
              Harley Street Clinic
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   ACCESS SCREEN
========================================================= */

function AccessScreen({
  phone,
  setPhone,
  countryCode,
  setCountryCode,
  openDossier,
}: {
  phone: string;
  setPhone: (value: string) => void;
  countryCode: string;
  setCountryCode: (value: string) => void;
  openDossier: () => void;
}) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-md items-center px-4 py-12 sm:px-6 sm:py-20">
      <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-lg font-bold text-blue-600">
          🔒
        </div>

        <h2 className="text-xl font-bold tracking-tight text-slate-900">
          Access Patient Assessment
        </h2>

        <p className="mt-2 mb-6 text-xs leading-relaxed text-slate-500">
          Enter the mobile number you used to send your test inquiry on
          WhatsApp. The patient inquiry file will load instantly.
        </p>

        <div className="space-y-4">
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              aria-label="Country code"
              className="w-[92px] shrink-0 rounded-xl border border-slate-200 bg-slate-50 px-2 py-3 text-center font-mono text-sm text-slate-800 transition focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="+91">IN +91</option>
              <option value="+44">UK +44</option>
              <option value="+971">UAE +971</option>
            </select>

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  openDossier();
                }
              }}
              placeholder="e.g. 7810 119214"
              className="min-w-0 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center font-mono text-sm text-slate-800 transition focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-base"
            />
          </div>

          <button
            type="button"
            onClick={openDossier}
            className="w-full rounded-xl bg-blue-600 py-3 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:bg-blue-700 hover:shadow"
          >
            View Patient Inquiry
          </button>
        </div>

        <div className="mt-5 text-[11px] text-slate-400">
          Patient Inquiry Portal • Secure Access
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PATIENT LEAD DOSSIER
========================================================= */

function PatientDossier({
  phone,
  countryCode,
  onRegionChange,
  backToGate,
}: {
  phone: string;
  countryCode: string;
  onRegionChange: (region: "in" | "uk" | "ae") => void;
  backToGate: () => void;
}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [portalData, setPortalData] =
    useState<PortalData | null>(null);
  const [summaryPending, setSummaryPending] = useState(false);

  const loadPortalData = useCallback(async (
    currentPhone: string,
    signal?: AbortSignal
  ) => {
    const response = await fetch(
      `/api/patient-portal?phone=${encodeURIComponent(
        currentPhone
      )}&countryCode=${encodeURIComponent(countryCode)}`,
      {
        method: "GET",
        cache: "no-store",
        signal,
      }
    );

    const result =
      (await response.json()) as PortalApiResponse;

    if (!response.ok || !result.success || !result.data) {
      throw new Error(
        result.error ||
          "We could not load this patient inquiry."
      );
    }

    return result.data;
  }, [countryCode]);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await loadPortalData(
          phone,
          controller.signal
        );

        if (!active) {
          return;
        }

        setPortalData({
          lead: data.lead,
          profile: data.profile,
          photos: data.photos ?? [],
          followup: data.followup ?? null,
          actions: data.actions ?? [],
          region: data.region,
        });
        onRegionChange(data.region);

        setSummaryPending(Boolean(data.summaryPending));
        setLoading(false);
      } catch (loadError) {
        if (
          loadError instanceof DOMException &&
          loadError.name === "AbortError"
        ) {
          return;
        }

        console.error(
          "Patient portal load error:",
          loadError
        );

        if (!active) {
          return;
        }

        setPortalData(null);
        setLoading(false);

        setError(
          loadError instanceof Error
            ? loadError.message
            : "We could not load this patient inquiry. Please try again."
        );
      }
    }

    void load();

    return () => {
      active = false;
      controller.abort();
    };
  }, [loadPortalData, onRegionChange, phone]);

  /*
   * ---------------------------------------------------------
   * SUMMARY REFRESH
   *
   * The existing summary processor updates lead_profile.ai_summary.
   * While the summary is pending, check the API periodically.
   *
   * No Supabase client is exposed in the browser.
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (!summaryPending || !portalData?.lead.id) {
      return;
    }

    let active = true;

    const interval = window.setInterval(async () => {
      try {
        const data = await loadPortalData(phone);

        if (!active) {
          return;
        }

        setPortalData({
          lead: data.lead,
          profile: data.profile,
          photos: data.photos ?? [],
          followup: data.followup ?? null,
          actions: data.actions ?? [],
          region: data.region,
        });
        onRegionChange(data.region);

        setSummaryPending(Boolean(data.summaryPending));
      } catch (refreshError) {
        console.warn(
          "Patient portal summary refresh failed:",
          refreshError
        );
      }
    }, 5000);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, [
    loadPortalData,
    onRegionChange,
    summaryPending,
    portalData?.lead.id,
    phone,
  ]);

  /* =========================================================
     REAL DATA MAPPING
  ========================================================= */

  const patient = useMemo(() => {
    return splitPatientName(
      portalData?.lead.name ?? null
    );
  }, [portalData?.lead.name]);

  const profile = portalData?.profile ?? null;

  const affected = useMemo(() => {
    return parseAffectedArea(
      profile?.affected_area ?? null
    );
  }, [profile?.affected_area]);

  const affectedZones =
    affected.zones.length > 0
      ? affected.zones.join(", ")
      : "Not available";

  const consultationBooked = Boolean(
    portalData?.lead.stage &&
      (
        portalData.lead.stage
          .toLowerCase()
          .includes("book") ||
        portalData.lead.stage
          .toLowerCase()
          .includes("consult")
      )
  );

  const consultationStatus = consultationBooked
    ? "Consultation Booked"
    : humanizeStage(
        portalData?.lead.stage ?? null
      );

  const photoCount =
    portalData?.photos.length ?? 0;

  const createdDate = formatDateOnly(
    portalData?.lead.created_at ?? null
  );

  const latestAction =
    portalData?.actions &&
    portalData.actions.length > 0
      ? portalData.actions[0]
      : null;

  const patientInformationDate =
    latestAction?.created_at ??
    portalData?.lead.updated_at ??
    portalData?.lead.created_at ??
    null;

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <main className="mx-auto max-w-6xl space-y-6 px-3 py-4 sm:space-y-8 sm:px-4 sm:py-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 animate-pulse rounded-full bg-slate-100" />

            <div className="space-y-2">
              <div className="h-4 w-40 animate-pulse rounded bg-slate-100" />
              <div className="h-3 w-56 animate-pulse rounded bg-slate-100" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <LoadingCard />
            <LoadingCard />
          </div>

          <div className="space-y-4 lg:col-span-7">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     ERROR / NO PATIENT
  ========================================================= */

  if (error || !portalData) {
    return (
      <main className="mx-auto flex min-h-[calc(100vh-64px)] max-w-md items-center px-4 py-12">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-lg">
            !
          </div>

          <h2 className="text-lg font-bold text-slate-900">
            Patient Inquiry Not Found
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            {error ??
              "No patient inquiry was found for this number."}
          </p>

          <button
            type="button"
            onClick={backToGate}
            className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Try Another Number
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl space-y-6 px-3 py-4 sm:space-y-8 sm:px-4 sm:py-6">

      {/* PATIENT IDENTITY */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div className="flex min-w-0 items-start gap-3">
            <button
              type="button"
              onClick={backToGate}
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50"
              aria-label="Back"
            >
              ←
            </button>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
              {patient.initials || "P"}
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h2 className="text-sm font-bold leading-5 text-slate-900 sm:text-base">
                  {portalData.lead.name ||
                    "Patient Inquiry"}
                </h2>

                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700 sm:text-[10px]">
                  {consultationStatus}
                </span>

                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium text-slate-600 sm:text-[10px]">
                  Source:{" "}
                  {displayValue(
                    portalData.lead.source
                  )}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-medium text-slate-400 sm:text-[11px]">
                <span>
                  {profile?.age
                    ? `${profile.age} yrs`
                    : "Age not available"}
                </span>

                <span>•</span>

                <span>
                  {displayValue(
                    profile?.location ??
                      portalData.lead.city
                  )}
                </span>

                <span>•</span>

                <span className="break-all font-mono font-semibold text-slate-700">
                  {formatPhoneForDisplay(
                    portalData.lead.phone
                  )}
                </span>

                <span className="hidden sm:inline">
                  •
                </span>

                <span className="hidden sm:inline">
                  Created: {createdDate}
                </span>
              </div>

              <div className="mt-1 text-[10px] font-medium text-slate-400 sm:hidden">
                Created: {createdDate}
              </div>
            </div>
          </div>

          <div className="pl-11 md:pl-0">
            <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-600 sm:text-xs">
              PREET Inquiry Review
            </span>
          </div>
        </div>
      </div>

      {/* MAIN CLINIC REVIEW */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">

        {/* LEFT */}
        <div className="space-y-4 sm:space-y-5 lg:col-span-5">

          {/* PATIENT PHOTOS */}
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:p-4">
            <div className="mb-3 flex flex-col gap-1.5 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between">
              <span className="text-slate-800">
                PATIENT PHOTOS
              </span>

              <span className="text-[10px] font-medium text-blue-600 sm:text-xs">
                {photoCount > 0
                  ? `Photo 1 of ${photoCount} • ${getPhotoLabel(
                      portalData.photos[0],
                      0
                    )}`
                  : "No photos available"}
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-900">
              <div className="flex snap-x snap-mandatory gap-2 p-1">
                {portalData.photos.some((photo) => photo.signedUrl) ? (
                  portalData.photos
                    .filter((photo) => photo.signedUrl)
                    .map((photo, index) => (
                      <div
                        key={photo.id}
                        className="relative min-w-full shrink-0 snap-start overflow-hidden rounded-lg sm:min-w-[78%] lg:min-w-[82%]"
                      >
                        <img
                          src={photo.signedUrl!}
                          alt={`Patient scalp ${getPhotoLabel(photo, index)}`}
                          className="h-48 w-full object-cover sm:h-56"
                        />

                        <span className="absolute bottom-2 left-2 max-w-[calc(100%-16px)] truncate rounded bg-black/70 px-2 py-0.5 font-mono text-[9px] text-white backdrop-blur sm:text-[10px]">
                          WhatsApp Direct Attachment
                        </span>
                      </div>
                    ))
                ) : (
                  <div className="flex h-48 w-full items-center justify-center bg-slate-100 text-center sm:h-56">
                    <div>
                      <div className="text-xs font-semibold text-slate-500">
                        No patient photo available
                      </div>

                      <div className="mt-1 text-[10px] text-slate-400">
                        Photos shared during the inquiry will appear here.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CONFIRMED DETAILS */}
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-xs shadow-sm sm:p-4">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-800 sm:text-[11px]">
                Confirmed Details
              </span>

              <span className="shrink-0 rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-4 text-slate-600 sm:gap-3">
              <Detail
                label="Hair Loss Duration"
                value={displayValue(
                  profile?.hair_loss_duration
                )}
              />

              <Detail
                label="Previous Treatment"
                value={displayValue(
                  profile?.previous_treatment
                )}
              />

              <Detail
                label="Previous Transplant"
                value={displayValue(
                  profile?.previous_transplant
                )}
              />

              <Detail
                label="Target Window"
                value={displayValue(profile?.goal)}
              />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-4 sm:space-y-5 lg:col-span-7">

          {/* CONSULTATION */}
          <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
            <div className="min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Consultation Slot
              </div>

              <div className="mt-1 text-sm font-bold leading-5 text-slate-900">
                {portalData.followup?.scheduled_for
                  ? formatDateTime(
                      portalData.followup.scheduled_for
                    )
                  : "Not scheduled"}

                {portalData.followup?.followup_type && (
                  <span className="block text-[11px] font-medium text-slate-500 sm:inline sm:pl-1">
                    (
                    {displayValue(
                      portalData.followup
                        .followup_type
                    )}
                    )
                  </span>
                )}
              </div>
            </div>

            <span className="w-fit shrink-0 rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
              {consultationBooked
                ? "Booked"
                : "Not booked"}
            </span>
          </div>

          {/* PRE-CONSULTATION ASSESSMENT */}
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:p-4">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-wide text-slate-800 sm:text-[11px]">
              Pre-Consultation Assessment
            </span>

            <div className="mb-4 grid grid-cols-2 gap-2">
              <Assessment
                label="Norwood Stage"
                value={displayValue(
                  affected.norwood
                )}
              />

              <Assessment
                label="Donor Quality"
                value={displayValue(
                  affected.donor
                )}
              />

              <Assessment
                label="Thinning Pattern"
                value={displayValue(
                  affected.thinning
                )}
              />

              <Assessment
                label="Estimated Grafts"
                value={displayValue(
                  affected.grafts
                )}
                blue
              />
            </div>

            <div className="space-y-3 text-[11px] leading-5 sm:text-xs">
              <div>
                <span className="font-medium text-slate-400">
                  Affected Zones:
                </span>

                <span className="ml-1 font-semibold text-slate-700">
                  {affectedZones}
                </span>
              </div>

              <div>
                <span className="font-medium text-slate-400">
                  Patient Concern:
                </span>

                {profile?.patient_concern ? (
                  <span className="mt-1 inline-block rounded border border-amber-200/60 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-800 sm:ml-1 sm:mt-0 sm:text-[11px]">
                    {profile.patient_concern}
                  </span>
                ) : (
                  <span className="ml-1 font-semibold text-slate-700">
                    Not available
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* PATIENT INQUIRY SUMMARY */}
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-xs shadow-sm sm:p-4">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-800 sm:text-[11px]">
                Patient Inquiry Summary
              </span>

              <span
                className={`w-fit rounded-md border px-2.5 py-0.5 text-[10px] font-semibold ${
                  profile?.ai_summary
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-amber-200 bg-amber-50 text-amber-700"
                }`}
              >
                {profile?.ai_summary
                  ? "Review Complete"
                  : summaryPending
                    ? "Summary Processing"
                    : "Summary Pending"}
              </span>
            </div>

            <div className="rounded-lg border border-slate-200/70 bg-slate-50/80 p-3 text-[11px] leading-relaxed text-slate-600">
              {profile?.ai_summary
                ? profile.ai_summary
                : summaryPending
                  ? "The patient inquiry has been received. The conversation summary is being prepared and will appear here when ready."
                  : "No conversation summary is currently available."}
            </div>
          </div>

          {/* SPEED & ACCURACY AUDIT */}
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 text-xs shadow-sm sm:p-4">
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-wide text-slate-800 sm:text-[11px]">
              Speed &amp; Accuracy Audit
            </span>

            <div className="space-y-3 text-[10px] sm:space-y-2 sm:text-[11px]">

              <AuditRow
                title="Inquiry Delivered to Clinic Workflow"
                value={
                  portalData.lead.created_at
                    ? "Recorded"
                    : "Activity available"
                }
              />

              <AuditRow
                title="Patient Information Gathered"
                value={formatDateTime(
                  patientInformationDate
                )}
              />

              <AuditRow
                title="PREET Initial WhatsApp Engagement"
                value={
                  portalData.lead.created_at
                    ? "Recorded"
                    : "Activity available"
                }
                green
              />

              <div className="flex flex-col gap-0.5 text-slate-600 sm:flex-row sm:justify-between">
                <span className="font-semibold text-blue-700">
                  Consultation Progressed
                </span>

                <span className="font-mono text-slate-400">
                  {consultationBooked
                    ? "Completed"
                    : "Not completed"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* END OF CLINIC REVIEW */}
      <div className="border-t border-slate-200 pt-6 sm:pt-8">
        <div className="text-center">
          <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-slate-400 sm:text-[10px]">
            END OF PATIENT INQUIRY REVIEW
          </span>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   LOADING CARD
========================================================= */

function LoadingCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="h-3 w-32 animate-pulse rounded bg-slate-100" />

      <div className="mt-4 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
      </div>
    </div>
  );
}

/* =========================================================
   SEPARATE DECISION LAYER
========================================================= */

function NextDecision({
  region,
}: {
  region: "in" | "uk" | "ae" | null;
}) {
  return (
    <section className="border-t border-slate-300 bg-[#F1F5F9] px-3 py-10 sm:px-6 sm:py-14">

      <div className="mx-auto max-w-6xl">

        {/* DECISION INTRO */}
        <div className="mb-7 flex flex-col justify-between gap-5 sm:mb-8 md:flex-row md:items-start">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
                WHAT&apos;S NEXT
              </span>
            </div>

            <h2 className="text-xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-2xl">
              You&apos;ve seen how PREET fits into a hair restoration clinic.
              <br className="hidden sm:inline" />
              What would you like to do next?
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-500">
              You&apos;ve reviewed the patient inquiry flow, seen how the
              information is presented to your team, and explored what the
              workflow looks like in practice. Choose how you&apos;d like to
              continue.
            </p>
          </div>

          <div className="flex max-w-xs shrink-0 items-start gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
            <div className="mt-0.5 shrink-0 text-lg leading-none text-blue-600">
              <ClinicIcon />
            </div>

            <p className="text-[11px] leading-relaxed text-slate-500">
              You can continue evaluating the system on your own or discuss
              your specific clinic setup with our team.
            </p>
          </div>
        </div>

        {/* TWO DECISION CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">

          {/* SELF AUDIT */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-7">

            <div className="pointer-events-none absolute right-0 top-1/2 hidden h-64 w-48 -translate-y-1/2 overflow-hidden opacity-[0.07] sm:block">
              <div className="rounded-xl border border-slate-900 bg-slate-100 p-3 font-mono text-[8px]">
                <div className="mb-1 font-bold">
                  New Inquiries
                </div>

                <div className="text-lg font-bold">
                  124{" "}
                  <span className="text-[8px] text-emerald-600">
                    ↑ 28%
                  </span>
                </div>

                <div className="mt-4 font-bold">
                  Consultations
                </div>

                <div className="text-lg font-bold">
                  18{" "}
                  <span className="text-[8px] text-emerald-600">
                    ↑ 40%
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                CONTINUE YOUR CLINIC REVIEW
              </span>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Evaluate Your Clinic
              </h3>

              <p className="mb-6 text-xs leading-relaxed text-slate-500">
                Take a closer look at how PREET can fit into your clinic&apos;s
                current workflow and patient inquiry volume.
              </p>

              <ul className="mb-8 space-y-4 text-xs text-slate-600">

                <Checklist
                  icon="📊"
                  title="Analyse your current inquiry flow"
                  text="Identify where potential patients are getting lost."
                />

                <Checklist
                  icon="🧮"
                  title="Use the commercial impact calculator"
                  text="Test with your own clinic numbers."
                />

                <Checklist
                  icon="📄"
                  title="Review the dashboard and patient journey"
                  text="See exactly what your team would receive."
                />

                <Checklist
                  icon="☑️"
                  title="Evaluate fit for your clinic"
                  text="Assess how it can support your team and doctors."
                />

              </ul>
            </div>

            <div className="relative z-10 pt-2">
              <a
                href={
                  region === "uk"
                    ? "/access-uk"
                    : region === "ae"
                      ? "/access-ae"
                      : region === "in"
                        ? "/access-in"
                        : "#"
                }
                onClick={(event) => {
                  if (!region) {
                    event.preventDefault();
                  }
                }}
                className="flex w-full items-center justify-between rounded-xl border border-blue-500 bg-white px-5 py-3 text-xs font-semibold text-blue-600 shadow-sm transition hover:border-blue-600 hover:bg-blue-50/50 hover:text-blue-700"
              >
                <span>
                  Continue Self-Audit
                </span>

                <span>→</span>
              </a>
            </div>
          </div>

          {/* PRIVATE CALL */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-7">

            <div>
              <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400">
                DISCUSS YOUR CLINIC WITH US
              </span>

              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Discuss Your Clinic
              </h3>

              <p className="mb-6 text-xs leading-relaxed text-slate-500">
                Book a private call with our team to walk through your
                clinic&apos;s specific situation and see if PREET is the right
                fit.
              </p>

              <ul className="mb-8 space-y-4 text-xs text-slate-600">

                <Checklist
                  icon="👥"
                  title="Share your current inquiry process"
                  text="We'll understand your clinic's workflow and patient profile."
                />

                <Checklist
                  icon="💬"
                  title="Get answers to your questions"
                  text="Pricing, deployment, team workflow, and more."
                />

                <Checklist
                  icon="⚙️"
                  title="Discuss customization for your clinic"
                  text="Locations, doctors, procedures, and specific requirements."
                />

                <Checklist
                  icon="🗓️"
                  title="Clear next steps"
                  text="See how to move forward if it's a good fit."
                />

              </ul>
            </div>

            <div className="pt-2">
              <a
                href={DISCUSS_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-between rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <span>
                  Book a Private Call
                </span>

                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-7 text-center sm:mt-8">
          <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-slate-400 sm:text-[10px]">
            BUILT FOR SERIOUS HAIR RESTORATION CLINICS
            &nbsp;|&nbsp;
            NASEEMLABS
          </span>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0">
      <div className="text-[10px] text-slate-400">
        {label}
      </div>

      <div className="mt-0.5 break-words font-semibold leading-4 text-slate-800">
        {value}
      </div>
    </div>
  );
}

function Assessment({
  label,
  value,
  blue = false,
}: {
  label: string;
  value: string;
  blue?: boolean;
}) {
  return (
    <div className="min-w-0 rounded-lg border border-slate-100 bg-slate-50 p-2.5">
      <span className="block text-[8px] uppercase leading-3 text-slate-400 sm:text-[9px]">
        {label}
      </span>

      <span
        className={`block break-words text-[11px] font-bold leading-4 sm:text-xs ${
          blue
            ? "text-blue-600"
            : "text-slate-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function AuditRow({
  title,
  value,
  green = false,
}: {
  title: string;
  value: string;
  green?: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-slate-100 pb-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pb-1.5">
      <span
        className={`leading-4 ${
          green
            ? "font-semibold text-emerald-700"
            : "font-medium text-slate-800"
        }`}
      >
        {title}
      </span>

      <span className="font-mono leading-4 text-slate-400 sm:shrink-0">
        {value}
      </span>
    </div>
  );
}

function Checklist({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-xs text-blue-600">
        {icon}
      </div>

      <div className="min-w-0">
        <strong className="block font-semibold text-slate-800">
          {title}
        </strong>

        <span className="text-[11px] leading-5 text-slate-500">
          {text}
        </span>
      </div>
    </li>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-slate-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function ClinicIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function PortalFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-2 px-6 text-xs text-slate-400 sm:flex-row sm:space-y-0">
        <div>
          © 2026 NaseemLabs. Proprietary Clinical Infrastructure.
        </div>

        <div className="font-mono text-[11px]">
          UK Data Sovereignty • Patient Information Protected
        </div>
      </div>
    </footer>
  );
}
