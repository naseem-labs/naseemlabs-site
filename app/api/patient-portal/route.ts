import { NextRequest, NextResponse } from "next/server";
import {
  createPatientPortalAccessToken,
  PATIENT_PORTAL_ACCESS_COOKIE,
  type PatientPortalRegion,
} from "@/lib/patient-portal-access";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY"
  );
}

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

/* =========================================================
   SUPABASE REST HELPER
========================================================= */

async function supabaseRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/${path}`,
    {
      ...options,
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        ...(options.headers ?? {}),
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      `Supabase request failed (${response.status}): ${text}`
    );
  }

  if (response.status === 204) {
    return null as T;
  }

  return response.json() as Promise<T>;
}

/* =========================================================
   PHONE HELPERS
========================================================= */

const SUPPORTED_COUNTRY_CODES = [
  "971",
  "91",
  "44",
];

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function normalizePhone(value: string) {
  return digitsOnly(value);
}

/*
 * Convert whatever the user enters into
 * the local/mobile number.
 *
 * Examples:
 *
 * +91 7986299370  -> 7986299370
 * 917986299370    -> 7986299370
 * +917986299370   -> 7986299370
 * 07986299370     -> 7986299370
 * 7986299370      -> 7986299370
 * 0091 7986299370 -> 7986299370
 */

function getLocalPhoneDigits(
  value: string,
  countryCode = "+91"
) {
  let digits = digitsOnly(value);

  if (!digits) {
    return "";
  }

  /*
   * International dialing prefix:
   *
   * 0091XXXXXXXXXX
   * becomes
   * 91XXXXXXXXXX
   */
  if (digits.startsWith("00")) {
    digits = digits.slice(2);
  }

  const selectedCode =
    digitsOnly(countryCode);

  /*
   * If the entered number already contains
   * a supported country code, remove it.
   */
  const existingCode =
    SUPPORTED_COUNTRY_CODES.find(
      (code) =>
        digits.startsWith(code) &&
        digits.length > code.length
    );

  if (existingCode) {
    digits = digits.slice(
      existingCode.length
    );
  } else if (
    selectedCode &&
    digits.startsWith(selectedCode) &&
    digits.length > selectedCode.length
  ) {
    digits = digits.slice(
      selectedCode.length
    );
  }

  /*
   * Remove local trunk prefix.
   *
   * 07986299370
   * becomes
   * 7986299370
   */
  digits = digits.replace(/^0+/, "");

  return digits;
}

function getCanonicalPhone(
  value: string,
  countryCode = "+91"
) {
  const localDigits =
    getLocalPhoneDigits(
      value,
      countryCode
    );

  if (!localDigits) {
    return null;
  }

  const requestedCode =
    digitsOnly(countryCode);

  const selectedCode =
    SUPPORTED_COUNTRY_CODES.includes(
      requestedCode
    )
      ? requestedCode
      : "91";

  return `${selectedCode}${localDigits}`;
}

/* =========================================================
   FIND LEAD
========================================================= */

async function findLead(
  phone: string,
  countryCode = "+91"
) {
  const localDigits =
    getLocalPhoneDigits(
      phone,
      countryCode
    );

  const canonicalPhone =
    getCanonicalPhone(
      phone,
      countryCode
    );

  if (
    !localDigits ||
    !canonicalPhone
  ) {
    return null;
  }

  /*
   * Try the most common database formats first.
   *
   * Example database value:
   * 917986299370
   */

  const variants =
    Array.from(
      new Set([
        canonicalPhone,
        `+${canonicalPhone}`,
        localDigits,
        `0${localDigits}`,
        phone.trim(),
        digitsOnly(phone),
      ])
    ).filter(Boolean);

  for (const variant of variants) {
    const query =
      new URLSearchParams();

    query.set(
      "select",
      "id,clinic_id,name,phone,city,stage,followup_active,source,created_at,updated_at"
    );

    query.set(
      "phone",
      `eq.${variant}`
    );

    query.set(
      "limit",
      "1"
    );

    const leads =
      await supabaseRequest<Lead[]>(
        `leads?${query.toString()}`
      );

    if (leads.length > 0) {
      console.log(
        "[Patient Portal] Lead matched",
        {
          enteredPhone: phone,
          countryCode,
          matchedVariant: variant,
          storedPhone:
            leads[0].phone,
          leadId:
            leads[0].id,
        }
      );

      return leads[0];
    }
  }

  /*
   * Final fallback:
   *
   * Search for the local number at the
   * end of the stored phone value.
   *
   * This catches:
   *
   * 917986299370
   * +917986299370
   * 07986299370
   * 7986299370
   */

  const suffixQuery =
    new URLSearchParams();

  suffixQuery.set(
    "select",
    "id,clinic_id,name,phone,city,stage,followup_active,source,created_at,updated_at"
  );

  suffixQuery.set(
    "phone",
    `like.*${localDigits}`
  );

  suffixQuery.set(
    "limit",
    "1"
  );

  const suffixMatches =
    await supabaseRequest<Lead[]>(
      `leads?${suffixQuery.toString()}`
    );

  if (
    suffixMatches.length > 0
  ) {
    console.log(
      "[Patient Portal] Lead matched by phone suffix",
      {
        enteredPhone: phone,
        countryCode,
        localDigits,
        storedPhone:
          suffixMatches[0].phone,
        leadId:
          suffixMatches[0].id,
      }
    );

    return suffixMatches[0];
  }

  console.warn(
    "[Patient Portal] No lead matched",
    {
      enteredPhone: phone,
      countryCode,
      localDigits,
      canonicalPhone,
      variants,
    }
  );

  return null;
}

/* =========================================================
   REGION
========================================================= */

function determineLeadRegion(
  lead: Lead,
  profile: LeadProfile | null
): PatientPortalRegion {
  const searchable = [
    lead.city,
    profile?.location,
    lead.source,
    lead.clinic_id,
    lead.phone,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (
    /(^|\D)(?:44|0044)\d{8,}/.test(
      searchable
    ) ||
    /united kingdom|uk|england|scotland|wales|london|manchester|birmingham|glasgow/.test(
      searchable
    )
  ) {
    return "uk";
  }

  if (
    /(^|\D)(?:971|00971)\d{7,}/.test(
      searchable
    ) ||
    /united arab emirates|uae|dubai|abu dhabi|sharjah|ajman/.test(
      searchable
    )
  ) {
    return "ae";
  }

  return "in";
}

/* =========================================================
   STORAGE PATH NORMALIZER
========================================================= */

function normalizeStoragePath(
  storagePath: string
) {
  let path =
    storagePath.trim();

  if (!path) {
    return null;
  }

  /*
   * If storage_path contains a full
   * Supabase Storage URL, extract the
   * actual object path.
   */
  if (
    path.startsWith("http://") ||
    path.startsWith("https://")
  ) {
    try {
      const url =
        new URL(path);

      const marker =
        "/storage/v1/object/";

      const markerIndex =
        url.pathname.indexOf(
          marker
        );

      if (
        markerIndex !== -1
      ) {
        path =
          url.pathname.slice(
            markerIndex +
              marker.length
          );

        if (
          path.startsWith(
            "sign/"
          )
        ) {
          path =
            path.slice(
              "sign/".length
            );
        }

        if (
          path.startsWith(
            "public/"
          )
        ) {
          path =
            path.slice(
              "public/".length
            );
        }

        if (
          path.startsWith(
            "authenticated/"
          )
        ) {
          path =
            path.slice(
              "authenticated/"
                .length
            );
        }

        if (
          path.startsWith(
            "patient-photos/"
          )
        ) {
          path =
            path.slice(
              "patient-photos/"
                .length
            );
        }
      }
    } catch {
      /*
       * Keep original path.
       */
    }
  }

  /*
   * Remove bucket prefix if it is
   * already present in the DB value.
   */
  if (
    path.startsWith(
      "patient-photos/"
    )
  ) {
    path =
      path.slice(
        "patient-photos/"
          .length
      );
  }

  /*
   * Remove leading slash.
   */
  path =
    path.replace(
      /^\/+/,
      ""
    );

  return (
    path || null
  );
}

/* =========================================================
   SIGNED PHOTO URL
========================================================= */

async function createSignedPhotoUrl(
  storagePath: string
) {
  const normalizedPath =
    normalizeStoragePath(
      storagePath
    );

  if (!normalizedPath) {
    console.warn(
      "[Patient Portal] Empty storage path"
    );

    return null;
  }

  /*
   * Encode each path segment while
   * preserving "/" separators.
   */
  const encodedPath =
    normalizedPath
      .split("/")
      .map((segment) =>
        encodeURIComponent(
          segment
        )
      )
      .join("/");

  const endpoint =
    `${SUPABASE_URL}/storage/v1/object/sign/` +
    `patient-photos/${encodedPath}`;

  try {
    const response =
      await fetch(
        endpoint,
        {
          method: "POST",
          headers: {
            apikey:
              SUPABASE_SERVICE_ROLE_KEY,
            Authorization:
              `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            expiresIn:
              60 * 60,
          }),
          cache:
            "no-store",
        }
      );

    const responseText =
      await response.text();

    if (!response.ok) {
      console.error(
        "[Patient Portal] Photo signing failed",
        {
          storagePath,
          normalizedPath,
          status:
            response.status,
          response:
            responseText,
        }
      );

      return null;
    }

    let data: {
      signedURL?: string;
      signedUrl?: string;
    };

    try {
      data =
        JSON.parse(
          responseText
        );
    } catch {
      console.error(
        "[Patient Portal] Invalid Storage response",
        {
          storagePath,
          response:
            responseText,
        }
      );

      return null;
    }

    const signedPath =
      data.signedURL ??
      data.signedUrl;

    if (!signedPath) {
      console.error(
        "[Patient Portal] Storage returned no signed URL",
        {
          storagePath,
          response:
            data,
        }
      );

      return null;
    }

    /*
     * Already absolute.
     */
    if (
      signedPath.startsWith(
        "http://"
      ) ||
      signedPath.startsWith(
        "https://"
      )
    ) {
      return signedPath;
    }

    /*
     * /storage/v1/...
     */
    if (
      signedPath.startsWith(
        "/storage/v1/"
      )
    ) {
      return `${SUPABASE_URL}${signedPath}`;
    }

    /*
     * /object/...
     */
    if (
      signedPath.startsWith(
        "/object/"
      )
    ) {
      return `${SUPABASE_URL}/storage/v1${signedPath}`;
    }

    /*
     * Fallback.
     */
    return `${SUPABASE_URL}/storage/v1/${signedPath.replace(
      /^\/+/,
      ""
    )}`;
  } catch (error) {
    console.error(
      "[Patient Portal] Photo signing exception",
      {
        storagePath,
        normalizedPath,
        error,
      }
    );

    return null;
  }
}

