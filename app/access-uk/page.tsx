import type { Metadata } from "next";
import AccessPage from "@/components/private-sales/access-page";
import { getRegionalConfig } from "@/lib/private-sales/regional-config";

export const metadata: Metadata = {
  title: "Clinic Deployment Brief — UK | NaseemLabs",
  description: "Private clinic deployment briefing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UkAccessPage() {
  const config = getRegionalConfig("uk");

  return <AccessPage config={config} />;
}
