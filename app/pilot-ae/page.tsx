import PilotPage from "@/components/private-sales/pilot-page";
import { getRegionalConfig } from "@/lib/private-sales/regional-config";

export default function PilotAEPage() {
  return <PilotPage config={getRegionalConfig("ae")} />;
}