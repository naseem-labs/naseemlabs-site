import type { Metadata } from "next";
import AccessPage from "@/components/private-sales/access-page";
import { getRegionalConfig } from "@/lib/private-sales/regional-config";

export const metadata: Metadata = {
  title: "Clinic Deployment Brief — India | NaseemLabs",
  description: "Private clinic deployment briefing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IndiaAccessPage() {
  const config = getRegionalConfig("in");

  return <AccessPage config={config} />;
}