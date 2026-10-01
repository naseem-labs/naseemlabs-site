import PilotPage from "@/components/private-sales/pilot-page";
import { getRegionalConfig } from "@/lib/private-sales/regional-config";

export default function PilotIndiaPage() {
  return <PilotPage config={getRegionalConfig("in")} />;
}