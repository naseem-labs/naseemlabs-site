import type { Metadata } from "next";
import { Inter } from "next/font/google";
import OnboardingSignup from "@/components/onboarding/onboarding-signup";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Onboarding — NaseemLabs",
  description:
    "Connect your WhatsApp Business Account for Naseem Labs AI onboarding and Meta embedded signup.",
};

const BG = "#f7f7f5";
const TEXT = "#111111";
const SECTION = "px-4 sm:px-6 lg:px-8";

export default function OnboardingPage() {
  return (
    <div
      className={`${inter.className} min-h-screen antialiased overflow-x-hidden flex flex-col`}
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <div id="fb-root" />
      <SiteHeader />
      <main className={`${SECTION} flex-1 flex flex-col items-center justify-center py-10 sm:py-14 lg:py-16`}>
        <OnboardingSignup />
      </main>
      <SiteFooter />
    </div>
  );
}
