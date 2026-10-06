import { createHmac, timingSafeEqual } from "node:crypto";

export type PatientPortalRegion = "in" | "uk" | "ae";

export const PATIENT_PORTAL_ACCESS_COOKIE =
  "naseemlabs_patient_portal_access";

const TOKEN_MAX_AGE_SECONDS = 10 * 60;

function getSigningSecret() {
  return (
    process.env.ACCESS_PASSWORD ||
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    null
  );
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function createPatientPortalAccessToken(
  region: PatientPortalRegion
) {
  const secret = getSigningSecret();

  if (!secret) {
    return null;
  }

  const expiresAt = Math.floor(Date.now() / 1000) + TOKEN_MAX_AGE_SECONDS;
  const payload = `${region}.${expiresAt}`;

  return `${payload}.${sign(payload, secret)}`;
}

export function hasPatientPortalAccess(
  token: string | undefined,
  expectedRegion: PatientPortalRegion
) {
  const secret = getSigningSecret();

  if (!secret || !token) {
    return false;
  }

  const [region, expiresAtText, signature] = token.split(".");
  const expiresAt = Number(expiresAtText);

  if (
    region !== expectedRegion ||
    !Number.isSafeInteger(expiresAt) ||
    expiresAt < Math.floor(Date.now() / 1000) ||
    !signature
  ) {
    return false;
  }

  const expectedSignature = sign(`${region}.${expiresAt}`, secret);
  const actualBuffer = Buffer.from(signature, "utf8");
  const expectedBuffer = Buffer.from(expectedSignature, "utf8");

  return (
    actualBuffer.length === expectedBuffer.length &&
    timingSafeEqual(actualBuffer, expectedBuffer)
  );
}