/* =========================================================
   GET
========================================================= */

export async function GET(
  request: NextRequest
) {
  try {
    const phone =
      request.nextUrl.searchParams.get(
        "phone"
      );

    const countryCode =
      request.nextUrl.searchParams.get(
        "countryCode"
      ) || "+91";

    if (!phone?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Phone number is required.",
        },
        {
          status: 400,
        }
      );
    }

    /* -------------------------------------------------------
       1. FIND LEAD
    ------------------------------------------------------- */

    const lead =
      await findLead(
        phone,
        countryCode
      );

    if (!lead) {
      return NextResponse.json(
        {
          success: false,
          error:
            "No patient inquiry was found for this number.",
        },
        {
          status: 404,
        }
      );
    }

    /* -------------------------------------------------------
       2. LOAD LEAD PROFILE
    ------------------------------------------------------- */

    const profileQuery =
      new URLSearchParams();

    profileQuery.set(
      "select",
      "lead_id,age,hair_loss_duration,affected_area,hair_type,previous_treatment,previous_transplant,location,occupation,budget_range,goal,patient_concern,ai_summary,lead_context,next_action,consultation_booking_requested"
    );

    profileQuery.set(
      "lead_id",
      `eq.${lead.id}`
    );

    profileQuery.set(
      "limit",
      "1"
    );

    const profiles =
      await supabaseRequest<
        LeadProfile[]
      >(
        `lead_profile?${profileQuery.toString()}`
      );

    const profile =
      profiles[0] ?? null;

    const region =
      determineLeadRegion(
        lead,
        profile
      );

    /* -------------------------------------------------------
       3. LOAD PHOTOS
    ------------------------------------------------------- */

    const photosQuery =
      new URLSearchParams();

    photosQuery.set(
      "select",
      "id,lead_id,photo_type,storage_path,uploaded_at"
    );

    photosQuery.set(
      "lead_id",
      `eq.${lead.id}`
    );

    photosQuery.set(
      "order",
      "uploaded_at.desc"
    );

    const photos =
      await supabaseRequest<
        LeadPhoto[]
      >(
        `lead_photos?${photosQuery.toString()}`
      );

    console.log(
      `[Patient Portal] Found ${photos.length} photos for lead ${lead.id}`
    );

    const photosWithUrls =
      await Promise.all(
        photos.map(
          async (photo) => {
            if (
              !photo.storage_path
            ) {
              return {
                ...photo,
                signedUrl:
                  null,
              };
            }

            const signedUrl =
              await createSignedPhotoUrl(
                photo.storage_path
              );

            return {
              ...photo,
              signedUrl,
            };
          }
        )
      );

    console.log(
      "[Patient Portal] Photo URL results:",
      photosWithUrls.map(
        (photo) => ({
          id: photo.id,
          storage_path:
            photo.storage_path,
          hasSignedUrl:
            Boolean(
              photo.signedUrl
            ),
        })
      )
    );

    /* -------------------------------------------------------
       4. LOAD LATEST FOLLOW-UP
    ------------------------------------------------------- */

    const followupQuery =
      new URLSearchParams();

    followupQuery.set(
      "select",
      "followup_type,followup_reason,scheduled_for,created_at"
    );

    followupQuery.set(
      "lead_id",
      `eq.${lead.id}`
    );

    followupQuery.set(
      "order",
      "scheduled_for.desc"
    );

    followupQuery.set(
      "limit",
      "1"
    );

    const followups =
      await supabaseRequest<
        Followup[]
      >(
        `followup_queue?${followupQuery.toString()}`
      );

    const followup =
      followups[0] ?? null;

    /* -------------------------------------------------------
       5. LOAD LEAD ACTIONS
    ------------------------------------------------------- */

    const actionsQuery =
      new URLSearchParams();

    actionsQuery.set(
      "select",
      "id,lead_id,action_type,created_at"
    );

    actionsQuery.set(
      "lead_id",
      `eq.${lead.id}`
    );

    actionsQuery.set(
      "order",
      "created_at.desc"
    );

    actionsQuery.set(
      "limit",
      "20"
    );

    const actions =
      await supabaseRequest<
        LeadAction[]
      >(
        `lead_actions?${actionsQuery.toString()}`
      );

    /* -------------------------------------------------------
       6. EXISTING SUMMARY MECHANISM
    ------------------------------------------------------- */

    let summaryPending =
      false;

    if (
      !profile?.ai_summary
    ) {
      const pendingQuery =
        new URLSearchParams();

      pendingQuery.set(
        "select",
        "id"
      );

      pendingQuery.set(
        "lead_id",
        `eq.${lead.id}`
      );

      pendingQuery.set(
        "limit",
        "1"
      );

      const existingRequests =
        await supabaseRequest<
          Array<{
            id: string;
          }>
        >(
          `ai_summary_requests?${pendingQuery.toString()}`
        );

      if (
        existingRequests.length >
        0
      ) {
        summaryPending =
          true;
      } else {
        await supabaseRequest(
          "ai_summary_requests",
          {
            method:
              "POST",
            headers: {
              Prefer:
                "return=minimal",
            },
            body: JSON.stringify(
              {
                lead_id:
                  lead.id,
                clinic_id:
                  lead.clinic_id,
                phone:
                  normalizePhone(
                    lead.phone ??
                      phone
                  ),
              }
            ),
          }
        );

        summaryPending =
          true;
      }
    }

    /* -------------------------------------------------------
       7. RESPONSE
    ------------------------------------------------------- */

    const response =
      NextResponse.json({
        success: true,

        data: {
          lead,
          profile,
          region,
          photos:
            photosWithUrls,
          followup,
          actions,
          summaryPending,
        },
      });

    const accessToken =
      createPatientPortalAccessToken(
        region
      );

    if (accessToken) {
      response.cookies.set(
        PATIENT_PORTAL_ACCESS_COOKIE,
        accessToken,
        {
          httpOnly: true,
          secure:
            process.env.NODE_ENV ===
            "production",
          sameSite:
            "lax",
          path: "/",
          maxAge:
            10 * 60,
        }
      );
    }

    return response;
  } catch (error) {
    console.error(
      "Patient portal API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "We could not load this patient inquiry.",
      },
      {
        status: 500,
      }
    );
  }
}