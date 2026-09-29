import HomeHeader, { type HomeActivePage } from "@/components/home/home-header";

export type ActivePage = HomeActivePage;

export default function SiteHeader({ activePage = "home" }: { activePage?: ActivePage }) {
  return <HomeHeader activePage={activePage} />;
}
