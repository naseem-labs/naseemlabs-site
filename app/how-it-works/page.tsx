import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HowItWorksSection from "@/components/how-it-works-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "How It Works — NaseemLabs",
  description:
    "See how NaseemLabs handles hair transplant clinic inquiries from first WhatsApp message to consultation booking.",
};

const BG = "#f7f6f2";
const TEXT = "#111111";
export default function HowItWorksPage() {
  return (
    <div
      className={`${inter.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <SiteHeader activePage="how-it-works" />
      <main>
        <HowItWorksSection />
      </main>
      <SiteFooter />
    </div>
  );
}
