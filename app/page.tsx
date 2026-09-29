import { Inter, Newsreader } from "next/font/google";
import HomePage from "@/components/home/home-page";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <div className={inter.className}>
      <HomePage serifClassName={newsreader.className} />
    </div>
  );
}
