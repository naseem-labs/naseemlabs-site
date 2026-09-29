import Link from "next/link";
import WhatsAppLink from "@/components/whatsapp-link";
import { PRIVACY_PATH, TERMS_PATH } from "@/lib/site-config";

const BORDER = "rgba(0,0,0,0.06)";
const SECTION = "px-4 sm:px-6 lg:px-8";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: PRIVACY_PATH },
  { label: "Terms & Conditions", href: TERMS_PATH },
] as const;

type Props = {
  maxWidthClass?: string;
};

export default function SiteFooter({ maxWidthClass = "max-w-[1100px]" }: Props) {
  return (
    <footer className={`${SECTION} py-6 sm:py-7 border-t`} style={{ borderColor: BORDER }}>
      <div
        className={`mx-auto ${maxWidthClass} flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}
      >
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <span className="font-bold tracking-[0.12em] text-[#111] text-[12px]">NASEEMLABS</span>
          <p className="text-[11px] text-[#888]">© 2026 NaseemLabs. All rights reserved.</p>
        </div>
        <nav
          className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2 text-[11px] text-[#888]"
          aria-label="Footer"
        >
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#111] transition-colors min-h-[44px] inline-flex items-center"
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppLink className="hover:text-[#111] transition-colors min-h-[44px] inline-flex items-center">
            WhatsApp
          </WhatsAppLink>
        </nav>
      </div>
    </footer>
  );
}
