"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Shield } from "lucide-react";

const TEXT = "#111111";
const GREEN = "#1a3c34";
const BORDER = "rgba(26,28,24,0.10)";
const FB_BLUE = "#0866ff";
const FB_BLUE_HOVER = "#0654d4";

const FB_APP_ID = "1441438130621249";
const FB_VERSION = "v25.0";
const FB_CONFIG_ID = "1703604087528258";

type EmbeddedSignupMessage = {
  type?: string;
  event?: string;
  data?: {
    phone_number_id?: string;
    waba_id?: string;
    business_id?: string;
    current_step?: string;
    error_message?: string;
    error_code?: string;
  };
};

type OnboardingAssets = {
  authorizationCode: string | null;
  wabaId: string | null;
  phoneNumberId: string | null;
  businessId: string | null;
};

type FbLoginResponse = {
  authResponse?: { code?: string };
  status?: string;
};

type TokenExchangeResponse = {
  success?: boolean;
  error?: string;
};

type FlowStatus = "idle" | "launching" | "exchanging" | "error";

declare global {
  interface Window {
    FB?: {
      init: (params: Record<string, unknown>) => void;
      login: (
        callback: (response: FbLoginResponse) => void,
        options: Record<string, unknown>
      ) => void;
    };
    fbAsyncInit?: () => void;
    __fbSdkInitialized?: boolean;
    __fbSdkInitError?: unknown;
  }
}

function loadFacebookSdk() {
  if (typeof window === "undefined") return;

  window.__fbSdkInitialized = false;
  window.fbAsyncInit = function () {
    console.log("[Naseem Labs Onboarding] fbAsyncInit started");
    try {
      window.FB?.init({
        appId: FB_APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: FB_VERSION,
      });
      window.__fbSdkInitialized = true;
      console.log("[Naseem Labs Onboarding] FB.init succeeded", {
        appId: FB_APP_ID,
        version: FB_VERSION,
        autoLogAppEvents: true,
        xfbml: true,
      });
    } catch (err) {
      console.error("[Naseem Labs Onboarding] FB.init threw an error:", err);
      window.__fbSdkInitError = err;
    }
  };

  if (document.getElementById("facebook-jssdk")) {
    if (window.FB && window.fbAsyncInit) window.fbAsyncInit();
    return;
  }

  const script = document.createElement("script");
  script.id = "facebook-jssdk";
  script.src = "https://connect.facebook.net/en_US/sdk.js";
  script.async = true;
  script.defer = true;
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);
}

