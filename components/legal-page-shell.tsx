import Link from "next/link";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const BG = "#f7f7f5";
const TEXT = "#111111";
const BORDER = "rgba(0,0,0,0.06)";
const GREEN = "#16a34a";
const SECTION = "px-4 sm:px-6 lg:px-8";

type Props = {
  title: string;
  meta: string;
  children: React.ReactNode;
};

export default function LegalPageShell({ title, meta, children }: Props) {
  return (
    <div
      className={`${inter.className} min-h-screen antialiased overflow-x-hidden flex flex-col`}
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <SiteHeader />
      <main className={`${SECTION} flex-1 py-8 sm:py-12 lg:py-14`}>
        <div className="mx-auto max-w-[720px] min-w-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-medium mb-5 sm:mb-6 transition-colors hover:opacity-80"
            style={{ color: GREEN }}
          >
            ← Back to home
          </Link>
          <article
            className="rounded-2xl border bg-white px-5 py-6 sm:px-8 sm:py-9 shadow-[0_2px_16px_rgba(0,0,0,0.05)] min-w-0"
            style={{ borderColor: BORDER }}
          >
            <h1 className="text-[24px] sm:text-[28px] font-medium tracking-[-0.02em] leading-[1.25] text-[#111]">
              {title}
            </h1>
            <p className="mt-2 text-[12px] sm:text-[13px] text-[#888]">{meta}</p>
            <div className="mt-6 sm:mt-8 legal-prose">{children}</div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
