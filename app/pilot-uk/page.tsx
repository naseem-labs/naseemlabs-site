import PilotPage from "@/components/private-sales/pilot-page";
import { getRegionalConfig } from "@/lib/private-sales/regional-config";

export default function PilotUKPage() {
  return <PilotPage config={getRegionalConfig("uk")} />;
}