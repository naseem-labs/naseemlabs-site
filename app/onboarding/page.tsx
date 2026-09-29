import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import OnboardingSignup from "@/components/onboarding/onboarding-signup";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Onboarding — NaseemLabs",
  description:
    "Connect your WhatsApp Business Account for Naseem Labs AI onboarding and Meta embedded signup.",
};

const BG = "#f7f6f2";
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
      <main
        className={`${SECTION} relative isolate flex-1 flex flex-col items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20`}
        style={{
          background:
            "radial-gradient(circle at 0% 42%, rgba(102,196,172,0.42), transparent 31%), radial-gradient(circle at 100% 43%, rgba(153,221,202,0.34), transparent 32%), #f7f6f2",
        }}
      >
        <div className="relative z-10 w-full">
          <OnboardingSignup serifClassName={newsreader.className} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
