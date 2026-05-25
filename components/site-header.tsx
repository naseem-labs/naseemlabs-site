"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import WhatsAppIcon from "@/components/whatsapp-icon";
import WhatsAppLink from "@/components/whatsapp-link";

const GREEN = "#16a34a";
const BORDER = "rgba(0,0,0,0.06)";
const SECTION = "px-4 sm:px-6 lg:px-8";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Demo", href: "/demo" },
  { label: "Benefits", href: "/benefits" },
  { label: "About", href: "/about" },
] as const;

export type ActivePage = "home" | "how-it-works" | "demo" | "benefits" | "about";

type Props = {
  activePage?: ActivePage;
};

export default function SiteHeader({ activePage = "home" }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (label: string) => {
    if (label === "Home") return activePage === "home";
    if (label === "How It Works") return activePage === "how-it-works";
    if (label === "Demo") return activePage === "demo";
    if (label === "Benefits") return activePage === "benefits";
    if (label === "About") return activePage === "about";
    return false;
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className={`sticky top-0 z-50 ${SECTION} pt-3 pb-3 bg-[#f7f7f5]/95 backdrop-blur-sm`}>
      <nav
        className="relative z-[51] mx-auto max-w-[1100px] flex items-center justify-between gap-2 px-3 sm:px-5 py-2.5 rounded-full border bg-white/92 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
        style={{ borderColor: BORDER }}
      >
        <Link
          href="/"
          className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] shrink-0 text-[#111] min-h-[44px] flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          NASEEMLABS
        </Link>

        <ul className="hidden lg:flex items-center gap-5 text-[13px] text-[#555]">
          {NAV_LINKS.map((item) => (
            <li key={item.label} className="relative">
              <Link
                href={item.href}
                className={`transition-colors py-1 ${isActive(item.label) ? "text-[#111] font-medium" : "hover:text-[#111]"}`}
              >
                {item.label}
              </Link>
              {isActive(item.label) && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                  style={{ backgroundColor: GREEN }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <WhatsAppLink
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] sm:text-[12px] font-medium border transition-colors hover:bg-[#16a34a]/5 min-h-[40px]"
            style={{ borderColor: GREEN, color: GREEN }}
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            Chat on WhatsApp
          </WhatsAppLink>

          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors hover:bg-black/[0.04]"
            style={{ borderColor: BORDER }}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="w-5 h-5 text-[#333]" strokeWidth={1.75} />
            ) : (
              <Menu className="w-5 h-5 text-[#333]" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`relative z-[51] lg:hidden mx-auto max-w-[1100px] overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-[420px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div
          className="rounded-2xl border bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-2 py-2"
          style={{ borderColor: BORDER }}
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center min-h-[48px] px-4 rounded-xl text-[15px] transition-colors ${
                isActive(item.label)
                  ? "bg-[#111] text-white font-medium"
                  : "text-[#444] hover:bg-black/[0.04]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppLink
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 min-h-[48px] mx-1 mt-1 mb-1 rounded-xl text-[14px] font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: GREEN }}
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat on WhatsApp
          </WhatsAppLink>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="lg:hidden fixed inset-0 top-0 bg-black/25 z-40"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
