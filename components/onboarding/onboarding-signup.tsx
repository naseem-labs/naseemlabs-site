"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

const TEXT = "#111111";
const GREEN = "#16a34a";
const BORDER = "rgba(0,0,0,0.06)";
const FB_BLUE = "#0866ff";
const FB_BLUE_HOVER = "#0654d4";

const FB_APP_ID = "1441438130621249";
const FB_VERSION = "v22.0";

declare global {
  interface Window {
    FB?: {
      init: (params: Record<string, unknown>) => void;
      login: (
        callback: (response: {
          status?: string;
          authResponse?: { accessToken?: string };
        }) => void,
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
        cookie: true,
        xfbml: false,
        version: FB_VERSION,
      });
      window.__fbSdkInitialized = true;
      console.log("[Naseem Labs Onboarding] FB.init succeeded", {
        appId: FB_APP_ID,
        version: FB_VERSION,
        xfbml: false,
        cookie: true,
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

function launchWhatsAppSignup() {
  if (typeof window.FB === "undefined") {
    console.error("[Naseem Labs] Facebook SDK is not loaded yet.");
    alert("Facebook SDK is loading... please try again in 2 seconds.");
    return;
  }

  console.log("[Naseem Labs] Triggering Embedded Signup Flow...");

  window.FB.login(
    function (response) {
      console.log("[Naseem Labs] FB.login response:", response);
      if (response?.status === "connected" && response.authResponse) {
        console.log("[Naseem Labs] Success! Access Token:", response.authResponse.accessToken);
        alert("Success! Your business is now linked to Naseem Labs AI.");
      } else {
        console.warn("[Naseem Labs] Login cancelled or not fully authorized.");
      }
    },
    {
      scope:
        "business_management,whatsapp_business_management,whatsapp_business_messaging",
      extras: {
        feature: "whatsapp_embedded_signup",
        setup_handler: function (data: unknown) {
          console.log("[Naseem Labs] Embedded Signup setup data:", data);
        },
      },
    }
  );
}

export default function OnboardingSignup() {
  useEffect(() => {
    if (window.location.protocol === "file:") {
      console.warn(
        "[Naseem Labs Onboarding] Page opened via file:// — Meta Login requires HTTPS on an allowed domain. Upload this page to your server for App Review."
      );
    }
    loadFacebookSdk();
  }, []);

  return (
    <div className="w-full max-w-[460px] mx-auto min-w-0 flex flex-col gap-4">
      <Link
        href="/"
        className="self-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium border bg-white transition-colors hover:bg-[#fafafa] min-h-[44px]"
        style={{ borderColor: BORDER, color: TEXT }}
      >
        ← Back to Naseem Labs
      </Link>

      <article
        className="rounded-2xl border bg-white px-5 py-7 sm:px-8 sm:py-9 shadow-[0_2px_20px_rgba(0,0,0,0.06)] min-w-0"
        style={{ borderColor: BORDER }}
      >
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase mb-5"
          style={{ backgroundColor: `${GREEN}12`, color: GREEN, border: `1px solid ${GREEN}30` }}
        >
          <Shield className="w-3.5 h-3.5" strokeWidth={2} />
          Embedded signup
        </div>

        <h1 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em] leading-[1.2] text-[#111]">
          Welcome to Naseem Labs AI Onboarding
        </h1>
        <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.65] text-[#555] max-w-[38ch]">
          Connect your WhatsApp Business Account to deploy your AI Agent.
        </p>

        <button
          type="button"
          onClick={launchWhatsAppSignup}
          className="mt-7 w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl text-[15px] font-semibold text-white transition-colors min-h-[48px]"
          style={{ backgroundColor: FB_BLUE }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = FB_BLUE_HOVER;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = FB_BLUE;
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Login with Facebook
        </button>

        <p className="mt-6 text-[12px] sm:text-[13px] leading-[1.6] text-[#888] text-center">
          By continuing, you authorize Naseem Labs to access the permissions required for
          WhatsApp Business onboarding. This page must be opened over{" "}
          <strong className="font-semibold text-[#555]">HTTPS</strong> on a domain allowed in
          your Meta app settings for Login to work.
        </p>
      </article>
    </div>
  );
}
