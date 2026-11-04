import HomePage from "@/components/home/home-page";
import { inter, newsreader } from "@/lib/fonts";

export default function Home() {
  return (
    <div className={inter.className}>
      <HomePage serifClassName={newsreader.className} />
    </div>
  );
}