export default function OnboardingSignup({
  serifClassName = "",
}: {
  serifClassName?: string;
}) {
  const [assets, setAssets] = useState<OnboardingAssets>({
    authorizationCode: null,
    wabaId: null,
    phoneNumberId: null,
    businessId: null,
  });
  const [flowStatus, setFlowStatus] = useState<FlowStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [connectionSaved, setConnectionSaved] = useState(false);

  const exchangeAuthorizationCode = useCallback(
    (
      code: string,
      businessId: string,
      wabaId: string,
      phoneNumberId: string
    ) => {
    setFlowStatus("exchanging");
    setErrorMessage(null);

    void (async () => {
      try {
        const exchangeResponse = await fetch("/api/whatsapp/exchange", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
            business_id: businessId,
            waba_id: wabaId,
            phone_number_id: phoneNumberId,
          }),
        });

        const exchangeData =
          (await exchangeResponse.json()) as TokenExchangeResponse;

        if (!exchangeResponse.ok || !exchangeData.success) {
          setFlowStatus("error");
          setErrorMessage(
            exchangeData.error ??
              "Could not save the WhatsApp connection. Please try again."
          );
          return;
        }

        setAssets({
          authorizationCode: null,
          wabaId: null,
          phoneNumberId: null,
          businessId: null,
        });
        setConnectionSaved(true);
        setFlowStatus("idle");
      } catch (err) {
        console.error(
          "[Naseem Labs Onboarding] token exchange request failed:",
          err
        );
        setFlowStatus("error");
        setErrorMessage(
          "Could not reach the token exchange service. Please try again."
        );
      }
    })();
    },
    []
  );

  const fbLoginCallback = useCallback(
    (response: FbLoginResponse) => {
      if (response.authResponse) {
        const code = response.authResponse.code;

        setAssets((prev) => ({
          ...prev,
          authorizationCode: code ?? null,
        }));

        if (code) return;

        setFlowStatus("error");
        setErrorMessage(
          "Facebook Login succeeded but no authorization code was returned."
        );
        return;
      }

      setFlowStatus("idle");
      setErrorMessage(
        "Facebook Login was cancelled or did not complete. Please try again."
      );
    },
    []
  );

  const launchWhatsAppSignup = useCallback(() => {
    if (typeof window.FB === "undefined") {
      console.error(
        "[Naseem Labs Onboarding] Facebook SDK is not loaded yet."
      );
      setErrorMessage(
        "Facebook SDK is loading... please try again in 2 seconds."
      );
      return;
    }

    if (!FB_CONFIG_ID) {
      console.error(
        "[Naseem Labs Onboarding] Missing configuration ID. Set NEXT_PUBLIC_FB_CONFIG_ID to your Facebook Login for Business configuration ID."
      );
      setErrorMessage(
        "Missing Facebook Login configuration. Please contact support."
      );
      return;
    }

    console.log(
      "[Naseem Labs Onboarding] Launching Embedded Signup v4..."
    );

    setErrorMessage(null);
    setConnectionSaved(false);
    setAssets((prev) => ({
      ...prev,
      authorizationCode: null,
      wabaId: null,
      phoneNumberId: null,
      businessId: null,
    }));
    setFlowStatus("launching");

    window.FB.login(fbLoginCallback, {
      config_id: FB_CONFIG_ID,
      response_type: "code",
      override_default_response_type: true,
      extras: {
        setup: {},
        sessionInfoVersion: "3",
      },
    });
  }, [fbLoginCallback]);

  useEffect(() => {
    if (window.location.protocol === "file:") {
      console.warn(
        "[Naseem Labs Onboarding] Page opened via file:// — Meta Login requires HTTPS on an allowed domain. Upload this page to your server for App Review."
      );
    }

    loadFacebookSdk();
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.endsWith("facebook.com")) return;

      try {
        const data = (
          typeof event.data === "string"
            ? JSON.parse(event.data)
            : event.data
        ) as EmbeddedSignupMessage;

        if (data.type === "WA_EMBEDDED_SIGNUP") {
          if (
            data.data?.waba_id ||
            data.data?.phone_number_id ||
            data.data?.business_id
          ) {
            setAssets((prev) => ({
              ...prev,
              wabaId:
                data.data?.waba_id ?? prev.wabaId,
              phoneNumberId:
                data.data?.phone_number_id ??
                prev.phoneNumberId,
              businessId:
                data.data?.business_id ??
                prev.businessId,
            }));
          }
        }
      } catch {
        console.error("[Naseem Labs Onboarding] invalid signup message.");
      }
    };

    window.addEventListener("message", handleMessage);

    return () =>
      window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (
      connectionSaved ||
      (flowStatus !== "idle" && flowStatus !== "launching") ||
      !assets.authorizationCode ||
      !assets.businessId ||
      !assets.wabaId ||
      !assets.phoneNumberId
    ) {
      return;
    }

    const {
      authorizationCode,
      businessId,
      wabaId,
      phoneNumberId,
    } = assets;

    queueMicrotask(() => {
      void exchangeAuthorizationCode(
        authorizationCode,
        businessId,
        wabaId,
        phoneNumberId
      );
    });
  }, [assets, connectionSaved, exchangeAuthorizationCode, flowStatus]);

  const isConnected = connectionSaved;
  const isBusy =
    flowStatus === "launching" || flowStatus === "exchanging";

  return (
    <div className="w-full max-w-[520px] mx-auto min-w-0 flex flex-col gap-5">
      <Link
        href="/"
        className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium border bg-white transition-colors hover:bg-[#fafafa] min-h-[46px]"
        style={{
          borderColor: BORDER,
          color: TEXT,
        }}
      >
        ← Back to Naseem Labs
      </Link>

      {isConnected ? (
        <article
          className="rounded-[16px] border bg-white px-6 py-8 sm:px-9 sm:py-10 shadow-[0_12px_40px_rgba(26,28,24,0.08)] min-w-0"
          style={{ borderColor: BORDER }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase mb-5"
            style={{
              backgroundColor: `${GREEN}12`,
              color: GREEN,
              border: `1px solid ${GREEN}30`,
            }}
          >
            <CheckCircle2
              className="w-3.5 h-3.5"
              strokeWidth={2}
            />
            Connected
          </div>

          <h1 className={`${serifClassName} text-[30px] sm:text-[38px] font-medium tracking-[-0.03em] leading-[1.08] text-[#111]`}>
            Your clinic is connected.
          </h1>

          <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.65] text-[#555] max-w-[38ch]">
            Everything is set up successfully. We&apos;re preparing the next step for your clinic.
          </p>

          <div
            className="mt-7 inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-semibold"
            style={{
              backgroundColor: `${GREEN}12`,
              color: GREEN,
              border: `1px solid ${GREEN}30`,
            }}
          >
            Connection complete
          </div>
        </article>
      ) : (
        <article
          className="rounded-[16px] border bg-white px-6 py-8 sm:px-9 sm:py-10 shadow-[0_12px_40px_rgba(26,28,24,0.08)] min-w-0"
          style={{ borderColor: BORDER }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase mb-5"
            style={{
              backgroundColor: `${GREEN}12`,
              color: GREEN,
              border: `1px solid ${GREEN}30`,
            }}
          >
            <Shield
              className="w-3.5 h-3.5"
              strokeWidth={2}
            />
            EMBEDDED SIGNUP
          </div>

          <h1 className={`${serifClassName} text-[30px] sm:text-[38px] font-medium tracking-[-0.03em] leading-[1.08] text-[#111]`}>
            Welcome. Let’s connect your clinic.
          </h1>

          <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.65] text-[#555] max-w-[38ch]">
            Connect your WhatsApp Business Account to securely set up your clinic on PREET.
          </p>

          <button
            type="button"
            onClick={launchWhatsAppSignup}
            disabled={isBusy}
            className="mt-7 w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl text-[15px] font-semibold text-white transition-colors min-h-[48px] disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              backgroundColor: FB_BLUE,
            }}
            onMouseEnter={(e) => {
              if (isBusy) return;
              e.currentTarget.style.backgroundColor =
                FB_BLUE_HOVER;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                FB_BLUE;
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>

            {isBusy ? "Connecting your WhatsApp Business Account…" : "Connect WhatsApp Business"}
          </button>

          {errorMessage ? (
            <p className="mt-4 text-[13px] leading-[1.6] text-[#dc2626] text-center">
              {errorMessage}
            </p>
          ) : null}

          <p className="mt-6 text-[12px] sm:text-[13px] leading-[1.6] text-[#888] text-center">
            By continuing, you authorize NaseemLabs to access the permissions required for
            WhatsApp Business onboarding. This page must be opened over HTTPS on a domain allowed
            in your Meta app settings.
          </p>
        </article>
      )}
    </div>
  );
}
