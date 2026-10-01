import MonthlyPage from "@/components/private-sales/monthly-page";
import { getRegionalConfig } from "@/lib/private-sales/regional-config";

export default function MonthlyUKPage() {
  return <MonthlyPage config={getRegionalConfig("uk")} />;
}