"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import WhatsAppLink from "@/components/whatsapp-link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Demo", href: "/demo" },
  { label: "Clinic Workflow", href: "/benefits" },
  { label: "About", href: "/about" },
] as const;

export type HomeActivePage =
  | "home"
  | "how-it-works"
  | "benefits"
  | "demo"
  | "about"
  | "privacy";

function isActivePage(label: (typeof NAV_LINKS)[number]["label"], activePage: HomeActivePage) {
  if (label === "Home") return activePage === "home";
  if (label === "How It Works") return activePage === "how-it-works";
  if (label === "Demo") return activePage === "demo";
  if (label === "Clinic Workflow") return activePage === "benefits";
  if (label === "About") return activePage === "about";
  return false;
}

export default function HomeHeader({ activePage = "home" }: { activePage?: HomeActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-[#f7f6f2]/95 backdrop-blur-sm border-b border-black/[0.06]">
      <nav className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[72px] flex items-center gap-3 min-w-0">
        <Link
          href="/"
          className="text-[15px] sm:text-[16px] font-semibold tracking-[-0.02em] text-[#111] shrink-0 min-h-[44px] flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          NaseemLabs
        </Link>

        <ul className="hidden lg:flex flex-1 items-center justify-center gap-8 text-[13.5px] text-[#4a4a46]">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`py-2 transition-colors ${
                  isActivePage(item.label, activePage)
                    ? "text-[#111] font-medium"
                    : "hover:text-[#111]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 shrink-0">
          <WhatsAppLink className="inline-flex items-center justify-center min-h-[40px] px-3.5 sm:px-4 py-2 rounded-full bg-[#1a3c34] text-white text-[12.5px] sm:text-[13px] font-medium tracking-[-0.01em] hover:bg-[#14302a] transition-colors whitespace-nowrap">
            Test FolliCore
            <span className="ml-1.5" aria-hidden>
              →
            </span>
          </WhatsAppLink>

          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-black/[0.08]"
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

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-3 rounded-2xl border border-black/[0.08] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-2 py-2">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center min-h-[48px] px-4 rounded-xl text-[15px] ${
                isActivePage(item.label, activePage)
                  ? "bg-[#1a3c34] text-white font-medium"
                  : "text-[#444] hover:bg-black/[0.04]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="lg:hidden fixed inset-0 top-0 bg-black/25 z-[-1]"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
